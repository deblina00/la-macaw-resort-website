const Joi = require("joi");

const applyCareerSchema = Joi.object({
  jobId: Joi.string().required(), // ✅ ADD THIS
  name: Joi.string().min(2).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().min(10).required(),
  position: Joi.string().required(),
  address: Joi.string().min(5).required(), // ✅ NEW
  comments: Joi.string().allow("").optional(),
});

const createCareerSchema = Joi.object({
  title: Joi.string().min(3).max(200).required(),

  location: Joi.string().allow("").optional(),

  department: Joi.string().allow("").optional(),

  description: Joi.string().allow("").optional(),

  status: Joi.string().valid("active", "inactive").optional(),
});

const updateCareerSchema = createCareerSchema.fork(["title"], (schema) =>
  schema.optional(),
);

module.exports = {
  applyCareerSchema,
  createCareerSchema,
  updateCareerSchema,
};
