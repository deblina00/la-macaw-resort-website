const mongoose = require("mongoose");

const careerSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    department: String,
    location: String,
    description: String,
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Career", careerSchema);