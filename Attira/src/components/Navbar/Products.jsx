import React, { useState } from "react";

function Products() {
  const productTypes = ["All", "Mens", "Womens", "Kids", "New Arrival"];
  const [category, setCategory] = useState("All");

  return (
    <section className="w-full min-h-screen bg-gray-100 flex items-start -mt-8">
      <div className="w-full mt-10 flex justify-center items-center">
        <div className="w-1/2 md:w-4xl p-4 rounded-3xl flex flex-wrap justify-center gap-6 bg-white">
          {productTypes.map((type, index) => (
            <button
              key={index}
              onClick={() => setCategory(type)}
              className={`w-32 py-2 rounded-xl text-center font-body text-[18x] ${
                category == type ? "bg-orange-400" : "bg-gray-100"
              } transition cursor-pointer hover:bg-orange-300`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
