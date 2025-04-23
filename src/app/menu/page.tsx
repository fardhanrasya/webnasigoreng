import type { Metadata } from "next";
import MenuList from "@/components/Menu/MenuList";
import { menuData, categories } from "@/data/menuData";
import { menuPageData } from "@/data/menuPageData";
import Container from "@/components/UI/Container";
import Hero from "@/components/Menu/Hero";
import Breadcrumbs from "@/components/Layout/Breadcrumbs";

// Tambahkan generateMetadata untuk mendukung dynamic metadata berdasarkan parameter
export async function generateMetadata({
  searchParams,
}: {
  searchParams: { page?: string; kategori?: string };
}): Promise<Metadata> {
  const page = searchParams.page || "1";
  const kategori = searchParams.kategori || "all";

  // Base metadata
  const baseMetadata = menuPageData.metadata;

  // Jika ini halaman paginasi atau kategori spesifik, tambahkan info ke metadata
  let title = baseMetadata.title as string;
  let description = baseMetadata.description as string;

  if (kategori !== "all") {
    title = `${kategori} - ${title}`;
    description = `Menu ${kategori} di restoran kami. ${description}`;
  }

  if (page !== "1") {
    title = `${title} - Halaman ${page}`;
    description = `${description} Halaman ${page}.`;
  }

  return {
    ...baseMetadata,
    title,
    description,
    alternates: {
      canonical:
        kategori === "all" && page === "1"
          ? "/menu"
          : `/menu?${new URLSearchParams({
              ...(kategori !== "all" ? { kategori } : {}),
              ...(page !== "1" ? { page } : {}),
            }).toString()}`,
    },
  };
}

export default function Menu({
  searchParams,
}: {
  searchParams: { page?: string; kategori?: string };
}) {
  return (
    <div className="pb-16 bg-gray-50 min-h-screen">
      <Hero />
      <Container>
        <Breadcrumbs />
      </Container>
      <Container className="mt-8">
        <MenuList items={menuData} categories={categories} />
      </Container>
    </div>
  );
}
