import React from "react";
import "./Product.css";
const Product = ({ id, title, image, price, rating }) => {
  return (
    <div className="product">
      <div className="prodcut__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="prodcut__rating">
          {Array(rating)
            .fill()
            .map(() => {
              return;
              <p>*</p>;
            })}
        </div>
      </div>
      <img src={image} alt="" />
      <button>Add to Basket</button>
    </div>
  );
};

export default Product;
