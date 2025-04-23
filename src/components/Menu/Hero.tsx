import React from "react";
import { menuPageData } from "../../data/menuPageData";

const Hero: React.FC = () => {
  const { hero } = menuPageData;

  return (
    <div
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("${hero.backgroundImage}")`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40"></div>

      <div className="container mx-auto px-4 text-center relative z-10 animate-fadeIn">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            {hero.title}
          </h1>
          <p className="text-lg text-gray-200 mb-4 max-w-2xl mx-auto drop-shadow">
            {hero.description}
          </p>
          <div className="h-1 w-24 bg-yellow-500 mx-auto"></div>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <div className="animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-white opacity-70"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero;
