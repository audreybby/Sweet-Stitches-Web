// eslint-disable-next-line no-unused-vars
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#CCE2CB] text-gray-500 py-8">
      <div className="overflow-visible mx-auto px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          {/* Left Side: Logo / Brand */}
          <div className="text-left sm:text-left mb-4 sm:mb-0 pl-0 sm:pl-8">
            <h1 className="text-2xl sm:text-3xl font-bold">Welcome</h1>
            <p className="text-sm sm:text-base mt-2">Welcome to this creative space where you can learn how to crochet or enhance your skills. This website is packed full of hints, tips, tutorials and inspiration for all skill levels.</p>
          </div>

          {/* Right Side: Social Media Links (removed icons) */}
          <div className="flex space-x-6">
            {/* Removed Social Media Links */}
          </div>
        </div>
      </div>

      {/* Full-Width Divider with Spacing */}
      <div className="border-t border-gray-400 w-full mt-6"></div>

      {/* Bottom Section without Additional Links */}
      <div className="mt-6 max-w-7xl mx-auto px-6 text-center text-sm sm:text-base">
        <p>© {new Date().getFullYear()} Sweet Stitches. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
