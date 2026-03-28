const mongoose = require("mongoose");

const RoomSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    branchId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Branch",
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    capacity: {
      type: Number,
      required: true,
    },
    totalBed: {
      type: Number,
      requires: true,
    },

    amenities: [
      {
        type: String,
      },
    ],

    gallery: [
      {
        type: String,
      },
    ],

    description: {
      type: String,
    },

    ratings: {
      type: Number,
      default: 4.5,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Room", RoomSchema);
