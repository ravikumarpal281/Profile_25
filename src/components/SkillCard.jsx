import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react"; // Keep if using Lottie approach

// Example SkillCard setup supporting Lottie/GIF/Icon types (adjust based on your chosen animation approach)
// AND revert sizing for grid layout
const SkillCard = ({
  name,
  Icon,
  type = "icon",
  animationPath,
  animationData,
  variants,
}) => {
  // Added variants prop

  const renderAnimation = () => {
    switch (type) {
      case "lottie":
        const data = animationData ? animationData : undefined;
        const path = !animationData ? animationPath : undefined;
        return (
          <Lottie
            animationData={data}
            path={path}
            loop={true}
            autoplay={true}
            // Adjusted size for taller card
            style={{ width: "60px", height: "60px", marginBottom: "0.75rem" }} // Larger size, use Tailwind margin mb-3
          />
        );
      case "gif":
        return (
          // Adjusted size for taller card
          <div className="relative w-10 h-10 md:w-12 md:h-12 mb-3">
            {Icon && <Icon className="w-full h-full invisible" />}
            <img
              src={animationPath}
              alt={`${name} animation`}
              className="absolute inset-0 w-full h-full object-contain"
            />
          </div>
        );
      case "icon":
      default:
        // Adjusted size for taller card
        return Icon ? (
          <Icon className="w-10 h-10 md:w-12 md:h-12 text-secondary mb-3" />
        ) : null;
    }
  };

  return (
    // Using variants passed from parent grid for staggered entry.
    // Reverted to taller height (h-36 md:h-40) and padding p-4 suitable for grid.
    <motion.div
      className="flex flex-col items-center justify-center text-center p-4 bg-darkslate/30 backdrop-blur-sm rounded-lg shadow-md border border-darkslate hover:border-secondary/50 transition-colors duration-300 w-full h-36 md:h-40 overflow-hidden" // Added overflow-hidden
      variants={variants} // Apply variants from props (for parent stagger)
      whileHover={{ y: -5, scale: 1.05, transition: { duration: 0.2 } }} // Keep hover effect
    >
      <div
        className="flex-shrink-0 flex items-center justify-center"
        style={{ minHeight: "60px" }}
      >
        {" "}
        {/* Ensure min-height for visual consistency */}
        {renderAnimation()}
      </div>
      <div className="flex-grow flex items-center">
        <span className="text-sm md:text-base text-lightslate leading-snug">
          {name}
        </span>
      </div>
    </motion.div>
  );
};

export default SkillCard;
