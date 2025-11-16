import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Typed from 'typed.js';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import './Hero.css';

const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        'Web Developer',
        'Problem Solver',
        'Full Stack Developer',
        'UI/UX Enthusiast'
      ],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1500,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 15,
        stiffness: 100,
        delay: 0.5
      }
    }
  };

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/piyushpandey955', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/piyushpandey955/', label: 'LinkedIn' },
    { icon: SiLeetcode, href: 'https://leetcode.com/u/piyushpandey955/', label: 'LeetCode' },
  ];

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="hero-greeting">
            <span className="wave">👋</span> Hi, I'm
          </motion.div>

          <motion.h1 variants={itemVariants} className="hero-name">
            Piyush <span className="gradient-text">Kumar Pandey</span>
          </motion.h1>

          <motion.div variants={itemVariants} className="hero-title">
            <span>I'm a passionate </span>
            <span ref={typedRef} className="typed-text"></span>
          </motion.div>

          <motion.p variants={itemVariants} className="hero-description">
            A Computer Science student passionate about creating beautiful, 
            functional, and user-friendly web applications.
          </motion.p>

          <motion.div variants={itemVariants} className="hero-buttons">
            <a href="#contact" className="btn btn-primary">
              Get In Touch
            </a>
            <a href="/assets/Piyush Kumar Pandey - Resume01.pdf" download className="btn btn-secondary">
              Download CV
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="hero-socials">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.label}
              >
                <social.icon />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div 
          className="hero-image"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="image-wrapper"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <img src="/assets/bg.png" alt="Piyush" />
            <div className="image-glow"></div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <motion.div
          className="mouse"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <div className="wheel"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
