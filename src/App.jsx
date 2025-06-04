import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
// import About from './sections/About'; // If you create a separate About section
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Education from "./sections/Education";
import Certifications from "./sections/Certifications";
import Footer from "./components/Footer";

function App() {
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
        {/* Add Contact section if needed */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
