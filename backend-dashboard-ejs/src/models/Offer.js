const mongoose = require("mongoose");

const OfferSchema = new mongoose.Schema(
{
  title: {
    type: String,
    required: true
  },

  offerDetails: {
    type: String
  },

  discountValue: {
    type: Number
  },

  validity: {
    from: Date,
    to: Date
  },

  image: {
    type: String
  }
},
{
  timestamps: true
});

module.exports = mongoose.model("Offer", OfferSchema);