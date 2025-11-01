import Joi from "joi";

export const subjectCreateSchema = Joi.object({
  name: Joi.string().required(),
  desc: Joi.string().required(),
});

export const subjectUpdateSchema = Joi.object({
  name: Joi.string(),
  desc: Joi.string(),
});