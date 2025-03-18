import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import subscribeBg from "../../assets/subscribe-left.png";
import subscribeObject from "../../assets/subscribe-right.png";
import { toast } from "react-toastify";
const Subscribe = () => {
  const [email, setEmail] = useState("");

  const isValidEmail = (email) => {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailRegex.test(email);
  };
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (email === "") return toast.error("Please enter your email!");
    if (!isValidEmail(email)) return toast.error("Please enter a valid email!");
    console.log({ email });
    toast.success("Subscribed Successfully!");
    setEmail("");
  };
  return (
    <section className="pt-20 pb-20 bg-primary relative text-center overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none">
        <img src={subscribeBg} alt="subscribe left bg" className="opacity-20" />
      </div>
      <div className="container mx-auto relative z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Subscribe Header  */}
          <div className="mb-10 z-20">
            <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-primary  ring-1 ring-primary ring-inset mb-5">
              Subscribe
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white">
              Subscribe to our newsletter, stay updated with us
            </h1>
          </div>
          {/* Subscribe Form */}
          <div className="w-full">
            <form
              className="flex items-center justify-center relative mb-4 "
              onSubmit={formSubmitHandler}
            >
              <input
                type="email"
                className="w-1/2 p-4 rounded-2xl outline-none"
                placeholder="Subscribe With Us"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" className="absolute right-1/4 p-4">
                <FaPaperPlane size={30} className="text-primary" />
              </button>
            </form>
            <p className="text-lg text-secondary font-semibold">
              Enter your e-mail to get the latest news.
            </p>
          </div>
        </div>
      </div>
      {/* Subscribe Object */}
      <div className="absolute bottom-0 right-0 z-10 pointer-events-none">
        <img src={subscribeObject} alt="subscribe object right" />
      </div>
    </section>
  );
};

export default Subscribe;
