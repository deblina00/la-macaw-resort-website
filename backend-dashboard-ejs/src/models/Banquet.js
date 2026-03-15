const mongoose = require("mongoose");

const BanquetSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },

    branchId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Branch",
      required: true
    },

    capacity: {
      type: Number
    },

    type: {
      type: String,
      enum: ["Hall", "Lawn"]
    },

    features: [
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

module.exports = mongoose.model("Banquet", BanquetSchema);