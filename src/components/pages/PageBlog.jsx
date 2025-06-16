import React from "react";
import IntroPage from "../common/intro_page/IntroPage";
import Blog from "../home/blog/Blog";

const PageBlog = () => {
  return (
    <div>
      <IntroPage title={"اخبارنا ومدونتنا"} />
      <Blog />
    </div>
  );
};

export default PageBlog;
