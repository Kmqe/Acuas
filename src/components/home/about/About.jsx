import "./about.css";
import image from "../../images/about.jpg";
import Heading from "../../common/heading/Heading";
import Button from "../../common/Button";

// ICONS
import { faDroplet, faFaucet } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <>
      <section className="section about">
        <div className="container">
          <div className="img-content">
            <h2>20 عاما من الخبرة</h2>
            <div className="img-fream">
              <img src={image} alt="man dring water" />
            </div>
          </div>
          <div className="about-data">
            <Heading
              title="من نحن"
              description="نحن نقدم مياه ذات جودة عالية"
            />
            <p>
              نحرص على استخدام أحدث تقنيات التنقية لضمان مياه نقية وآمنة، مع
              الالتزام بأعلى معايير الجودة والصحة.
            </p>
            <div>
              <div className="card">
                <div className="icon">
                  <Button
                    text={faDroplet}
                    isIcon={true}
                    styleBtn="normal"
                    width={"80px"}
                    height={"80px"}
                  />
                </div>
                <div className="text">
                  <h2>عميل راضٍ</h2>
                  <p>
                    عميلنا سعيد بخدمتنا! نحرص دائمًا على تقديم أفضل جودة لضمان
                    رضاكم وثقتكم بنا.
                  </p>
                </div>
              </div>

              <div className="card">
                <div className="icon">
                  <Button
                    text={faFaucet}
                    isIcon={true}
                    styleBtn="normal"
                    width={"80px"}
                    height={"80px"}
                  />
                </div>
                <div className="text">
                  <h2>المنتج القياسي</h2>
                  <p>
                    منتجنا يلتزم بالمواصفات والمعايير المعتمدة، مما يضمن جودته
                    وموثوقيته للمستهلك
                  </p>
                </div>
              </div>

              <Button text="قراءة المزيد" isIcon={false} styleBtn="dark" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
