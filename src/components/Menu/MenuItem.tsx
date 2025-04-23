import React from "react";
import Link from "next/link";
import { MenuItemType } from "../../types/menu";
import Button from "../UI/Button";
import OptimizedImage from "../UI/OptimizedImage";

interface MenuItemProps {
  item: MenuItemType;
  onOrderClick: (productName: string) => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ item, onOrderClick }) => {
  // Format menu name for URL
  const formattedMenuName = item.name.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col h-full">
      <Link
        href={`/menu/${formattedMenuName}`}
        className="block h-48 overflow-hidden flex items-center justify-center"
      >
        <OptimizedImage
          src={item.image}
          alt={item.name}
          className="transition-transform duration-500 hover:scale-105"
          objectFit="cover"
          height={192} // 48rem = 192px
        />
      </Link>
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <Link
            href={`/menu/${formattedMenuName}`}
            className="text-lg font-bold text-gray-900 hover:text-orange-600"
          >
            {item.name}
          </Link>
          <span className="text-orange-600 font-bold">
            Rp{(item.price * 15000).toLocaleString("id-ID")}
          </span>
        </div>
        <p className="text-gray-600 text-sm mb-3">{item.shortDescription}</p>

        <div className="flex flex-wrap gap-1 mb-2">
          {item.categories.slice(0, 3).map((category) => (
            <span
              key={category}
              className="inline-block bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full"
            >
              {category}
            </span>
          ))}
          {item.categories.length > 3 && (
            <span className="inline-block text-gray-500 text-xs px-1">
              +{item.categories.length - 3}
            </span>
          )}
        </div>

        {item.spicyLevel > 0 && (
          <div className="flex items-center mb-3">
            <span className="text-xs mr-2 text-gray-700">Level Pedas:</span>
            <div className="flex">
              {[...Array(3)].map((_, i) => (
                <span
                  key={i}
                  className={`text-xs ${
                    i < item.spicyLevel ? "text-red-500" : "text-gray-300"
                  }`}
                >
                  🌶️
                </span>
              ))}
            </div>
          </div>
        )}
        <div className="mt-auto pt-2">
          <Button
            variant="primary"
            size="sm"
            className="w-full"
            onClick={() => onOrderClick(item.name)}
          >
            Pesan Sekarang
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
