import "./product.css";
import Heading from "../../common/heading/Heading";
import ProductCard from "./ProductCard";

// IMAGES
import img1 from "../../images/product-3.png";
import img2 from "../../images/product-2.png";
import img3 from "../../images/product-1.png";

const Product = () => {
  return (
    <>
      <section className="section product">
        <Heading
          title="منتجانتا"
          description="نحن نقدم أفضل جودة لحزم الزجاجات."
        />
        <div className="container">
          <ProductCard
            quantity="2 لتر - 1 علبة"
            img={img1}
            title=" مياه معدنية"
            price={"20"}
          />

          <ProductCard
            quantity="4 لتر - 2 علبتين"
            img={img2}
            title=" مياه التناضح العكسي"
            price={"55"}
          />

          <ProductCard
            quantity="6 لتر - 3 علب"
            img={img3}
            title=" مياه مقاومة للأشعة فوق البنفسجية"
            price={"85"}
          />
        </div>
      </section>
    </>
  );
};

export default Product;
