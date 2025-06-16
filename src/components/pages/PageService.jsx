import React from "react";
import IntroPage from "../common/intro_page/IntroPage";
import Service from "../home/service/Service";
import Achievements from "../home/achievements/Achievements";
import Testimonials from "../home/testimonials/Testimonials";

const PageService = () => {
  return (
    <>
      <IntroPage title={"خدماتنا"} />
      <Service />
      <Achievements />
      <Testimonials />
    </>
  );
};

export default PageService;
