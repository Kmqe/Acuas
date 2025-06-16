import "./header.css";
import { nav } from "../../data/Data";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "../Button";

// Import the FontAwesomeIcon component to use icons in a React application
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//  ICONS
import {
  faBars,
  faHandHoldingDroplet,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

// Context
import { useContext } from "react";
import { ActivePageContext } from "../../context/ActivePageContext";

const Header = () => {
  const { activePage, setActivePage, changeActivePage } =
    useContext(ActivePageContext);

  // You can display the navbar on screens smaller than 992px when the navbar-toggler button is clicked.
  const [showNav, setShowNav] = useState(false);
  // Create a state to store the current window width
  const [width, setWidth] = useState(window.innerWidth);
  // Create a state to store the current scroll position (Y-axis)
  const [positionScroll, setPositionScroll] = useState(window.scrollY);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setPositionScroll(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleNavToggler() {
    // Toggle the showNav state between true and false
    setShowNav(!showNav);
  }

  return (
    <>
      {/* Add 'fixed' class to header if scrollY > 100 and width > 992px */}
      <header className={positionScroll > 100 && width > 992 ? "fixed" : ""}>
        <div className="navbar">
          <Link
            className="logo"
            to={"/home"}
            onClick={() => changeActivePage("home")}
          >
            <strong>Acuas</strong>
            <FontAwesomeIcon
              icon={faHandHoldingDroplet}
              style={{ fontSize: "40px" }}
            />
          </Link>

          {/* Show mobile navbar if showNav is true */}
          <div className={`navbar-list ${showNav ? `show-navbar` : ""}`}>
            <ul>
              {nav.map((value) => (
                <Link
                  key={value.id}
                  to={value.to}
                  onClick={() => changeActivePage(value.en)}
                >
                  <li className={value.en === activePage ? "active" : ""}>
                    {value.name}
                  </li>
                </Link>
              ))}
            </ul>

            <div className="free-shipping">
              <p>احصل على توصيل مجاني</p>
              <p className="phone-number">
                مجانا:{" "}
                <span dir="ltr" style={{ display: "inline-block" }}>
                  +0123 456 7890
                </span>
              </p>
            </div>

            <div className="button-search">
              <Button
                text={faMagnifyingGlass}
                isIcon={true}
                width={"50px"}
                height={"50px"}
              />
            </div>

            <div className="order-now">
              <Button text={"اطلب الآن"} isIcon={false} styleBtn="light" />
            </div>
          </div>

          <div
            // Hide toggler icon on large screens == 992px or more
            style={{ display: width > 992 ? "none" : "flex" }}
            className={"navbar-toggler"}
            // When the toggler icon is clicked, run the handleNavToggler function
            onClick={() => handleNavToggler()}
          >
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
