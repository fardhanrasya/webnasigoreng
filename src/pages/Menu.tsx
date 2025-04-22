import React from "react";
import SEO from "../components/SEO";
import MenuList from "../components/Menu/MenuList";
import { menuData, categories } from "../data/menuData";
import Container from "../components/UI/Container";
import Hero from "../components/Menu/Hero";
import Breadcrumbs from "../components/Layout/Breadcrumbs";

const Menu: React.FC = () => {
  return (
    <>
      <SEO
        title="Menu"
        description="Pilihan menu nasi goreng dan hidangan Indonesia lainnya. Nikmati berbagai varian nasi goreng dengan bahan-bahan berkualitas dan rasa autentik."
        keywords="menu nasi goreng, makanan indonesia, nasi goreng spesial, hidangan tradisional"
        ogType="website"
        ogImage="/images/menu-collage.jpg"
      />
      <div className="pb-16 bg-gray-50 min-h-screen">
        <Hero />
        <Container>
          <Breadcrumbs />
        </Container>
        <Container className="mt-8">
          <MenuList items={menuData} categories={categories} />
        </Container>
      </div>
    </>
  );
};

export default Menu;
