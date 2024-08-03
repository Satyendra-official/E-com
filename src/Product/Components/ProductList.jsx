import React from "react";
import OneProduct from "./oneProduct";

const ProductList = (props) => {
  const { allProducts } = props;

  return (
    <div className="product-list-container">
      {
        allProducts.map((product) => {
          return <OneProduct product={product}/>
        })
      }

    </div>
  );
};

export default ProductList;
