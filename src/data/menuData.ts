import { MenuItemType } from "../types/menu";
import { imageUrls } from "./imageUrls";

export const menuData: MenuItemType[] = [
  // Nasi Goreng (Fried Rice) Category
  {
    id: 1,
    name: "Nasi Goreng Original",
    shortDescription:
      "Nasi goreng tradisional khas Indonesia dengan kecap manis, disajikan dengan telur goreng, sate ayam, dan kerupuk udang.",
    description:
      "Nasi goreng tradisional khas Indonesia dengan kecap manis, disajikan dengan telur goreng, sate ayam, dan kerupuk udang. Dimasak dengan bumbu rempah pilihan yang dihaluskan seperti bawang merah, bawang putih, dan cabai, lalu ditambah kecap manis yang memberikan rasa manis gurih khas Indonesia. Setiap porsi disajikan dengan telur mata sapi yang kuningnya masih lembut, sate ayam yang juicy, dan kerupuk udang yang renyah. lorem",
    price: 12.99,
    categories: ["Nasi Goreng", "Rekomendasi", "Menu Utama"],
    image: imageUrls.menu["nasi-goreng-original"],
    spicyLevel: 1,
    featured: true,
  },
  {
    id: 2,
    name: "Nasi Goreng Seafood",
    shortDescription:
      "Nasi goreng dengan campuran seafood segar termasuk udang, cumi, dan ikan dengan bumbu rempah yang aromatis.",
    description:
      "Nasi goreng dengan campuran seafood segar termasuk udang, cumi, dan ikan dengan bumbu rempah yang aromatis. Dimasak dengan bahan laut premium yang dipilih setiap pagi dari pasar ikan terbaik, dipadukan dengan nasi pilihan yang pulen. Seafood segar termasuk udang yang krispi di luar namun kenyal di dalam, cumi yang tidak alot, serta potongan daging ikan yang lembut. Aroma rempah-rempah seperti serai, daun jeruk, dan lengkuas memberikan dimensi rasa yang kaya.",
    price: 15.99,
    categories: ["Nasi Goreng", "Rekomendasi", "Seafood", "Menu Utama"],
    image: imageUrls.menu["nasi-goreng-seafood"],
    spicyLevel: 2,
    featured: true,
  },
  {
    id: 99,
    name: "Nasi Goreng Seafood",
    shortDescription:
      "Nasi goreng dengan campuran seafood segar termasuk udang, cumi, dan ikan dengan bumbu rempah yang aromatis.",
    description:
      "Nasi goreng dengan campuran seafood segar termasuk udang, cumi, dan ikan dengan bumbu rempah yang aromatis. Dimasak dengan bahan laut premium yang dipilih setiap pagi dari pasar ikan terbaik, dipadukan dengan nasi pilihan yang pulen. Seafood segar termasuk udang yang krispi di luar namun kenyal di dalam, cumi yang tidak alot, serta potongan daging ikan yang lembut. Aroma rempah-rempah seperti serai, daun jeruk, dan lengkuas memberikan dimensi rasa yang kaya.",
    price: 15.99,
    categories: ["Nasi Goreng", "Rekomendasi", "Seafood", "Menu Utama"],
    image: imageUrls.menu["nasi-goreng-seafood"],
    spicyLevel: 2,
    featured: true,
  },
  {
    id: 100,
    name: "Nasi Goreng Seafood",
    shortDescription:
      "Nasi goreng dengan campuran seafood segar termasuk udang, cumi, dan ikan dengan bumbu rempah yang aromatis.",
    description:
      "Nasi goreng dengan campuran seafood segar termasuk udang, cumi, dan ikan dengan bumbu rempah yang aromatis. Dimasak dengan bahan laut premium yang dipilih setiap pagi dari pasar ikan terbaik, dipadukan dengan nasi pilihan yang pulen. Seafood segar termasuk udang yang krispi di luar namun kenyal di dalam, cumi yang tidak alot, serta potongan daging ikan yang lembut. Aroma rempah-rempah seperti serai, daun jeruk, dan lengkuas memberikan dimensi rasa yang kaya.",
    price: 15.99,
    categories: ["Nasi Goreng", "Rekomendasi", "Seafood", "Menu Utama"],
    image: imageUrls.menu["nasi-goreng-seafood"],
    spicyLevel: 2,
    featured: true,
  },
  {
    id: 3,
    name: "Nasi Goreng Kampung",
    shortDescription:
      "Nasi goreng ala kampung dengan teri, kangkung, dan telur, memberikan cita rasa autentik yang bikin kangen.",
    description:
      "Nasi goreng ala kampung dengan teri, kangkung, dan telur, memberikan cita rasa autentik yang bikin kangen. Dimasak dengan cara tradisional menggunakan wajan besi dan api tinggi untuk memberikan aroma 'wok hei' yang khas. Teri yang digunakan adalah teri Medan pilihan yang gurih, kangkung yang masih renyah, dan telur yang diorak-arik sempurna bersama bumbu. Tingkat kepedasan yang tinggi menjadi ciri khas nasi goreng kampung ini, memberikan sensasi pedas yang nikmat di lidah.",
    price: 13.99,
    categories: ["Nasi Goreng", "Menu Tradisional", "Menu Utama"],
    image: imageUrls.menu["nasi-goreng-kampung"],
    spicyLevel: 3,
    featured: false,
  },
  {
    id: 4,
    name: "Nasi Goreng Ayam",
    shortDescription:
      "Nasi goreng dengan ayam dan bumbu pilihan, disajikan dengan potongan ayam krispi dan mentimun.",
    description:
      "Nasi goreng dengan ayam dan bumbu pilihan, disajikan dengan potongan ayam krispi dan mentimun. Menggunakan daging ayam pilihan yang dimasak dengan dua cara: diaduk bersama nasi dan bumbu, serta disajikan sebagai ayam krispi di atasnya. Bumbu nasi goreng yang kaya dengan tambahan sedikit kunyit memberikan warna kuning yang menggugah selera. Disajikan dengan irisan mentimun segar dan tomat untuk menyeimbangkan rasa, serta kerupuk udang yang renyah sebagai pelengkap.",
    price: 14.5,
    categories: ["Nasi Goreng", "Rekomendasi", "Menu Utama"],
    image: imageUrls.menu["nasi-goreng-ayam"],
    spicyLevel: 1,
    featured: true,
  },
  {
    id: 5,
    name: "Nasi Goreng Petai",
    shortDescription:
      "Nasi goreng dengan petai yang memberikan aroma dan rasa unik yang disukai dalam kuliner Indonesia.",
    description:
      "Nasi goreng dengan petai yang memberikan aroma dan rasa unik yang disukai dalam kuliner Indonesia. Petai yang digunakan diseleksi secara khusus untuk memastikan kesegarannya, memberikan aroma khas yang menjadi signature dish ini. Dimasak dengan tambahan udang dan potongan cabai hijau segar yang menambah dimensi rasa pedas yang berbeda. Bagi pecinta petai, hidangan ini menawarkan kombinasi sempurna antara kenikmatan nasi goreng dan karakter kuat dari petai yang tidak terlupakan.",
    price: 13.99,
    categories: ["Nasi Goreng", "Menu Utama", "Menu Tradisional"],
    image: imageUrls.menu["nasi-goreng-petai"],
    spicyLevel: 2,
    featured: false,
  },

  // Appetizers Category
  {
    id: 6,
    name: "Sate Ayam",
    shortDescription:
      "Tusukan ayam panggang disajikan dengan saus kacang khas kami dan acar sayuran segar.",
    description:
      "Tusukan ayam panggang disajikan dengan saus kacang khas kami dan acar sayuran segar. Potongan daging ayam pilihan bagian paha yang juicy dimarinasi dengan campuran kecap manis, bawang, dan rempah selama minimal 6 jam sebelum dipanggang di atas bara api. Saus kacang yang creamy dibuat dari kacang tanah pilihan yang disangrai sempurna, memberikan rasa gurih yang kaya. Disajikan dengan acar timun, wortel, dan nanas yang menyegarkan untuk menyeimbangkan rasa.",
    price: 8.99,
    categories: ["Hidangan Pembuka", "Rekomendasi", "Makanan Tradisional"],
    image: imageUrls.menu["sate-ayam"],
    spicyLevel: 0,
    featured: false,
  },
  {
    id: 7,
    name: "Perkedel Jagung",
    shortDescription:
      "Bakwan jagung renyah dengan campuran bumbu Indonesia, cocok untuk dibagi sebagai hidangan pembuka.",
    description:
      "Bakwan jagung renyah dengan campuran bumbu Indonesia, cocok untuk dibagi sebagai hidangan pembuka. Terbuat dari biji jagung manis segar yang dipotong langsung dari tongkolnya, dicampur dengan tepung, telur, dan bumbu halus tradisional. Digoreng dengan minyak panas hingga keemasan dan renyah di luar, namun tetap lembut dan juicy di dalam. Disajikan dengan saus sambal special house-made yang memberikan sentuhan pedas segar, membuat bakwan ini menjadi hidangan pembuka yang sempurna.",
    price: 6.5,
    categories: ["Hidangan Pembuka", "Vegetarian"],
    image: imageUrls.menu["perkedel-jagung"],
    spicyLevel: 0,
    featured: false,
  },

  // Main Dishes Category
  {
    id: 9,
    name: "Rendang Daging",
    shortDescription:
      "Daging sapi yang dimasak pelan-pelan dalam santan dan campuran rempah sampai empuk dan penuh cita rasa.",
    description:
      "Daging sapi yang dimasak pelan-pelan dalam santan dan campuran rempah sampai empuk dan penuh cita rasa. Disajikan dengan nasi putih. Dibuat dengan daging sapi bagian has dalam yang dimasak selama minimal 4 jam dengan api kecil hingga meresap sempurna dan empuk. Bumbu rendang yang kaya terdiri dari lebih dari 15 jenis rempah dan bumbu, termasuk serai, daun jeruk, lengkuas, dan cabai yang dihaluskan bersama santan kental. Hidangan ini menawarkan perpaduan rasa gurih, pedas, dan sedikit manis yang kompleks, menjadikannya salah satu masakan terenak di dunia.",
    price: 17.99,
    categories: ["Menu Utama", "Rekomendasi", "Makanan Tradisional"],
    image: imageUrls.menu["rendang-daging"],
    spicyLevel: 2,
    featured: true,
  },
  {
    id: 10,
    name: "Ayam Bakar",
    shortDescription:
      "Ayam panggang yang dimarinasi dengan kecap manis dan rempah aromatik, disajikan dengan sambal dan nasi putih.",
    description:
      "Ayam panggang yang dimarinasi dengan kecap manis dan rempah aromatik, disajikan dengan sambal dan nasi putih. Menggunakan ayam kampung pilihan yang direndam dalam bumbu special selama semalaman sebelum dipanggang dengan arang kelapa untuk mendapatkan aroma smoky yang khas. Bumbu marinasi terdiri dari kecap manis, bawang putih, jahe, kunyit, dan rempah rahasia turun-temurun. Disajikan dengan sambal terasi yang dibuat segar setiap hari dan lalapan berupa timun, tomat, dan daun kemangi.",
    price: 15.5,
    categories: ["Menu Utama", "Makanan Tradisional"],
    image: imageUrls.menu["ayam-bakar"],
    spicyLevel: 1,
    featured: false,
  },
  {
    id: 11,
    name: "Ikan Bakar",
    shortDescription:
      "Ikan panggang yang dimarinasi dengan bumbu tradisional, disajikan dengan sambal segar dan sayuran.",
    description:
      "Ikan panggang yang dimarinasi dengan bumbu tradisional, disajikan dengan sambal segar dan sayuran. Menggunakan ikan kakap merah segar yang dipilih langsung dari pasar ikan setiap pagi, dimarinasi dengan bumbu yang terdiri dari cabai, bawang, serai, dan jeruk nipis. Proses pembakaran dilakukan secara tradisional dengan arang untuk mendapatkan aroma asap yang menggugah selera. Disajikan dengan sambal dabu-dabu khas Manado yang segar dan pedas, serta sayuran rebus seperti kangkung dan terong sebagai pelengkap.",
    price: 16.99,
    categories: ["Menu Utama", "Seafood", "Makanan Tradisional"],
    image: imageUrls.menu["ikan-bakar"],
    spicyLevel: 2,
    featured: false,
  },

  // Desserts Category
  {
    id: 12,
    name: "Es Cendol",
    shortDescription:
      "Dessert tradisional Indonesia dengan jeli tepung beras hijau, santan, dan sirup gula merah.",
    description:
      "Dessert tradisional Indonesia dengan jeli tepung beras hijau, santan, dan sirup gula merah. Cendol dibuat secara tradisional menggunakan tepung beras yang diolah dengan daun pandan asli untuk aroma dan warna hijau alami. Santan yang digunakan adalah santan segar, bukan dari kemasan, memberikan rasa creamy yang autentik. Gula merah yang digunakan adalah gula aren asli dari pedesaan Jawa, memberikan rasa karamel yang khas. Disajikan dingin dengan es serut untuk kesegaran maksimal di hari yang panas.",
    price: 5.99,
    categories: ["Dessert", "Rekomendasi", "Minuman Tradisional"],
    image: imageUrls.menu["es-cendol"],
    spicyLevel: 0,
    featured: false,
  },
  {
    id: 13,
    name: "Pisang Goreng",
    shortDescription:
      "Pisang goreng renyah disajikan dengan es krim vanilla dan siraman madu.",
    description:
      "Pisang goreng renyah disajikan dengan es krim vanilla dan siraman madu. Menggunakan pisang raja pilihan yang matang sempurna, dicelup dalam adonan tepung yang dicampur dengan sedikit vanila dan kayu manis. Digoreng hingga keemasan dan renyah di luar namun tetap lembut di dalam. Disajikan dengan es krim vanilla premium handmade, taburan karamel crunch, dan siraman madu organik. Kombinasi hangat dan dingin, renyah dan lembut, menciptakan pengalaman dessert yang sempurna.",
    price: 6.5,
    categories: ["Dessert", "Makanan Tradisional"],
    image: imageUrls.menu["pisang-goreng"],
    spicyLevel: 0,
    featured: false,
  },

  // Beverages Category
  {
    id: 15,
    name: "Es Teh Manis",
    shortDescription:
      "Teh manis dingin, minuman tradisional Indonesia yang menyegarkan, cocok untuk semua hidangan.",
    description:
      "Teh manis dingin, minuman tradisional Indonesia yang menyegarkan, cocok untuk semua hidangan. Dibuat dengan teh hitam premium yang diseduh dengan air panas sempurna untuk mengekstrak aroma dan rasa terbaik. Teh kemudian dicampur dengan gula aren alami yang memberikan rasa manis yang kompleks dan aroma karamel ringan. Disajikan dingin dengan es batu dan irisan lemon segar sebagai penyegar tambahan. Minuman klasik yang sempurna untuk menemani semua jenis hidangan Indonesia.",
    price: 3.5,
    categories: ["Minuman", "Minuman Tradisional"],
    image: imageUrls.menu["es-teh-manis"],
    spicyLevel: 0,
    featured: false,
  },
  {
    id: 16,
    name: "Es Kelapa Muda",
    shortDescription:
      "Air kelapa muda segar disajikan dengan daging kelapa, penyegaran alami yang menyehatkan.",
    description:
      "Air kelapa muda segar disajikan dengan daging kelapa, penyegaran alami yang menyehatkan. Menggunakan kelapa muda hijau yang dipilih khusus untuk kemanisan dan kesegaran airnya. Setiap gelas berisi air kelapa asli tanpa tambahan gula atau pengawet, tetap mempertahankan manfaat elektrolit alaminya. Disajikan dengan potongan daging kelapa muda yang lembut dan segar, ditambah sedikit sirup gula aren untuk sentuhan manis optional. Minuman ini tidak hanya menyegarkan tetapi juga kaya akan nutrisi dan cocok untuk detoksifikasi.",
    price: 4.99,
    categories: ["Minuman", "Rekomendasi", "Minuman Sehat"],
    image: imageUrls.menu["es-kelapa-muda"],
    spicyLevel: 0,
    featured: false,
  },
  {
    id: 17,
    name: "Wedang Jahe",
    shortDescription:
      "Teh jahe tradisional dengan gula merah dan serai, disajikan panas - cocok untuk menghangatkan badan.",
    description:
      "Teh jahe tradisional dengan gula merah dan serai, disajikan panas - cocok untuk menghangatkan badan. Dibuat dengan jahe merah segar yang ditumbuk kasar untuk memaksimalkan rasa pedas dan hangatnya. Ditambahkan potongan kayu manis, cengkeh, dan serai yang memberikan aroma kompleks dan rasa yang berlapis. Disajikan dengan gula merah traditional yang lebih sehat dan memberikan rasa manis yang kaya. Minuman ini sangat baik untuk meningkatkan daya tahan tubuh, melancarkan peredaran darah, dan menghangatkan tubuh di hari yang dingin.",
    price: 3.99,
    categories: ["Minuman", "Minuman Tradisional", "Minuman Sehat"],
    image: imageUrls.menu["wedang-jahe"],
    spicyLevel: 0,
    featured: false,
  },
];

export const categories = [
  "Nasi Goreng",
  "Hidangan Pembuka",
  "Menu Utama",
  "Dessert",
  "Minuman",
  "Rekomendasi",
  "Seafood",
  "Makanan Tradisional",
  "Minuman Tradisional",
  "Minuman Sehat",
  "Vegetarian",
];
