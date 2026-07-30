import { useState, useEffect } from 'react'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#portfolio', label: 'Work' },
  { href: '#process', label: 'Process' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  // Close on Escape key
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape' && menuOpen) setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  // Track active section for nav highlighting
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace('#', ''))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection('#' + entry.target.id)
          }
        })
      },
      { threshold: 0.3, rootMargin: '-80px 0px -50% 0px' }
    )
    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-[850] flex flex-col items-center justify-center gap-8"
          style={{ background: 'rgba(8,8,8,0.97)', backdropFilter: 'blur(30px)' }}>
          {/* Close button */}
          <button
            className="absolute top-6 right-6 text-cream hover:text-gold transition-colors duration-300 bg-transparent border-0 cursor-pointer"
            style={{ fontSize: '2rem', lineHeight: 1 }}
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="font-display text-cream hover:text-gold transition-colors duration-300"
              style={{ fontSize: '3rem', fontWeight: 300, letterSpacing: '0.1em', textDecoration: 'none' }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}

      <nav
        id="navbar"
        className="fixed top-0 left-0 right-0 z-[900] px-[4%] flex items-center justify-between transition-all duration-500"
        style={{ padding: '1.5rem 4%' }}
      >
        <a href="#" className="font-display text-cream no-underline tracking-[0.15em]"
          style={{ fontSize: '1.6rem', fontWeight: 300 }}>
          NEX<span className="text-gold">LIFYY</span>
        </a>

        <ul className="hidden md:flex gap-10 list-none">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`no-underline uppercase tracking-widest font-normal transition-colors duration-300 relative group ${
                  activeSection === l.href ? 'text-cream' : 'text-text2 hover:text-cream'
                }`}
                style={{ fontSize: '0.78rem', letterSpacing: '0.12em' }}
              >
                {l.label}
                <span className={`absolute bottom-[-4px] left-0 h-px bg-gold transition-all duration-300 ${
                  activeSection === l.href ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-block no-underline relative overflow-hidden"
          style={{
            border: '1px solid var(--gold)',
            color: 'var(--gold)',
            padding: '0.6rem 1.6rem',
            fontSize: '0.75rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
          }}
        >
          <span className="relative z-[1]">Start Project</span>
        </a>

        <button
          className="flex md:hidden flex-col gap-[5px] cursor-pointer p-2 bg-transparent border-0"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className="block w-6 h-px bg-cream" />
          <span className="block w-6 h-px bg-cream" />
          <span className="block w-6 h-px bg-cream" />
        </button>
      </nav>
    </>
  )
}
