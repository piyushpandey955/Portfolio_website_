import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGraduationCap, FaFileDownload } from 'react-icons/fa';
import './About.css';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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
    <section id="about" className="about" ref={ref}>
      <div className="about-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subtitle">Get To Know More</p>
          <h2 className="section-title">About Me</h2>
        </motion.div>

        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="about-image">
            <div className="image-container">
              <img src="/assets/about-me.png" alt="About me" />
              <div className="image-overlay"></div>
            </div>
          </motion.div>

          <div className="about-details">
            <motion.div variants={itemVariants} className="about-cards">
              <div className="about-card">
                <div className="card-icon">
                  <FaGraduationCap />
                </div>
                <h3>Education</h3>
                <p className="card-label">IMS Engineering College</p>
                <p className="card-text">Computer Science & Engineering</p>
              </div>

              <div className="about-card">
                <div className="card-icon">
                  <FaFileDownload />
                </div>
                <h3>Resume</h3>
                <p className="card-label">Download My CV</p>
                <a href="/assets/Piyush Kumar Pandey - Resume01.pdf" download>
                  <button className="download-btn">Download</button>
                </a>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="about-text">
              <p>
                I'm a passionate Computer Science student in my third year, with a strong 
                interest in web development and problem-solving. I love creating intuitive 
                and dynamic user experiences through clean, efficient code.
              </p>
              <p>
                My journey in tech has been driven by curiosity and a desire to build 
                solutions that make a difference. I'm constantly learning new technologies 
                and best practices to stay at the forefront of web development.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open-source projects, or solving algorithmic challenges 
                on platforms like LeetCode.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
