import React from "react";
import { useParams } from "react-router-dom";

function ProductItem() {
  const { id } = useParams(); // id will be a string
  return (
    <section className="w-full min-h-screen bg-gray-100 -mt-4">
      <div>product id : {id}</div>
    </section>
  );
}

export default ProductItem;
