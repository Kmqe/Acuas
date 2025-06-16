import Button from "../../common/Button";

const ProductCard = ({ img, quantity, title, price }) => {
  return (
    <>
      <div className="product-card">
        <div className="img">
          <img src={img} alt="" />
        </div>
        <div className="card-details">
          <div className="quantity">
            <p>{quantity}</p>
          </div>
          <div className="title">
            <h2>{title}</h2>
          </div>
          <div className="price">
            <h3>{price} ﷼</h3>
          </div>
          <Button styleBtn="dark" text="اقرا المزيد" isIcon={false} />
        </div>
      </div>
    </>
  );
};

export default ProductCard;
