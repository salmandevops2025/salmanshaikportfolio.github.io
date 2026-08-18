import React from 'react';
import { motion } from 'framer-motion';
import { Clock, FolderCheck, Award, Users, Cloud } from 'lucide-react';
import AnimatedCounter from '../components/AnimatedCounter';
import TiltCard from '../components/TiltCard';
import { statsData } from '../data/portfolioData';

const iconMap = {
  Clock: Clock,
  FolderCheck: FolderCheck,
  Award: Award,
  Users: Users,
  Cloud: Cloud,
};

export const Stats = () => {
  return (
    <section className="py-16 relative z-10 bg-surface/80 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat, idx) => {
            const IconComponent = iconMap[stat.icon] || Clock;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <TiltCard maxTilt={10}>
                  <div className="glass-card glass-card-hover rounded-2xl p-6 text-center border border-border space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary mx-auto">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <div className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
                      <AnimatedCounter
                        value={stat.value}
                        suffix={stat.suffix}
                        decimals={stat.value % 1 !== 0 ? 1 : 0}
                      />
                    </div>

                    <p className="text-xs sm:text-sm font-semibold text-muted tracking-wide">
                      {stat.label}
                    </p>
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

export default Stats;
