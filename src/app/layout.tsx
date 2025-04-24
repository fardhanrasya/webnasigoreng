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
    default: "Restoran Nasi Goreng - Cita Rasa Autentik Indonesia",
  },
  description:
    "Restoran Nasi Goreng terbaik di Indonesia dengan cita rasa autentik dan bahan berkualitas.",
  keywords:
    "restoran nasi goreng, nasi goreng indonesia, nasi goreng enak, restoran terbaik, kuliner indonesia",
  metadataBase: new URL(siteConfig.baseUrl),
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Restoran Nasi Goreng - Cita Rasa Autentik Indonesia",
    description:
      "Restoran Nasi Goreng terbaik di Indonesia dengan cita rasa autentik dan bahan berkualitas.",
    url: siteConfig.baseUrl,
    siteName: "Restoran Nasi Goreng",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Restoran Nasi Goreng Preview",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    google: "udD4ILG5qfrAmwV2hFdGLnVcV-ghA4m2RSLa0ij4ydA", // Ganti dengan kode verifikasi Google Search Console Anda
  },
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
