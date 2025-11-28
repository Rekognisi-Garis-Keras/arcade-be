const quizzesData = {
  // BIOLOGI
  "Ginjal": [
    {
      question: "Apa fungsi utama ginjal dalam tubuh manusia?",
      options: [
        { id: "a", text: "Menyaring darah" },
        { id: "b", text: "Mengatur detak jantung" },
        { id: "c", text: "Mengendalikan napas" },
        { id: "d", text: "Menghasilkan hormon insulin" },
      ],
      correct_answer: "a"
    },
    {
      question: "Ginjal terdiri dari berapa buah pada tubuh manusia normal?",
      options: [
        { id: "a", text: "Satu" },
        { id: "b", text: "Dua" },
        { id: "c", text: "Tiga" },
        { id: "d", text: "Empat" },
      ],
      correct_answer: "b"
    },
    {
      question: "Unit terkecil dalam ginjal yang berfungsi menyaring darah disebut?",
      options: [
        { id: "a", text: "Alveolus" },
        { id: "b", text: "Neuron" },
        { id: "c", text: "Nefron" },
        { id: "d", text: "Bronkus" },
      ],
      correct_answer: "c"
    },
    {
      question: "Zat apa yang dikeluarkan ginjal melalui urine?",
      options: [
        { id: "a", text: "Oksigen" },
        { id: "b", text: "Urea" },
        { id: "c", text: "Glukosa" },
        { id: "d", text: "Protein" },
      ],
      correct_answer: "b"
    },
    {
      question: "Di mana letak ginjal dalam tubuh manusia?",
      options: [
        { id: "a", text: "Di dada" },
        { id: "b", text: "Di perut bagian bawah" },
        { id: "c", text: "Di punggung bawah dekat pinggang" },
        { id: "d", text: "Di leher" },
      ],
      correct_answer: "c"
    }
  ],
  
  "Otak": [
    {
      question: "Apa fungsi utama otak dalam tubuh manusia?",
      options: [
        { id: "a", text: "Memompa darah" },
        { id: "b", text: "Mengatur sistem saraf dan berpikir" },
        { id: "c", text: "Menyaring udara" },
        { id: "d", text: "Mencerna makanan" },
      ],
      correct_answer: "b"
    },
    {
      question: "Bagian otak yang mengatur keseimbangan tubuh adalah?",
      options: [
        { id: "a", text: "Cerebrum" },
        { id: "b", text: "Cerebellum" },
        { id: "c", text: "Medula oblongata" },
        { id: "d", text: "Hipotalamus" },
      ],
      correct_answer: "b"
    },
    {
      question: "Otak manusia terdiri dari berapa bagian utama?",
      options: [
        { id: "a", text: "Dua" },
        { id: "b", text: "Tiga" },
        { id: "c", text: "Empat" },
        { id: "d", text: "Lima" },
      ],
      correct_answer: "b"
    },
    {
      question: "Bagian otak yang paling besar dan mengatur fungsi berpikir adalah?",
      options: [
        { id: "a", text: "Cerebrum" },
        { id: "b", text: "Cerebellum" },
        { id: "c", text: "Batang otak" },
        { id: "d", text: "Sumsum tulang belakang" },
      ],
      correct_answer: "a"
    },
    {
      question: "Otak dilindungi oleh tulang yang disebut?",
      options: [
        { id: "a", text: "Tulang rusuk" },
        { id: "b", text: "Tulang tengkorak" },
        { id: "c", text: "Tulang belakang" },
        { id: "d", text: "Tulang dada" },
      ],
      correct_answer: "b"
    }
  ],
  
  "Tulang": [
    {
      question: "Berapa jumlah tulang pada tubuh manusia dewasa?",
      options: [
        { id: "a", text: "106" },
        { id: "b", text: "156" },
        { id: "c", text: "206" },
        { id: "d", text: "256" },
      ],
      correct_answer: "c"
    },
    {
      question: "Apa fungsi utama tulang dalam tubuh manusia?",
      options: [
        { id: "a", text: "Menyimpan lemak" },
        { id: "b", text: "Menopang tubuh dan melindungi organ" },
        { id: "c", text: "Menghasilkan hormon" },
        { id: "d", text: "Mencerna makanan" },
      ],
      correct_answer: "b"
    },
    {
      question: "Tulang paling panjang dalam tubuh manusia adalah?",
      options: [
        { id: "a", text: "Tulang lengan" },
        { id: "b", text: "Tulang rusuk" },
        { id: "c", text: "Tulang paha (femur)" },
        { id: "d", text: "Tulang kering" },
      ],
      correct_answer: "c"
    },
    {
      question: "Sel yang bertugas membentuk tulang baru disebut?",
      options: [
        { id: "a", text: "Osteoblast" },
        { id: "b", text: "Osteoklas" },
        { id: "c", text: "Eritrosit" },
        { id: "d", text: "Leukosit" },
      ],
      correct_answer: "a"
    },
    {
      question: "Zat mineral apa yang membuat tulang menjadi keras dan kuat?",
      options: [
        { id: "a", text: "Zat besi" },
        { id: "b", text: "Kalsium" },
        { id: "c", text: "Kalium" },
        { id: "d", text: "Natrium" },
      ],
      correct_answer: "b"
    }
  ],
  
  "DNA": [
    {
      question: "DNA merupakan singkatan dari?",
      options: [
        { id: "a", text: "Deoxyribonucleic Acid" },
        { id: "b", text: "Dinitrogen Acid" },
        { id: "c", text: "Digital Natural Acid" },
        { id: "d", text: "Dioxide Natural Acid" },
      ],
      correct_answer: "a"
    },
    {
      question: "Apa fungsi utama DNA dalam sel?",
      options: [
        { id: "a", text: "Menghasilkan energi" },
        { id: "b", text: "Menyimpan informasi genetik" },
        { id: "c", text: "Memecah makanan" },
        { id: "d", text: "Mengatur suhu tubuh" },
      ],
      correct_answer: "b"
    },
    {
      question: "Bentuk struktur DNA adalah?",
      options: [
        { id: "a", text: "Spiral tunggal" },
        { id: "b", text: "Spiral ganda (double helix)" },
        { id: "c", text: "Lingkaran" },
        { id: "d", text: "Persegi" },
      ],
      correct_answer: "b"
    },
    {
      question: "Berapa jumlah basa nitrogen yang menyusun DNA?",
      options: [
        { id: "a", text: "2" },
        { id: "b", text: "3" },
        { id: "c", text: "4" },
        { id: "d", text: "5" },
      ],
      correct_answer: "c"
    },
    {
      question: "Di mana DNA berada dalam sel?",
      options: [
        { id: "a", text: "Di sitoplasma" },
        { id: "b", text: "Di nukleus (inti sel)" },
        { id: "c", text: "Di membran sel" },
        { id: "d", text: "Di ribosom" },
      ],
      correct_answer: "b"
    }
  ],
  
  "Jantung": [
    {
      question: "Apa fungsi utama jantung dalam tubuh?",
      options: [
        { id: "a", text: "Menyaring darah" },
        { id: "b", text: "Memompa darah ke seluruh tubuh" },
        { id: "c", text: "Mengatur napas" },
        { id: "d", text: "Mencerna makanan" },
      ],
      correct_answer: "b"
    },
    {
      question: "Jantung manusia terdiri dari berapa ruang?",
      options: [
        { id: "a", text: "2" },
        { id: "b", text: "3" },
        { id: "c", text: "4" },
        { id: "d", text: "5" },
      ],
      correct_answer: "c"
    },
    {
      question: "Bagian jantung yang menerima darah dari seluruh tubuh adalah?",
      options: [
        { id: "a", text: "Atrium kanan" },
        { id: "b", text: "Atrium kiri" },
        { id: "c", text: "Ventrikel kanan" },
        { id: "d", text: "Ventrikel kiri" },
      ],
      correct_answer: "a"
    },
    {
      question: "Berapa kali rata-rata jantung manusia berdetak dalam satu menit saat istirahat?",
      options: [
        { id: "a", text: "40-50 kali" },
        { id: "b", text: "60-100 kali" },
        { id: "c", text: "120-140 kali" },
        { id: "d", text: "150-180 kali" },
      ],
      correct_answer: "b"
    },
    {
      question: "Pembuluh darah yang membawa darah dari jantung ke paru-paru adalah?",
      options: [
        { id: "a", text: "Aorta" },
        { id: "b", text: "Vena cava" },
        { id: "c", text: "Arteri pulmonalis" },
        { id: "d", text: "Vena pulmonalis" },
      ],
      correct_answer: "c"
    }
  ],

  // ASTRONOMI
  "Bulan": [
    {
      question: "Bulan adalah satelit alami dari planet apa?",
      options: [
        { id: "a", text: "Mars" },
        { id: "b", text: "Venus" },
        { id: "c", text: "Bumi" },
        { id: "d", text: "Jupiter" },
      ],
      correct_answer: "c"
    },
    {
      question: "Berapa lama waktu yang dibutuhkan Bulan untuk mengelilingi Bumi?",
      options: [
        { id: "a", text: "7 hari" },
        { id: "b", text: "27-29 hari" },
        { id: "c", text: "365 hari" },
        { id: "d", text: "12 hari" },
      ],
      correct_answer: "b"
    },
    {
      question: "Mengapa Bulan tampak bercahaya di malam hari?",
      options: [
        { id: "a", text: "Bulan menghasilkan cahaya sendiri" },
        { id: "b", text: "Bulan memantulkan cahaya Matahari" },
        { id: "c", text: "Bulan menyerap cahaya bintang" },
        { id: "d", text: "Bulan bersinar karena panas" },
      ],
      correct_answer: "b"
    },
    {
      question: "Fase Bulan ketika tidak terlihat dari Bumi disebut?",
      options: [
        { id: "a", text: "Bulan purnama" },
        { id: "b", text: "Bulan sabit" },
        { id: "c", text: "Bulan baru" },
        { id: "d", text: "Bulan separuh" },
      ],
      correct_answer: "c"
    },
    {
      question: "Siapa manusia pertama yang mendarat di Bulan?",
      options: [
        { id: "a", text: "Yuri Gagarin" },
        { id: "b", text: "Neil Armstrong" },
        { id: "c", text: "Buzz Aldrin" },
        { id: "d", text: "John Glenn" },
      ],
      correct_answer: "b"
    }
  ],

  "Bumi": [
    {
      question: "Bumi merupakan planet ke berapa dari Matahari?",
      options: [
        { id: "a", text: "Kedua" },
        { id: "b", text: "Ketiga" },
        { id: "c", text: "Keempat" },
        { id: "d", text: "Kelima" },
      ],
      correct_answer: "b"
    },
    {
      question: "Berapa persen permukaan Bumi yang tertutup air?",
      options: [
        { id: "a", text: "50%" },
        { id: "b", text: "60%" },
        { id: "c", text: "71%" },
        { id: "d", text: "85%" },
      ],
      correct_answer: "c"
    },
    {
      question: "Lapisan atmosfer Bumi yang paling dekat dengan permukaan adalah?",
      options: [
        { id: "a", text: "Stratosfer" },
        { id: "b", text: "Troposfer" },
        { id: "c", text: "Mesosfer" },
        { id: "d", text: "Termosfer" },
      ],
      correct_answer: "b"
    },
    {
      question: "Berapa lama waktu yang dibutuhkan Bumi untuk berputar pada porosnya?",
      options: [
        { id: "a", text: "12 jam" },
        { id: "b", text: "24 jam" },
        { id: "c", text: "48 jam" },
        { id: "d", text: "7 hari" },
      ],
      correct_answer: "b"
    },
    {
      question: "Lapisan terluar Bumi yang padat disebut?",
      options: [
        { id: "a", text: "Inti dalam" },
        { id: "b", text: "Mantel" },
        { id: "c", text: "Kerak" },
        { id: "d", text: "Inti luar" },
      ],
      correct_answer: "c"
    }
  ],

  "Tata Surya": [
    {
      question: "Berapa jumlah planet dalam Tata Surya kita?",
      options: [
        { id: "a", text: "7" },
        { id: "b", text: "8" },
        { id: "c", text: "9" },
        { id: "d", text: "10" },
      ],
      correct_answer: "b"
    },
    {
      question: "Planet terbesar di Tata Surya adalah?",
      options: [
        { id: "a", text: "Saturnus" },
        { id: "b", text: "Jupiter" },
        { id: "c", text: "Uranus" },
        { id: "d", text: "Neptunus" },
      ],
      correct_answer: "b"
    },
    {
      question: "Planet terdekat dengan Matahari adalah?",
      options: [
        { id: "a", text: "Venus" },
        { id: "b", text: "Bumi" },
        { id: "c", text: "Merkurius" },
        { id: "d", text: "Mars" },
      ],
      correct_answer: "c"
    },
    {
      question: "Planet yang memiliki cincin adalah?",
      options: [
        { id: "a", text: "Mars" },
        { id: "b", text: "Saturnus" },
        { id: "c", text: "Venus" },
        { id: "d", text: "Merkurius" },
      ],
      correct_answer: "b"
    },
    {
      question: "Apa nama galaksi tempat Tata Surya kita berada?",
      options: [
        { id: "a", text: "Andromeda" },
        { id: "b", text: "Bima Sakti" },
        { id: "c", text: "Triangulum" },
        { id: "d", text: "Magellan" },
      ],
      correct_answer: "b"
    }
  ],

  "Matahari": [
    {
      question: "Matahari adalah jenis bintang apa?",
      options: [
        { id: "a", text: "Bintang raksasa" },
        { id: "b", text: "Bintang katai" },
        { id: "c", text: "Bintang sedang" },
        { id: "d", text: "Bintang neutron" },
      ],
      correct_answer: "c"
    },
    {
      question: "Apa sumber energi utama Matahari?",
      options: [
        { id: "a", text: "Pembakaran gas" },
        { id: "b", text: "Fusi nuklir" },
        { id: "c", text: "Reaksi kimia" },
        { id: "d", text: "Gesekan" },
      ],
      correct_answer: "b"
    },
    {
      question: "Berapa suhu di permukaan Matahari?",
      options: [
        { id: "a", text: "1.000°C" },
        { id: "b", text: "3.000°C" },
        { id: "c", text: "5.500°C" },
        { id: "d", text: "10.000°C" },
      ],
      correct_answer: "c"
    },
    {
      question: "Lapisan terluar Matahari yang terlihat saat gerhana matahari total disebut?",
      options: [
        { id: "a", text: "Fotosfer" },
        { id: "b", text: "Kromosfer" },
        { id: "c", text: "Korona" },
        { id: "d", text: "Inti" },
      ],
      correct_answer: "c"
    },
    {
      question: "Berapa jarak rata-rata Bumi dari Matahari?",
      options: [
        { id: "a", text: "50 juta km" },
        { id: "b", text: "100 juta km" },
        { id: "c", text: "150 juta km" },
        { id: "d", text: "200 juta km" },
      ],
      correct_answer: "c"
    }
  ],

  "Asteroid": [
    {
      question: "Asteroid sebagian besar berada di sabuk asteroid antara orbit planet apa?",
      options: [
        { id: "a", text: "Bumi dan Mars" },
        { id: "b", text: "Mars dan Jupiter" },
        { id: "c", text: "Jupiter dan Saturnus" },
        { id: "d", text: "Venus dan Bumi" },
      ],
      correct_answer: "b"
    },
    {
      question: "Asteroid terbuat dari bahan apa?",
      options: [
        { id: "a", text: "Gas" },
        { id: "b", text: "Es" },
        { id: "c", text: "Batuan dan logam" },
        { id: "d", text: "Debu" },
      ],
      correct_answer: "c"
    },
    {
      question: "Apa perbedaan utama asteroid dengan komet?",
      options: [
        { id: "a", text: "Asteroid tidak memiliki ekor" },
        { id: "b", text: "Asteroid lebih besar" },
        { id: "c", text: "Asteroid bercahaya" },
        { id: "d", text: "Asteroid mengorbit Bulan" },
      ],
      correct_answer: "a"
    },
    {
      question: "Asteroid yang pernah menabrak Bumi dan menyebabkan kepunahan dinosaurus terjadi berapa juta tahun lalu?",
      options: [
        { id: "a", text: "30 juta tahun" },
        { id: "b", text: "45 juta tahun" },
        { id: "c", text: "65 juta tahun" },
        { id: "d", text: "100 juta tahun" },
      ],
      correct_answer: "c"
    },
    {
      question: "Asteroid terbesar di Tata Surya bernama?",
      options: [
        { id: "a", text: "Vesta" },
        { id: "b", text: "Pallas" },
        { id: "c", text: "Ceres" },
        { id: "d", text: "Eros" },
      ],
      correct_answer: "c"
    }
  ],

  // GEOGRAFI
  "Air Terjun": [
    {
      question: "Air terjun terbentuk karena?",
      options: [
        { id: "a", text: "Erosi sungai pada bebatuan" },
        { id: "b", text: "Gempa bumi" },
        { id: "c", text: "Letusan gunung" },
        { id: "d", text: "Angin kencang" },
      ],
      correct_answer: "a"
    },
    {
      question: "Air terjun tertinggi di dunia adalah?",
      options: [
        { id: "a", text: "Niagara" },
        { id: "b", text: "Victoria" },
        { id: "c", text: "Angel Falls" },
        { id: "d", text: "Iguazu" },
      ],
      correct_answer: "c"
    },
    {
      question: "Air terjun Angel Falls berada di negara?",
      options: [
        { id: "a", text: "Brasil" },
        { id: "b", text: "Venezuela" },
        { id: "c", text: "Argentina" },
        { id: "d", text: "Kolombia" },
      ],
      correct_answer: "b"
    },
    {
      question: "Apa manfaat air terjun bagi ekosistem?",
      options: [
        { id: "a", text: "Menghasilkan oksigen untuk air" },
        { id: "b", text: "Mengurangi suhu udara" },
        { id: "c", text: "Mencegah banjir" },
        { id: "d", text: "Menghasilkan energi panas" },
      ],
      correct_answer: "a"
    },
    {
      question: "Air terjun dapat dimanfaatkan untuk menghasilkan?",
      options: [
        { id: "a", text: "Minyak bumi" },
        { id: "b", text: "Listrik (PLTA)" },
        { id: "c", text: "Gas alam" },
        { id: "d", text: "Batu bara" },
      ],
      correct_answer: "b"
    }
  ],

  "Gurun": [
    {
      question: "Gurun adalah daerah yang memiliki curah hujan?",
      options: [
        { id: "a", text: "Sangat tinggi" },
        { id: "b", text: "Tinggi" },
        { id: "c", text: "Sedang" },
        { id: "d", text: "Sangat rendah" },
      ],
      correct_answer: "d"
    },
    {
      question: "Gurun terbesar di dunia adalah?",
      options: [
        { id: "a", text: "Gurun Sahara" },
        { id: "b", text: "Gurun Gobi" },
        { id: "c", text: "Gurun Arabia" },
        { id: "d", text: "Gurun Antartika" },
      ],
      correct_answer: "d"
    },
    {
      question: "Tumbuhan khas yang hidup di gurun adalah?",
      options: [
        { id: "a", text: "Padi" },
        { id: "b", text: "Kaktus" },
        { id: "c", text: "Teratai" },
        { id: "d", text: "Anggrek" },
      ],
      correct_answer: "b"
    },
    {
      question: "Perbedaan suhu siang dan malam di gurun sangat ekstrem karena?",
      options: [
        { id: "a", text: "Tidak ada awan" },
        { id: "b", text: "Terlalu banyak pohon" },
        { id: "c", text: "Banyak air" },
        { id: "d", text: "Angin kencang" },
      ],
      correct_answer: "a"
    },
    {
      question: "Gurun Sahara terletak di benua?",
      options: [
        { id: "a", text: "Asia" },
        { id: "b", text: "Amerika" },
        { id: "c", text: "Afrika" },
        { id: "d", text: "Australia" },
      ],
      correct_answer: "c"
    }
  ],

  "Kutub": [
    {
      question: "Dua wilayah kutub di Bumi adalah?",
      options: [
        { id: "a", text: "Kutub Utara dan Kutub Selatan" },
        { id: "b", text: "Kutub Timur dan Kutub Barat" },
        { id: "c", text: "Kutub Atas dan Kutub Bawah" },
        { id: "d", text: "Kutub Kanan dan Kutub Kiri" },
      ],
      correct_answer: "a"
    },
    {
      question: "Hewan khas yang hidup di Kutub Utara adalah?",
      options: [
        { id: "a", text: "Penguin" },
        { id: "b", text: "Beruang kutub" },
        { id: "c", text: "Kangguru" },
        { id: "d", text: "Gajah" },
      ],
      correct_answer: "b"
    },
    {
      question: "Benua yang berada di Kutub Selatan adalah?",
      options: [
        { id: "a", text: "Amerika" },
        { id: "b", text: "Eropa" },
        { id: "c", text: "Antartika" },
        { id: "d", text: "Australia" },
      ],
      correct_answer: "c"
    },
    {
      question: "Fenomena alam berupa cahaya berwarna-warni di langit kutub disebut?",
      options: [
        { id: "a", text: "Pelangi" },
        { id: "b", text: "Aurora" },
        { id: "c", text: "Meteor" },
        { id: "d", text: "Komet" },
      ],
      correct_answer: "b"
    },
    {
      question: "Suhu di wilayah kutub bisa mencapai?",
      options: [
        { id: "a", text: "0°C hingga 10°C" },
        { id: "b", text: "-10°C hingga -20°C" },
        { id: "c", text: "-40°C hingga -90°C" },
        { id: "d", text: "20°C hingga 30°C" },
      ],
      correct_answer: "c"
    }
  ],

  "Hutan": [
    {
      question: "Hutan yang memiliki keanekaragaman hayati tertinggi adalah?",
      options: [
        { id: "a", text: "Hutan hujan tropis" },
        { id: "b", text: "Hutan pinus" },
        { id: "c", text: "Hutan jati" },
        { id: "d", text: "Hutan bakau" },
      ],
      correct_answer: "a"
    },
    {
      question: "Apa fungsi utama hutan bagi Bumi?",
      options: [
        { id: "a", text: "Menghasilkan oksigen dan menyerap CO2" },
        { id: "b", text: "Menghasilkan listrik" },
        { id: "c", text: "Menyimpan minyak bumi" },
        { id: "d", text: "Membuat tanah tandus" },
      ],
      correct_answer: "a"
    },
    {
      question: "Hutan Amazon terletak di benua?",
      options: [
        { id: "a", text: "Afrika" },
        { id: "b", text: "Asia" },
        { id: "c", text: "Amerika Selatan" },
        { id: "d", text: "Eropa" },
      ],
      correct_answer: "c"
    },
    {
      question: "Proses hilangnya hutan akibat penebangan disebut?",
      options: [
        { id: "a", text: "Reboisasi" },
        { id: "b", text: "Deforestasi" },
        { id: "c", text: "Aforestasi" },
        { id: "d", text: "Konservasi" },
      ],
      correct_answer: "b"
    },
    {
      question: "Hutan bakau berfungsi untuk?",
      options: [
        { id: "a", text: "Mencegah erosi pantai" },
        { id: "b", text: "Menghasilkan minyak" },
        { id: "c", text: "Menyimpan es" },
        { id: "d", text: "Membuat gurun" },
      ],
      correct_answer: "a"
    }
  ],

  "Gunung Berapi": [
    {
      question: "Gunung berapi adalah gunung yang?",
      options: [
        { id: "a", text: "Selalu tertutup salju" },
        { id: "b", text: "Dapat mengeluarkan magma" },
        { id: "c", text: "Berada di laut" },
        { id: "d", text: "Tidak memiliki puncak" },
      ],
      correct_answer: "b"
    },
    {
      question: "Material cair panas yang keluar dari gunung berapi disebut?",
      options: [
        { id: "a", text: "Air panas" },
        { id: "b", text: "Lava" },
        { id: "c", text: "Gas beracun" },
        { id: "d", text: "Batu" },
      ],
      correct_answer: "b"
    },
    {
      question: "Indonesia memiliki banyak gunung berapi karena berada di jalur?",
      options: [
        { id: "a", text: "Lingkaran Arktik" },
        { id: "b", text: "Garis Khatulistiwa" },
        { id: "c", text: "Cincin Api Pasifik" },
        { id: "d", text: "Kutub Selatan" },
      ],
      correct_answer: "c"
    },
    {
      question: "Gunung berapi yang tidak aktif lagi disebut?",
      options: [
        { id: "a", text: "Gunung mati" },
        { id: "b", text: "Gunung tidur" },
        { id: "c", text: "Gunung istirahat" },
        { id: "d", text: "Gunung siaga" },
      ],
      correct_answer: "a"
    },
    {
      question: "Abu vulkanik dari gunung berapi dapat menyuburkan tanah karena mengandung?",
      options: [
        { id: "a", text: "Plastik" },
        { id: "b", text: "Mineral" },
        { id: "c", text: "Sampah" },
        { id: "d", text: "Logam berat" },
      ],
      correct_answer: "b"
    }
  ],

  // TRANSPORTASI
  "Kapal Laut": [
    {
      question: "Kapal laut mengapung di air karena prinsip?",
      options: [
        { id: "a", text: "Archimedes" },
        { id: "b", text: "Newton" },
        { id: "c", text: "Einstein" },
        { id: "d", text: "Pascal" },
      ],
      correct_answer: "a"
    },
    {
      question: "Bagian kapal yang berfungsi untuk menentukan arah disebut?",
      options: [
        { id: "a", text: "Jangkar" },
        { id: "b", text: "Kemudi" },
        { id: "c", text: "Layar" },
        { id: "d", text: "Mesin" },
      ],
      correct_answer: "b"
    },
    {
      question: "Kapal laut pertama kali digerakkan dengan?",
      options: [
        { id: "a", text: "Mesin diesel" },
        { id: "b", text: "Tenaga nuklir" },
        { id: "c", text: "Layar dan dayung" },
        { id: "d", text: "Listrik" },
      ],
      correct_answer: "c"
    },
    {
      question: "Kapal besar yang mengangkut barang dalam jumlah banyak disebut?",
      options: [
        { id: "a", text: "Kapal pesiar" },
        { id: "b", text: "Kapal kargo" },
        { id: "c", text: "Kapal selam" },
        { id: "d", text: "Kapal perang" },
      ],
      correct_answer: "b"
    },
    {
      question: "Titanic adalah kapal yang terkenal karena?",
      options: [
        { id: "a", text: "Kapal tercepat" },
        { id: "b", text: "Tenggelam saat pelayaran perdana" },
        { id: "c", text: "Kapal terkecil" },
        { id: "d", text: "Kapal perang terkuat" },
      ],
      correct_answer: "b"
    }
  ],

  "Helikopter": [
    {
      question: "Helikopter dapat terbang dan melayang di udara menggunakan?",
      options: [
        { id: "a", text: "Sayap tetap" },
        { id: "b", text: "Baling-baling rotor" },
        { id: "c", text: "Jet engine" },
        { id: "d", text: "Balon udara" },
      ],
      correct_answer: "b"
    },
    {
      question: "Kelebihan helikopter dibanding pesawat adalah?",
      options: [
        { id: "a", text: "Lebih cepat" },
        { id: "b", text: "Dapat mendarat vertikal" },
        { id: "c", text: "Lebih hemat bahan bakar" },
        { id: "d", text: "Lebih besar" },
      ],
      correct_answer: "b"
    },
    {
      question: "Helikopter sering digunakan untuk?",
      options: [
        { id: "a", text: "Transportasi antarnegara" },
        { id: "b", text: "Evakuasi medis dan penyelamatan" },
        { id: "c", text: "Mengangkut barang berat jarak jauh" },
        { id: "d", text: "Perjalanan luar angkasa" },
      ],
      correct_answer: "b"
    },
    {
      question: "Baling-baling kecil di ekor helikopter berfungsi untuk?",
      options: [
        { id: "a", text: "Menambah kecepatan" },
        { id: "b", text: "Mengontrol arah dan stabilitas" },
        { id: "c", text: "Menambah ketinggian" },
        { id: "d", text: "Hiasan" },
      ],
      correct_answer: "b"
    },
    {
      question: "Siapa penemu helikopter modern?",
      options: [
        { id: "a", text: "Wright Bersaudara" },
        { id: "b", text: "Igor Sikorsky" },
        { id: "c", text: "Leonardo da Vinci" },
        { id: "d", text: "Henry Ford" },
      ],
      correct_answer: "b"
    }
  ],

  "Motor": [
    {
      question: "Motor adalah kendaraan beroda?",
      options: [
        { id: "a", text: "Satu" },
        { id: "b", text: "Dua" },
        { id: "c", text: "Tiga" },
        { id: "d", text: "Empat" },
      ],
      correct_answer: "b"
    },
    {
      question: "Bahan bakar yang umum digunakan motor adalah?",
      options: [
        { id: "a", text: "Solar" },
        { id: "b", text: "Bensin" },
        { id: "c", text: "Gas alam" },
        { id: "d", text: "Batu bara" },
      ],
      correct_answer: "b"
    },
    {
      question: "Alat pengaman penting yang harus dipakai pengendara motor adalah?",
      options: [
        { id: "a", text: "Topi" },
        { id: "b", text: "Helm" },
        { id: "c", text: "Kacamata hitam" },
        { id: "d", text: "Sarung tangan" },
      ],
      correct_answer: "b"
    },
    {
      question: "Motor digerakkan oleh?",
      options: [
        { id: "a", text: "Pedal" },
        { id: "b", text: "Mesin pembakaran dalam" },
        { id: "c", text: "Tenaga angin" },
        { id: "d", text: "Gravitasi" },
      ],
      correct_answer: "b"
    },
    {
      question: "Motor listrik menggunakan energi dari?",
      options: [
        { id: "a", text: "Bensin" },
        { id: "b", text: "Solar" },
        { id: "c", text: "Baterai" },
        { id: "d", text: "Minyak tanah" },
      ],
      correct_answer: "c"
    }
  ],

  "Mobil": [
    {
      question: "Mobil adalah kendaraan beroda?",
      options: [
        { id: "a", text: "Dua" },
        { id: "b", text: "Tiga" },
        { id: "c", text: "Empat atau lebih" },
        { id: "d", text: "Enam" },
      ],
      correct_answer: "c"
    },
    {
      question: "Siapa penemu mobil pertama dengan mesin bensin?",
      options: [
        { id: "a", text: "Henry Ford" },
        { id: "b", text: "Karl Benz" },
        { id: "c", text: "Thomas Edison" },
        { id: "d", text: "Nikola Tesla" },
      ],
      correct_answer: "b"
    },
    {
      question: "Bagian mobil yang mengubah energi kimia menjadi energi mekanik adalah?",
      options: [
        { id: "a", text: "Roda" },
        { id: "b", text: "Mesin" },
        { id: "c", text: "Kemudi" },
        { id: "d", text: "Rem" },
      ],
      correct_answer: "b"
    },
    {
      question: "Mobil listrik ramah lingkungan karena?",
      options: [
        { id: "a", text: "Lebih murah" },
        { id: "b", text: "Tidak menghasilkan emisi gas buang" },
        { id: "c", text: "Lebih cepat" },
        { id: "d", text: "Lebih ringan" },
      ],
      correct_answer: "b"
    },
    {
      question: "Alat pengaman yang wajib dipakai penumpang mobil adalah?",
      options: [
        { id: "a", text: "Helm" },
        { id: "b", text: "Sabuk pengaman" },
        { id: "c", text: "Jaket" },
        { id: "d", text: "Sepatu boot" },
      ],
      correct_answer: "b"
    }
  ],

  "Pesawat": [
    {
      question: "Pesawat dapat terbang karena prinsip?",
      options: [
        { id: "a", text: "Archimedes" },
        { id: "b", text: "Bernoulli" },
        { id: "c", text: "Pascal" },
        { id: "d", text: "Newton ketiga" },
      ],
      correct_answer: "b"
    },
    {
      question: "Siapa penemu pesawat terbang pertama?",
      options: [
        { id: "a", text: "Wright Bersaudara" },
        { id: "b", text: "Henry Ford" },
        { id: "c", text: "Karl Benz" },
        { id: "d", text: "Thomas Edison" },
      ],
      correct_answer: "a"
    },
    {
      question: "Bagian pesawat yang menghasilkan gaya dorong adalah?",
      options: [
        { id: "a", text: "Sayap" },
        { id: "b", text: "Ekor" },
        { id: "c", text: "Mesin/turbin" },
        { id: "d", text: "Roda" },
      ],
      correct_answer: "c"
    },
    {
      question: "Pesawat komersial terbesar di dunia adalah?",
      options: [
        { id: "a", text: "Boeing 747" },
        { id: "b", text: "Airbus A380" },
        { id: "c", text: "Boeing 777" },
        { id: "d", text: "Concorde" },
      ],
      correct_answer: "b"
    },
    {
      question: "Bagian pesawat yang berfungsi untuk mengontrol arah naik-turun adalah?",
      options: [
        { id: "a", text: "Aileron" },
        { id: "b", text: "Elevator" },
        { id: "c", text: "Rudder" },
        { id: "d", text: "Flap" },
      ],
      correct_answer: "b"
    }
  ],

  // TUMBUHAN
  "Bunga Matahari": [
    {
      question: "Bunga matahari terkenal karena dapat?",
      options: [
        { id: "a", text: "Tumbuh di air" },
        { id: "b", text: "Mengikuti arah matahari" },
        { id: "c", text: "Bercahaya di malam hari" },
        { id: "d", text: "Berbunga sepanjang tahun" },
      ],
      correct_answer: "b"
    },
    {
      question: "Bagian bunga matahari yang dapat diolah menjadi minyak adalah?",
      options: [
        { id: "a", text: "Kelopak" },
        { id: "b", text: "Batang" },
        { id: "c", text: "Biji" },
        { id: "d", text: "Daun" },
      ],
      correct_answer: "c"
    },
    {
      question: "Warna khas bunga matahari adalah?",
      options: [
        { id: "a", text: "Merah" },
        { id: "b", text: "Kuning" },
        { id: "c", text: "Biru" },
        { id: "d", text: "Putih" },
      ],
      correct_answer: "b"
    },
    {
      question: "Bunga matahari berasal dari benua?",
      options: [
        { id: "a", text: "Asia" },
        { id: "b", text: "Afrika" },
        { id: "c", text: "Amerika" },
        { id: "d", text: "Eropa" },
      ],
      correct_answer: "c"
    },
    {
      question: "Fenomena bunga matahari mengikuti arah matahari disebut?",
      options: [
        { id: "a", text: "Fotosintesis" },
        { id: "b", text: "Heliotropisme" },
        { id: "c", text: "Geotropisme" },
        { id: "d", text: "Hidrotropisme" },
      ],
      correct_answer: "b"
    }
  ],

  "Pohon Kelapa": [
    {
      question: "Pohon kelapa sering disebut sebagai pohon?",
      options: [
        { id: "a", text: "Seribu manfaat" },
        { id: "b", text: "Kehidupan" },
        { id: "c", text: "Langit" },
        { id: "d", text: "Surgawi" },
      ],
      correct_answer: "a"
    },
    {
      question: "Air kelapa muda mengandung banyak?",
      options: [
        { id: "a", text: "Protein" },
        { id: "b", text: "Elektrolit dan mineral" },
        { id: "c", text: "Lemak" },
        { id: "d", text: "Vitamin A" },
      ],
      correct_answer: "b"
    },
    {
      question: "Bagian kelapa yang dapat dibuat menjadi santan adalah?",
      options: [
        { id: "a", text: "Sabut" },
        { id: "b", text: "Tempurung" },
        { id: "c", text: "Daging buah" },
        { id: "d", text: "Batang" },
      ],
      correct_answer: "c"
    },
    {
      question: "Pohon kelapa umumnya tumbuh di daerah?",
      options: [
        { id: "a", text: "Pegunungan" },
        { id: "b", text: "Pantai tropis" },
        { id: "c", text: "Gurun" },
        { id: "d", text: "Kutub" },
      ],
      correct_answer: "b"
    },
    {
      question: "Sabut kelapa dapat dimanfaatkan untuk?",
      options: [
        { id: "a", text: "Bahan bakar" },
        { id: "b", text: "Keset dan tali" },
        { id: "c", text: "Obat-obatan" },
        { id: "d", text: "Pewarna" },
      ],
      correct_answer: "b"
    }
  ],

  "Jamur": [
    {
      question: "Jamur tidak termasuk tumbuhan karena tidak memiliki?",
      options: [
        { id: "a", text: "Akar" },
        { id: "b", text: "Klorofil" },
        { id: "c", text: "Spora" },
        { id: "d", text: "Dinding sel" },
      ],
      correct_answer: "b"
    },
    {
      question: "Jamur mendapatkan makanan dengan cara?",
      options: [
        { id: "a", text: "Fotosintesis" },
        { id: "b", text: "Menyerap dari organisme lain" },
        { id: "c", text: "Berburu" },
        { id: "d", text: "Memakan tanah" },
      ],
      correct_answer: "b"
    },
    {
      question: "Jamur berkembang biak dengan?",
      options: [
        { id: "a", text: "Biji" },
        { id: "b", text: "Bunga" },
        { id: "c", text: "Spora" },
        { id: "d", text: "Buah" },
      ],
      correct_answer: "c"
    },
    {
      question: "Jamur yang dapat dimakan contohnya?",
      options: [
        { id: "a", text: "Jamur kuping" },
        { id: "b", text: "Jamur beracun" },
        { id: "c", text: "Jamur karat" },
        { id: "d", text: "Jamur lendir" },
      ],
      correct_answer: "a"
    },
    {
      question: "Jamur umumnya tumbuh di tempat yang?",
      options: [
        { id: "a", text: "Panas dan kering" },
        { id: "b", text: "Lembab dan teduh" },
        { id: "c", text: "Terang benderang" },
        { id: "d", text: "Berangin kencang" },
      ],
      correct_answer: "b"
    }
  ],

  "Padi": [
    {
      question: "Padi adalah tanaman penghasil?",
      options: [
        { id: "a", text: "Gandum" },
        { id: "b", text: "Beras" },
        { id: "c", text: "Jagung" },
        { id: "d", text: "Kedelai" },
      ],
      correct_answer: "b"
    },
    {
      question: "Padi umumnya ditanam di?",
      options: [
        { id: "a", text: "Gurun" },
        { id: "b", text: "Sawah" },
        { id: "c", text: "Hutan" },
        { id: "d", text: "Pantai" },
      ],
      correct_answer: "b"
    },
    {
      question: "Berapa lama waktu yang dibutuhkan padi dari tanam hingga panen?",
      options: [
        { id: "a", text: "1-2 bulan" },
        { id: "b", text: "3-4 bulan" },
        { id: "c", text: "6-7 bulan" },
        { id: "d", text: "1 tahun" },
      ],
      correct_answer: "b"
    },
    {
      question: "Negara penghasil beras terbesar di dunia adalah?",
      options: [
        { id: "a", text: "Indonesia" },
        { id: "b", text: "Thailand" },
        { id: "c", text: "China" },
        { id: "d", text: "India" },
      ],
      correct_answer: "c"
    },
    {
      question: "Padi membutuhkan banyak air, terutama saat fase?",
      options: [
        { id: "a", text: "Penanaman" },
        { id: "b", text: "Pertumbuhan" },
        { id: "c", text: "Panen" },
        { id: "d", text: "Penyimpanan" },
      ],
      correct_answer: "b"
    }
  ],

  "Wortel": [
    {
      question: "Bagian wortel yang dapat dimakan adalah?",
      options: [
        { id: "a", text: "Daun" },
        { id: "b", text: "Bunga" },
        { id: "c", text: "Akar" },
        { id: "d", text: "Batang" },
      ],
      correct_answer: "c"
    },
    {
      question: "Wortel kaya akan vitamin?",
      options: [
        { id: "a", text: "Vitamin A" },
        { id: "b", text: "Vitamin B" },
        { id: "c", text: "Vitamin C" },
        { id: "d", text: "Vitamin D" },
      ],
      correct_answer: "a"
    },
    {
      question: "Warna wortel yang paling umum adalah?",
      options: [
        { id: "a", text: "Hijau" },
        { id: "b", text: "Kuning" },
        { id: "c", text: "Oranye" },
        { id: "d", text: "Merah" },
      ],
      correct_answer: "c"
    },
    {
      question: "Wortel bermanfaat untuk kesehatan?",
      options: [
        { id: "a", text: "Mata" },
        { id: "b", text: "Gigi" },
        { id: "c", text: "Rambut" },
        { id: "d", text: "Kuku" },
      ],
      correct_answer: "a"
    },
    {
      question: "Wortel termasuk dalam jenis sayuran?",
      options: [
        { id: "a", text: "Sayuran buah" },
        { id: "b", text: "Sayuran daun" },
        { id: "c", text: "Sayuran akar" },
        { id: "d", text: "Sayuran batang" },
      ],
      correct_answer: "c"
    }
  ],

  // HEWAN
  "Kupu-Kupu": [
    {
      question: "Kupu-kupu adalah contoh hewan?",
      options: [
        { id: "a", text: "Mamalia" },
        { id: "b", text: "Serangga" },
        { id: "c", text: "Reptil" },
        { id: "d", text: "Amfibi" },
      ],
      correct_answer: "b"
    },
    {
      question: "Proses metamorfosis kupu-kupu dimulai dari?",
      options: [
        { id: "a", text: "Telur" },
        { id: "b", text: "Ulat" },
        { id: "c", text: "Kepompong" },
        { id: "d", text: "Kupu-kupu dewasa" },
      ],
      correct_answer: "a"
    },
    {
      question: "Kupu-kupu mengisap nektar bunga menggunakan?",
      options: [
        { id: "a", text: "Mulut" },
        { id: "b", text: "Proboscis (belalai)" },
        { id: "c", text: "Kaki" },
        { id: "d", text: "Sayap" },
      ],
      correct_answer: "b"
    },
    {
      question: "Berapa jumlah sayap kupu-kupu?",
      options: [
        { id: "a", text: "2" },
        { id: "b", text: "4" },
        { id: "c", text: "6" },
        { id: "d", text: "8" },
      ],
      correct_answer: "b"
    },
    {
      question: "Kupu-kupu aktif mencari makan pada waktu?",
      options: [
        { id: "a", text: "Malam hari" },
        { id: "b", text: "Siang hari" },
        { id: "c", text: "Sore hari" },
        { id: "d", text: "Tengah malam" },
      ],
      correct_answer: "b"
    }
  ],

  "Penguin": [
    {
      question: "Penguin adalah jenis burung yang?",
      options: [
        { id: "a", text: "Dapat terbang" },
        { id: "b", text: "Tidak dapat terbang" },
        { id: "c", text: "Hidup di pohon" },
        { id: "d", text: "Nokturnal" },
      ],
      correct_answer: "b"
    },
    {
      question: "Penguin hidup di wilayah?",
      options: [
        { id: "a", text: "Tropis" },
        { id: "b", text: "Gurun" },
        { id: "c", text: "Kutub dan daerah dingin" },
        { id: "d", text: "Hutan hujan" },
      ],
      correct_answer: "c"
    },
    {
      question: "Makanan utama penguin adalah?",
      options: [
        { id: "a", text: "Rumput" },
        { id: "b", text: "Ikan dan krill" },
        { id: "c", text: "Buah-buahan" },
        { id: "d", text: "Serangga" },
      ],
      correct_answer: "b"
    },
    {
      question: "Penguin berenang menggunakan?",
      options: [
        { id: "a", text: "Kaki" },
        { id: "b", text: "Ekor" },
        { id: "c", text: "Sayap seperti sirip" },
        { id: "d", text: "Paruh" },
      ],
      correct_answer: "c"
    },
    {
      question: "Spesies penguin terbesar adalah?",
      options: [
        { id: "a", text: "Penguin Little" },
        { id: "b", text: "Penguin Emperor (Kaisar)" },
        { id: "c", text: "Penguin Macaroni" },
        { id: "d", text: "Penguin Rockhopper" },
      ],
      correct_answer: "b"
    }
  ],

  "Lumba-Lumba": [
    {
      question: "Lumba-lumba adalah jenis hewan?",
      options: [
        { id: "a", text: "Ikan" },
        { id: "b", text: "Mamalia laut" },
        { id: "c", text: "Reptil" },
        { id: "d", text: "Amfibi" },
      ],
      correct_answer: "b"
    },
    {
      question: "Lumba-lumba bernapas menggunakan?",
      options: [
        { id: "a", text: "Insang" },
        { id: "b", text: "Kulit" },
        { id: "c", text: "Paru-paru" },
        { id: "d", text: "Mulut" },
      ],
      correct_answer: "c"
    },
    {
      question: "Lumba-lumba berkomunikasi dengan?",
      options: [
        { id: "a", text: "Suara ultrasonik" },
        { id: "b", text: "Gerakan ekor" },
        { id: "c", text: "Warna kulit" },
        { id: "d", text: "Cahaya" },
      ],
      correct_answer: "a"
    },
    {
      question: "Lumba-lumba terkenal sebagai hewan yang?",
      options: [
        { id: "a", text: "Agresif" },
        { id: "b", text: "Cerdas dan ramah" },
        { id: "c", text: "Pemalu" },
        { id: "d", text: "Pemalas" },
      ],
      correct_answer: "b"
    },
    {
      question: "Sistem navigasi lumba-lumba yang menggunakan gelombang suara disebut?",
      options: [
        { id: "a", text: "Sonar" },
        { id: "b", text: "Radar" },
        { id: "c", text: "Ekolokasi" },
        { id: "d", text: "GPS" },
      ],
      correct_answer: "c"
    }
  ],

  "Gajah": [
    {
      question: "Gajah adalah hewan darat terbesar yang hidup di?",
      options: [
        { id: "a", text: "Kutub" },
        { id: "b", text: "Laut" },
        { id: "c", text: "Darat" },
        { id: "d", text: "Udara" },
      ],
      correct_answer: "c"
    },
    {
      question: "Belalai gajah digunakan untuk?",
      options: [
        { id: "a", text: "Terbang" },
        { id: "b", text: "Mengambil makanan dan minum" },
        { id: "c", text: "Berenang" },
        { id: "d", text: "Berlari" },
      ],
      correct_answer: "b"
    },
    {
      question: "Gading gajah terbuat dari?",
      options: [
        { id: "a", text: "Tulang" },
        { id: "b", text: "Gigi taring yang memanjang" },
        { id: "c", text: "Tanduk" },
        { id: "d", text: "Kuku" },
      ],
      correct_answer: "b"
    },
    {
      question: "Gajah adalah hewan?",
      options: [
        { id: "a", text: "Karnivora" },
        { id: "b", text: "Herbivora" },
        { id: "c", text: "Omnivora" },
        { id: "d", text: "Insektivora" },
      ],
      correct_answer: "b"
    },
    {
      question: "Berapa lama masa kehamilan gajah?",
      options: [
        { id: "a", text: "9 bulan" },
        { id: "b", text: "12 bulan" },
        { id: "c", text: "22 bulan" },
        { id: "d", text: "6 bulan" },
      ],
      correct_answer: "c"
    }
  ],

  "Singa": [
    {
      question: "Singa dijuluki sebagai?",
      options: [
        { id: "a", text: "Raja hutan" },
        { id: "b", text: "Raja rimba" },
        { id: "c", text: "Penguasa laut" },
        { id: "d", text: "Raja udara" },
      ],
      correct_answer: "b"
    },
    {
      question: "Ciri khas singa jantan adalah memiliki?",
      options: [
        { id: "a", text: "Ekor panjang" },
        { id: "b", text: "Surai di leher" },
        { id: "c", text: "Tanduk" },
        { id: "d", text: "Sayap" },
      ],
      correct_answer: "b"
    },
    {
      question: "Singa hidup secara berkelompok yang disebut?",
      options: [
        { id: "a", text: "Kawanan" },
        { id: "b", text: "Pride" },
        { id: "c", text: "Koloni" },
        { id: "d", text: "Gerombolan" },
      ],
      correct_answer: "b"
    },
    {
      question: "Singa adalah hewan?",
      options: [
        { id: "a", text: "Herbivora" },
        { id: "b", text: "Omnivora" },
        { id: "c", text: "Karnivora" },
        { id: "d", text: "Insektivora" },
      ],
      correct_answer: "c"
    },
    {
      question: "Habitat alami singa adalah?",
      options: [
        { id: "a", text: "Hutan hujan" },
        { id: "b", text: "Savana Afrika" },
        { id: "c", text: "Kutub" },
        { id: "d", text: "Gurun pasir" },
      ],
      correct_answer: "b"
    }
  ]
};

export default quizzesData;