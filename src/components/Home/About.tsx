import React from "react";
import Link from "next/link";
import Button from "../UI/Button";
import Container from "../UI/Container";
import OptimizedImage from "../UI/OptimizedImage";
import { restaurantData } from "../../data/restaurantData";
import { homePageData } from "../../data/homePageData";

const About: React.FC = () => {
  const { about } = homePageData;

  // Replace {established} placeholder with actual value
  const formatText = (text: string) => {
    return text.replace(
      /{established}/g,
      restaurantData.established.toString()
    );
  };

  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {about.title}{" "}
              <span className="text-orange-600">{about.titleColored}</span>
            </h2>
            <div className="h-1 w-24 bg-yellow-500 mb-6"></div>
            <p className="text-lg text-gray-700 mb-6">
              {formatText(about.introduction)}
            </p>
            <Link href={about.buttonLink}>
              <Button variant="outline" size="lg">
                {about.buttonText}
              </Button>
            </Link>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-500">
              <OptimizedImage
                src={about.image}
                alt={about.imageAlt}
                className="w-full"
                objectFit="cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden md:block">
              <div className="bg-yellow-500 text-gray-900 font-bold py-3 px-6 rounded-lg shadow-lg transform rotate-3">
                {formatText(about.badgeText)}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
