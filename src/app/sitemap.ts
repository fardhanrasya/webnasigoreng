import { MetadataRoute } from "next";
import { menuData } from "@/data/menuData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://nasigorengrestoran.com";

  // Halaman statis
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/menu`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
  ];

  // Menu detail pages
  const menuPages = menuData.map((item) => {
    const menuSlug = item.name.toLowerCase().replace(/\s+/g, "-");
    return {
      url: `${baseUrl}/menu/${menuSlug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    };
  });

  return [...staticPages, ...menuPages];
}
