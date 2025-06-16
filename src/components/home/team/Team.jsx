import "./team.css";
import Heading from "../../common/heading/Heading";
import TeamCard from "./TeamCard";
import { teamMembers } from "../../data/Data";

const Team = () => {
  return (
    <>
      <section className="section team">
        <Heading
          title="فريقنا"
          description="ما هو السيو حقًا وكيف يمكنني استخدامه؟"
        />
        <div className="container">
          {teamMembers.map((val) => {
            return (
              <TeamCard
                key={val.id}
                img={val.img}
                name={val.name}
                job={val.job}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Team;
