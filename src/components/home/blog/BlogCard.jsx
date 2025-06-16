import Button from "../../common/Button";

// Import the FontAwesomeIcon component to use icons in a React application
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// ICONS
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";

const BlogCard = ({ img, title, description }) => {
  return (
    <>
      <div className="product-card">
        <div className="img">
          <img src={img} alt="" />
          <div className="cover"></div>
        </div>
        <div className="card-details">
          <div className="title">
            <h2 title={title}>{title}</h2>
          </div>
          <div className="description">
            <p title={description}>{description}</p>
          </div>
          <Button styleBtn="transparent" text="اقرا المزيد" isIcon={false} />
        </div>

        <div className="publish-date">
          <p>Jan 12 2025</p>
          <div className="icon-date">
            <FontAwesomeIcon icon={faCalendarDays} />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
