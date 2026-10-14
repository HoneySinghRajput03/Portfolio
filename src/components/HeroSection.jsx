import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const HeroSection = () => {
  // Smooth scroll function
  const smoothScrollTo = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-[#FAF8F5] dark:bg-dark-900 flex items-center justify-center relative overflow-hidden transition-colors duration-200 pt-20 pb-16 sm:pb-[75px]">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000011_1px,transparent_1px),linear-gradient(to_bottom,#00000011_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 lg:gap-16 w-full">
          
          {/* Left Column: Info & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full min-w-0 flex-1 text-left"
          >
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="mb-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary-200 dark:border-dark-700 bg-[#F2EFE9] dark:bg-dark-800 text-[11px] sm:text-xs font-mono text-primary-700/80 dark:text-dark-200/80 max-w-full"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
              <span className="leading-tight">Available for Java Full Stack Roles • Indore, MP</span>
            </motion.div>

            {/* Name Box in Title Case */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="relative inline-block mb-6 max-w-full"
            >
              <div className="absolute inset-0 border border-primary-200 dark:border-dark-700 pointer-events-none">
                <div className="absolute -top-1 -left-1 w-2 h-2 bg-primary-200 dark:bg-dark-700"></div>
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary-200 dark:bg-dark-700"></div>
                <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-primary-200 dark:bg-dark-700"></div>
                <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-primary-200 dark:bg-dark-700"></div>
              </div>
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-900 dark:text-dark-50 font-mono px-4 py-3 sm:px-6 sm:py-4 leading-tight">
                <span className="block sm:inline">Honeyraj</span>{' '}
                <span className="block sm:inline">Singh Thakur</span>
              </h1>
            </motion.div>

            {/* Role */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mb-6"
            >
              <h2 className="text-base sm:text-xl md:text-2xl text-primary-700/80 dark:text-dark-200/80 font-mono uppercase tracking-wider sm:tracking-widest">
                <span className="border-b border-primary-200 dark:border-dark-700 pb-1">JAVA FULL STACK DEVELOPER</span>
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-base md:text-lg text-primary-600/70 dark:text-dark-300/70 font-mono max-w-xl mb-8 leading-relaxed"
            >
              Specializing in Java, Spring Boot, Hibernate, RESTful APIs, MySQL, and modern Full Stack architecture with clean, scalable code.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-6 mb-10 w-full sm:w-auto"
            >
              <motion.a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  smoothScrollTo('projects');
                }}
                className="px-6 py-3 border border-primary-900 dark:border-dark-50 text-primary-900 dark:text-dark-50 font-mono text-sm uppercase tracking-widest cursor-pointer text-center"
                whileHover={{ x: 5 }}
              >
                View Selected Work →
              </motion.a>

              <motion.a
                href="/Resume.HoneyrajSingh.pdf"
                download="Resume.HoneyrajSingh.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-primary-200 dark:border-dark-700 text-primary-700/90 dark:text-dark-200/90 font-mono text-sm uppercase tracking-widest text-center"
                whileHover={{ x: 5 }}
              >
                Download CV ↓
              </motion.a>

              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  smoothScrollTo('contact');
                }}
                className="text-primary-700/80 dark:text-dark-200/80 hover:text-primary-900 dark:hover:text-dark-50 font-mono text-sm uppercase tracking-widest cursor-pointer inline-flex items-center justify-center sm:justify-start gap-1 py-2 sm:py-0"
                whileHover={{ x: 5 }}
              >
                Get in Touch →
              </motion.a>
            </motion.div>

            {/* Connect Icons Area matching Image 1 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex items-center gap-3 pt-6 border-t border-primary-200/60 dark:border-dark-700/60"
            >
              <span className="text-primary-500/80 dark:text-dark-400/80 font-mono text-xs uppercase tracking-widest mr-1">
                CONNECT:
              </span>
              
              {/* LinkedIn Icon */}
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-8 h-8 rounded-full bg-[#EAE6DF] dark:bg-dark-800 border border-primary-200/80 dark:border-dark-700 flex items-center justify-center text-primary-700 dark:text-dark-200 hover:text-primary-950 dark:hover:text-white transition-all shadow-sm"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.39 9.74v-8.37H5.07v8.37h2.78z"/>
                </svg>
              </motion.a>

              {/* GitHub Icon */}
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-8 h-8 rounded-full bg-[#EAE6DF] dark:bg-dark-800 border border-primary-200/80 dark:border-dark-700 flex items-center justify-center text-primary-700 dark:text-dark-200 hover:text-primary-950 dark:hover:text-white transition-all shadow-sm"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
                </svg>
              </motion.a>

              {/* Twitter / X Icon */}
              <motion.a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter) Profile"
                className="w-8 h-8 rounded-full bg-[#EAE6DF] dark:bg-dark-800 border border-primary-200/80 dark:border-dark-700 flex items-center justify-center text-primary-700 dark:text-dark-200 hover:text-primary-950 dark:hover:text-white transition-all shadow-sm"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column: Profile Card matching Image 2 reference */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="w-full sm:w-80 lg:w-[360px] mx-auto lg:mx-0 flex-shrink-0 max-w-full"
          >
            <div className="relative bg-[#F2EFE9] dark:bg-dark-800 p-6 sm:p-7 group shadow-sm">
              {/* Corner brackets */}
              <div className="absolute inset-0 border border-primary-200 dark:border-dark-700 pointer-events-none">
                <div className="absolute -top-1 -left-1 w-2 h-2 bg-primary-200 dark:bg-dark-700"></div>
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary-200 dark:bg-dark-700"></div>
                <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-primary-200 dark:bg-dark-700"></div>
                <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-primary-200 dark:bg-dark-700"></div>
              </div>

              {/* Top Row: 01 • DEVELOPER on left, INDORE, MP on right */}
              <div className="flex items-center justify-between font-mono text-xs text-primary-500/90 dark:text-dark-400 mb-6 uppercase tracking-wider">
                <span className="font-semibold">01 • DEVELOPER</span>
                <span className="flex items-center gap-1">
                  <MapPin size={12} className="text-primary-500" />
                  INDORE, MP
                </span>
              </div>

              {/* Profile Image (Circular) */}
              <div className="relative w-40 h-40 mx-auto mb-6 overflow-hidden rounded-full border-2 border-primary-200 dark:border-dark-700 p-1 bg-white dark:bg-dark-900 shadow-sm">
                <img
                  src="/images/PFP.png"
                  alt="Honeyraj Singh Thakur"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* BCA Graduate Badge */}
              <div className="text-center mb-6">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 text-xs font-mono border border-primary-200 dark:border-dark-700 bg-white/80 dark:bg-dark-900/80 text-primary-800 dark:text-dark-100 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  BCA Graduate '26
                </span>
              </div>

              {/* Bottom Row: 200+ LEETCODE SOLVED and CLEAN ARCHITECTURE */}
              <div className="pt-4 border-t border-primary-200/80 dark:border-dark-700/80 flex items-center justify-between font-mono text-[10px] sm:text-[11px] text-primary-600/90 dark:text-dark-300 uppercase tracking-wider">
                <span className="font-bold">200+ LEETCODE SOLVED</span>
                <span className="font-bold">CLEAN ARCHITECTURE</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      <motion.div
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-2 h-2 bg-primary-200 dark:bg-dark-700 rounded-full" />
      </motion.div>
    </section>
  );
};

export default HeroSection;