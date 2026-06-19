import { motion } from 'framer-motion';
import { FaHeart, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import Logo from './Logo';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Journey', href: '#journey' },
    { name: 'Contact', href: '#contact' },
  ];

  const socials = [
    { icon: FaGithub, href: 'https://github.com/piyushpandey955', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/piyushpandey955/', label: 'LinkedIn' },
    { icon: SiLeetcode, href: 'https://leetcode.com/u/piyushpandey955/', label: 'LeetCode' },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="footer-brand">
            <span className="footer-logo">
              <Logo size={28} />
              <span className="footer-logo-text mono">
                <span className="logo-bracket">&lt;</span>PP<span className="logo-bracket"> /&gt;</span>
              </span>
            </span>
            <p className="footer-tagline">Building AI that impacts millions · One problem at a time</p>
          </div>

          <nav className="footer-nav">
            <ul>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer-socials">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label={s.label}
              >
                <s.icon />
              </a>
            ))}
          </div>

          <div className="footer-divider" />

          <div className="footer-bottom">
            <p className="footer-copyright mono">
              © {currentYear} Piyush Kumar Pandey — All rights reserved
            </p>
            <p className="footer-made-with">
              Made with <FaHeart className="heart-icon" /> using React &amp; Framer Motion
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
