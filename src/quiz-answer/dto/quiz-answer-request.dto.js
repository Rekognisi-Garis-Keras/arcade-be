import Joi from "joi";

export const createQuizAnswerSchema = Joi.object({
  result_id: Joi.number().required(),
  answer: Joi.string().required(),
  is_correct: Joi.bool().required(),
});