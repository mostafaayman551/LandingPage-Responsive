import React, { useState } from "react";
import Testimonial from "./Testimonial";
import AvatarMale from "../../assets/testimonial-avatar-male.png";
import AvatarFemale from "../../assets/testimonial-avatar-female.png";
import Slider from "react-slick";

const testimonials = [
  {
    id: 1,
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, deserunt. lorem ipsum dolor sit amet consectetur adipisicing elit.",
    name: "David Smith",
    title: "Frontend Developer",
    avatar: AvatarMale,
  },
  {
    id: 2,
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, deserunt. lorem ipsum dolor sit amet consectetur adipisicing elit.",
    name: "Noah Kirk",
    title: "Backend Developer",
    avatar: AvatarMale,
  },
  {
    id: 3,
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, deserunt. lorem ipsum dolor sit amet consectetur adipisicing elit.",
    name: "Holly Faucett",
    title: "Software Engineer",
    avatar: AvatarFemale,
  },
  {
    id: 4,
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, deserunt. lorem ipsum dolor sit amet consectetur adipisicing elit.",
    name: "Luca Davies",
    title: "Database Designer",
    avatar: AvatarMale,
  },
  {
    id: 5,
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, deserunt. lorem ipsum dolor sit amet consectetur adipisicing elit.",
    name: "Sean Quick",
    title: "Data Analyst",
    avatar: AvatarMale,
  },
  {
    id: 6,
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, deserunt. lorem ipsum dolor sit amet consectetur adipisicing elit.",
    name: "Jasmine Parker",
    title: "Cloud Architect",
    avatar: AvatarFemale,
  },
  {
    id: 7,
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, deserunt. lorem ipsum dolor sit amet consectetur adipisicing elit.",
    name: "Sally Taylor",
    title: "System Administrator",
    avatar: AvatarFemale,
  },
];
const Testimonials = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const settings = {
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "0px",
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 800,
    arrows: false,
    dots: false,
    beforeChange: (oldIndex, newIndex) => setActiveSlide(newIndex),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section className="bg-white dark:bg-darkBg pt-20 text-center mx-auto w-full">
      {/* Projects Header */}
      <div className="mb-10">
        <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-primary  ring-1 ring-primary ring-inset mb-5">
          Testimonials
        </span>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-primary">
          This is what our esteemed clients have to say for us
        </h1>
      </div>
      {/* Testimonials Boxes*/}
      <Slider {...settings} className="w-full max-w-[85vw] mx-auto">
        {testimonials.map((testimonial, index) => (
          <Testimonial
            key={testimonial.id}
            quote={testimonial.quote}
            name={testimonial.name}
            title={testimonial.title}
            avatar={testimonial.avatar}
            isActive={index === activeSlide}
          />
        ))}
      </Slider>
    </section>
  );
};

export default Testimonials;
