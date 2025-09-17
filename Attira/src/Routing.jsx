import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Navbar/Home";
import Products from "./components/Navbar/Products";
import About from "./components/Navbar/About";
import Wishlist from "./components/Navbar/Wishlist";
import Cart from "./components/Navbar/Cart";

function Routing() {
  return (
    <div className="pt-14">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default Routing;
