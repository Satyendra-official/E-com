
import React from "react";

const OneProduct = (props) => {
  const { product } = props;
  return (
    <>
      <div className="card">
        <img src={product.image} />
        <p>{product.title.slice(0, 35)}...</p>
        <div className="price-container">
          <p className="price">RS: {product.price}</p>
          <p className="rating">
            {"* ".repeat(Math.round(product.rating.rate))}
          </p>
        </div>
      </div>

    </>
  );
};

export default OneProduct;
