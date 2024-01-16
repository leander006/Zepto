// Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-auto relative bottom-0">
      <div className="container mx-auto flex flex-col items-center">

        <p className="text-sm mb-4">
          Made with love &copy; {new Date().getFullYear()}
        </p>


        <div className="flex space-x-4">
          <a href="/privacy" className="hover:text-gray-300">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:text-gray-300">
            Terms of Service
          </a>
          <a href="/contact" className="hover:text-gray-300">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
