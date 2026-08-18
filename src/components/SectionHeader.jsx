import React from 'react';
import { motion } from 'framer-motion';

export const SectionHeader = ({ badge, title, subtitle, centered = true }) => {
  return (
    <div className={`mb-14 ${centered ? 'text-center' : 'text-left'}`}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 border border-primary/20 text-primary mb-4 shadow-[0_0_15px_rgba(0,229,255,0.15)]"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
          {badge}
        </motion.div>
      )}

      {title && (
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold font-heading tracking-tight text-white mb-4"
        >
          {title}
        </motion.h2>
      )}

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeader;
