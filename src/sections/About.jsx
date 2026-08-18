import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Award, Bot, Cloud, Cpu, CheckCircle, ShieldCheck, Terminal, GraduationCap } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import TiltCard from '../components/TiltCard';
import { aboutData, personalInfo, educationData } from '../data/portfolioData';

export const About = () => {
  return (
    <section id="about" className="py-24 relative z-10 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="About Me"
          title="Bridging Enterprise AI & Cloud DevOps Infrastructure"
          subtitle="4+ years of hands-on expertise building production conversational bots, Google DocAI extraction schemas, GKE container pipelines, and automated CI/CD at Tata Consultancy Services (TCS)."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Experience Card & Highlights */}
          <div className="lg:col-span-5 space-y-6">
            <TiltCard className="rounded-2xl p-[1px] bg-gradient-to-br from-primary/40 via-secondary/20 to-border shadow-[0_0_30px_rgba(0,229,255,0.15)]">
              <div className="bg-card/90 backdrop-blur-xl rounded-2xl p-8 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary">
                    <span className="font-heading font-extrabold text-2xl">4+</span>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl text-white">Years of Experience</h3>
                    <p className="text-sm font-mono text-muted">Enterprise AI, GCP & DevOps</p>
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-border/80">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted">Current Role:</span>
                    <span className="font-semibold text-white">DevOps Engineer at TCS</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted">Primary Client:</span>
                    <span className="font-semibold text-primary">Google (CCAI & DocAI)</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted">Cloud Ecosystems:</span>
                    <span className="font-semibold text-secondary">GCP | AWS | Azure</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted">Location:</span>
                    <span className="font-semibold text-white">{personalInfo.location}</span>
                  </div>
                </div>

                <div className="pt-2">
                  <div className="p-4 rounded-xl bg-surface border border-border flex items-center gap-3">
                    <ShieldCheck className="w-8 h-8 text-accent flex-shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-white">10x Certified Cloud Engineer</p>
                      <p className="text-[11px] text-muted">GCP Cloud Architect, DevOps & AWS Certified</p>
                    </div>
                  </div>
                </div>
              </div>
            </TiltCard>

            {/* Quick Skills Badges */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 rounded-xl glass-card border border-border text-center space-y-1">
                <Bot className="w-6 h-6 text-primary mx-auto" />
                <h4 className="font-heading font-bold text-sm text-white">Conversational AI</h4>
                <p className="text-xs text-muted">Google CCAI & Dialogflow CX</p>
              </div>
              <div className="p-4 rounded-xl glass-card border border-border text-center space-y-1">
                <Cloud className="w-6 h-6 text-secondary mx-auto" />
                <h4 className="font-heading font-bold text-sm text-white">Cloud DevOps</h4>
                <p className="text-xs text-muted">GKE & Jenkins CI/CD</p>
              </div>
            </div>

            {/* Education Section */}
            <div className="space-y-4 pt-4">
              <h4 className="font-heading font-bold text-white text-lg flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-primary" /> Education
              </h4>

              <div className="space-y-3">
                {educationData.map((edu, idx) => (
                  <div key={idx} className="p-4 rounded-xl glass-card border border-border space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-primary font-bold">{edu.period}</span>
                      <span className="text-xs font-mono font-bold text-accent bg-accent/10 px-2 py-0.5 rounded-md border border-accent/20">
                        {edu.score}
                      </span>
                    </div>
                    <h5 className="font-heading font-bold text-sm text-white">{edu.degree}</h5>
                    <p className="text-xs text-muted">{edu.institution}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Story & Career Timeline */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold font-heading text-white flex items-center gap-2.5">
                <Terminal className="w-6 h-6 text-primary" /> Professional Story
              </h3>
              <p className="text-muted text-base leading-relaxed">
                {aboutData.story}
              </p>
            </div>

            {/* Core Competency Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {aboutData.highlights.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-4 rounded-xl bg-card/60 border border-border hover:border-primary/30 transition-all flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-heading font-semibold text-sm text-white">{item.title}</h4>
                    <p className="text-xs text-muted mt-1">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Interactive Timeline Preview */}
            <div className="pt-6 border-t border-border">
              <h4 className="font-heading font-bold text-white text-lg mb-6 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-primary" /> Career Journey Timeline
              </h4>

              <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-gradient-to-b before:from-primary before:via-secondary before:to-transparent">
                {aboutData.milestones.map((m, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.15 }}
                    className="relative pl-10"
                  >
                    <div className="absolute left-0 top-1 w-7 h-7 rounded-full bg-background border-2 border-primary flex items-center justify-center shadow-[0_0_10px_#00E5FF]">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>

                    <div className="p-4 rounded-xl bg-card border border-border">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="font-mono text-xs font-bold text-primary">{m.year}</span>
                        <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-primary/10 text-primary">
                          TCS Role
                        </span>
                      </div>
                      <h5 className="font-heading font-bold text-sm text-white">{m.role}</h5>
                      <p className="text-xs text-muted mt-1 leading-relaxed">{m.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
