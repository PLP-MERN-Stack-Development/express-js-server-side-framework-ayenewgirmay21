// middleware/auth.js
function auth(req, res, next) {
  const apiKey = req.header("x-api-key");

  if (!apiKey) {
    return res.status(401).json({ error: "Access denied. No API key provided." });
  }

  if (apiKey !== "12345") { // Example key (you can change it)
    return res.status(403).json({ error: "Invalid API key." });
  }

  next(); // authentication passed
}

module.exports = auth;
