import "./blog.css";
import Heading from "../../common/heading/Heading";
import BlogCard from "./BlogCard";

import img1 from "../../images/blog-1.jpg";
import img2 from "../../images/blog-2.jpg";
import img3 from "../../images/blog-3.jpg";

const Blog = () => {
  return (
    <>
      <section className="section blog">
        <Heading title="مدونتنا" description="أحدث المدونات و الأخبار" />
        <div className="container">
          <BlogCard
            img={img1}
            title="مزمية تبريد الماء: انتعاش يدوم طويلاً!"
            description="حافظ على مشروبك باردًا لساعات مع زمزمية تبريد الماء المصممة لعشاق الانتعاش!"
          />

          <BlogCard
            img={img2}
            title="طريقة سهلة وسريعة لتحضير عصير التفاح المنعش"
            description="تعلم كيفية إعداد عصير التفاح الطبيعي بمكونات بسيطة وطعم لذيذ في دقائق!"
          />

          <BlogCard
            img={img3}
            title="شركة مياه يابانية تكشف عن تقنية تنقية ثورية"
            description="أعلنت شركة مياه يابانية عن تقنية جديدة تضمن تنقية المياه بكفاءة أعلى، مما يعزز الاستدامة ويحسن جودة المياه."
          />
        </div>
      </section>
    </>
  );
};

export default Blog;
