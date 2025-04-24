import React from "react";
import Container from "../UI/Container";
import ContactForm from "./ContactForm";
import Hero from "./Hero";
import { contactPageData } from "../../data/contactPageData";

const ContactContent: React.FC = () => {
  const { contactInfo } = contactPageData;

  return (
    <div className="pb-16 bg-gray-50 min-h-screen">
      <Hero />
      <Container className="mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>

          {/* Map and Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative w-full h-0 pb-[75%]">
                <iframe
                  src={contactInfo.mapEmbed}
                  className="absolute top-0 left-0 w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={contactInfo.mapTitle}
                ></iframe>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {contactInfo.visitTitle}
              </h3>
              <div className="space-y-3 text-gray-700">
                <p className="flex items-start">
                  <svg
                    className="w-5 h-5 text-orange-600 mr-3 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                  {contactInfo.address}
                </p>
                <p className="flex items-center">
                  <svg
                    className="w-5 h-5 text-orange-600 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path>
                  </svg>
                  {contactInfo.phone}
                </p>
                <p className="flex items-center">
                  <svg
                    className="w-5 h-5 text-orange-600 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                  {contactInfo.email}
                </p>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-4">
                {contactInfo.hoursTitle}
              </h3>
              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between">
                  <span>{contactInfo.weekdayHours.days}:</span>
                  <span>{contactInfo.weekdayHours.hours}</span>
                </div>
                <div className="flex justify-between">
                  <span>{contactInfo.weekendHours.days}:</span>
                  <span>{contactInfo.weekendHours.hours}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactContent;
