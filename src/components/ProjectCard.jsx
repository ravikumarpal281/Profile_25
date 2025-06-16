import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"; // Icons for links

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ProjectCard = ({
  title,
  description,
  technologies,
  imageUrl,
  liveUrl,
  repoUrl,
}) => {
  return (
    <motion.div
      className="bg-darkslate/50 rounded-lg overflow-hidden shadow-lg flex flex-col transition-transform duration-300 ease-in-out hover:-translate-y-2 group"
      variants={cardVariants} // Will be animated by parent stagger
    >
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" // Adding group-hover effect
      />

      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-lightslate mb-2">{title}</h3>
        <p className="text-slate text-sm mb-4 flex-grow">{description}</p>

        {/* Technologies */}
        <div className="mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="inline-block bg-primary text-secondary/80 rounded-full px-3 py-1 text-xs font-mono mr-2 mb-2"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-auto flex justify-end space-x-4">
          {repoUrl && repoUrl !== "#" && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate hover:text-secondary transition-colors duration-200"
              aria-label={`${title} GitHub Repository`}
            >
              <FaGithub className="w-5 h-5" />
            </a>
          )}
          {liveUrl && liveUrl !== "#" && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate hover:text-secondary transition-colors duration-200"
              aria-label={`${title} Live Demo`}
            >
              <FaExternalLinkAlt className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
