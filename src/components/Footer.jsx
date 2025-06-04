import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"; // Example social icons

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-primary py-8 border-t border-darkslate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate">
        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary transition-colors duration-300"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary transition-colors duration-300"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
          {/* Add other social links like Twitter, etc. */}
          {/* <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors duration-300">
            <FaTwitter className="w-6 h-6" />
          </a> */}
        </div>
        <p className="text-sm font-mono">
          Designed & Built by Alex Chen {/* Replace with your name */}
        </p>
        <p className="text-xs mt-1">© {year}. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
