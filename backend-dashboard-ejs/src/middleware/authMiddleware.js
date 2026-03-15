const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/env");
const Admin = require("../models/Admin");

const authMiddleware = async (req, res, next) => {
  try {
    const token =
      req.cookies?.token ||
      req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.redirect("/admin/login");
    }

    const decoded = jwt.verify(token, JWT_SECRET);

    const admin = await Admin.findById(decoded.id);

    if (!admin) {
      return res.redirect("/admin/login");
    }

    req.admin = admin;

    next();
  } catch (error) {
    return res.redirect("/admin/login");
  }
};

module.exports = authMiddleware;