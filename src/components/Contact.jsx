import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDownRight, ArrowUpRight, BriefcaseBusiness, GitBranch, Mail } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'

const contactDetails = {
  email: 'namucokarlcedrickr@gmail.com',
  github: 'https://github.com/Karl-Namuco',
  linkedin: 'https://www.linkedin.com/in/karl-namuco-9489b7390/',
  other: '',
}

function ContactLink({ href, icon: Icon, label, value, username, isEmail = false }) {
  if (!value) {
    return (
      <div className="contact-link contact-link--pending">
        <span className="contact-link__icon"><Icon size={17} aria-hidden="true" /></span>
        <span>{label}</span>
        <span className="contact-link__pending">Add details</span>
      </div>
    )
  }

  return (
    <div className="contact-link">
      <span className="contact-link__icon"><Icon size={17} aria-hidden="true" /></span>
      <span>{label}</span>
      <a
        className={`contact-link__value${isEmail ? ' contact-link__value--email' : ''}`}
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noreferrer' : undefined}
        aria-label={isEmail ? `Email ${value}` : `Open ${label} profile for ${username}`}
      >
        {username}
      </a>
      <ArrowUpRight className="contact-link__arrow" size={15} aria-hidden="true" />
    </div>
  )
}

function Contact() {
  const reduceMotion = useReducedMotion()
  const emailHref = contactDetails.email ? `mailto:${contactDetails.email}` : ''

  return (
    <section className="contact-section timeline-section" id="contact" aria-labelledby="contact-title">
      <div className="content-width">
        <SectionHeading
          id="contact-title"
          index="07"
          eyebrow="The next step"
          title="Let’s build something meaningful."
          description="Have a project in mind, want to share an opportunity, or simply want to talk tech? I’d be glad to hear from you."
        />
        <div className="contact-layout">
          <motion.div
            className="contact-callout"
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55 }}
          >
            <span className="eyebrow">Open to meaningful connections</span>
            <p>Good work starts with a conversation.</p>
            {emailHref ? (
              <a className="button button--light" href={emailHref}>
                Say hello <ArrowDownRight size={16} aria-hidden="true" />
              </a>
            ) : (
              <span className="button button--pending">Contact details coming soon</span>
            )}
          </motion.div>
          <div className="contact-links">
            <ContactLink
              href={emailHref}
              icon={Mail}
              label="Email"
              value={contactDetails.email}
              username={contactDetails.email}
              isEmail
            />
            <ContactLink
              href={contactDetails.github}
              icon={GitBranch}
              label="GitHub"
              value={contactDetails.github}
              username={contactDetails.github.split('/').filter(Boolean).pop()}
            />
            <ContactLink
              href={contactDetails.linkedin}
              icon={BriefcaseBusiness}
              label="LinkedIn"
              value={contactDetails.linkedin}
              username={contactDetails.linkedin.split('/').filter(Boolean).pop()}
            />
            {contactDetails.other && <ContactLink href={contactDetails.other} icon={ArrowUpRight} label="Other profile" value={contactDetails.other} />}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
