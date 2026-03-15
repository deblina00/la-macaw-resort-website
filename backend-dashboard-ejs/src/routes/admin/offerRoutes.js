const express = require("express");
const router = express.Router();

const auth = require("../../middleware/authMiddleware");
const { uploadOffers } = require("../../middleware/uploadMiddleware");

const {
  listOffers,
  createOfferPage,
  createOffer,
  editOfferPage,
  updateOffer,
  deleteOffer,
} = require("../../controllers/offerController");

router.get("/", auth, listOffers);

router.get("/create", auth, createOfferPage);
router.post("/create", auth, uploadOffers.single("image"), createOffer);

router.get("/edit/:id", auth, editOfferPage);
router.post("/edit/:id", auth, uploadOffers.single("image"), updateOffer);

router.get("/delete/:id", auth, deleteOffer);

module.exports = router;
