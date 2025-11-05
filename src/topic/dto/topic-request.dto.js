import Joi from "joi";

export const topicCreateSchema = Joi.object({
  title: Joi.string().required(),
  desc: Joi.string().required(),
  scale_model: Joi.string().required(),
  content: Joi.string().required(),
});

export const topicUpdateSchema = Joi.object({
  title: Joi.string(),
  desc: Joi.string(),
  scale_model: Joi.string(),
  content: Joi.string(),
  finished: Joi.boolean(),
});