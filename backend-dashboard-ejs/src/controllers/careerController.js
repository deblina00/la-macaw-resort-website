const Career = require("../models/Career");
const cloudinary = require("../config/cloudinary");
const { sendCareerEmail } = require("../services/emailService");
const CareerApplication = require("../models/CareerApplication");

const {
  createCareerSchema,
  updateCareerSchema,
} = require("../validations/careerValidation");
const { applyCareerSchema } = require("../validations/careerValidation");

/* ---------------- APPLY (PUBLIC) ---------------- */
exports.applyCareer = async (req, res) => {
  try {
    console.log("BODY:", req.body);
    console.log("FILE:", req.file);

    const { error } = applyCareerSchema.validate(req.body);

    if (error) {
      console.log("VALIDATION ERROR:", error.details);

      return res.status(400).json({
        success: false,
        message: error.details[0].message,
      });
    }

    let cvUrl = req.file?.path || "";

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "CV is required",
      });
    }

    // ✅ SAVE TO DB (THIS WAS MISSING)
    await CareerApplication.create({
      ...req.body,
      jobId: req.body.jobId, // ✅ ensure saved
      cvUrl,
    });

    // ✅ SEND EMAIL
    await sendCareerEmail({
      ...req.body,
      cvUrl,
    });

    res.json({ success: true, message: "Application submitted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false });
  }
};

/* ---------------- PUBLIC GET ---------------- */
exports.getCareers = async (req, res) => {
  const jobs = await Career.find({ status: "active" }).sort({ createdAt: -1 });
  res.json(jobs);
};

/* ---------------- ADMIN LIST ---------------- */
exports.adminCareers = async (req, res) => {
  try {
    const jobs = await Career.find().sort({ createdAt: -1 });

    res.render("careers/index", {
      title: "Careers",
      jobs,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

/* ---------------- CREATE ---------------- */
exports.createCareer = async (req, res) => {
  try {
    const body = req.body || {};

    const { error } = createCareerSchema.validate(body);

    if (error) {
      const jobs = await Career.find().sort({ createdAt: -1 });

      return res.render("careers/index", {
        title: "Careers",
        jobs,
        error: error.details[0].message,
      });
    }

    await Career.create(body);

    res.redirect("/admin/careers");
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
};

/* ---------------- EDIT PAGE ---------------- */
exports.editCareerPage = async (req, res) => {
  const job = await Career.findById(req.params.id);

  res.render("careers/edit", {
    title: "Edit Career",
    job,
  });
};

/* ---------------- UPDATE ---------------- */
exports.updateCareer = async (req, res) => {
  try {
    const body = req.body || {};

    const { error } = updateCareerSchema.validate(body);

    if (error) {
      const job = await Career.findById(req.params.id);

      return res.render("careers/edit", {
        title: "Edit Career",
        job,
        error: error.details[0].message,
      });
    }

    await Career.findByIdAndUpdate(req.params.id, body);

    res.redirect("/admin/careers");
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
};

/* ---------------- DELETE ---------------- */
exports.deleteCareer = async (req, res) => {
  await Career.findByIdAndDelete(req.params.id);
  res.redirect("/admin/careers");
};

/* ---------------- TOGGLE ---------------- */
exports.toggleCareer = async (req, res) => {
  const job = await Career.findById(req.params.id);

  job.status = job.status === "active" ? "inactive" : "active";

  await job.save();

  res.redirect("/admin/careers");
};

exports.getApplications = async (req, res) => {
  try {
    const { jobId } = req.query;

    let filter = {};
    if (jobId) filter.jobId = jobId;

    const apps = await CareerApplication.find(filter)
      .populate("jobId", "title")
      .sort({ createdAt: -1 });

    res.json(apps);
  } catch (err) {
    res.status(500).json({ success: false });
  }
};

exports.adminApplicationsPage = async (req, res) => {
  const { jobId } = req.query;

  let filter = {};
  if (jobId) filter.jobId = jobId;

  const apps = await CareerApplication.find(filter).sort({ createdAt: -1 });
  const jobs = await Career.find();

  res.render("careers/applications", {
    title: "Applications",
    apps,
    jobs,
  });
};
