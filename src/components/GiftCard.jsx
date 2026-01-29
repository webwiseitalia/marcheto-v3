import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import giftCardImage from '../assets/gift-card-marcheto.webp'

gsap.registerPlugin(ScrollTrigger)

export default function GiftCard() {
  const sectionRef = useRef(null)
  const cardRef = useRef(null)
  const glowRef = useRef(null)
  const textRef = useRef(null)
  const particlesRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax della card - galleggia mentre scorri
      gsap.fromTo(cardRef.current,
        { y: 100, rotateX: 15, rotateY: -10, scale: 0.8, opacity: 0 },
        {
          y: -50,
          rotateX: 0,
          rotateY: 0,
          scale: 1,
          opacity: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.5
          }
        }
      )

      // Glow pulsante continuo
      gsap.to(glowRef.current, {
        opacity: 0.6,
        scale: 1.2,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      })

      // Testo - fade in con parallax leggero
      gsap.fromTo(textRef.current,
        { y: 80, opacity: 0 },
        {
          y: -20,
          opacity: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'center center',
            scrub: 1
          }
        }
      )

      // Particelle dorate fluttuanti
      particlesRef.current.forEach((particle, i) => {
        gsap.to(particle, {
          y: -150 - (i * 30),
          x: (i % 2 === 0 ? 1 : -1) * (20 + i * 10),
          opacity: 0,
          duration: 3 + i * 0.5,
          repeat: -1,
          delay: i * 0.3,
          ease: 'power1.out'
        })
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at center, #2a2a2a 0%, #0f0f0f 50%, #000000 100%)'
      }}
    >
      {/* Sfondo con texture sottile */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          mixBlendMode: 'overlay'
        }}
      />

      {/* Linee dorate decorative */}
      <div className="absolute top-20 left-10 w-32 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent" />
      <div className="absolute top-24 left-16 w-20 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/20 to-transparent" />
      <div className="absolute bottom-20 right-10 w-32 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent" />
      <div className="absolute bottom-24 right-16 w-20 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/20 to-transparent" />

      {/* Particelle dorate */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            ref={el => particlesRef.current[i] = el}
            className="absolute w-1 h-1 rounded-full bg-[#d4af37]"
            style={{
              left: `${20 + i * 10}%`,
              bottom: '30%',
              boxShadow: '0 0 6px 2px rgba(212, 175, 55, 0.6)'
            }}
          />
        ))}
      </div>

      {/* Contenuto principale */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 py-20">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16 lg:gap-24">

          {/* Testo a sinistra */}
          <div ref={textRef} className="flex-1 text-center md:text-left order-2 md:order-1">
            {/* Badge elegante */}
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#d4af37]" />
              <span className="text-[#d4af37] text-xs md:text-sm uppercase tracking-[0.3em] font-medium">
                Idea Regalo Esclusiva
              </span>
              <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#d4af37] md:hidden" />
            </div>

            {/* Titolo grande */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 uppercase tracking-wide">
              Gift Card
              <span className="block text-[#d4af37]">Marcheto</span>
            </h2>

            {/* Descrizione */}
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-10 max-w-xl">
              Regala un'esperienza di gusto unica. Le nostre gift card sono il regalo perfetto per chi ama la buona carne e la tradizione della griglieria. Utilizzabili sia al ristorante che in macelleria.
            </p>

            {/* Bottone premium */}
            <a
              href="tel:+390364657048"
              className="group relative inline-flex items-center justify-center px-10 py-5 overflow-hidden"
            >
              {/* Bordo dorato animato */}
              <span className="absolute inset-0 border border-[#d4af37]/50 group-hover:border-[#d4af37] transition-colors duration-300" />

              {/* Sfondo al hover */}
              <span className="absolute inset-0 bg-[#d4af37] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              {/* Testo */}
              <span className="relative z-10 text-[#d4af37] group-hover:text-[#0f0f0f] font-semibold text-sm uppercase tracking-[0.2em] transition-colors duration-300">
                Coming soon
              </span>
            </a>
          </div>

          {/* Card con effetto 3D e glow - a destra */}
          <div
            ref={cardRef}
            className="relative flex-1 flex justify-center md:justify-end order-1 md:order-2"
            style={{
              perspective: '1000px',
              transformStyle: 'preserve-3d'
            }}
          >
            {/* Glow dorato dietro la card */}
            <div
              ref={glowRef}
              className="absolute inset-0 -m-8 rounded-3xl opacity-40 blur-3xl"
              style={{
                background: 'radial-gradient(ellipse, #d4af37 0%, transparent 70%)'
              }}
            />

            {/* Riflesso sotto la card */}
            <div
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 rounded-full blur-xl opacity-30"
              style={{
                background: 'linear-gradient(to right, transparent, #d4af37, transparent)'
              }}
            />

            {/* Card principale */}
            <img
              src={giftCardImage}
              alt="Gift Card Marcheto"
              title="Gift Card Marcheto - Regala un'esperienza di gusto"
              loading="lazy"
              width={500}
              height={310}
              className="relative z-10 w-80 md:w-[400px] lg:w-[550px] xl:w-[600px] h-auto drop-shadow-2xl"
              style={{
                filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.5)) drop-shadow(0 0 30px rgba(212, 175, 55, 0.2))'
              }}
            />
          </div>

        </div>
      </div>

      {/* Vignette sui bordi */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.6) 100%)'
        }}
      />
    </section>
  )
}
