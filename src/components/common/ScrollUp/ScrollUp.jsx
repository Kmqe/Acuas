import "./scroll_up.css";

// Import the FontAwesomeIcon component to use icons in a React application
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//  ICONS
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const ScrollUp = () => {
  const [showScrollUp, setShowScrollUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollUp(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a href="#" className={`scroll-up ${showScrollUp ? "show" : ""}`}>
      <FontAwesomeIcon icon={faArrowUp} />
    </a>
  );
};

export default ScrollUp;
