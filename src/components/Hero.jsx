import { useEffect, useRef } from 'react'
import { useCounter } from '../hooks/useEffects'

function StatCounter({ target, label }) {
  const { count, ref } = useCounter(target)
  return (
    <div ref={ref} className="text-right">
      <div className="font-display text-cream" style={{ fontSize: '2rem', fontWeight: 300, lineHeight: 1 }}>
        {count}{target >= 10 ? '+' : ''}
      </div>
      <div className="text-text3 uppercase tracking-widest" style={{ fontSize: '0.65rem', letterSpacing: '0.2em' }}>
        {label}
      </div>
    </div>
  )
}

export default function Hero() {
  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById('hero')
      const y = window.scrollY
      if (y < window.innerHeight) {
        const title = hero?.querySelector('.hero-title')
        const sub = hero?.querySelector('.hero-sub')
        if (title) {
          title.style.transform = `translateY(${y * 0.3}px)`
          title.style.opacity = String(1 - y / 400)
        }
        if (sub) {
          sub.style.transform = `translateY(${y * 0.2}px)`
          sub.style.opacity = String(1 - y / 350)
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center overflow-hidden"
      style={{ minHeight: '100vh', padding: '0 4%' }}
    >
      {/* Backgrounds */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 50%,rgba(201,168,76,0.04) 0%,transparent 70%),radial-gradient(ellipse 40% 40% at 80% 30%,rgba(26,108,245,0.04) 0%,transparent 60%)',
          animation: 'pulse 8s ease-in-out infinite alternate',
        }}
      />
      <div
        className="orb absolute"
        style={{ width: 500, height: 500, background: 'rgba(201,168,76,0.03)', top: '-20%', left: '-10%' }}
      />
      <div
        className="orb absolute"
        style={{ width: 400, height: 400, background: 'rgba(26,108,245,0.03)', bottom: '-10%', right: '-5%', animationDelay: '4s' }}
      />
      <div className="hero-lines absolute inset-0 overflow-hidden opacity-[0.06]" />

      {/* Content */}
      <div
        className="hero-eyebrow-anim flex items-center gap-4 text-gold uppercase tracking-[0.5em] mb-6 relative z-10"
        style={{ fontSize: '0.7rem' }}
      >
        <span className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, transparent, var(--gold))' }} />
        Web Solutions for Ambitious Brands
        <span className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, var(--gold), transparent)' }} />
      </div>

      <h1
        className="hero-title hero-title-anim font-display text-center text-cream mb-8 relative z-10"
        style={{ fontSize: 'clamp(3.5rem, 10vw, 9rem)', fontWeight: 300, lineHeight: 0.9 }}
      >
        We Build<br />
        <span className="text-gold italic">Digital Empires</span>
        <span className="block text-text2" style={{ fontSize: '0.7em', letterSpacing: '0.08em', marginTop: '0.2em' }}>
          That Dominate Markets
        </span>
      </h1>

      <p
        className="hero-sub hero-sub-anim text-center text-text2 mb-12 relative z-10"
        style={{ maxWidth: 500, fontSize: '0.95rem', lineHeight: 1.8 }}
      >
        Award-winning web design, development & digital marketing for brands ready to lead.
        Serving clients across Canada, USA & globally.
      </p>

      <div className="hero-cta-anim flex gap-6 flex-wrap justify-center relative z-10">
        <a
          href="#portfolio"
          className="relative overflow-hidden group"
          style={{
            background: 'var(--gold)', color: 'var(--black)',
            padding: '1rem 2.5rem', fontSize: '0.8rem',
            letterSpacing: '0.2em', textTransform: 'uppercase',
            textDecoration: 'none', fontWeight: 500,
          }}
        >
          <span className="relative z-[1]">View Our Work ✦</span>
          <span
            className="absolute inset-0 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500"
            style={{ background: 'var(--white2)' }}
          />
        </a>
        <a
          href="#contact"
          className="text-text hover:text-gold hover:border-gold transition-all duration-300 no-underline"
          style={{
            border: '1px solid rgba(255,255,255,0.15)',
            padding: '1rem 2.5rem', fontSize: '0.8rem',
            letterSpacing: '0.2em', textTransform: 'uppercase',
          }}
        >
          Start Your Project
        </a>
      </div>

      {/* Stats */}
      <div className="hero-stats-anim absolute right-[5%] bottom-12 hidden md:flex flex-col gap-6">
        <StatCounter target={150} label="Projects Done" />
        <StatCounter target={98} label="Happy Clients" />
        <StatCounter target={7} label="Years Active" />
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll-anim absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-text3 uppercase tracking-[0.3em]" style={{ fontSize: '0.65rem' }}>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  )
}
