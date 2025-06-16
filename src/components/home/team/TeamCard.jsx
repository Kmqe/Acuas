import Button from "../../common/Button";

// ICONS
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";

// BRANDS ICONS
import {
  faFacebookF,
  faXTwitter,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const TeamCard = ({ img, name, job }) => {
  return (
    <div className="card">
      <div className="inner-card">
        <div className="img">
          <img src={img} alt="" />
          <div className="icon-share">
            <Button
              text={faShareNodes}
              isIcon={true}
              styleBtn="dark"
              width={"40px"}
              height={"40px"}
            />
          </div>
          <div className="bg-cover"></div>
        </div>
        <div className="text">
          <h2>{name}</h2>
          <p>{job}</p>
        </div>
      </div>

      <div className="social-icons">
        <div className="icon">
          <Button
            text={faFacebookF}
            isIcon={true}
            styleBtn="dark"
            width={"40px"}
            height={"40px"}
          />
        </div>

        <div className="icon">
          <Button
            text={faXTwitter}
            isIcon={true}
            styleBtn="dark"
            width={"40px"}
            height={"40px"}
          />
        </div>

        <div className="icon">
          <Button
            text={faLinkedinIn}
            isIcon={true}
            styleBtn="dark"
            width={"40px"}
            height={"40px"}
          />
        </div>

        <div className="icon">
          <Button
            text={faInstagram}
            isIcon={true}
            styleBtn="dark"
            width={"40px"}
            height={"40px"}
          />
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
