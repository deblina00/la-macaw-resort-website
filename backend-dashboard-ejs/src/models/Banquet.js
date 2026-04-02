const mongoose = require("mongoose");

const BanquetSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    slug: {
      type: String,
      unique: true,
      lowercase: true,
    },

    description: {
      type: String,
    },

    branchId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Branch",
      required: true,
    },

    totalArea: {
      type: Number,
      required: true,
    },

    // capacity: {
    //   type: Number,
    // },

    // ✅ NEW: seating-wise capacity
    seatingCapacity: {
      theatre: Number,
      cluster: Number,
      floating: Number,
      dining: Number,
      min: Number,
      max: Number,
    },

    type: {
      type: String,
      enum: ["Hall", "Lawn"],
    },

    features: [String],

    images: [String],

    // ✅ NEW: timing
    openingTime: String, // "08:00 AM"
    closingTime: String, // "10:00 PM"
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Banquet", BanquetSchema);
