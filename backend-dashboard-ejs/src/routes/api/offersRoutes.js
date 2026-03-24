const express = require("express");
const router = express.Router();
const {
  getOffers,
  getPopupOffer,
} = require("../../controllers/offerController");

router.get("/", getOffers);
router.get("/popup", getPopupOffer);

module.exports = router;