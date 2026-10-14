import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const experienceData = {
  role: 'Java Full Stack Developer Intern',
  company: 'Softvyom Consulting Services Pvt. Ltd.',
  location: 'Remote',
  type: 'Internship',
  period: '2026',
  overview: 'Contributed to building and optimizing enterprise-grade full-stack web applications using React.js and Spring Boot.',
  bullets: [
    'Developed responsive full stack web applications using React.js and Spring Boot.',
    'Designed and integrated RESTful APIs for efficient frontend-backend communication.',
    'Implemented CRUD operations with MySQL database integration using Hibernate ORM.',
    'Collaborated with development team using Git and GitHub version control workflows.',
    'Optimized application performance and improved UI responsiveness across devices.'
  ],
  technologies: ['Java', 'Spring Boot', 'React.js', 'Hibernate ORM', 'MySQL', 'REST APIs', 'Git', 'GitHub']
};

const educationData = [
  {
    period: '2023 — 2026',
    title: 'Bachelor of Computer Application (BCA)',
    institution: 'Renaissance University • Indore, Madhya Pradesh',
    description: 'Comprehensive study of Computer Science fundamentals, Software Engineering, Object-Oriented Programming, Database Management, and Web Technologies.',
    tag: 'Pursuing Graduate Degree'
  },
  {
    period: '2023',
    title: 'Higher Secondary Education (Class 12th)',
    institution: 'Nav Jagriti Higher Secondary School • Damoh, Madhya Pradesh',
    description: 'Completed Higher Secondary education with a focus on analytical reasoning, business mathematics, and computer literacy.',
    tag: 'Commerce Stream'
  },
  {
    period: '2021',
    title: 'Secondary Education (Class 10th)',
    institution: 'Nav Jagriti Higher Secondary School • Damoh, Madhya Pradesh',
    description: 'Completed secondary education with solid academic standing in mathematics and science.',
    tag: 'General Academic Curriculum'
  }
];

const certificationData = [
  {
    period: '2025',
    title: 'Java Full Stack Development Certification',
    subtitle: 'Industry Recognized Training Program',
    description: 'Comprehensive hands-on certification covering Core Java, Spring Boot, Hibernate ORM, RESTful API architecture, React.js frontend integration, and MySQL database administration.',
    technologies: ['Java', 'Spring Boot', 'React.js', 'Hibernate', 'REST APIs', 'MySQL']
  },
  {
    period: '2025',
    title: 'Data Structures and Algorithms using Java',
    subtitle: 'Technical Problem-Solving Program',
    description: 'Rigorous training on algorithm complexity, dynamic programming, tree traversals, graph algorithms, and competitive problem solving.',
    technologies: ['DSA', 'Java', 'Time Complexity', 'Problem Solving', '200+ LeetCode Solved']
  },
  {
    period: '2024',
    title: 'React.js and Spring Boot Training Program',
    subtitle: 'Full Stack Engineering Workshop',
    description: 'Deep dive into end-to-end web architecture, CORS handling, client-server state synchronization, responsive styling, and modular component design.',
    technologies: ['React.js', 'Spring Boot', 'State Management', 'Full Stack Workflows']
  }
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState('experience');

  const tabs = [
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'certifications', label: 'Certifications' }
  ];

  return (
    <section id="experience" className="bg-[#FAF8F5] dark:bg-dark-900 py-16 sm:py-[75px] transition-colors duration-200 w-full max-w-full overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full"
        >
          {/* Header & Right Tabs */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-primary-200/80 dark:border-dark-700/80 pb-6">
            <div>
              <span className="text-xs font-mono text-primary-500/80 dark:text-dark-400/80 uppercase tracking-widest block mb-2">
                BACKGROUND • CAREER • CREDENTIALS
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-900 dark:text-dark-50 font-mono tracking-tight">
                Experience & Education
              </h2>
            </div>

            {/* Tab Controls */}
            <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-4 py-2 font-mono text-xs sm:text-sm font-semibold tracking-wider transition-all duration-200 cursor-pointer ${
                    activeTab === tab.id
                      ? 'text-primary-950 dark:text-white'
                      : 'text-primary-600/70 dark:text-dark-400 hover:text-primary-900 dark:hover:text-dark-200'
                  }`}
                >
                  <span>{tab.label}</span>
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeTabUnderline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-900 dark:bg-dark-50"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            {/* TAB 1: EXPERIENCE */}
            {activeTab === 'experience' && (
              <motion.div
                key="experience"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-white dark:bg-dark-800 hover:bg-[#F8F6F2] dark:hover:bg-dark-700/80 transition-colors duration-300"
              >
                {/* Corner brackets */}
                <div className="absolute inset-0 border border-primary-200 dark:border-dark-700 group-hover:border-primary-400 dark:group-hover:border-dark-500 transition-colors duration-300 pointer-events-none">
                  <div className="absolute -top-1 -left-1 w-2 h-2 bg-primary-200 dark:bg-dark-700 group-hover:bg-primary-400 dark:group-hover:bg-dark-500 transition-colors duration-300"></div>
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary-200 dark:bg-dark-700 group-hover:bg-primary-400 dark:group-hover:bg-dark-500 transition-colors duration-300"></div>
                  <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-primary-200 dark:bg-dark-700 group-hover:bg-primary-400 dark:group-hover:bg-dark-500 transition-colors duration-300"></div>
                  <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-primary-200 dark:bg-dark-700 group-hover:bg-primary-400 dark:group-hover:bg-dark-500 transition-colors duration-300"></div>
                </div>

                <div className="p-6 sm:p-8 lg:p-10 relative z-10">
                  {/* Title & Year */}
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
                    <h3 className="text-2xl sm:text-3xl font-bold text-primary-900 dark:text-dark-50 font-mono tracking-tight">
                      {experienceData.role}
                    </h3>
                    <span className="font-mono text-sm text-primary-500 dark:text-dark-400 font-semibold">
                      {experienceData.period}
                    </span>
                  </div>

                  {/* Company & Type */}
                  <p className="font-mono text-xs sm:text-sm text-primary-600/90 dark:text-dark-300 mb-6">
                    {experienceData.company} • {experienceData.location} <span className="text-primary-800 dark:text-dark-100 font-bold">{experienceData.type}</span>
                  </p>

                  {/* Overview sentence */}
                  <p className="font-mono text-sm sm:text-base text-primary-700/90 dark:text-dark-200/90 mb-6 leading-relaxed">
                    {experienceData.overview}
                  </p>

                  {/* Bullets */}
                  <ul className="space-y-2.5 font-mono text-xs sm:text-sm text-primary-700/85 dark:text-dark-200/85 mb-8">
                    {experienceData.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="text-primary-400 dark:text-dark-500 select-none">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 pt-6 border-t border-primary-200/60 dark:border-dark-700/60">
                    {experienceData.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-mono bg-primary-50 dark:bg-dark-900/70 border border-primary-200/80 dark:border-dark-700/80 text-primary-700 dark:text-dark-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 2: EDUCATION */}
            {activeTab === 'education' && (
              <motion.div
                key="education"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
              >
                {educationData.map((edu, index) => (
                  <motion.div
                    key={edu.title}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="group relative flex flex-col justify-between bg-white dark:bg-dark-800 hover:bg-[#F8F6F2] dark:hover:bg-dark-700/80 transition-colors duration-300 p-6 sm:p-7"
                  >
                    {/* Corner brackets */}
                    <div className="absolute inset-0 border border-primary-200 dark:border-dark-700 group-hover:border-primary-400 dark:group-hover:border-dark-500 transition-colors duration-300 pointer-events-none">
                      <div className="absolute -top-1 -left-1 w-2 h-2 bg-primary-200 dark:bg-dark-700 group-hover:bg-primary-400 dark:group-hover:bg-dark-500 transition-colors duration-300"></div>
                      <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary-200 dark:bg-dark-700 group-hover:bg-primary-400 dark:group-hover:bg-dark-500 transition-colors duration-300"></div>
                      <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-primary-200 dark:bg-dark-700 group-hover:bg-primary-400 dark:group-hover:bg-dark-500 transition-colors duration-300"></div>
                      <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-primary-200 dark:bg-dark-700 group-hover:bg-primary-400 dark:group-hover:bg-dark-500 transition-colors duration-300"></div>
                    </div>

                    <div className="relative z-10">
                      <span className="text-xs font-mono text-primary-500 dark:text-dark-400 block mb-4 border-b border-primary-200/60 dark:border-dark-700/60 pb-2">
                        {edu.period}
                      </span>
                      <h3 className="text-lg font-bold font-mono text-primary-900 dark:text-dark-50 mb-2">
                        {edu.title}
                      </h3>
                      <p className="text-xs font-mono text-primary-600/80 dark:text-dark-300/80 mb-4">
                        {edu.institution}
                      </p>
                      <p className="text-xs font-mono text-primary-700/80 dark:text-dark-200/80 leading-relaxed mb-6">
                        {edu.description}
                      </p>
                    </div>

                    <div className="relative z-10 pt-4 border-t border-primary-200/40 dark:border-dark-700/40">
                      <span className="text-[11px] font-mono text-primary-600 dark:text-dark-300 font-semibold uppercase tracking-wider">
                        {edu.tag}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* TAB 3: CERTIFICATIONS */}
            {activeTab === 'certifications' && (
              <motion.div
                key="certifications"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
              >
                {certificationData.map((cert, index) => (
                  <motion.div
                    key={cert.title}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="group relative flex flex-col justify-between bg-white dark:bg-dark-800 hover:bg-[#F8F6F2] dark:hover:bg-dark-700/80 transition-colors duration-300 p-6 sm:p-7"
                  >
                    {/* Corner brackets */}
                    <div className="absolute inset-0 border border-primary-200 dark:border-dark-700 group-hover:border-primary-400 dark:group-hover:border-dark-500 transition-colors duration-300 pointer-events-none">
                      <div className="absolute -top-1 -left-1 w-2 h-2 bg-primary-200 dark:bg-dark-700 group-hover:bg-primary-400 dark:group-hover:bg-dark-500 transition-colors duration-300"></div>
                      <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary-200 dark:bg-dark-700 group-hover:bg-primary-400 dark:group-hover:bg-dark-500 transition-colors duration-300"></div>
                      <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-primary-200 dark:bg-dark-700 group-hover:bg-primary-400 dark:group-hover:bg-dark-500 transition-colors duration-300"></div>
                      <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-primary-200 dark:bg-dark-700 group-hover:bg-primary-400 dark:group-hover:bg-dark-500 transition-colors duration-300"></div>
                    </div>

                    <div className="relative z-10">
                      <span className="text-xs font-mono text-primary-500 dark:text-dark-400 block mb-4 border-b border-primary-200/60 dark:border-dark-700/60 pb-2">
                        {cert.period}
                      </span>
                      <h3 className="text-lg font-bold font-mono text-primary-900 dark:text-dark-50 mb-2">
                        {cert.title}
                      </h3>
                      <p className="text-xs font-mono text-primary-600/80 dark:text-dark-300/80 mb-4 font-semibold">
                        {cert.subtitle}
                      </p>
                      <p className="text-xs font-mono text-primary-700/80 dark:text-dark-200/80 leading-relaxed mb-6">
                        {cert.description}
                      </p>
                    </div>

                    <div className="relative z-10 pt-4 border-t border-primary-200/40 dark:border-dark-700/40 flex flex-wrap gap-1.5">
                      {cert.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-[11px] font-mono bg-primary-50 dark:bg-dark-900/70 border border-primary-200/70 dark:border-dark-700/70 text-primary-700 dark:text-dark-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
