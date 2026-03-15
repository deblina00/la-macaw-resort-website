const Joi = require("joi");

const createOfferSchema = Joi.object({
  title: Joi.string().min(3).max(200).required(),

  offerDetails: Joi.string().allow("").optional(),

  discountValue: Joi.number().min(0).optional(),

  validityFrom: Joi.date().required(),

  validityTo: Joi.date().required()
});

const updateOfferSchema = Joi.object({
  title: Joi.string().min(3).max(200).optional(),

  offerDetails: Joi.string().allow("").optional(),

  discountValue: Joi.number().min(0).optional(),

  validityFrom: Joi.date().optional(),

  validityTo: Joi.date().optional()
});

module.exports = {
  createOfferSchema,
  updateOfferSchema
};