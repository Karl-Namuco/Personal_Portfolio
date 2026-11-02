import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDownRight, ArrowUpRight, MoveUpRight } from 'lucide-react'

function Hero() {
  const reduceMotion = useReducedMotion()
  const [profilePhotoFailed, setProfilePhotoFailed] = useState(false)

  return (
    <section className="hero-section timeline-section" id="home" aria-labelledby="hero-title">
      <div className="hero-section__inner content-width">
        <div className="hero-copy">
          <motion.p
            className="eyebrow hero-eyebrow"
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.45 }}
          >
            <span className="status-dot" /> HELLO, I&apos;M
          </motion.p>
          <motion.h1
            id="hero-title"
            initial={reduceMotion ? false : { opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            Karl Cedrick
            <span>Namuco<span className="hero-period">.</span></span>
          </motion.h1>
          <motion.p
            className="hero-role"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.55 }}
          >
            IT Student <i /> Full-Stack Development <i /> Networking &amp; Cybersecurity
          </motion.p>
          <motion.p
            className="hero-intro"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.55 }}
          >
            I build practical digital experiences and explore the systems and technologies behind them, combining software development, infrastructure, and problem-solving.
          </motion.p>
          <motion.div
            className="hero-actions"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.55 }}
          >
            <a className="button button--light" href="#projects">
              Explore my work <ArrowDownRight size={16} aria-hidden="true" />
            </a>
            <a className="text-link" href="#contact">
              Get in touch <MoveUpRight size={15} aria-hidden="true" />
            </a>
          </motion.div>
        </div>
        <motion.div
          className="hero-portrait"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.97, x: 16 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.45, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          aria-label={profilePhotoFailed ? 'Profile photo placeholder' : 'Karl'}
          role="img"
        >
          <div className="hero-portrait__grid" />
          <span className="hero-portrait__frame hero-portrait__frame--top" />
          <span className="hero-portrait__frame hero-portrait__frame--bottom" />
          {!profilePhotoFailed && (
            <img
              className="hero-portrait__photo"
              src="/assets/profile/profile-photo.jpg"
              alt=""
              onError={() => setProfilePhotoFailed(true)}
            />
          )}
          {profilePhotoFailed && <div className="hero-portrait__monogram">K<span>.</span>N</div>}
          <div className="hero-portrait__caption">
            <span>May 21, 2005</span>
            <span>{profilePhotoFailed ? 'Photo coming soon' : 'Karl Cedrick Namuco'} <ArrowUpRight size={13} /></span>
          </div>
          <span className="hero-portrait__coordinate">14°35&apos;N / 120°59&apos;E</span>
        </motion.div>
        <a className="hero-scroll" href="#about">
          <span>Scroll to explore</span><span className="hero-scroll__line" />
        </a>
      </div>
    </section>
  )
}

export default Hero
