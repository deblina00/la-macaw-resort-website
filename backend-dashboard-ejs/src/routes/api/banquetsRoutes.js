const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Banquet = require("../../models/Banquet");

router.get("/", async (req, res) => {
  try {
    const filter = {};

    if (req.query.branchId) {
      filter.branchId = new mongoose.Types.ObjectId(req.query.branchId);
    }

    const banquets = await Banquet.find(filter)
      .populate("branchId")
      .sort({ createdAt: 1 });

    res.json(banquets);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

router.get("/:slug", async (req, res) => {
  console.log("Slug received:", req.params.slug);
  try {
    const banquet = await Banquet.findOne({
      slug: req.params.slug,
    }).populate("branchId");

    if (!banquet) {
      return res.status(404).json({ error: "Not found" });
    }

    res.json(banquet);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
