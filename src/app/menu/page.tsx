import type { Metadata } from "next";
import MenuList from "@/components/Menu/MenuList";
import { menuData, categories } from "@/data/menuData";
import { menuPageData } from "@/data/menuPageData";
import Container from "@/components/UI/Container";
import Hero from "@/components/Menu/Hero";
import Breadcrumbs from "@/components/Layout/Breadcrumbs";

export const metadata: Metadata = menuPageData.metadata;

export default function Menu() {
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
