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
        H&M’s business concept is to offer fashion and quality at the best price
        in a sustainable way. H&M has since it was founded in 1947 grown into
        one of the world’s leading fashion companies. The content of this site
        is copyright-protected and is the property of H&M Hennes & Mauritz AB.
      </p>

      {/* Logo */}

      <img src="/src\assets\logo1.png" alt="" className="h-8 mx-auto mb-2" />

      {/* Country & Currency */}
      <div className="text-sm text-gray-400">United Kingdom | £</div>
    </footer>
  );
};

export default Footer;
