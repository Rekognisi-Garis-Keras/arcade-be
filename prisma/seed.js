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
    name: "Biologi",
    desc: "Pelajari struktur dan fungsi makhluk hidup melalui model 3D interaktif. Eksplorasi sel, organ, sistem tubuh, dan berbagai bentuk kehidupan.",
    thumbnail_url: "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?w=800",
  },
  {
    name: "Kimia",
    desc: "Eksplorasi molekul, reaksi kimia, dan struktur atom melalui visualisasi 3D yang interaktif. Pelajari tabel periodik, ikatan kimia, dan senyawa.",
    thumbnail_url: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800",
  },
  {
    name: "Fisika",
    desc: "Pelajari konsep fisika seperti gelombang, listrik, magnet, dan mekanika melalui simulasi dan model 3D yang dapat dimanipulasi.",
    thumbnail_url: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800",
  },
  {
    name: "Astronomi",
    desc: "Jelajahi tata surya, planet, bintang, dan galaksi melalui model 3D yang realistis. Pelajari fenomena kosmik dan struktur alam semesta.",
    thumbnail_url: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800",
  },
  {
    name: "Geografi",
    desc: "Eksplorasi bentuk bumi, gunung berapi, lempeng tektonik, dan berbagai fenomena geografis melalui model 3D interaktif.",
    thumbnail_url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
  },
];

const topics = {
  "Biologi": [
    {
      title: "Struktur Sel",
      desc: "Pelajari struktur sel hewan dan tumbuhan secara detail. Eksplorasi organel-organel seperti nukleus, mitokondria, retikulum endoplasma, dan lainnya.",
      model_url: "https://example.com/models/cell-structure.glb",
      marker_img_url: "https://example.com/markers/cell-marker.jpg",
      scale_model: "1:1000000",
      content: "<h1>Struktur Sel</h1><p>Sel adalah unit terkecil dari kehidupan. Pelajari komponen-komponen utama sel dan fungsinya melalui model 3D interaktif ini.</p>",
    },
    {
      title: "Sistem Peredaran Darah",
      desc: "Eksplorasi jantung manusia dan sistem peredaran darah. Pelajari aliran darah, pembuluh darah, dan fungsi jantung.",
      model_url: "https://example.com/models/circulatory-system.glb",
      marker_img_url: "https://example.com/markers/heart-marker.jpg",
      scale_model: "1:2",
      content: "<h1>Sistem Peredaran Darah</h1><p>Sistem peredaran darah mengangkut nutrisi dan oksigen ke seluruh tubuh. Pelajari struktur jantung dan pembuluh darah.</p>",
    },
    {
      title: "Sistem Pencernaan",
      desc: "Pelajari organ-organ sistem pencernaan manusia mulai dari mulut hingga anus. Eksplorasi proses pencernaan makanan.",
      model_url: "https://example.com/models/digestive-system.glb",
      marker_img_url: "https://example.com/markers/digestive-marker.jpg",
      scale_model: "1:3",
      content: "<h1>Sistem Pencernaan</h1><p>Sistem pencernaan memproses makanan yang kita konsumsi. Pelajari setiap organ dan fungsinya.</p>",
    },
    {
      title: "Struktur DNA",
      desc: "Eksplorasi struktur double helix DNA dan komponen-komponennya. Pelajari basa nitrogen dan pasangan basa.",
      model_url: "https://example.com/models/dna-structure.glb",
      marker_img_url: "https://example.com/markers/dna-marker.jpg",
      scale_model: "1:500000",
      content: "<h1>Struktur DNA</h1><p>DNA (Deoxyribonucleic Acid) adalah molekul yang menyimpan informasi genetik. Pelajari struktur double helix yang terkenal.</p>",
    },
  ],
  "Kimia": [
    {
      title: "Struktur Atom",
      desc: "Pelajari model atom Bohr dan mekanika kuantum. Eksplorasi elektron, proton, dan neutron dalam atom.",
      model_url: "https://example.com/models/atom-structure.glb",
      marker_img_url: "https://example.com/markers/atom-marker.jpg",
      scale_model: "1:100000000000",
      content: "<h1>Struktur Atom</h1><p>Atom adalah unit dasar materi. Pelajari komponen-komponen atom dan bagaimana mereka berinteraksi.</p>",
    },
    {
      title: "Molekul Air (H2O)",
      desc: "Eksplorasi struktur molekul air dan ikatan hidrogen. Pelajari sifat-sifat unik air.",
      model_url: "https://example.com/models/water-molecule.glb",
      marker_img_url: "https://example.com/markers/water-marker.jpg",
      scale_model: "1:1000000000",
      content: "<h1>Molekul Air</h1><p>Molekul air terdiri dari satu atom oksigen dan dua atom hidrogen. Pelajari ikatan kovalen dan sifat-sifat air.</p>",
    },
    {
      title: "Tabel Periodik Interaktif",
      desc: "Eksplorasi tabel periodik unsur dengan detail setiap elemen. Pelajari sifat-sifat kimia dan fisik.",
      model_url: "https://example.com/models/periodic-table.glb",
      marker_img_url: "https://example.com/markers/periodic-marker.jpg",
      scale_model: "1:10",
      content: "<h1>Tabel Periodik</h1><p>Tabel periodik mengorganisir semua unsur kimia berdasarkan nomor atom dan sifat-sifatnya.</p>",
    },
    {
      title: "Ikatan Kimia",
      desc: "Pelajari berbagai jenis ikatan kimia: ikatan kovalen, ionik, dan logam. Visualisasi interaksi antar atom.",
      model_url: "https://example.com/models/chemical-bonds.glb",
      marker_img_url: "https://example.com/markers/bonds-marker.jpg",
      scale_model: "1:1000000000",
      content: "<h1>Ikatan Kimia</h1><p>Ikatan kimia adalah gaya yang mengikat atom-atom bersama. Pelajari berbagai jenis ikatan dan karakteristiknya.</p>",
    },
  ],
  "Fisika": [
    {
      title: "Gelombang dan Getaran",
      desc: "Eksplorasi berbagai jenis gelombang: transversal, longitudinal, dan gelombang berdiri. Pelajari frekuensi, amplitudo, dan panjang gelombang.",
      model_url: "https://example.com/models/waves.glb",
      marker_img_url: "https://example.com/markers/waves-marker.jpg",
      scale_model: "1:1",
      content: "<h1>Gelombang dan Getaran</h1><p>Gelombang adalah gangguan yang merambat melalui medium. Pelajari karakteristik dan jenis-jenis gelombang.</p>",
    },
    {
      title: "Magnet dan Medan Magnet",
      desc: "Pelajari konsep magnet, kutub magnet, dan medan magnet. Visualisasi garis-garis medan magnet.",
      model_url: "https://example.com/models/magnetic-field.glb",
      marker_img_url: "https://example.com/markers/magnet-marker.jpg",
      scale_model: "1:5",
      content: "<h1>Magnet dan Medan Magnet</h1><p>Magnet menghasilkan medan magnet yang mempengaruhi benda-benda di sekitarnya. Pelajari konsep dasar magnetisme.</p>",
    },
    {
      title: "Sirkuit Listrik",
      desc: "Eksplorasi komponen sirkuit listrik: resistor, kapasitor, induktor, dan sumber tegangan. Pelajari hukum Ohm.",
      model_url: "https://example.com/models/electrical-circuit.glb",
      marker_img_url: "https://example.com/markers/circuit-marker.jpg",
      scale_model: "1:2",
      content: "<h1>Sirkuit Listrik</h1><p>Sirkuit listrik adalah jalur tertutup untuk aliran listrik. Pelajari komponen-komponen dan hukum-hukum dasar.</p>",
    },
  ],
  "Astronomi": [
    {
      title: "Tata Surya",
      desc: "Jelajahi planet-planet dalam tata surya kita. Pelajari orbit, ukuran, dan karakteristik setiap planet.",
      model_url: "https://example.com/models/solar-system.glb",
      marker_img_url: "https://example.com/markers/solar-system-marker.jpg",
      scale_model: "1:1000000000",
      content: "<h1>Tata Surya</h1><p>Tata surya terdiri dari Matahari dan semua benda langit yang mengorbitnya. Pelajari planet-planet dan orbitnya.</p>",
    },
    {
      title: "Struktur Matahari",
      desc: "Eksplorasi lapisan-lapisan Matahari: fotosfer, kromosfer, dan korona. Pelajari reaksi nuklir di inti Matahari.",
      model_url: "https://example.com/models/sun-structure.glb",
      marker_img_url: "https://example.com/markers/sun-marker.jpg",
      scale_model: "1:100000",
      content: "<h1>Struktur Matahari</h1><p>Matahari adalah bintang di pusat tata surya kita. Pelajari struktur internal dan eksternal Matahari.</p>",
    },
    {
      title: "Fase Bulan",
      desc: "Pelajari fase-fase Bulan dan bagaimana posisi Bulan relatif terhadap Bumi dan Matahari mempengaruhi fase-fase tersebut.",
      model_url: "https://example.com/models/moon-phases.glb",
      marker_img_url: "https://example.com/markers/moon-marker.jpg",
      scale_model: "1:500000",
      content: "<h1>Fase Bulan</h1><p>Bulan mengalami berbagai fase karena posisinya relatif terhadap Bumi dan Matahari. Pelajari siklus fase bulan.</p>",
    },
  ],
  "Geografi": [
    {
      title: "Lempeng Tektonik",
      desc: "Pelajari lempeng-lempeng tektonik Bumi dan bagaimana pergerakannya membentuk benua dan pegunungan.",
      model_url: "https://example.com/models/tectonic-plates.glb",
      marker_img_url: "https://example.com/markers/tectonic-marker.jpg",
      scale_model: "1:50000000",
      content: "<h1>Lempeng Tektonik</h1><p>Permukaan Bumi terdiri dari lempeng-lempeng tektonik yang terus bergerak. Pelajari teori tektonik lempeng.</p>",
    },
    {
      title: "Gunung Berapi",
      desc: "Eksplorasi struktur gunung berapi dan proses erupsi. Pelajari magma chamber, vent, dan kawah.",
      model_url: "https://example.com/models/volcano.glb",
      marker_img_url: "https://example.com/markers/volcano-marker.jpg",
      scale_model: "1:10000",
      content: "<h1>Gunung Berapi</h1><p>Gunung berapi adalah bukaan di permukaan Bumi yang mengeluarkan magma. Pelajari struktur dan jenis gunung berapi.</p>",
    },
    {
      title: "Siklus Air",
      desc: "Pelajari siklus air: evaporasi, kondensasi, presipitasi, dan infiltrasi. Eksplorasi perjalanan air di Bumi.",
      model_url: "https://example.com/models/water-cycle.glb",
      marker_img_url: "https://example.com/markers/water-cycle-marker.jpg",
      scale_model: "1:1",
      content: "<h1>Siklus Air</h1><p>Air terus bergerak melalui berbagai tahap: penguapan, kondensasi, dan presipitasi. Pelajari siklus air lengkap.</p>",
    },
  ],
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

const quizzes = [
  {
    question: "Apa ibukota Indonesia?",
    options: [
      { id: "a", text: "Jakarta" },
      { id: "b", text: "Bandung" },
      { id: "c", text: "Surabaya" },
      { id: "d", text: "Medan" },
    ],
    correct_answer: "a"
  },
  {
    question: "Senyawa kimia H2O dikenal sebagai?",
    options: [
      { id: "a", text: "Karbon Dioksida" },
      { id: "b", text: "Oksigen" },
      { id: "c", text: "Air" },
      { id: "d", text: "Hidrogen" },
    ],
    correct_answer: "c"
  },
  {
    question: "Planet terdekat dengan Matahari?",
    options: [
      { id: "a", text: "Venus" },
      { id: "b", text: "Merkurius" },
      { id: "c", text: "Mars" },
      { id: "d", text: "Bumi" },
    ],
    correct_answer: "b"
  },
  {
    question: "Bagian sel yang berfungsi sebagai pusat kontrol sel?",
    options: [
      { id: "a", text: "Mitokondria" },
      { id: "b", text: "Ribosom" },
      { id: "c", text: "Nukleus" },
      { id: "d", text: "Kloroplas" },
    ],
    correct_answer: "c"
  },
  {
    question: "Gunung tertinggi di Indonesia adalah?",
    options: [
      { id: "a", text: "Gunung Rinjani" },
      { id: "b", text: "Gunung Kerinci" },
      { id: "c", text: "Gunung Semeru" },
      { id: "d", text: "Puncak Jaya (Carstensz Pyramid)" },
    ],
    correct_answer: "d"
  }
];

async function main() {
  console.log("Starting seeding...");

  // clear existing data
  console.log("Clearing existing data...");
  await prisma.quizAnswer.deleteMany();
  await prisma.quizResult.deleteMany();
  await prisma.quiz.deleteMany();
  await prisma.topic.deleteMany();
  await prisma.subject.deleteMany();
  await prisma.user.deleteMany();

  // Seed: users
  console.log("Seeding users...");
  let userCount = 0;
  for (const user of users) {
    let hashedPassword = null;
    if (user.password) {
      hashedPassword = await bcrypt.hash(user.password, 10);
    }
    await prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: hashedPassword,
        role: user.role,
        googleId: user.googleId,
      }
    });
    userCount++;
    console.log(`Created user: ${user.email}`);
  }

  // Seed: subjects
  console.log("Seeding subjects...");
  const seededSubjects = {};

  for (const subjectData of subjects) {
    const subject = await prisma.subject.create({
      data: {
        name: subjectData.name,
        desc: subjectData.desc,
        slug: generateSlug(subjectData.name),
        thumbnail_url: subjectData.thumbnail_url,
      },
    });
    seededSubjects[subjectData.name] = subject;
    console.log(`Created subject: ${subject.name}`);
  }

  // Seed: topics
  console.log("\nSeeding topics...");
  let topicCount = 0;

  for (const [subjectName, topicsData] of Object.entries(topics)) {
    const subject = seededSubjects[subjectName];
    
    if (!subject) {
      console.warn(`Subject "${subjectName}" not found, skipping topics`);
      continue;
    }

    for (const topicData of topicsData) {
      await prisma.topic.create({
        data: {
          subject_id: subject.id,
          title: topicData.title,
          slug: generateSlug(topicData.title),
          desc: topicData.desc,
          model_url: topicData.model_url,
          marker_img_url: topicData.marker_img_url,
          scale_model: topicData.scale_model,
          content: topicData.content,
        },
      });
      topicCount++;
      console.log(`Created topic: ${topicData.title} (${subjectName})`);
    }
  }

  // Seed: quiz
  console.log("\nSeeding quizzes...");
  let quizCount = 0;

  for (const [subjectName, topicsData] of Object.entries(topics)) {
    const subject = seededSubjects[subjectName];
    if (!subject) continue;

    for (const topicData of topicsData) {
      const quizzesForTopic = Array.isArray(topicData.quizzes) && topicData.quizzes.length > 0
        ? topicData.quizzes
        : quizzes;

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

  console.log(`- ${userCount} users in database`);
  console.log(`- ${subjects.length} subjects created`);
  console.log(`- ${topicCount} topics created`);
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

