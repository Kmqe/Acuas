import Button from "../../common/Button";

// Import FontAwesomeIcon component to use icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//  ICONS
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

const FeatureCard = ({ text, title, description }) => {
  return (
    <>
      <div className="card">
        <div className="icon-box">
          <Button
            text={text}
            isIcon={true}
            styleBtn="normal"
            width={"100px"}
            height={"100px"}
          />
        </div>
        <h4>{title}</h4>
        <p>{description}</p>

        <h6>
          قراءة المزيد
          <FontAwesomeIcon icon={faAngleLeft} className="angle-right" />
        </h6>
      </div>
    </>
  );
};

export default FeatureCard;
