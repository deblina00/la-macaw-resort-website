const mongoose = require("mongoose");

const careerApplicationSchema = new mongoose.Schema(
  {
    jobId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Career",
    },
    name: String,
    email: String,
    phone: String,
    position: String,
    address: String, // ✅ NEW
    comments: String,
    cvUrl: String,
  },
  { timestamps: true },
);

module.exports = mongoose.model("CareerApplication", careerApplicationSchema);
