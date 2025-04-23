import React from "react";
import SectionTitle from "../UI/SectionTitle";
import OptimizedImage from "../UI/OptimizedImage";
import { aboutPageData } from "../../data/aboutPageData";

const Team: React.FC = () => {
  const { title, subtitle, members } = aboutPageData.team;

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle title={title} subtitle={subtitle} centered />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="h-64 overflow-hidden flex items-center justify-center">
                <OptimizedImage
                  src={member.image}
                  alt={member.name}
                  width={240}
                  height={240}
                  className="transition-transform duration-500 hover:scale-105"
                  objectFit="contain"
                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-orange-600 font-medium mb-3">
                  {member.position}
                </p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
