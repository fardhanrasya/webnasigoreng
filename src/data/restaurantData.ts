import { RestaurantType } from "../types/restaurant";

export const restaurantData: RestaurantType = {
  name: "Nasi Goreng",
  slogan: "Asli Indonesia",
  address: "Jl. Rempah No. 123, Kawasan Kuliner, Jakarta, Indonesia",
  phone: "+62 8810 1115 4821",
  email: "fardhanrasya@gmail.com",
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
    instagram: "https://instagram.com/fardhanrasya",
    facebook: "https://facebook.com/fardhanrasya",
    twitter: "https://twitter.com/fardhanrasya",
  },
  delivery: {
    gofood: "https://gofood.co.id/restaurant-link",
    shopeefood: "https://shopeefood.co.id/restaurant-link",
  },
};
