import React, { useState } from "react";

const Checkout = ({ isOpen, isClose, cartItems, updateCart }) => {
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 10;
  const total = subtotal + shipping;

  const handlePlaceOrder = () => {
    setSuccess(true);
    localStorage.removeItem("cart");
    updateCart([]);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white w-[500px] p-6 rounded-lg shadow-lg">
        {!success ? (
          <>
            <h2 className="text-2xl font-semibold text-center mb-6">
              Order Summary
            </h2>
            <div className="space-y-3 mb-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between border-b pb-2 text-gray-700"
                >
                  <p>
                    {item.name}(x{item.quantity})
                  </p>
                  <p>{(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
              <div className="flex justify-between">
                <p>Subtotal</p>
                <p>{subtotal.toFixed(2)}</p>
              </div>
              <div className="flex justify-between">
                <p>Shipping & Handling</p>
                <p>{shipping.toFixed(2)}</p>
              </div>
            </div>
            <div className="flex justify-between text-xl font-bold text-orange-600 mb-6">
              <p>Order Total</p>
              <p>{total.toFixed(2)}</p>
            </div>
            <div className="flex justify-between">
              <button
                onClick={isClose}
                className="bg-gray-800 text-white py-2 px-6 rounded cursor-pointer hover:bg-gray-900"
              >
                Cancel
              </button>
              <button
                onClick={handlePlaceOrder}
                className="md:bg-orange-600 bg-orange-700 cursor-pointer text-white py-2 px-6 rounded hover:bg-orange-700"
              >
                Place Order
              </button>
            </div>
          </>
        ) : (
            //On success
          <div className="text-center space-y-6">
            <h2 className="text-2xl font-bold text-orange-600">
              🎉 Successfully Ordered!
            </h2>
            <p className="text-gray-600">
              Thank you for your purchase. Your order will be processed soon.
            </p>
            <button
              onClick={isClose}
              className="md:bg-orange-600 bg-orange-700 cursor-pointer text-white py-2 px-6 rounded hover:bg-orange-700"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
