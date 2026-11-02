import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Award } from 'lucide-react'
import certificates from '../data/certificates.js'
import SectionHeading from './SectionHeading.jsx'

function Certificates() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="content-section certificates-section timeline-section" id="certificates" aria-labelledby="certificates-title">
      <div className="content-width">
        <SectionHeading
          id="certificates-title"
          index="06"
          eyebrow="Learning & recognition"
          title="Certificates & credentials."
          description="A record of courses, certifications, and milestones along the way."
        />
        {certificates.length > 0 ? (
          <div className="certificate-grid">
            {certificates.map((certificate, index) => (
              <motion.article
                className="certificate-card"
                key={`${certificate.title}-${certificate.issuer}`}
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: reduceMotion ? 0 : index * 0.05 }}
              >
                <a
                  className="certificate-card__image-link"
                  href={certificate.credentialUrl || certificate.image}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${certificate.title}${certificate.issuer ? ` from ${certificate.issuer}` : ''}`}
                >
                  <img
                    className="certificate-card__image"
                    src={certificate.image}
                    alt={certificate.imageAlt || `${certificate.title} certificate`}
                    loading="lazy"
                  />
                  <span className="certificate-card__view"><ArrowUpRight size={15} aria-hidden="true" /></span>
                </a>
                <div className="certificate-card__info">
                  <span className="certificate-card__issuer">{certificate.issuer}</span>
                  <h3>{certificate.title}</h3>
                  {certificate.date && <span className="certificate-card__date">{certificate.date}</span>}
                </div>
              </motion.article>
            ))}
          </div>
        ) : (
          <div className="certificates-empty">
            <span className="certificates-empty__icon"><Award size={19} aria-hidden="true" /></span>
            <div>
              <h3>Credentials will appear here.</h3>
              <p>Add certificate images to <code>public/assets/certificates</code> and their details to <code>src/data/certificates.js</code>.</p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Certificates
