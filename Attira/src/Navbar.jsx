import React from "react";
import Logo from "./components/Navbar/Logo";
import Cart from "./components/Navbar/Cart";
import Wishlist from "./components/Navbar/Wishlist";
import Search from "./components/Navbar/Search";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="w-full h-[11%] bg-gray-200 shadow-md fixed top-0 p-5 z-50">
      <nav className="w-full h-full flex items-center justify-between px-6">
        {/* Logo */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-orange-400 text-md font-semibold"
              : "text-gray-500 hover:text-orange-300 text-md hover:font-semibold"
          }
        >
          <Logo />
        </NavLink>

        {/* Middle nav links */}
        <ul className="flex items-center gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-orange-400 text-md font-semibold"
                : "text-gray-500 hover:text-orange-300 text-md hover:font-semibold"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive
                ? "text-orange-400 text-md font-semibold"
                : "text-gray-500 hover:text-orange-300 text-md hover:font-semibold"
            }
          >
            Products
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-orange-400 text-md font-semibold"
                : "text-gray-500 hover:text-orange-300 text-md hover:font-semibold"
            }
          >
            About Us
          </NavLink>
        </ul>

        {/* Right side*/}
        <ul className="flex items-center gap-6">
          <Search />

          <NavLink
            to="/wishlist"
            className={({ isActive }) =>
              isActive
                ? "text-orange-400 text-md font-semibold"
                : "text-gray-500 hover:text-orange-300 text-md hover:font-semibold"
            }
          >
            <Wishlist />
          </NavLink>

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive
                ? "text-orange-400 text-md font-semibold"
                : "text-gray-500 hover:text-orange-300 text-md hover:font-semibold"
            }
          >
            <Cart />
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
