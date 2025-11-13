import Joi from "joi";

export const createTFinishedSchema = Joi.object({
  user_id: Joi.number().integer().required(),
  topic_id: Joi.number().integer().required(),
  finished: Joi.boolean().optional(),
  finished_at: Joi.date().iso().optional().allow(null),
});