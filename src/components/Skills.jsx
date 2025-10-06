import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaPython, FaJava, 
  FaReact, FaNodeJs, FaDatabase, FaBrain, FaFire,
  FaChartLine, FaLink, FaRobot, FaNetworkWired
} from 'react-icons/fa';
import { 
  SiMongodb, SiMysql, SiFirebase, SiZod,
  SiGooglegemini, SiLangchain, SiTensorflow
} from 'react-icons/si';
import { TbBinaryTree, TbVectorTriangle } from 'react-icons/tb';
import { HiSparkles } from 'react-icons/hi';
import './Skills.css';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const technicalSkills = [
    { name: 'HTML5', level: 'Experienced', icon: FaHtml5, color: '#E34F26' },
    { name: 'CSS3', level: 'Experienced', icon: FaCss3Alt, color: '#1572B6' },
    { name: 'JavaScript', level: 'Intermediate', icon: FaJs, color: '#F7DF1E' },
    { name: 'Java', level: 'Intermediate', icon: FaJava, color: '#007396' },
    { name: 'DS & Algorithms', level: 'Intermediate', icon: TbBinaryTree, color: '#FF6B6B' },
    { name: 'React Js', level: 'Intermediate', icon: FaReact, color: '#61DAFB' },
    { name: 'Node.js', level: 'Intermediate', icon: FaNodeJs, color: '#339933' },
    { name: 'ZOD', level: 'Intermediate', icon: SiZod, color: '#3E67B1' },
    { name: 'MongoDB', level: 'Intermediate', icon: SiMongodb, color: '#47A248' },
    { name: 'MySQL', level: 'Intermediate', icon: SiMysql, color: '#4479A1' },
    { name: 'Firebase', level: 'Intermediate', icon: SiFirebase, color: '#FFCA28' },
    { name: 'Python', level: 'Advanced', icon: FaPython, color: '#3776AB' },
    { name: 'RAG', level: 'Intermediate', icon: FaNetworkWired, color: '#8B5CF6' },
    { name: 'Vector DB', level: 'Intermediate', icon: TbVectorTriangle, color: '#EC4899' },
    { name: 'LangChain', level: 'Intermediate', icon: FaLink, color: '#10B981' },
    { name: 'LangGraph', level: 'Intermediate', icon: FaChartLine, color: '#3B82F6' },
    { name: 'Agentic AI', level: 'Intermediate', icon: FaRobot, color: '#F59E0B' },
    { name: 'Google.GenAI', level: 'Intermediate', icon: SiGooglegemini, color: '#4285F4' },
    { name: 'Transfer Learning', level: 'Intermediate', icon: FaBrain, color: '#8B5CF6' },
    { name: 'CNN', level: 'Intermediate', icon: SiTensorflow, color: '#FF6F00' },
  ];

  const professionalSkills = [
    { name: 'Problem Solving', level: 'Advanced', percentage: 90 },
    { name: 'Teamwork', level: 'Excellent', percentage: 85 },
    { name: 'Leadership', level: 'Good', percentage: 80 },
    { name: 'Time Management', level: 'Excellent', percentage: 88 },
    { name: 'Communication', level: 'Good', percentage: 82 },
    { name: 'Active Listening', level: 'Excellent', percentage: 87 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="skills" className="skills" ref={ref}>
      <div className="skills-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subtitle">Explore My</p>
          <h2 className="section-title">Skills</h2>
        </motion.div>

        <motion.div
          className="skills-content"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="skills-category">
            <h3 className="category-title">Technical Skills</h3>
            <div className="technical-skills-grid">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="skill-card"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="skill-icon" style={{ color: skill.color }}>
                    <skill.icon />
                  </div>
                  <h4>{skill.name}</h4>
                  <span className="skill-level">{skill.level}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="skills-category">
            <h3 className="category-title">Professional Skills</h3>
            <div className="professional-skills-list">
              {professionalSkills.map((skill, index) => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div
                      className="skill-progress"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.percentage}%` } : {}}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
