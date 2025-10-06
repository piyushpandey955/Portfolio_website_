import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import './Contact.css';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'piyush7838732397@gmail.com',
      link: 'mailto:piyush7838732397@gmail.com',
      color: '#EA4335'
    },
    {
      icon: FaLinkedin,
      title: 'LinkedIn',
      value: 'Connect with me',
      link: 'https://www.linkedin.com/in/piyush-kumar-pandey-897ba4299/',
      color: '#0A66C2'
    },
    {
      icon: SiLeetcode,
      title: 'LeetCode',
      value: 'View my profile',
      link: 'https://leetcode.com/u/piyushpandey955/',
      color: '#FFA116'
    },
    {
      icon: FaGithub,
      title: 'GitHub',
      value: 'Check my repos',
      link: 'https://github.com/piyushpandey955',
      color: '#fff'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="contact-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subtitle">Get In Touch</p>
          <h2 className="section-title">Contact Me</h2>
          <p className="contact-intro">
            Feel free to reach out! I'm always open to discussing new projects,
            creative ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>

        <motion.div
          className="contact-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {contactInfo.map((info, index) => (
            <motion.a
              key={index}
              href={info.link}
              target={info.link.startsWith('http') ? '_blank' : '_self'}
              rel="noopener noreferrer"
              className="contact-card"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="contact-icon" style={{ color: info.color }}>
                <info.icon />
              </div>
              <h3 className="contact-title">{info.title}</h3>
              <p className="contact-value">{info.value}</p>
              <div className="contact-arrow">→</div>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          className="cta-section"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3>Let's work together!</h3>
          <p>I'm currently available for freelance work and full-time opportunities.</p>
          <a href="mailto:piyush7838732397@gmail.com" className="cta-button">
            Send me an email
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
