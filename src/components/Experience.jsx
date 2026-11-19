import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaBriefcase, FaFlask, FaExternalLinkAlt } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const experiences = [
    {
      company: 'Trilogy Innovations',
      role: 'SDE 1',
      duration: 'Jun 2026 – Present',
      type: 'current',
      icon: FaBriefcase,
      link: 'https://www.linkedin.com/company/trilogy-innovations/',
      bullets: [
        'Sole engineer of the Live Campus Tracking platform, which turns security cameras into a live map of who is where. Took it from a written idea to 55+ cameras across 3 US campuses in 10 months.',
        'Raised correct identification of people on camera from about 25% to 78% of their time in view, with a nightly AI system built in 7 days.',
        'Ended 7,000+ video stream drops a day by moving video processing to GPUs. Built an AI safety check that reviews about 3,300 clips a day, where one model flags and a second confirms before staff get an alert.',
        'Scaled the platform on AWS from 1 campus to 3, and run it alone with 13 AI agents and 10+ MCP servers.',
      ],
      tags: ['LLM Agents', 'MCP', 'Computer Vision', 'FastAPI', 'AWS', 'GPU video'],
    },
    {
      company: 'Trilogy Innovations',
      role: 'SDE Intern',
      duration: 'Jan 2026 – Jun 2026',
      type: 'past',
      icon: FaBriefcase,
      link: 'https://www.linkedin.com/company/trilogy-innovations/',
      bullets: [
        'Built the first version alone: database, REST APIs (FastAPI), Next.js website, and AWS deployment.',
        'Connected live camera feeds to face recognition for automatic presence tracking and visitor management.',
      ],
      tags: ['Next.js', 'FastAPI', 'AWS', 'CI/CD'],
    },
    {
      company: 'Amity University, Noida',
      role: 'Undergraduate Student Researcher',
      duration: 'June 2024 – July 2024',
      type: 'past',
      icon: FaFlask,
      link: 'https://ieeexplore.ieee.org/',
      bullets: [
        'Designed and implemented a custom CNN architecture using transfer learning and multi-head attention to classify biodegradable vs. non-biodegradable waste — 95.19% accuracy on a dataset of 76,000+ labeled images.',
        'Deployed the model to a real-time mobile application using Flutter and TensorFlow Lite, enabling on-device inference for waste classification without internet connectivity.',
        'Published a peer-reviewed research paper in IEEE Xplore detailing the architecture, the dataset, and deployment strategies.',
      ],
      tags: ['Deep Learning', 'CNN', 'Transfer Learning', 'Multi-Head Attention', 'Flutter', 'TFLite', 'IEEE Published'],
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const cardAnim = {
    hidden: { x: -30, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: 'spring', damping: 16, stiffness: 100 } },
  };

  return (
    <section id="experience" className="experience" ref={ref}>
      <div className="experience-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label mono">// work &amp; research</span>
          <h2 className="section-title">Experience</h2>
        </motion.div>

        <motion.div
          className="timeline"
          variants={container}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`timeline-item ${exp.type}`}
              variants={cardAnim}
            >
              <div className="timeline-left">
                <div className="timeline-icon-wrap">
                  <exp.icon />
                </div>
                {index < experiences.length - 1 && <div className="timeline-line" />}
              </div>

              <div className="timeline-card">
                <div className="timeline-card-header">
                  <div className="timeline-meta">
                    <div className="timeline-company-row">
                      <h3 className="timeline-company">{exp.company}</h3>
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="timeline-ext-link"
                        aria-label={`${exp.company} link`}
                      >
                        <FaExternalLinkAlt size={12} />
                      </a>
                    </div>
                    <span className="timeline-role">{exp.role}</span>
                  </div>
                  <div className="timeline-right-meta">
                    <span className={`timeline-badge ${exp.type === 'current' ? 'badge-current' : 'badge-past'}`}>
                      {exp.type === 'current' ? '● Present' : 'Past'}
                    </span>
                    <span className="timeline-duration mono">{exp.duration}</span>
                  </div>
                </div>

                <ul className="timeline-bullets">
                  {exp.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>

                <div className="timeline-tags">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="exp-tag mono">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
