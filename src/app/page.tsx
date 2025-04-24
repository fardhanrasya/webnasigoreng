import type { Metadata } from "next";
import Hero from "@/components/Home/Hero";
import FeaturedMenu from "@/components/Home/FeaturedMenu";
import About from "@/components/Home/About";
import Testimonials from "@/components/Home/Testimonials";
import { homePageData } from "@/data/homePageData";

export const metadata: Metadata = homePageData.metadata;

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedMenu />
      <About />
      <Testimonials />
    </>
  );
}
