import quizzesData from "../src/data/quizzes.js";
import prisma from "./prisma.js";
import bcrypt from "bcrypt";

function generateSlug(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/&/g, 'and')
    .replace(/[\s\W-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

const subjects = [
  {
    name: "Astronomi",
    desc: "Jelajahi tata surya, planet, bintang, dan galaksi melalui model 3D yang realistis. Pelajari fenomena kosmik dan struktur alam semesta.",
    thumbnail_url: "https://res.cloudinary.com/dsn70eder/image/upload/v1763059149/thumbnail/i7wtx9jw41pecly0bwri.png",
  },
  {
    name: "Biologi",
    desc: "Pelajari struktur dan fungsi makhluk hidup melalui model 3D interaktif. Eksplorasi sel, organ, sistem tubuh, dan berbagai bentuk kehidupan.",
    thumbnail_url: "https://res.cloudinary.com/dsn70eder/image/upload/v1763058271/thumbnail/hurthsjq22kscerawyby.png",
  },
  {
    name: "Geografi",
    desc: "Eksplorasi bentuk bumi, gunung berapi, lempeng tektonik, dan berbagai fenomena geografis melalui model 3D interaktif.",
    thumbnail_url: "https://res.cloudinary.com/dsn70eder/image/upload/v1763059542/thumbnail/i9i919catgb4hkqvfwis.png",
  },
  {
    name: "Tumbuhan",
    desc: "Pelajari berbagai jenis tumbuhan, struktur, morfologi, dan peranannya dalam ekosistem dengan model 3D interaktif.",
    thumbnail_url: "https://res.cloudinary.com/dsn70eder/image/upload/v1763059583/thumbnail/imcyvul9uhinbfivewqn.png",
  },
  {
    name: "Hewan",
    desc: "Eksplorasi dunia hewan: anatomi, habitat, dan keunikan tiap spesies dengan visualisasi 3D yang menarik.",
    thumbnail_url: "https://res.cloudinary.com/dsn70eder/image/upload/v1763059562/thumbnail/t2scdozwtuxskrrpudou.png",
  },
  {
    name: "Transportasi",
    desc: "Pelajari berbagai moda transportasi, sejarah, dan cara kerjanya menggunakan model 3D interaktif.",
    thumbnail_url: "https://res.cloudinary.com/dsn70eder/image/upload/v1763059614/thumbnail/bigmyo5cibqcgvnqvuht.png",
  },
];

const topics = {
  "Biologi": [
    {
      title: "Ginjal",
      model_url: "https://cdn.jsdelivr.net/gh/badzlan/test-ar/model/biologi/ginjal.glb",
      marker_img_url: "https://cdn.jsdelivr.net/gh/badzlan/test-ar/marker/biologi/3.png",
      scale_model: 2
    },
    {
      title: "Otak",
      model_url: "https://cdn.jsdelivr.net/gh/badzlan/test-ar/model/biologi/otak.glb",
      marker_img_url: "https://cdn.jsdelivr.net/gh/badzlan/test-ar/marker/biologi/4.png",
      scale_model: 1
    },
    {
      title: "Tulang",
      model_url: "https://cdn.jsdelivr.net/gh/badzlan/test-ar/model/biologi/tulang.glb",
      marker_img_url: "https://cdn.jsdelivr.net/gh/badzlan/test-ar/marker/biologi/2.png",
      scale_model: 2
    },
    {
      title: "DNA",
      model_url: "https://cdn.jsdelivr.net/gh/badzlan/test-ar/model/biologi/dna.glb",
      marker_img_url: "https://cdn.jsdelivr.net/gh/badzlan/test-ar/marker/biologi/5.png",
      scale_model: 1
    },
    {
      title: "Jantung",
      model_url: "https://cdn.jsdelivr.net/gh/badzlan/test-ar/model/biologi/jantung.glb",
      marker_img_url: "https://cdn.jsdelivr.net/gh/badzlan/test-ar/marker/biologi/1.png",
      scale_model: 1.5
    }
  ],
  "Astronomi": [
    {
      title: "Bulan",
      model_url: "https://cdn.jsdelivr.net/gh/badzlan/test-ar/model/astronomi/bulan.glb",
      marker_img_url: "https://cdn.jsdelivr.net/gh/badzlan/test-ar/marker/astronomi/9.png",
      scale_model: 1
    },
    {
      title: "Bumi",
      model_url: "https://cdn.jsdelivr.net/gh/badzlan/test-ar/model/astronomi/bumi.glb",
      marker_img_url: "https://cdn.jsdelivr.net/gh/badzlan/test-ar/marker/astronomi/7.png",
      scale_model: 1
    },
    {
      title: "Tata Surya",
      model_url: "https://cdn.jsdelivr.net/gh/badzlan/test-ar/model/astronomi/tata-surya.glb",
      marker_img_url: "https://cdn.jsdelivr.net/gh/badzlan/test-ar/marker/astronomi/6.png",
      scale_model: 1
    },
    {
      title: "Matahari",
      model_url: "https://cdn.jsdelivr.net/gh/badzlan/test-ar/model/astronomi/matahari.glb",
      marker_img_url: "https://cdn.jsdelivr.net/gh/badzlan/test-ar/marker/astronomi/8.png",
      scale_model: 1
    },
    {
      title: "Asteroid",
      model_url: "https://cdn.jsdelivr.net/gh/badzlan/test-ar/model/astronomi/asteroid.glb",
      marker_img_url: "https://cdn.jsdelivr.net/gh/badzlan/test-ar/marker/astronomi/10.png",
      scale_model: 1
    }
  ],
  "Geografi": [
    {
      title: "Air Terjun",
      model_url: "https://cdn.jsdelivr.net/gh/badzlan/test-ar/model/geografi/air-terjun.glb",
      marker_img_url: "https://cdn.jsdelivr.net/gh/badzlan/test-ar/marker/geografi/12.png",
      scale_model: 1
    },
    {
      title: "Gurun",
      model_url: "https://cdn.jsdelivr.net/gh/badzlan/test-ar/model/geografi/gurun.glb",
      marker_img_url: "https://cdn.jsdelivr.net/gh/badzlan/test-ar/marker/geografi/13.png",
      scale_model: 1
    },
    {
      title: "Kutub",
      model_url: "https://cdn.jsdelivr.net/gh/badzlan/test-ar/model/geografi/kutub.glb",
      marker_img_url: "https://cdn.jsdelivr.net/gh/badzlan/test-ar/marker/geografi/15.png",
      scale_model: 1
    },
    {
      title: "Hutan",
      model_url: "https://cdn.jsdelivr.net/gh/badzlan/test-ar/model/geografi/hutan.glb",
      marker_img_url: "https://cdn.jsdelivr.net/gh/badzlan/test-ar/marker/geografi/14.png",
      scale_model: 1
    },
    {
      title: "Gunung Berapi",
      model_url: "https://cdn.jsdelivr.net/gh/badzlan/test-ar/model/geografi/gunung-berapi.glb",
      marker_img_url: "https://cdn.jsdelivr.net/gh/badzlan/test-ar/marker/geografi/11.png",
      scale_model: 1
    }
  ],
  "Transportasi": [
    {
      title: "Kapal Laut",
      model_url: "https://cdn.jsdelivr.net/gh/badzlan/test-ar/model/transportasi/kapal-laut.glb",
      marker_img_url: "https://cdn.jsdelivr.net/gh/badzlan/test-ar/marker/transportasi/28.png",
      scale_model: 1
    },
    {
      title: "Helikopter",
      model_url: "https://cdn.jsdelivr.net/gh/badzlan/test-ar/model/transportasi/helikopter.glb",
      marker_img_url: "https://cdn.jsdelivr.net/gh/badzlan/test-ar/marker/transportasi/29.png",
      scale_model: 1
    },
    {
      title: "Motor",
      model_url: "https://cdn.jsdelivr.net/gh/badzlan/test-ar/model/transportasi/motor.glb",
      marker_img_url: "https://cdn.jsdelivr.net/gh/badzlan/test-ar/marker/transportasi/27.png",
      scale_model: 1
    },
    {
      title: "Mobil",
      model_url: "https://cdn.jsdelivr.net/gh/badzlan/test-ar/model/transportasi/mobil.glb",
      marker_img_url: "https://cdn.jsdelivr.net/gh/badzlan/test-ar/marker/transportasi/26.png",
      scale_model: 1
    },
    {
      title: "Pesawat",
      model_url: "https://cdn.jsdelivr.net/gh/badzlan/test-ar/model/transportasi/pesawat.glb",
      marker_img_url: "https://cdn.jsdelivr.net/gh/badzlan/test-ar/marker/transportasi/30.png",
      scale_model: 1
    }
  ],
  "Tumbuhan": [
    {
      title: "Bunga Matahari",
      model_url: "https://cdn.jsdelivr.net/gh/badzlan/test-ar/model/tumbuhan/bunga-matahari.glb",
      marker_img_url: "https://cdn.jsdelivr.net/gh/badzlan/test-ar/marker/tumbuhan/22.png",
      scale_model: 1
    },
    {
      title: "Pohon Kelapa",
      model_url: "https://cdn.jsdelivr.net/gh/badzlan/test-ar/model/tumbuhan/pohon-kelapa.glb",
      marker_img_url: "https://cdn.jsdelivr.net/gh/badzlan/test-ar/marker/tumbuhan/21.png",
      scale_model: 1
    },
    {
      title: "Jamur",
      model_url: "https://cdn.jsdelivr.net/gh/badzlan/test-ar/model/tumbuhan/jamur.glb",
      marker_img_url: "https://cdn.jsdelivr.net/gh/badzlan/test-ar/marker/tumbuhan/24.png",
      scale_model: 1
    },
    {
      title: "Padi",
      model_url: "https://cdn.jsdelivr.net/gh/badzlan/test-ar/model/tumbuhan/padi.glb",
      marker_img_url: "https://cdn.jsdelivr.net/gh/badzlan/test-ar/marker/tumbuhan/23.png",
      scale_model: 1
    },
    {
      title: "Wortel",
      model_url: "https://cdn.jsdelivr.net/gh/badzlan/test-ar/model/tumbuhan/wortel.glb",
      marker_img_url: "https://cdn.jsdelivr.net/gh/badzlan/test-ar/marker/tumbuhan/25.png",
      scale_model: 1
    }
  ],
  "Hewan": [
    {
      title: "Kupu-Kupu",
      model_url: "https://cdn.jsdelivr.net/gh/badzlan/test-ar/model/hewan/kupu-kupu.glb",
      marker_img_url: "https://cdn.jsdelivr.net/gh/badzlan/test-ar/marker/hewan/18.png",
      scale_model: 1
    },
    {
      title: "Penguin",
      model_url: "https://cdn.jsdelivr.net/gh/badzlan/test-ar/model/hewan/penguin.glb",
      marker_img_url: "https://cdn.jsdelivr.net/gh/badzlan/test-ar/marker/hewan/20.png",
      scale_model: 1
    },
    {
      title: "Lumba-Lumba",
      model_url: "https://cdn.jsdelivr.net/gh/badzlan/test-ar/model/hewan/lumba-lumba.glb",
      marker_img_url: "https://cdn.jsdelivr.net/gh/badzlan/test-ar/marker/hewan/19.png",
      scale_model: 1
    },
    {
      title: "Gajah",
      model_url: "https://cdn.jsdelivr.net/gh/badzlan/test-ar/model/hewan/gajah.glb",
      marker_img_url: "https://cdn.jsdelivr.net/gh/badzlan/test-ar/marker/hewan/17.png",
      scale_model: 1
    },
    {
      title: "Singa",
      model_url: "https://cdn.jsdelivr.net/gh/badzlan/test-ar/model/hewan/singa.glb",
      marker_img_url: "https://cdn.jsdelivr.net/gh/badzlan/test-ar/marker/hewan/16.png",
      scale_model: 1
    }
  ]
};

const users = [
  {
    name: "Admin sudah datang",
    email: "admin@example.com",
    password: "password123",
    role: "admin",
    googleId: null,
    phone: "081234567890",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    bio: "Super admin user",
  },
  {
    name: "Guru Sains",
    email: "teacher@example.com",
    password: "password123",
    role: "teacher",
    googleId: null,
    phone: "081234567891",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    bio: "Guru mata pelajaran Sains",
  },
  {
    name: "Siswa Pintar",
    email: "student@example.com",
    password: "password123",
    role: "student",
    googleId: null,
    phone: "081234567892",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    bio: "Siswa yang aktif belajar",
  }, 
];

const quizzes = quizzesData;

// function getQuizzesForTopic(topicTitle) {
//   if (quizzesPerTopic[topicTitle]) return quizzesPerTopic[topicTitle];
//   // Quiz generic fallback
//   return [
//     {
//       question: `Apa yang paling benar tentang ${topicTitle}?`,
//       options: [
//         { id: "a", text: `${topicTitle} adalah topik penting` },
//         { id: "b", text: "Ini bukan topik penting" },
//         { id: "c", text: "Tidak ada jawaban yang benar" },
//         { id: "d", text: "Semua salah" },
//       ],
//       correct_answer: "a"
//     },
//     {
//       question: `Mana yang merupakan ciri khas dari ${topicTitle}?`,
//       options: [
//         { id: "a", text: "Jawaban khas 1" },
//         { id: "b", text: "Jawaban khas 2" },
//         { id: "c", text: "Jawaban khas 3" },
//         { id: "d", text: "Jawaban khas 4" },
//       ],
//       correct_answer: "a"
//     },
//     {
//       question: `Mengapa kita belajar tentang ${topicTitle}?`,
//       options: [
//         { id: "a", text: "Menambah pengetahuan" },
//         { id: "b", text: "Agar lupa" },
//         { id: "c", text: "Agar bosan" },
//         { id: "d", text: "Agar bingung" },
//       ],
//       correct_answer: "a"
//     },
//     {
//       question: `Apa peranan ${topicTitle} dalam tema ini?`,
//       options: [
//         { id: "a", text: "Peranan utama" },
//         { id: "b", text: "Tidak berperan" },
//         { id: "c", text: "Jarang berperan" },
//         { id: "d", text: "Tidak ada peranan" },
//       ],
//       correct_answer: "a"
//     },
//     {
//       question: `Pernyataan manakah yang paling tepat tentang ${topicTitle}?`,
//       options: [
//         { id: "a", text: "Pernyataan benar" },
//         { id: "b", text: "Pernyataan salah" },
//         { id: "c", text: "Tidak relevan" },
//         { id: "d", text: "Semua salah" },
//       ],
//       correct_answer: "a"
//     }
//   ];
// }

async function main() {
  console.log("Starting seeding...");

  // clear existing data
  console.log("Clearing existing data...");
  // await prisma.quizAnswer.deleteMany();
  // await prisma.quizResult.deleteMany();
  await prisma.quiz.deleteMany();
  // await prisma.topic.deleteMany();
  // await prisma.subject.deleteMany();
  // await prisma.user.deleteMany();

  // Seed: users
  // console.log("Seeding users...");
  // let userCount = 0;
  // for (const user of users) {
  //   let hashedPassword = null;
  //   if (user.password) {
  //     hashedPassword = await bcrypt.hash(user.password, 10);
  //   }
  //   await prisma.user.create({
  //     data: {
  //       name: user.name,
  //       email: user.email,
  //       password: hashedPassword,
  //       role: user.role,
  //       googleId: user.googleId,
  //     }
  //   });
  //   userCount++;
  //   console.log(`Created user: ${user.email}`);
  // }

  // Seed: subjects
  console.log("Seeding subjects...");
  const seededSubjects = {};

  for (const subjectData of subjects) {
    const createdSubject = await prisma.subject.create({
      data: subjectData,
    });
    seededSubjects[subjectData.name] = createdSubject;
    console.log(`Created subject: ${createdSubject.name}`);
  }

  // Seed: topics
  // console.log("\nSeeding topics...");
  // let topicCount = 0;

  // for (const [subjectName, topicsData] of Object.entries(topics)) {
  //   const subject = seededSubjects[subjectName];
    
  //   if (!subject) {
  //     console.warn(`Subject "${subjectName}" not found, skipping topics`);
  //     continue;
  //   }

  //   for (const topicData of topicsData) {
  //     await prisma.topic.create({
  //       data: {
  //         title: topicData.title,
  //         slug: generateSlug(topicData.title),
  //         desc: topicData.desc,
  //         model_url: topicData.model_url,
  //         marker_img_url: topicData.marker_img_url,
  //         scale_model: topicData.scale_model,
  //         content: topicData.content,
  //         subject: { connect: { id: subject.id } },
  //       },
  //     });
  //     topicCount++;
  //     console.log(`Created topic: ${topicData.title} (${subjectName})`);
  //   }
  // }

  // Seed: quiz
  console.log("\nSeeding quizzes...");
  let quizCount = 0;

  for (const [subjectName, topicsData] of Object.entries(topics)) {
    const subject = seededSubjects[subjectName];
    if (!subject) { continue; }

    for (const topicData of topicsData) {
      let quizzesForTopic = [];

      if (Array.isArray(topicData.quizzes) && topicData.quizzes.length > 0) {
        quizzesForTopic = topicData.quizzes;
      } else if (Array.isArray(quizzes)) {
        quizzesForTopic = quizzes;
      } else if (typeof quizzes === 'object' && quizzes !== null && Array.isArray(quizzes[topicData.title])) {
        quizzesForTopic = quizzes[topicData.title];
      } else {
        console.warn(`No quizzes found for topic: ${topicData.title}`);
        continue;
      }

      const topicSlug = generateSlug(topicData.title);
      const topic = await prisma.topic.findFirst({
        where: {
          subject_id: subject.id,
          slug: topicSlug,
        },
      });
      if (!topic) continue;

      for (const quiz of quizzesForTopic) {
        await prisma.quiz.create({
          data: {
            topic_id: topic.id,
            question: quiz.question,
            options: quiz.options,
            correct_answer: quiz.correct_answer,
          },
        });
        quizCount++;
        console.log(`Created quiz for topic: ${topicData.title}`);
      }
    }
  }

  console.log(`\nSeeding completed!`);

  // console.log(`- ${userCount} users in database`);
  // console.log(`- ${subjects.length} subjects created`);
  // console.log(`- ${topicCount} topics created`);
  console.log(`- ${quizCount} quizzes created`);
}

main()
  .catch((e) => {
    console.error("Error during seeding:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

