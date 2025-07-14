// src/sections/Contact.jsx
import React from "react";
import Section from "../components/Section";
import { motion } from "framer-motion";

const Contact = () => {
  const email = "ravikumarpal281@gmail.com"; // Replace with your email from portfolioData

  return (
    <Section
      id="contact"
      title="Get In Touch"
      className="!min-h-fit text-center" // Override min-height for a shorter section
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="max-w-xl mx-auto"
      >
        <p className="text-slate mb-8">
          I'm currently open to new opportunities and my inbox is always open.
          Whether you have a question or just want to say hi, I'll do my best to
          get back to you!
        </p>
        <a
          href={`mailto:${email}`}
          target="_blank"
          className="button-primary text-base"
        >
          Say Hello
        </a>
      </motion.div>
    </Section>
  );
};

export default Contact;
