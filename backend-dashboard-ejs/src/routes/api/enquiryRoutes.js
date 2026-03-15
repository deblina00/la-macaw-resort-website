const express = require("express");
const router = express.Router();
const {
  guestEnquiry,
  b2bEnquiry,
  eventEnquiry
} = require("../../controllers/enquiryController");

router.post("/guest", guestEnquiry);
router.post("/b2b", b2bEnquiry);
router.post("/event", eventEnquiry);

module.exports = router;