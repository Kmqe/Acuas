import "./feature.css";
import Heading from "../../common/heading/Heading";
import FeatureCard from "./FeatureCard";
import { featureItems } from "../../data/Data";

const Feature = () => {
  return (
    <>
      <section className="section feature">
        <div className="container">
          <Heading
            title="ميزتنا"
            description="اسم موثوق في صناعة المياه المعبأة"
          />

          {/* Container For Cards */}
          <div className="feature-cards">
            {featureItems.map((value) => {
              return (
                <FeatureCard
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

export default Feature;
