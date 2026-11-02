import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'

const projects = [
  {
    number: '01',
    name: 'Mission-Lokal',
    category: 'Civic technology',
    description: 'An AI-assisted barangay concern management application that helps organize incoming reports and make their status easier to follow.',
    details: ['Automated concern categorization and prioritization', 'Report deduplication and clustering', 'Real-time concern status tracking'],
    technologies: ['Laravel', 'PHP', 'MySQL', 'React + TypeScript', 'Inertia.js', 'Gemini AI'],
    image: '/assets/projects/mission-lokal.jpg',
    url: 'https://mission-lokal.com/',
    visual: 'mission',
    visualLabel: 'Mission-Lokal project preview',
  },
  {
    number: '02',
    name: 'Grainflow',
    category: 'Business systems',
    description: 'A full-stack point-of-sale and business management web application, built to support day-to-day operations.',
    details: [],
    technologies: ['React', 'Laravel'],
    image: '/assets/projects/grainflow.jpg',
    url: 'https://grainflow-iota.vercel.app/',
    visual: 'grainflow',
    visualLabel: 'Grainflow project preview',
  },
  {
    number: '03',
    name: 'KNI Travels',
    category: 'Travel services',
    description: 'A responsive travel service management web application.',
    details: [],
    technologies: ['HTML', 'CSS', 'JavaScript'],
    image: '/assets/projects/kni-travels.jpg',
    url: 'https://knitravels.freehosting.dev/',
    visual: 'travels',
    visualLabel: 'KNI Travels project preview',
  },
  {
    number: '04',
    name: 'Waste Management Audit',
    category: 'Audit & reporting',
    description: 'A web-based tool for a waste management audit project.',
    details: [],
    technologies: ["Python", "Streamlit"],
    image: '/assets/projects/waste-management-audit.jpg',
    url: 'https://ite3-waste-management-audit-namuco.streamlit.app/',
    visual: 'waste',
    visualLabel: 'Waste Management Audit project preview',
  },
]

function ProjectVisual({ type, label, image }) {
  const [imageAvailable, setImageAvailable] = useState(Boolean(image))

  return (
    <div className={`project-visual project-visual--${type}${imageAvailable ? ' project-visual--has-image' : ''}`} role="img" aria-label={label}>
      {imageAvailable && (
        <img
          className="project-visual__image"
          src={image}
          alt=""
          loading="lazy"
          onError={() => setImageAvailable(false)}
        />
      )}
      <div className="project-visual__window">
        <div className="project-visual__topbar"><i /><i /><i /><span>{label}</span></div>
        <div className="project-visual__mock">
          {type === 'mission' && (
            <>
              <span className="mock-label">BARANGAY CONCERNS</span>
              <strong>Community,<br />heard.</strong>
              <div className="mock-chart"><i /><i /><i /><i /><i /><i /></div>
              <div className="mock-lines"><i /><i /><i /></div>
            </>
          )}
          {type === 'grainflow' && (
            <>
              <span className="mock-label">GRAINFLOW / OVERVIEW</span>
              <strong>Check Stocks.</strong>
              <div className="mock-stats"><i /><i /><i /></div>
              <div className="mock-table"><i /><i /><i /><i /></div>
            </>
          )}
          {type === 'travels' && (
            <>
              <span className="mock-label">KNI TRAVELS</span>
              <strong>Explore the<br />World.</strong>
              <div className="mock-travel-image"><span>EXPLORE</span></div>
            </>
          )}
          {type === 'veluxe' && (
            <div className="veluxe-placeholder"><span>VE</span><strong>Details coming soon</strong></div>
          )}
          {type === 'waste' && (
            <>
              <span className="mock-label">WASTE AUDIT / REPORT</span>
              <strong>Audit overview</strong>
              <div className="mock-audit"><i /><i /><i /></div>
              <div className="mock-lines"><i /><i /><i /></div>
            </>
          )}
        </div>
      </div>
      <span className="project-visual__number">{label.startsWith('Veluxe') ? '04' : ''}</span>
    </div>
  )
}

function FeaturedProjects() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="content-section projects-section timeline-section" id="projects" aria-labelledby="projects-title">
      <div className="content-width">
        <SectionHeading
          id="projects-title"
          index="03"
          eyebrow="Selected work"
          title="Ideas, shaped into useful things."
          description="A selection of web applications and projects built around real needs."
        />
        <div className="project-list">
          {projects.map((project, index) => (
            <motion.article
              className={`project-row${index % 2 ? ' project-row--reverse' : ''}${project.description ? '' : ' project-row--reserved'}`}
              key={project.number}
              initial={reduceMotion ? false : { opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              {project.url ? (
                <a
                  className="project-row__visual-link"
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${project.name} website in a new tab`}
                >
                  <ProjectVisual type={project.visual} label={project.visualLabel} image={project.image} />
                </a>
              ) : (
                <div className="project-row__visual-link">
                  <ProjectVisual type={project.visual} label={project.visualLabel} image={project.image} />
                </div>
              )}
              <div className="project-row__copy">
                <div className="project-row__meta">
                  <span>{project.number} / 04</span><span>{project.category}</span>
                </div>
                <h3>{project.name}</h3>
                <p>{project.description || 'Project details are reserved until the final scope is ready to share.'}</p>
                {project.details.length > 0 && (
                  <ul className="project-points">
                    {project.details.map((detail) => <li key={detail}>{detail}</li>)}
                  </ul>
                )}
                <div className="project-row__bottom">
                  <ul className="tag-list">
                    {(project.technologies.length ? project.technologies : ['Details pending']).map((item) => <li key={item}>{item}</li>)}
                  </ul>
                  {project.url ? (
                    <a className="project-link" href={project.url} target="_blank" rel="noreferrer">
                      Visit project <ExternalLink size={14} aria-hidden="true" />
                    </a>
                  ) : <span className="project-link project-link--muted">Details pending <ArrowUpRight size={14} /></span>}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProjects
