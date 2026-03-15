const Enquiry = require("../models/Enquiry");

const {
  guestEnquirySchema,
  b2bEnquirySchema,
  eventEnquirySchema,
} = require("../validations/enquiryValidation");

const {
  sendGuestEnquiryEmail,
  sendB2BEnquiryEmail,
  sendEventEnquiryEmail,
} = require("../services/emailService");

const { generateWhatsAppLink } = require("../services/whatsappService");

exports.listEnquiries = async (req, res) => {
  const enquiries = await Enquiry.find().sort({ createdAt: -1 });

  res.render("enquiries/list", {
    title: "Guest Enquiries",
    enquiries,
  });
};

exports.guestEnquiry = async (req, res) => {
  const { error } = guestEnquirySchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  const enquiry = await Enquiry.create({
    ...req.body,
    enquiryType: "guest",
  });

  /* EMAIL */
  try {
    await sendGuestEnquiryEmail(enquiry);
  } catch (err) {
    console.error("Email failed:", err.message);
  }

  /* WHATSAPP ADMIN */
  const whatsappLink = generateWhatsAppLink(enquiry);

  res.json({
    success: true,
    whatsappLink,
    message: "Enquiry submitted successfully",
  });
};

exports.b2bEnquiry = async (req, res) => {
  const { error } = b2bEnquirySchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  const enquiry = await Enquiry.create({
    ...req.body,
    enquiryType: "b2b",
  });

  await sendB2BEnquiryEmail(enquiry);

  res.json({
    success: true,
    message: "B2B enquiry submitted",
  });
};

exports.eventEnquiry = async (req, res) => {
  const { error } = eventEnquirySchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  const enquiry = await Enquiry.create({
    ...req.body,
    enquiryType: "event",
  });

  await sendEventEnquiryEmail(enquiry);

  const whatsappLink = generateWhatsAppLink(enquiry);

  res.json({
    success: true,
    whatsappLink,
    message: "Enquiry submitted successfully",
  });
};
