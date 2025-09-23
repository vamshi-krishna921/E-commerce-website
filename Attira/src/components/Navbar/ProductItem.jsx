import React, { useEffect, useMemo, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { productsList } from "../ProductsList/ProductsList";
import ProductCardList from "../Navbar/ProductCardList";
import { ChevronLeft, ChevronRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ProductItem({ openCart, cartItems, updateCart }) {
  const { id } = useParams();
  const product = productsList.find((product) => product.id === parseInt(id));
  const newProducts = useMemo(() => {
    const shuffled = [...productsList].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 3);
  }, [id]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [id]);

  const boxRefs = useRef([]);
  boxRefs.current = [];

  const addToRefs = (el) => {
    if (el && !boxRefs.current.includes(el)) {
      boxRefs.current.push(el);
    }
  };

  useEffect(() => {
    boxRefs.current.forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        y: 100,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 100%",
        },
      });
    });
  }, []);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const addToCart = (product) => {
    const existingCart = [...cartItems]; // now always iterable
    const index = existingCart.findIndex((p) => p.id === product.id);
    if (index >= 0) existingCart[index].quantity += 1;
    else existingCart.push({ ...product, quantity: 1 });

    updateCart(existingCart);
    openCart();
  };

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
    <section className="w-full h-full bg-gray-100 -mt-4 flex flex-col gap-14 justify-center items-center">
      <div className="w-full md:w-[80%] bg-white flex justify-center gap-7 flex-wrap p-5 mt-10 rounded-2xl">
        {/* Images box */}
        <div
          ref={addToRefs}
          className="md:w-130 w-120 rounded-2xl h-140 border-2 border-gray-200"
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

            <div
              onClick={handleNextImage}
              className="absolute top-1/2 right-2 -translate-y-1/2 rounded-full p-2 bg-gray-200 cursor-pointer hover:bg-gray-300"
            >
              <ChevronRight className="w-5 h-5 text-xl" />
            </div>

            <div
              onClick={handlePrevImage}
              className="absolute top-1/2 left-1 -translate-y-1/2 rounded-full p-2 bg-gray-200 cursor-pointer hover:bg-gray-300"
            >
              <ChevronLeft className="w-5 h-5 text-xl" />
            </div>
          </div>
        </div>

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
              onClick={() => addToCart(product)}
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

      <div
        ref={addToRefs}
        className="w-full flex justify-center items-center gap-12 flex-col"
      >
        <h2 className="text-4xl font-body font-bold">Description</h2>
        <div className="w-[80%]">
          <p className="text-lg font-body text-start leading-relaxed">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Necessitatibus aperiam, repellat quibusdam culpa expedita ipsum
            assumenda temporibus rerum dolor, magnam aut dolores nemo ullam ad
            quaerat voluptate nesciunt, odit aliquam ipsa nostrum. Deleniti ab
            officia nobis eius voluptas molestiae, mollitia voluptates incidunt!
            Obcaecati, nesciunt molestias unde at quidem laudantium cumque, rem
            itaque aspernatur praesentium veniam odit aliquid sunt ad
            reiciendis, sed quisquam. Debitis temporibus pariatur cupiditate
            laudantium reprehenderit, repellendus accusantium culpa rem quas
            ipsum facilis, incidunt ea doloribus laboriosam libero
            necessitatibus accusamus! Excepturi explicabo debitis enim magnam
            quasi. Voluptatibus alias, dicta voluptates maiores reprehenderit
            impedit, facere repellat modi nulla labore corrupti ratione
            similique quas perferendis deserunt? Nihil voluptatum voluptate fuga
            quibusdam repellendus dicta, totam voluptates eius at illo
            distinctio ex consectetur pariatur sapiente quisquam dolores saepe
            minima! Odit sequi dolorum quibusdam delectus incidunt, ab
            aspernatur, repudiandae modi consequuntur architecto porro inventore
            eligendi mollitia sed quis doloremque eveniet alias saepe nulla.
          </p>
        </div>
      </div>

      <div className="flex gap-10 flex-wrap justify-center items-center">
        <ProductCardList
          products={newProducts}
          cartItems={cartItems}
          updateCart={updateCart}
          openCart={openCart}
        />
      </div>
    </section>
  );
}

export default ProductItem;
