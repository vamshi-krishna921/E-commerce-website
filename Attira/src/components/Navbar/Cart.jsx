import React, { useEffect, useRef, useState } from "react";
import { BsCart2 } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import gsap from "gsap";
import Checkout from "./Checkout";

const Cart = ({ cartOpen, closeCart, cartItems, updateCart }) => {
  const cartRef = useRef(null);
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  // GSAP
  useEffect(() => {
    if (cartOpen) {
      gsap.to(cartRef.current, { x: 0, duration: 0.5, ease: "power3.out" });
    } else {
      gsap.to(cartRef.current, { x: 400, duration: 0.5, ease: "power3.in" });
    }
  }, [cartOpen]);

  const increment = (id) => {
    const updated = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    updateCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const decrement = (id) => {
    const updated = cartItems
      .map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0);
    updateCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const removeItem = (id) => {
    const updated = cartItems.filter((item) => item.id !== id);
    updateCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <div
        ref={cartRef}
        className="fixed top-0 bottom-0 right-0 w-[380px] md:w-[400px] bg-white shadow-lg p-4 flex flex-col z-50"
        style={{ transform: "translateX(400px)" }}
      >
        <div className="flex items-center justify-between border-b pb-4 mb-4">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <BsCart2 /> My Cart
          </h2>
          <button
            className="text-gray-500 hover:text-orange-400 text-2xl cursor-pointer"
            onClick={closeCart}
          >
            <RxCross2 />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          {cartItems.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between mb-4 p-2 border rounded"
              >
                <div className="flex items-center gap-2">
                  <img
                    src={item.images[0]}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-500">{item.price} /-</p>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => decrement(item.id)}
                      className="px-2 py-1 border rounded cursor-pointer hover:text-orange-400"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => increment(item.id)}
                      className="px-2 py-1 border rounded cursor-pointer hover:text-orange-400"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 text-sm hover:underline cursor-pointer"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Checkout */}
        {cartItems.length > 0 && (
          <div className="mt-4 border-t pt-4">
            <p className="text-lg font-semibold mb-2">
              Total: <span className="text-red-600">{totalPrice} /-</span>
            </p>
            <button
              onClick={() => setCheckoutOpen(true)}
              className="w-full cursor-pointer bg-orange-600 text-white py-2 rounded hover:bg-orange-700"
            >
              Checkout
            </button>
          </div>
        )}
      </div>

      <Checkout
        isOpen={checkoutOpen}
        isClose={() => setCheckoutOpen(false)}
        cartItems={cartItems}
        updateCart={updateCart}
      />
    </>
  );
};

export default Cart;
