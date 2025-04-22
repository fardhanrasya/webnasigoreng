import React from "react";
import Container from "../components/UI/Container";
import SectionTitle from "../components/UI/SectionTitle";
import Team from "../components/About/Team";
import Hero from "../components/About/Hero";

const About: React.FC = () => {
  return (
    <div className="pb-16">
      <Hero />

      <Container className="mt-16">
        {/* Our Story */}
        <div className="mb-16">
          <SectionTitle title="From Humble Beginnings" centered />

          <div className="max-w-3xl mx-auto text-lg text-gray-700 space-y-6">
            <p>
              Our journey began in 1995 when Chef Wijaya, inspired by his
              grandmother's recipes, opened a small food stall in Jakarta. His
              signature Nasi Goreng quickly gained popularity, drawing crowds
              from across the city.
            </p>
            <p>
              As word spread about the exceptional flavors and quality of our
              food, we expanded to our first restaurant in 1998. Since then,
              we've grown while maintaining our commitment to authentic
              Indonesian cuisine and the traditional cooking methods that make
              our dishes special.
            </p>
            <p>
              Today, NasiGoreng Restaurant stands as a culinary landmark,
              beloved by locals and tourists alike. We take pride in preserving
              our cultural heritage through food while innovating to create new
              and exciting flavors that honor the rich culinary traditions of
              Indonesia.
            </p>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-16">
          <SectionTitle title="Our Values" centered />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quality</h3>
              <p className="text-gray-700">
                We use only the freshest ingredients and authentic spices to
                create dishes that honor Indonesian culinary traditions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Community
              </h3>
              <p className="text-gray-700">
                We believe in creating a warm, welcoming space where people can
                connect and share memorable experiences through food.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Sustainability
              </h3>
              <p className="text-gray-700">
                We're committed to sustainable practices, sourcing locally when
                possible, and minimizing our environmental impact.
              </p>
            </div>
          </div>
        </div>
      </Container>

      {/* Team Section */}
      <Team />
    </div>
  );
};

export default About;
