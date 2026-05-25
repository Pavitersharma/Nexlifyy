import { testimonials } from '../data/content'

function TestimonialCard({ t }) {
  return (
    <div
      className="group relative overflow-hidden flex-shrink-0 transition-colors duration-300"
      style={{
        background: 'var(--surface)',
        border: '1px solid rgba(255,255,255,0.06)',
        padding: '2.5rem',
        width: 380,
      }}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: 'linear-gradient(135deg, var(--gold-glow), transparent)' }}
      />
      <div className="font-display text-gold mb-4 relative z-[1]" style={{ fontSize: '3rem', opacity: 0.3, lineHeight: 1 }}>"</div>
      <p className="text-text2 mb-8 italic relative z-[1]" style={{ fontSize: '0.9rem', lineHeight: 1.8 }}>
        {t.text}
      </p>
      <div className="flex items-center gap-4 relative z-[1]">
        <div
          className="flex items-center justify-center rounded-full flex-shrink-0 font-medium text-black"
          style={{
            width: 42, height: 42,
            background: 'linear-gradient(135deg, var(--gold), var(--blue))',
            fontSize: '0.8rem',
          }}
        >
          {t.initials}
        </div>
        <div>
          <div className="text-cream font-medium" style={{ fontSize: '0.85rem' }}>{t.name}</div>
          <div className="text-text3 tracking-wider" style={{ fontSize: '0.7rem', letterSpacing: '0.1em' }}>{t.role}</div>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const doubled = [...testimonials, ...testimonials]

  return (
    <section id="testimonials" style={{ background: 'var(--charcoal)', padding: '8rem 0', overflow: 'hidden' }}>
      <div className="reveal text-center mx-auto mb-16 px-[4%]" style={{ maxWidth: 500 }}>
        <div className="flex justify-center items-center gap-4 text-gold uppercase tracking-[0.5em] mb-4" style={{ fontSize: '0.65rem' }}>
          <span className="w-8 h-px bg-gold" />
          Client Voices
        </div>
        <h2 className="font-display text-cream" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 300, lineHeight: 1.05 }}>
          What They <em className="text-gold">Say</em>
        </h2>
      </div>

      <div className="overflow-hidden" style={{ margin: '0 -4%' }}>
        <div className="testimonials-track">
          {doubled.map((t, i) => (
            <TestimonialCard key={`${t.id}-${i}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  )
}
