const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Room = require("../../models/Room");

router.get("/", async (req, res) => {
  try {
    const filter = {};

    if (req.query.branchId) {
      filter.branchId = new mongoose.Types.ObjectId(req.query.branchId);
    }

    const rooms = await Room.find(filter)
      .populate("branchId")
      .sort({ createdAt: -1 });

    res.json(rooms);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});


router.get("/:id", async (req, res) => {
  const room = await Room.findById(req.params.id).populate("branchId");
  res.json(room);
});

module.exports = router;
