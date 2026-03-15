const Joi = require("joi");

const createBranchSchema = Joi.object({
  name: Joi.string().min(3).max(100).required(),
  location: Joi.string().min(3).max(150).required(),
  description: Joi.string().allow("").optional(),
  amenities: Joi.alternatives()
    .try(Joi.array().items(Joi.string()), Joi.string())
    .optional(),
});

const updateBranchSchema = Joi.object({
  name: Joi.string().min(3).max(100).optional(),
  location: Joi.string().min(3).max(150).optional(),
  description: Joi.string().allow("").optional(),
  amenities: Joi.alternatives()
    .try(Joi.array().items(Joi.string()), Joi.string())
    .optional(),
});

module.exports = {
  createBranchSchema,
  updateBranchSchema,
};
