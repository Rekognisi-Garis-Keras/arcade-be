import { GoogleGenerativeAI } from "@google/generative-ai";

export class AIService {
   constructor() {
      this.genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
      this.model = this.genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });
   }

   async askGemini(subject, topic, question) {
      const prompt = `
                        Kamu adalah asisten pembelajaran untuk platform edukatif berbasis Augmented Reality bernama Arcade. 
                        Tugasmu adalah sebagai teman untuk membahas tentang materi untuk anak-anak serta membantu pengguna memahami materi berdasarkan mata pelajaran yang disebutkan. 
                        Kamu hanya boleh menjawab pertanyaan yang relevan dengan mata pelajaran "${subject}" dan topik "${topic}".. 
                        Jika pertanyaan tidak berkaitan dengan mata pelajaran tersebut, jawab dengan singkat: 
                        "Maaf, saya hanya dapat menjawab pertanyaan seputar mata pelajaran ${subject} spesifik topik ${topic}"

                        Gunakan bahasa Indonesia yang mudah dimengerti. 
                        Berikan jawaban yang padat dan informatif dengan panjang maksimal 25 kata.

                        Pertanyaan dari pengguna:
                        ${question}
                     `;

      const result = await this.model.generateContent(prompt);
      const answer = result.response.text();

      return answer;
   }
}
