// Vercel Serverless Function: /api/portfolio
// Connects your React Live CMS directly to GitHub Gist (Supports large JSON & Base64 images via raw_url)

export default async function handler(req, res) {
  // Enable CORS & prevent caching
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Admin-Token');
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const gistId = (process.env.GIST_ID || '').trim();
  const githubToken = (process.env.GITHUB_TOKEN || '').trim();
  const adminToken = (process.env.ADMIN_TOKEN || 'rahasia-fauzan-99').trim();

  if (!gistId || !githubToken) {
    return res.status(500).json({
      error: 'GIST_ID or GITHUB_TOKEN is not configured in Vercel Environment Variables.'
    });
  }

  // GET: Fetch portfolio data from GitHub Gist for all visitors (Desktop & Mobile)
  if (req.method === 'GET') {
    try {
      const response = await fetch(`https://api.github.com/gists/${gistId}?t=${Date.now()}`, {
        headers: {
          Authorization: `Bearer ${githubToken}`,
          Accept: 'application/vnd.github+json',
          'X-GitHub-Api-Version': '2022-11-28',
          'Cache-Control': 'no-cache'
        }
      });

      if (!response.ok) {
        return res.status(response.status).json({
          error: `Failed fetching from GitHub Gist (HTTP ${response.status})`
        });
      }

      const gistData = await response.json();
      const fileObj =
        gistData.files?.['portfolio_data.json'] ||
        Object.values(gistData.files || {})[0];

      if (!fileObj) {
        return res.status(404).json({
          error: 'portfolio_data.json not found inside your GitHub Gist.'
        });
      }

      let rawJsonString = fileObj.content;

      // IMPORTANT FIX: If portfolio_data.json has Base64 images (> 1 MB), GitHub sets fileObj.truncated = true
      // and cuts off fileObj.content. We must fetch fileObj.raw_url to get the complete untruncated JSON!
      if (fileObj.truncated || !rawJsonString) {
        if (!fileObj.raw_url) {
          return res.status(500).json({
            error: 'Gist file is truncated and raw_url is unavailable.'
          });
        }
        const rawRes = await fetch(`${fileObj.raw_url}?t=${Date.now()}`, {
          headers: {
            Authorization: `Bearer ${githubToken}`,
            'Cache-Control': 'no-cache'
          }
        });
        if (!rawRes.ok) {
          return res.status(rawRes.status).json({
            error: `Failed fetching raw_url from Gist (HTTP ${rawRes.status})`
          });
        }
        rawJsonString = await rawRes.text();
      }

      let parsedContent;
      try {
        parsedContent = JSON.parse(rawJsonString);
      } catch (parseErr) {
        // Fallback to raw_url if content was partially truncated without flag
        if (fileObj.raw_url) {
          const rawRes = await fetch(`${fileObj.raw_url}?t=${Date.now()}`);
          const fullText = await rawRes.text();
          parsedContent = JSON.parse(fullText);
        } else {
          throw parseErr;
        }
      }

      return res.status(200).json(parsedContent);
    } catch (err) {
      return res.status(500).json({
        error: `Server error reading Gist: ${err.message}`
      });
    }
  }

  // PUT: Save updated portfolio data from Live CMS to GitHub Gist (Admin Only)
  if (req.method === 'PUT') {
    const providedToken = (req.headers['x-admin-token'] || '').trim();
    if (providedToken !== adminToken) {
      return res.status(401).json({
        error: 'Unauthorized: Invalid Admin Security Token (X-Admin-Token).'
      });
    }

    try {
      const bodyData =
        typeof req.body === 'string' ? JSON.parse(req.body) : req.body;

      if (!bodyData || !bodyData.profile) {
        return res.status(400).json({
          error: 'Invalid portfolio JSON payload.'
        });
      }

      const existingFilename = 'portfolio_data.json';

      const response = await fetch(`https://api.github.com/gists/${gistId}`, {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${githubToken}`,
          Accept: 'application/vnd.github+json',
          'Content-Type': 'application/json',
          'X-GitHub-Api-Version': '2022-11-28'
        },
        body: JSON.stringify({
          files: {
            [existingFilename]: {
              content: JSON.stringify(bodyData, null, 2)
            }
          }
        })
      });

      if (!response.ok) {
        const errText = await response.text();
        return res.status(response.status).json({
          error: `Failed updating GitHub Gist (HTTP ${response.status}): ${errText}`
        });
      }

      return res.status(200).json({
        status: 'saved',
        message: 'Portfolio data permanently saved to GitHub Gist via Vercel API!'
      });
    } catch (err) {
      return res.status(500).json({
        error: `Server error updating Gist: ${err.message}`
      });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
