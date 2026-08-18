import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, Layers, Cpu, Award } from 'lucide-react';

export const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 md:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-background/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl glass-card rounded-2xl border border-border shadow-2xl z-10 overflow-hidden my-8 max-h-[90vh] flex flex-col"
        >
          {/* Header Bar */}
          <div className="relative p-6 md:p-8 border-b border-border bg-gradient-to-r from-card/80 to-surface/90 flex justify-between items-start">
            <div>
              <span className="inline-block px-3 py-1 text-xs font-medium text-primary bg-primary/10 border border-primary/20 rounded-full mb-3">
                {project.category}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white font-heading">
                {project.title}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-muted hover:text-white bg-card-hover hover:bg-primary/20 border border-border rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content Body */}
          <div className="p-6 md:p-8 overflow-y-auto space-y-6 flex-1 text-slate-200">
            {/* Visual Header / Banner */}
            <div className="relative rounded-xl overflow-hidden border border-border bg-surface h-48 md:h-64 flex items-center justify-center bg-gradient-to-br from-primary/10 via-card to-secondary/20">
              <div className="text-center p-6">
                <Layers className="w-14 h-14 text-primary mx-auto mb-3 animate-pulse-slow" />
                <p className="text-sm font-mono text-muted">{project.summary}</p>
              </div>
              {project.stats && (
                <div className="absolute bottom-4 right-4 bg-background/90 backdrop-blur-sm px-3.5 py-1.5 rounded-lg border border-primary/30 text-xs font-semibold text-primary flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-accent" />
                  {project.stats}
                </div>
              )}
            </div>

            {/* Overview */}
            <div>
              <h4 className="text-lg font-bold text-white mb-2 font-heading flex items-center gap-2">
                <Cpu className="w-5 h-5 text-primary" /> Architecture & Implementation
              </h4>
              <p className="text-muted leading-relaxed text-sm md:text-base">
                {project.description}
              </p>
            </div>

            {/* Tech Badges */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-muted mb-3 font-mono">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.2 rounded-md bg-card border border-border text-xs font-medium text-slate-200 hover:border-primary/40 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Deliverables */}
            <div className="space-y-2 pt-2 border-t border-border/60">
              <h4 className="text-sm font-semibold text-white">Key Impact & Deliverables:</h4>
              <ul className="space-y-2 text-sm text-muted">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" /> Enterprise-ready security & performance optimization.
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" /> Fully containerized workflow with automated CI/CD integration.
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" /> High fault-tolerance and automated monitoring alert triggers.
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="p-4 md:p-6 border-t border-border bg-card/90 flex flex-wrap gap-3 justify-end">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg border border-border bg-surface hover:bg-card-hover text-white text-sm font-medium flex items-center gap-2 transition-all"
            >
              <Github className="w-4 h-4" /> View GitHub Repository
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white text-sm font-medium flex items-center gap-2 shadow-[0_0_15px_rgba(0,229,255,0.3)] transition-all"
            >
              <ExternalLink className="w-4 h-4" /> Live Demo / Docs
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectModal;
