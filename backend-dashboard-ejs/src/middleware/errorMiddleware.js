const errorMiddleware = (err, req, res, next) => {
  console.error(err);

  if (req.originalUrl.startsWith("/api")) {
    return res.status(500).json({
      success: false,
      message: err.message || "Server Error"
    });
  }

  res.status(500).render("error", {
    message: err.message || "Server Error"
  });
};

module.exports = errorMiddleware;