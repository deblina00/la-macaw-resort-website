const express = require("express");
const router = express.Router();

const {
  loginPage,
  loginAdmin,
  logoutAdmin
} = require("../../controllers/adminAuthController");

router.get("/login", loginPage);
router.post("/login", loginAdmin);
router.get("/logout", logoutAdmin);

module.exports = router;