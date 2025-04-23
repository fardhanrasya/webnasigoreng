import type { Metadata } from "next";
import AboutContent from "@/components/About/AboutContent";
import { aboutPageData } from "@/data/aboutPageData";

export const metadata: Metadata = aboutPageData.metadata;

export default function About() {
  return <AboutContent />;
}
