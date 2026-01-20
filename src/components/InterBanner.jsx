import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function InterBanner() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const quoteRef = useRef(null)
  const trophiesRef = useRef(null)
  const logoRef = useRef(null)
  const starsRef = useRef([])
  const stripesRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Strisce che si animano
      gsap.fromTo(stripesRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1.2,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      )

      // Logo centrale - scale con rotazione
      gsap.fromTo(logoRef.current,
        { opacity: 0, scale: 0, rotation: -180 },
        {
          opacity: 0.08,
          scale: 1,
          rotation: 0,
          duration: 1.5,
          ease: 'back.out(1.2)',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none'
          }
        }
      )

      // Titolo - typewriter effect simulato con clip-path
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none none'
          }
        }
      )

      // Citazione - fade in elegante
      gsap.fromTo(quoteRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.3,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none none'
          }
        }
      )

      // Trofei - staggered bounce in
      gsap.fromTo(trophiesRef.current,
        { opacity: 0, y: 60, scale: 0.5 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: 'back.out(1.5)',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none none'
          }
        }
      )

      // Stelle animate continuous
      starsRef.current.forEach((star, index) => {
        gsap.to(star, {
          opacity: 0.3,
          duration: 1 + index * 0.2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: index * 0.3
        })
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="w-full py-20 md:py-28 lg:py-32 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0d1b2a 0%, #1b263b 50%, #0d1b2a 100%)'
      }}
    >
      {/* Strisce nerazzurre animate */}
      <div
        ref={stripesRef}
        className="absolute inset-0 pointer-events-none origin-top"
        style={{
          background: 'repeating-linear-gradient(90deg, transparent 0px, transparent 60px, rgba(0, 82, 147, 0.15) 60px, rgba(0, 82, 147, 0.15) 120px)',
        }}
      />

      {/* Pattern di stelle dorate sparse */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            ref={el => starsRef.current[i] = el}
            className="absolute text-yellow-400/20"
            style={{
              left: `${10 + (i % 4) * 25}%`,
              top: `${15 + Math.floor(i / 4) * 35}%`,
              fontSize: `${12 + (i % 3) * 6}px`
            }}
          >
            ★
          </div>
        ))}
      </div>

      {/* Logo Inter gigante come watermark centrale */}
      <div
        ref={logoRef}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <svg className="w-64 h-64 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]" viewBox="0 0 100 100" fill="none">
          {/* Cerchio esterno */}
          <circle cx="50" cy="50" r="48" stroke="#ffd700" strokeWidth="1.5" fill="none" />
          {/* Cerchio medio */}
          <circle cx="50" cy="50" r="42" stroke="#ffd700" strokeWidth="0.5" fill="none" />
          {/* Cerchio interno */}
          <circle cx="50" cy="50" r="36" stroke="#ffd700" strokeWidth="0.5" fill="none" />
          {/* Lettere I M F C stilizzate */}
          <text x="50" y="38" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#ffd700" fontFamily="serif">I</text>
          <text x="50" y="50" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#ffd700" fontFamily="serif">M</text>
          <text x="42" y="62" textAnchor="middle" fontSize="8" fill="#ffd700" fontFamily="serif">F</text>
          <text x="58" y="62" textAnchor="middle" fontSize="8" fill="#ffd700" fontFamily="serif">C</text>
          {/* Linee verticali stilizzate */}
          <path d="M30 22 L30 78" stroke="#ffd700" strokeWidth="2" />
          <path d="M40 18 L40 82" stroke="#ffd700" strokeWidth="2" />
          <path d="M50 15 L50 85" stroke="#ffd700" strokeWidth="3" />
          <path d="M60 18 L60 82" stroke="#ffd700" strokeWidth="2" />
          <path d="M70 22 L70 78" stroke="#ffd700" strokeWidth="2" />
        </svg>
      </div>

      {/* Contenuto principale */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">

        {/* Titolo principale con effetto glow */}
        <div ref={titleRef} className="text-center mb-8">
          <div className="inline-block relative">
            <span className="text-xs md:text-sm uppercase tracking-[0.3em] text-yellow-400/70 font-medium mb-4 block">
              Passione Nerazzurra
            </span>
            <h2
              className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white uppercase tracking-tight"
              style={{
                textShadow: '0 0 40px rgba(0, 82, 147, 0.5), 0 0 80px rgba(0, 82, 147, 0.3)',
                fontFamily: 'system-ui, -apple-system, sans-serif'
              }}
            >
              Sei interista?
            </h2>
            <h2
              className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black uppercase tracking-tight mt-2"
              style={{
                background: 'linear-gradient(135deg, #ffd700 0%, #ffed4a 50%, #ffd700 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 0 40px rgba(255, 215, 0, 0.3)',
                fontFamily: 'system-ui, -apple-system, sans-serif'
              }}
            >
              Allora sei a casa!
            </h2>
          </div>
        </div>

        {/* Citazione con stile elegante */}
        <div ref={quoteRef} className="text-center mb-12 md:mb-16">
          <blockquote className="relative max-w-3xl mx-auto">
            {/* Virgolette decorative */}
            <span className="absolute -top-6 -left-2 md:-left-8 text-6xl md:text-8xl text-yellow-400/10 font-serif">"</span>
            <p
              className="text-lg md:text-xl lg:text-2xl text-white/80 italic leading-relaxed px-8"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              L'Inter è una fede, una passione che non finisce mai.
              <span className="text-yellow-400"> Si ama per sempre.</span>
            </p>
            <footer className="mt-4">
              <cite
                className="text-yellow-400/70 text-sm md:text-base not-italic tracking-wide"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                — Giuseppe Meazza
              </cite>
            </footer>
            <span className="absolute -bottom-10 -right-2 md:-right-8 text-6xl md:text-8xl text-yellow-400/10 font-serif rotate-180">"</span>
          </blockquote>
        </div>

        {/* Trofei Triplete 2009/2010 */}
        <div ref={trophiesRef} className="flex flex-col items-center">
          <span className="text-yellow-400 text-xs md:text-sm font-bold tracking-[0.5em] uppercase mb-6">
            Triplete 2009/2010
          </span>

          <div className="flex items-end justify-center gap-6 md:gap-10">
            {/* Coppa Italia */}
            <div className="flex flex-col items-center group cursor-default">
              <div className="relative">
                <div
                  className="w-10 h-14 md:w-14 md:h-20 rounded-t-full transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: 'linear-gradient(to right, #009246 33%, white 33%, white 66%, #ce2b37 66%)',
                    boxShadow: '0 0 20px rgba(255, 215, 0, 0.3)'
                  }}
                />
                <div className="w-8 h-1.5 md:w-12 md:h-2 bg-gradient-to-b from-yellow-400 to-yellow-600 mx-auto" />
                <div className="w-10 h-2 md:w-14 md:h-3 bg-gradient-to-b from-yellow-600 to-yellow-800 mx-auto rounded-b" />
              </div>
              <span className="text-white/50 text-[10px] md:text-xs uppercase tracking-wider mt-3">Coppa Italia</span>
            </div>

            {/* Scudetto - centrale e più grande */}
            <div className="flex flex-col items-center group cursor-default -mt-4">
              <div className="relative">
                <div
                  className="w-16 h-20 md:w-24 md:h-28 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: 'linear-gradient(to right, #009246 33%, white 33%, white 66%, #ce2b37 66%)',
                    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                    boxShadow: '0 0 30px rgba(255, 215, 0, 0.4)'
                  }}
                />
                {/* Stella dorata sopra lo scudetto */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-yellow-400 text-lg md:text-2xl">★</div>
              </div>
              <span className="text-white/50 text-[10px] md:text-xs uppercase tracking-wider mt-3">Serie A</span>
            </div>

            {/* Champions League */}
            <div className="flex flex-col items-center group cursor-default">
              <div className="relative">
                <svg
                  className="w-12 h-14 md:w-16 md:h-20 transition-transform duration-300 group-hover:scale-110"
                  viewBox="0 0 24 28"
                  style={{ filter: 'drop-shadow(0 0 15px rgba(255, 215, 0, 0.5))' }}
                >
                  {/* Coppa con orecchie */}
                  <ellipse cx="12" cy="6" rx="10" ry="4" fill="url(#goldGradient)" />
                  <path d="M2 6 Q2 18 12 22 Q22 18 22 6" fill="url(#goldGradient)" />
                  {/* Manici */}
                  <path d="M2 8 Q-2 10 0 14 Q2 16 4 14" stroke="url(#goldGradient)" strokeWidth="2" fill="none" />
                  <path d="M22 8 Q26 10 24 14 Q22 16 20 14" stroke="url(#goldGradient)" strokeWidth="2" fill="none" />
                  {/* Base */}
                  <rect x="9" y="22" width="6" height="2" fill="url(#goldGradient)" />
                  <ellipse cx="12" cy="26" rx="5" ry="2" fill="url(#goldGradient)" />
                  {/* Gradient definition */}
                  <defs>
                    <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ffd700" />
                      <stop offset="50%" stopColor="#ffed4a" />
                      <stop offset="100%" stopColor="#ffd700" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <span className="text-white/50 text-[10px] md:text-xs uppercase tracking-wider mt-3">Champions</span>
            </div>
          </div>
        </div>

      </div>

      {/* Bordo decorativo inferiore */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent" />
    </section>
  )
}
