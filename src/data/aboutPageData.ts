import { imageUrls } from "./imageUrls";

export const aboutPageData = {
  metadata: {
    title: "Tentang Kami",
    description:
      "Tentang Restoran Nasi Goreng, sejarah kami, visi dan misi, serta komitmen kami terhadap kualitas dan autentisitas.",
    keywords:
      "tentang restoran nasi goreng, sejarah restoran, visi misi, komitmen kualitas",
    openGraph: {
      title: "Tentang Kami | Restoran Nasi Goreng",
      description:
        "Tentang Restoran Nasi Goreng, sejarah kami, visi dan misi, serta komitmen kami terhadap kualitas dan autentisitas.",
      type: "website",
      images: [
        {
          url: imageUrls.restaurant.aboutRestaurant,
          width: 1200,
          height: 630,
          alt: "Tentang Restoran Nasi Goreng",
        },
      ],
    },
  },
  story: {
    title: "Dari Awal yang Sederhana",
    paragraphs: [
      "Perjalanan kami dimulai pada tahun 1995 ketika Chef Wijaya, terinspirasi oleh resep neneknya, membuka warung kecil di Jakarta. Nasi Goreng andalannya cepat populer, menarik banyak pengunjung dari seluruh kota.",
      "Seiring kabar tentang kelezatan dan kualitas makanan kami menyebar, kami berkembang dan membuka restoran pertama pada tahun 1998. Sejak itu, kami terus tumbuh sambil tetap berkomitmen pada masakan Indonesia yang autentik dan metode memasak tradisional yang membuat hidangan kami istimewa.",
      "Sekarang, Restoran NasiGoreng berdiri sebagai landmark kuliner yang dicintai warga lokal dan turis. Kami bangga melestarikan warisan budaya melalui makanan sambil berinovasi menciptakan cita rasa baru yang menghormati tradisi kuliner Indonesia yang kaya.",
    ],
  },
  values: {
    title: "Nilai-Nilai Kami",
    items: [
      {
        icon: "star",
        title: "Kualitas",
        description:
          "Kami hanya menggunakan bahan-bahan segar dan rempah asli untuk menciptakan hidangan yang menghormati tradisi kuliner Indonesia.",
      },
      {
        icon: "community",
        title: "Komunitas",
        description:
          "Kami percaya dalam menciptakan ruang yang hangat dan ramah di mana orang bisa berkumpul dan berbagi pengalaman berkesan melalui makanan.",
      },
      {
        icon: "sustainability",
        title: "Keberlanjutan",
        description:
          "Kami berkomitmen pada praktik berkelanjutan, menggunakan bahan lokal bila memungkinkan, dan meminimalkan dampak lingkungan.",
      },
    ],
  },
  hero: {
    backgroundImage: imageUrls.restaurant.interior,
    title: "Tentang Kami",
    subtitle:
      "Mengenal lebih dekat perjalanan dan filosofi Restoran Nasi Goreng",
  },
  team: {
    title: "Kenali Tim Kami",
    subtitle: "Orang-orang berbakat di balik kreasi lezat kami",
    members: [
      {
        id: 1,
        name: "Chef Wijaya",
        position: "Pendiri & Kepala Chef",
        bio: "Dengan pengalaman kuliner lebih dari 30 tahun, Chef Wijaya menghadirkan cita rasa Indonesia yang autentik dalam setiap hidangan yang dia ciptakan.",
        image: imageUrls.team["chef-1"],
      },
      {
        id: 2,
        name: "Siti Rahayu",
        position: "Chef Eksekutif",
        bio: "Terlatih dalam teknik memasak tradisional dan modern, Siti ahli dalam menciptakan inovasi baru dari hidangan Indonesia klasik.",
        image: imageUrls.team["chef-2"],
      },
      {
        id: 3,
        name: "Budi Santoso",
        position: "Manajer Restoran",
        bio: "Budi memastikan setiap tamu menikmati pengalaman bersantap yang luar biasa sejak mereka melangkah masuk ke restoran kami.",
        image: imageUrls.team["chef-3"],
      },
      {
        id: 4,
        name: "Putri Anggraini",
        position: "Chef Pastry",
        bio: "Putri menggabungkan teknik Indonesia dan Eropa untuk menciptakan dessert unik yang sempurna melengkapi hidangan utama kami.",
        image: imageUrls.team["staff-1"],
      },
    ],
  },
};
