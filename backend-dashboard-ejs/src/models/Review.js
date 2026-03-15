const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema(
  {
    guestName: {
      type: String,
      required: true,
    },

    rating: {
      type: Number,
      min: 1,
      max: 5,
      default: 5,
    },

    comment: {
      type: String,
    },

    location: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Review", ReviewSchema);
