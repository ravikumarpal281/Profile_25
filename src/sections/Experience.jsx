import React from "react";
import { motion } from "framer-motion";
import Section from "../components/Section";
import TimelineItem from "../components/TimelineItem";
import { experiences } from "../data/portfolioData";

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Stagger animation for each timeline item
    },
  },
};

const Experience = () => {
  return (
    <Section id="experience" title="Work Experience">
      <motion.div
        className="max-w-3xl mx-auto relative" // Relative for timeline line positioning
        variants={listVariants}
        // Parent Section handles initial/whileInView
      >
        {experiences.map((exp, index) => (
          <TimelineItem
            key={index}
            title={exp.role}
            subtitle={exp.company}
            years={exp.years}
            description={exp.description}
            isLast={index === experiences.length - 1}
          />
        ))}
      </motion.div>
    </Section>
  );
};

export default Experience;
