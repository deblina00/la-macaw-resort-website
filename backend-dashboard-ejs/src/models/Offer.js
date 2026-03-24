const mongoose = require("mongoose");

const BranchOfferSchema = new mongoose.Schema({
  branch: {
    type: String,
    enum: ["Tajpur", "Joypur", "Purulia"],
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  bannerImage: {
    type: String,
    required: true,
  },

  details: {
    type: String,
  },

  validity: {
    from: Date,
    to: Date,
  },
});

const OfferSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    // 👉 popup banner (neutral)
    popupImage: {
      type: String,
      required: true,
    },

    isActive: {
      type: Boolean,
      default: true,
    },

    branchOffers: [BranchOfferSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Offer", OfferSchema);