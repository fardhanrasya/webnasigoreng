import { RestaurantType } from "../types/restaurant";
import siteConfig from "@/app/env";

export const restaurantData: RestaurantType = {
  name: "Nasi Goreng",
  slogan: "Asli Indonesia",
  address: siteConfig.contact.address,
  phone: siteConfig.contact.phone,
  email: siteConfig.contact.email,
  openingHours: {
    weekdays: {
      days: "Senin - Jumat",
      hours: "11:00 - 22:00",
    },
    weekend: {
      days: "Sabtu - Minggu",
      hours: "10:00 - 23:00",
    },
  },
  established: 2008,
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.95410942707!2d2.2646623770588458!3d48.85895397374976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sen!2sus!4v1699364202365!5m2!1sen!2sus",
  mapTitle: "Lokasi Restoran Nasi Goreng",
  socialMedia: {
    instagram: siteConfig.social.instagram,
    facebook: siteConfig.social.facebook,
    twitter: siteConfig.social.twitter,
  },
  delivery: {
    gofood: siteConfig.delivery.gofood,
    shopeefood: siteConfig.delivery.shopeefood,
  },
};
