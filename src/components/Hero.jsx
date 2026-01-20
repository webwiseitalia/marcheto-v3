import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import steak from '../assets/images/steak.png'
import bgImage from '../assets/images/bg-image.png'
import originalText from '../assets/images/slider-02.webp'
import italianText from '../assets/images/slider-01.png'
import badgeBg from '../assets/images/slider-03.png'
import todayOffer from '../assets/images/slider-04.png'
import rosemarine from '../assets/images/rosemarine.png'
import rosemarine2 from '../assets/images/rosemarine-2.png'

export default function Hero() {
  const heroRef = useRef(null)
  const originalRef = useRef(null)
  const italianRef = useRef(null)
  const steakRef = useRef(null)
  const badgeRef = useRef(null)
  const callButtonRef = useRef(null)
  const rosemaryLeftRef = useRef(null)
  const rosemaryRightRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline principale
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      // Animazione "Original" - fade in dall'alto
      tl.fromTo(originalRef.current,
        { opacity: 0, y: -30 },
        { opacity: 1, y: 0, duration: 0.6 }
      )

      // Animazione "ITALIAN" - scale up con fade
      .fromTo(italianRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.7 },
        '-=0.3'
      )

      // Piatto - zoom in con bounce
      .fromTo(steakRef.current,
        { opacity: 0, scale: 0.5 },
        { opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.2)' },
        '-=0.4'
      )

      // Badge "Today Offer" - rotazione e scale (solo su desktop)
      .fromTo(badgeRef.current,
        { opacity: 0, scale: 0, rotation: -180 },
        { opacity: 1, scale: 1, rotation: 0, duration: 0.6, ease: 'back.out(1.5)' },
        '-=0.5'
      )

      // Pulsante CHIAMA - bounce dal basso
      .fromTo(callButtonRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'back.out(1.7)' },
        '-=0.3'
      )

      // Rosmarino sinistra - slide in (solo su desktop)
      .fromTo(rosemaryLeftRef.current,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 0.6 },
        '-=0.6'
      )

      // Rosmarino destra - slide in (solo su desktop)
      .fromTo(rosemaryRightRef.current,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 0.6 },
        '-=0.5'
      )
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative w-full flex flex-col items-center justify-start"
      style={{
        backgroundColor: '#260500',
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '160vh',
        paddingBottom: '350px',
        clipPath: 'inset(0 0 0 0)'
      }}
    >
      {/* Overlay con bande verticali alternate semi-trasparenti */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(90deg, transparent 0px, transparent 80px, rgba(0,0,0,0.03) 80px, rgba(0,0,0,0.03) 160px)',
          zIndex: 1
        }}
      />
      {/* Rametto rosmarino sinistra - NASCOSTO su mobile */}
      <div ref={rosemaryLeftRef} className="hidden md:block absolute left-0 top-[20%] w-44 md:w-64 lg:w-80 -translate-x-1/3 z-10 pointer-events-none">
        <img src={rosemarine} alt="Decorazione rosmarino" title="Rosmarino decorativo" loading="lazy" width={320} height={400} className="w-full h-auto" />
      </div>

      {/* Rametto rosmarino destra - NASCOSTO su mobile */}
      <div ref={rosemaryRightRef} className="hidden md:block absolute right-0 top-[20%] w-44 md:w-64 lg:w-80 translate-x-1/3 z-10 pointer-events-none">
        <img src={rosemarine2} alt="Decorazione rosmarino" title="Rosmarino decorativo" loading="lazy" width={320} height={400} className="w-full h-auto" />
      </div>

      {/* Badge TODAY OFFER - NASCOSTO su mobile */}
      <div
        ref={badgeRef}
        className="hidden md:block absolute right-[2%] md:right-[6%] lg:right-[10%] top-[38%] md:top-[40%] w-44 md:w-64 lg:w-80 z-30"
      >
        <div className="relative">
          <img src={badgeBg} alt="Badge offerta" title="Badge offerta del giorno" loading="lazy" width={320} height={320} className="w-full h-auto" />
          <div className="absolute inset-0 flex items-center justify-center">
            <img src={todayOffer} alt="Offerta del giorno" title="Offerta speciale Marcheto" loading="lazy" width={157} height={157} className="w-[157px] h-auto" />
          </div>
        </div>
      </div>

      {/* Contenuto centrale - Original + ITALIAN - SOPRA IL PIATTO */}
      <div className="relative z-20 text-center px-4 flex flex-col items-center pt-20 md:pt-24 lg:pt-28">
        {/* Original - scritta elegante */}
        <div ref={originalRef} className="mb-0">
          <img src={originalText} alt="Original" title="Original Italian" loading="eager" width={500} height={125} className="w-[230px] md:w-[380px] lg:w-[500px] h-auto mx-auto" />
        </div>

        {/* ITALIAN - ENORME, appena sotto Original */}
        <div ref={italianRef} className="relative z-10 -mt-16 md:-mt-[136px] lg:-mt-[184px]">
          <img src={italianText} alt="Italian" title="Italian Meat" loading="eager" width={940} height={256} className="w-[85vw] md:w-[80vw] lg:w-[70vw] max-w-[940px] h-auto mx-auto" />
        </div>
      </div>

      {/* Piatto di carne rotante - ALZATO di 100px su mobile */}
      <div
        ref={steakRef}
        className="absolute left-1/2 -translate-x-1/2 w-[700px] md:w-[1000px] lg:w-[1300px] xl:w-[1550px]"
        style={{
          top: 'calc(12% + 96px)',
          zIndex: 5,
          transform: 'translateX(-50%) scale(1.2)'
        }}
      >
        <div className="w-full animate-spin-slow -mt-[100px] md:mt-0">
          <img src={steak} alt="Piatto di bistecca alla brace" title="Bistecca Marcheto" loading="eager" width={1550} height={1550} className="w-full h-auto" />
        </div>
      </div>

      {/* Curva BIANCA - PIÙ IN ALTO e MENO CURVA su mobile */}
      <div
        className="absolute left-0 right-0 w-full pointer-events-none"
        style={{
          bottom: 0,
          zIndex: 10
        }}
      >
        {/* Curva mobile - meno pronunciata */}
        <svg
          viewBox="0 0 1440 700"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[850px] md:hidden"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0 Q720 120 1440 0 L1440 700 L0 700 Z"
            fill="white"
          />
        </svg>
        {/* Curva desktop - normale */}
        <svg
          viewBox="0 0 1440 700"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[500px] hidden md:block"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0 Q720 300 1440 0 L1440 700 L0 700 Z"
            fill="white"
          />
        </svg>
      </div>

      {/* Pulsante CHIAMA - PIÙ IN ALTO su mobile */}
      <div
        ref={callButtonRef}
        className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center bottom-[720px] md:bottom-[300px]"
        style={{
          zIndex: 20
        }}
      >
        {/* Freccia rossa sopra */}
        <div className="w-[54px] h-[54px] rounded-full bg-[#c7220e] flex items-center justify-center mb-[-27px] z-10 shadow-lg">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>

        {/* Cerchio CHIAMA */}
        <a
          href="tel:+390364657048"
          className="group flex items-center justify-center w-32 h-32 md:w-48 md:h-48 rounded-full bg-white shadow-2xl hover:shadow-3xl transition-shadow"
          style={{
            border: '6px solid #f5a623'
          }}
        >
          <span
            className="text-gray-900 uppercase -mt-5"
            style={{
              fontFamily: 'Antonio, sans-serif',
              fontSize: 'clamp(28px, 5vw, 38px)',
              fontWeight: 700,
              WebkitFontSmoothing: 'antialiased',
              letterSpacing: '-2px'
            }}
          >CHIAMA</span>
        </a>
      </div>
    </section>
  )
}
