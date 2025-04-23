import { imageUrls } from "./imageUrls";

export const menuPageData = {
  metadata: {
    title: "Menu",
    description:
      "Pilihan menu nasi goreng dan hidangan Indonesia lainnya. Nikmati berbagai varian nasi goreng dengan bahan-bahan berkualitas dan rasa autentik.",
    keywords:
      "menu nasi goreng, makanan indonesia, nasi goreng spesial, hidangan tradisional",
    openGraph: {
      title: "Menu | Restoran Nasi Goreng",
      description: "Pilihan menu nasi goreng dan hidangan Indonesia lainnya.",
      type: "website",
      images: [
        {
          url: imageUrls.menu["nasi-goreng-original"],
          width: 1200,
          height: 630,
          alt: "Menu Nasi Goreng",
        },
      ],
    },
  },
  hero: {
    backgroundImage: imageUrls.restaurant.dining,
    title: "Menu Kami",
    description:
      "Temukan berbagai hidangan Indonesia lezat yang disajikan dengan cinta dan tradisi",
  },
};
