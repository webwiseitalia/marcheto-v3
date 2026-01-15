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
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
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
            <span className="hidden sm:inline font-medium tracking-wide">+39 0364 657048</span>
          </a>
        </div>

        {/* Navigation */}
        <nav ref={navRef} className="flex items-center gap-8 md:gap-12">
          <a href="#home" className="text-white hover:text-[#f5a623] transition-colors font-medium tracking-wider text-sm uppercase">
            Home
          </a>
          <a href="#home" className="flex-shrink-0">
            <img src={logo} alt="Marcheto" className="h-12 md:h-16 w-auto" />
          </a>
          <a href="#menu" className="text-white hover:text-[#f5a623] transition-colors font-medium tracking-wider text-sm uppercase">
            Menu
          </a>
        </nav>

        {/* CTA */}
        <div ref={ctaRef}>
          <a
            href="tel:+390364657048"
            className="hidden sm:flex items-center gap-2 bg-white text-[#2d1810] px-5 py-2.5 rounded-full font-medium text-sm hover:bg-[#f5a623] transition-colors"
          >
            <span>PRENOTA ORA</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  )
}
