const express = require("express");
const router = express.Router();
const multer = require("multer");

const { applyCareer } = require("../../controllers/careerController");

const upload = multer({ storage: multer.memoryStorage() });

router.post("/apply", upload.single("cv"), applyCareer);

module.exports = router;