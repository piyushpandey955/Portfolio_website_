import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import './Contact.css';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'piyush7838732397@gmail.com',
      link: 'mailto:piyush7838732397@gmail.com',
      color: '#EA4335',
    },
    {
      icon: FaLinkedin,
      title: 'LinkedIn',
      value: 'Connect with me',
      link: 'https://www.linkedin.com/in/piyushpandey955/',
      color: '#0A66C2',
    },
    {
      icon: SiLeetcode,
      title: 'LeetCode',
      value: 'piyushpandey955',
      link: 'https://leetcode.com/u/piyushpandey955/',
      color: '#FFA116',
    },
    {
      icon: FaGithub,
      title: 'GitHub',
      value: 'piyushpandey955',
      link: 'https://github.com/piyushpandey955',
      color: 'var(--text-color)',
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const card = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', damping: 14, stiffness: 100 } },
  };

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="contact-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label mono">// get in touch</span>
          <h2 className="section-title">Contact</h2>
          <p className="contact-intro">
            Open to new roles, freelance projects, and research collaborations. Let's build something impactful.
          </p>
        </motion.div>

        <motion.div
          className="contact-grid"
          variants={container}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {contactInfo.map((info, index) => (
            <motion.a
              key={index}
              href={info.link}
              target={info.link.startsWith('http') ? '_blank' : '_self'}
              rel="noopener noreferrer"
              className="contact-card"
              variants={card}
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98 }}
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
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3>Let's work together</h3>
          <p>Currently available for internships, full-time roles, and freelance AI/full-stack projects.</p>
          <a href="mailto:piyush7838732397@gmail.com" className="cta-button">
            Send me an email
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
