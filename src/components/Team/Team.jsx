import React from "react";
import TeamAvatar1 from "../../assets/team.svg";
import TeamAvatar2 from "../../assets/team.svg";
import TeamAvatar3 from "../../assets/team.svg";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";

const teamCards = [
  {
    id: 1,
    title: "Co-Founder",
    name: "Horothy Hulese",
    image: TeamAvatar1,
  },
  {
    id: 2,
    title: "Designer",
    name: "Buckle Giarza",
    image: TeamAvatar2,
  },
  {
    id: 3,
    title: "Developer",
    name: "Lenthi Miloler",
    image: TeamAvatar3,
  },
];
const Team = () => {
  return (
    <section className="bg-white dark:bg-darkBg text-center pt-20 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-sm md:max-w-3xl xl:max-w-[85vw]">
        {/* Team Header  */}
        <div className="mb-10">
          <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-primary  ring-1 ring-primary ring-inset mb-5">
            Team
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-primary">
            Nothing works better than our team members
          </h1>
        </div>
      </div>
      {/* Team Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
        {teamCards.map((card) => (
          <div
            className="mx-auto bg-darkBg dark:bg-white shadow-md shadow-gray-500 relative group transition-all duration-300 hover:rounded-xl overflow-hidden"
            key={card.id}
          >
            <div className="w-[400px] aspect-video">
              <img
                src={card.image}
                alt="team member"
                loading="lazy"
                className="w-full overflow-hidden object-cover"
              />
            </div>
            <p className="text-base font-normal text-white dark:text-gray-600">
              {card.title}
            </p>
            <h3 className="text-lg font-bold text-primary">{card.name}</h3>
            {/* Icons */}
            <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 group-hover:flex gap-4 hidden transition-all duration-300">
              <FaFacebookF
                size={40}
                className="border border-white rounded-full p-2 cursor-pointer hover:bg-primary hover:text-white"
              />
              <BsTwitter
                size={40}
                className="border border-white rounded-full p-2 cursor-pointer hover:bg-primary hover:text-white"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
