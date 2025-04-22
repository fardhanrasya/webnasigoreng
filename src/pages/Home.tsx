import React from "react";
import SEO from "../components/SEO";
import Hero from "../components/Home/Hero";
import FeaturedMenu from "../components/Home/FeaturedMenu";
import About from "../components/Home/About";
import Testimonials from "../components/Home/Testimonials";

const Home: React.FC = () => {
  return (
    <>
      <SEO
        title="Beranda"
        description="Restoran Nasi Goreng terbaik di Indonesia dengan cita rasa autentik dan bahan berkualitas. Nikmati berbagai pilihan nasi goreng dan hidangan Indonesia lainnya."
        keywords="restoran nasi goreng, nasi goreng indonesia, nasi goreng enak, restoran terbaik, kuliner indonesia"
        ogType="website"
        ogImage="https://images.pexels.com/photos/5898313/pexels-photo-5898313.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      />
      <Hero />
      <FeaturedMenu />
      <About />
      <Testimonials />
    </>
  );
};

export default Home;
