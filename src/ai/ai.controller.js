import { ResponseUtil } from "../utils/response.util.js";

export class AIController {
   constructor(aiService) {
      this.aiService = aiService;
   }

   askAI = async (req, res) => {
      try {
         const { subSlug, topSlug } = req.params;
         const { question } = req.body;

         if (!question) {
            return ResponseUtil.validationError(res, "Pertanyaan tidak boleh kosong.");
         }

         const answer = await this.aiService.askGemini(subSlug, topSlug, question);

         return ResponseUtil.success(res, 200, "Jawaban berhasil dihasilkan.", { question, answer });
      } catch (error) {
         console.error(error);
         return ResponseUtil.error(res, 500, "Gagal memproses AI.", error.message);
      }
   };

   factAI = async (req, res) => {
      try {
         const { subSlug } = req.params;

         if (!subSlug) {
            return ResponseUtil.validationError(res, "Anda harus memilih Subject terlebih dahulu.");
         }

         const answer = await this.aiService.funFact(subSlug);

         return ResponseUtil.success(res, 200, "Berhasil menampilkan Fakta.", { answer });
      } catch (error) {
         console.error(error);
         return ResponseUtil.error(res, 500, "Gagal memproses AI.", error.message);
      }
   }
}
