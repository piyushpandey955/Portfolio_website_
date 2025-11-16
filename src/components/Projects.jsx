import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub, FaExternalLinkAlt, FaDownload } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      title: 'HerShield - Women Safety Platform',
      description: 'A comprehensive women safety platform developed for Parul Hackverse. Features real-time location tracking, emergency SOS, and community support network.',
      image: '/assets/safety.png',
      github: 'https://github.com/piyushpandey955/HerShield_Parul_Hackverse',
      downloadApk: '/assets/hershield.apk',
      tags: ['Flutter', 'Firebase', 'Google Maps API', 'RAG', 'Geofencing', 'LangChain']
    },
    {
      title: 'LegalEdge AI',
      description: 'AI-powered legal assistance platform that helps users understand legal documents, generate contracts, and get legal advice using advanced NLP models.',
      image: '/assets/docs.png',
      github: 'https://github.com/piyushpandey955/LegalEdge-AI-Project',
      tags: ['Python', 'AI', 'NLP', 'FastAPI', 'Ollama', 'RAG']
    },
    {
      title: 'DocuVision',
      description: 'Advanced document processing and analysis tool using computer vision and OCR technology for automated data extraction and document management.',
      image: '/assets/docuvision.png',
      github: 'https://github.com/piyushpandey955/DocuVision',
      liveLink: 'https://docuvision-piyushpandey955-app.streamlit.app/',
      tags: ['Python', 'OpenCV', 'OCR', 'Machine Learning', 'StreamLit']
    },
    {
      title: 'Real-Time Translator',
      description: 'A real-time language translation application with speech recognition and text-to-speech capabilities supporting multiple languages.',
      image: '/assets/project-4.png',
      github: 'https://github.com/piyushpandey955/real-time-translator',
      liveLink: 'https://courageous-cobbler-655b6d.netlify.app/',
      tags: ['Python', 'Speech Recognition', 'Translation API', 'TTS', 'OpenAI Whisper', 'Meta AI NLLB', 'FastAPI']
    },
    {
      title: 'Waste Classifier App',
      description: 'Machine learning application that classifies waste into different categories for efficient recycling.',
      image: '/assets/waste-classifier.png',
      github: 'https://github.com/piyushpandey955/Waste-Classifier',
      tags: ['Python', 'Deep Learning', 'TensorFlow', 'Keras', 'CNN', 'Transfer Learning']
    },
    {
      title: 'Bhagwat Geeta AI Chatbot',
      description: 'AI-powered chatbot that provides wisdom and guidance from the Bhagavad Gita using natural language processing.',
      image: '/assets/chatbot.png',
      github: 'https://github.com/piyushpandey955/Bhagwat-Gita-Chatbot',
      tags: ['Python', 'AI', 'NLP', 'RAG', 'Vector DB', 'LangChain']
    },
    {
      title: 'Tkinter COVID Vaccination Project',
      description: 'A desktop application built with Python Tkinter for managing COVID vaccination records and appointments.',
      image: '/assets/project-1.png',
      github: 'https://github.com/piyushpandey955/covid_vaccination_project',
      tags: ['Python', 'Tkinter', 'MySQL']
    },
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio website showcasing projects, skills, and professional experience with modern design.',
      image: '/assets/project-2.png',
      github: 'https://github.com/piyushpandey955/Portfolio_website_',
      tags: ['HTML', 'CSS', 'JavaScript']
    },
    {
      title: 'Shoppe - E-commerce Website',
      description: 'Full-featured e-commerce platform with product catalog, shopping cart, and payment integration.',
      image: '/assets/project-3.png',
      github: 'https://github.com/piyushpandey955/E-commerce',
      tags: ['HTML', 'CSS', 'JavaScript']
    },
    {
      title: 'Basic Resume Webpage',
      description: 'Clean and professional resume webpage template with responsive design and modern UI elements.',
      image: '/assets/project-4.png',
      github: 'https://github.com/piyushpandey955/portfolio_project_basic',
      tags: ['HTML', 'CSS']
    },
    {
      title: 'Musify - Music Web App',
      description: 'Spotify clone with music streaming capabilities, playlists, and user-friendly interface.',
      image: '/assets/musify.png',
      github: 'https://github.com/piyushpandey955/Musify-Spotify_clone-',
      tags: ['HTML', 'CSS', 'JavaScript']
    },
    {
      title: 'Stopwatch Web App',
      description: 'Interactive stopwatch application with start, stop, reset, and lap time tracking features.',
      image: '/assets/timer.png',
      github: 'https://github.com/piyushpandey955/Stopwatch-Web-App',
      tags: ['HTML', 'CSS', 'JavaScript']
    },
    
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
    <section id="projects" className="projects" ref={ref}>
      <div className="projects-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subtitle">Browse My Recent</p>
          <h2 className="section-title">Projects</h2>
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              variants={itemVariants}
              whileHover={{ y: -10 }}
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
                        download
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
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="project-tag">{tag}</span>
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

