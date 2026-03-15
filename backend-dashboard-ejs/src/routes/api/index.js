const express = require("express");
const router = express.Router();

const roomsRoutes = require("./roomsRoutes");
const branchesRoutes = require("./branchesRoutes");
const offersRoutes = require("./offersRoutes");
const banquetsRoutes = require("./banquetsRoutes");
const galleryRoutes = require("./galleryRoutes");
const enquiryRoutes = require("./enquiryRoutes");
const reviewsRoutes = require("./reviewsRoutes");
const eventRoutes = require("./eventRoutes");

router.use("/rooms", roomsRoutes);
router.use("/branches", branchesRoutes);
router.use("/offers", offersRoutes);
router.use("/banquets", banquetsRoutes);
router.use("/gallery", galleryRoutes);
router.use("/enquiry", enquiryRoutes);
router.use("/reviews", reviewsRoutes);
router.use("/events", eventRoutes);

module.exports = router;