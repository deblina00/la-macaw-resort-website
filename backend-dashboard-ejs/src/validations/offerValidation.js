const Joi = require("joi");

const branchOfferSchema = Joi.object({
  branch: Joi.string().valid("Tajpur", "Joypur", "Purulia").required(),
  price: Joi.number().required(),
  details: Joi.string().allow(""),
  validityFrom: Joi.date().required(),
  validityTo: Joi.date().required(),
});

const createOfferSchema = Joi.object({
  title: Joi.string().required(),
  branchOffers: Joi.array().items(branchOfferSchema).min(1),
  isActive: Joi.boolean().optional(),
});

const updateOfferSchema = Joi.object({
  title: Joi.string().optional(),

  branchOffers: Joi.array().items(
    Joi.object({
      branch: Joi.string().valid("Tajpur", "Joypur", "Purulia"),
      price: Joi.number(),
      details: Joi.string().allow(""),
      validityFrom: Joi.date(),
      validityTo: Joi.date(),
    })
  ).optional(),
});

module.exports = {
  createOfferSchema,
  updateOfferSchema,
};