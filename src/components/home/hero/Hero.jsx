import "./hero.css";
import Button from "../../common/Button";

const Hero = () => {
  return (
    <>
      <section className="section hero">
        <h5>أهمية الحياة</h5>
        <h1>دائمًا نريد ماءً آمنًا لحياة صحية</h1>
        <p>
          الماء سر الحياة، فلا حياة بدونه. يروي الأرض، وينعش الأجساد، ويدخل في
          كل تفاصيل حياتنا. فلنحافظ عليه، فهو نعمة لا تُقدر بثمن.
        </p>

        <div className="buttons">
          <Button text="تقدير مجاني" isIcon={false} styleBtn="dark" />
          <Button text="اطلب الآن" isIcon={false} />
        </div>
      </section>
    </>
  );
};

export default Hero;
