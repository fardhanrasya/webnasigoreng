import React from "react";
import { Link } from "react-router-dom";
import Button from "../UI/Button";
import Container from "../UI/Container";
import OptimizedImage from "../UI/OptimizedImage";

const About: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cerita <span className="text-orange-600">Kami</span>
            </h2>
            <div className="h-1 w-24 bg-yellow-500 mb-6"></div>
            <p className="text-lg text-gray-700 mb-6">
              Didirikan pada tahun 1995 oleh Chef Wijaya, restoran kami
              menghadirkan cita rasa Indonesia yang autentik melalui hidangan
              andalan kami - Nasi Goreng. Berawal dari warung kaki lima kecil,
              kini telah berkembang menjadi tempat kuliner favorit banyak orang.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Kami bangga dengan resep tradisional kami yang diturunkan dari
              generasi ke generasi, dipadukan dengan teknik memasak modern untuk
              menciptakan perpaduan rasa yang sempurna. Setiap piring Nasi
              Goreng kami punya cerita tentang kekayaan warisan budaya
              Indonesia.
            </p>
            <Link to="/about">
              <Button variant="outline" size="lg">
                Kenali Kami Lebih Dekat
              </Button>
            </Link>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-500">
              <OptimizedImage
                src="https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt="Chef menyiapkan Nasi Goreng"
                className="w-full"
                objectFit="cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden md:block">
              <div className="bg-yellow-500 text-gray-900 font-bold py-3 px-6 rounded-lg shadow-lg transform rotate-3">
                Sejak 1995
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
