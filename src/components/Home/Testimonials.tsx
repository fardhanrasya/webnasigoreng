import React from "react";
import SectionTitle from "../UI/SectionTitle";
import Container from "../UI/Container";
import OptimizedImage from "../UI/OptimizedImage";

interface Testimonial {
  id: number;
  name: string;
  title: string;
  quote: string;
  image: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Chen",
    title: "Food Blogger",
    quote:
      "Nasi Goreng terenak yang pernah aku makan di luar Indonesia. Rasanya autentik dan pelayanannya luar biasa!",
    image:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300",
    rating: 5,
  },
  {
    id: 2,
    name: "David Wilson",
    title: "Pelanggan Setia",
    quote:
      "Udah setahun aku selalu datang kesini seminggu sekali. Nasi Goreng Seafood mereka bikin ketagihan banget!",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300",
    rating: 5,
  },
  {
    id: 3,
    name: "Maria Rodriguez",
    title: "Pakar Kuliner",
    quote:
      "Perpaduan rasa dan tekstur di hidangan andalan mereka luar biasa. Wajib dikunjungi bagi penggemar masakan Indonesia.",
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300",
    rating: 4,
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <SectionTitle
          title="Kata Mereka Tentang Kami"
          subtitle="Jangan cuma percaya kata-kata kami - simak apa kata pelanggan yang sudah makan di sini"
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="h-16 w-16 rounded-full overflow-hidden">
                  <OptimizedImage
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={64}
                    height={64}
                    objectFit="cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`h-5 w-5 ${
                      i < testimonial.rating
                        ? "text-yellow-500"
                        : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote className="text-gray-700 italic flex-grow">
                "{testimonial.quote}"
              </blockquote>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
