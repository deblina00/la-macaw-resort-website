const express = require("express");
const router = express.Router();

const auth = require("../../middleware/authMiddleware");
const { listEnquiries } = require("../../controllers/enquiryController");

router.get("/", auth, listEnquiries);

module.exports = router;