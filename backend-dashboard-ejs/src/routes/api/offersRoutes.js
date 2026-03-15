const express = require("express");
const router = express.Router();
const Offer = require("../../models/Offer");

router.get("/", async (req, res) => {
  const offers = await Offer.find();
  res.json(offers);
});

router.get("/:id", async (req, res) => {
  const offer = await Offer.findById(req.params.id);
  res.json(offer);
});

module.exports = router;