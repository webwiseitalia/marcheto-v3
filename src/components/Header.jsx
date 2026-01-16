import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import logo from '../assets/images/logo_marcheto.png'

export default function Header() {
  const headerRef = useRef(null)
  const phoneRef = useRef(null)
  const navRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    tl.fromTo(phoneRef.current,
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, duration: 0.8 }
    )
    .fromTo(navRef.current.children,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 },
      '-=0.4'
    )
    .fromTo(ctaRef.current,
      { opacity: 0, x: 30 },
      { opacity: 1, x: 0, duration: 0.8 },
      '-=0.4'
    )
  }, [])

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50"
    >
      {/* Navbar principale - full width, sfondo bordeaux scuro */}
      <div
        className="w-full px-6 md:px-12 lg:px-20 py-5"
        style={{ backgroundColor: '#230500' }}
      >
        <div className="w-full flex items-center justify-between">
          {/* Phone */}
          <div ref={phoneRef} className="flex items-center gap-3">
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

          {/* Navigation */}
          <nav ref={navRef} className="flex items-center gap-8 md:gap-12">
            <a href="#home" className="text-white hover:text-[#f5a623] transition-colors font-medium tracking-wider text-sm uppercase">
              Home
            </a>
            <a href="#home" className="flex-shrink-0">
              <img src={logo} alt="Marcheto" className="h-14 md:h-18 lg:h-20 w-auto" />
            </a>
            <a href="#menu" className="text-white hover:text-[#f5a623] transition-colors font-medium tracking-wider text-sm uppercase">
              Menu
            </a>
          </nav>

          {/* CTA */}
          <div ref={ctaRef}>
            <a
              href="tel:+390364657048"
              className="group hidden sm:flex items-center gap-3 bg-black/20 border border-white/20 text-white px-7 py-3 rounded-full font-medium text-xs uppercase tracking-widest hover:bg-white hover:text-[#230500] transition-all duration-300 overflow-hidden relative"
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

    </header>
  )
}
