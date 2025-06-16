import "./heading.css";

const Heading = ({ title, description }) => {
  return (
    <>
      <div className="heading">
        <h3 className="title">{title}</h3>
        <h1 className="description">{description}</h1>
      </div>
    </>
  );
};

export default Heading;
