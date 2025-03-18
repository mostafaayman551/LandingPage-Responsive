import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonial = ({ quote, name, title, avatar, isActive }) => {
  return (
    <article
      className={`p-4 mt-4 mb-4 rounded-lg transition-all duration-300 ${
        isActive
          ? "bg-primary md:scale-[1.2] scale-100 shadow-lg"
          : "bg-gray-700"
      }`}
    >
      <FaQuoteLeft size={30} className="text-white mb-4" />
      <p className="text-base font-normal text-white text-left mb-4">{quote}</p>
      <div className="flex align-center gap-4">
        <img src={avatar} alt="avatar" className="w-8 h-auto object-cover" />
        <div className="text-left">
          <h4 className="text-lg font-bold text-white">{name}</h4>
          <small className="text-white">{title}</small>
        </div>
      </div>
    </article>
  );
};

export default Testimonial;
