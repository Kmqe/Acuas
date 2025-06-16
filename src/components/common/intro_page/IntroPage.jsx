import React from "react";
import "./intro_page.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ActivePageContext } from "../../context/ActivePageContext";

const IntroPage = ({ title }) => {
  const { setActivePage } = useContext(ActivePageContext);

  return (
    <div className="intro_page">
      <h1>{title}</h1>
      <div className="path_page">
        <Link to={"/home"} onClick={() => setActivePage("home")}>
          <p>الصفحة الرئيسية</p>
        </Link>
        <p className="slash">/</p>
        <p>الصفحات</p>
        <p className="slash">/</p>
        <Link>
          <p className="active">{title}</p>
        </Link>
      </div>
    </div>
  );
};

export default IntroPage;
