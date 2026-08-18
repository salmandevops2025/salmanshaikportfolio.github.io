import React from 'react';
import useLenis from './hooks/useLenis';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import BackgroundCanvas from './components/BackgroundCanvas';

import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Services from './sections/Services';
import Experience from './sections/Experience';
import Certifications from './sections/Certifications';
import Projects from './sections/Projects';
import Stats from './sections/Stats';
import Contact from './sections/Contact';

export function App() {
  // Initialize Lenis smooth scroll
  useLenis();

  return (
    <div className="min-h-screen bg-background text-white relative selection:bg-primary/30 selection:text-primary">
      {/* Top Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Dynamic Magnetic Cursor Follower */}
      <CustomCursor />

      {/* Subtle Particle Ambient Canvas */}
      <BackgroundCanvas />

      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Experience />
        <Certifications />
        <Projects />
        <Stats />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
