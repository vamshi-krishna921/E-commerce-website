import React, { useMemo } from "react";
import { productsList } from "../ProductsList/ProductsList";
import ProductCardList from "../Navbar/ProductCardList"; // adjust path if needed

function NewProducts({ cartItems, updateCart, openCart }) {
  const newProducts = useMemo(
    () => productsList.filter((product) => product.newArrival).slice(0, 9),
    []
  );

  return (
    <section className="w-full min-h-screen bg-gray-100 flex flex-col items-center p-8">
      <h1 className="text-4xl font-heading font-bold text-center mb-8">
        New Products
      </h1>

      <div className="w-full flex justify-center">
        <div className="w-6xl p-6 flex items-center flex-wrap gap-7 justify-start bg-white rounded-2xl">
          <ProductCardList
            products={newProducts}
            cartItems={cartItems}
            updateCart={updateCart}
            openCart={openCart}
          />{" "}
        </div>
      </div>
    </section>
  );
}

export default NewProducts;
