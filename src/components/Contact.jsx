import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Copy, Check } from 'lucide-react';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = 'rjpthoney99@gmail.com';

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialLinks = [
    {
      name: 'LINKEDIN',
      href: 'https://linkedin.com',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.39 9.74v-8.37H5.07v8.37h2.78z" />
        </svg>
      )
    },
    {
      name: 'GITHUB',
      href: 'https://github.com',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
        </svg>
      )
    },
    {
      name: 'X (TWITTER)',
      href: 'https://x.com',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      )
    }
  ];

  return (
    <section id="contact" className="bg-[#FAF8F5] dark:bg-dark-900 py-16 sm:py-20 transition-colors duration-200 w-full max-w-full overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full"
        >
          {/* Section Subtitle */}
          <span className="text-xs font-mono text-primary-500/80 dark:text-dark-400/80 uppercase tracking-widest block mb-2">
            GET IN TOUCH
          </span>

          {/* Section Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-900 dark:text-dark-50 mb-3 font-mono tracking-tight">
            Let's Connect!
          </h2>

          <p className="text-primary-600/80 dark:text-dark-300/80 font-mono mb-8 text-xs sm:text-sm max-w-2xl leading-relaxed">
            Feel free to reach out for collaborations, opportunities, or just a friendly chat.
          </p>

          {/* Main Card matching Image 4 in Devfolio Aesthetic */}
          <div className="group relative bg-white dark:bg-dark-800 p-6 sm:p-8 max-w-2xl">
            {/* Corner brackets */}
            <div className="absolute inset-0 border border-primary-200 dark:border-dark-700 group-hover:border-primary-400 dark:group-hover:border-dark-500 transition-colors duration-300 pointer-events-none">
              <div className="absolute -top-1 -left-1 w-2 h-2 bg-primary-200 dark:bg-dark-700 group-hover:bg-primary-400 dark:group-hover:bg-dark-500 transition-colors duration-300"></div>
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary-200 dark:bg-dark-700 group-hover:bg-primary-400 dark:group-hover:bg-dark-500 transition-colors duration-300"></div>
              <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-primary-200 dark:bg-dark-700 group-hover:bg-primary-400 dark:group-hover:bg-dark-500 transition-colors duration-300"></div>
              <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-primary-200 dark:bg-dark-700 group-hover:bg-primary-400 dark:group-hover:bg-dark-500 transition-colors duration-300"></div>
            </div>

            <div className="relative z-10 space-y-6">
              {/* Direct Inquiries */}
              <div>
                <span className="text-[11px] font-mono text-primary-500 dark:text-dark-400 uppercase tracking-widest block mb-2">
                  DIRECT INQUIRIES
                </span>
                <div className="flex items-center gap-2.5 flex-wrap">
                  <a
                    href={`mailto:${email}`}
                    className="text-lg sm:text-2xl md:text-[26px] font-mono font-medium text-primary-900 dark:text-dark-50 hover:text-primary-600 dark:hover:text-dark-200 transition-colors underline decoration-primary-300 dark:decoration-dark-600 underline-offset-4 break-all"
                  >
                    {email}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    title={copied ? "Copied to clipboard" : "Copy email address"}
                    aria-label="Copy email address"
                    className="p-2 border border-primary-200 dark:border-dark-700 bg-[#F2EFE9] dark:bg-dark-900 text-primary-700 dark:text-dark-200 hover:text-primary-950 dark:hover:text-white hover:border-primary-400 dark:hover:border-dark-500 transition-colors cursor-pointer inline-flex items-center justify-center rounded-none"
                  >
                    {copied ? (
                      <Check size={16} className="text-emerald-500" />
                    ) : (
                      <Copy size={16} />
                    )}
                  </button>
                </div>
              </div>

              {/* Location */}
              <div>
                <span className="text-[11px] font-mono text-primary-500 dark:text-dark-400 uppercase tracking-widest block mb-1.5">
                  LOCATION
                </span>
                <div className="flex items-center gap-2 text-sm sm:text-base font-mono text-primary-800 dark:text-dark-100">
                  <MapPin size={16} className="text-primary-500 shrink-0" />
                  <span>Indore, Madhya Pradesh, India</span>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-primary-200/80 dark:border-dark-700/80 pt-5">
                <span className="text-xs font-mono text-primary-500 dark:text-dark-400 uppercase tracking-widest block mb-4">
                  NETWORKS & PROFILES
                </span>
                <div className="flex items-center gap-5 sm:gap-8 flex-wrap">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono font-semibold uppercase tracking-wider text-primary-700/90 dark:text-dark-200 hover:text-primary-950 dark:hover:text-white transition-colors group"
                      whileHover={{ x: 3 }}
                    >
                      <span className="text-primary-500 dark:text-dark-400 group-hover:text-primary-900 dark:group-hover:text-white transition-colors">
                        {social.icon}
                      </span>
                      <span>{social.name}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;