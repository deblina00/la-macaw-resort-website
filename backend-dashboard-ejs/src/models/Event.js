const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
    },

    images: [
      {
        type: String,
      },
    ],

    category: {
      type: String,
      enum: ["wedding", "corporate", "private"],
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Event", EventSchema);
