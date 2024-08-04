
import React, { useState, useEffect } from "react";
import ProductList from "./Components/ProductList";
import { Menu, Search } from "lucide-react";

const ProductPage = () => {
  // This state is used to handle the state change in search bar.
  const [search, setSearch] = useState("");

  // This state is used to handle the state change of product on the page.
  const [allProducts, setAllProducts] = useState([])

  // This state is used to manage the category state
  const[allCategory, setCategory] = useState([])

  const onSearchChange = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
    
  };

  // API calling to get the list of products where we are passing the category as parameter 
  //that is fetched dinamically by category api call
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

  
// API call to get the list of category
  const getCategory = () =>{
    let apiurl = `https://fakestoreapi.com/products/categories`;
    fetch(apiurl).then((res)=>{
      res.json().then((res) => {
        setCategory(res)
      });
    })
    .catch((error) => {
      console.log(error);
    });
    console.log(allCategory);
    
  };




  useEffect(() => {
    //function to call once when the component mounts
    const init = () => {
      getCategory()
      getProductList('/')
    };
    init();
  }, []);

  return (
    <div className="container">
      {/* Navigation bar or Header */}
      <nav className="navbar">
      <p><Menu/></p>
      <button onClick={() => getProductList('/')}>All Products</button>
        {
          allCategory.map((category, index) => { 
            return <button onClick={() => {
            getProductList(`category/${category}`)
          }} style={{textTransform: 'capitalize'}}>{category}</button>})
        }
      </nav>

      
      <br />
      {/* Search bar */}
      <div className="search-bar">
      <input
        onChange={onSearchChange}
        value={search}
        placeholder="Search Your Product"
      />
      <button onClick={() => getProductList('/')} className="btn"><Search/></button>
      </div>

      {/* All products sent to ProductList as props */}
      <ProductList allProducts = {allProducts} />
    </div>
  );
};

export default ProductPage;
