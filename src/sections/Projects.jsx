import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Layers, Award, Sparkles, Eye } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import TiltCard from '../components/TiltCard';
import ProjectModal from '../components/ProjectModal';
import { projectsData } from '../data/portfolioData';

const filterCategories = ['All', 'Conversational AI', 'Cloud & DevOps', 'Full Stack'];

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 relative z-10 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Featured Work"
          title="Production Projects & Architectures"
          subtitle="Explore real-world projects featuring Dialogflow CX bots, Document AI processing, Terraform infrastructure, and AWS/GCP DevOps pipelines."
        />

        {/* Filter Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {filterCategories.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`relative px-5 py-2.5 rounded-full text-xs font-semibold font-heading tracking-wide transition-all ${
                  isActive
                    ? 'text-white bg-gradient-to-r from-primary to-secondary shadow-[0_0_20px_rgba(0,229,255,0.3)]'
                    : 'text-muted glass-card hover:text-white hover:border-border'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <TiltCard key={project.id} maxTilt={8} className="h-full">
                <div className="glass-card glass-card-hover rounded-2xl border border-border flex flex-col justify-between h-full overflow-hidden group">
                  {/* Card Visual Header */}
                  <div className="relative h-48 bg-gradient-to-br from-primary/10 via-card to-secondary/20 p-6 flex flex-col justify-between overflow-hidden border-b border-border">
                    <div className="flex items-center justify-between relative z-10">
                      <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-background/80 backdrop-blur-md text-primary border border-primary/30">
                        {project.category}
                      </span>
                      {project.stats && (
                        <span className="px-2.5 py-0.5 rounded-md text-[10px] font-semibold bg-accent/15 text-accent border border-accent/30 flex items-center gap-1">
                          <Award className="w-3 h-3" /> {project.stats}
                        </span>
                      )}
                    </div>

                    <div className="relative z-10">
                      <h3 className="font-heading font-bold text-xl text-white group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                    </div>

                    {/* Hover Overlay Button */}
                    <div className="absolute inset-0 bg-background/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 z-20">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="px-4 py-2 rounded-xl bg-primary text-background font-bold text-xs flex items-center gap-1.5 shadow-[0_0_15px_#00E5FF]"
                      >
                        <Eye className="w-4 h-4" /> View Details
                      </button>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                    <p className="text-muted text-xs sm:text-sm leading-relaxed line-clamp-3">
                      {project.summary}
                    </p>

                    {/* Tech Badges */}
                    <div className="space-y-4 pt-2">
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.slice(0, 4).map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 rounded-md bg-surface border border-border text-[11px] font-mono text-muted"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="px-2 py-1 rounded-md bg-surface border border-border text-[11px] font-mono text-primary font-bold">
                            +{project.technologies.length - 4}
                          </span>
                        )}
                      </div>

                      {/* Action Links */}
                      <div className="pt-4 border-t border-border/60 flex items-center justify-between">
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="text-xs font-bold text-primary hover:text-secondary transition-colors"
                        >
                          Read Case Study →
                        </button>

                        <div className="flex items-center gap-2">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-card hover:bg-card-hover border border-border text-muted hover:text-white transition-colors"
                            aria-label="GitHub Source"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-card hover:bg-card-hover border border-border text-muted hover:text-primary transition-colors"
                            aria-label="Live Demo"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Detail Modal Overlay */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
};

export default Projects;
