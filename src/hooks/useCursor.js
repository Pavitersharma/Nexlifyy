import { useEffect } from 'react'

// Custom cursor hook — uses event delegation for dynamic element support
// Properly cleans up all event listeners to prevent memory leaks
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

    // Use event delegation on document so dynamically added elements also work
    const onMouseOver = (e) => {
      const interactive = e.target.closest('a, button')
      if (interactive) ring.classList.add('expanded')
    }

    const onMouseOut = (e) => {
      const interactive = e.target.closest('a, button')
      if (interactive) ring.classList.remove('expanded')
    }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onMouseOver)
    document.addEventListener('mouseout', onMouseOut)

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onMouseOver)
      document.removeEventListener('mouseout', onMouseOut)
      cancelAnimationFrame(animId)
    }
  }, [])
}
