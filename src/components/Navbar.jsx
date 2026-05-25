import { useState } from 'react'

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

  return (
    <>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-[850] flex flex-col items-center justify-center gap-8"
          style={{ background: 'rgba(8,8,8,0.97)', backdropFilter: 'blur(30px)' }}>
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
                className="text-text2 no-underline uppercase tracking-widest font-normal hover:text-cream transition-colors duration-300 relative group"
                style={{ fontSize: '0.78rem', letterSpacing: '0.12em' }}
              >
                {l.label}
                <span className="absolute bottom-[-4px] left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
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
        >
          <span className="block w-6 h-px bg-cream" />
          <span className="block w-6 h-px bg-cream" />
          <span className="block w-6 h-px bg-cream" />
        </button>
      </nav>

      <style>{`
        nav#navbar.scrolled {
          background: rgba(8,8,8,0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          padding: 1rem 4% !important;
          border-bottom: 1px solid rgba(201,168,76,0.08);
        }
      `}</style>
    </>
  )
}
