import React from "react";
import SectionTitle from "../UI/SectionTitle";
import Container from "../UI/Container";
import OptimizedImage from "../UI/OptimizedImage";
import { testimonialData } from "../../data/testimonialData";
import { homePageData } from "../../data/homePageData";

const Testimonials: React.FC = () => {
  const { testimonials } = homePageData;

  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <SectionTitle
          title={testimonials.title}
          subtitle={testimonials.subtitle}
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialData.map((testimonial) => (
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
                  <p className="text-sm text-gray-600">
                    {testimonial.occupation}
                  </p>
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
                "{testimonial.comment}"
              </blockquote>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
