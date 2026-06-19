import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Journey.css';

const chapters = [
  {
    num: '01',
    year: '2024',
    title: 'HerShield',
    subtitle: 'Safety Intelligence for Women',
    problem:
      'In India, millions of women travel through unsafe routes daily — with no system actively watching for risk.',
    what: 'Real-time threat detection combining YOLOv8 object detection and LSTM-based weapon recognition on live video feeds. Integrated SOS with live location sharing and a city-wide heatmap of high-risk zones.',
    impact: '95.12% accuracy. IEEE MEGA PROJECT COMPETITION WINNER — 1st place out of all participating university teams.',
    quote:
      'The real challenge wasn\'t the model. It was building something a scared person could use with one hand in the dark.',
    tags: ['YOLOv8', 'LSTM', 'Computer Vision', 'Flutter', 'Twilio API', 'Google Maps API'],
    github: 'https://github.com/piyushpandey955',
    accentHue: 'green',
  },
  {
    num: '02',
    year: '2024',
    title: 'Waste Classifier',
    subtitle: 'Environmental AI on Your Phone',
    problem:
      'Recycling failure starts at the first step: the bin. Most people don\'t know what goes where.',
    what: 'Custom CNN trained on 13,000+ images across 12 waste categories. Deployed on-device via TFLite — no internet required, no data sent anywhere. App scans and classifies instantly from the camera.',
    impact: '92.7% accuracy on a live mobile device. Offline-first means it works in rural areas with zero connectivity.',
    quote:
      'Making AI that works for people who\'ve never heard the term AI — that\'s harder, and more important, than any benchmark.',
    tags: ['CNN', 'TensorFlow', 'TFLite', 'Flutter', 'On-device ML'],
    github: 'https://github.com/piyushpandey955',
    accentHue: 'violet',
  },
  {
    num: '03',
    year: '2024',
    title: 'LiveTranslate',
    subtitle: 'Break Every Language Barrier. Live.',
    problem:
      'Real-time spoken translation — fast enough for a conversation — didn\'t exist at a price point normal people could afford.',
    what: 'Browser-based pipeline: speech → Whisper (STT) → mBART50 (translation) → WebSpeech (TTS) in under 2 seconds for 50+ language pairs. No native app, no setup — just open and speak.',
    impact: 'End-to-end latency under 2s. Deployed on Hugging Face Spaces — accessible to anyone with a browser.',
    quote:
      'Language shouldn\'t be a privilege. I wanted a tool I\'d give to my grandmother.',
    tags: ['OpenAI Whisper', 'mBART50', 'FastAPI', 'React', 'WebSpeech API', 'Hugging Face'],
    github: 'https://github.com/piyushpandey955',
    accentHue: 'green',
  },
  {
    num: '04',
    year: '2025',
    title: 'LegalEdge AI',
    subtitle: 'Legal Intelligence for Everyone',
    problem:
      'Legal advice in India costs more per hour than most people earn in a week. The law exists — access to it doesn\'t.',
    what: 'Agentic RAG pipeline over the Indian Penal Code and constitutional documents. Lawyer-quality answers with citations. Multi-turn memory. Handles procedural queries, rights, and case scenarios.',
    impact: 'Launched as SaaS. Achieved 89% factual accuracy vs. senior law student baseline on test set.',
    quote:
      'Every person should understand their rights. Not just people who can afford it.',
    tags: ['LangChain', 'LangGraph', 'RAG', 'OpenAI', 'Pinecone', 'FastAPI', 'Next.js'],
    github: 'https://github.com/piyushpandey955',
    accentHue: 'violet',
  },
  {
    num: '05',
    year: '2025',
    title: 'DocuVision',
    subtitle: 'Enterprise Document Intelligence',
    problem:
      'Enterprises drown in unstructured documents — contracts, invoices, reports. Manual extraction doesn\'t scale.',
    what: 'Multi-modal document pipeline using Tesseract OCR + GPT-4 Vision for semantic parsing. Agentic extraction workflow handles tables, charts, handwriting. Role-based SaaS dashboard with audit trail.',
    impact: 'Reduced document processing time by 80% in pilot. Handles 10,000+ pages per batch.',
    quote:
      'The most boring-sounding problems often sit inside the most valuable companies. That\'s exactly where I want to be.',
    tags: ['GPT-4 Vision', 'Tesseract OCR', 'LangGraph', 'AWS S3', 'FastAPI', 'Next.js', 'MongoDB'],
    github: 'https://github.com/piyushpandey955',
    accentHue: 'green',
  },
];

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const ChapterCard = ({ chapter, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });

  return (
    <motion.article
      ref={ref}
      className={`chapter chapter--${chapter.accentHue}`}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={reveal}
      transition={{ delay: 0.05 }}
    >
      {/* Ghost chapter number */}
      <span className="chapter-ghost mono" aria-hidden="true">
        {chapter.num}
      </span>

      <div className="chapter-inner">
        {/* Header row */}
        <div className="chapter-header">
          <div className="chapter-meta">
            <span className="chapter-year mono">{chapter.year}</span>
            <span className="chapter-num-label mono">{chapter.num} / 05</span>
          </div>
          <div className="chapter-links">
            {chapter.github && (
              <a
                href={chapter.github}
                target="_blank"
                rel="noopener noreferrer"
                className="chapter-link"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
            )}
            {chapter.live && (
              <a
                href={chapter.live}
                target="_blank"
                rel="noopener noreferrer"
                className="chapter-link"
                aria-label="Live"
              >
                <FaExternalLinkAlt />
              </a>
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className="chapter-title">{chapter.title}</h3>
        <p className="chapter-subtitle mono">{chapter.subtitle}</p>

        {/* Problem statement — the hook */}
        <p className="chapter-problem">{chapter.problem}</p>

        {/* What was built */}
        <div className="chapter-body">
          <p className="chapter-what">{chapter.what}</p>

          {/* Founder quote */}
          <blockquote className="chapter-quote">
            <span className="quote-mark" aria-hidden="true">"</span>
            {chapter.quote}
          </blockquote>

          {/* Impact line */}
          <p className="chapter-impact mono">
            <span className="impact-label">Impact →</span> {chapter.impact}
          </p>
        </div>

        {/* Tags */}
        <div className="chapter-tags">
          {chapter.tags.map((tag) => (
            <span key={tag} className="chapter-tag mono">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
};

const Journey = () => {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-5% 0px' });

  return (
    <section id="journey" className="journey">
      <div className="journey-container">
        {/* Section header */}
        <motion.div
          ref={headerRef}
          className="journey-header"
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-label mono">// the journey</span>
          <h2 className="journey-title">
            Five problems.<br />
            <span className="journey-title-accent">One direction.</span>
          </h2>
          <p className="journey-intro">
            Not a list of projects — a record of bets. Each one was a vote for the kind
            of world I want to help build: where AI amplifies human capacity regardless
            of who you are, what language you speak, or what you can afford.
          </p>
        </motion.div>

        {/* Chapters */}
        <div className="journey-chapters">
          {chapters.map((chapter, i) => (
            <ChapterCard key={chapter.num} chapter={chapter} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="journey-footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="journey-footer-line mono">
            Chapter 06 is being written. At Trilogy Innovations. In production.
          </p>
          <a
            href="https://github.com/piyushpandey955"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            <FaGithub /> View all on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Journey;
