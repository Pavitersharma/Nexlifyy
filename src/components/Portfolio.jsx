import { portfolio } from '../data/content'
import { useEffect, useRef, useCallback } from 'react'

function PortfolioItem({ item }) {
  const iframeRef = useRef(null)

  const setScale = useCallback(() => {
    if (!iframeRef.current) return
    const wrap = iframeRef.current.parentElement
    const w = wrap.offsetWidth
    const scale = w / 1440
    iframeRef.current.style.transform = `scale(${scale})`
  }, [])

  useEffect(() => {
    setScale()

    // Use ResizeObserver for efficient resize tracking
    const wrap = iframeRef.current?.parentElement
    if (!wrap) return

    let resizeObserver
    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(() => setScale())
      resizeObserver.observe(wrap)
    } else {
      // Fallback with debounced resize listener
      let timeout
      const onResize = () => {
        clearTimeout(timeout)
        timeout = setTimeout(setScale, 150)
      }
      window.addEventListener('resize', onResize)
      return () => {
        clearTimeout(timeout)
        window.removeEventListener('resize', onResize)
      }
    }

    return () => {
      if (resizeObserver) resizeObserver.disconnect()
    }
  }, [setScale])

  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="reveal group relative overflow-hidden block portfolio-item"
      style={{
        background: 'var(--black)',
        textDecoration: 'none',
      }}
    >
      {/* Thumbnail with iframe */}
      <div
        className="w-full relative overflow-hidden"
        style={{ aspectRatio: item.large ? '21/9' : '16/9', background: 'var(--surface)' }}
      >
        {/* Iframe wrapper */}
        <div className="absolute inset-0 overflow-hidden" style={{ background: 'var(--surface)' }}>
          <iframe
            ref={iframeRef}
            src={item.url}
            title={item.title}
            loading="lazy"
            scrolling="no"
            tabIndex={-1}
            style={{
              width: '1440px',
              height: '900px',
              border: 'none',
              transformOrigin: 'top left',
              pointerEvents: 'none',
              display: 'block',
              transition: 'transform 0.8s cubic-bezier(0.16,1,0.3,1)',
            }}
          />
          {/* Shield to prevent iframe interaction */}
          <div className="absolute inset-0 z-[2]" style={{ background: 'transparent' }} />
        </div>

        {/* Hover overlay */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8 z-[3]"
          style={{ background: 'linear-gradient(to top, rgba(8,8,8,0.9), transparent)' }}
        >
          <span className="text-gold uppercase tracking-widest" style={{ fontSize: '0.75rem', letterSpacing: '0.2em' }}>
            Visit Live Site →
          </span>
        </div>
      </div>

      {/* Type badge */}
      <div
        className="absolute top-6 left-6 text-gold uppercase tracking-widest z-[4]"
        style={{
          background: 'rgba(8,8,8,0.7)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(201,168,76,0.2)',
          fontSize: '0.65rem',
          letterSpacing: '0.2em',
          padding: '0.3rem 0.8rem',
        }}
      >
        {item.type}
      </div>

      {/* Meta */}
      <div className="p-6" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <h3 className="font-display text-cream mb-1" style={{ fontSize: '1.4rem', fontWeight: 300 }}>
          {item.title}
        </h3>
        <span className="text-gold uppercase tracking-widest" style={{ fontSize: '0.7rem', letterSpacing: '0.2em' }}>
          {item.subtitle}
        </span>
      </div>
    </a>
  )
}

export default function Portfolio() {
  return (
    <section id="portfolio" style={{ background: 'var(--black)', padding: '8rem 4%' }}>
      <div className="flex justify-between items-end flex-wrap gap-8 mx-auto mb-16" style={{ maxWidth: 1200 }}>
        <div>
          <div className="reveal flex items-center gap-4 text-gold uppercase tracking-[0.5em] mb-4" style={{ fontSize: '0.65rem' }}>
            <span className="w-8 h-px bg-gold" />
            Our Work
          </div>
          <h2 className="reveal font-display text-cream" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 300, lineHeight: 1.05 }}>
            Selected<br /><em className="text-gold">Projects</em>
          </h2>
        </div>
        <p className="reveal text-text2" style={{ fontSize: '0.88rem', lineHeight: 1.8, maxWidth: 300 }}>
          Each project represents our obsession with excellence and measurable results.
        </p>
      </div>

      <div className="portfolio-grid mx-auto" style={{ maxWidth: 1200 }}>
        {portfolio.map((item) => (
          <PortfolioItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  )
}
