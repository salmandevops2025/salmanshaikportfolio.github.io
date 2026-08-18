import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download, Terminal, Send } from 'lucide-react';
import MagneticButton from './MagneticButton';
import { personalInfo } from '../data/portfolioData';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Services', href: '#services' },
  { name: 'Experience', href: '#experience' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // ScrollSpy active section detection
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      if (window.lenis) {
        window.lenis.scrollTo(element, { offset: -80 });
      } else {
        const yOffset = -80;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-nav py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          onClick={(e) => handleNavClick(e, '#')}
          className="flex items-center gap-2.5 group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary via-secondary to-accent p-[1px] shadow-[0_0_20px_rgba(0,229,255,0.3)]">
            <div className="w-full h-full bg-background rounded-[11px] flex items-center justify-center group-hover:bg-transparent transition-colors">
              <Terminal className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-lg text-white tracking-tight leading-none group-hover:text-primary transition-colors">
              Salman Shaik
            </span>
            <span className="text-[10px] font-mono text-muted tracking-wider uppercase mt-1">
              Cloud & AI Engineer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-card/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-border">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-primary font-semibold'
                    : 'text-muted hover:text-white hover:bg-card-hover/50'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-primary/10 border border-primary/30 rounded-full z-[-1]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* CTA Buttons & Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={personalInfo.resumeUrl}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-muted hover:text-white border border-border hover:border-primary/40 bg-card/60 hover:bg-card-hover flex items-center gap-2 transition-all"
          >
            <Download className="w-3.5 h-3.5 text-primary" /> Resume
          </a>

          <MagneticButton
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="px-5 py-2 rounded-xl bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white text-xs font-bold flex items-center gap-2 shadow-[0_0_20px_rgba(0,229,255,0.3)] transition-all"
          >
            <Send className="w-3.5 h-3.5" /> Contact Me
          </MagneticButton>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 rounded-xl bg-card border border-border text-white hover:text-primary focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden glass-card border-b border-border mt-3 overflow-hidden px-4 py-6 space-y-4"
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-4 py-3 rounded-xl text-sm font-medium text-slate-200 hover:text-primary hover:bg-card-hover flex items-center justify-between border border-transparent hover:border-border transition-colors"
                >
                  <span>{link.name}</span>
                  <span className="text-xs text-muted font-mono">→</span>
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-border flex flex-col gap-3">
              <a
                href={personalInfo.resumeUrl}
                className="w-full py-3 rounded-xl border border-border bg-card text-center text-sm font-semibold text-white flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4 text-primary" /> Download Resume
              </a>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-center text-sm font-bold text-white flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,229,255,0.3)]"
              >
                <Send className="w-4 h-4" /> Contact Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
