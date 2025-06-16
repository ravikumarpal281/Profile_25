import React from "react";
import { motion } from "framer-motion";
import Section from "../components/Section";
import { profile } from "../data/portfolioData"; // Import your profile data

const About = () => {
  return (
    <Section id="about" title="About Me">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Left Column: Text Content */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          {/* We can split the summary for better formatting if needed, or just display it */}
          <p className="text-slate text-base md:text-lg leading-relaxed mb-4">
            {profile.summary}
          </p>
          <p className="text-slate text-base md:text-lg leading-relaxed">
            When I'm not coding, you can find me exploring new technologies,
            contributing to open-source projects, or hiking in the great
            outdoors. I believe in the power of collaboration and am always
            eager to connect with fellow developers and tech enthusiasts.
          </p>
        </motion.div>

        {/* Right Column: Image */}
        <motion.div
          className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img
            src={profile.imageUrl}
            alt={profile.name}
            className="rounded-lg object-cover w-full h-full shadow-xl transition-transform duration-300 hover:scale-105"
          />
        </motion.div>
      </div>
    </Section>
  );
};

export default About;
