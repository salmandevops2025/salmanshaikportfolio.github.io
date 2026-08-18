import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageCircle, Github, Linkedin } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { personalInfo } from '../data/portfolioData';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 relative z-10 bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Get In Touch"
          title="Let's Connect & Collaborate"
          subtitle="Reach out directly via WhatsApp, Email, or Phone to discuss Conversational AI, DocAI entity modeling, or Cloud DevOps automation opportunities."
        />

        <div className="space-y-8 mt-12">
          {/* Quick WhatsApp Highlight Banner */}
          <a
            href={personalInfo.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card glass-card-hover rounded-3xl p-8 border border-accent/40 flex flex-col sm:flex-row items-center gap-6 group bg-accent/5 hover:bg-accent/10 transition-all shadow-[0_0_35px_rgba(34,197,94,0.15)]"
          >
            <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
              <MessageCircle className="w-8 h-8" />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h3 className="font-heading font-bold text-white text-xl sm:text-2xl group-hover:text-accent transition-colors">
                Quick WhatsApp Discussion
              </h3>
              <p className="text-sm text-muted mt-1">
                Direct messaging for instant response regarding projects, consultations, or career opportunities
              </p>
            </div>
            <div className="px-6 py-3 rounded-xl bg-accent text-background font-bold text-sm flex items-center gap-2 group-hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all">
              <span>Start Chat (+91 98494 36033)</span>
              <span>→</span>
            </div>
          </a>

          {/* 3 Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Email Card */}
            <a
              href={`mailto:${personalInfo.email}`}
              className="glass-card glass-card-hover rounded-2xl p-6 border border-border hover:border-primary/50 flex flex-col items-center text-center gap-4 group transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-mono text-muted uppercase tracking-wider mb-1">Email Address</p>
                <p className="text-sm font-bold text-white group-hover:text-primary transition-colors break-all">
                  {personalInfo.email}
                </p>
              </div>
            </a>

            {/* Phone Card */}
            <a
              href={`tel:${personalInfo.phone}`}
              className="glass-card glass-card-hover rounded-2xl p-6 border border-border hover:border-secondary/50 flex flex-col items-center text-center gap-4 group transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-mono text-muted uppercase tracking-wider mb-1">Phone / Call</p>
                <p className="text-sm font-bold text-white group-hover:text-secondary transition-colors">
                  {personalInfo.phone}
                </p>
              </div>
            </a>

            {/* Location Card */}
            <div className="glass-card rounded-2xl p-6 border border-border flex flex-col items-center text-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-mono text-muted uppercase tracking-wider mb-1">Location</p>
                <p className="text-sm font-bold text-white">{personalInfo.location}</p>
              </div>
            </div>
          </div>

          {/* Dark Styled Google Maps Card */}
          <div className="glass-card rounded-3xl overflow-hidden border border-border h-64 relative shadow-[0_0_30px_rgba(0,0,0,0.3)]">
            <iframe
              title="Hyderabad Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.3160416972!2d78.26795861111663!3d17.41215307525381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              className="w-full h-full border-0 grayscale invert opacity-70 hover:opacity-100 transition-opacity"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-md px-4 py-2 rounded-xl border border-border text-xs font-mono text-primary flex items-center gap-2 pointer-events-none shadow-lg">
              <MapPin className="w-4 h-4 text-accent" /> Hyderabad, Telangana, India
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
