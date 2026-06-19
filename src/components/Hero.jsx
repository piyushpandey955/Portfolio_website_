import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import './Hero.css';

const HEADLINE = [
  { text: 'Making AI', accent: false },
  { text: 'ACCESSIBLE.', accent: true },
];

const CREDENTIALS = [
  { dot: true, text: 'Building @ Trilogy Innovations' },
  { dot: false, text: 'IEEE Published' },
  { dot: false, text: '1st Place IEEE Mega Project' },
  { dot: false, text: 'NVIDIA Certified' },
];

const socials = [
  { Icon: FaGithub,  href: 'https://github.com/piyushpandey955',                    label: 'GitHub'   },
  { Icon: FaLinkedin, href: 'https://www.linkedin.com/in/piyushpandey955/',           label: 'LinkedIn' },
  { Icon: SiLeetcode, href: 'https://leetcode.com/u/piyushpandey955/',                label: 'LeetCode' },
  { Icon: FaEnvelope, href: 'mailto:piyush7838732397@gmail.com',                      label: 'Email'    },
];

const clip = {
  hidden: { clipPath: 'inset(100% 0% 0% 0%)', y: 16 },
  visible: (d) => ({
    clipPath: 'inset(0% 0% 0% 0%)',
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: d },
  }),
};

const fade = (d) => ({
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: d } },
});

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const photoY = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);

  return (
    <section id="home" className="hero" ref={ref}>
      <div className="hero-grid-bg" aria-hidden="true" />
      <div className="hero-glow-1" aria-hidden="true" />
      <div className="hero-glow-2" aria-hidden="true" />

      <div className="hero-container">
        {/* ── Left: copy ── */}
        <div className="hero-copy">
          {/* Eyebrow */}
          <motion.div
            className="hero-eyebrow mono"
            variants={fade(0)}
            initial="hidden"
            animate="visible"
          >
            <span className="eyebrow-live">
              <span className="live-dot" />
              SDE Intern · Trilogy Innovations
            </span>
          </motion.div>

          {/* Headline */}
          <h1 className="hero-headline" aria-label="Making AI Accessible.">
            {HEADLINE.map(({ text, accent }, i) => (
              <span key={text} className="line-wrap">
                <motion.span
                  className={`headline-line${accent ? ' accent' : ''}`}
                  custom={0.1 + i * 0.16}
                  variants={clip}
                  initial="hidden"
                  animate="visible"
                >
                  {text}
                </motion.span>
              </span>
            ))}
          </h1>

          {/* Mission */}
          <motion.p
            className="hero-mission"
            variants={fade(0.5)}
            initial="hidden"
            animate="visible"
          >
            Building tools the next billion people deserve to have —
            from on-device AI translation to safety systems to environmental intelligence.
            One engineer. Infinite ambition.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="hero-ctas"
            variants={fade(0.65)}
            initial="hidden"
            animate="visible"
          >
            <a href="#journey" className="btn btn-primary">
              See the Journey <FaArrowDown size={13} />
            </a>
            <a href="/assets/Piyush_Kumar_Pandey_R05.pdf" download className="btn btn-ghost">
              Download CV
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div
            className="hero-socials"
            variants={fade(0.78)}
            initial="hidden"
            animate="visible"
          >
            {socials.map(({ Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className="social-icon"
                aria-label={label}
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon />
              </motion.a>
            ))}
          </motion.div>

          {/* Credentials strip */}
          <motion.div
            className="hero-creds"
            variants={fade(0.92)}
            initial="hidden"
            animate="visible"
          >
            {CREDENTIALS.map(({ dot, text }, i) => (
              <span key={text} className="cred-item">
                {dot ? <span className="cred-live-dot" aria-hidden="true" /> : (i > 0 && <span className="cred-sep" aria-hidden="true">·</span>)}
                <span className="mono">{text}</span>
              </span>
            ))}
          </motion.div>
        </div>

        {/* ── Right: photo ── */}
        <motion.div
          className="hero-photo-wrap"
          style={{ y: photoY }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
        >
          <div className="photo-frame">
            <img src="/assets/bg.png" alt="Piyush Kumar Pandey" />
            <div className="photo-ring photo-ring-1" aria-hidden="true" />
            <div className="photo-ring photo-ring-2" aria-hidden="true" />
            <div className="photo-glow" aria-hidden="true" />
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        className="scroll-cue"
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <FaArrowDown size={14} />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default Hero;
