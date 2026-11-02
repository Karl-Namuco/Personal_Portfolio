import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'

function Experience() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="content-section timeline-section" id="experience" aria-labelledby="experience-title">
      <div className="content-width">
        <SectionHeading
          id="experience-title"
          index="05"
          eyebrow="The path so far"
          title="Learning with intention."
          description="A foundation in information technology, with room for the next chapter."
        />
        <div className="experience-timeline">
          <motion.article
            className="experience-entry"
            initial={reduceMotion ? false : { opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5 }}
          >
            <div className="experience-entry__date">Education</div>
            <div className="experience-entry__content">
              <span className="experience-entry__kind">Bachelor&apos;s degree</span>
              <h3>Bachelor of Science in Information Technology</h3>
              <p>Technological University of the Philippines — Manila</p>
              <span className="experience-entry__kind experience-entry__kind--spaced">Senior high school · STEM</span>
              <h3 className="experience-entry__secondary-title">Saint Francis of Assisi College</h3>
            </div>
            <span className="experience-entry__marker" aria-hidden="true" />
          </motion.article>
          <motion.article
            className="experience-entry"
            initial={reduceMotion ? false : { opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            <div className="experience-entry__date">Feb 2023</div>
            <div className="experience-entry__content">
              <span className="experience-entry__kind">Grade 12 STEM · 200 hours</span>
              <h3>IT Work Immersion</h3>
              <p>E. Zarate Hospital · Las Piñas City</p>
              <ul className="experience-entry__responsibilities">
                <li>Assisted nurses and staff with entering patient details into computer records using Microsoft Excel.</li>
                <li>Edited and corrected patient forms for printing and completion when needed.</li>
              </ul>
            </div>
            <span className="experience-entry__marker" aria-hidden="true" />
          </motion.article>
          <motion.article
            className="experience-entry experience-entry--editable"
            initial={reduceMotion ? false : { opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5, delay: 0.16 }}
          >
            <div className="experience-entry__date">Next chapter</div>
            <div className="experience-entry__content">
              <span className="experience-entry__kind">Internship · Opportunity sought</span>
              <h3>Looking for an IT internship</h3>
              <p>Interested in putting my development, networking, and IT support skills to work in a professional setting.</p>
              <a className="button button--light experience-entry__cta" href="#contact">
                Get in touch <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>
            <span className="experience-entry__marker" aria-hidden="true" />
          </motion.article>
        </div>
      </div>
    </section>
  )
}

export default Experience
