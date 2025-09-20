import React, { useEffect, useRef } from "react";
import Logo from "./components/Navbar/Logo";
import Search from "./components/Navbar/Search";
import { BsCart2 } from "react-icons/bs";
import { GoHeart } from "react-icons/go";
import { NavLink } from "react-router-dom";
import gsap from "gsap";
import {useGSAP} from "@gsap/react"

function Navbar() {
  // Refs for GSAP
  const logoRef = useRef(null);
  const linksRef = useRef(null);
  const rightRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 0.6 } });

    tl.from(logoRef.current, { y: -50, opacity: 0 })
      .from(linksRef.current.children, { y: -50, opacity: 0, stagger: 0.1 }, "-=0.5")
      .from(rightRef.current.children, { y: -50, opacity: 0, stagger: 0.1 }, "-=0.4");
  }, []);

  return (
    <header className="w-full h-[11%] shadow-md fixed top-0 p-5 z-50 bg-white">
      <nav className="w-full h-full flex items-center justify-between px-6 text-[17px] font-body">
        {/* Logo */}
        <NavLink title="Home"
          to="/"
          ref={logoRef}
          className={({ isActive }) =>
            isActive
              ? "text-orange-400 text-md font-semibold"
              : "text-gray-600 hover:text-orange-300 text-md hover:font-semibold"
          }
        >
          <Logo />
        </NavLink>

        {/* Middle nav links */}
        <ul ref={linksRef} className="flex items-center gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-orange-400 text-md font-semibold"
                : "text-gray-600 hover:text-orange-300 text-md hover:font-semibold"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive
                ? "text-orange-400 text-md font-semibold"
                : "text-gray-600 hover:text-orange-300 text-md hover:font-semibold"
            }
          >
            Products
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-orange-400 text-md font-semibold"
                : "text-gray-600 hover:text-orange-300 text-md hover:font-semibold"
            }
          >
            About Us
          </NavLink>
        </ul>

        {/* Right side */}
        <ul className="flex items-center gap-6"  ref={rightRef}>
          <div>
            <Search />
          </div>

          <NavLink title="wishlist"
            to="/wishlist"
            className={({ isActive }) =>
              isActive
                ? "text-orange-400 text-md font-semibold"
                : "text-gray-600 hover:text-orange-300 text-md hover:font-semibold"
            }
          >
            <GoHeart size={27} />
          </NavLink>

          <NavLink title="Cart"
            to="/cart"
            className={({ isActive }) =>
              isActive
                ? "text-orange-400 text-md font-semibold"
                : "text-gray-600 hover:text-orange-300 text-md hover:font-semibold"
            }
          >
            <BsCart2 size={27} />
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
