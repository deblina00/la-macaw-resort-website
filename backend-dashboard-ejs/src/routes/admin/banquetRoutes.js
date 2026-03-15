const express = require("express");
const router = express.Router();

const auth = require("../../middleware/authMiddleware");
const { uploadBanquets } = require("../../middleware/uploadMiddleware");

const {
  listBanquets,
  createBanquetPage,
  createBanquet,
  editBanquetPage,
  updateBanquet,
  deleteBanquet,
} = require("../../controllers/banquetController");

router.get("/", auth, listBanquets);

router.get("/create", auth, createBanquetPage);
router.post("/create", auth, uploadBanquets.array("images"), createBanquet);

router.get("/edit/:id", auth, editBanquetPage);
router.post("/edit/:id", auth, uploadBanquets.array("images"), updateBanquet);

router.get("/delete/:id", auth, deleteBanquet);

module.exports = router;
