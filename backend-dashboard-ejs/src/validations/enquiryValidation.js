const Joi = require("joi");

const guestEnquirySchema = Joi.object({
  name: Joi.string().min(2).max(100).required(),

  email: Joi.string().email().required(),

  phone: Joi.string().min(8).max(20).required(),

  branch: Joi.string().optional(),

  checkIn: Joi.date().optional(),

  checkOut: Joi.date().optional(),

  guests: Joi.number().min(1).optional(),

  rooms: Joi.number().min(1).optional(),

  message: Joi.string().allow("").optional(),
});

const b2bEnquirySchema = Joi.object({
  agencyName: Joi.string().min(2).max(100).required(),

  name: Joi.string().min(2).max(100).required(),

  email: Joi.string().email().required(),

  phone: Joi.string().min(8).max(20).required(),

  city: Joi.string().min(3).max(50).required(),

  pincode: Joi.string().min(6).max(10).required(),

  address: Joi.string().min(6).max(200).optional(),

  message: Joi.string().allow("").optional(),
});

const eventEnquirySchema = Joi.object({
  name: Joi.string().min(2).max(100).required(),

  email: Joi.string().email().required(),

  phone: Joi.string().min(8).max(20).required(),

  branch: Joi.string().optional(),

  checkIn: Joi.date().optional(),

  checkOut: Joi.date().optional(),

  guests: Joi.number().min(1).optional(),

  rooms: Joi.number().min(1).optional(),

  banquet: Joi.boolean().optional(),

  lawn: Joi.boolean().optional(),

  message: Joi.string().min(5).required(),
});

module.exports = {
  guestEnquirySchema,
  b2bEnquirySchema,
  eventEnquirySchema,
};
