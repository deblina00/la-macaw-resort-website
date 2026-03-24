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

// multiple uploads
const multiUpload = uploadOffers.fields([
  { name: "popupImage", maxCount: 1 },
  { name: "branchImages", maxCount: 5 },
]);

router.get("/", auth, listOffers);

router.get("/create", auth, createOfferPage);
router.post("/create", auth, multiUpload, createOffer);

router.get("/edit/:id", auth, editOfferPage);
router.post("/edit/:id", auth, multiUpload, updateOffer);

router.get("/delete/:id", auth, deleteOffer);

module.exports = router;
