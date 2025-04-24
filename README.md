# 🍽️ Restoran Nasi Goreng - Website

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)

Website modern untuk Restoran Nasi Goreng Indonesia yang menampilkan berbagai hidangan nasi goreng otentik dan menu Indonesia lainnya.

## ✨ Fitur Utama

- 🚀 Performa tinggi dengan Next.js 14 (App Router)
- 📱 Responsif untuk semua ukuran perangkat
- 🎨 Desain modern dengan Tailwind CSS
- 🔍 SEO-friendly dengan sitemap otomatis
- 🖼️ Optimisasi gambar otomatis
- 📊 Data terstruktur untuk manajemen konten
- 💬 Integrasi WhatsApp untuk pemesanan dan pertanyaan

## 📋 Pengelolaan Data

### 📁 Struktur Data

Semua data terstruktur tersimpan di folder `src/data` dalam format TypeScript:

| File                 | Deskripsi                       |
| -------------------- | ------------------------------- |
| `menuData.ts`        | Data menu makanan dan minuman   |
| `homePageData.ts`    | Konten halaman utama            |
| `aboutPageData.ts`   | Konten halaman tentang kami     |
| `contactPageData.ts` | Konten halaman kontak           |
| `menuPageData.ts`    | Konten halaman menu             |
| `testimonialData.ts` | Data testimonial pelanggan      |
| `restaurantData.ts`  | Informasi umum tentang restoran |
| `imageUrls.ts`       | Path gambar terstruktur         |
| `iconsData.ts`       | Data icon untuk website         |

### 🍜 Struktur Data Menu (`menuData.ts`)

```typescript
{
  id: number;           // ID unik untuk menu
  name: string;         // Nama menu
  shortDescription: string; // Deskripsi singkat untuk card
  description: string;  // Deskripsi lengkap menu
  price: number;        // Harga menu (dalam satuan dolar yang dikonversi ke rupiah)
  categories: string[]; // Kategori menu (array)
  image: string;        // Path gambar
  spicyLevel: number;   // Level kepedasan (0-3)
  featured: boolean;    // Tampil di halaman utama
}
```

## 📸 Panduan Gambar

### 📷 Rekomendasi Ukuran Gambar

#### Gambar Menu

| Tampilan    | Ukuran Optimal    | Rasio | Format   | Keterangan                           |
| ----------- | ----------------- | ----- | -------- | ------------------------------------ |
| Menu Utama  | 800 × 600px       | 4:3   | JPG/WebP | Kualitas 75-80%                      |
| Daftar Menu | Min. 640 × 480px  | 4:3   | JPG/WebP | Dioptimalkan untuk area tinggi 192px |
| Hero Image  | 1200-1920px lebar | 16:9  | JPG/WebP | Untuk background header detail menu  |

#### Tips Kualitas Foto Menu

- Gunakan format WebP untuk performa terbaik (JPG sebagai fallback)
- Ukuran file maksimal 300KB untuk performa optimal
- Gunakan mode warna sRGB untuk konsistensi warna di berbagai perangkat
- Pastikan foto memiliki:
  - Pencahayaan yang baik dan konsisten
  - Latar belakang yang tidak terlalu ramai
  - Fokus yang tajam pada makanan
  - Sudut pengambilan yang menampilkan tekstur dan detail makanan

#### Gambar Lainnya

| Jenis              | Ukuran Rekomendasi | Rasio | Format           |
| ------------------ | ------------------ | ----- | ---------------- |
| Chef/Team          | 500 × 500px        | 1:1   | JPG/WebP         |
| Testimonial        | 300 × 300px        | 1:1   | JPG/WebP         |
| Logo               | 200 × 200px        | 1:1   | PNG (transparan) |
| Interior/Eksterior | 1200 × 800px       | 3:2   | JPG/WebP         |

### 📁 Struktur Folder Gambar

```
public/images/
├── menu/           # Gambar menu (nama-menu.jpg/webp)
├── team/           # Gambar tim restoran (chef/staff)
├── testimonials/   # Gambar testimonial (testimonial-1.jpg)
├── restaurant/     # Gambar restoran (interior.jpg, exterior.jpg)
└── logos/          # Logo dan icon (logo.png, whatsapp-logo.svg)
```

## 🚀 Menjalankan Website

```bash
# Install dependencies
npm install

# Jalankan server development
npm run dev

# Buka http://localhost:3000 di browser
```

## 🏗️ Build untuk Production

```bash
# Build website
npm run build

# Jalankan versi production
npm start
```

## 📂 Struktur Folder

```
project/
├── public/            # Aset statis (gambar, font, dll)
├── src/
│   ├── app/           # Routing Next.js dan layout page
│   ├── components/    # Komponen React terstruktur
│   │   ├── Home/      # Komponen khusus halaman Home
│   │   ├── Menu/      # Komponen terkait menu
│   │   ├── About/     # Komponen halaman About
│   │   ├── Contact/   # Komponen halaman Contact
│   │   ├── Layout/    # Komponen layout (Header, Footer)
│   │   └── UI/        # Komponen UI reusable
│   ├── data/          # Data statis (menu, dll)
│   └── types/         # TypeScript type definitions
├── next.config.js     # Konfigurasi Next.js
├── tailwind.config.js # Konfigurasi Tailwind CSS
├── generate-sitemap.js # Script generator sitemap
├── sitemap-config.js  # Konfigurasi sitemap
└── package.json       # Dependencies dan script
```

## 💻 Pengembangan

Website ini dioptimalkan untuk:

- Kecepatan loading yang cepat
- Aksesibilitas
- SEO
- Pengalaman pengguna yang intuitif
- Responsif di semua perangkat

## Konfigurasi URL & Metadata

Semua konfigurasi URL, metadata, dan informasi kontak terpusat di file `src/app/env.ts`. Untuk mengubah URL website atau informasi lainnya, cukup edit file ini.

### Cara Mengubah URL Website

1. Buka file `src/app/env.ts`
2. Cari variabel `PRODUCTION_URL` dan ubah nilainya:
   ```typescript
   const PRODUCTION_URL = "https://domain-baru-anda.com";
   ```
3. Jika perlu mengubah domain saja, juga ubah nilai berikut:
   ```typescript
   domain: IS_DEVELOPMENT ? 'localhost:3000' : 'domain-baru-anda.com',
   ```

### Penggunaan Dalam Kode

Untuk menggunakan konfigurasi ini dalam kode:

```typescript
import siteConfig from "@/app/env";

// Contoh penggunaan
const baseUrl = siteConfig.baseUrl;
const instagramUrl = siteConfig.social.instagram;
```

### Environment Development/Production

Untuk beralih antara environment development dan production, ubah nilai `IS_DEVELOPMENT`:

```typescript
// Untuk development (localhost:3000)
const IS_DEVELOPMENT = true;

// Untuk production
const IS_DEVELOPMENT = false;
```

### API Publik

Konfigurasi website juga dapat diakses melalui API endpoint:

```
/.well-known/site-config.json
```

---

&copy; 2024 Restoran Nasi Goreng. Dibuat dengan ❤️ menggunakan Next.js
