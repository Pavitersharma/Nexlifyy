import { useState, useEffect } from 'react'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Services from './components/Services'
import Process from './components/Process'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Particles from './components/Particles'
import { useReveal, useCursor, useScrollEffects, useMagneticButtons } from './hooks/useEffects'

function App() {
  const [loaded, setLoaded] = useState(false)

  useReveal()
  useCursor()
  useScrollEffects()
  useMagneticButtons()

  useEffect(() => {
    if (loaded) {
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
      document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) => observer.observe(el))
    }
  }, [loaded])

  return (
    <>
      <div id="cursor" className="cursor" />
      <div id="cursor-ring" className="cursor-ring" />
      {!loaded && <Loader onDone={() => setLoaded(true)} />}
      <div id="progress" className="scroll-progress" />
      <div className="noise" />
      <Particles />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Process />
        <Portfolio />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
