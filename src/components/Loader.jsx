import { useEffect, useState } from 'react'

export default function Loader({ onDone }) {
  const [fading, setFading] = useState(false)
  const [skip, setSkip] = useState(false)

  useEffect(() => {
    // Skip loader on repeat visits within the same session
    if (sessionStorage.getItem('nexlifyy-loaded')) {
      setSkip(true)
      onDone()
      return
    }

    const t1 = setTimeout(() => setFading(true), 2000)
    const t2 = setTimeout(() => {
      sessionStorage.setItem('nexlifyy-loaded', '1')
      onDone()
    }, 2800)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [onDone])

  if (skip) return null

  return (
    <div
      id="loader"
      className="fixed inset-0 z-[10000] flex flex-col items-center justify-center gap-8 transition-opacity duration-700"
      style={{ background: 'var(--black)', opacity: fading ? 0 : 1, pointerEvents: fading ? 'none' : 'auto' }}
    >
      <div className="loader-text font-display text-gold tracking-[0.3em]" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 300 }}>
        NEXLIFYY
      </div>
      <div className="loader-line h-px" style={{ background: 'linear-gradient(90deg, transparent, var(--gold), transparent)' }} />
      <div className="loader-sub text-text2 tracking-[0.4em] uppercase" style={{ fontSize: '0.7rem' }}>
        Premium Digital Solutions
      </div>
    </div>
  )
}
