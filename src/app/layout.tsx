import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import FloatingLogos from "@/components/FloatingLogos";
import siteConfig from "./env";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    template: "%s | Restoran Nasi Goreng",
    default: "Restoran Nasi Goreng",
  },
  description:
    "Restoran Nasi Goreng terbaik di Indonesia dengan cita rasa autentik dan bahan berkualitas.",
  keywords:
    "restoran nasi goreng, nasi goreng indonesia, nasi goreng enak, restoran terbaik, kuliner indonesia",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  metadataBase: new URL(siteConfig.baseUrl),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body
        className={`${inter.variable} font-sans flex flex-col min-h-screen`}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingLogos
          whatsappNumber="6281234567890"
          gofoodLink="https://gofood.co.id/restaurant-link"
          shopeefoodLink="https://shopeefood.co.id/restaurant-link"
        />
      </body>
    </html>
  );
}
