"use client";

import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
  Suspense,
} from "react";
import MenuItem from "./MenuItem";
import { MenuItemType } from "../../types/menu";
import Button from "../UI/Button";
import OrderModal from "../UI/OrderModal";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  ChevronDown,
  Package,
  Coffee,
  Utensils,
  Cake,
  Award,
  Fish,
  UtensilsCrossed,
  Droplet,
  Heart,
  Leaf,
} from "lucide-react";

interface MenuListProps {
  items: MenuItemType[];
  categories: string[];
}

const ITEMS_PER_PAGE = 6;

// Kategori populer yang selalu ditampilkan
const POPULAR_CATEGORIES = ["all", "Rekomendasi", "Nasi Goreng", "Menu Utama"];

// Component untuk tombol kategori
const CategoryButton: React.FC<{
  category: string;
  isActive: boolean;
  onClick: () => void;
  displayName?: string;
  icon?: React.ReactNode;
}> = ({ category, isActive, onClick, displayName, icon }) => (
  <Button
    variant={isActive ? "primary" : "outline"}
    onClick={onClick}
    className={`mr-2 mb-2 px-4 py-2 rounded-md ${
      isActive ? "border-b-2 border-orange-600" : "hover:bg-orange-50"
    }`}
  >
    <span className="flex items-center">
      {icon}
      {displayName || category}
    </span>
  </Button>
);

// Component untuk tombol kategori mobile
const MobileCategoryButton: React.FC<{
  category: string;
  isActive: boolean;
  onClick: () => void;
  displayName?: string;
}> = ({ category, isActive, onClick, displayName }) => (
  <Button
    variant={isActive ? "primary" : "outline"}
    onClick={onClick}
    className="whitespace-nowrap rounded-full py-1.5 px-4 shadow-sm flex-shrink-0"
    size="sm"
  >
    {displayName || category}
  </Button>
);

// Component untuk pagination link
const PaginationLink: React.FC<{
  page: number;
  currentPage: number;
  category: string;
  children: React.ReactNode;
}> = ({ page, currentPage, category, children }) => (
  <Link
    href={`/menu?kategori=${category}&page=${page}`}
    className={`px-3 py-2 ${
      currentPage === page
        ? "bg-blue-600 text-white"
        : "bg-white text-gray-800 hover:bg-gray-100"
    }`}
  >
    {children}
  </Link>
);

const MenuListContent: React.FC<MenuListProps> = ({ items, categories }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentPage = Number(searchParams.get("page") || "1");
  const currentCategory = searchParams.get("kategori") || "all";

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Memoisasi kategori lainnya
  const otherCategories = useMemo(
    () => categories.filter((cat) => !POPULAR_CATEGORIES.includes(cat)),
    [categories]
  );

  // Fungsi untuk mendapatkan ikon berdasarkan kategori
  const getCategoryIcon = useCallback((category: string) => {
    switch (category) {
      case "all":
        return <Utensils size={16} className="mr-2" />;
      case "Nasi Goreng":
        return <UtensilsCrossed size={16} className="mr-2" />;
      case "Hidangan Pembuka":
        return <Package size={16} className="mr-2" />;
      case "Menu Utama":
        return <Utensils size={16} className="mr-2" />;
      case "Dessert":
        return <Cake size={16} className="mr-2" />;
      case "Minuman":
        return <Coffee size={16} className="mr-2" />;
      case "Rekomendasi":
        return <Award size={16} className="mr-2" />;
      case "Seafood":
        return <Fish size={16} className="mr-2" />;
      case "Makanan Tradisional":
        return <UtensilsCrossed size={16} className="mr-2" />;
      case "Minuman Tradisional":
        return <Coffee size={16} className="mr-2" />;
      case "Minuman Sehat":
        return <Droplet size={16} className="mr-2" />;
      case "Vegetarian":
        return <Leaf size={16} className="mr-2" />;
      default:
        return null;
    }
  }, []);

  // Klik di luar dropdown untuk menutupnya
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowAllCategories(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const handleOrderClick = useCallback((productName: string) => {
    setSelectedProduct(productName);
    setModalOpen(true);
  }, []);

  // Memoisasi items yang difilter
  const filteredItems = useMemo(
    () =>
      currentCategory === "all"
        ? items
        : items.filter((item) => item.categories.includes(currentCategory)),
    [items, currentCategory]
  );

  // Pagination logic
  const { totalItems, totalPages, currentItems } = useMemo(() => {
    const totalItems = filteredItems.length;
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentItems = filteredItems.slice(startIndex, endIndex);

    return { totalItems, totalPages, currentItems };
  }, [filteredItems, currentPage]);

  // Handle category change
  const handleCategoryChange = useCallback(
    (category: string) => {
      const params = new URLSearchParams();
      params.set("kategori", category);
      params.set("page", "1"); // Reset to page 1 when changing category
      router.push(`/menu?${params.toString()}`);
      setShowAllCategories(false);
    },
    [router]
  );

  // Memoisasi page numbers untuk pagination
  const pageNumbers = useMemo(() => {
    return Array.from({ length: totalPages }, (_, i) => i + 1).filter(
      (page) =>
        page === 1 ||
        page === totalPages ||
        (page >= currentPage - 1 && page <= currentPage + 1)
    );
  }, [totalPages, currentPage]);

  return (
    <div className="w-full">
      {/* Category filter buttons - New Design */}
      <div className="mb-8">
        {/* Desktop view - Tab style */}
        <div className="hidden md:block">
          <div className="flex flex-wrap justify-center border-b mb-2">
            {/* Main categories tabs */}
            <div className="flex flex-wrap justify-center py-2 px-4">
              {POPULAR_CATEGORIES.map((catId) => {
                const category = catId === "all" ? "all" : catId;
                const displayName = catId === "all" ? "Semua" : catId;

                return (
                  <CategoryButton
                    key={category}
                    category={category}
                    isActive={currentCategory === category}
                    onClick={() => handleCategoryChange(category)}
                    displayName={displayName}
                    icon={getCategoryIcon(category)}
                  />
                );
              })}

              {/* Dropdown Kategori Lainnya */}
              <div className="relative mb-2" ref={dropdownRef}>
                <button
                  onClick={() => setShowAllCategories(!showAllCategories)}
                  className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 border border-orange-600 text-orange-600 hover:bg-orange-50 focus:ring-orange-500 text-base px-4 py-2 cursor-pointer mr-2 mb-0"
                >
                  <span className="flex items-center">
                    Kategori Lainnya
                    <ChevronDown size={16} className="ml-2" />
                  </span>
                </button>

                {showAllCategories && (
                  <div className="absolute right-0 z-50 mt-2 w-56 rounded-md shadow-lg bg-white border border-gray-200">
                    <div className="py-1">
                      {otherCategories.map((category) => (
                        <button
                          key={category}
                          className={`w-full text-left px-4 py-2 text-sm ${
                            currentCategory === category
                              ? "bg-orange-100 text-orange-800"
                              : "text-gray-700 hover:bg-orange-50"
                          }`}
                          onClick={() => handleCategoryChange(category)}
                        >
                          <span className="flex items-center">
                            {getCategoryIcon(category)}
                            {category}
                          </span>
                        </button>
                      ))}

                      {otherCategories.length === 0 && (
                        <div className="px-4 py-2 text-sm text-gray-500">
                          Tidak ada kategori tambahan
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile view - pill style */}
        <div className="md:hidden">
          <div className="flex flex-nowrap overflow-x-auto py-2 px-2 scrollbar-hide space-x-2 pb-3">
            <MobileCategoryButton
              category="all"
              isActive={currentCategory === "all"}
              onClick={() => handleCategoryChange("all")}
              displayName="Semua"
            />

            {categories.map((category) => (
              <MobileCategoryButton
                key={category}
                category={category}
                isActive={currentCategory === category}
                onClick={() => handleCategoryChange(category)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Menu items grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentItems.map((item) => (
          <MenuItem key={item.id} item={item} onOrderClick={handleOrderClick} />
        ))}
      </div>

      {currentItems.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500">Tidak ada menu dalam kategori ini.</p>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-8">
          <nav className="inline-flex border border-gray-300 rounded overflow-hidden">
            {/* Previous button */}
            {currentPage > 1 && (
              <Link
                href={`/menu?kategori=${currentCategory}&page=${
                  currentPage - 1
                }`}
                className="px-3 py-2 bg-white text-gray-800 hover:bg-gray-100 flex items-center"
              >
                <span className="sr-only">Sebelumnya</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </Link>
            )}

            {/* Page numbers */}
            {pageNumbers.map((page) => {
              // Tambahkan ellipsis jika perlu
              if (
                (pageNumbers.includes(page) &&
                  pageNumbers.includes(page - 1) &&
                  page > 2) ||
                (pageNumbers.includes(page) &&
                  pageNumbers.includes(page + 1) &&
                  page < totalPages - 1)
              ) {
                return (
                  <PaginationLink
                    key={page}
                    page={page}
                    currentPage={currentPage}
                    category={currentCategory}
                  >
                    {page}
                  </PaginationLink>
                );
              }

              // Add ellipsis for skipped pages
              if (
                (page === 2 && currentPage > 3) ||
                (page === totalPages - 1 && currentPage < totalPages - 2)
              ) {
                return (
                  <span
                    key={`ellipsis-${page}`}
                    className="px-3 py-2 bg-white text-gray-800"
                  >
                    ...
                  </span>
                );
              }

              return (
                <PaginationLink
                  key={page}
                  page={page}
                  currentPage={currentPage}
                  category={currentCategory}
                >
                  {page}
                </PaginationLink>
              );
            })}

            {/* Next button */}
            {currentPage < totalPages && (
              <Link
                href={`/menu?kategori=${currentCategory}&page=${
                  currentPage + 1
                }`}
                className="px-3 py-2 bg-white text-gray-800 hover:bg-gray-100 flex items-center"
              >
                <span className="sr-only">Selanjutnya</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            )}
          </nav>
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

const MenuList: React.FC<MenuListProps> = (props) => {
  return (
    <Suspense fallback={<div className="p-4 text-center">Memuat menu...</div>}>
      <MenuListContent {...props} />
    </Suspense>
  );
};

export default MenuList;
