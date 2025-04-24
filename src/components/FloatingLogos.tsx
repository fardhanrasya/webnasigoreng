"use client";

import React, { useState } from "react";
import { Phone, X } from "lucide-react";
import Image from "next/image";
import OptimizedImage from "./UI/OptimizedImage";
import { restaurantData } from "@/data/restaurantData";

interface FloatingLogosProps {
  whatsappNumber?: string;
  gofoodLink?: string;
  shopeefoodLink?: string;
}

const FloatingLogos: React.FC<FloatingLogosProps> = ({
  whatsappNumber,
  gofoodLink,
  shopeefoodLink,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showFoodOptions, setShowFoodOptions] = useState(false);

  const handleWhatsappClick = () => {
    window.open(
      `https://wa.me/${
        whatsappNumber || restaurantData.phone.replace(/\+|\s|-/g, "")
      }`,
      "_blank"
    );
  };

  const handleGofoodClick = () => {
    window.open(gofoodLink || restaurantData.delivery.gofood, "_blank");
  };

  const handleShopeefoodClick = () => {
    window.open(shopeefoodLink || restaurantData.delivery.shopeefood, "_blank");
  };

  const toggleFoodOptions = () => {
    setShowFoodOptions(!showFoodOptions);
  };

  return (
    <>
      <style>
        {`
        @keyframes wiggle {
          0% {
            transform: rotate(0deg);
          }
          15% {
            transform: rotate(-15deg);
          }
          30% {
            transform: rotate(10deg);
          }
          45% {
            transform: rotate(-10deg);
          }
          60% {
            transform: rotate(5deg);
          }
          75% {
            transform: rotate(-5deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }
        .wiggle-animation {
          animation: wiggle 2s ease-in-out infinite;
        }
        .wiggle-animation:hover {
          animation-play-state: paused;
        }
      `}
      </style>

      {/* WhatsApp Logo - Pojok Kiri Bawah */}
      <div className="fixed left-5 bottom-5 z-50">
        <div
          className="cursor-pointer hover:scale-110 transition-transform duration-200 shadow-2xl rounded-full bg-white p-2 wiggle-animation"
          onClick={handleWhatsappClick}
          title="Chat via WhatsApp"
        >
          <OptimizedImage
            src="/images/logos/whatsapp-logo.svg"
            alt="WhatsApp"
            width={64}
            height={64}
          />
        </div>
      </div>

      {/* Food Delivery Options - Pojok Kanan Bawah */}
      <div className="fixed right-5 bottom-5 z-50">
        <div className="relative">
          {/* Food Delivery Logo */}
          <div
            className="cursor-pointer hover:scale-110 transition-transform duration-200 shadow-2xl rounded-full bg-white p-2 wiggle-animation"
            onClick={toggleFoodOptions}
            title="Food Delivery Options"
          >
            <OptimizedImage
              src="/images/logos/food-delivery.svg"
              alt="Food Delivery"
              width={64}
              height={64}
            />
          </div>

          {/* Popup Food Options */}
          <div
            className={`absolute bottom-full right-0 mb-2 flex flex-col items-center space-y-3 bg-white p-4 rounded-lg shadow-[0_8px_30px_rgba(0,0,0,0.25)] transition-all duration-300 ${
              showFoodOptions
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95 pointer-events-none"
            }`}
          >
            {/* GoFood */}
            <div
              className="cursor-pointer hover:scale-110 transition-transform duration-200"
              onClick={handleGofoodClick}
              title="Order via GoFood"
            >
              <OptimizedImage
                src="/images/logos/gofood.svg"
                alt="GoFood"
                width={140}
                height={50}
                objectFit="contain"
              />
            </div>

            {/* ShopeeFood */}
            <div
              className="cursor-pointer hover:scale-110 transition-transform duration-200"
              onClick={handleShopeefoodClick}
              title="Order via ShopeeFood"
            >
              <OptimizedImage
                src="/images/logos/shopeefood.svg"
                alt="ShopeeFood"
                width={140}
                height={50}
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FloatingLogos;
