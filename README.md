# Restoran Nasi Goreng - Website Next.js

Website yang dibuat menggunakan Next.js untuk Restoran Nasi Goreng, sebuah restoran Indonesia yang menampilkan berbagai jenis nasi goreng dan hidangan Indonesia lainnya.

## Struktur Proyek

Proyek ini dibangun menggunakan:

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS

## Penggunaan Data

### Struktur Data

Semua data terstruktur tersimpan di folder `src/data` dalam format TypeScript:

1. **menuData.ts**: Berisi data menu makanan dan minuman
2. **chefData.ts**: Berisi data chef restoran
3. **testimonialData.ts**: Berisi data testimonial pelanggan
4. **restaurantData.ts**: Berisi informasi umum tentang restoran

### Cara Mengisi Data

#### Menu (menuData.ts)

Format data menu:

```typescript
{
  id: number; // ID unik untuk menu
  name: string; // Nama menu
  description: string; // Deskripsi menu
  price: number; // Harga menu (dalam format angka)
  category: string; // Kategori menu ("Nasi Goreng", "Hidangan Pembuka", "Menu Utama", "Dessert", "Minuman")
  image: string; // Path gambar relatif terhadap folder public (format: /images/menu/nama-file.jpg)
  spicyLevel: number; // Level kepedasan (0-5, 0 = tidak pedas)
  featured: boolean; // Apakah ditampilkan di halaman utama (true/false)
}
```

#### Chef (chefData.ts)

Format data chef:

```typescript
{
  id: number; // ID unik untuk chef
  name: string; // Nama lengkap chef
  title: string; // Jabatan chef
  bio: string; // Biografi singkat chef
  image: string; // Path gambar relatif terhadap folder public (format: /images/chef/nama-file.jpg)
  specialty: string; // Spesialisasi chef
  featured: boolean; // Apakah ditampilkan di halaman utama (true/false)
}
```

#### Testimonial (testimonialData.ts)

Format data testimonial:

```typescript
{
  id: number; // ID unik untuk testimonial
  name: string; // Nama pemberi testimonial
  occupation: string; // Pekerjaan pemberi testimonial
  comment: string; // Teks testimonial
  rating: number; // Rating (1-5)
  image: string; // Path gambar relatif terhadap folder public (format: /images/testimonials/nama-file.jpg)
  date: string; // Tanggal testimonial (format: YYYY-MM-DD)
}
```

### Struktur Gambar

Semua gambar disimpan di dalam folder `public/images` dengan subfolders berikut:

1. **menu/**: Untuk gambar menu makanan dan minuman

   - Format penamaan: `nama-menu.jpg` (gunakan huruf kecil dan ganti spasi dengan tanda hubung)
   - Contoh: `nasi-goreng-seafood.jpg`, `es-teh-manis.jpg`
   - Ukuran yang direkomendasikan: 800x600 pixel

2. **chef/**: Untuk gambar para chef

   - Format penamaan: `chef-nama.jpg` (gunakan huruf kecil dan ganti spasi dengan tanda hubung)
   - Contoh: `chef-juna.jpg`, `chef-renatta.jpg`
   - Ukuran yang direkomendasikan: 500x500 pixel (kotak)

3. **testimonials/**: Untuk gambar pemberi testimonial

   - Format penamaan: `testimonial-1.jpg`, `testimonial-2.jpg`, dst.
   - Ukuran yang direkomendasikan: 300x300 pixel (kotak)

4. **restaurant/**: Untuk gambar restoran
   - Termasuk: `logo.png`, `storefront.jpg`, `interior-1.jpg`, `interior-2.jpg`, dll.
   - Ukuran yang direkomendasikan untuk logo: 200x200 pixel (transparan)
   - Ukuran yang direkomendasikan untuk foto: 1200x800 pixel

## Menjalankan Website

1. Install dependencies:

   ```
   npm install
   ```

2. Jalankan server development:

   ```
   npm run dev
   ```

3. Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

## Membangun Website untuk Production

1. Build website:

   ```
   npm run build
   ```

2. Jalankan versi production:
   ```
   npm start
   ```

## Struktur Folder

```
project/
├── public/
│   ├── images/
│   │   ├── menu/        # Gambar menu
│   │   ├── chef/        # Gambar chef
│   │   ├── testimonials/ # Gambar testimonial
│   │   └── restaurant/  # Gambar restoran
│   └── robots.txt
├── src/
│   ├── app/            # Next.js app directory
│   ├── components/     # Komponen React
│   ├── data/           # Data statis aplikasi
│   └── types/          # TypeScript type definitions
├── next.config.js
├── package.json
└── tailwind.config.js
```
