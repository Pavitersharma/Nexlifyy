import { services } from '../data/content'

export default function Services() {
  return (
    <section id="services" style={{ background: 'var(--black)', padding: '8rem 4%' }}>
      <div className="reveal text-center mx-auto mb-20" style={{ maxWidth: 600 }}>
        <div className="flex justify-center items-center gap-4 text-gold uppercase tracking-[0.5em] mb-4" style={{ fontSize: '0.65rem' }}>
          <span className="w-8 h-px bg-gold" />
          What We Do
        </div>
        <h2 className="font-display text-cream" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 300, lineHeight: 1.05 }}>
          Premium<br /><em className="text-gold">Services</em>
        </h2>
        <p className="text-text2 mt-4" style={{ fontSize: '0.9rem', lineHeight: 1.8 }}>
          Every service we offer is engineered for maximum impact and measurable results.
        </p>
      </div>

      <div
        className="mx-auto"
        style={{
          maxWidth: 1200,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 1,
          background: 'rgba(255,255,255,0.05)',
        }}
      >
        {services.map((s, i) => (
          <div
            key={s.id}
            className={`reveal delay-${i + 1} group relative overflow-hidden cursor-pointer transition-colors duration-500 hover:bg-surface`}
            style={{ background: 'var(--black)', padding: '3rem 2.5rem' }}
          >
            {/* Hover gradient */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: 'linear-gradient(135deg, var(--gold-glow), transparent)' }}
            />
            {/* Bottom line */}
            <div
              className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-500"
              style={{ background: 'var(--gold)' }}
            />

            <div
              className="absolute top-8 right-8 font-display transition-colors duration-500"
              style={{ fontSize: '3rem', fontWeight: 300, color: 'rgba(201,168,76,0.06)' }}
            >
              {s.id}
            </div>

            <span
              className="block mb-6 group-hover:scale-110 transition-transform duration-300"
              style={{ fontSize: '2rem' }}
            >
              {s.icon}
            </span>
            <h3 className="font-display text-cream mb-4" style={{ fontSize: '1.6rem', fontWeight: 300 }}>
              {s.title}
            </h3>
            <p className="text-text2" style={{ fontSize: '0.88rem', lineHeight: 1.8 }}>
              {s.desc}
            </p>
            <span
              className="mt-6 text-gold inline-block opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
              style={{ fontSize: '1.2rem' }}
            >
              →
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
