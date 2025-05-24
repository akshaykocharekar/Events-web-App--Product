import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaWhatsapp,
  FaSearch,
  FaShoppingCart,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", to: "/" },
  { name: "Gallery", to: "/gallery" },
  { name: "Services", to: "/services" },
  { name: "Contact", to: "/contact" },
  { name: "About", to: "/about" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <nav className="w-full sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-16 flex justify-between items-center">
        {/* Logo + Brand */}
        <div className="flex items-center space-x-2">
          <img src="src/assets/logo1.png" alt="Logo" className="h-10" />
          <span className="text-2xl font-serif italic text-gray-800">
            Pozze
          </span>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center space-x-10 font-semibold text-sm tracking-wider uppercase text-gray-700">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  isActive
                    ? "text-black underline underline-offset-8"
                    : "hover:text-black"
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right Icons */}
        {/* Right Icons */}
        <div className="flex items-center space-x-4 text-lg text-gray-700">
          {/* WhatsApp Button */}
          <a
            href="https://wa.me/919119455139"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 px-3 py-1 rounded-full flex items-center gap-2  transition text-3xl"
          >
            <FaWhatsapp />
          </a>

          {/* Mobile Menu Toggle */}
          <button onClick={toggleMenu} className="md:hidden focus:outline-none">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-md px-6 py-10 flex flex-col items-center space-y-6"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                onClick={toggleMenu}
                className={({ isActive }) =>
                  `text-lg font-semibold tracking-wide uppercase ${
                    isActive
                      ? "text-black underline"
                      : "text-gray-700 hover:text-black"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
