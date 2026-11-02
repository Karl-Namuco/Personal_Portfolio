import { motion } from 'framer-motion'

const markers = [
  ['home', 'Home'],
  ['about', 'About'],
  ['skills', 'Skills'],
  ['projects', 'Projects'],
  ['experience', 'Experience'],
  ['certificates', 'Certificates'],
  ['contact', 'Contact'],
]

function ScrollTimeline({ progress, activeSection }) {
  return (
    <aside className="scroll-timeline" aria-label="Page progress">
      <div className="scroll-timeline__track">
        <motion.div className="scroll-timeline__progress" style={{ scaleY: progress, transformOrigin: 'top' }} />
      </div>
      <div className="scroll-timeline__markers">
        {markers.map(([id, label]) => (
          <a
            key={id}
            className={`scroll-timeline__marker${activeSection === id ? ' is-active' : ''}`}
            href={`#${id}`}
            aria-label={`Jump to ${label}`}
            aria-current={activeSection === id ? 'location' : undefined}
          >
            <span />
          </a>
        ))}
      </div>
    </aside>
  )
}

export default ScrollTimeline
