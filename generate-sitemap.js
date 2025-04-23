import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sitemapConfig from "./sitemap-config.js";

// Dapatkan direktori saat ini
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Fungsi untuk mendapatkan tanggal hari ini dalam format YYYY-MM-DD
function getTodayDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

// Memulai XML sitemap
let sitemapContent = `<?xml version="1.0" encoding="utf-8" standalone="yes" ?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

// Tambahkan URL homepage
sitemapContent += `  <url>
    <loc>${sitemapConfig.baseUrl}/</loc>
    <lastmod>${getTodayDate()}</lastmod>
    <changefreq>${
      sitemapConfig.pagesConfig["/"]?.changefreq || "weekly"
    }</changefreq>
    <priority>${sitemapConfig.pagesConfig["/"]?.priority || "1.0"}</priority>
  </url>
`;

// Tambahkan URL untuk semua halaman yang dikonfigurasi dalam pagesConfig
for (const urlPath in sitemapConfig.pagesConfig) {
  if (urlPath === "/") continue; // Skip homepage karena sudah ditambahkan

  const pageConfig = sitemapConfig.pagesConfig[urlPath];
  sitemapContent += `  <url>
    <loc>${sitemapConfig.baseUrl}${urlPath}</loc>
    <lastmod>${getTodayDate()}</lastmod>
    <changefreq>${pageConfig.changefreq}</changefreq>
    <priority>${pageConfig.priority}</priority>
  </url>
`;
}

// Tambahkan URL untuk extraPaths
for (const extraPath of sitemapConfig.extraPaths) {
  // Cek apakah path sudah ditambahkan di pagesConfig
  if (sitemapConfig.pagesConfig[extraPath]) continue;

  sitemapContent += `  <url>
    <loc>${sitemapConfig.baseUrl}${extraPath}</loc>
    <lastmod>${getTodayDate()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
`;
}

// Tutup XML sitemap
sitemapContent += `</urlset>`;

// Tulis file sitemap
const targetPath = path.join(
  sitemapConfig.targetDirectory,
  sitemapConfig.sitemapFilename
);
fs.writeFileSync(targetPath, sitemapContent);

console.log(`Sitemap berhasil dibuat di: ${targetPath}`);
console.log(
  `Total URL: ${
    Object.keys(sitemapConfig.pagesConfig).length +
    sitemapConfig.extraPaths.length
  }`
);
