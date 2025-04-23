import { TestimonialType } from "../types/testimonial";
import { imageUrls } from "./imageUrls";

export const testimonialData: TestimonialType[] = [
  {
    id: 1,
    name: "Vina",
    occupation: "Food Blogger",
    comment:
      "Nasi Goreng Original di sini adalah yang terbaik yang pernah saya coba di Jakarta. Bumbu yang sempurna dan pelayanan yang ramah membuat saya selalu kembali.",
    rating: 5,
    image: imageUrls.testimonials["testimonial-1"],
    date: "2023-10-15",
  },
  {
    id: 2,
    name: "Siti Nurhayati",
    occupation: "Pengusaha Kuliner",
    comment:
      "Sebagai seseorang yang berkecimpung di dunia kuliner, saya sangat terkesan dengan kualitas bahan dan autentisitas rasa di restoran ini. Nasi Goreng Seafood adalah favorit saya!",
    rating: 5,
    image: imageUrls.testimonials["testimonial-2"],
    date: "2023-09-28",
  },
  {
    id: 3,
    name: "Agus Prasetyo",
    occupation: "Pecinta Kuliner",
    comment:
      "Restoran ini telah menjadi tempat makan favorit keluarga kami. Anak-anak sangat menyukai Nasi Goreng Ayam dan dessert yang disajikan. Sangat direkomendasikan untuk acara keluarga!",
    rating: 4,
    image: imageUrls.testimonials["testimonial-3"],
    date: "2023-11-05",
  },
];
