import { useEffect, useRef } from 'react'

export default function Particles() {
  const ref = useRef(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return
    for (let i = 0; i < 20; i++) {
      const p = document.createElement('div')
      p.className = 'particle'
      const size = Math.random() > 0.8 ? 2 : 1
      p.style.cssText = `
        left: ${Math.random() * 100}%;
        animation-duration: ${15 + Math.random() * 25}s;
        animation-delay: ${Math.random() * 20}s;
        width: ${size}px;
        height: ${size}px;
      `
      container.appendChild(p)
    }
  }, [])

  return (
    <div
      ref={ref}
      id="particles"
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 0 }}
    />
  )
}
