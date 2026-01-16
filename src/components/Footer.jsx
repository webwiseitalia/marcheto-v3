import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import logo from '../assets/images/logo_marcheto.png'

gsap.registerPlugin(ScrollTrigger)

export default function Footer() {
  const footerRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(footerRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 90%',
          toggleActions: 'play none none reverse'
        }
      }
    )
  }, [])

  return (
    <footer ref={footerRef} className="w-full py-12 md:py-16 bg-gray-900">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Logo e descrizione */}
          <div className="text-center md:text-left">
            <img src={logo} alt="Marcheto" className="h-16 mx-auto md:mx-0 mb-4" />
            <p className="text-gray-400 text-sm">
              Macelleria e griglieria dal 1985. La passione per la carne di qualità è nel nostro DNA.
            </p>
          </div>

          {/* Contatti - Vieni a trovarci */}
          <div className="text-center">
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">
              Vieni a trovarci
            </h4>
            <div className="space-y-2 text-gray-400 text-sm">
              <p>Via Nazionale 133</p>
              <p>25040 Malonno (B.S.)</p>
              <p className="text-[#f5a623] font-medium">
                <a href="tel:+390364657048" className="hover:underline">+39 0364 657048</a>
              </p>
            </div>
          </div>

          {/* Orari */}
          <div className="text-center md:text-right">
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">
              Orari apertura
            </h4>
            <div className="space-y-2 text-gray-400 text-sm">
              <p>Lunedì - Martedì: 9:00 - 22:00</p>
              <p className="text-[#f5a623] font-medium">Mercoledì: Chiuso</p>
              <p>Giovedì - Domenica: 9:00 - 22:00</p>
            </div>
          </div>
        </div>

        {/* Social e copyright */}
        <div className="mt-10 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Social */}
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:border-[#f5a623] hover:text-[#f5a623] transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:border-[#f5a623] hover:text-[#f5a623] transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>

          {/* Copyright */}
          <p className="text-gray-500 text-sm text-center">
            © {new Date().getFullYear()} Marcheto - Macelleria Malonno. Tutti i diritti riservati.
          </p>

          {/* Privacy */}
          <div className="flex gap-4 text-gray-500 text-sm">
            <a href="#" className="hover:text-[#f5a623] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#f5a623] transition-colors">Cookie</a>
          </div>
        </div>

        {/* Credits WebWise */}
        <div className="mt-6 text-center">
          <p className="text-gray-600 text-xs">
            Realizzato da <a href="https://webwiseitalia.com" target="_blank" rel="noopener noreferrer" className="text-[#f5a623] hover:underline">WebWise</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
