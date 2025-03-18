import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectImage1 from "../../assets/proj-1.jpg";
import ProjectImage2 from "../../assets/proj-2.jpg";
import ProjectImage3 from "../../assets/proj-3.jpg";
import ProjectImage4 from "../../assets/proj-4.jpg";
import ProjectImage5 from "../../assets/proj-1.jpg";
import ProjectImage6 from "../../assets/proj-2.jpg";

const projects = [
  {
    id: 1,
    title: "Web Development",
    client: "Client A",
    image: ProjectImage1,
  },
  {
    id: 2,
    title: "Frontend Development",
    client: "Client B",
    image: ProjectImage2,
  },
  {
    id: 3,
    title: "Backend Development",
    client: "Client C",
    image: ProjectImage3,
  },
  {
    id: 4,
    title: "Software Development",
    client: "Client D",
    image: ProjectImage4,
  },
  {
    id: 5,
    title: "Database Administration",
    client: "Client E",
    image: ProjectImage5,
  },
  {
    id: 6,
    title: "Cloud Hosting",
    client: "Client F",
    image: ProjectImage6,
  },
];
const Programs = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 576,
        settings: { slidesToShow: 1 },
      },
    ],
  };
  return (
    <section className="bg-white dark:bg-darkBg text-center pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-sm md:max-w-3xl xl:max-w-[85vw]">
        {/* Projects Header */}
        <div className="mb-10">
          <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-primary  ring-1 ring-primary ring-inset mb-5">
            Case Study
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-primary">
            Create just what you need for your perfect website
          </h1>
        </div>
        {/* Slider */}
        <Slider {...settings}>
          {projects.map((project) => (
            <div key={project.id} className="px-4">
              <div className="bg-darkBg dark:bg-gray-100 rounded-lg hover-shadow-lg hover:-translate-y-1 transition-all duration-300">
                <img
                  src={project.image}
                  alt="project image"
                  loading="lazy"
                  className="w-full object-cover rounded-t-lg"
                />
                <h2 className="text-lg font-bold text-left mt-2 mx-3 text-primary">
                  {project.title}
                </h2>
                <p className="text-left my-1 mx-3 text-darkText dark:text-black">
                  <span className="font-semibold">Name: </span> {project.client}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Programs;
