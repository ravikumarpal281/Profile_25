import React from "react";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      // Optional: Add a small delay or stagger children if needed here
    },
  },
};

const Section = ({
  children,
  id,
  title,
  className = "",
  titleClassName = "",
}) => {
  return (
    <motion.section
      id={id}
      className={`section-padding min-h-screen flex flex-col justify-center ${className}`}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible" // Trigger animation when section enters viewport
      viewport={{ once: true, amount: 0.1 }} // Trigger once, when 10% is visible
    >
      {title && (
        <h2
          className={`text-center mb-12 md:mb-16 text-3xl md:text-4xl font-bold text-lightslate ${titleClassName}`}
        >
          {title} <span className="highlight">.</span>
        </h2>
      )}
      {children}
    </motion.section>
  );
};

export default Section;
