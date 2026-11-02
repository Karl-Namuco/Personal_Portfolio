import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'

function About() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="content-section timeline-section" id="about" aria-labelledby="about-title">
      <div className="content-width">
        <SectionHeading
          id="about-title"
          index="01"
          eyebrow="A little about me"
          title="Curious by nature. Practical by design."
          description="I’m an Information Technology student at the Technological University of the Philippines — Manila."
        />
        <div className="about-grid">
          <motion.p
            className="about-statement"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55 }}
          >
            I enjoy moving between <span>building software</span> and understanding the systems that make it work.
          </motion.p>
          <div className="about-details">
            <p>
              My interests span full-stack web development, networking, infrastructure configuration, and cybersecurity. I like turning complex requirements into clear, useful solutions—and learning how technology behaves beyond the screen.
            </p>
            <a className="inline-link" href="#skills">
              Explore my skill set <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="about-facts">
          <div><span className="fact-label">Currently</span><span>BS Information Technology</span></div>
          <div><span className="fact-label">Campus</span><span>TUP — Manila</span></div>
          <div><span className="fact-label">Interested in</span><span>Software · Systems · Security</span></div>
        </div>
      </div>
    </section>
  )
}

export default About
