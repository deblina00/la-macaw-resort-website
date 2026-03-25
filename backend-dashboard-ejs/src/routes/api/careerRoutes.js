const express = require("express");
const router = express.Router();
const { uploadCV } = require("../../middleware/uploadMiddleware");
const {
  applyCareer,
  getCareers,
} = require("../../controllers/careerController");

router.get("/", getCareers); // NEW
router.post(
  "/apply",
  (req, res, next) => {
    uploadCV.single("cv")(req, res, function (err) {
      if (err) {
        return res.status(400).json({
          success: false,
          message: err.message,
        });
      }
      next();
    });
  },
  applyCareer,
);

module.exports = router;
