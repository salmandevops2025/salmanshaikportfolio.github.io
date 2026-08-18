import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cloud, Cpu, Bot, Code, Database, Sparkles, Layers, CheckCircle2 } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import TiltCard from '../components/TiltCard';
import { skillsData } from '../data/portfolioData';

const categories = [
  { key: 'Conversational AI', icon: Bot, label: 'Conversational AI' },
  { key: 'Cloud Platforms', icon: Cloud, label: 'Cloud Platforms' },
  { key: 'DevOps & Automation', icon: Cpu, label: 'DevOps & Automation' },
  { key: 'Programming & Scripting', icon: Code, label: 'Programming & Scripting' },
  { key: 'Databases & Storage', icon: Database, label: 'Databases & Storage' },
];

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('Conversational AI');

  return (
    <section id="skills" className="py-24 relative z-10 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Technical Mastery"
          title="Skills & Technologies"
          subtitle="A comprehensive overview of my technical toolset across AI agents, multi-cloud platforms, container orchestration, and full-stack development."
        />

        {/* Category Navigation Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`relative px-5 py-3 rounded-xl font-heading text-xs sm:text-sm font-semibold flex items-center gap-2.5 transition-all duration-300 ${
                  isActive
                    ? 'text-white bg-gradient-to-r from-primary/30 to-secondary/30 border border-primary/50 shadow-[0_0_20px_rgba(0,229,255,0.25)]'
                    : 'text-muted glass-card hover:text-white hover:border-border'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-primary' : 'text-muted'}`} />
                <span>{cat.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="skillsTabActive"
                    className="absolute inset-0 border border-primary rounded-xl pointer-events-none"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Animated Skill Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {skillsData[activeCategory]?.map((skill, idx) => (
              <TiltCard key={skill.name} maxTilt={10} className="h-full">
                <div className="glass-card glass-card-hover rounded-2xl p-6 h-full flex flex-col justify-between space-y-4 border border-border">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center text-primary shadow-inner">
                        <Sparkles className="w-6 h-6 text-primary animate-pulse-slow" />
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-white text-base">
                          {skill.name}
                        </h4>
                        <span className="text-[11px] font-mono text-muted uppercase tracking-wider">
                          {skill.category}
                        </span>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold text-primary bg-primary/10 border border-primary/20">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Level Progress Bar */}
                  <div className="space-y-2 pt-2">
                    <div className="h-2 w-full bg-card rounded-full overflow-hidden border border-border/40">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: idx * 0.08 }}
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                      />
                    </div>
                    <div className="flex justify-between items-center text-[11px] text-muted">
                      <span>Proficiency</span>
                      <span className="text-accent flex items-center gap-1 font-semibold">
                        <CheckCircle2 className="w-3 h-3" /> Production Verified
                      </span>
                    </div>
                  </div>
                </div>
              </TiltCard>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills;
