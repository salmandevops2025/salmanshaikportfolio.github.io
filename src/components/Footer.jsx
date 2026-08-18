import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Terminal, Github, Linkedin, Mail, Phone, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer = () => {
  const scrollToTop = () => {
    if (window.lenis) {
      window.lenis.scrollTo(0);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-surface border-t border-border pt-16 pb-12 overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-border">
          {/* Col 1: Bio */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary via-secondary to-accent p-[1px]">
                <div className="w-full h-full bg-background rounded-[7px] flex items-center justify-center">
                  <Terminal className="w-4 h-4 text-primary" />
                </div>
              </div>
              <span className="font-heading font-bold text-xl text-white">
                Salman Shaik
              </span>
            </div>
            <p className="text-muted text-sm max-w-md leading-relaxed">
              Senior Conversational AI Developer, Cloud Engineer & DevOps Specialist with 3.5+ years of experience building enterprise chatbots, Google CCAI integrations, Vertex AI assistants, and AWS/GCP cloud automation pipelines.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 rounded-lg bg-card border border-border flex items-center justify-center text-muted hover:text-primary hover:border-primary/40 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-card border border-border flex items-center justify-center text-muted hover:text-primary hover:border-primary/40 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Email"
                className="w-9 h-9 rounded-lg bg-card border border-border flex items-center justify-center text-muted hover:text-primary hover:border-primary/40 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={`tel:${personalInfo.phone}`}
                aria-label="Phone"
                className="w-9 h-9 rounded-lg bg-card border border-border flex items-center justify-center text-muted hover:text-primary hover:border-primary/40 transition-colors"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="font-heading font-bold text-white text-sm tracking-wider uppercase mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-muted">
              <li>
                <a href="#about" className="hover:text-primary transition-colors">About Story</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-primary transition-colors">Technical Skills</a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">Enterprise Services</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-primary transition-colors">Featured Projects</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-primary transition-colors">Career Timeline</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Specializations */}
          <div>
            <h4 className="font-heading font-bold text-white text-sm tracking-wider uppercase mb-4">
              Core Tech
            </h4>
            <ul className="space-y-2.5 text-sm text-muted font-mono text-xs">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" /> Google Dialogflow CX
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary" /> Vertex AI & Bedrock
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" /> AWS & GCP Infrastructure
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" /> Kubernetes & Terraform
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary" /> Python & REST APIs
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
          <div className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} Salman Shaik. Built with React 19, Tailwind CSS & Framer Motion.</span>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="group px-4 py-2 rounded-full glass-card border border-border hover:border-primary/40 text-muted hover:text-white flex items-center gap-2 transition-all shadow-[0_0_15px_rgba(0,229,255,0.1)]"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-primary group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
