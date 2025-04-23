export default {
  baseUrl: "https://webnasigoreng.vercel.app",
  pagesDirectory: "./src/pages",
  targetDirectory: "public",
  sitemapFilename: "mysites.xml",
  ignoredExtensions: ["tsx", "ts"],
  ignoredPaths: ["404", "_app", "NotFound"],
  extraPaths: [
    "/menu/detail/nasi-goreng-spesial",
    "/menu/detail/nasi-goreng-seafood",
    "/menu/detail/nasi-goreng-kampung",
    "/menu/detail/nasi-goreng-teri",
    "/menu/detail/nasi-goreng-pete",
    "/menu/detail/nasi-goreng-mawut",
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
    "/menu/detail/nasi-goreng-spesial": {
      priority: 0.7,
      changefreq: "weekly",
    },
    "/menu/detail/nasi-goreng-seafood": {
      priority: 0.7,
      changefreq: "weekly",
    },
    "/menu/detail/nasi-goreng-kampung": {
      priority: 0.7,
      changefreq: "weekly",
    },
    "/menu/detail/nasi-goreng-teri": {
      priority: 0.7,
      changefreq: "weekly",
    },
    "/menu/detail/nasi-goreng-pete": {
      priority: 0.7,
      changefreq: "weekly",
    },
    "/menu/detail/nasi-goreng-mawut": {
      priority: 0.7,
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
