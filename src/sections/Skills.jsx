import React, { useMemo } from "react";
import { motion } from "framer-motion";
import Section from "../components/Section";
import SkillCard from "../components/SkillCard";
import { skills } from "../data/portfolioData";

// Animation variants for the grid container within each category
const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Stagger the appearance of each skill card in the grid
    },
  },
};

// Animation variants for individual SkillCards (optional, simpler animation than hover)
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const Skills = () => {
  // Group skills by category using useMemo for efficiency
  const groupedSkills = useMemo(() => {
    return skills.reduce((acc, skill) => {
      const category = skill.category || "Other"; // Default category if none provided
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(skill);
      return acc;
    }, {});
  }, []); // Dependency array is empty as 'skills' import is static

  // Define a preferred order for categories (optional)
  const categoryOrder = [
    "Frontend",
    "Backend",
    "Cloud & DevOps",
    "Databases",
    "CI/CD",
    "Observability",
    "Other",
  ];

  // Get sorted category keys based on the defined order
  const sortedCategories = Object.keys(groupedSkills).sort((a, b) => {
    const indexA = categoryOrder.indexOf(a);
    const indexB = categoryOrder.indexOf(b);
    // Handle categories not in the predefined order (place them at the end)
    if (indexA === -1 && indexB === -1) return a.localeCompare(b); // Alphabetical sort for others
    if (indexA === -1) return 1; // a comes after b
    if (indexB === -1) return -1; // b comes after a
    return indexA - indexB; // Sort based on predefined order
  });

  return (
    <Section id="skills" title="Technical Skills">
      <div className="max-w-6xl mx-auto space-y-12 md:space-y-16">
        {" "}
        {/* Add vertical space between categories */}
        {sortedCategories.map((category) => (
          <motion.div // Optional: animate each category section wrapper
            key={category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl md:text-2xl font-semibold text-lightslate mb-6 text-center sm:text-left">
              {category} <span className="highlight">.</span>
            </h3>
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6" // Adjust grid columns as needed
              variants={gridVariants}
              // Let the parent motion.div handle initial/whileInView for the category
            >
              {groupedSkills[category].map((skill, index) => (
                // Pass itemVariants to SkillCard if you want individual animation beyond hover
                <SkillCard
                  key={index}
                  {...skill} // Spread skill props (name, Icon, type, etc.)
                  // Optional: Apply itemVariants for individual entry animation
                  // variants={itemVariants}
                />
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
