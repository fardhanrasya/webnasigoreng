import React from "react";
import SectionTitle from "../UI/SectionTitle";
import OptimizedImage from "../UI/OptimizedImage";

interface TeamMember {
  id: number;
  name: string;
  position: string;
  bio: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Chef Wijaya",
    position: "Founder & Head Chef",
    bio: "With over 30 years of culinary experience, Chef Wijaya brings authentic Indonesian flavors to every dish he creates.",
    image:
      "https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    name: "Siti Rahayu",
    position: "Executive Chef",
    bio: "Trained in both traditional and modern cooking techniques, Siti specializes in creating innovative twists on classic Indonesian dishes.",
    image:
      "https://images.pexels.com/photos/3771120/pexels-photo-3771120.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    name: "Budi Santoso",
    position: "Restaurant Manager",
    bio: "Budi ensures that every guest enjoys an exceptional dining experience from the moment they walk through our doors.",
    image:
      "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 4,
    name: "Putri Anggraini",
    position: "Pastry Chef",
    bio: "Putri combines Indonesian and European techniques to create unique desserts that perfectly complement our savory dishes.",
    image:
      "https://images.pexels.com/photos/3771118/pexels-photo-3771118.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const Team: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Meet Our Team"
          subtitle="The talented individuals behind our delicious creations"
          centered
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="h-64 overflow-hidden">
                <OptimizedImage
                  src={member.image}
                  alt={member.name}
                  height={256}
                  className="transition-transform duration-500 hover:scale-105"
                  objectFit="cover"
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
