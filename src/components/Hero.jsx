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

  useEffect(() => {
    // Rotazione continua del piatto
    gsap.to(steakRef.current, {
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: 'none'
    })

    // Parallax sui rosmarini e piatto
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
        x: xPercent * 15,
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

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <section
      id="home"
      className="relative w-full flex flex-col items-center justify-start overflow-visible"
      style={{
        backgroundColor: '#2d1810',
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        paddingBottom: '350px'
      }}
    >
      {/* Rosmarino sinistra */}
      <div
        ref={rosemarine1Ref}
        className="absolute left-0 top-[15%] w-16 md:w-28 lg:w-40 -translate-x-1/3 z-10 pointer-events-none"
      >
        <img src={rosemarine} alt="" className="w-full h-auto" />
      </div>

      {/* Rosmarino destra */}
      <div
        ref={rosemarine2Ref}
        className="absolute right-0 top-[15%] w-16 md:w-28 lg:w-40 translate-x-1/3 z-10 pointer-events-none"
      >
        <img src={rosemarine2} alt="" className="w-full h-auto" />
      </div>

      {/* Badge TODAY OFFER - posizionato esternamente a destra */}
      <div
        ref={badgeRef}
        className="absolute right-[5%] md:right-[10%] lg:right-[15%] top-[12%] md:top-[15%] w-16 md:w-24 lg:w-32 z-30"
      >
        <div className="relative">
          <img src={badgeBg} alt="" className="w-full h-auto" />
          <div className="absolute inset-0 flex items-center justify-center">
            <img src={todayOffer} alt="Today Offer" className="w-10 md:w-14 lg:w-20" />
          </div>
        </div>
      </div>

      {/* Contenuto centrale */}
      <div className="relative z-20 text-center px-4 flex flex-col items-center pt-20 md:pt-24">
        {/* Original */}
        <div ref={originalRef} className="mb-1 md:mb-2">
          <img src={originalText} alt="Original" className="h-12 md:h-16 lg:h-24 mx-auto" />
        </div>

        {/* ITALIAN - grande, il piatto si sovrappone */}
        <div ref={italianRef} className="relative z-10">
          <img src={italianText} alt="Italian" className="h-20 md:h-32 lg:h-48 mx-auto" />
        </div>

        {/* Steak rotante - MOLTO GRANDE, sovrapposto al testo e che entra nella conca */}
        <div
          className="relative -mt-6 md:-mt-12 lg:-mt-20 mb-[-150px] md:mb-[-200px] lg:mb-[-280px]"
          style={{ zIndex: 15 }}
        >
          <div ref={steakRef} className="w-[380px] md:w-[550px] lg:w-[750px] xl:w-[900px]">
            <img src={steak} alt="Bistecca" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  )
}
