import { MenuItemType } from "../types/menu";
import { imageUrls } from "./imageUrls";

export const menuData: MenuItemType[] = [
  // Nasi Goreng (Fried Rice) Category
  {
    id: 1,
    name: "Nasi Goreng Original",
    description:
      "Nasi goreng tradisional khas Indonesia dengan kecap manis, disajikan dengan telur goreng, sate ayam, dan kerupuk udang.",
    price: 12.99,
    category: "Nasi Goreng",
    image: imageUrls.menu["nasi-goreng-original"],
    spicyLevel: 1,
    featured: true,
  },
  {
    id: 2,
    name: "Nasi Goreng Seafood",
    description:
      "Nasi goreng dengan campuran seafood segar termasuk udang, cumi, dan ikan dengan bumbu rempah yang aromatis.",
    price: 15.99,
    category: "Nasi Goreng",
    image: imageUrls.menu["nasi-goreng-seafood"],
    spicyLevel: 2,
    featured: true,
  },
  {
    id: 3,
    name: "Nasi Goreng Kampung",
    description:
      "Nasi goreng ala kampung dengan teri, kangkung, dan telur, memberikan cita rasa autentik yang bikin kangen.",
    price: 13.99,
    category: "Nasi Goreng",
    image: imageUrls.menu["nasi-goreng-kampung"],
    spicyLevel: 3,
    featured: false,
  },
  {
    id: 4,
    name: "Nasi Goreng Ayam",
    description:
      "Nasi goreng dengan ayam dan bumbu pilihan, disajikan dengan potongan ayam krispi dan mentimun.",
    price: 14.5,
    category: "Nasi Goreng",
    image: imageUrls.menu["nasi-goreng-ayam"],
    spicyLevel: 1,
    featured: false,
  },
  {
    id: 5,
    name: "Nasi Goreng Petai",
    description:
      "Nasi goreng dengan petai yang memberikan aroma dan rasa unik yang disukai dalam kuliner Indonesia.",
    price: 13.99,
    category: "Nasi Goreng",
    image: imageUrls.menu["nasi-goreng-petai"],
    spicyLevel: 2,
    featured: false,
  },

  // Appetizers Category
  {
    id: 6,
    name: "Sate Ayam",
    description:
      "Tusukan ayam panggang disajikan dengan saus kacang khas kami dan acar sayuran segar.",
    price: 8.99,
    category: "Hidangan Pembuka",
    image: imageUrls.menu["sate-ayam"],
    spicyLevel: 0,
    featured: false,
  },
  {
    id: 7,
    name: "Perkedel Jagung",
    description:
      "Bakwan jagung renyah dengan campuran bumbu Indonesia, cocok untuk dibagi sebagai hidangan pembuka.",
    price: 6.5,
    category: "Hidangan Pembuka",
    image: imageUrls.menu["perkedel-jagung"],
    spicyLevel: 0,
    featured: false,
  },
  {
    id: 8,
    name: "Lumpia",
    description:
      "Lumpia Indonesia dengan isian sayuran dan ayam cincang, disajikan dengan saus sambal manis.",
    price: 7.99,
    category: "Hidangan Pembuka",
    image: imageUrls.menu["lumpia"],
    spicyLevel: 0,
    featured: false,
  },

  // Main Dishes Category
  {
    id: 9,
    name: "Rendang Daging",
    description:
      "Daging sapi yang dimasak pelan-pelan dalam santan dan campuran rempah sampai empuk dan penuh cita rasa. Disajikan dengan nasi putih.",
    price: 17.99,
    category: "Menu Utama",
    image: imageUrls.menu["rendang-daging"],
    spicyLevel: 2,
    featured: true,
  },
  {
    id: 10,
    name: "Ayam Bakar",
    description:
      "Ayam panggang yang dimarinasi dengan kecap manis dan rempah aromatik, disajikan dengan sambal dan nasi putih.",
    price: 15.5,
    category: "Menu Utama",
    image: imageUrls.menu["ayam-bakar"],
    spicyLevel: 1,
    featured: false,
  },
  {
    id: 11,
    name: "Ikan Bakar",
    description:
      "Ikan panggang yang dimarinasi dengan bumbu tradisional, disajikan dengan sambal segar dan sayuran.",
    price: 16.99,
    category: "Menu Utama",
    image: imageUrls.menu["ikan-bakar"],
    spicyLevel: 2,
    featured: false,
  },

  // Desserts Category
  {
    id: 12,
    name: "Es Cendol",
    description:
      "Dessert tradisional Indonesia dengan jeli tepung beras hijau, santan, dan sirup gula merah.",
    price: 5.99,
    category: "Dessert",
    image: imageUrls.menu["es-cendol"],
    spicyLevel: 0,
    featured: false,
  },
  {
    id: 13,
    name: "Pisang Goreng",
    description:
      "Pisang goreng renyah disajikan dengan es krim vanilla dan siraman madu.",
    price: 6.5,
    category: "Dessert",
    image: imageUrls.menu["pisang-goreng"],
    spicyLevel: 0,
    featured: false,
  },
  {
    id: 14,
    name: "Klepon",
    description:
      "Bola-bola kue beras manis berisi gula merah dan dibalut kelapa parut. Camilan manis yang sempurna.",
    price: 4.99,
    category: "Dessert",
    image: imageUrls.menu["klepon"],
    spicyLevel: 0,
    featured: false,
  },

  // Beverages Category
  {
    id: 15,
    name: "Es Teh Manis",
    description:
      "Teh manis dingin, minuman tradisional Indonesia yang menyegarkan, cocok untuk semua hidangan.",
    price: 3.5,
    category: "Minuman",
    image: imageUrls.menu["es-teh-manis"],
    spicyLevel: 0,
    featured: false,
  },
  {
    id: 16,
    name: "Es Kelapa Muda",
    description:
      "Air kelapa muda segar disajikan dengan daging kelapa, penyegaran alami yang menyehatkan.",
    price: 4.99,
    category: "Minuman",
    image: imageUrls.menu["es-kelapa-muda"],
    spicyLevel: 0,
    featured: false,
  },
  {
    id: 17,
    name: "Wedang Jahe",
    description:
      "Teh jahe tradisional dengan gula merah dan serai, disajikan panas - cocok untuk menghangatkan badan.",
    price: 3.99,
    category: "Minuman",
    image: imageUrls.menu["wedang-jahe"],
    spicyLevel: 0,
    featured: false,
  },
  {
    id: 18,
    name: "Wedang jeho",
    description:
      "Teh jahe tradisional dengan gula merah dan serai, disajikan panas - cocok untuk menghangatkan badan.",
    price: 3.99,
    category: "Gorengan",
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
  "Gorengan",
];
