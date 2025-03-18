import React from "react";
import ServiceImage1 from "../../assets/service_1.svg";
import ServiceImage2 from "../../assets/service_2.svg";
import ServiceImage3 from "../../assets/service_3.svg";
import { FaArrowRight } from "react-icons/fa";
const servicesCards = [
  {
    id: 1,
    title: "Quick Response",
    description:
      "We provide quick and detailed answers for your awesome and impressive business.",
    image: ServiceImage1,
  },
  {
    id: 2,
    title: "Perfect startups",
    description:
      "We provide quick and detailed answers for your awesome and impressive business.",
    image: ServiceImage2,
  },
  {
    id: 3,
    title: "Digital Analytics",
    description:
      "We provide quick and detailed answers for your awesome and impressive business.",
    image: ServiceImage3,
  },
];
const Services = () => {
  return (
    <section className="bg-white dark:bg-darkBg text-center pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-sm md:max-w-3xl xl:max-w-[85vw]">
        {/* Services Header  */}
        <div className="mb-10">
          <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-primary  ring-1 ring-primary ring-inset mb-5">
            Services We Deliver
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-primary">
            A complete solution for preparing for your success
          </h1>
        </div>
        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {servicesCards.map((card) => (
            <div
              key={card.id}
              className="p-6 flex flex-col justify-center shadow-sm shadow-gray-200 hover:shadow-lg hover:shadow-gray-700 hover:-translate-y-2 transition-all duration-300 border border-gray-200"
            >
              <img
                src={card.image}
                alt="card image"
                loading="lazy"
                className="w-full aspect-video object-cover rounded-lg mb-4"
              />
              <h1 className="text-xl font-semibold text-primary mb-4">
                {card.title}
              </h1>
              <p className="text-md text-gray-600 dark:text-darkText mb-4">
                {card.description}
              </p>
              <a
                href="#"
                className="text-md inline-flex justify-center items-center gap-2 text-gray-600 dark:text-darkText hover:text-primaryLight dark:hover:text-secondary group"
              >
                Read More
                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
