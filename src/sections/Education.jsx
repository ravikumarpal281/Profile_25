import React from "react";
import { motion } from "framer-motion";
import Section from "../components/Section";
import TimelineItem from "../components/TimelineItem"; // Reuse TimelineItem
import { education } from "../data/portfolioData";

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const Education = () => {
  return (
    <Section id="education" title="Education">
      <motion.div
        className="max-w-3xl mx-auto relative"
        variants={listVariants}
        // Parent Section handles initial/whileInView
      >
        {education.map((edu, index) => (
          <TimelineItem
            key={index}
            title={edu.degree}
            subtitle={edu.institution}
            years={edu.years}
            description={edu.description} // Can pass description if available
            isLast={index === education.length - 1}
          />
        ))}
      </motion.div>
    </Section>
  );
};

export default Education;
