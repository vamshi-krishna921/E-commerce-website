import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Routing from "./Routing";
import Cart from "./components/Navbar/Cart";

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState(() => {
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  });

  const openCart = () => setCartOpen(true);
  const updateCart = (items) => {
    setCartItems(items);
    localStorage.setItem("cart", JSON.stringify(items));
  };

  return (
    <>
      <Navbar openCart={openCart} />
      <div className="mt-13">
        <Routing
          cartItems={cartItems}
          updateCart={updateCart}
          openCart={openCart}
        />
      </div>
      <Cart
        cartOpen={cartOpen}
        closeCart={() => setCartOpen(false)}
        cartItems={cartItems}
        updateCart={updateCart}
      />
      <Footer/>
    </>
  );
}

export default App;
