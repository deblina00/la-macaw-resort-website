const Joi = require("joi");

const createRoomSchema = Joi.object({
  title: Joi.string().min(3).max(200).required(),

  branchId: Joi.string().required(),

  price: Joi.number().min(0).required(),

  totalBed: Joi.number().min(1).required(),

  capacity: Joi.number().min(1).required(),

  amenities: Joi.alternatives()
    .try(Joi.array().items(Joi.string()), Joi.string())
    .optional(),

  description: Joi.string().allow("").optional(),
});

const updateRoomSchema = createRoomSchema.fork(
  ["title", "branchId", "price", "totalBed", "capacity"],
  (schema) => schema.optional(),
);

module.exports = {
  createRoomSchema,
  updateRoomSchema,
};
