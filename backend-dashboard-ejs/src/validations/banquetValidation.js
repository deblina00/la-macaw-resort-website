const Joi = require("joi");

const createBanquetSchema = Joi.object({
  title: Joi.string().min(3).max(200).required(),

  branchId: Joi.string().required(),

  totalArea: Joi.number().required(),

  capacity: Joi.number().min(1).optional(),

  type: Joi.string().valid("Hall", "Lawn").required(),

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
