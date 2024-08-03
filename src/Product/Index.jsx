
import React, { useState, useEffect } from "react";
import ProductList from "./Components/ProductList";

const ProductPage = () => {
  const [search, setSearch] = useState("");
  const [allProducts, setAllProducts] = useState([])

  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const getProductList = (category) => {
    let apiUrl = `https://fakestoreapi.com/products/${category}`;
    fetch(apiUrl)
      .then((res) => {
        res.json().then((res) => {
          setAllProducts(res)
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    //function to call once when the component mounts
    const init = () => {
      getProductList('/')
    };
    init();
  }, []);

  return (
    <div className="container">
      <nav className="navbar">
          <button onClick={() => getProductList('/')}>All Products</button>
          <button onClick={() => getProductList('category/electronics')}>Electronics</button>
          <button onClick={() => getProductList('category/jewelery')}>Jwellery</button>
          <button onClick={() => getProductList("category/men's clothing")}>Men's Clothing</button>
          <button onClick={() => getProductList("category/women's clothing")}>Women's Clothing</button>
      </nav>

      
      <br />
      <div className="search-bar">
      <input
        onChange={onSearchChange}
        value={search}
        placeholder="Search Your Product"
      />
      <button onClick={() => getProductList('/')} className="btn">Search</button>
      </div>


      <ProductList allProducts = {allProducts} />
    </div>
  );
};

export default ProductPage;
