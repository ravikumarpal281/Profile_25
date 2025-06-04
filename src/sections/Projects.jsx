import React from "react";
import { motion } from "framer-motion";
import Section from "../components/Section";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/portfolioData";

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Stagger the appearance of project cards
    },
  },
};

const Projects = () => {
  return (
    <Section id="projects" title="Featured Projects">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        variants={gridVariants}
        // Parent Section handles initial/whileInView
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            imageUrl={project.imageUrl}
            liveUrl={project.liveUrl}
            repoUrl={project.repoUrl}
          />
        ))}
      </motion.div>
    </Section>
  );
};

export default Projects;
