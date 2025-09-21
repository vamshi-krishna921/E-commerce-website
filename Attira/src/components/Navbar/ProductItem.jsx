import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { productsList } from "../ProductsList/ProductsList";
import { ChevronLeft, ChevronRight } from "lucide-react";
import gsap from "gsap";

function ProductItem() {
  const { id } = useParams();
  const product = productsList.find((product) => product.id === parseInt(id));

  // Animation setup
  const boxRefs = useRef([]);
  boxRefs.current = [];
  const addToRefs = (el) => {
    if (el && !boxRefs.current.includes(el)) {
      boxRefs.current.push(el);
    }
  };

  useEffect(() => {
    gsap.from(boxRefs.current, {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: "power3.out",
      stagger: 0.2,
    });
  }, []);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
    );
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    const swipeDistance = touchStartX - touchEndX;

    if (swipeDistance > 50) {
      handleNextImage();
    } else if (swipeDistance < -50) {
      handlePrevImage();
    }
    setTouchStartX(0);
    setTouchEndX(0);
  };

  return (
    <section className="w-full h-full bg-gray-100 -mt-4 flex justify-center items-center">
      <div className="w-[80%] bg-white flex justify-center gap-7 flex-wrap p-5 mt-10 rounded-2xl">
        {/* Images box */}
        <div
          ref={addToRefs}
          className="w-130 rounded-2xl h-140 border-2 border-gray-200"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="w-full h-full overflow-hidden flex justify-center items-center relative">
            <img
              src={product.images[currentImageIndex]}
              alt={product.name}
              className="w-full h-full rounded-2xl object-cover transition-all duration-300"
            />

            {/* Right Arrow */}
            <div
              onClick={handleNextImage}
              className="absolute top-1/2 right-2 -translate-y-1/2 rounded-full p-2 bg-gray-200 cursor-pointer hover:bg-gray-300"
            >
              <ChevronRight className="w-5 h-5 text-xl" />
            </div>

            {/* Left Arrow */}
            <div
              onClick={handlePrevImage}
              className="absolute top-1/2 left-1 -translate-y-1/2 rounded-full p-2 bg-gray-200 cursor-pointer hover:bg-gray-300"
            >
              <ChevronLeft className="w-5 h-5 text-xl" />
            </div>
          </div>
        </div>

        {/* Details box */}
        <div
          ref={addToRefs}
          className="w-130 rounded-2xl h-140 border-2 border-gray-200 flex justify-center items-center relative overflow-hidden"
        >
          <div className="w-[90%] h-[78%] flex flex-col justify-start gap-6 items-center bg-white rounded-3xl p-8">
            <h1 className="text-5xl font-heading sm:text-5xl font-extrabold text-center text-gray-900">
              {product.name}
            </h1>
            <p className="text-base font-body sm:text-lg text-center text-gray-600 leading-relaxed max-w-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil hic
              error voluptas veritatis accusamus? Magni!
            </p>
            <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-4 mt-3">
              <p className="text-lg sm:text-xl font-medium line-through text-gray-400">
                {(product.price * 1.1).toFixed(0)}
              </p>
              <p className="text-3xl sm:text-4xl font-bold text-red-500">
                {product.price}/-
              </p>
            </div>

            <button
                className="w-[80%] p-2.5 font-body rounded-2xl bg-yellow-500 hover:bg-yellow-400 cursor-pointer"
              >
                Add to cart
              </button>
              {product.newArrival && (
              <div className="w-20 p-1 text-center rounded-md bg-orange-300 absolute top-0 right-0">
                New
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductItem;
