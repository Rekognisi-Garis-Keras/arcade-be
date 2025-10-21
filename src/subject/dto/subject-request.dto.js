import Joi from "joi";

export const subjectCreateSchema = Joi.object({
  name: Joi.string().required(),
  desc: Joi.string().required(),
  thumbnail_url: Joi.string().required(),
});

export const subjectUpdateSchema = Joi.object({
  name: Joi.string(),
  desc: Joi.string(),
  thumbnail_url: Joi.string(),
});