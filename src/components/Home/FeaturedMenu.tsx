"use client";

import React, { useState } from "react";
import Link from "next/link";
import { menuData } from "../../data/menuData";
import { homePageData } from "../../data/homePageData";
import SectionTitle from "../UI/SectionTitle";
import Button from "../UI/Button";
import Container from "../UI/Container";
import OrderModal from "../UI/OrderModal";
import OptimizedImage from "../UI/OptimizedImage";

const FeaturedMenu: React.FC = () => {
  const { featuredMenu } = homePageData;

  // Get 3 featured items
  const featuredItems = menuData.filter((item) => item.featured).slice(0, 3);

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");

  const handleOrderClick = (productName: string) => {
    setSelectedProduct(productName);
    setModalOpen(true);
  };

  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <SectionTitle
          title={featuredMenu.title}
          subtitle={featuredMenu.subtitle}
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredItems.map((item) => {
            const formattedMenuName = item.name
              .toLowerCase()
              .replace(/\s+/g, "-");

            return (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2"
              >
                <Link
                  href={`/menu/${formattedMenuName}`}
                  className="block h-56 overflow-hidden flex items-center justify-center"
                >
                  <OptimizedImage
                    src={item.image}
                    alt={item.name}
                    height={224}
                    className="transition-transform duration-700 hover:scale-105 "
                    objectFit="cover"
                  />
                </Link>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <Link
                      href={`/menu/${formattedMenuName}`}
                      className="text-xl font-bold text-gray-900 hover:text-orange-600"
                    >
                      {item.name}
                    </Link>
                    <span className="text-orange-600 font-bold">
                      Rp{(item.price * 15000).toLocaleString("id-ID")}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {item.categories.slice(0, 3).map((category) => (
                      <span
                        key={category}
                        className="inline-block bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full"
                      >
                        {category}
                      </span>
                    ))}
                  </div>

                  <p className="text-gray-600 mb-4">{item.shortDescription}</p>
                  <Button
                    variant="primary"
                    size="md"
                    className="w-full"
                    onClick={() => handleOrderClick(item.name)}
                  >
                    {featuredMenu.orderButtonText}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link href={featuredMenu.buttonLink}>
            <Button variant="outline" size="lg">
              {featuredMenu.buttonText}
            </Button>
          </Link>
        </div>
      </Container>

      <OrderModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        productName={selectedProduct}
      />
    </section>
  );
};

export default FeaturedMenu;
