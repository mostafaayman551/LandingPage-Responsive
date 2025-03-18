import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Programs from "./components/Programs/Programs";
import Testimonials from "./components/Testimonials/Testimonials";
import Banner from "./components/Banner/Banner";
import Team from "./components/Team/Team";
import Subscribe from "./components/Subscribe/Subscribe";
import Footer from "./components/Footer/Footer";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <Hero />
      <Services />
      <Programs />
      <Banner />
      <Testimonials />
      <Team />
      <Subscribe />
      <Footer />
    </>
  );
};

export default App;
