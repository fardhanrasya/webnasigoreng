import { MetadataRoute } from "next";
import { menuData, categories } from "@/data/menuData";
import siteConfig from "./env";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.baseUrl;
  const ITEMS_PER_PAGE = 6; // Pastikan sama dengan nilai di MenuList.tsx

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

  // Halaman paginasi untuk semua menu
  const totalMenuPages = Math.ceil(menuData.length / ITEMS_PER_PAGE);
  const paginationPages = Array.from(
    { length: totalMenuPages },
    (_, i) => i + 1
  )
    .filter((page) => page > 1) // Halaman 1 sudah ada di staticPages
    .map((page) => ({
      url: `${baseUrl}/menu?page=${page}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.6,
    }));

  // Halaman kategori menu
  const categoryPages = categories
    .map((category) => {
      // Hitung jumlah item dalam kategori ini
      const itemsInCategory = menuData.filter((item) =>
        item.categories.includes(category)
      );
      const totalPages = Math.ceil(itemsInCategory.length / ITEMS_PER_PAGE);

      // Buat array halaman untuk kategori ini
      const pages = [
        {
          url: `${baseUrl}/menu?kategori=${encodeURIComponent(category)}`,
          lastModified: new Date(),
          changeFrequency: "weekly" as const,
          priority: 0.7,
        },
        ...Array.from({ length: totalPages }, (_, i) => i + 1)
          .filter((page) => page > 1) // Halaman 1 sudah tercakup di atas
          .map((page) => ({
            url: `${baseUrl}/menu?kategori=${encodeURIComponent(
              category
            )}&page=${page}`,
            lastModified: new Date(),
            changeFrequency: "weekly" as const,
            priority: 0.6,
          })),
      ];

      return pages;
    })
    .flat();

  return [...staticPages, ...menuPages, ...paginationPages, ...categoryPages];
}
