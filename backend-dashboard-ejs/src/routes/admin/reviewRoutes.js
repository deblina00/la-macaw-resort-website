const express = require("express");
const router = express.Router();

const auth = require("../../middleware/authMiddleware");

const {
  listReviews,
  createReviewPage,
  createReview,
  editReviewPage,
  updateReview,
  deleteReview
} = require("../../controllers/reviewController");

router.get("/", auth, listReviews);

router.get("/create", auth, createReviewPage);
router.post("/create", auth, createReview);

router.get("/edit/:id", auth, editReviewPage);
router.post("/edit/:id", auth, updateReview);

router.get("/delete/:id", auth, deleteReview);

module.exports = router;