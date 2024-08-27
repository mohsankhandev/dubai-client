import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="lg:flex lg:justify-between">
          {/* Left Section */}
          <div className="mb-8 lg:mb-0">
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-gray-400 mb-4">
              OM SHREE INTERNATIONAL PVT. LTD is committed to providing exceptional
              service and high-quality products. Established in 1988,
            </p>
            <a href="#contact" className="text-blue-400 hover:underline">
              Contact Us
            </a>
          </div>

          {/* Right Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="text-blue-600 hover:text-blue-800" size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-blue-400 hover:text-blue-600" size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn className="text-blue-700 hover:text-blue-900" size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-pink-500 hover:text-pink-700" size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-700 py-4 mt-2 mb-[-35px]  text-center">
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} OM SHREE INTERNATIONAL PVT. LTD. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;


