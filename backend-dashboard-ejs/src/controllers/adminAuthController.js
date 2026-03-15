const bcrypt = require("bcryptjs");
const Admin = require("../models/Admin");
const generateToken = require("../utils/generateToken");

exports.loginPage = (req, res) => {
  res.render("auth/login", {
    layout: false,
    title: "Admin Login",
  });
};

exports.loginAdmin = async (req, res) => {
  try {
    const { username, password } = req.body;

    const admin = await Admin.findOne({ username });

    if (!admin) {
      return res.render("auth/login", {
        layout: false,
        error: "Invalid credentials",
      });
    }

    const isMatch = await bcrypt.compare(password, admin.password);

    if (!isMatch) {
      return res.render("auth/login", {
        layout: false,
        error: "Invalid credentials",
      });
    }

    const token = generateToken({ id: admin._id });

    res.cookie("token", token, {
      httpOnly: true,
    });

    res.redirect("/admin/dashboard");
  } catch (error) {
    res.render("auth/login", {
      layout: false,
      error: "Login failed",
    });
  }
};

exports.logoutAdmin = (req, res) => {
  res.clearCookie("token");
  res.redirect("/admin/login");
};
