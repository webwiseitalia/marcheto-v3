import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo_marcheto.webp'

gsap.registerPlugin(ScrollTrigger)

export default function Footer() {
  const footerRef = useRef(null)
  const titleRef = useRef(null)
  const columnsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Titolo - fade in
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      )

      // Colonne - staggered
      gsap.fromTo(columnsRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      )
    }, footerRef)

    return () => ctx.revert()
  }, [])

  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <footer
      ref={footerRef}
      className="w-full py-12 md:py-16 relative"
      style={{
        backgroundColor: '#2a2a2a',
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        backgroundBlendMode: 'overlay',
      }}
    >
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        {/* Titolo grande con numero telefono */}
        <div ref={titleRef} className="text-center mb-12">
          <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-wide">
            Il sapore che lascia il segno{' '}
            <a href="tel:+390364657048" className="underline hover:text-[#f5a623] transition-colors">
              +39 0364 657048
            </a>
          </h2>
        </div>

        {/* Griglia: Logo, Contatti, Orari, Social */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-12">
          {/* Logo */}
          <div ref={el => columnsRef.current[0] = el} className="flex justify-center md:justify-start">
            <img
              src={logo}
              alt="Marcheto"
              title="Logo Marcheto"
              loading="lazy"
              width={120}
              height={64}
              className="h-16 w-auto object-contain"
            />
          </div>

          {/* Vieni a trovarci */}
          <div ref={el => columnsRef.current[1] = el} className="text-center md:text-left">
            <h4 className="text-[#f5a623] font-semibold mb-3 text-sm uppercase tracking-wider">
              Vieni a trovarci
            </h4>
            <div className="text-white text-sm space-y-1">
              <p>Via Nazionale 133 25040,</p>
              <p>Malonno (B.S.)</p>
            </div>
          </div>

          {/* Orari apertura */}
          <div ref={el => columnsRef.current[2] = el} className="text-center md:text-left">
            <h4 className="text-[#f5a623] font-semibold mb-3 text-sm uppercase tracking-wider">
              Orari apertura
            </h4>
            <div className="text-white text-sm space-y-1">
              <p>Vi aspettiamo dalle 9 alle 22 tutti i</p>
              <p>giorni. (mercoledì chiuso)</p>
            </div>
          </div>

          {/* Social */}
          <div ref={el => columnsRef.current[3] = el} className="text-center md:text-left">
            <h4 className="text-[#f5a623] font-semibold mb-3 text-sm uppercase tracking-wider">
              Seguici e resta aggiornato
            </h4>
            <div className="flex gap-3 justify-center md:justify-start">
              <a
                href="https://www.facebook.com/p/Marcheto-macelleria-con-griglieria-100063525702122/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center text-white hover:bg-[#f5a623] transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/macelleriagriglieria_marcheto/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center text-white hover:bg-[#f5a623] transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Linea separatrice */}
        <div className="w-full h-px bg-gray-700 mb-6" />

        {/* Bottom: Link e Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Link navigazione */}
          <div className="flex flex-wrap gap-6 text-white text-sm justify-center">
            <Link to="/" onClick={scrollToTop} className="hover:text-[#f5a623] transition-colors">Home</Link>
            <Link to="/menu" onClick={scrollToTop} className="hover:text-[#f5a623] transition-colors">Menù</Link>
            <Link to="/privacy-policy" onClick={scrollToTop} className="hover:text-[#f5a623] transition-colors">Privacy Policy</Link>
            <Link to="/cookie-policy" onClick={scrollToTop} className="hover:text-[#f5a623] transition-colors">Cookie Policy</Link>
          </div>

          {/* Copyright */}
          <p className="text-white/90 text-sm">
            © {new Date().getFullYear()} Powered by{' '}
            <a href="https://webwiseitalia.com" target="_blank" rel="noopener noreferrer" className="text-[#f5a623] underline hover:text-white transition-colors">
              WebWise
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
