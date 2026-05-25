import { marqueeItems } from '../data/content'

export default function Marquee() {
  const doubled = [...marqueeItems, ...marqueeItems]

  return (
    <div
      className="overflow-hidden py-6"
      style={{
        background: 'var(--surface)',
        borderTop: '1px solid rgba(201,168,76,0.08)',
        borderBottom: '1px solid rgba(201,168,76,0.08)',
      }}
    >
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-8 whitespace-nowrap text-text3 uppercase tracking-[0.4em]"
            style={{ fontSize: '0.7rem' }}
          >
            <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'var(--gold)' }} />
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}
