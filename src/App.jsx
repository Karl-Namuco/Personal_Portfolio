import { useCallback, useEffect, useRef, useState } from 'react'
import { useScroll } from 'framer-motion'
import About from './components/About.jsx'
import Certificates from './components/Certificates.jsx'
import Contact from './components/Contact.jsx'
import Experience from './components/Experience.jsx'
import FeaturedProjects from './components/FeaturedProjects.jsx'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import IntroLoader from './components/IntroLoader.jsx'
import Navbar from './components/Navbar.jsx'
import ScrollTimeline from './components/ScrollTimeline.jsx'
import Skills from './components/Skills.jsx'
import TechnicalProjects from './components/TechnicalProjects.jsx'
import './App.css'

const sectionIds = ['home', 'about', 'skills', 'projects', 'experience', 'certificates', 'contact']

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'dark'
    return window.localStorage.getItem('portfolio-theme') === 'light' ? 'light' : 'dark'
  })
  const [showIntro, setShowIntro] = useState(() => {
    if (typeof window === 'undefined') return false
    return !window.sessionStorage.getItem('portfolio-intro-seen')
      && !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  })
  const pageRef = useRef(null)
  const completeIntro = useCallback(() => setShowIntro(false), [])
  const { scrollYProgress } = useScroll({
    target: pageRef,
    offset: ['start start', 'end end'],
  })

  useEffect(() => {
    if (showIntro) window.sessionStorage.setItem('portfolio-intro-seen', 'true')
  }, [showIntro])

  useEffect(() => {
    window.localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visibleSections[0]) setActiveSection(visibleSections[0].target.id)
      },
      { rootMargin: '-25% 0px -55% 0px', threshold: [0, 0.1, 0.35, 0.6] },
    )

    sectionIds.forEach((id) => {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="app-shell" data-theme={theme}>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <IntroLoader visible={showIntro} onComplete={completeIntro} />
      <Navbar
        activeSection={activeSection}
        theme={theme}
        onToggleTheme={() => setTheme((current) => current === 'dark' ? 'light' : 'dark')}
      />
      <ScrollTimeline progress={scrollYProgress} activeSection={activeSection} />
      <main id="main-content" ref={pageRef} className="page-shell">
        <Hero />
        <About />
        <Skills />
        <FeaturedProjects />
        <TechnicalProjects />
        <Experience />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
