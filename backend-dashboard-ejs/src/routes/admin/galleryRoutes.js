const express = require("express");
const router = express.Router();

const auth = require("../../middleware/authMiddleware");
const { uploadGallery } = require("../../middleware/uploadMiddleware");

const {
  listGallery,
  uploadPage,
  uploadImage,
  deleteImage
} = require("../../controllers/galleryController");

router.get("/", auth, listGallery);

router.get("/upload", auth, uploadPage);
router.post("/upload", auth, uploadGallery.single("image"), uploadImage);

router.get("/delete/:id", auth, deleteImage);

module.exports = router;