import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { menuData } from "@/data/menuData";
import { MenuItemType } from "@/types/menu";
import Container from "@/components/UI/Container";
import MenuDetailComponent from "@/components/Menu/MenuDetail";

// Generate static paths
export async function generateStaticParams() {
  return menuData.map((item) => ({
    menuName: item.name.toLowerCase().replace(/\s+/g, "-"),
  }));
}

type MenuDetailProps = {
  params: {
    menuName: string;
  };
};

// Generate metadata for each page
export async function generateMetadata({
  params,
}: MenuDetailProps): Promise<Metadata> {
  const { menuName } = params;

  const menuItem = menuData.find(
    (item) => item.name.toLowerCase().replace(/\s+/g, "-") === menuName
  );

  if (!menuItem) {
    return {
      title: "Menu Tidak Ditemukan",
      description: "Menu yang dicari tidak dapat ditemukan",
    };
  }

  return {
    title: `${menuItem.name} - Detail Menu`,
    description: menuItem.description,
    keywords: `${menuItem.name}, ${menuItem.category}, menu makanan indonesia`,
    openGraph: {
      title: `${menuItem.name} - Detail Menu | Restoran Nasi Goreng`,
      description: menuItem.description,
      type: "website",
      images: [
        {
          url: menuItem.image,
          width: 1200,
          height: 630,
          alt: menuItem.name,
        },
      ],
    },
  };
}

export default function MenuDetail({ params }: MenuDetailProps) {
  const { menuName } = params;

  const menuItem = menuData.find(
    (item) => item.name.toLowerCase().replace(/\s+/g, "-") === menuName
  );

  if (!menuItem) {
    notFound();
  }

  return <MenuDetailComponent menuItem={menuItem} />;
}
