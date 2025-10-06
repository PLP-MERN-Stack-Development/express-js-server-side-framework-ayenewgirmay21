function errorHandler(err, req, res, next) {
  const status = err.statusCode || 500; // default to 500 if not set
  res.status(status).json({
    error: err.name || "InternalServerError",
    message: err.message || "Something went wrong",
  });
}

module.exports = errorHandler;
