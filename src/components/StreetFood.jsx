import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import burger from '../assets/images/burger.png'

gsap.registerPlugin(ScrollTrigger)

export default function StreetFood() {
  const sectionRef = useRef(null)
  const textRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
        toggleActions: 'play none none reverse'
      }
    })

    tl.fromTo(textRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1 }
    )
    .fromTo(imageRef.current,
      { opacity: 0, x: 50, rotation: 10 },
      { opacity: 1, x: 0, rotation: 0, duration: 1 },
      '-=0.5'
    )

    // Parallax sull'immagine al scroll
    gsap.to(imageRef.current, {
      y: -30,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
      }
    })
  }, [])

  return (
    <section ref={sectionRef} className="w-full bg-white py-16 md:py-24">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          {/* Testo */}
          <div ref={textRef} className="flex-1 text-center md:text-left">
            <span className="text-[#f5a623] text-sm md:text-base uppercase tracking-widest font-medium">
              novità da marcheto
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6">
              vieni a provare il nostro{' '}
              <span className="text-[#f5a623]">street food</span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-lg">
              Un nuovo modo di vivere la qualità e la tradizione in un ambiente informale.
              Piatti veloci e saporiti preparati con le migliori carni fresche.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">
              <a
                href="tel:+390364657048"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#f5a623] text-white font-semibold rounded-full hover:bg-[#e09000] transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Chiamaci
              </a>
              <a
                href="#menu"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:border-[#f5a623] hover:text-[#f5a623] transition-colors"
              >
                Scopri il menu
              </a>
            </div>
          </div>

          {/* Immagine */}
          <div ref={imageRef} className="flex-1 flex justify-center">
            <img
              src={burger}
              alt="Street Food"
              className="w-64 md:w-80 lg:w-96 h-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
