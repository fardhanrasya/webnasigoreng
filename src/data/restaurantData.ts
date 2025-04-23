import { RestaurantType } from "../types/restaurant";

export const restaurantData: RestaurantType = {
  name: "Nasi Goreng",
  slogan: "Asli Indonesia",
  address: "Jl. Rempah No. 123, Kawasan Kuliner, Jakarta, Indonesia",
  phone: "+62 123 456 7890",
  email: "info@nasigoreng.com",
  openingHours: {
    weekdays: {
      days: "Senin - Jumat",
      hours: "11:00 - 22:00",
      englishDays: "Monday - Friday",
      englishHours: "11:00 AM - 10:00 PM",
    },
    weekend: {
      days: "Sabtu - Minggu",
      hours: "10:00 - 23:00",
      englishDays: "Saturday - Sunday",
      englishHours: "10:00 AM - 11:00 PM",
    },
  },
  established: 1995,
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.95410942707!2d2.2646623770588458!3d48.85895397374976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sen!2sus!4v1699364202365!5m2!1sen!2sus",
  mapTitle: "Lokasi Restoran Nasi Goreng",
  socialMedia: {
    instagram: "https://instagram.com/nasigoreng",
    facebook: "https://facebook.com/nasigoreng",
    twitter: "https://twitter.com/nasigoreng",
  },
  delivery: {
    gofood: "https://gofood.co.id/restaurant-link",
    shopeefood: "https://shopeefood.co.id/restaurant-link",
  },
};
