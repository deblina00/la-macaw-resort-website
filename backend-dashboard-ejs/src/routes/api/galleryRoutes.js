const express = require("express");
const router = express.Router();
const Gallery = require("../../models/Gallery");

// router.get("/", async (req, res) => {
//   const category = req.query.category;

//   const filter = category ? { category } : {};

//   const images = await Gallery.find(filter).sort({ createdAt: -1 }).limit(6);

//   res.json(images);
// });

router.get("/", async (req, res) => {
  const category = req.query.category;
  const limit = req.query.limit;

  const filter = category ? { category } : {};

  const query = Gallery.find(filter).sort({ createdAt: -1 });

  if (limit) {
    query.limit(parseInt(limit));
  }

  const images = await query;

  res.json(images);
});

module.exports = router;
