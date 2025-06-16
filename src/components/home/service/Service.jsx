import "./service.css";
import image from "../../images/water.png";

import Heading from "../../common/heading/Heading";

import { serviceItems } from "../../data/Data";
import { serviceItemsTwo } from "../../data/Data";
import ServiceCard from "./ServiceCard";

const Service = () => {
  return (
    <>
      <section className="section service">
        <Heading title="خدماتنا" description="احم عائلتك مع أفضل المياه" />
        <div className="container">
          <div className="col1">
            {serviceItems.map((value) => {
              return (
                <ServiceCard
                  key={value.id}
                  text={value.icon}
                  title={value.title}
                  description={value.description}
                />
              );
            })}
          </div>

          <div className="col2">
            <div className="img">
              <img src={image} alt="" />
            </div>
          </div>

          <div className="col3">
            {serviceItemsTwo.map((value) => {
              return (
                <ServiceCard
                  key={value.id}
                  text={value.icon}
                  title={value.title}
                  description={value.description}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
