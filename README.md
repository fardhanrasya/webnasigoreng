# Restoran Nasi Goreng Website

Website untuk Restoran Nasi Goreng, menampilkan menu, informasi, dan kontak.

## Petunjuk Update Sitemap.xml Secara Otomatis

Untuk memastikan sitemap.xml selalu diperbarui dengan otomatis, ikuti langkah-langkah berikut:

### 1. Install sitemap-generator

Tambahkan package sitemap-generator pada proyek:

```bash
npm install --save-dev sitemap-generator-cli
```

### 2. Tambahkan script di package.json

Tambahkan script berikut di bagian "scripts" pada file package.json:

```json
"scripts": {
  "generate-sitemap": "npx sitemap-generator-cli --config=sitemap-config.js"
}
```

### 3. Buat file konfigurasi sitemap

Buat file bernama `sitemap-config.js` di root proyek dengan isi sebagai berikut:

```javascript
module.exports = {
  baseUrl: "https://www.nasigorengrestoran.com",
  pagesDirectory: "./src/pages",
  targetDirectory: "public",
  sitemapFilename: "sitemap.xml",
  ignoredExtensions: ["tsx", "ts"],
  ignoredPaths: ["404", "_app"],
  extraPaths: [
    "/menu/detail/nasi-goreng-spesial",
    "/menu/detail/nasi-goreng-seafood",
  ],
  pagesConfig: {
    "/": {
      priority: 1.0,
      changefreq: "weekly",
    },
    "/menu": {
      priority: 0.8,
      changefreq: "weekly",
    },
    "/about": {
      priority: 0.7,
      changefreq: "monthly",
    },
    "/contact": {
      priority: 0.6,
      changefreq: "monthly",
    },
  },
};
```

### 4. Perbarui dengan GitHub Actions (Opsional)

Untuk update otomatis menggunakan GitHub Actions, buat file `.github/workflows/sitemap.yml`:

```yaml
name: Generate Sitemap

on:
  push:
    branches: [main]
  schedule:
    - cron: "0 0 * * 0" # Setiap minggu pada hari Minggu jam 00:00 UTC

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2

      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: "16"

      - name: Install dependencies
        run: npm ci

      - name: Generate sitemap
        run: npm run generate-sitemap

      - name: Commit and push changes
        uses: stefanzweifel/git-auto-commit-action@v4
        with:
          commit_message: "chore: update sitemap.xml"
          file_pattern: public/sitemap.xml
```

### 5. Tambahkan pada Proses Build

Tambahkan perintah generate sitemap sebagai bagian dari proses build di package.json:

```json
"scripts": {
  "build": "vite build && npm run generate-sitemap"
}
```

Dengan mengikuti langkah-langkah di atas, sitemap.xml akan otomatis diperbarui dengan tanggal terbaru setiap kali website di-build atau sesuai jadwal yang diatur di GitHub Actions.
