import "./testimonials.css";
import Heading from "../../common/heading/Heading";
import SwiperComponent from "../../SwiperComponent";

const Testimonials = () => {
  return (
    <>
      <section className="section testimonials">
        <Heading title="شهادات العملاء" description="آراء عملائنا" />

        <div className="container">
          <SwiperComponent />
        </div>
      </section>
    </>
  );
};

export default Testimonials;
