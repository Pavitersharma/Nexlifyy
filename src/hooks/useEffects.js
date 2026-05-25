import { useEffect, useRef, useState } from 'react'

// Scroll reveal hook
export function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            observer.unobserve(e.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    )
    const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

// Counter animation hook
export function useCounter(target, duration = 2000) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          let start = null
          const step = (timestamp) => {
            if (!start) start = timestamp
            const progress = Math.min((timestamp - start) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 4)
            setCount(Math.floor(eased * target))
            if (progress < 1) requestAnimationFrame(step)
            else setCount(target)
          }
          requestAnimationFrame(step)
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target, duration])

  return { count, ref }
}

// Cursor hook
export function useCursor() {
  useEffect(() => {
    const cursor = document.getElementById('cursor')
    const ring = document.getElementById('cursor-ring')
    if (!cursor || !ring) return

    let mx = 0, my = 0, rx = 0, ry = 0
    let animId

    const onMove = (e) => {
      mx = e.clientX
      my = e.clientY
      cursor.style.left = mx + 'px'
      cursor.style.top = my + 'px'
    }

    const animRing = () => {
      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12
      ring.style.left = rx + 'px'
      ring.style.top = ry + 'px'
      animId = requestAnimationFrame(animRing)
    }
    animRing()

    const onEnter = () => ring.classList.add('expanded')
    const onLeave = () => ring.classList.remove('expanded')

    document.addEventListener('mousemove', onMove)
    document.querySelectorAll('a, button').forEach((el) => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(animId)
    }
  }, [])
}

// Scroll progress + navbar hook
export function useScrollEffects() {
  useEffect(() => {
    const onScroll = () => {
      const progress = document.getElementById('progress')
      const nav = document.getElementById('navbar')
      if (progress) {
        const pct = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
        progress.style.width = pct + '%'
      }
      if (nav) {
        window.scrollY > 80 ? nav.classList.add('scrolled') : nav.classList.remove('scrolled')
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
}

// Magnetic buttons hook
export function useMagneticButtons() {
  useEffect(() => {
    const btns = document.querySelectorAll('.btn-magnetic')
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
    })
  }, [])
}
