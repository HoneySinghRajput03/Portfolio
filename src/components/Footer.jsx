import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [time, setTime] = useState(() => {
    return new Intl.DateTimeFormat('en-US', {
      timeZone: 'Asia/Kolkata',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    }).format(new Date());
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(
        new Intl.DateTimeFormat('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true
        }).format(new Date())
      );
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="w-full bg-[#FAF8F5] dark:bg-dark-900 border-t border-primary-200/80 dark:border-dark-700/80 py-6 sm:py-7 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 w-full">
          
          {/* Left Column: Name & Role / Location */}
          <div className="shrink-0 whitespace-nowrap text-center md:text-left">
            <h3 className="text-sm sm:text-[15px] font-bold font-mono text-primary-900 dark:text-dark-50 tracking-tight">
              Honeyraj Singh Thakur
            </h3>
            <p className="text-[11px] font-mono text-primary-600/80 dark:text-dark-300/80 mt-0.5 whitespace-nowrap">
              Java Full Stack Developer • Indore, India
            </p>
          </div>

          {/* Center Column: Social Links with Icons */}
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center shrink-0">
            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex items-center gap-1.5 text-[11px] font-mono font-semibold uppercase tracking-wider text-primary-700/80 dark:text-dark-300 hover:text-primary-950 dark:hover:text-white transition-colors group whitespace-nowrap"
            >
              <svg className="w-3.5 h-3.5 fill-current opacity-80 group-hover:opacity-100 shrink-0" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.39 9.74v-8.37H5.07v8.37h2.78z"/>
              </svg>
              <span>LINKEDIN</span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex items-center gap-1.5 text-[11px] font-mono font-semibold uppercase tracking-wider text-primary-700/80 dark:text-dark-300 hover:text-primary-950 dark:hover:text-white transition-colors group whitespace-nowrap"
            >
              <svg className="w-3.5 h-3.5 fill-current opacity-80 group-hover:opacity-100 shrink-0" viewBox="0 0 24 24">
                <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
              </svg>
              <span>GITHUB</span>
            </a>

            {/* X (Twitter) */}
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="inline-flex items-center gap-1.5 text-[11px] font-mono font-semibold uppercase tracking-wider text-primary-700/80 dark:text-dark-300 hover:text-primary-950 dark:hover:text-white transition-colors group whitespace-nowrap"
            >
              <svg className="w-3.5 h-3.5 fill-current opacity-80 group-hover:opacity-100 shrink-0" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              <span>X</span>
            </a>
          </div>

          {/* Right Column: Live Indore Clock & Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-[11px] font-mono text-primary-600/80 dark:text-dark-400 text-center md:text-right">
            {/* Live Indore Time */}
            <div className="flex items-center gap-1">
              <span className="text-primary-500 dark:text-dark-400">Indore:</span>
              <span className="font-bold text-primary-900 dark:text-dark-50 tabular-nums">
                {time}
              </span>
            </div>

            <span className="hidden sm:inline opacity-40">•</span>

            {/* Copyright */}
            <span className="text-center">
              © {new Date().getFullYear()} Honeyraj Singh Thakur. All rights reserved.
            </span>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
