export interface RestaurantType {
  name: string;
  slogan: string;
  address: string;
  phone: string;
  email: string;
  openingHours: {
    weekdays: {
      days: string;
      hours: string;
      englishDays: string;
      englishHours: string;
    };
    weekend: {
      days: string;
      hours: string;
      englishDays: string;
      englishHours: string;
    };
  };
  established: number;
  mapEmbed: string;
  mapTitle: string;
  socialMedia: {
    instagram: string;
    facebook: string;
    twitter: string;
  };
  delivery: {
    gofood: string;
    shopeefood: string;
  };
}
