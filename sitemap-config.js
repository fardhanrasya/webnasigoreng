export default {
  baseUrl: "https://webnasigoreng.vercel.app",
  pagesDirectory: "./src/pages",
  targetDirectory: "public",
  sitemapFilename: "mysites.xml",
  ignoredExtensions: ["tsx", "ts"],
  ignoredPaths: ["404", "_app", "NotFound"],
  extraPaths: [
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
