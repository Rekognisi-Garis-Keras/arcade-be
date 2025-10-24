import Joi from "joi";

export const quizCreateSchema = Joi.object({
  question: Joi.string().required(),
  options: Joi.array().items(
    Joi.object({
      id: Joi.string().required(),
      text: Joi.string().required()
    })
  ).length(4).required(),
  correct_answer: Joi.string().valid("a", "b", "c", "d").required(),
});

export const quizUpdateSchema = Joi.object({
  question: Joi.string(),
  options: Joi.array().items(
    Joi.object({
      id: Joi.string().required(),
      text: Joi.string().required()
    })
  ).length(4),
  correct_answer: Joi.string().valid("a", "b", "c", "d")
});