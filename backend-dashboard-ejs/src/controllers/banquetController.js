const Banquet = require("../models/Banquet");
const Branch = require("../models/Branch");
const {
  createBanquetSchema,
  updateBanquetSchema,
} = require("../validations/banquetValidation");

exports.listBanquets = async (req, res) => {
  const banquets = await Banquet.find()
    .populate("branchId")
    .sort({ createdAt: -1 });

  res.render("banquets/list", {
    title: "Banquets",
    banquets,
  });
};

exports.createBanquetPage = async (req, res) => {
  const branches = await Branch.find();

  res.render("banquets/create", {
    title: "Create Banquet",
    branches,
  });
};

exports.createBanquet = async (req, res) => {
  try {
    const body = req.body || {};

    const { error } = createBanquetSchema.validate(body);

    if (error) {
      const branches = await Branch.find();
      return res.render("banquets/create", {
        title: "Create Banquet",
        error: error.details[0].message,
        branches,
      });
    }

    const images = req.files?.map((f) => f.path) || [];

    const features = body.features
      ? body.features.split(",").map((f) => f.trim())
      : [];

    await Banquet.create({
      title: body.title,
      branchId: body.branchId,
      totalArea: body.totalArea,
      capacity: body.capacity,
      type: body.type,
      features,
      images,
    });

    res.redirect("/admin/banquets");
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
};

exports.editBanquetPage = async (req, res) => {
  const banquet = await Banquet.findById(req.params.id);
  const branches = await Branch.find();

  res.render("banquets/edit", {
    title: "Edit Banquet",
    banquet,
    branches,
  });
};

exports.updateBanquet = async (req, res) => {
  try {
    const body = req.body || {};

    const { error } = updateBanquetSchema.validate(body);

    if (error) {
      const branches = await Branch.find();
      const banquet = await Banquet.findById(req.params.id);

      return res.render("banquets/edit", {
        title: "Edit Banquet",
        error: error.details[0].message,
        banquet,
        branches,
      });
    }

    const features = body.features
      ? body.features.split(",").map((f) => f.trim())
      : [];

    const images = req.files?.map((f) => f.path) || [];

    const updateData = {
      title: body.title,
      branchId: body.branchId,
      totalArea: body.totalArea,
      capacity: body.capacity,
      type: body.type,
      features,
    };

    if (images.length) {
      updateData.images = images;
    }

    await Banquet.findByIdAndUpdate(req.params.id, updateData);

    res.redirect("/admin/banquets");
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
};

exports.deleteBanquet = async (req, res) => {
  await Banquet.findByIdAndDelete(req.params.id);

  res.redirect("/admin/banquets");
};
