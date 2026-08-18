import React from 'react';
import { motion } from 'framer-motion';
import {
  Bot,
  MessageSquareCode,
  Mic,
  Infinity as InfinityIcon,
  GitBranch,
  CloudUpload,
  Brain,
  Code,
  Sparkles,
  Server,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import TiltCard from '../components/TiltCard';
import { servicesData } from '../data/portfolioData';

const iconMap = {
  Bot: Bot,
  MessageSquareCode: MessageSquareCode,
  Mic: Mic,
  Infinity: InfinityIcon,
  GitBranch: GitBranch,
  CloudUpload: CloudUpload,
  Brain: Brain,
  Code: Code,
  Sparkles: Sparkles,
  Server: Server,
};

export const Services = () => {
  return (
    <section id="services" className="py-24 relative z-10 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="What I Offer"
          title="Enterprise Services & Solutions"
          subtitle="Specialized solutions engineered for high scalability, fault tolerance, intelligent bot interactions, and multi-cloud continuous deployment."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, idx) => {
            const IconComponent = iconMap[service.icon] || Bot;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
              >
                <TiltCard maxTilt={8} className="h-full">
                  <div className="glass-card glass-card-hover rounded-2xl p-7 h-full flex flex-col justify-between border border-border group">
                    <div className="space-y-4">
                      {/* Icon & Title */}
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 via-secondary/20 to-card border border-primary/30 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <span className="text-[10px] font-mono text-muted uppercase px-2.5 py-1 rounded-md bg-card border border-border">
                          Service 0{idx + 1}
                        </span>
                      </div>

                      <h3 className="font-heading font-bold text-xl text-white group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>

                      <p className="text-muted text-sm leading-relaxed">
                        {service.description}
                      </p>

                      {/* Feature Bullet Points */}
                      <div className="space-y-2 pt-2 border-t border-border/60">
                        {service.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Badges Footer */}
                    <div className="pt-6 border-t border-border/80 space-y-3">
                      <div className="flex flex-wrap gap-1.5">
                        {service.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-0.5 rounded-md bg-surface border border-border text-[11px] font-mono text-muted"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <a
                        href="#contact"
                        className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:text-secondary pt-2 transition-colors group-hover:translate-x-1"
                      >
                        <span>Inquire About This Service</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
