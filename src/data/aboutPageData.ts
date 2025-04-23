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
    title: "From Humble Beginnings",
    paragraphs: [
      "Our journey began in 1995 when Chef Wijaya, inspired by his grandmother's recipes, opened a small food stall in Jakarta. His signature Nasi Goreng quickly gained popularity, drawing crowds from across the city.",
      "As word spread about the exceptional flavors and quality of our food, we expanded to our first restaurant in 1998. Since then, we've grown while maintaining our commitment to authentic Indonesian cuisine and the traditional cooking methods that make our dishes special.",
      "Today, NasiGoreng Restaurant stands as a culinary landmark, beloved by locals and tourists alike. We take pride in preserving our cultural heritage through food while innovating to create new and exciting flavors that honor the rich culinary traditions of Indonesia.",
    ],
  },
  values: {
    title: "Our Values",
    items: [
      {
        icon: "star",
        title: "Quality",
        description:
          "We use only the freshest ingredients and authentic spices to create dishes that honor Indonesian culinary traditions.",
      },
      {
        icon: "community",
        title: "Community",
        description:
          "We believe in creating a warm, welcoming space where people can connect and share memorable experiences through food.",
      },
      {
        icon: "sustainability",
        title: "Sustainability",
        description:
          "We're committed to sustainable practices, sourcing locally when possible, and minimizing our environmental impact.",
      },
    ],
  },
  hero: {
    backgroundImage: imageUrls.restaurant.interior,
    title: "Tentang Kami",
    subtitle:
      "Mengenal lebih dekat perjalanan dan filosofi Restoran Nasi Goreng",
  },
};
