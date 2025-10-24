import Joi from "joi";

export const quizSubmitSchema = Joi.object({
  top_slug: Joi.string().required(),
  user_id: Joi.number().required(),
  answers: Joi.array().items(
    Joi.object({
      quiz_id: Joi.number().required(),
      answer: Joi.string().required(),
    }),
  ).required(),
});