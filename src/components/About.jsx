import React from 'react';
import { motion } from 'framer-motion';

const attributes = [
  'Focused Mindset',
  'Adaptability',
  'Responsible & Dedicated',
  'Disciplined Problem Solver',
  'Continuous Learner',
  'Team Collaboration'
];

const About = () => {
  return (
    <section id="about" className="bg-[#FAF8F5] dark:bg-dark-900 py-16 sm:py-20 transition-colors duration-200 w-full max-w-full overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-900 dark:text-dark-50 mb-8 sm:mb-10 font-mono">
            <span className="border-b-2 border-primary-200 dark:border-dark-700 pb-1.5">ABOUT ME</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* Left Column: Key Stats & Education */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-5 space-y-4 sm:space-y-5"
            >
              {/* Stat 1 */}
              <div className="border-b border-primary-200/80 dark:border-dark-700/80 pb-3.5">
                <div className="text-2xl sm:text-3xl font-bold font-mono text-primary-900 dark:text-dark-50 mb-0.5">
                  200+
                </div>
                <div className="text-xs font-mono font-bold text-primary-600 dark:text-dark-300 uppercase tracking-widest">
                  DSA PROBLEMS SOLVED
                </div>
                <div className="text-[11px] font-mono text-primary-400 dark:text-dark-500">
                  on LeetCode Platforms
                </div>
              </div>

              {/* Stat 2 */}
              <div className="border-b border-primary-200/80 dark:border-dark-700/80 pb-3.5">
                <div className="text-2xl sm:text-3xl font-bold font-mono text-primary-900 dark:text-dark-50 mb-0.5">
                  6+
                </div>
                <div className="text-xs font-mono font-bold text-primary-600 dark:text-dark-300 uppercase tracking-widest">
                  COMPLETED PROJECTS
                </div>
                <div className="text-[11px] font-mono text-primary-400 dark:text-dark-500">
                  Full Stack, Java & Backend
                </div>
              </div>

              {/* Stat 3 */}
              <div className="border-b border-primary-200/80 dark:border-dark-700/80 pb-3.5">
                <div className="text-2xl sm:text-3xl font-bold font-mono text-primary-900 dark:text-dark-50 mb-0.5">
                  BCA
                </div>
                <div className="text-xs font-mono font-bold text-primary-600 dark:text-dark-300 uppercase tracking-widest">
                  EDUCATION STATUS
                </div>
                <div className="text-[11px] font-mono text-primary-400 dark:text-dark-500">
                  2023 — 2026
                </div>
              </div>

              {/* Current Focus Card */}
              <div className="group relative bg-[#F2EFE9] dark:bg-dark-800 p-5">
                <div className="absolute inset-0 border border-primary-200 dark:border-dark-700 pointer-events-none">
                  <div className="absolute -top-1 -left-1 w-2 h-2 bg-primary-200 dark:bg-dark-700"></div>
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary-200 dark:bg-dark-700"></div>
                  <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-primary-200 dark:bg-dark-700"></div>
                  <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-primary-200 dark:bg-dark-700"></div>
                </div>
                <span className="text-[10px] font-mono text-primary-500 dark:text-dark-400 uppercase tracking-widest block mb-0.5">
                  CURRENT FOCUS • 2026
                </span>
                <h4 className="text-sm sm:text-base font-bold font-mono text-primary-900 dark:text-dark-50 mb-0.5">
                  Bachelor of Computer Application (BCA)
                </h4>
                <p className="text-xs font-mono text-primary-700/80 dark:text-dark-200/80">
                  Renaissance University, Indore • Full-Time Roles Ready
                </p>
              </div>
            </motion.div>

            {/* Right Column: Bio & Professional Attributes */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-4"
            >
              <p className="text-sm sm:text-[15px] text-primary-700/90 dark:text-dark-200/90 font-mono leading-relaxed">
                I am a <strong className="text-primary-900 dark:text-dark-50 font-bold">Java Full Stack Developer</strong> with a solid foundation in Java, Spring Boot, React.js, MySQL, and Data Structures & Algorithms. Currently pursuing my Bachelor of Computer Application (BCA) at Renaissance University, Indore. I have practical experience developing responsive full stack web applications, designing RESTful APIs, and implementing database integration with Hibernate ORM.
              </p>

              <p className="text-sm sm:text-[15px] text-primary-700/90 dark:text-dark-200/90 font-mono leading-relaxed">
                My technical focus encompasses Java 17+, the Spring Boot framework, Hibernate ORM, and relational database systems with MySQL. On the client side, I create responsive, component-driven web applications with React.js and modern styling workflows.
              </p>

              <p className="text-sm sm:text-[15px] text-primary-700/90 dark:text-dark-200/90 font-mono leading-relaxed">
                Having solved over 200 coding problems on LeetCode, I bring strong algorithmic problem-solving foundations, object-oriented design patterns, and careful attention to performance, scalability, and modularity to every engineering challenge.
              </p>

              {/* Professional Attributes Section matching Pic 2 */}
              <div className="pt-4 border-t border-primary-200/80 dark:border-dark-700/80">
                <h3 className="text-xs font-bold text-primary-500/90 dark:text-dark-400 mb-3 font-mono uppercase tracking-widest">
                  PROFESSIONAL ATTRIBUTES
                </h3>
                <div className="flex flex-wrap gap-2">
                  {attributes.map((attr) => (
                    <span
                      key={attr}
                      className="px-3 py-1.5 border border-primary-200 dark:border-dark-700 bg-white dark:bg-dark-800 text-primary-800 dark:text-dark-100 font-mono text-xs hover:border-primary-400 dark:hover:border-dark-500 transition-colors shadow-sm whitespace-nowrap"
                    >
                      {attr}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;