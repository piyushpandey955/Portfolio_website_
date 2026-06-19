import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  FaHtml5, FaCss3Alt, FaJs, FaPython, FaJava,
  FaReact, FaNodeJs, FaDatabase, FaBrain,
  FaRobot, FaNetworkWired, FaAws, FaFire,
} from 'react-icons/fa';
import {
  SiMongodb, SiMysql, SiFirebase, SiZod,
  SiGooglegemini, SiTailwindcss, SiFastapi,
  SiTensorflow,
} from 'react-icons/si';
import { TbBinaryTree, TbVectorTriangle, TbBrandTypescript } from 'react-icons/tb';
import { HiSparkles } from 'react-icons/hi';
import './Skills.css';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const skillGroups = [
    {
      label: 'AI / Machine Learning',
      color: '#00d4ff',
      skills: [
        { name: 'Deep Learning', icon: FaBrain, color: '#8B5CF6' },
        { name: 'RAG Pipelines', icon: FaNetworkWired, color: '#00d4ff' },
        { name: 'LLM Integration', icon: FaRobot, color: '#F59E0B' },
        { name: 'Agentic AI', icon: HiSparkles, color: '#EC4899' },
        { name: 'Transfer Learning', icon: FaBrain, color: '#10B981' },
        { name: 'CNN', icon: SiTensorflow, color: '#FF6F00' },
        { name: 'LangChain', icon: FaDatabase, color: '#10B981' },
        { name: 'LangGraph', icon: FaDatabase, color: '#3B82F6' },
        { name: 'Google.GenAI', icon: SiGooglegemini, color: '#4285F4' },
        { name: 'Vector DB', icon: TbVectorTriangle, color: '#8B5CF6' },
        { name: 'TFLite', icon: SiTensorflow, color: '#FF6F00' },
        { name: 'Pinecone', icon: TbVectorTriangle, color: '#00B488' },
      ],
    },
    {
      label: 'Cloud & DevOps',
      color: '#F59E0B',
      skills: [
        { name: 'AWS ECS', icon: FaAws, color: '#FF9900' },
        { name: 'AWS S3', icon: FaAws, color: '#FF9900' },
        { name: 'AWS Fargate', icon: FaAws, color: '#FF9900' },
        { name: 'DynamoDB', icon: FaAws, color: '#FF9900' },
        { name: 'ElasticCache', icon: FaAws, color: '#FF9900' },
        { name: 'CodeBuild', icon: FaAws, color: '#FF9900' },
        { name: 'AWS Amplify', icon: FaAws, color: '#FF9900' },
        { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
      ],
    },
    {
      label: 'Full Stack & Frameworks',
      color: '#10B981',
      skills: [
        { name: 'React', icon: FaReact, color: '#61DAFB' },
        { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
        { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
        { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
        { name: 'Zod', icon: SiZod, color: '#3E67B1' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
        { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
        { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
      ],
    },
    {
      label: 'Languages & Core CS',
      color: '#7c3aed',
      skills: [
        { name: 'Python', icon: FaPython, color: '#3776AB' },
        { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
        { name: 'Java', icon: FaJava, color: '#007396' },
        { name: 'C', icon: TbBrandTypescript, color: '#A8B9CC' },
        { name: 'DSA', icon: TbBinaryTree, color: '#FF6B6B' },
        { name: 'OOPS', icon: FaDatabase, color: '#6366F1' },
        { name: 'DBMS', icon: FaDatabase, color: '#0EA5E9' },
        { name: 'OS', icon: FaDatabase, color: '#64748B' },
      ],
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };

  const card = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', damping: 14, stiffness: 100 } },
  };

  return (
    <section id="skills" className="skills" ref={ref}>
      <div className="skills-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label mono">// tech stack</span>
          <h2 className="section-title">Skills</h2>
        </motion.div>

        <motion.div
          className="skills-groups"
          variants={container}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {skillGroups.map((group) => (
            <motion.div key={group.label} variants={card} className="skill-group">
              <div className="group-header">
                <span className="group-dot" style={{ background: group.color }} />
                <h3 className="group-label mono">{group.label}</h3>
              </div>

              <div className="skill-grid">
                {group.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    className="skill-chip"
                    whileHover={{ scale: 1.05, y: -3 }}
                    transition={{ type: 'spring', stiffness: 350, damping: 20 }}
                  >
                    <span className="chip-icon" style={{ color: skill.color }}>
                      <skill.icon />
                    </span>
                    <span className="chip-name">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
