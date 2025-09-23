import React from "react";
import bannerImg from "../../assets/Banner.png";
import NewProducts from "./NewProducts";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function WholePage() {
  const navigate = useNavigate();
  const imageRef = useRef(null);
  const containerRef = useRef(null);
  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power3.out", duration: 0.6, delay: 0.5 },
    });
    tl.from(imageRef.current, { x: -50, opacity: 0 }).from(
      containerRef.current.children,
      { x: 50, opacity: 0, stagger: 0.1 },
      "-=0.6"
    );
  });

  return (
    <>
      <section className="mt-16 w-full min-h-[70vh] pb-3 font-body relative overflow-hidden">
        <div className="absolute inset-0 bg-gray-200 curved-banner z-0"></div>
        <div className="relative z-10 w-full h-full flex flex-col md:flex-row items-center justify-between gap-8 px-6">
          <div className="w-full md:w-1/2 flex justify-center md:justify-start relative">
            <img
              src={bannerImg}
              ref={imageRef}
              alt="Banner"
              className="w-[70%] md:w-[90%] lg:w-[100%] md:h-[50%] h-[400px] object-contain"
            />
          </div>

          <div
            className="w-full md:w-1/2 md:mt-3 -mt-3 flex flex-col justify-center items-center md:items-start text-center md:text-left"
            ref={containerRef}
          >
            <p className="text-xl md:text-2xl font-bold text-red-500 mb-2 uppercase tracking-wide">
              Limited Time Offer!
            </p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-black mb-4 font-heading">
              Discover Your Style
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-zinc-600 max-w-xl">
              Shop the latest trends in fashion, accessories, and more. Elevate
              your wardrobe with our exclusive collections.
            </p>
            <button
              className="mt-6 px-6 md:px-8 py-3 bg-orange-500 text-white text-lg font-semibold rounded-full hover:bg-orange-800 transition-colors duration-300 cursor-pointer"
              onClick={() => navigate("/products")}
            >
              Shop Now
            </button>
          </div>
        </div>
      </section>
      <section className="w-full min-h-screen mt-10 flex flex-col">
        <NewProducts />
      </section>
    </>
  );
}

export default WholePage;
