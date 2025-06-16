import React from "react";
import Hero from "./hero/Hero";
import Feature from "./feature/Feature";
import About from "./about/About";
import Achievements from "./achievements/Achievements";
import Service from "./service/Service";
import Product from "./products/Product";
import Blog from "./blog/Blog";
import Team from "./team/Team";
import Testimonials from "./testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <Hero />
      <Feature />
      <About />
      <Achievements />
      <Service />
      <Product />
      <Blog />
      <Team />
      <Testimonials />
    </>
  );
};

export default Home;
