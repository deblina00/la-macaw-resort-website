const mongoose = require("mongoose");

const EnquirySchema = new mongoose.Schema(
  {
    enquiryType: {
      type: String,
      enum: ["guest", "b2b", "event"],
      default: "guest",
    },

    /* common fields */

    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    message: {
      type: String,
    },

    status: {
      type: String,
      default: "new",
    },

    /* guest enquiry */

    branch: {
      type: String,
    },

    checkIn: {
      type: Date,
    },

    checkOut: {
      type: Date,
    },

    guests: {
      type: Number,
    },

    rooms: {
      type: Number,
    },

    /* event enquiry */

    banquet: {
      type: Boolean,
      default: false,
    },

    lawn: {
      type: Boolean,
      default: false,
    },

    /* b2b enquiry */

    agencyName: String,
    city: String,
    pincode: String,
    address: String,
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Enquiry", EnquirySchema);
