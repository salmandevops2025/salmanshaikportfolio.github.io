import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, CheckCircle, ExternalLink } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import TiltCard from '../components/TiltCard';
import { certificationsData } from '../data/portfolioData';

export const Certifications = () => {
  return (
    <section id="certifications" className="py-24 relative z-10 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Verified Expertise"
          title="Cloud & AI Certifications"
          subtitle="Official industry certifications validating specialized competencies in Amazon Web Services, Google Cloud Platform, and Microsoft Azure."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <TiltCard maxTilt={10} className="h-full">
                <div className="glass-card glass-card-hover rounded-2xl p-6 h-full flex flex-col justify-between border border-border group relative overflow-hidden">
                  {/* Subtle Background Glow */}
                  <div
                    className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-2xl opacity-20 pointer-events-none"
                    style={{ backgroundColor: cert.color }}
                  />

                  <div className="space-y-4 relative z-10">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div
                        className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center font-bold text-lg shadow-inner group-hover:scale-110 transition-transform"
                        style={{ color: cert.color }}
                      >
                        <Award className="w-6 h-6" />
                      </div>
                      <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-primary/10 text-primary border border-primary/20 flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3 text-accent" /> {cert.badge}
                      </span>
                    </div>

                    {/* Title & Issuer */}
                    <div>
                      <h3 className="font-heading font-bold text-lg text-white group-hover:text-primary transition-colors">
                        {cert.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs font-semibold text-muted">{cert.issuer}</span>
                        <span className="text-muted">•</span>
                        <span className="text-xs font-mono font-bold text-secondary">{cert.code}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {cert.description}
                    </p>
                  </div>

                  {/* Card Footer */}
                  <div className="pt-4 mt-4 border-t border-border/60 flex items-center justify-between text-xs text-muted relative z-10">
                    <span className="flex items-center gap-1 text-accent font-semibold">
                      <CheckCircle className="w-3.5 h-3.5" /> Active Credential
                    </span>
                    <span className="font-mono text-[11px] text-muted">GCP / AWS / Azure</span>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
