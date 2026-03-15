const Branch = require("../models/Branch");
const { createBranchSchema, updateBranchSchema } = require("../validations/branchValidation");

exports.listBranches = async (req, res) => {
  const branches = await Branch.find().sort({ createdAt: -1 });

  res.render("branches/list", {
    title: "Branches",
    branches,
  });
};

exports.createBranchPage = (req, res) => {
  res.render("branches/create", {
    title: "Create Branch",
  });
};

exports.createBranch = async (req, res) => {
  try {
    const body = req.body || {};

    const { error } = createBranchSchema.validate(body);

    if (error) {
      return res.render("branches/create", {
        title: "Create Branch",
        error: error.details[0].message,
      });
    }

    const images = req.files ? req.files.map((file) => file.path) : [];

    const amenities = body.amenities
      ? body.amenities.split(",").map((a) => a.trim())
      : [];

    await Branch.create({
      name: body.name,
      location: body.location,
      description: body.description,
      amenities,
      images,
    });

    res.redirect("/admin/branches");
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
};

exports.editBranchPage = async (req, res) => {
  const branch = await Branch.findById(req.params.id);

  res.render("branches/edit", {
    title: "Edit Branch",
    branch,
  });
};

exports.updateBranch = async (req, res) => {
  try {
    const body = req.body || {};

    const { error } = updateBranchSchema.validate(body);
    if (error) {
      return res.render("branches/edit", {
        title: "Edit Branch",
        branch: body,
        error: error.details[0].message,
      });
    }

    const amenities = body.amenities
      ? body.amenities.split(",").map((a) => a.trim())
      : [];

    const images = req.files ? req.files.map((file) => file.path) : [];

    const updateData = {
      name: body.name,
      location: body.location,
      description: body.description,
      amenities,
    };

    if (images.length) {
      updateData.images = images;
    }

    await Branch.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
    });

    res.redirect("/admin/branches");
  } catch (err) {
    console.error("UPDATE ERROR:", err);
    res.status(500).send(err.message);
  }
};

exports.deleteBranch = async (req, res) => {
  await Branch.findByIdAndDelete(req.params.id);

  res.redirect("/admin/branches");
};
