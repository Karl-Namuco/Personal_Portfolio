import { motion, useReducedMotion } from 'framer-motion'

function SectionHeading({ id, index, eyebrow, title, description, className = '' }) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={`section-heading ${className}`}
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="section-heading__meta">
        <span className="section-index">{index}</span>
        <span className="eyebrow">{eyebrow}</span>
      </div>
      <div className="section-heading__copy">
        <h2 id={id}>{title}</h2>
        {description && <p>{description}</p>}
      </div>
    </motion.div>
  )
}

export default SectionHeading
