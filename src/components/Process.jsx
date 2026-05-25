import { processSteps } from '../data/content'

export default function Process() {
  return (
    <section id="process" style={{ background: 'var(--charcoal)', padding: '8rem 4%', overflow: 'hidden' }}>
      <div className="mx-auto" style={{ maxWidth: 1200 }}>
        <div className="reveal">
          <div className="flex items-center gap-4 text-gold uppercase tracking-[0.5em] mb-4" style={{ fontSize: '0.65rem' }}>
            <span className="w-8 h-px bg-gold" />
            How We Work
          </div>
          <h2 className="font-display text-cream" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 300, lineHeight: 1.05 }}>
            Our<br /><em className="text-gold">Process</em>
          </h2>
        </div>

        <div className="relative mt-16 process-steps">
          {processSteps.map((step, i) => (
            <div
              key={step.num}
              className={`reveal delay-${i} group grid gap-12 py-12 border-b hover:border-0 transition-colors duration-300`}
              style={{
                gridTemplateColumns: '80px 1fr',
                borderBottom: '1px solid rgba(255,255,255,0.04)',
              }}
            >
              <div
                className="font-display text-center group-hover:text-gold transition-colors duration-500"
                style={{ fontSize: '3rem', fontWeight: 300, color: 'rgba(201,168,76,0.15)', lineHeight: 1, paddingTop: '0.2rem' }}
              >
                {step.num}
              </div>
              <div>
                <h3 className="font-display text-cream mb-3" style={{ fontSize: '1.8rem', fontWeight: 300 }}>
                  {step.title}
                </h3>
                <p className="text-text2" style={{ fontSize: '0.9rem', lineHeight: 1.8, maxWidth: 600 }}>
                  {step.desc}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {step.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-gold uppercase tracking-widest"
                      style={{
                        fontSize: '0.65rem', letterSpacing: '0.15em',
                        border: '1px solid rgba(201,168,76,0.2)',
                        padding: '0.25rem 0.75rem',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
