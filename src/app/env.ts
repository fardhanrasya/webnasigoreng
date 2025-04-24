// Konfigurasi URL dan metadata situs web
// File ini berfungsi sebagai pusat konfigurasi untuk semua URL yang digunakan di aplikasi
//
// PENGGUNAAN:
// 1. Import di file yang memerlukan konfigurasi URL:
//    import siteConfig from "@/app/env";
//
// 2. Gunakan konfigurasi yang dibutuhkan:
//    const baseUrl = siteConfig.baseUrl;
//    const instagramUrl = siteConfig.social.instagram;
//
// 3. Ubah nilai URL di sini untuk mengubah di seluruh aplikasi

// Tentukan apakah aplikasi berjalan di development atau production
// Ganti nilai ini secara manual saat perlu mengubah environment
const IS_DEVELOPMENT = false;

// URL situs berdasarkan environment
const PRODUCTION_URL = "https://webnasigoreng.vercel.app";
const DEVELOPMENT_URL = "http://localhost:3000";

// Gunakan URL yang sesuai dengan environment
const SITE_URL = IS_DEVELOPMENT ? DEVELOPMENT_URL : PRODUCTION_URL;

export const siteConfig = {
  // Environment
  isDevelopment: IS_DEVELOPMENT,
  isProduction: !IS_DEVELOPMENT,

  // URL dasar situs web
  baseUrl: SITE_URL,

  // Nama domain tanpa https://
  domain: IS_DEVELOPMENT ? "localhost:3000" : "webnasigoreng.vercel.app",

  // Nama situs
  siteName: "Restoran Nasi Goreng",

  // URL untuk sitemap
  sitemapUrl: `${SITE_URL}/sitemap.xml`,

  // URL untuk robots.txt
  robotsUrl: `${SITE_URL}/robots.txt`,

  // URL untuk Social Media
  social: {
    instagram: "https://instagram.com/nasigorengrestoran",
    facebook: "https://facebook.com/nasigorengrestoran",
    twitter: "https://twitter.com/nasigorengrestoran",
  },

  // Kontak
  contact: {
    phone: "+6281234567890",
    email: "kontak@webnasigoreng.vercel.app",
    address: "Jl. Nasi Goreng No. 123, Jakarta, Indonesia",
  },

  // Delivery
  delivery: {
    gofood: "https://gofood.co.id/restaurant-link",
    shopeefood: "https://shopeefood.co.id/restaurant-link",
  },
};

// Export untuk digunakan di seluruh aplikasi
export default siteConfig;
