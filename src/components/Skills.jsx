import { motion, useReducedMotion } from 'framer-motion'
import SectionHeading from './SectionHeading.jsx'

const skillGroups = [
  {
    id: '01',
    title: 'Full-Stack Development',
    items: ['HTML', 'CSS', 'JavaScript', 'React', 'PHP', 'Laravel', 'Python', 'C++', 'MySQL', 'Git'],
  },
  {
    id: '02',
    title: 'Networking & Infrastructure',
    items: ['Cisco IOS', 'Cisco Packet Tracer', 'MikroTik RouterOS', 'VLAN & Inter-VLAN Routing', 'Subnetting & VLSM', 'DHCP & DNS', 'Access Control Lists'],
  },
  {
    id: '03',
    title: 'Cybersecurity',
    items: ['Snort IPS', 'Iptables', 'NFQUEUE', 'Nessus Vulnerability Scanning', 'System Security Auditing', 'Risk Assessment'],
  },
  {
    id: '04',
    title: 'System Administration',
    items: ['VirtualBox', 'Fedora Server', 'Ubuntu', 'Linux', 'Samba File Sharing', 'Backup & Recovery', 'User & Group Permissions'],
  },
  {
    id: '05',
    title: 'Hardware & IoT',
    items: ['Arduino Uno', 'ESP8266', 'DHT11 Sensors', 'SSD1306 OLED Displays', 'IoT Cloud Integration'],
  },
  {
    id: '06',
    title: 'AI & AI-assisted tools',
    items: ['DeepSeek', 'Claude', 'Gemini', 'ChatGPT', 'Cursor', 'Google AI Studio'],
  },
]

function Skills() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="content-section content-section--compact timeline-section" id="skills" aria-labelledby="skills-title">
      <div className="content-width">
        <SectionHeading
          id="skills-title"
          index="02"
          eyebrow="Tools of the trade"
          title="A wide-angle technical toolkit."
          description="A growing set of tools and concepts across the layers of modern technology."
        />
        <div className="skill-list">
          {skillGroups.map((group, index) => (
            <motion.article
              className="skill-row"
              key={group.id}
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: reduceMotion ? 0 : index * 0.05 }}
            >
              <span className="skill-row__index">{group.id}</span>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((skill) => <li key={skill}>{skill}</li>)}
              </ul>
              {group.note && <p className="skill-row__note">{group.note}</p>}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
