import React, { useRef, useState } from "react";
import Logo from "./components/Navbar/Logo";
import Search from "./components/Navbar/Search";
import { BsCart2 } from "react-icons/bs";
import { HiMenu, HiX } from "react-icons/hi"; // hamburger + close icons
import { NavLink } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Navbar({ openCart }) {
  // State for mobile menu
  const [menuOpen, setMenuOpen] = useState(false);

  // Refs for GSAP
  const logoRef = useRef(null);
  const linksRef = useRef(null);
  const rightRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Desktop GSAP animation
  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power3.out", duration: 0.6 },
    });

    tl.from(logoRef.current, { y: -50, opacity: 0 })
      .from(
        linksRef.current?.children || [],
        { y: -50, opacity: 0, stagger: 0.1 },
        "-=0.5"
      )
      .from(
        rightRef.current?.children || [],
        { y: -50, opacity: 0, stagger: 0.1 },
        "-=0.4"
      );
  }, []);

  // Animate mobile menu open/close
  useGSAP(() => {
    if (menuOpen) {
      gsap.to(mobileMenuRef.current, {
        x: 0,
        duration: 0.5,
        ease: "power3.out",
      });
    } else {
      gsap.to(mobileMenuRef.current, {
        x: "100%",
        duration: 0.5,
        ease: "power3.in",
      });
    }
  }, [menuOpen]);

  return (
    <header className="w-full shadow-md fixed top-0 left-0 z-50 bg-white">
      <nav className="w-full h-22 flex items-center justify-between px-6 text-[17px] font-body">
        {/* Logo */}
        <NavLink
          title="Home"
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

        {/* Middle nav links - hidden on mobile */}
        <ul ref={linksRef} className="hidden md:flex items-center gap-6">
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

        {/* Right side (search + cart + hamburger on mobile) */}
        <ul className="flex items-center gap-6" ref={rightRef}>
          <div className="hidden md:block">
            <Search />
          </div>

          <BsCart2
            size={27}
            onClick={openCart}
            className="text-gray-600 hover:text-orange-300 cursor-pointer"
          />

          {/* Hamburger menu for mobile */}
          <button
            className="md:hidden text-2xl text-gray-600 hover:text-orange-400"
            onClick={() => setMenuOpen(true)}
          >
            <HiMenu />
          </button>
        </ul>
      </nav>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg transform translate-x-full md:hidden flex flex-col z-50"
      >
        <div className="flex justify-between items-center p-5 border-b">
          <span className="font-heading text-lg font-semibold">Menu</span>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-2xl text-gray-600 hover:text-orange-400"
          >
            <HiX />
          </button>
        </div>

        <ul className="flex flex-col gap-4 p-5 text-lg">
          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            className="text-gray-700 hover:text-orange-400"
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            onClick={() => setMenuOpen(false)}
            className="text-gray-700 hover:text-orange-400"
          >
            Products
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="text-gray-700 hover:text-orange-400"
          >
            About Us
          </NavLink>
          <div className="mt-4">
            <Search />
          </div>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
