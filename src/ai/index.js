import { AIController } from "./ai.controller.js";
import { AIService } from "./ai.service.js";

const aiService = new AIService();
const aiController = new AIController(aiService);

export {
   aiService,
   aiController,
};
