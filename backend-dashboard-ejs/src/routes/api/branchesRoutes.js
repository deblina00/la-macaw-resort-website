const express = require("express");
const router = express.Router();
const Branch = require("../../models/Branch");

router.get("/", async (req, res) => {
  const branches = await Branch.find();
  res.json(branches);
});

router.get("/:id", async (req, res) => {
  const branch = await Branch.findById(req.params.id);
  res.json(branch);
});

module.exports = router;