import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaPinterest,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#000] text-white text-center py-10 font-sans">
      {/* Social Icons */}
      <div className="flex justify-center space-x-6 text-xl mb-6">
        <FaFacebookF className="cursor-pointer hover:text-gray-400" />
        <FaTwitter className="cursor-pointer hover:text-gray-400" />
        <FaInstagram className="cursor-pointer hover:text-gray-400" />
        <FaYoutube className="cursor-pointer hover:text-gray-400" />
        <FaPinterest className="cursor-pointer hover:text-gray-400" />
      </div>

      {/* Description */}
      <p className="max-w-2xl mx-auto text-sm text-gray-400 px-4 mb-6 leading-relaxed">
        Swastika is a Goa-based event management agency that crafts
        unforgettable experiences with elegance and precision. From destination
        weddings and private celebrations to corporate events and cultural
        festivals, we bring creativity, professionalism, and a deep
        understanding of detail to every occasion. Rooted in Goan warmth and
        driven by passion, Swastika transforms your vision into seamless,
        memorable moments.
      </p>

      {/* Logo */}
      <img
        src="/src/assets/logo1.png"
        alt="Swastika Logo"
        className="h-8 mx-auto mb-2"
      />

      {/* Country & Currency */}
      <div className="text-sm text-gray-400">India | ₹</div>
    </footer>
  );
};

export default Footer;
