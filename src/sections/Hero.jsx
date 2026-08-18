import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Send, Github, Linkedin, Mail, Sparkles, ChevronDown, Bot, Cloud, Cpu } from 'lucide-react';
import MagneticButton from '../components/MagneticButton';
import { personalInfo, heroRoles } from '../data/portfolioData';
import { fadeInUp, staggerContainer } from '../utils/animations';

export const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect logic
  useEffect(() => {
    const currentRole = heroRoles[currentRoleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % heroRoles.length);
      } else {
        setDisplayText(
          isDeleting
            ? currentRole.substring(0, displayText.length - 1)
            : currentRole.substring(0, displayText.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex]);

  const handleScrollToNext = () => {
    const aboutElem = document.getElementById('about');
    if (aboutElem) {
      if (window.lenis) {
        window.lenis.scrollTo(aboutElem, { offset: -80 });
      } else {
        aboutElem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-hero-gradient"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto space-y-8"
        >
          {/* Status Badge */}
          <motion.div variants={fadeInUp} className="inline-block">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-card border border-primary/30 shadow-[0_0_25px_rgba(0,229,255,0.2)]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
              </span>
              <span className="text-xs font-semibold text-slate-200 tracking-wide">
                Available for AI & Cloud Opportunities
              </span>
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.div variants={fadeInUp} className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-heading tracking-tight text-white leading-[1.1]">
              Hi, I'm <span className="text-gradient-cyan">{personalInfo.name}</span>
            </h1>

            {/* Typewriter Role Line */}
            <div className="h-12 sm:h-16 flex items-center justify-center">
              <p className="text-xl sm:text-3xl font-heading font-medium text-slate-300">
                I am a{' '}
                <span className="text-gradient-purple font-bold border-b-2 border-primary/50 pb-1">
                  {displayText}
                </span>
                <span className="animate-pulse text-primary ml-1">|</span>
              </p>
            </div>
          </motion.div>

          {/* Subtitle / Bio summary */}
          <motion.p
            variants={fadeInUp}
            className="text-base sm:text-xl text-muted max-w-2xl mx-auto leading-relaxed"
          >
            4+ years of experience delivering enterprise AI, Conversational AI & Cloud solutions using <strong className="text-white font-semibold">Google CCAI, DocAI & CI/CD automation</strong> at TCS.
          </motion.p>

          {/* Tech Pill Badges */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap items-center justify-center gap-2.5 pt-2"
          >
            <span className="px-3.5 py-1.5 rounded-full bg-card/80 border border-primary/20 text-xs font-mono text-primary flex items-center gap-1.5">
              <Bot className="w-3.5 h-3.5" /> Dialogflow CX & Google CCAI
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-card/80 border border-secondary/20 text-xs font-mono text-secondary flex items-center gap-1.5">
              <Cloud className="w-3.5 h-3.5" /> 10x GCP & AWS Certified
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-card/80 border border-accent/20 text-xs font-mono text-accent flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5" /> GKE, Jenkins & SonarQube
            </span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap items-center justify-center gap-4 pt-4"
          >
            <MagneticButton
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold text-sm shadow-[0_0_30px_rgba(0,229,255,0.35)] hover:shadow-[0_0_40px_rgba(124,58,237,0.5)] transition-all flex items-center gap-2.5 group"
            >
              <span>Contact Me</span>
              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </MagneticButton>

            <a
              href={personalInfo.resumeUrl}
              className="px-8 py-4 rounded-xl glass-card border border-border hover:border-primary/50 text-white font-semibold text-sm hover:bg-card-hover transition-all flex items-center gap-2.5 group shadow-[0_0_20px_rgba(255,255,255,0.05)]"
            >
              <Download className="w-4 h-4 text-primary group-hover:translate-y-0.5 transition-transform" />
              <span>Download Resume</span>
            </a>
          </motion.div>

          {/* Social Icons Bar */}
          <motion.div
            variants={fadeInUp}
            className="flex items-center justify-center gap-4 pt-6"
          >
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl glass-card border border-border text-muted hover:text-primary hover:border-primary/40 transition-all hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl glass-card border border-border text-muted hover:text-primary hover:border-primary/40 transition-all hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-3 rounded-xl glass-card border border-border text-muted hover:text-primary hover:border-primary/40 transition-all hover:scale-110"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Down Scroll Indicator */}
      <motion.button
        onClick={handleScrollToNext}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 p-3 text-muted hover:text-primary focus:outline-none transition-colors"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.button>
    </section>
  );
};

export default Hero;
