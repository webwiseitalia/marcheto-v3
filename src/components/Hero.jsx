import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import steak from '../assets/images/steak.png'
import rosemarine from '../assets/images/rosemarine.png'
import rosemarine2 from '../assets/images/rosemarine-2.png'
import originalText from '../assets/images/slider-02.png'
import italianText from '../assets/images/slider-01.png'
import badgeBg from '../assets/images/slider-03.png'
import todayOffer from '../assets/images/slider-04.png'
import bgImage from '../assets/images/bg-image.png'

export default function Hero() {
  const steakRef = useRef(null)
  const rosemarine1Ref = useRef(null)
  const rosemarine2Ref = useRef(null)
  const originalRef = useRef(null)
  const italianRef = useRef(null)
  const badgeRef = useRef(null)
  const subtitleRef = useRef(null)

  useEffect(() => {
    // Rotazione continua del piatto
    gsap.to(steakRef.current, {
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: 'none'
    })

    // Parallax sui rosmarini
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e
      const xPercent = (clientX / window.innerWidth - 0.5) * 2
      const yPercent = (clientY / window.innerHeight - 0.5) * 2

      gsap.to(rosemarine1Ref.current, {
        x: xPercent * 20,
        y: yPercent * 15,
        duration: 0.5,
        ease: 'power2.out'
      })

      gsap.to(rosemarine2Ref.current, {
        x: xPercent * -25,
        y: yPercent * -20,
        duration: 0.5,
        ease: 'power2.out'
      })

      gsap.to(steakRef.current, {
        x: xPercent * 10,
        y: yPercent * 10,
        duration: 0.5,
        ease: 'power2.out'
      })
    }

    window.addEventListener('mousemove', handleMouseMove)

    // Animazioni di entrata
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    tl.fromTo(originalRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1 }
    )
    .fromTo(italianRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1.2 },
      '-=0.5'
    )
    .fromTo(steakRef.current,
      { opacity: 0, scale: 0.5, rotation: -180 },
      { opacity: 1, scale: 1, rotation: 0, duration: 1.5 },
      '-=0.8'
    )
    .fromTo(badgeRef.current,
      { opacity: 0, scale: 0, rotation: -45 },
      { opacity: 1, scale: 1, rotation: 0, duration: 0.8 },
      '-=0.5'
    )
    .fromTo([rosemarine1Ref.current, rosemarine2Ref.current],
      { opacity: 0, scale: 0.5 },
      { opacity: 1, scale: 1, duration: 1, stagger: 0.2 },
      '-=1'
    )
    .fromTo(subtitleRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8 },
      '-=0.5'
    )

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{
        backgroundColor: '#2d1810',
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Rosmarino sinistra */}
      <div
        ref={rosemarine1Ref}
        className="absolute left-0 top-1/4 w-32 md:w-48 lg:w-64 -translate-x-1/4 z-10 pointer-events-none"
      >
        <img src={rosemarine} alt="" className="w-full h-auto" />
      </div>

      {/* Rosmarino destra */}
      <div
        ref={rosemarine2Ref}
        className="absolute right-0 top-1/3 w-32 md:w-48 lg:w-64 translate-x-1/4 z-10 pointer-events-none"
      >
        <img src={rosemarine2} alt="" className="w-full h-auto" />
      </div>

      {/* Contenuto centrale */}
      <div className="relative z-20 text-center px-4">
        {/* Original */}
        <div ref={originalRef} className="mb-2 md:mb-4">
          <img src={originalText} alt="Original" className="h-16 md:h-24 lg:h-32 mx-auto" />
        </div>

        {/* ITALIAN */}
        <div ref={italianRef} className="mb-4 md:mb-8">
          <img src={italianText} alt="Italian" className="h-24 md:h-40 lg:h-56 mx-auto" />
        </div>

        {/* Steak rotante con badge */}
        <div className="relative inline-block">
          <div ref={steakRef} className="w-64 md:w-80 lg:w-[500px]">
            <img src={steak} alt="Bistecca" className="w-full h-auto" />
          </div>

          {/* Badge TODAY OFFER */}
          <div
            ref={badgeRef}
            className="absolute -right-4 md:right-0 top-0 md:top-10 w-20 md:w-28 lg:w-32"
          >
            <div className="relative">
              <img src={badgeBg} alt="" className="w-full h-auto" />
              <div className="absolute inset-0 flex items-center justify-center">
                <img src={todayOffer} alt="Today Offer" className="w-12 md:w-16 lg:w-20" />
              </div>
            </div>
          </div>
        </div>

        {/* Sottotitolo */}
        <p ref={subtitleRef} className="mt-6 md:mt-10 text-white/80 text-sm md:text-base lg:text-lg max-w-xl mx-auto">
          Carni selezionate cotte lentamente sulla brace, per un sapore autentico
        </p>
      </div>
    </section>
  )
}
