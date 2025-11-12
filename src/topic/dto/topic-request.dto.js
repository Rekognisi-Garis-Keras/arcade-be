import Joi from "joi";

export const topicCreateSchema = Joi.object({
  title: Joi.string().required(),
  desc: Joi.string().required(),
  scale_model: Joi.string().required(),
  content: Joi.string().required(),
  model_url: Joi.string().uri().required(),
  marker_img_url: Joi.string().uri().required(),
});

export const topicUpdateSchema = Joi.object({
  title: Joi.string(),
  desc: Joi.string(),
  scale_model: Joi.string(),
  content: Joi.string(),
  finished: Joi.boolean(),
  model_url: Joi.string().uri().required(),
  marker_img_url: Joi.string().uri().required(),
});