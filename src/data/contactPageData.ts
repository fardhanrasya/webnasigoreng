import { restaurantData } from "./restaurantData";
import { imageUrls } from "./imageUrls";

export const contactPageData = {
  metadata: {
    title: "Kontak",
    description:
      "Hubungi Restoran Nasi Goreng untuk pertanyaan, reservasi, atau kerjasama. Kami selalu siap melayani Anda.",
    keywords:
      "kontak restoran nasi goreng, hubungi restoran, reservasi, lokasi restoran, alamat restoran",
    openGraph: {
      title: "Kontak | Restoran Nasi Goreng",
      description:
        "Hubungi Restoran Nasi Goreng untuk pertanyaan, reservasi, atau kerjasama.",
      type: "website",
      images: [
        {
          url: imageUrls.restaurant.exterior,
          width: 1200,
          height: 630,
          alt: "Kontak Restoran Nasi Goreng",
        },
      ],
    },
  },
  hero: {
    backgroundImage: imageUrls.restaurant.exterior,
    title: "Hubungi Kami",
    description:
      "Kami senang mendengar dari Anda! Kirim pesan atau kunjungi lokasi kami",
  },
  contactInfo: {
    mapEmbed: restaurantData.mapEmbed,
    mapTitle: restaurantData.mapTitle,
    visitTitle: "Visit Us",
    address: restaurantData.address,
    phone: restaurantData.phone,
    email: restaurantData.email,
    hoursTitle: "Opening Hours",
    weekdayHours: {
      days: restaurantData.openingHours.weekdays.englishDays,
      hours: restaurantData.openingHours.weekdays.englishHours,
    },
    weekendHours: {
      days: restaurantData.openingHours.weekend.englishDays,
      hours: restaurantData.openingHours.weekend.englishHours,
    },
  },
};
