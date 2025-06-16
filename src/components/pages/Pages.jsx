import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../home/Home";
import Header from "../common/header/Header";

import PageAbout from "./PageAbout";
import Footer from "../common/footer/Footer";
import Service from "../home/service/Service";
import PageService from "./PageService";
import PageBlog from "./PageBlog";
import PageContact from "./PageContact";

import { ActivePageContext } from "../context/ActivePageContext";
import ScrollUp from "../common/ScrollUp/ScrollUp";

if (!localStorage.getItem("active-page")) {
  localStorage.setItem("active-page", "home");
}

const Pages = () => {
  const active = localStorage.getItem("active-page");

  const [activePage, setActivePage] = useState(active);

  function changeActivePage(value) {
    setActivePage(value);
    localStorage.setItem("active-page", value);
  }

  return (
    <BrowserRouter>
      <ActivePageContext.Provider
        value={{ activePage, setActivePage, changeActivePage }}
      >
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<PageAbout />} />
          <Route path="/service" element={<PageService />} />
          <Route path="/blog" element={<PageBlog />} />
          <Route path="/contact" element={<PageContact />} />
        </Routes>
        <ScrollUp />
        <Footer />
      </ActivePageContext.Provider>
    </BrowserRouter>
  );
};

export default Pages;
