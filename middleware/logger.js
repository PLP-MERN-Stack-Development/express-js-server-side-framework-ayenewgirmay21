// middleware/logger.js
function logger(req, res, next) {
  const time = new Date().toLocaleString();
  console.log(`[${time}] ${req.method} ${req.originalUrl}`);
  next(); // move to the next middleware or route handler
}

module.exports = logger;
