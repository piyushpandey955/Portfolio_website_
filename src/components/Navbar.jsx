import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { useTheme } from '../context/ThemeContext';
import Logo from './Logo';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Journey', href: '#journey' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.nav
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        <div className="navbar-container">
          <motion.div
            className="navbar-logo"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <a href="#home" className="navbar-brand">
              <Logo size={34} />
              <span className="brand-text mono">
                <span className="logo-bracket">&lt;</span>
                <span className="logo-name">PP</span>
                <span className="logo-bracket"> /&gt;</span>
              </span>
            </a>
          </motion.div>

          <ul className="navbar-menu">
            {navLinks.map((link, index) => (
              <motion.li
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.07 }}
              >
                <a href={link.href} className="nav-link">{link.name}</a>
              </motion.li>
            ))}
          </ul>

          <div className="navbar-actions">
            <motion.button
              className="theme-toggle"
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle theme"
            >
              {isDark ? <MdLightMode size={20} /> : <MdDarkMode size={20} />}
            </motion.button>

            <motion.button
              className="hamburger-btn"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="mobile-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              className="mobile-menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 220 }}
            >
              <ul className="mobile-menu-list">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ x: 40, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.06 }}
                  >
                    <a href={link.href} onClick={() => setIsOpen(false)}>
                      <span className="mobile-link-num mono">0{index + 1}.</span>
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
