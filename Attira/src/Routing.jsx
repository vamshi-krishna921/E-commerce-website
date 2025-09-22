import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Navbar/Home";
import Products from "./components/Navbar/Products";
import About from "./components/Navbar/About";
import ProductItem from "./components/Navbar/ProductItem";

function Routing({ cartItems, updateCart, openCart }) {
  return (
    <div className="pt-14">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products"
          element={
            <Products
              cartItems={cartItems}
              updateCart={updateCart}
              openCart={openCart}
            />
          }
        />
        <Route
          path="/products/:id"
          element={
            <ProductItem
              cartItems={cartItems}
              updateCart={updateCart}
              openCart={openCart}
            />
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}
export default Routing;
