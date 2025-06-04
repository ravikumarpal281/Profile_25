import React from "react";
import { motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const TimelineItem = ({
  title,
  subtitle,
  years,
  description,
  isLast = false,
}) => {
  return (
    <motion.div
      className="relative pl-8 sm:pl-12 pb-10" // Padding left for the line and dot
      variants={itemVariants} // Will be animated by parent stagger
    >
      {/* Timeline Line & Dot */}
      {!isLast && (
        <div className="absolute left-0 sm:left-2 top-1 bottom-0 w-0.5 bg-darkslate"></div>
      )}
      <div className="absolute left-[-4px] sm:left-[0px] top-[5px] w-4 h-4 bg-secondary rounded-full border-4 border-primary"></div>

      {/* Content */}
      <h3 className="text-lg md:text-xl font-semibold text-lightslate mb-1">
        {title}
      </h3>
      <p className="text-base text-secondary mb-1 font-medium">{subtitle}</p>
      <p className="text-sm text-slate font-mono mb-3">{years}</p>
      {Array.isArray(description) ? (
        <ul className="list-disc list-outside pl-5 text-slate space-y-1 text-sm md:text-base">
          {description.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      ) : (
        <p className="text-slate text-sm md:text-base">{description}</p>
      )}
    </motion.div>
  );
};

export default TimelineItem;
