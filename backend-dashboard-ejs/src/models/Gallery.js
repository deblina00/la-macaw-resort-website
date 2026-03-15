const mongoose = require("mongoose");

const GallerySchema = new mongoose.Schema(
  {
    title: {
      type: String
    },

    category: {
      type: String,
      enum: ["rooms", "events", "banquets", "tajpur", "joypur", "purulia"],
      required: true
    },

    image: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Gallery", GallerySchema);