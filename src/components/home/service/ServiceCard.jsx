import "./service.css";
import Button from "../../common/Button";

const ServiceCard = ({ text, title, description }) => {
  return (
    <>
      <div className="card">
        <div className="icon-content">
          <Button
            text={text}
            isIcon={true}
            styleBtn="normal"
            width={"80px"}
            height={"80px"}
          />
        </div>
        <div className="text">
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
