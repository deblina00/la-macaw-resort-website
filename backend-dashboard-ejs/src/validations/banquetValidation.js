const Joi = require("joi");

const createBanquetSchema = Joi.object({
  title: Joi.string().min(3).max(200).required(),
  branchId: Joi.string().required(),
  totalArea: Joi.number().required(),

  description: Joi.string().allow(""),

  type: Joi.string().valid("Hall", "Lawn").required(),

  seatingCapacity: Joi.object({
    theatre: Joi.number().optional(),
    cluster: Joi.number().optional(),
    floating: Joi.number().optional(),
    dining: Joi.number().optional(),
    min: Joi.number().optional(),
    max: Joi.number().optional(),
  }).optional(),

  openingTime: Joi.string().optional(),
  closingTime: Joi.string().optional(),

  features: Joi.alternatives()
    .try(Joi.array().items(Joi.string()), Joi.string())
    .optional(),
});

const updateBanquetSchema = createBanquetSchema.fork(
  ["title", "branchId", "type"],
  (schema) => schema.optional(),
);

module.exports = {
  createBanquetSchema,
  updateBanquetSchema,
};
