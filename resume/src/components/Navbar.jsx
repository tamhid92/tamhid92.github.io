import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoLogoGithub } from "react-icons/io5";

// Import your image
import logoOnScroll from '/profile.jpg';
import ghLogo from '/ghLogo.svg';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-900 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div className="text-2xl font-bold text-cyan-400 hover:text-cyan-300 transition-colors">
          <motion.a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            layout
          >
            <AnimatePresence mode="popLayout">
              {scrolled ? (
                <motion.img
                  key="logo"
                  src={logoOnScroll}
                  alt="Home"
                  className="h-8 w-8 rounded-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              ) : (
                <motion.span
                  key="home"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  Tamhid
                </motion.span>
              )}
            </AnimatePresence>
          </motion.a>
        </motion.div>
        <div className="space-x-6">
          {['about', 'skills', 'projects', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="text-gray-300 hover:text-cyan-400 transition-colors capitalize font-medium"
            >
              {section}
            </button>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyan-600 hover:bg-cyan-800 text-white font-bold py-1 px-2 rounded transition-colors duration-200"
            >
            Resume
            </a>
            <motion.div className="text-2xl font-bold text-cyan-400 hover:text-cyan-300 transition-colors">
          <motion.a
            href="#"
            onClick={() => window.open('https://github.com/tamhid92', '_blank')}
            layout
          >
            <AnimatePresence mode="popLayout">
              {scrolled ? (
                <motion.img
                  key="logo"
                  alt="github"
                  className="h-8 w-8 rounded-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  src={ghLogo}
                />
              ) : (
                <motion.span
                  key="github"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                </motion.span>
              )}
            </AnimatePresence>
          </motion.a>
        </motion.div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;