import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi"; // Menu icons
import { navigationLinks } from "../data/portfolioData"; // Import nav links

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const linkProps = {
    spy: true,
    smooth: true,
    offset: -70, // Adjust offset based on your navbar height
    duration: 500,
    className:
      "cursor-pointer px-3 py-2 rounded hover:text-secondary transition-colors duration-300 font-mono text-sm",
    activeClass: "text-secondary", // Highlight active link
    onClick: () => setIsOpen(false), // Close menu on link click
  };

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const mobileMenuVariants = {
    closed: { opacity: 0, x: "100%" },
    open: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" } },
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "bg-primary/90 shadow-lg backdrop-blur-sm"
          : "bg-transparent"
      }`}
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <ScrollLink
              to="hero" // Link to the top/hero section
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="text-secondary font-bold text-xl font-mono cursor-pointer"
            >
              AC <span className="text-lightslate"></span>{" "}
              {/* Initials or Logo */}
            </ScrollLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigationLinks.map((link) => (
                <ScrollLink key={link.to} to={link.to} {...linkProps}>
                  {link.name}
                </ScrollLink>
              ))}
              <a
                href="#contact" // Example contact link (adjust as needed)
                className="button-primary ml-4 !px-4 !py-2" // Use button style
              >
                Contact
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-slate hover:text-white hover:bg-darkslate focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <HiX className="block h-6 w-6" />
              ) : (
                <HiMenu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden absolute top-16 inset-x-0 p-2 transition transform origin-top-right bg-primary/95 backdrop-blur-sm shadow-lg"
            id="mobile-menu"
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
              {navigationLinks.map((link) => (
                <ScrollLink key={link.to} to={link.to} {...linkProps}>
                  {link.name}
                </ScrollLink>
              ))}
              <a
                href="#contact"
                className="button-primary mt-4 w-full text-center"
              >
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
