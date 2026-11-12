// Vercel Serverless Function: /api/portfolio
// Connects your React Live CMS directly to GitHub Gist (100% Free & Permanent Database)

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Admin-Token');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const gistId = process.env.GIST_ID;
  const githubToken = process.env.GITHUB_TOKEN;
  const adminToken = process.env.ADMIN_TOKEN || 'rahasia-fauzan-99';

  if (!gistId || !githubToken) {
    return res.status(500).json({
      error: 'GIST_ID or GITHUB_TOKEN is not configured in Vercel Environment Variables.'
    });
  }

  // GET: Fetch portfolio data from GitHub Gist for all visitors
  if (req.method === 'GET') {
    try {
      const response = await fetch(`https://api.github.com/gists/${gistId}`, {
        headers: {
          Authorization: `Bearer ${githubToken}`,
          Accept: 'application/vnd.github+json',
          'X-GitHub-Api-Version': '2022-11-28'
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

      if (!fileObj || !fileObj.content) {
        return res.status(404).json({
          error: 'portfolio_data.json not found inside your GitHub Gist.'
        });
      }

      const parsedContent = JSON.parse(fileObj.content);
      res.setHeader('Cache-Control', 'no-store, max-age=0');
      return res.status(200).json(parsedContent);
    } catch (err) {
      return res.status(500).json({
        error: `Server error reading Gist: ${err.message}`
      });
    }
  }

  // PUT: Save updated portfolio data from Live CMS to GitHub Gist (Admin Only)
  if (req.method === 'PUT') {
    const providedToken = req.headers['x-admin-token'];
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
            'portfolio_data.json': {
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
