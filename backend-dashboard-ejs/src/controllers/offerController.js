const Offer = require("../models/Offer");
const {
  createOfferSchema,
  updateOfferSchema
} = require("../validations/offerValidation");

exports.listOffers = async (req, res) => {
  const offers = await Offer.find().sort({ createdAt: -1 });

  res.render("offers/list", {
    title: "Offers",
    offers
  });
};

exports.createOfferPage = (req, res) => {
  res.render("offers/create", {
    title: "Create Offer"
  });
};

exports.createOffer = async (req, res) => {
  try {
    const body = req.body || {};

    const { error } = createOfferSchema.validate(body);

    if (error) {
      return res.render("offers/create", {
        title: "Create Offer",
        error: error.details[0].message
      });
    }

    const image = req.file?.path;

    await Offer.create({
      title: body.title,
      offerDetails: body.offerDetails,
      discountValue: body.discountValue,

      validity: {
        from: body.validityFrom,
        to: body.validityTo
      },

      image
    });

    res.redirect("/admin/offers");

  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
};

exports.editOfferPage = async (req, res) => {
  const offer = await Offer.findById(req.params.id);

  res.render("offers/edit", {
    title: "Edit Offer",
    offer
  });
};

exports.updateOffer = async (req, res) => {
  try {
    const body = req.body || {};

    const { error } = updateOfferSchema.validate(body);

    if (error) {
      const offer = await Offer.findById(req.params.id);

      return res.render("offers/edit", {
        title: "Edit Offer",
        error: error.details[0].message,
        offer
      });
    }

    const updateData = {
      title: body.title,
      offerDetails: body.offerDetails,
      discountValue: body.discountValue
    };

    if (body.validityFrom && body.validityTo) {
      updateData.validity = {
        from: body.validityFrom,
        to: body.validityTo
      };
    }

    if (req.file) {
      updateData.image = req.file.path;
    }

    await Offer.findByIdAndUpdate(req.params.id, updateData);

    res.redirect("/admin/offers");

  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
};

exports.deleteOffer = async (req, res) => {
  await Offer.findByIdAndDelete(req.params.id);
  res.redirect("/admin/offers");
};