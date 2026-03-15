const mongoose = require("mongoose");

const BranchSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },

    location: {
      type: String,
      required: true
    },

    description: {
      type: String
    },

    amenities: [
      {
        type: String
      }
    ],

    images: [
      {
        type: String
      }
    ]
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Branch", BranchSchema);