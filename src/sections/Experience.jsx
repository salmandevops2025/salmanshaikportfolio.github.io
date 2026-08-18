import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2, Award, Terminal } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { experienceData } from '../data/portfolioData';

export const Experience = () => {
  return (
    <section id="experience" className="py-24 relative z-10 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Work History"
          title="Professional Experience"
          subtitle="My track record delivering enterprise AI applications, Cloud DevOps pipelines, and Google CCAI infrastructure."
        />

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-gradient-to-b from-primary via-secondary to-accent opacity-40" />

          <div className="space-y-12">
            {experienceData.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Badge Dot */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-background border-2 border-primary items-center justify-center shadow-[0_0_15px_#00E5FF] z-10">
                    <Briefcase className="w-4 h-4 text-primary" />
                  </div>

                  {/* Content Card */}
                  <div className="w-full md:w-[calc(50%-2.5rem)]">
                    <div className="glass-card glass-card-hover rounded-2xl p-6 border border-border space-y-4">
                      {/* Period Badge & Type */}
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/80 pb-3">
                        <div className="flex items-center gap-2 font-mono text-xs text-primary font-bold">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{item.period}</span>
                        </div>
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-secondary/15 text-secondary border border-secondary/30">
                          {item.type}
                        </span>
                      </div>

                      {/* Company & Title */}
                      <div>
                        <h3 className="font-heading font-bold text-xl text-white">
                          {item.role}
                        </h3>
                        <div className="flex items-center gap-2 text-sm font-semibold text-primary mt-1">
                          <span>{item.company}</span>
                          <span className="text-muted">•</span>
                          <span className="text-muted font-normal text-xs flex items-center gap-1">
                            <MapPin className="w-3 h-3" /> {item.location}
                          </span>
                        </div>
                      </div>

                      {/* Achievements List */}
                      <ul className="space-y-2 text-xs md:text-sm text-slate-300">
                        {item.achievements.map((ach, aIdx) => (
                          <li key={aIdx} className="flex items-start gap-2 leading-relaxed">
                            <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                            <span>{ach}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border/60">
                        {item.tech.map((t, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 rounded-md bg-card border border-border text-[11px] font-mono text-muted"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
