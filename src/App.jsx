import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
// import About from './sections/About'; // If you create a separate About section
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Education from "./sections/Education";
import Certifications from "./sections/Certifications";
import Footer from "./components/Footer";
import Contact from "./sections/Contacts";
import { Analytics } from "@vercel/analytics/react";
import { scroller } from "react-scroll";

function App() {
  useEffect(() => {
    // This code runs when the component mounts
    const hash = window.location.hash.substring(1); // Get the hash, remove '#'

    if (hash) {
      // Small timeout to ensure all sections are rendered before scrolling
      setTimeout(() => {
        scroller.scrollTo(hash, {
          duration: 800,
          delay: 0,
          smooth: "easeInOutQuart",
          offset: -70, // Match your navbar's offset
        });
      }, 100);
    }
  }, []);
  return (
    <div className="bg-primary min-h-screen">
      <Navbar />
      <main>
        <Hero />
        {/* <About /> */} {/* Optional */}
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
