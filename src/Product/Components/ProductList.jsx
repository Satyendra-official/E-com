import React from "react";
import OneProduct from "./oneProduct";

// All Products props handled. Mapped one product and sent to oneProduct as props
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
