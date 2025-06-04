import React from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { profile } from "../data/portfolioData";
import Section from "../components/Section";

// Variants for the main text content container
const textContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Slightly faster stagger for text
      delayChildren: 0.2,
    },
  },
};

// Variants for individual text items
const textItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// Variants specifically for the image zoom effect
const imageZoomVariants = {
  hidden: {
    opacity: 0,
    scale: 0.5, // Start scaled down
    // rotate: -15 // Optional: Add a slight rotation for more dynamic feel
  },
  visible: {
    opacity: 1,
    scale: 1, // Scale up to normal size
    // rotate: 0   // Rotate back to normal
    transition: {
      duration: 0.8, // Duration of the zoom/fade effect
      ease: [0.17, 0.67, 0.83, 0.67], // Example of a specific ease function (easeOutBack-like)
      delay: 0.8, // Delay the image animation start slightly AFTER text starts appearing
    },
  },
};

const Hero = () => {
  return (
    // Removed the overall variants from Section itself, applying them to inner content
    <section
      id="hero"
      className="section-padding !pt-24 md:!pt-32 lg:!pt-40 !justify-start md:!justify-center min-h-screen flex flex-col"
    >
      <div // Changed from motion.div to regular div - main animation applied to children below
        className="max-w-4xl mx-auto text-center md:text-left flex flex-col md:flex-row items-center gap-8 md:gap-12"
        // No variants here directly anymore
      >
        {/* Text Content - Animated Separately */}
        <motion.div
          className="flex-1 order-2 md:order-1"
          variants={textContainerVariants} // Apply text container variants
          initial="hidden"
          animate="visible" // Start text animation
        >
          <motion.p
            variants={textItemVariants}
            className="text-secondary font-mono mb-2 text-sm md:text-base"
          >
            Hi, my name is
          </motion.p>
          <motion.h1
            variants={textItemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-lightslate mb-3"
          >
            {profile.name}.
          </motion.h1>
          <motion.h2
            variants={textItemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate mb-6"
          >
            {profile.title}.
          </motion.h2>
          <motion.p
            variants={textItemVariants}
            className="text-slate max-w-xl mx-auto md:mx-0 mb-8 text-base md:text-lg leading-relaxed"
          >
            {profile.summary}
          </motion.p>
          <motion.div variants={textItemVariants}>
            {/* Buttons remain the same */}
            <ScrollLink
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="button-primary mr-4"
            >
              View My Work
            </ScrollLink>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary !border-slate !text-slate hover:!bg-slate/10"
            >
              Resume
            </a>
          </motion.div>
        </motion.div>

        {/* Image */}
        {profile.imageUrl && (
          <motion.div
            className="order-1 md:order-2 w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 flex-shrink-0"
            variants={imageZoomVariants} // Use the NEW image zoom variants
            initial="hidden" // Start hidden (small and transparent)
            animate="visible" // Animate to visible (normal size, opaque)
          >
            <img
              src={profile.imageUrl}
              alt={profile.name}
              className="rounded-full object-cover w-full h-full border-4 border-secondary/50 shadow-xl"
            />
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Hero;
