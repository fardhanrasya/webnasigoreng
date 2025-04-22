import React, { useState } from "react";
import whatsappLogo from "../logo/whatsapp-logo.svg";
import foodDeliveryLogo from "../logo/food-delivery.svg";
import gofoodLogo from "../logo/gofood.svg";
import shopeefoodLogo from "../logo/shopeefood.svg";
import OptimizedImage from "./UI/OptimizedImage";

interface LogoProps {
  whatsappNumber: string;
  gofoodLink: string;
  shopeefoodLink: string;
}

const FloatingLogos: React.FC<LogoProps> = ({
  whatsappNumber = "6281234567890",
  gofoodLink = "https://gofood.co.id/restaurant-link",
  shopeefoodLink = "https://shopeefood.co.id/restaurant-link",
}) => {
  const [showFoodOptions, setShowFoodOptions] = useState(false);

  const handleWhatsappClick = () => {
    window.open(`https://wa.me/${whatsappNumber}`, "_blank");
  };

  const handleGofoodClick = () => {
    window.open(gofoodLink, "_blank");
  };

  const handleShopeefoodClick = () => {
    window.open(shopeefoodLink, "_blank");
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
            src={whatsappLogo}
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
              src={foodDeliveryLogo}
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
                src={gofoodLogo}
                alt="GoFood"
                width={112}
                height={48}
              />
            </div>

            {/* ShopeeFood */}
            <div
              className="cursor-pointer hover:scale-110 transition-transform duration-200"
              onClick={handleShopeefoodClick}
              title="Order via ShopeeFood"
            >
              <OptimizedImage
                src={shopeefoodLogo}
                alt="ShopeeFood"
                width={112}
                height={48}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FloatingLogos;
