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

module.exports = router;
