import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect } from 'react'

function IntroLoader({ visible, onComplete }) {
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (!visible) return undefined
    const timeout = window.setTimeout(onComplete, reduceMotion ? 0 : 1050)
    return () => window.clearTimeout(timeout)
  }, [onComplete, reduceMotion, visible])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="intro-loader"
          aria-hidden="true"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: reduceMotion ? 0 : 0.45 } }}
        >
          <motion.div
            className="intro-loader__content"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <span className="intro-loader__initials">KCN</span>
            <span className="intro-loader__rule" />
            <span className="intro-loader__label">Portfolio / 2026</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default IntroLoader
