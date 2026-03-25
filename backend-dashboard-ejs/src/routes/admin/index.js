const express = require("express");
const router = express.Router();

const authRoutes = require("./authRoutes");
const dashboardRoutes = require("./dashboardRoutes");
const branchRoutes = require("./branchRoutes");
const roomRoutes = require("./roomRoutes");
const offerRoutes = require("./offerRoutes");
const banquetRoutes = require("./banquetRoutes");
const galleryRoutes = require("./galleryRoutes");
const enquiryRoutes = require("./enquiryRoutes");
const reviewRoutes = require("./reviewRoutes");
const eventRoutes = require("./eventRoutes");
const careerRoutes = require("./careerRoutes");

router.use("/", authRoutes);
router.use("/dashboard", dashboardRoutes);
router.use("/branches", branchRoutes);
router.use("/rooms", roomRoutes);
router.use("/offers", offerRoutes);
router.use("/banquets", banquetRoutes);
router.use("/gallery", galleryRoutes);
router.use("/enquiries", enquiryRoutes);
router.use("/reviews", reviewRoutes);
router.use("/events", eventRoutes);
router.use("/careers", careerRoutes);

module.exports = router;
