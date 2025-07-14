import React from "react";
import { motion } from "framer-motion";
import Section from "../components/Section";
import { certifications } from "../data/portfolioData";
import { FaCertificate } from "react-icons/fa"; // Example icon

const listVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const Certifications = () => {
  return (
    <Section id="certifications" title="Certifications & Training">
      <motion.ul
        className="max-w-2xl mx-auto space-y-6"
        variants={listVariants}
        // Parent Section handles initial/whileInView
      >
        {certifications.map((cert, index) => (
          <motion.li
            key={index}
            className="flex items-start space-x-4 p-4 bg-darkslate/30 rounded-md shadow"
            variants={itemVariants}
          >
            <FaCertificate className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-md font-semibold text-lightslate">
                {cert.name}
              </h3>
              <p className="text-sm text-slate">{cert.issuer}</p>
              <p className="text-xs text-slate font-mono mt-1">
                Issued: {cert.year}
              </p>
              {/* Optional: Add credential ID or link if available */}
              {
                <p className="text-xs text-slate font-mono">
                  Credential Id: {cert.credentialId}
                </p>
              }
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </Section>
  );
};

export default Certifications;
