const Joi = require("joi");

const taskSchema = Joi.object({
  title: Joi.string().min(3).max(100).required(),

  priority: Joi.string()
    .valid("LOW", "MEDIUM", "HIGH")
    .required(),
});

module.exports = {
  taskSchema,
};