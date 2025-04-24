import React from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";
import { restaurantData } from "@/data/restaurantData";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold">
                Nasi<span className="text-yellow-500">Goreng</span>
              </span>
            </Link>
            <p className="text-gray-400 max-w-xs">
              Nasi goreng Indonesia yang autentik disajikan dengan penuh
              semangat sejak {restaurantData.established}. Rasakan cita rasa
              tradisional dengan sentuhan modern yang bikin nagih!
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href={restaurantData.socialMedia.instagram}
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href={restaurantData.socialMedia.facebook}
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href={restaurantData.socialMedia.twitter}
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Menu Pintasan</h3>
            <div className="flex flex-col space-y-2">
              <Link
                href="/"
                className="text-gray-400 hover:text-yellow-500 transition-colors duration-200"
              >
                Beranda
              </Link>
              <Link
                href="/menu"
                className="text-gray-400 hover:text-yellow-500 transition-colors duration-200"
              >
                Menu
              </Link>
              <Link
                href="/about"
                className="text-gray-400 hover:text-yellow-500 transition-colors duration-200"
              >
                Tentang Kami
              </Link>
              <Link
                href="/contact"
                className="text-gray-400 hover:text-yellow-500 transition-colors duration-200"
              >
                Kontak
              </Link>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Hubungi Kami</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin
                  size={20}
                  className="text-yellow-500 flex-shrink-0 mt-1"
                />
                <p className="text-gray-400">{restaurantData.address}</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-yellow-500" />
                <p className="text-gray-400">{restaurantData.phone}</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-yellow-500" />
                <p className="text-gray-400">{restaurantData.email}</p>
              </div>
              <div className="flex items-start space-x-3">
                <Clock
                  size={20}
                  className="text-yellow-500 flex-shrink-0 mt-1"
                />
                <div className="text-gray-400">
                  <p>
                    {restaurantData.openingHours.weekdays.days}:{" "}
                    {restaurantData.openingHours.weekdays.hours}
                  </p>
                  <p>
                    {restaurantData.openingHours.weekend.days}:{" "}
                    {restaurantData.openingHours.weekend.hours}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500">
          <p>
            &copy; {currentYear} Restoran {restaurantData.name}. Hak cipta
            dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
