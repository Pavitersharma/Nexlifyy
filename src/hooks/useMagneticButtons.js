import { useEffect } from 'react'

// Magnetic button effect — buttons with .btn-magnetic class will subtly
// follow the mouse cursor. Properly cleans up all event listeners.
export function useMagneticButtons() {
  useEffect(() => {
    const btns = document.querySelectorAll('.btn-magnetic')
    const handlers = []

    btns.forEach((btn) => {
      const onMove = (e) => {
        const r = btn.getBoundingClientRect()
        const x = e.clientX - r.left - r.width / 2
        const y = e.clientY - r.top - r.height / 2
        btn.style.transform = `translate(${x * 0.15}px, ${y * 0.25}px)`
      }
      const onLeave = () => { btn.style.transform = '' }

      btn.addEventListener('mousemove', onMove)
      btn.addEventListener('mouseleave', onLeave)
      handlers.push({ btn, onMove, onLeave })
    })

    return () => {
      handlers.forEach(({ btn, onMove, onLeave }) => {
        btn.removeEventListener('mousemove', onMove)
        btn.removeEventListener('mouseleave', onLeave)
      })
    }
  }, [])
}
