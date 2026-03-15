const adminMiddleware = (req, res, next) => {
  if (!req.admin) {
    return res.redirect("/admin/login");
  }

  if (req.admin.role !== "admin" && req.admin.role !== "superadmin") {
    return res.status(403).send("Access denied");
  }

  next();
};

module.exports = adminMiddleware;