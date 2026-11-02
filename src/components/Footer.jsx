import { ArrowUpRight } from 'lucide-react'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="content-width site-footer__inner">
        <a className="footer-signature" href="#home">Karl Cedrick Namuco<span>.</span></a>
        <span>Designed &amp; built with intention.</span>
        <a className="back-to-top" href="#home">Back to top <ArrowUpRight size={14} aria-hidden="true" /></a>
        <span className="copyright">© {new Date().getFullYear()} Karl Cedrick Namuco</span>
      </div>
    </footer>
  )
}

export default Footer
