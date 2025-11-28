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

   async funFact(subject) {
      const prompt = `
                        Kamu adalah asisten pembelajaran untuk platform edukasi Augmented Reality bernama Arcade. 
                        Tugasmu adalah memberikan 1 fun fact atau "Tahukah Kamu?" yang menarik dan mudah dipahami anak-anak 
                        berdasarkan mata pelajaran "${subject}".

                        Ketentuan jawaban:
                        - Jawaban harus relevan dengan mata pelajaran "${subject}".
                        - Sekitar 30-35 kata.
                        - Gunakan gaya bahasa ringan, positif, dan membuat anak penasaran.
                        - Tambahkan emoji yang relevan dengan "${subject}" agar menarik
                        - Jangan memasukkan fakta yang tidak terbukti.
                        - Jika mata pelajaran tidak jelas atau tidak ditemukan, beri jawaban singkat:
                        "Maaf, saya hanya dapat memberikan fun fact sesuai mata pelajaran ${subject}."

                        Berikan jawaban dalam format:
                        "Tahukah kamu? <isi fun fact>"
                     `

      const result = await this.model.generateContent(prompt)
      const answer = result.response.text()

      return answer
   }
}
