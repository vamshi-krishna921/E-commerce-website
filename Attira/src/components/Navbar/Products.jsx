import React, { useState, useMemo } from "react";
import { productsList } from "../ProductsList/ProductsList";
import { useLocation } from "react-router-dom";
import ProductCardList from "../Navbar/ProductCardList";

function Products({ cartItems, updateCart, openCart }) {
  const productTypes = ["All", "Mens", "Women", "Kids", "New Arrival"];
  const [activeCategory, setActiveCategory] = useState("All");
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get("search")?.toLowerCase() || "";

  // Filter products based on active category and search query
  const products = useMemo(() => {
    return productsList.filter((product) => {
      if (activeCategory === "New Arrival" && !product.newArrival) return false;
      if (activeCategory !== "All" && activeCategory !== "New Arrival") {
        if (product.category !== activeCategory) return false;
      }
      if (searchQuery && !product.name.toLowerCase().includes(searchQuery))
        return false;
      return true;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section className="w-full min-h-screen bg-gray-100 flex flex-col items-start -mt-8">
      <div className="w-full mt-10 flex justify-center items-center">
        <div className="w-[80%] md:w-6xl p-4 rounded-3xl flex flex-wrap justify-center md:gap-7 gap-5 bg-white">
          {productTypes.map((type, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(type)}
              className={`w-32 py-2 rounded-xl text-center font-body text-[18px] ${
                activeCategory === type
                  ? "bg-orange-400 text-white"
                  : "bg-gray-100"
              } transition cursor-pointer hover:bg-orange-300`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* List of products */}
      <div className="w-full p-4 flex justify-center items-center">
        <div className="w-6xl p-6 flex items-center flex-wrap gap-7 justify-start bg-white rounded-2xl">
          <ProductCardList
            products={products}
            cartItems={cartItems}
            updateCart={updateCart}
            openCart={openCart}
          />
        </div>
      </div>
    </section>
  );
}

export default Products;
