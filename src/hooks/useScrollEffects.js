import { useEffect } from 'react'

// Scroll progress bar + navbar background on scroll
export function useScrollEffects() {
  useEffect(() => {
    let ticking = false

    const update = () => {
      const progress = document.getElementById('progress')
      const nav = document.getElementById('navbar')
      if (progress) {
        const pct = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
        progress.style.width = pct + '%'
      }
      if (nav) {
        window.scrollY > 80 ? nav.classList.add('scrolled') : nav.classList.remove('scrolled')
      }
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update)
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
}
