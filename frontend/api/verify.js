// Vercel Serverless Function: /api/verify
// Verifies Admin Security Token when unlocking the CMS Gate

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Admin-Token');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const adminToken = process.env.ADMIN_TOKEN || 'rahasia-fauzan-99';
  const providedToken = req.headers['x-admin-token'];

  if (!providedToken || providedToken !== adminToken) {
    return res.status(401).json({
      valid: false,
      error: 'Invalid Admin Security Token'
    });
  }

  return res.status(200).json({ valid: true });
}
