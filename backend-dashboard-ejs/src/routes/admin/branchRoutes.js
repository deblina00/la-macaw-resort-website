const express = require("express");
const router = express.Router();

const auth = require("../../middleware/authMiddleware");
const { uploadBranches } = require("../../middleware/uploadMiddleware");

const {
  listBranches,
  createBranchPage,
  createBranch,
  editBranchPage,
  updateBranch,
  deleteBranch,
} = require("../../controllers/branchController");

router.get("/", auth, listBranches);
router.get("/create", auth, createBranchPage);
router.post("/create", auth, uploadBranches.array("images"), createBranch);

router.get("/edit/:id", auth, editBranchPage);
router.post("/edit/:id", auth, uploadBranches.array("images"), updateBranch);

router.get("/delete/:id", auth, deleteBranch);

module.exports = router;
