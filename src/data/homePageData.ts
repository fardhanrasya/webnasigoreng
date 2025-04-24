import { restaurantData } from "./restaurantData";
import { imageUrls } from "./imageUrls";

export const homePageData = {
  metadata: {
    title: "Beranda",
    description:
      "Restoran Nasi Goreng terbaik di Indonesia dengan cita rasa autentik dan bahan berkualitas. Nikmati berbagai pilihan nasi goreng dan hidangan Indonesia lainnya.",
    keywords:
      "restoran nasi goreng, nasi goreng indonesia, nasi goreng enak, restoran terbaik, kuliner indonesia",
    openGraph: {
      title: "Beranda | Restoran Nasi Goreng",
      description:
        "Restoran Nasi Goreng terbaik di Indonesia dengan cita rasa autentik dan bahan berkualitas.",
      type: "website",
      images: [
        {
          url: imageUrls.menu["nasi-goreng-original"],
          width: 1260,
          height: 750,
          alt: "Nasi Goreng",
        },
      ],
    },
  },
  hero: {
    backgroundImage: imageUrls.restaurant.dining,
    description:
      "Rasakan perpaduan sempurna rempah-rempah, aroma khas, dan bahan-bahan terbaik dalam sajian nasi goreng paling legendaris di Indonesia.",
    primaryButton: {
      text: "Lihat Menu Kami",
      link: "/menu",
    },
    secondaryButton: {
      text: "Reservasi Meja",
      link: "/contact",
    },
  },
  about: {
    title: "Cerita",
    titleColored: "Kami",
    introduction:
      "Didirikan pada tahun {established} oleh Chef Wijaya, restoran kami menghadirkan cita rasa Indonesia yang autentik melalui hidangan andalan kami - Nasi Goreng. Berawal dari warung kaki lima kecil, kini telah berkembang menjadi tempat kuliner favorit banyak orang.".replace(
        "{established}",
        restaurantData.established.toString()
      ),
    buttonText: "Kenali Kami Lebih Dekat",
    buttonLink: "/about",
    image: imageUrls.restaurant.interior,
    imageAlt: "Chef menyiapkan Nasi Goreng",
    badgeText: "Sejak {established}".replace(
      "{established}",
      restaurantData.established.toString()
    ),
  },
  featuredMenu: {
    title: "Menu Unggulan Kami",
    subtitle:
      "Cobain menu favorit yang paling laris dan bikin ketagihan, dijamin bakal bikin kamu pengen nambah terus!",
    buttonText: "Lihat Menu Lengkap",
    buttonLink: "/menu",
    orderButtonText: "Pesan Sekarang",
  },
  testimonials: {
    title: "Kata Mereka Tentang Kami",
    subtitle:
      "Jangan cuma percaya kata-kata kami - simak apa kata pelanggan yang sudah makan di sini",
  },
};
