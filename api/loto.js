export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 's-maxage=300');

  const month = req.query.month || '2026-04';

  try {
    const r = await fetch(
      `https://lotobonheur.ci/api/v1/results/draws?month=${month}`,
      {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Linux; Android 13) Chrome/120.0.0.0',
          'Accept': 'application/json',
          'Referer': 'https://lotobonheur.ci/resultats'
        },
        signal: AbortSignal.timeout(8000)
      }
    );
    if (!r.ok) throw new Error(`HTTP ${r.status}`);
    const data = await r.json();
    return res.status(200).json({ success: true, data });
  } catch (err) {
    return res.status(503).json({ success: false, error: err.message });
  }
}
