import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'

const projects = [
  {
    number: '01',
    title: 'Retail & enterprise network design',
    text: 'Designed logical and physical network topologies, then segmented traffic so different teams and services could be managed more clearly.',
    details: ['Cisco Packet Tracer', 'Multi-VLAN segmentation', 'Router-on-a-Stick', 'Extended ACLs · DHCP · SSH'],
  },
  {
    number: '02',
    title: 'Linux server deployment',
    text: 'Deployed a centralized Fedora Server for shared services, file access, and routine administration.',
    details: ['Custom DNS · DHCP', 'Samba file sharing', 'Admin & Staff permissions', 'Backup & recovery'],
  },
  {
    number: '03',
    title: 'Intrusion prevention system',
    text: 'Configured inline traffic inspection and tested rules that identify and block selected network activity.',
    details: ['Snort IPS', 'NFQUEUE · Iptables', 'ICMP & HTTP rules', 'TCP SYN scan detection'],
  },
  {
    number: '04',
    title: 'MikroTik infrastructure',
    text: 'Configured RouterOS networking for departmental segmentation and investigated VLAN tagging behavior across ports.',
    details: ['MikroTik RouterOS', 'Departmental VLANs', 'Bridge configuration', 'Port-based VLAN tagging'],
  },
]

function TechnicalProjects() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="technical-section timeline-section" aria-labelledby="technical-title">
      <div className="content-width">
        <SectionHeading
          id="technical-title"
          index="04"
          eyebrow="Beyond the browser"
          title="Building confidence in the systems underneath."
          description="Hands-on networking, server, and security work—explained in practical terms."
        />
        <div className="technical-grid">
          {projects.map((project, index) => (
            <motion.article
              className="technical-card"
              key={project.number}
              initial={reduceMotion ? false : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: reduceMotion ? 0 : index * 0.07 }}
            >
              <span className="technical-card__number">{project.number}</span>
              <h3>{project.title}</h3>
              <p>{project.text}</p>
              <ul>
                {project.details.map((detail) => <li key={detail}>{detail}</li>)}
              </ul>
              <span className="technical-card__arrow" aria-hidden="true"><ArrowUpRight size={16} /></span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechnicalProjects
