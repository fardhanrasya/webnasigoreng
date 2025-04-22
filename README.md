# Restoran Nasi Goreng Website

A modern React-based website for Restoran Nasi Goreng, showcasing menus, information, and contact details. Built with TypeScript, Vite, and Tailwind CSS.

## Features

- 🏠 Responsive landing page with hero section, featured menu, about section, and testimonials
- 🍽️ Complete menu catalog with detailed item pages
- 📱 Mobile-friendly design
- 🔍 SEO optimized with meta tags and sitemap
- 🖼️ Optimized image loading
- 🛍️ Integration with food delivery platforms (GoFood, ShopeeFood)
- 💬 WhatsApp integration for direct orders
- 📍 Contact form and location information
- 🎨 Modern UI components with Tailwind CSS
- 🌐 Automatic sitemap generation

## Project Structure

```
src/
├── assets/
├── components/
│   ├── About/
│   ├── Contact/
│   ├── Home/
│   ├── Layout/
│   ├── Menu/
│   └── UI/
├── data/
├── logo/
├── pages/
└── types/
```

## Automatic Sitemap Generation

The project includes automated sitemap generation to improve SEO. Here's how to set it up:

### 1. Install sitemap-generator

Add the sitemap-generator package to your project:

```bash
npm install --save-dev sitemap-generator-cli
```

### 2. Add script to package.json

Add the following script to your package.json:

```json
"scripts": {
  "generate-sitemap": "npx sitemap-generator-cli --config=sitemap-config.js"
}
```

### 3. Create sitemap configuration

Create a `sitemap-config.js` file in the project root:

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

### 4. GitHub Actions Integration (Optional)

For automatic updates using GitHub Actions, create `.github/workflows/sitemap.yml`:

```yaml
name: Generate Sitemap

on:
  push:
    branches: [main]
  schedule:
    - cron: "0 0 * * 0" # Every Sunday at 00:00 UTC

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

### 5. Add to Build Process

Include sitemap generation in your build process:

```json
"scripts": {
  "build": "vite build && npm run generate-sitemap"
}
```

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`
4. Build for production: `npm run build`

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- ESLint
- PostCSS
