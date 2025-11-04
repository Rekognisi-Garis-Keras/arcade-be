import Joi from "joi";

export const topicCreateSchema = Joi.object({
  title: Joi.string().required(),
  desc: Joi.string().required(),
  // model_url: Joi.string().required(),
  // marker_img_url: Joi.string().required(),
  scale_model: Joi.string().required(),
  content: Joi.string().required(),
});

export const topicUpdateSchema = Joi.object({
  title: Joi.string(),
  desc: Joi.string(),
  // model_url: Joi.string(),
  // marker_img_url: Joi.string(),
  scale_model: Joi.string(),
  content: Joi.string(),
});