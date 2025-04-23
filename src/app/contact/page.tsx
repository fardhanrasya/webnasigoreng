import type { Metadata } from "next";
import ContactContent from "@/components/Contact/ContactContent";
import { contactPageData } from "@/data/contactPageData";

export const metadata: Metadata = contactPageData.metadata;

export default function Contact() {
  return <ContactContent />;
}
