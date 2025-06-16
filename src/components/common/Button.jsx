import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./button.css";

const Button = ({ text, isIcon, styleBtn = "light", width, height }) => {
  if (isIcon === false) {
    return (
      <>
        <button className={`button ${styleBtn}`}>{text}</button>
      </>
    );
  } else {
    return (
      <>
        <button
          className={`center ${styleBtn}`}
          style={{ width: width, height: height }}
        >
          <FontAwesomeIcon icon={text} className="icon" />
        </button>
      </>
    );
  }
};

export default Button;
