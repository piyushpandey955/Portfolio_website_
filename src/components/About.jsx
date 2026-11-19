import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGraduationCap, FaFileDownload, FaMicroscope, FaAward } from 'react-icons/fa';
import './About.css';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
  };

  const item = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', damping: 14, stiffness: 100 } },
  };

  const stats = [
    { value: '8.92', label: 'CGPA', sub: 'IMS Engineering' },
    { value: '2', label: 'IEEE Papers', sub: 'Published' },
    { value: '95.19%', label: 'Accuracy', sub: 'Waste Classifier CNN' },
    { value: '3×', label: 'Hackathon Wins', sub: 'IEEE, IIT, BugSense' },
  ];

  return (
    <section id="about" className="about" ref={ref}>
      <div className="about-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label mono">// about me</span>
          <h2 className="section-title">Who I Am</h2>
        </motion.div>

        <motion.div
          className="about-content"
          variants={container}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div variants={item} className="about-image">
            <div className="image-container">
              <img src="/assets/about-me.png" alt="Piyush Kumar Pandey" />
              <div className="image-overlay" />
            </div>
          </motion.div>

          <div className="about-details">
            <motion.div variants={item} className="about-cards">
              <div className="about-card">
                <div className="card-icon"><FaGraduationCap /></div>
                <h3>Education</h3>
                <p className="card-label">IMS Engineering College</p>
                <p className="card-text">B.Tech CSE · CGPA 8.92</p>
              </div>

              <div className="about-card">
                <div className="card-icon"><FaMicroscope /></div>
                <h3>Research</h3>
                <p className="card-label">IEEE Xplore Publication</p>
                <p className="card-text">Deep Learning · CNN · TFLite</p>
              </div>

              <div className="about-card">
                <div className="card-icon"><FaAward /></div>
                <h3>Achievements</h3>
                <p className="card-label">3× Hackathon Winner</p>
                <p className="card-text">IEEE · IIT Patna · Walmart</p>
              </div>

              <div className="about-card">
                <div className="card-icon"><FaFileDownload /></div>
                <h3>Resume</h3>
                <p className="card-label">View Full Profile</p>
                <a href="/assets/Piyush_Kumar_Pandey_Resume.pdf" download>
                  <button className="download-btn">Download CV</button>
                </a>
              </div>
            </motion.div>

            <motion.div variants={item} className="about-text">
              <p>
                I'm an AI Engineer and full-stack developer currently an SDE 1 at{' '}
                <strong>Trilogy Innovations</strong>, where I am the only engineer on a Live Campus Tracking
                platform that runs on 55+ cameras across 3 US campuses.
              </p>
              <p>
                My research at Amity University produced a published{' '}
                <strong>IEEE paper</strong> on deep learning for waste classification — a custom CNN
                with multi-head attention achieving <strong>95.19% accuracy</strong> on 76k+ images,
                deployed as a mobile app via TensorFlow Lite.
              </p>
              <p>
                I specialise at the intersection of AI and software engineering: LLM integration,
                agentic architectures, RAG pipelines, real-time computer vision, and production
                full-stack systems. B.Tech CSE (2022–2026) from IMS Engineering College, CGPA 8.92.
              </p>
            </motion.div>

            <motion.div variants={item} className="about-stats">
              {stats.map((s) => (
                <div key={s.label} className="stat-item">
                  <span className="stat-value gradient-text">{s.value}</span>
                  <span className="stat-label">{s.label}</span>
                  <span className="stat-sub mono">{s.sub}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
