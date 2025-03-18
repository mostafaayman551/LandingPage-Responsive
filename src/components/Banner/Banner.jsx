import React from "react";
import QuoteBg from "../../assets/quote-1.jpg";

const Banner = () => {
  return (
    <div className="w-full h-[600px] pt-20 relative bg-white dark:bg-darkBg -z-10">
      <img
        src={QuoteBg}
        alt="quote background"
        loading="lazy"
        className="w-full h-full aspect-video object-cover"
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/50 p-2 border-l-8 border-primary">
        <blockquote className="italic text-xl font-medium text-white text-left">
          "Creative web design plan for your business most useful resource.
          They're done by a team of people."
          <span className="block mt-2 text-right font-semibold">
            --Steve Jorela
          </span>
        </blockquote>
      </div>
    </div>
  );
};

export default Banner;
