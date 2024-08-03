import React from "react"
import ProductPage from "./Product/Index"
import "./style.css";


function App() {

  return (
  <div>
    {/* <p>Hello</p> */}
  <ProductPage/>    
  </div>  
  )
}

export default App


// 4. Create one product page, Where you will display the list of product.
// Data should come from app component, and each card should render from Product component, 
// and All product will map() inside the ProductList Component.
