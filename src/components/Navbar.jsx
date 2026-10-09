import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 200;
      
      if (window.scrollY < 100) {
        setActiveSection('home');
        return;
      }

      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && scrollPosition >= sections[i].offsetTop) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const smoothScrollTo = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary-50/90 dark:bg-dark-900/90 backdrop-blur-md border-b border-primary-200/50 dark:border-dark-700/50 shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[64px]">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              smoothScrollTo('home');
            }}
            whileHover={{ scale: 1.05 }}
            className="text-primary-900 dark:text-dark-50 font-mono text-xl font-bold tracking-wider cursor-pointer"
          >
            Honey
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ id, label }) => (
              <motion.a
                key={id}
                href={`#${id}`}
                onClick={(e) => {
                  e.preventDefault();
                  smoothScrollTo(id);
                }}
                className={`relative text-primary-700/80 hover:text-primary-900 dark:text-dark-200/80 dark:hover:text-dark-50 font-mono text-sm uppercase tracking-widest transition-colors ${
                  activeSection === id ? 'text-primary-900 dark:text-dark-50 font-semibold' : ''
                }`}
                whileHover={{ scale: 1.05 }}
              >
                {label}
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-px bg-primary-700 dark:bg-dark-200"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  animate={{ scaleX: activeSection === id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="flex items-center space-x-4 md:hidden">
            <ThemeToggle />
            <button
              className="text-primary-900 dark:text-dark-50 p-1"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-primary-100/95 dark:bg-dark-800/95 backdrop-blur-md border-b border-primary-200 dark:border-dark-700"
          >
            <div className="container mx-auto px-4 py-4 space-y-2">
              {navLinks.map(({ id, label }) => (
                <motion.a
                  key={id}
                  href={`#${id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    smoothScrollTo(id);
                    setIsMenuOpen(false);
                  }}
                  className={`block py-2 font-mono text-sm uppercase tracking-widest ${
                    activeSection === id
                      ? 'text-primary-900 dark:text-dark-50 font-semibold'
                      : 'text-primary-700/80 hover:text-primary-900 dark:text-dark-200/80 dark:hover:text-dark-50'
                  }`}
                >
                  {label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;