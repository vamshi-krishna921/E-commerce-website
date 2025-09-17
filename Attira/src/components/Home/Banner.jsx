import React from "react";
import bannerImg from "../../assets/Banner.png";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Banner() {
  const navigate = useNavigate();
  const imageRef = useRef(null);
  const containerRef = useRef(null);
  useGSAP(() => {
  const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 0.6, delay: 0.5 } });
  tl.from(imageRef.current, { x: -50, opacity: 0 })
    .from(containerRef.current.children, { x: 50, opacity: 0, stagger: 0.1 }, "-=0.6");
});

  return (
    <section className="mt-16 w-full h-[60dvh] font-body relative overflow-hidden">
      <div className="absolute inset-0 bg-gray-200 curved-banner z-0"></div>
      <div className="relative z-10 w-full h-full flex justify-start items-center gap-2">
        <div className="w-160 h-full relative">
          <img
            src={bannerImg}
            ref={imageRef}
            alt="this is bannerImg"
            className="absolute left-30 -bottom-10 h-[120%] w-auto"
          />
        </div>

        <div className="w-full h-full flex flex-col justify-center items-center" ref={containerRef}>
          <p className="text-xl md:text-2xl font-bold text-red-500 mb-2 uppercase tracking-wide">
            Limited Time Offer!
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-4 font-heading">
            Discover Your Style
          </h1>
          <p className="text-lg md:text-xl text-zinc-600 max-w-2xl text-center">
            Shop the latest trends in fashion, accessories, and more. Elevate
            your wardrobe with our exclusive collections.
          </p>
          <button
            className="mt-6 px-8 py-3 bg-orange-500 text-white text-lg font-semibold rounded-full hover:bg-orange-800 transition-colors duration-300 cursor-pointer"
            onClick={() => navigate("/products")}
          >
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default Banner;
