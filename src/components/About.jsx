import { useCounter } from '../hooks/useEffects'
import { qualityTags } from '../data/content'

function Counter({ target, label }) {
  const { count, ref } = useCounter(target)
  return (
    <div ref={ref} className="text-center p-6" style={{ background: 'var(--black)' }}>
      <div className="font-display text-gold" style={{ fontSize: '2.5rem', fontWeight: 300, lineHeight: 1 }}>
        {count}{target >= 10 ? '+' : ''}
      </div>
      <div className="text-text3 uppercase tracking-widest mt-1" style={{ fontSize: '0.65rem', letterSpacing: '0.2em' }}>
        {label}
      </div>
    </div>
  )
}

export default function About() {
  return (
    <section id="about" style={{ background: 'var(--charcoal)', padding: '8rem 4%' }}>
      <div className="grid gap-24 items-center mx-auto" style={{ maxWidth: 1200, gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>

        {/* Visual */}
        <div className="reveal-left relative" style={{ height: 500 }}>
          <div
            className="absolute inset-0 overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, var(--surface), var(--surface2))',
              border: '1px solid rgba(201,168,76,0.1)',
            }}
          >
            <svg width="100%" height="100%" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg"
              style={{ position: 'absolute', inset: 0, opacity: 0.4 }}>
              <circle cx="250" cy="250" r="150" stroke="rgba(201,168,76,0.15)" strokeWidth="1"/>
              <circle cx="250" cy="250" r="200" stroke="rgba(201,168,76,0.08)" strokeWidth="1"/>
              <circle cx="250" cy="250" r="100" stroke="rgba(201,168,76,0.2)" strokeWidth="0.5"/>
              <line x1="0" y1="250" x2="500" y2="250" stroke="rgba(201,168,76,0.08)" strokeWidth="1"/>
              <line x1="250" y1="0" x2="250" y2="500" stroke="rgba(201,168,76,0.08)" strokeWidth="1"/>
              <circle cx="250" cy="250" r="4" fill="rgba(201,168,76,0.6)"/>
              <circle cx="400" cy="150" r="2" fill="rgba(26,108,245,0.6)"/>
              <circle cx="100" cy="380" r="2" fill="rgba(26,108,245,0.4)"/>
              <line x1="250" y1="250" x2="400" y2="150" stroke="rgba(201,168,76,0.15)" strokeWidth="0.5" strokeDasharray="4,4"/>
              <line x1="250" y1="250" x2="100" y2="380" stroke="rgba(26,108,245,0.15)" strokeWidth="0.5" strokeDasharray="4,4"/>
              <text x="200" y="60" fill="rgba(201,168,76,0.3)" fontFamily="monospace" fontSize="10">[ NEXLIFYY.COM ]</text>
              <text x="310" y="440" fill="rgba(201,168,76,0.2)" fontFamily="monospace" fontSize="9">v2.0.24</text>
            </svg>
            <div className="absolute bottom-8 left-8 right-8">
              <div className="text-gold uppercase tracking-[0.3em] mb-2" style={{ fontSize: '0.65rem', opacity: 0.5 }}>Our Mission</div>
              <div className="font-display text-cream italic" style={{ fontSize: '1.4rem', fontWeight: 300, lineHeight: 1.4, opacity: 0.7 }}>
                "Building digital experiences that make businesses unforgettable."
              </div>
            </div>
          </div>

          {/* Counter grid */}
          <div
            className="absolute grid"
            style={{
              bottom: '-2rem', right: '-2rem',
              gridTemplateColumns: '1fr 1fr',
              gap: 1, background: 'rgba(201,168,76,0.1)',
            }}
          >
            <Counter target={150} label="Projects" />
            <Counter target={98} label="Clients" />
            <Counter target={7} label="Years" />
            <Counter target={12} label="Awards" />
          </div>
        </div>

        {/* Text */}
        <div className="reveal-right">
          <div className="flex items-center gap-4 text-gold uppercase tracking-[0.5em] mb-4" style={{ fontSize: '0.65rem' }}>
            <span className="w-8 h-px bg-gold" />
            About Nexlifyy
          </div>
          <h2 className="font-display text-cream mb-6" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 300, lineHeight: 1.05 }}>
            We Don't Build<br /><em className="text-gold">Websites.</em> We Build<br />Brands.
          </h2>
          <p className="text-text2 mb-6" style={{ lineHeight: 1.9, fontSize: '0.95rem' }}>
            Nexlifyy is a premium web solutions agency built for businesses that refuse to be average. We partner with ambitious brands across Canada, USA, and globally — transforming their digital presence into a powerful revenue engine.
          </p>
          <p className="text-text2 mb-8" style={{ lineHeight: 1.9, fontSize: '0.95rem' }}>
            Every pixel, every line of code, every user interaction is crafted with obsessive attention to detail. Our work isn't just beautiful — it performs, converts, and dominates.
          </p>
          <div className="flex flex-wrap gap-3">
            {qualityTags.map((tag) => (
              <span
                key={tag}
                className="text-text2 hover:text-gold hover:bg-[rgba(201,168,76,0.12)] transition-all duration-300 cursor-default"
                style={{
                  border: '1px solid rgba(201,168,76,0.2)',
                  padding: '0.4rem 1rem',
                  fontSize: '0.7rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
