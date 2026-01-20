import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/images/logo_marcheto.webp'

export default function Header({ transparent = false }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Blocca lo scroll quando il menu è aperto
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  // Se transparent è true, lo sfondo appare solo dopo lo scroll
  // Se transparent è false, lo sfondo è sempre visibile
  const showBackground = !transparent || scrolled

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 overflow-hidden"
    >
      {/* Navbar principale - full width */}
      <div
        className={`w-full px-4 md:px-12 lg:px-20 h-[80px] md:h-[100px] flex items-center transition-all duration-300 ${
          menuOpen
            ? 'bg-[#230500] shadow-lg'
            : showBackground
              ? transparent
                ? 'bg-[#2a2a2a]/90 backdrop-blur-md shadow-lg'
                : 'bg-[#230500] shadow-lg'
              : 'bg-transparent'
        }`}
      >
        <div className="w-full flex items-center justify-between">
          {/* Phone - nascosto su mobile */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+390364657048"
              className="flex items-center gap-3 text-white hover:text-[#f5a623] transition-colors"
            >
              <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <span className="hidden sm:inline font-medium tracking-wide text-white">+39 0364 657048</span>
            </a>
          </div>

          {/* Logo su mobile (sinistra) */}
          <Link to="/" className="md:hidden flex-shrink-0" onClick={() => setMenuOpen(false)}>
            <img src={logo} alt="Marcheto" title="Logo Marcheto" loading="eager" width={80} height={80} className="h-10 w-auto" />
          </Link>

          {/* Chiama Ora + Burger - Mobile */}
          <div className="md:hidden flex items-center gap-3">
            <a
              href="tel:+390364657048"
              className="flex items-center gap-2 bg-[#f5a623] text-[#230500] px-4 py-2 rounded-full font-semibold text-xs uppercase tracking-wide"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Chiama
            </a>

            {/* Burger Menu Button - Mobile */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-10 h-10 flex flex-col items-center justify-center gap-1.5 text-white relative z-50"
              aria-label={menuOpen ? 'Chiudi menu' : 'Apri menu'}
            >
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[8px]' : ''}`} />
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0 scale-0' : ''}`} />
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[8px]' : ''}`} />
            </button>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center gap-8 md:gap-12">
            <Link to="/" className="text-white hover:text-[#f5a623] transition-colors font-medium tracking-wider text-sm uppercase">
              Home
            </Link>
            <Link to="/" className="flex-shrink-0">
              <img src={logo} alt="Marcheto" title="Logo Marcheto - Macelleria e Griglieria" loading="eager" width={80} height={80} className="h-10 md:h-12 lg:h-14 w-auto" />
            </Link>
            <Link to="/menu" className="text-white hover:text-[#f5a623] transition-colors font-medium tracking-wider text-sm uppercase">
              Menù
            </Link>
          </nav>

          {/* CTA - Desktop */}
          <div className="hidden md:block">
            <a
              href="tel:+390364657048"
              className="group flex items-center gap-3 bg-black/20 border border-white/20 text-white px-7 py-3 rounded-full font-medium text-xs uppercase tracking-widest hover:bg-white hover:text-[#230500] transition-all duration-300 overflow-hidden relative"
            >
              <span className="relative z-10">Prenota Ora</span>
              <span className="relative z-10 flex items-center">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </span>
            </a>
          </div>

        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed left-0 right-0 bottom-0 bg-[#230500] transition-all duration-500 md:hidden ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        style={{ top: '79px', zIndex: 40, width: '100%', maxWidth: '100vw' }}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8 -mt-20">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className={`text-3xl font-bold uppercase tracking-wider transition-colors text-white hover:text-[#f5a623] pb-2 border-b-2 ${
              location.pathname === '/'
                ? 'border-[#f5a623]'
                : 'border-transparent'
            }`}
          >
            Home
          </Link>
          <Link
            to="/menu"
            onClick={() => setMenuOpen(false)}
            className={`text-3xl font-bold uppercase tracking-wider transition-colors text-white hover:text-[#f5a623] pb-2 border-b-2 ${
              location.pathname === '/menu'
                ? 'border-[#f5a623]'
                : 'border-transparent'
            }`}
          >
            Menù
          </Link>

          {/* Divisore */}
          <div className="w-16 h-0.5 bg-[#f5a623] my-4" />

          {/* Telefono */}
          <a
            href="tel:+390364657048"
            className="flex items-center gap-3 text-white hover:text-[#f5a623] transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="text-xl font-medium">+39 0364 657048</span>
          </a>

          {/* CTA Prenota */}
          <a
            href="tel:+390364657048"
            className="mt-4 bg-[#f5a623] text-[#230500] px-8 py-4 rounded-full font-bold text-lg uppercase tracking-wider hover:bg-white transition-colors"
          >
            Prenota Ora
          </a>
        </nav>
      </div>
    </header>
  )
}
