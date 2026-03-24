const Offer = require("../models/Offer");
const {
  createOfferSchema,
  updateOfferSchema,
} = require("../validations/offerValidation");

exports.listOffers = async (req, res) => {
  const offers = await Offer.find().sort({ createdAt: -1 });

  res.render("offers/list", {
    title: "Offers",
    offers,
  });
};

exports.createOfferPage = (req, res) => {
  res.render("offers/create", {
    title: "Create Offer",
  });
};

exports.createOffer = async (req, res) => {
  try {
    const body = req.body;

    const { error } = createOfferSchema.validate(body);
    if (error) {
      return res.send(error.details[0].message);
    }

    const popupImage = req.files["popupImage"]?.[0]?.path;
    const branchImages = req.files["branchImages"] || [];

    // ✅ required image validation (important)
    if (!popupImage) {
      return res.send("Popup image is required");
    }

    if (branchImages.length < body.branchOffers.length) {
      return res.send("All branch images are required");
    }

    const branchOffers = body.branchOffers.map((b, index) => ({
      branch: b.branch,
      price: b.price,
      details: b.details,
      validity: {
        from: b.validityFrom,
        to: b.validityTo,
      },
      bannerImage: branchImages[index]?.path,
    }));

    await Offer.create({
      title: body.title,
      popupImage,
      branchOffers,
      isActive: true,
    });

    res.redirect("/admin/offers");
  } catch (err) {
    console.error(err);
    res.send(err.message);
  }
};

// 👉 GET for frontend
exports.getOffers = async (req, res) => {
  const offers = await Offer.find({ isActive: true });
  res.json(offers);
};

// 👉 POPUP API
exports.getPopupOffer = async (req, res) => {
  const offer = await Offer.findOne({ isActive: true }).sort({ createdAt: -1 });
  res.json(offer);
};

exports.editOfferPage = async (req, res) => {
  const offer = await Offer.findById(req.params.id);

  res.render("offers/edit", {
    title: "Edit Offer",
    offer,
  });
};

exports.updateOffer = async (req, res) => {
  try {
    const offer = await Offer.findById(req.params.id);
    if (!offer) return res.send("Offer not found");

    const body = req.body;

    // ✅ VALIDATION (was missing)
    const { error } = updateOfferSchema.validate(body);
    if (error) {
      return res.send(error.details[0].message);
    }

    // popup image update (optional)
    if (req.files?.popupImage) {
      offer.popupImage = req.files.popupImage[0].path;
    }

    const branchImages = req.files?.branchImages || [];

    // update branches
    offer.branchOffers = offer.branchOffers.map((b, i) => {
      const updated = body.branchOffers?.[i];

      if (!updated) return b; // fallback safety

      return {
        branch: b.branch,
        price: updated.price || b.price,
        details: updated.details || b.details,
        validity: {
          from: updated.validityFrom || b.validity.from,
          to: updated.validityTo || b.validity.to,
        },
        bannerImage: branchImages[i]?.path || b.bannerImage,
      };
    });

    offer.title = body.title || offer.title;

    await offer.save();

    res.redirect("/admin/offers");
  } catch (err) {
    console.error(err);
    res.send(err.message);
  }
};

exports.deleteOffer = async (req, res) => {
  await Offer.findByIdAndDelete(req.params.id);
  res.redirect("/admin/offers");
};
