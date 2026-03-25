const express = require("express");
const router = express.Router();

const auth = require("../../middleware/authMiddleware");

const {
  adminCareers,
  createCareer,
  editCareerPage,
  updateCareer,
  deleteCareer,
  toggleCareer,
  getApplications,
  adminApplicationsPage,
} = require("../../controllers/careerController");

router.get("/", auth, adminCareers);

router.get("/applications/data", auth, getApplications);
router.get("/applications", auth, adminApplicationsPage);

router.post("/create", auth, createCareer);

router.get("/edit/:id", auth, editCareerPage);
router.post("/edit/:id", auth, updateCareer);

router.get("/delete/:id", auth, deleteCareer);
router.get("/toggle/:id", auth, toggleCareer);

module.exports = router;
