import { useState } from 'react'

const services = ['Web Design', 'E-Commerce', 'Landing Pages', 'SEO & Growth', 'Brand Identity', 'Digital Marketing']
const company = ['About Us', 'Our Work', 'Process', 'Reviews', 'Pricing', 'Contact']
const companyHrefs = ['#about', '#portfolio', '#process', '#testimonials', '#pricing', '#contact']
const socials = [
  { label: 'in', aria: 'LinkedIn' },
  { label: 'ig', aria: 'Instagram' },
  { label: 'tw', aria: 'Twitter' },
  { label: 'be', aria: 'Behance' },
]

export default function Footer() {
  const [email, setEmail] = useState('')

  return (
    <footer style={{ background: 'var(--charcoal)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div
        className="mx-auto py-20 px-[4%] grid gap-16"
        style={{ maxWidth: 1200, gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}
      >
        {/* Brand */}
        <div style={{ gridColumn: 'span 1' }}>
          <div className="font-display text-cream tracking-wider mb-4" style={{ fontSize: '1.8rem', fontWeight: 300, letterSpacing: '0.1em' }}>
            NEX<span className="text-gold">LIFYY</span>
          </div>
          <p className="text-text3 mb-8" style={{ fontSize: '0.82rem', lineHeight: 1.8, maxWidth: 280 }}>
            Building world-class digital experiences for ambitious brands across Canada, USA and globally.
          </p>
          <div className="flex gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.aria}
                className="flex items-center justify-center text-text3 hover:text-gold hover:border-gold no-underline transition-all duration-300"
                style={{
                  width: 36, height: 36,
                  border: '1px solid rgba(255,255,255,0.1)',
                  fontSize: '0.75rem',
                  background: 'transparent',
                }}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-gold uppercase tracking-widest mb-6" style={{ fontSize: '0.7rem', letterSpacing: '0.3em' }}>Services</h4>
          <ul className="list-none flex flex-col gap-3">
            {services.map((s) => (
              <li key={s}>
                <a href="#services" className="text-text3 hover:text-gold no-underline transition-colors duration-300" style={{ fontSize: '0.82rem' }}>
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-gold uppercase tracking-widest mb-6" style={{ fontSize: '0.7rem', letterSpacing: '0.3em' }}>Company</h4>
          <ul className="list-none flex flex-col gap-3">
            {company.map((c, i) => (
              <li key={c}>
                <a href={companyHrefs[i]} className="text-text3 hover:text-gold no-underline transition-colors duration-300" style={{ fontSize: '0.82rem' }}>
                  {c}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-gold uppercase tracking-widest mb-6" style={{ fontSize: '0.7rem', letterSpacing: '0.3em' }}>Newsletter</h4>
          <p className="text-text3 mb-4" style={{ fontSize: '0.8rem', lineHeight: 1.7 }}>
            Get weekly insights on web design, SEO & digital growth.
          </p>
          <div className="flex overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="flex-1 bg-transparent border-0 text-cream outline-none"
              style={{ padding: '0.75rem 1rem', fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--white)' }}
            />
            <button
              className="bg-gold text-black border-0 cursor-pointer font-medium hover:bg-gold2 transition-colors duration-300"
              style={{ padding: '0.75rem 1.2rem', fontSize: '0.8rem', fontFamily: 'var(--font-body)', letterSpacing: '0.1em' }}
            >
              Join
            </button>
          </div>
        </div>
      </div>

      <div
        className="flex justify-between items-center flex-wrap gap-4 px-[4%] mx-auto py-6"
        style={{ maxWidth: 1200, borderTop: '1px solid rgba(255,255,255,0.05)' }}
      >
        <p className="text-text3 tracking-wide" style={{ fontSize: '0.75rem' }}>© 2024 Nexlifyy Digital. All rights reserved.</p>
        <div className="flex gap-8">
          {['Privacy Policy', 'Terms of Service', 'Sitemap'].map((l) => (
            <a key={l} href="#" className="text-text3 hover:text-gold no-underline transition-colors duration-300" style={{ fontSize: '0.72rem', letterSpacing: '0.05em' }}>
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
