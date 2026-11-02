import { useState } from 'react'
import { ArrowUpRight, Menu, Moon, Sun, X } from 'lucide-react'

const links = [
  ['Home', 'home'],
  ['About', 'about'],
  ['Skills', 'skills'],
  ['Projects', 'projects'],
  ['Experience', 'experience'],
  ['Certificates', 'certificates'],
  ['Contact', 'contact'],
]

function Navbar({ activeSection, theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <a className="wordmark" href="#home" aria-label="Karl Cedrick Namuco, home" onClick={closeMenu}>
        <span className="wordmark__mark">K</span>
        <span>Karl Cedrick Namuco</span>
      </a>
      <button
        className="mobile-menu-toggle"
        type="button"
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <X size={19} /> : <Menu size={19} />}
      </button>
      <nav
        id="primary-navigation"
        className={`primary-navigation${menuOpen ? ' is-open' : ''}`}
        aria-label="Primary navigation"
      >
        {links.map(([label, id]) => (
          <a
            key={id}
            className={activeSection === id ? 'is-active' : ''}
            href={`#${id}`}
            aria-current={activeSection === id ? 'location' : undefined}
            onClick={closeMenu}
          >
            {label}
          </a>
        ))}
        <a className="nav-cta" href="#contact" onClick={closeMenu}>
          Let&apos;s talk <ArrowUpRight size={14} aria-hidden="true" />
        </a>
        <button
          className="theme-toggle"
          type="button"
          onClick={onToggleTheme}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} view`}
          title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} view`}
        >
          {theme === 'dark' ? <Sun size={15} aria-hidden="true" /> : <Moon size={15} aria-hidden="true" />}
          <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
        </button>
      </nav>
    </header>
  )
}

export default Navbar
