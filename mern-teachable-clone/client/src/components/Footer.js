import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-4">
          {/* Copyright Notice */}
          <div className="text-center text-sm">
            &copy; Ajitfham Academy 2024
          </div>
          
          {/* Social Media Links */}
          <div className="flex flex-col items-center space-y-2">
            <a 
              href="https://www.youtube.com/channel/UCNNlFX43qz0xzOL3WeA3jHA?disable_polymer=true" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:underline text-sm"
            >
              Youtube Channel
            </a>
            <a 
              href="https://www.facebook.com/zikomaths/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:underline text-sm"
            >
              Facebook Page
            </a>
          </div>

          {/* Legal Links */}
          <div className="flex flex-col items-center space-y-2 mt-4">
            <a 
              href="/p/terms" 
              className="hover:underline text-sm"
            >
              Terms of Use
            </a>
            <a 
              href="/p/privacy" 
              className="hover:underline text-sm"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
