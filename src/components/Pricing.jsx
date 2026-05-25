import { pricingPlans } from '../data/content'

export default function Pricing() {
  return (
    <section id="pricing" style={{ background: 'var(--black)', padding: '8rem 4%' }}>
      <div className="reveal text-center mx-auto mb-20" style={{ maxWidth: 600 }}>
        <div className="flex justify-center items-center gap-4 text-gold uppercase tracking-[0.5em] mb-4" style={{ fontSize: '0.65rem' }}>
          <span className="w-8 h-px bg-gold" />
          Transparent Pricing
        </div>
        <h2 className="font-display text-cream" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 300, lineHeight: 1.05 }}>
          Investment<br /><em className="text-gold">Plans</em>
        </h2>
        <p className="text-text2 mt-4" style={{ fontSize: '0.9rem', lineHeight: 1.8 }}>
          Straightforward pricing. No hidden fees. No surprises. Just results.
        </p>
      </div>

      <div
        className="mx-auto"
        style={{
          maxWidth: 1100,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 1,
          background: 'rgba(255,255,255,0.05)',
        }}
      >
        {pricingPlans.map((plan, i) => (
          <div
            key={plan.name}
            className={`reveal delay-${i + 1} group relative overflow-hidden transition-colors duration-500`}
            style={{
              background: plan.featured ? 'var(--surface)' : 'var(--black)',
              padding: '3rem 2rem',
            }}
          >
            {/* Top gold line */}
            <div
              className={`absolute top-0 left-0 right-0 h-px transition-opacity duration-500 ${plan.featured ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
              style={{ background: 'linear-gradient(90deg, transparent, var(--gold), transparent)' }}
            />

            <span
              className="uppercase tracking-[0.3em] block mb-4"
              style={{ fontSize: '0.65rem', color: plan.featured ? 'var(--white)' : 'var(--gold)' }}
            >
              {plan.badge}
            </span>
            <div className="font-display text-cream mb-2" style={{ fontSize: '1.8rem', fontWeight: 300 }}>
              {plan.name}
            </div>
            <div className="text-text3 mb-8" style={{ fontSize: '0.8rem', lineHeight: 1.7 }}>
              {plan.desc}
            </div>

            <div className="mb-8">
              <div className="font-display text-cream" style={{ fontSize: '3.5rem', fontWeight: 300, lineHeight: 1 }}>
                <sup className="text-gold" style={{ fontSize: '1.5rem', verticalAlign: 'top', marginTop: '0.5rem' }}>$</sup>
                {plan.price}
              </div>
              <div className="text-text3 mt-1 tracking-wider" style={{ fontSize: '0.75rem', letterSpacing: '0.1em' }}>
                {plan.period}
              </div>
            </div>

            <ul className="list-none mb-10">
              {plan.features.map((f) => (
                <li
                  key={f}
                  className="flex items-center gap-3 text-text2 border-b"
                  style={{ padding: '0.6rem 0', fontSize: '0.85rem', borderColor: 'rgba(255,255,255,0.04)' }}
                >
                  <span className="text-gold flex-shrink-0" style={{ fontSize: '0.5rem' }}>✦</span>
                  {f}
                </li>
              ))}
            </ul>

            <button
              className="w-full relative overflow-hidden group/btn transition-colors duration-500"
              style={{
                padding: '0.9rem',
                border: '1px solid rgba(201,168,76,0.3)',
                background: plan.featured ? 'var(--gold)' : 'transparent',
                color: plan.featured ? 'var(--black)' : 'var(--gold)',
                fontFamily: 'var(--font-body)',
                fontSize: '0.75rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                cursor: 'pointer',
              }}
            >
              <span className="relative z-[1]">{plan.cta}</span>
              <span
                className="absolute inset-0 translate-x-[-101%] group-hover/btn:translate-x-0 transition-transform duration-500"
                style={{ background: plan.featured ? 'var(--white2)' : 'var(--gold)' }}
              />
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
