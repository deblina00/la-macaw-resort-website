const Joi = require("joi");

const createEventSchema = Joi.object({
  title: Joi.string().min(3).max(200).required(),

  description: Joi.string().allow("").optional(),

  category: Joi.string()
    .valid("wedding", "corporate", "private")
    .required()
});

const updateEventSchema = Joi.object({
  title: Joi.string().min(3).max(200).optional(),

  description: Joi.string().allow("").optional(),

  category: Joi.string()
    .valid("wedding", "corporate", "private")
    .optional()
});

module.exports = {
  createEventSchema,
  updateEventSchema
};