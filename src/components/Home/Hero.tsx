import React from "react";
import Link from "next/link";
import Button from "../UI/Button";
import { restaurantData } from "../../data/restaurantData";
import { homePageData } from "../../data/homePageData";

const Hero: React.FC = () => {
  const { hero } = homePageData;

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("${hero.backgroundImage}")`,
      }}
      aria-label="Hero section"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40"></div>

      <div className="container mx-auto px-4 text-center relative z-10 animate-fadeIn">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            {restaurantData.name}{" "}
            <span className="text-yellow-500">{restaurantData.slogan}</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 drop-shadow">
            {hero.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={hero.primaryButton.link}
              aria-label={hero.primaryButton.text}
            >
              <Button size="lg" variant="primary">
                {hero.primaryButton.text}
              </Button>
            </Link>
            <Link
              href={hero.secondaryButton.link}
              aria-label={hero.secondaryButton.text}
            >
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white/10"
              >
                {hero.secondaryButton.text}
              </Button>
            </Link>
          </div>
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
            aria-hidden="true"
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
    </section>
  );
};

export default Hero;
