// const Banquet = require("../models/Banquet");
// const Branch = require("../models/Branch");
// const {
//   createBanquetSchema,
//   updateBanquetSchema,
// } = require("../validations/banquetValidation");

// exports.listBanquets = async (req, res) => {
//   const banquets = await Banquet.find()
//     .populate("branchId")
//     .sort({ createdAt: -1 });

//   res.render("banquets/list", {
//     title: "Banquets",
//     banquets,
//   });
// };

// exports.createBanquetPage = async (req, res) => {
//   const branches = await Branch.find();

//   res.render("banquets/create", {
//     title: "Create Banquet",
//     branches,
//   });
// };

// exports.createBanquet = async (req, res) => {
//   try {
//     const body = req.body || {};

//     const { error } = createBanquetSchema.validate(body);

//     if (error) {
//       const branches = await Branch.find();
//       return res.render("banquets/create", {
//         title: "Create Banquet",
//         error: error.details[0].message,
//         branches,
//       });
//     }

//     const images = req.files?.map((f) => f.path) || [];

//     const features = body.features
//       ? body.features.split(",").map((f) => f.trim())
//       : [];

//     await Banquet.create({
//       title: body.title,
//       branchId: body.branchId,
//       totalArea: body.totalArea,
//       capacity: body.capacity,
//       type: body.type,
//       features,
//       images,
//     });

//     res.redirect("/admin/banquets");
//   } catch (err) {
//     console.error(err);
//     res.status(500).send(err.message);
//   }
// };

// exports.editBanquetPage = async (req, res) => {
//   const banquet = await Banquet.findById(req.params.id);
//   const branches = await Branch.find();

//   res.render("banquets/edit", {
//     title: "Edit Banquet",
//     banquet,
//     branches,
//   });
// };

// exports.updateBanquet = async (req, res) => {
//   try {
//     const body = req.body || {};

//     const { error } = updateBanquetSchema.validate(body);

//     if (error) {
//       const branches = await Branch.find();
//       const banquet = await Banquet.findById(req.params.id);

//       return res.render("banquets/edit", {
//         title: "Edit Banquet",
//         error: error.details[0].message,
//         banquet,
//         branches,
//       });
//     }

//     const features = body.features
//       ? body.features.split(",").map((f) => f.trim())
//       : [];

//     const images = req.files?.map((f) => f.path) || [];

//     const updateData = {
//       title: body.title,
//       branchId: body.branchId,
//       totalArea: body.totalArea,
//       capacity: body.capacity,
//       type: body.type,
//       features,
//     };

//     if (images.length) {
//       updateData.images = images;
//     }

//     await Banquet.findByIdAndUpdate(req.params.id, updateData);

//     res.redirect("/admin/banquets");
//   } catch (err) {
//     console.error(err);
//     res.status(500).send(err.message);
//   }
// };

// exports.deleteBanquet = async (req, res) => {
//   await Banquet.findByIdAndDelete(req.params.id);

//   res.redirect("/admin/banquets");
// };

const Banquet = require("../models/Banquet");
const Branch = require("../models/Branch");
const slugify = require("slugify");

const {
  createBanquetSchema,
  updateBanquetSchema,
} = require("../validations/banquetValidation");

// ================= LIST =================
exports.listBanquets = async (req, res) => {
  try {
    const banquets = await Banquet.find()
      .populate("branchId")
      .sort({ createdAt: -1 })
      .lean();

    res.render("banquets/list", {
      title: "Banquets",
      banquets,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

// ================= CREATE PAGE =================
exports.createBanquetPage = async (req, res) => {
  const branches = await Branch.find().lean();

  res.render("banquets/create", {
    title: "Create Banquet",
    branches,
  });
};

// ================= CREATE =================
exports.createBanquet = async (req, res) => {
  try {
    const body = req.body || {};

    const { error } = createBanquetSchema.validate(body);
    if (error) {
      const branches = await Branch.find().lean();

      for (let b of banquets) {
        if (!b.slug) {
          b.slug = slugify(b.title, { lower: true, strict: true });
          await b.save();
        }
      }

      return res.render("banquets/create", {
        title: "Create Banquet",
        error: error.details[0].message,
        branches,
      });
    }

    const images = req.files?.map((f) => f.path) || [];

    const features = body.features
      ? body.features
          .split(",")
          .map((f) => f.trim())
          .filter(Boolean)
      : [];

    // seating capacity parse
    const seatingCapacity = {};
    if (body.seatingCapacity) {
      Object.keys(body.seatingCapacity).forEach((key) => {
        const val = Number(body.seatingCapacity[key]);
        if (!isNaN(val)) seatingCapacity[key] = val;
      });
    }

    // slug (unique)
    const baseSlug = slugify(body.title, {
      lower: true,
      strict: true,
    });

    let slug = baseSlug;
    let counter = 1;

    while (await Banquet.findOne({ slug })) {
      slug = `${baseSlug}-${counter++}`;
    }

    await Banquet.create({
      title: body.title,
      slug,
      description: body.description,
      branchId: body.branchId,
      totalArea: Number(body.totalArea),
      seatingCapacity,
      openingTime: body.openingTime,
      closingTime: body.closingTime,
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

// ================= EDIT PAGE =================
exports.editBanquetPage = async (req, res) => {
  try {
    const banquet = await Banquet.findById(req.params.id).lean();
    const branches = await Branch.find().lean();

    if (!banquet) {
      return res.redirect("/admin/banquets");
    }

    res.render("banquets/edit", {
      title: "Edit Banquet",
      banquet,
      branches,
    });
  } catch (err) {
    console.error(err);
    res.redirect("/admin/banquets");
  }
};

// ================= UPDATE =================
exports.updateBanquet = async (req, res) => {
  try {
    const body = req.body || {};

    const { error } = updateBanquetSchema.validate(body);
    if (error) {
      const branches = await Branch.find().lean();
      const banquet = await Banquet.findById(req.params.id).lean();

      if (!banquet) return res.redirect("/admin/banquets");

      return res.render("banquets/edit", {
        title: "Edit Banquet",
        error: error.details[0].message,
        banquet,
        branches,
      });
    }

    const existingBanquet = await Banquet.findById(req.params.id);
    if (!existingBanquet) return res.redirect("/admin/banquets");

    const features = body.features
      ? body.features
          .split(",")
          .map((f) => f.trim())
          .filter(Boolean)
      : [];

    const images = req.files?.map((f) => f.path) || [];

    // ✅ seating capacity (merge instead of overwrite)
    const seatingCapacity = { ...existingBanquet.seatingCapacity };

    if (body.seatingCapacity) {
      Object.keys(body.seatingCapacity).forEach((key) => {
        const val = Number(body.seatingCapacity[key]);
        if (!isNaN(val)) seatingCapacity[key] = val;
      });
    }

    // ✅ slug only if title changed
    let slug = existingBanquet.slug;

    if (body.title && body.title !== existingBanquet.title) {
      const baseSlug = slugify(body.title, {
        lower: true,
        strict: true,
      });

      slug = baseSlug;
      let counter = 1;

      while (
        await Banquet.findOne({
          slug,
          _id: { $ne: req.params.id },
        })
      ) {
        slug = `${baseSlug}-${counter++}`;
      }
    }

    const updateData = {
      title: body.title,
      slug,
      description: body.description,
      branchId: body.branchId,
      totalArea: Number(body.totalArea),
      seatingCapacity,
      openingTime: body.openingTime,
      closingTime: body.closingTime,
      type: body.type,
      features,
    };

    if (images.length) {
      updateData.images = images;
    }

    await Banquet.findByIdAndUpdate(req.params.id, updateData, {
      runValidators: true,
    });

    res.redirect("/admin/banquets");
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
};

// ================= DELETE =================
exports.deleteBanquet = async (req, res) => {
  try {
    await Banquet.findByIdAndDelete(req.params.id);
    res.redirect("/admin/banquets");
  } catch (err) {
    console.error(err);
    res.redirect("/admin/banquets");
  }
};
