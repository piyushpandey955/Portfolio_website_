import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub, FaExternalLinkAlt, FaDownload } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const projects = [
    {
      title: 'LiveTranslate',
      description: 'Real-time speech translation system using local LLM pipelines — OpenAI Whisper for streaming ASR, Meta NLLB for multilingual translation, and Web Speech API for browser-side processing.',
      image: '/assets/project-4.png',
      github: 'https://github.com/piyushpandey955/real-time-translator',
      liveLink: 'https://courageous-cobbler-655b6d.netlify.app/',
      tags: ['Python', 'Whisper ASR', 'Meta NLLB', 'FastAPI', 'Web Speech API', 'TTS'],
    },
    {
      title: 'HerShield — Women Safety Platform',
      description: 'Women safety app with safety indexing for localities based on crime data, community-assist emergency alerts via Google Maps, and a RAG chatbot for guidance.',
      image: '/assets/safety.png',
      github: 'https://github.com/piyushpandey955/HerShield_Parul_Hackverse',
      downloadApk: 'https://drive.google.com/file/d/1UPAx1u4_pHlUscd0D3LN1aj2snMXNITY/view?usp=drive_link',
      tags: ['Flutter', 'Firebase', 'Google Maps API', 'RAG', 'LangChain', 'Geofencing'],
    },
    {
      title: 'LegalEdge AI',
      description: 'AI-powered legal assistance platform for understanding legal documents, generating contracts, and getting legal advice using advanced RAG with Ollama-backed NLP models.',
      image: '/assets/docs.png',
      github: 'https://github.com/piyushpandey955/LegalEdge-AI-Project',
      tags: ['Python', 'FastAPI', 'RAG', 'Ollama', 'Vector DB', 'NLP'],
    },
    {
      title: 'DocuVision',
      description: 'Advanced document processing tool using computer vision and OCR for automated data extraction and document management.',
      image: '/assets/docuvision.png',
      github: 'https://github.com/piyushpandey955/DocuVision',
      liveLink: 'https://docuvision-piyushpandey955-app.streamlit.app/',
      tags: ['Python', 'OpenCV', 'OCR', 'Machine Learning', 'Streamlit'],
    },
    {
      title: 'Waste Classifier App',
      description: 'Custom CNN with transfer learning and multi-head attention classifying biodegradable vs. non-biodegradable waste — 95.12% accuracy on 76k+ images. Published in IEEE Xplore.',
      image: '/assets/waste-classifier.png',
      github: 'https://github.com/piyushpandey955/Waste-Classifier',
      tags: ['Deep Learning', 'TensorFlow', 'CNN', 'Transfer Learning', 'Flutter', 'TFLite'],
    },
    {
      title: 'Bhagwat Geeta AI Chatbot',
      description: 'AI-powered chatbot delivering wisdom from the Bhagavad Gita using Retrieval-Augmented Generation over indexed scripture with a vector database backend.',
      image: '/assets/chatbot.png',
      github: 'https://github.com/piyushpandey955/Bhagwat-Gita-Chatbot',
      tags: ['Python', 'RAG', 'Vector DB', 'LangChain', 'NLP'],
    },
    {
      title: 'Shoppe — E-commerce Website',
      description: 'Full-featured e-commerce platform with product catalog, shopping cart, and payment integration.',
      image: '/assets/project-3.png',
      github: 'https://github.com/piyushpandey955/E-commerce',
      tags: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      title: 'COVID Vaccination App',
      description: 'Desktop application built with Python Tkinter for managing COVID vaccination records and appointments, backed by MySQL.',
      image: '/assets/project-1.png',
      github: 'https://github.com/piyushpandey955/covid_vaccination_project',
      tags: ['Python', 'Tkinter', 'MySQL'],
    },
    {
      title: 'Musify — Spotify Clone',
      description: 'Spotify-inspired music streaming interface with playlists and a user-friendly playback UI.',
      image: '/assets/musify.png',
      github: 'https://github.com/piyushpandey955/Musify-Spotify_clone-',
      tags: ['HTML', 'CSS', 'JavaScript'],
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
    <section id="projects" className="projects" ref={ref}>
      <div className="projects-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label mono">// what i've built</span>
          <h2 className="section-title">Projects</h2>
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={container}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              variants={card}
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div className="project-image-container">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <FaGithub />
                      <span>Code</span>
                    </a>
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <FaExternalLinkAlt />
                        <span>Live</span>
                      </a>
                    )}
                    {project.downloadApk && (
                      <a
                        href={project.downloadApk}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <FaDownload />
                        <span>APK</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">{tag}</span>
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

export default Projects;
