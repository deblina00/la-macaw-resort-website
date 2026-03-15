const Joi = require("joi");

const createReviewSchema = Joi.object({
  guestName: Joi.string().min(2).max(100).required(),

  rating: Joi.number().min(1).max(5).required(),

  comment: Joi.string().allow("").optional(),

  location: Joi.string().allow("").optional()
});

const updateReviewSchema = Joi.object({
  guestName: Joi.string().min(2).max(100).optional(),

  rating: Joi.number().min(1).max(5).optional(),

  comment: Joi.string().allow("").optional(),

  location: Joi.string().allow("").optional()
});

module.exports = {
  createReviewSchema,
  updateReviewSchema
};