import { useState } from 'react'
import { faqs } from '../data/content'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section id="faq" style={{ background: 'var(--charcoal)', padding: '8rem 4%' }}>
      <div className="mx-auto" style={{ maxWidth: 800 }}>
        <div className="reveal mb-16">
          <div className="flex items-center gap-4 text-gold uppercase tracking-[0.5em] mb-4" style={{ fontSize: '0.65rem' }}>
            <span className="w-8 h-px bg-gold" />
            Questions
          </div>
          <h2 className="font-display text-cream" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 300, lineHeight: 1.05 }}>
            Frequently<br /><em className="text-gold">Asked</em>
          </h2>
        </div>

        {faqs.map((faq, i) => {
          const isOpen = openIndex === i
          return (
            <div
              key={i}
              className={`reveal delay-${i} overflow-hidden`}
              style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
            >
              <button
                className="w-full flex items-center justify-between text-left gap-4 transition-colors duration-300 hover:text-gold bg-transparent border-0"
                style={{ padding: '1.75rem 0', color: isOpen ? 'var(--gold)' : 'var(--white)', fontSize: '1rem', fontWeight: 400, cursor: 'pointer', fontFamily: 'var(--font-body)' }}
                onClick={() => toggle(i)}
              >
                {faq.q}
                <span
                  className="flex items-center justify-center flex-shrink-0 rounded-full transition-all duration-300"
                  style={{
                    width: 28, height: 28,
                    border: isOpen ? 'none' : '1px solid rgba(255,255,255,0.15)',
                    background: isOpen ? 'var(--gold)' : 'transparent',
                    color: isOpen ? 'var(--black)' : 'var(--white)',
                    transform: isOpen ? 'rotate(45deg)' : 'none',
                    fontSize: '1.2rem', lineHeight: 1,
                  }}
                >
                  +
                </span>
              </button>
              <div
                className="faq-answer"
                style={{ maxHeight: isOpen ? 300 : 0 }}
              >
                <p className="text-text2 pb-7" style={{ fontSize: '0.9rem', lineHeight: 1.8 }}>
                  {faq.a}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
