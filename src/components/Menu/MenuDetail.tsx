"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MenuItemType } from "@/types/menu";
import Container from "../UI/Container";
import Button from "../UI/Button";
import OrderModal from "../UI/OrderModal";
import OptimizedImage from "../UI/OptimizedImage";

interface MenuDetailProps {
  menuItem: MenuItemType;
}

const MenuDetail: React.FC<MenuDetailProps> = ({ menuItem }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOrderClick = () => {
    setModalOpen(true);
  };

  const handleShareWhatsApp = () => {
    const currentUrl = window.location.href;
    const message = `Lihat menu lezat ini: ${menuItem.name} - ${
      menuItem.description
    }. Harga: Rp${(menuItem.price * 15000).toLocaleString(
      "id-ID"
    )}. Kunjungi: ${currentUrl}
    `;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/?text=${encodedMessage}`, "_blank");
  };

  return (
    <>
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[50vh]"
        style={{ backgroundImage: `url(${menuItem.image})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
          <Container className="pb-8">
            <h1 className="text-4xl font-bold text-white">{menuItem.name}</h1>
            <div className="inline-block bg-orange-500 text-white text-sm px-3 py-1 mt-2 rounded-full">
              {menuItem.category}
            </div>
          </Container>
        </div>
      </div>

      <div className="pb-16 bg-gray-50 min-h-screen">
        <Container className="pt-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="overflow-hidden rounded-lg">
                <OptimizedImage
                  src={menuItem.image}
                  alt={menuItem.name}
                  objectFit="cover"
                />
              </div>

              <div className="flex flex-col h-full">
                <div className="flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h1 className="text-2xl font-bold text-gray-900">
                      {menuItem.name}
                    </h1>
                    <span className="text-orange-600 font-bold text-xl">
                      Rp{(menuItem.price * 15000).toLocaleString("id-ID")}
                    </span>
                  </div>

                  <div className="mb-4">
                    <span className="inline-block bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">
                      {menuItem.category}
                    </span>
                  </div>

                  {menuItem.spicyLevel > 0 && (
                    <div className="flex items-center mb-4">
                      <span className="text-sm mr-2 text-gray-700">
                        Level Pedas:
                      </span>
                      <div className="flex">
                        {[...Array(3)].map((_, i) => (
                          <span
                            key={i}
                            className={`text-sm ${
                              i < menuItem.spicyLevel
                                ? "text-red-500"
                                : "text-gray-300"
                            }`}
                          >
                            🌶️
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="mb-6">
                    <h2 className="text-lg font-semibold mb-2">Deskripsi</h2>
                    <p className="text-gray-700">{menuItem.description}</p>
                  </div>
                </div>

                <div className="mt-auto">
                  <div className="flex flex-col md:flex-row gap-4">
                    <Button
                      variant="primary"
                      className="flex-1"
                      onClick={handleOrderClick}
                    >
                      Pesan Sekarang
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 flex items-center justify-center gap-2"
                      onClick={handleShareWhatsApp}
                    >
                      <OptimizedImage
                        src="/images/logos/whatsapp-logo.svg"
                        alt="WhatsApp"
                        width={20}
                        height={20}
                      />
                      <span>Share</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Modal yang hanya mengisi setengah layar */}
      {modalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-end justify-center z-50">
          <div className="bg-white rounded-t-lg p-6 w-full max-h-[50vh] overflow-y-auto">
            <div className="mb-4">
              <h3 className="text-xl font-bold text-gray-900">
                Pesan {menuItem.name}
              </h3>
              <p className="text-gray-600 mt-1">
                Pilih platform untuk melanjutkan pemesanan
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <button
                onClick={() => {
                  window.open("https://gofood.co.id", "_blank");
                  setModalOpen(false);
                }}
                className="flex flex-col items-center justify-center p-4 border rounded-lg hover:bg-gray-50 transition-colors"
              >
                <OptimizedImage
                  src="/images/logos/gofood.svg"
                  alt="GoFood"
                  height={48}
                  className="mb-2"
                />
                <span className="font-medium">GoFood</span>
              </button>

              <button
                onClick={() => {
                  window.open("https://shopeefood.co.id", "_blank");
                  setModalOpen(false);
                }}
                className="flex flex-col items-center justify-center p-4 border rounded-lg hover:bg-gray-50 transition-colors"
              >
                <OptimizedImage
                  src="/images/logos/shopeefood.svg"
                  alt="ShopeeFood"
                  height={48}
                  className="mb-2"
                />
                <span className="font-medium">ShopeeFood</span>
              </button>
            </div>

            <div className="flex justify-center">
              <button
                onClick={() => setModalOpen(false)}
                className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 text-gray-800"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MenuDetail;
