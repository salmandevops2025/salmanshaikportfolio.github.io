import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight, Building2 } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { testimonialsData } from '../data/portfolioData';

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const current = testimonialsData[currentIndex];

  return (
    <section id="testimonials" className="py-24 relative z-10 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Recommendations"
          title="What Leaders & Peers Say"
          subtitle="Feedback and testimonials from project leads, delivery managers, and cloud architects."
        />

        <div className="max-w-4xl mx-auto relative">
          <div className="relative glass-card rounded-3xl p-8 md:p-12 border border-border overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            {/* Background Decorative Quote */}
            <Quote className="absolute -top-6 -right-6 w-40 h-40 text-primary/5 pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
                className="space-y-6 relative z-10"
              >
                {/* Rating Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-lg md:text-2xl font-sans text-slate-200 leading-relaxed italic">
                  "{current.content}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-border/80">
                  <img
                    src={current.avatar}
                    alt={current.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-primary/40"
                  />
                  <div>
                    <h4 className="font-heading font-bold text-lg text-white">{current.name}</h4>
                    <p className="text-xs text-primary font-mono">{current.role}</p>
                    <p className="text-xs text-muted flex items-center gap-1 mt-0.5">
                      <Building2 className="w-3 h-3 text-secondary" /> {current.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slider Navigation Buttons */}
            <div className="flex items-center justify-between pt-8 mt-6 border-t border-border/60">
              <div className="flex items-center gap-2">
                {testimonialsData.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all ${
                      currentIndex === idx ? 'w-8 bg-primary' : 'w-2 bg-card-hover'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrev}
                  className="p-3 rounded-full glass-card border border-border text-muted hover:text-white hover:border-primary/40 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-3 rounded-full glass-card border border-border text-muted hover:text-white hover:border-primary/40 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
