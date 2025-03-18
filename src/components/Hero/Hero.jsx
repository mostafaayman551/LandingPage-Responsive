import React from "react";
import HeroSvg from "../../assets/Hero.svg";
const Hero = () => {
  return (
    <section className="pt-[200px] bg-white dark:bg-darkBg text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-sm md:max-w-3xl lg:max-w-[85vw] flex items-center justify-center flex-col">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
          The Simpler, Safer & Digital Service Provider
        </h1>
        <p className="mt-8 text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300">
          We have created the most efficient landing page. Strong management and
          security for powerful features.
        </p>
        <div className="flex gap-4 mt-8">
          <button className="bg-green-200 text-green-500 px-5 py-3 rounded hover:bg-green-500 hover:text-white font-medium transition-all duration-300">
            Get Started
          </button>
          <button className="bg-red-200 text-red-500 px-5 py-3 rounded  hover:bg-red-500 hover:text-white font-medium transition-all duration-300">
            Learn More
          </button>
        </div>
        <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-3xl">
          <img
            src={HeroSvg}
            alt="Hero image"
            loading="lazy"
            className="w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
