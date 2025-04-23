"use client";

import React, { useState } from "react";
import MenuItem from "./MenuItem";
import { MenuItemType } from "../../types/menu";
import Button from "../UI/Button";
import OrderModal from "../UI/OrderModal";

interface MenuListProps {
  items: MenuItemType[];
  categories: string[];
}

const MenuList: React.FC<MenuListProps> = ({ items, categories }) => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");

  const handleOrderClick = (productName: string) => {
    setSelectedProduct(productName);
    setModalOpen(true);
  };

  const filteredItems =
    activeCategory === "all"
      ? items
      : items.filter((item) => item.category === activeCategory);

  return (
    <div className="w-full">
      {/* Category filter buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        <Button
          variant={activeCategory === "all" ? "primary" : "outline"}
          onClick={() => setActiveCategory("all")}
          className="mb-2"
        >
          All
        </Button>
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? "primary" : "outline"}
            onClick={() => setActiveCategory(category)}
            className="mb-2"
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Menu items grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <MenuItem key={item.id} item={item} onOrderClick={handleOrderClick} />
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500">No items found in this category.</p>
        </div>
      )}

      <OrderModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        productName={selectedProduct}
      />
    </div>
  );
};

export default MenuList;
