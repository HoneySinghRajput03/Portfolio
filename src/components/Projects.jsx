import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Employee Management System',
    type: 'Full Stack Web App',
    description:
      'Built a full stack employee management platform featuring secure authentication, role-based access control, employee data management, and automated business workflows.',
    features: [
      'Spring Boot RESTful APIs for CRUD operations and data handling',
      'Hibernate ORM integration with MySQL for reliable data persistence',
      'Interactive, responsive UI built with React.js and Bootstrap'
    ],
    technologies: ['Java', 'Spring Boot', 'React.js', 'MySQL', 'Hibernate', 'REST APIs', 'Bootstrap'],
    github: 'https://github.com',
    demo: null,
    highlight: true
  },
  {
    title: 'Online Food Ordering System',
    type: 'Full Stack Application',
    description:
      'Created an interactive online food ordering platform with dynamic menu browsing, cart management, user authentication, and end-to-end order tracking features.',
    features: [
      'Backend services and REST APIs for menu items and order processing',
      'Secure user registration, authentication, and session handling',
      'Clean and responsive UI with optimized order workflows'
    ],
    technologies: ['React.js', 'Spring Boot', 'MySQL', 'REST APIs', 'JavaScript', 'CSS3'],
    github: 'https://github.com',
    demo: null,
    highlight: true
  },
  {
    title: 'Student Result Management System',
    type: 'Java Desktop Application',
    description:
      'Developed a robust result management application using Core Java and JDBC. Provides efficient database connectivity, automated result calculation, and student report generation.',
    features: [
      'Optimized SQL queries for fast database operations and record handling',
      'Modular architecture for student registration, marks entry, and report card generation',
      'Built with Core Java, Object-Oriented Principles, and JDBC'
    ],
    technologies: ['Core Java', 'JDBC', 'MySQL', 'SQL', 'OOPs'],
    github: 'https://github.com',
    demo: null,
    highlight: false
  }
];

const Projects = () => {
  return (
    <section id="projects" className="bg-[#FAF8F5] dark:bg-dark-900 py-16 sm:py-[75px] transition-colors duration-200 w-full max-w-full overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-10 gap-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-900 dark:text-dark-50 font-mono">
              <span className="border-b-2 border-primary-200 dark:border-dark-700 pb-2">FEATURED PROJECTS</span>
            </h2>
            <p className="font-mono text-sm text-primary-600/70 dark:text-dark-300/70">
              Focus on Java, Spring Boot & Full Stack Architecture
            </p>
          </div>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 * index, duration: 0.7 }}
                viewport={{ once: true }}
                className="group relative flex flex-col justify-between bg-white dark:bg-dark-800 hover:bg-[#F8F6F2] dark:hover:bg-dark-700/80 transition-colors duration-300"
              >
                <div className="absolute inset-0 border border-primary-200 dark:border-dark-700 group-hover:border-primary-400 dark:group-hover:border-dark-500 transition-colors duration-300 pointer-events-none">
                  <div className="absolute -top-1 -left-1 w-2 h-2 bg-primary-200 dark:bg-dark-700 group-hover:bg-primary-400 dark:group-hover:bg-dark-500 transition-colors duration-300"></div>
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary-200 dark:bg-dark-700 group-hover:bg-primary-400 dark:group-hover:bg-dark-500 transition-colors duration-300"></div>
                  <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-primary-200 dark:bg-dark-700 group-hover:bg-primary-400 dark:group-hover:bg-dark-500 transition-colors duration-300"></div>
                  <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-primary-200 dark:bg-dark-700 group-hover:bg-primary-400 dark:group-hover:bg-dark-500 transition-colors duration-300"></div>
                </div>

                <div className="p-6 md:p-8 flex flex-col h-full justify-between relative z-10">
                  <div>
                    {/* Header bar */}
                    <div className="flex items-center justify-between mb-4 border-b border-primary-200/60 dark:border-dark-700/60 pb-3">
                      <span className="text-xs font-mono text-primary-500/70 dark:text-dark-400/70 uppercase tracking-wider">
                        {project.type}
                      </span>
                      <span className="text-xs font-mono text-primary-400 dark:text-dark-500">
                        {`0${index + 1}`}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-primary-900 dark:text-dark-50 mb-3 font-mono">
                      {project.title}
                    </h3>

                    <p className="text-primary-700/80 dark:text-dark-200/80 mb-5 font-mono text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Features list */}
                    <ul className="space-y-1.5 mb-6 text-xs font-mono text-primary-600/70 dark:text-dark-300/70 list-disc list-inside">
                      {project.features.map((feat, i) => (
                        <li key={i} className="leading-normal">
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-1.5 mb-6 pt-3 border-t border-primary-200/40 dark:border-dark-700/40">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-xs font-mono bg-primary-50 dark:bg-dark-900/60 border border-primary-200/80 dark:border-dark-700/80 text-primary-700/90 dark:text-dark-200/90"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center justify-between pt-2">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-primary-700/80 dark:text-dark-300 hover:text-primary-950 dark:hover:text-white font-mono text-xs uppercase tracking-widest transition-colors"
                        whileHover={{ x: 2 }}
                      >
                        <span>VIEW ARCHITECTURE</span>
                        <span className="text-sm leading-none">↗</span>
                      </motion.a>

                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} GitHub Source`}
                          className="text-primary-600 dark:text-dark-400 hover:text-primary-950 dark:hover:text-white transition-colors"
                          whileHover={{ scale: 1.15 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                            <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
                          </svg>
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Explore More Projects & Real-time Updates Banner Card (Image 1 reference content) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="group relative bg-[#F2EFE9] dark:bg-dark-800 p-6 sm:p-8 lg:p-10 transition-colors duration-300"
          >
            {/* Corner brackets */}
            <div className="absolute inset-0 border border-primary-200 dark:border-dark-700 pointer-events-none">
              <div className="absolute -top-1 -left-1 w-2 h-2 bg-primary-200 dark:bg-dark-700"></div>
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary-200 dark:bg-dark-700"></div>
              <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-primary-200 dark:bg-dark-700"></div>
              <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-primary-200 dark:bg-dark-700"></div>
            </div>

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              {/* Left Column: Heading, Description, Stats */}
              <div className="flex-1 max-w-2xl">
                {/* Continuous Development Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 border border-primary-200 dark:border-dark-700 bg-white/80 dark:bg-dark-900/80 text-xs font-mono text-primary-700 dark:text-dark-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  CONTINUOUS DEVELOPMENT & OPEN SOURCE
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-bold font-mono text-primary-900 dark:text-dark-50 mb-4 leading-snug">
                  Want to explore all my projects & real-time updates?
                </h3>

                {/* Description */}
                <p className="font-mono text-xs sm:text-sm text-primary-700/85 dark:text-dark-200/85 mb-8 leading-relaxed">
                  These featured projects highlight my core backend architecture and full-stack capabilities. You can explore <strong className="text-primary-900 dark:text-dark-50">20+ more repositories</strong>, DSA implementations, microservices, and experiments on GitHub, or follow my latest project milestones and engineering posts on LinkedIn.
                </p>

                {/* Stat Chips */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {/* Stat 1: 20+ Repositories */}
                  <div className="p-3.5 bg-white dark:bg-dark-900 border border-primary-200 dark:border-dark-700 flex items-center gap-3">
                    <div className="p-2 bg-primary-50 dark:bg-dark-800 text-primary-700 dark:text-dark-200">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M7 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm10-7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM7 7v6m0-4.5h5a3.5 3.5 0 0 1 3.5 3.5v1"/>
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-bold font-mono text-primary-900 dark:text-dark-50">20+</div>
                      <div className="text-[10px] font-mono text-primary-500 dark:text-dark-400 uppercase tracking-wider">REPOSITORIES</div>
                    </div>
                  </div>

                  {/* Stat 2: Full-Stack */}
                  <div className="p-3.5 bg-white dark:bg-dark-900 border border-primary-200 dark:border-dark-700 flex items-center gap-3">
                    <div className="p-2 bg-primary-50 dark:bg-dark-800 text-primary-700 dark:text-dark-200">
                      <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                        <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                        <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                        <line x1="6" y1="6" x2="6.01" y2="6"></line>
                        <line x1="6" y1="18" x2="6.01" y2="18"></line>
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-bold font-mono text-primary-900 dark:text-dark-50">Full-Stack</div>
                      <div className="text-[10px] font-mono text-primary-500 dark:text-dark-400 uppercase tracking-wider">JAVA & SPRING BOOT</div>
                    </div>
                  </div>

                  {/* Stat 3: Active Milestones */}
                  <div className="p-3.5 bg-white dark:bg-dark-900 border border-primary-200 dark:border-dark-700 flex items-center gap-3">
                    <div className="p-2 bg-primary-50 dark:bg-dark-800 text-primary-700 dark:text-dark-200">
                      <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                        <circle cx="12" cy="8" r="6"></circle>
                        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"></path>
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-bold font-mono text-primary-900 dark:text-dark-50">Active</div>
                      <div className="text-[10px] font-mono text-primary-500 dark:text-dark-400 uppercase tracking-wider">TECH MILESTONES</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: 3 Action Buttons */}
              <div className="w-full lg:w-72 flex flex-col gap-3">
                {/* GitHub Button */}
                <motion.a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-5 py-3.5 bg-white dark:bg-dark-900 hover:bg-primary-50 dark:hover:bg-dark-800 border border-primary-200 dark:border-dark-700 text-primary-900 dark:text-dark-50 font-mono text-xs uppercase tracking-widest flex items-center justify-between transition-colors shadow-sm"
                  whileHover={{ x: 4 }}
                >
                  <span className="flex items-center gap-2.5">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
                    </svg>
                    <span>VIEW ALL ON GITHUB</span>
                  </span>
                  <span className="text-sm leading-none">↗</span>
                </motion.a>

                {/* LinkedIn Button */}
                <motion.a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-5 py-3.5 bg-[#0077B5] hover:bg-[#006097] text-white border border-[#0077B5] font-mono text-xs uppercase tracking-widest flex items-center justify-between transition-colors shadow-sm"
                  whileHover={{ x: 4 }}
                >
                  <span className="flex items-center gap-2.5">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.39 9.74v-8.37H5.07v8.37h2.78z"/>
                    </svg>
                    <span>CONNECT ON LINKEDIN</span>
                  </span>
                  <span className="text-sm leading-none">↗</span>
                </motion.a>

                {/* X (Twitter) Button */}
                <motion.a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-5 py-3.5 bg-white dark:bg-dark-900 hover:bg-primary-50 dark:hover:bg-dark-800 border border-primary-200 dark:border-dark-700 text-primary-900 dark:text-dark-50 font-mono text-xs uppercase tracking-widest flex items-center justify-between transition-colors shadow-sm"
                  whileHover={{ x: 4 }}
                >
                  <span className="flex items-center gap-2.5">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                    <span>FOLLOW ON X (TWITTER)</span>
                  </span>
                  <span className="text-sm leading-none">↗</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
