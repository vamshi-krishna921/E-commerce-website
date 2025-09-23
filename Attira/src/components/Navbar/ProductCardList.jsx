import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ProductCardList({ products, cartItems, updateCart, openCart }) {
  const productRefs = useRef([]);

  // GSAP
  useEffect(() => {
    productRefs.current = productRefs.current.slice(0, products.length);

    productRefs.current.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power.in",
          scrollTrigger: {
            trigger: el,
            start: "top 100%",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [products]);

  const addToCart = (product) => {
    const existingCart = Array.isArray(cartItems) ? [...cartItems] : [];
    const index = existingCart.findIndex((p) => p.id === product.id);
    if (index >= 0) existingCart[index].quantity += 1;
    else existingCart.push({ ...product, quantity: 1 });
    updateCart(existingCart);
    openCart();
  };

  if (products.length === 0) {
    return <p className="text-gray-500 text-lg">No products found.</p>;
  }

  return (
    <>
      {products.map((product, idx) => (
        <div
          key={product.id}
          ref={(el) => (productRefs.current[idx] = el)}
          className="w-87 rounded-2xl h-115 overflow-hidden border-2 shadow shadow-gray-300 border-gray-100 relative"
        >
          <Link to={`/products/${product.id}`}>
            {product.newArrival && (
              <div className="w-20 p-1 text-center rounded-md bg-orange-300 absolute top-0 right-0">
                New
              </div>
            )}
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-[70%] object-cover"
            />
            <div className="p-4 rounded-2xl text-center">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-lg font-bold text-red-600 font-body">
                {product.price}/-
              </p>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  addToCart(product);
                }}
                className="w-[80%] p-2.5 font-body rounded-2xl bg-yellow-500 hover:bg-yellow-400 cursor-pointer"
              >
                Add to cart
              </button>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
}

export default ProductCardList;
