import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    category: 'FRONTEND',
    skills: ['React.js', 'HTML5', 'CSS3', 'JavaScript (ES6+)', 'Tailwind CSS', 'Bootstrap', 'Thymeleaf']
  },
  {
    category: 'BACKEND',
    skills: ['Spring Boot', 'Microservices', 'Spring Framework', 'Spring MVC', 'Hibernate ORM', 'JDBC', 'MySQL', 'REST APIs']
  },
  {
    category: 'LANGUAGES',
    skills: ['Java', 'C++', 'C']
  },
  {
    category: 'DEVELOPER TOOLS',
    skills: ['Git', 'GitHub', 'Postman', 'VS Code']
  }
];

const Skills = () => {
  return (
    <section id="skills" className="bg-[#FAF8F5] dark:bg-dark-900 py-16 sm:py-[75px] transition-colors duration-200 w-full max-w-full overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-900 dark:text-dark-50 mb-10 font-mono">
            <span className="border-b-2 border-primary-200 dark:border-dark-700 pb-2">TECHNICAL SKILLS</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((group, index) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                viewport={{ once: true }}
                className="group relative bg-white dark:bg-dark-800 hover:bg-[#F8F6F2] dark:hover:bg-dark-700/80 transition-colors duration-300"
              >
                <div className="absolute inset-0 border border-primary-200 dark:border-dark-700 group-hover:border-primary-400 dark:group-hover:border-dark-500 transition-colors duration-300 pointer-events-none">
                  <div className="absolute -top-1 -left-1 w-2 h-2 bg-primary-200 dark:bg-dark-700 group-hover:bg-primary-400 dark:group-hover:bg-dark-500 transition-colors duration-300"></div>
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary-200 dark:bg-dark-700 group-hover:bg-primary-400 dark:group-hover:bg-dark-500 transition-colors duration-300"></div>
                  <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-primary-200 dark:bg-dark-700 group-hover:bg-primary-400 dark:group-hover:bg-dark-500 transition-colors duration-300"></div>
                  <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-primary-200 dark:bg-dark-700 group-hover:bg-primary-400 dark:group-hover:bg-dark-500 transition-colors duration-300"></div>
                </div>

                <div className="p-6 sm:p-8 relative z-10">
                  <h3 className="text-lg font-bold text-primary-900 dark:text-dark-50 mb-5 font-mono uppercase tracking-wider flex items-center gap-2">
                    <span className="text-primary-400 dark:text-dark-500 font-mono text-sm">{`// 0${index + 1}`}</span>
                    {group.category}
                  </h3>

                  <div className="flex flex-wrap gap-2.5">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3.5 py-1.5 border border-primary-200 dark:border-dark-700 bg-primary-50/70 dark:bg-dark-900/70 text-primary-800 dark:text-dark-100 font-mono text-xs uppercase tracking-wider hover:border-primary-400 dark:hover:border-dark-500 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
