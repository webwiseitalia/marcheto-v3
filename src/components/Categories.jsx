import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import meatIcon from '../assets/icons/meat.svg'
import icon02 from '../assets/icons/home-icon-02.svg'
import icon03 from '../assets/icons/home-icon-03.svg'
import icon04 from '../assets/icons/home-icon-04.svg'
import icon05 from '../assets/icons/home-icon-05.svg'
import icon06 from '../assets/icons/home-icon-06.svg'

gsap.registerPlugin(ScrollTrigger)

const categories = [
  { icon: meatIcon, number: '25', label: 'Carne' },
  { icon: icon02, number: '20', label: 'Panini' },
  { icon: icon03, number: '35', label: 'Contorni' },
  { icon: icon04, number: '08', label: 'Patate' },
  { icon: icon05, number: '10', label: 'Vino' },
  { icon: icon06, number: '20', label: 'Pollo' },
]

export default function Categories() {
  const sectionRef = useRef(null)
  const itemsRef = useRef([])

  useEffect(() => {
    itemsRef.current.forEach((item, index) => {
      gsap.fromTo(item,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    })
  }, [])

  return (
    <section ref={sectionRef} className="relative w-full bg-white">
      {/* Curva BIANCA che parte ALTA ai lati e SCENDE al centro */}
      <div
        className="absolute left-0 right-0 w-full pointer-events-none"
        style={{
          top: '-350px',
          height: '380px',
          zIndex: 10
        }}
      >
        <svg
          viewBox="0 0 1440 380"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          {/* Curva bianca: ALTA ai lati, SCENDE al centro (concavità verso il basso) */}
          <path
            d="M0 0 Q720 350 1440 0 L1440 380 L0 380 Z"
            fill="white"
          />
        </svg>
      </div>

      {/* Pulsante CHIAMA - cerchio grande bianco con bordo giallo */}
      <div
        className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center"
        style={{
          top: '-80px',
          zIndex: 20
        }}
      >
        {/* Freccia rossa sopra */}
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-red-600 flex items-center justify-center mb-[-20px] z-10 shadow-lg">
          <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>

        {/* Cerchio CHIAMA */}
        <a
          href="tel:+390364657048"
          className="group flex items-center justify-center w-32 h-32 md:w-40 md:h-40 rounded-full bg-white shadow-2xl hover:shadow-3xl transition-shadow"
          style={{
            border: '5px solid #f5a623'
          }}
        >
          <span className="text-gray-900 font-bold tracking-widest uppercase text-base md:text-xl">Chiama</span>
        </a>
      </div>

      {/* Contenuto categorie */}
      <div className="w-full max-w-6xl mx-auto px-4 md:px-8 pt-24 md:pt-28 pb-16 md:pb-20">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-4">
          {categories.map((cat, index) => (
            <a
              key={index}
              href="#menu"
              ref={el => itemsRef.current[index] = el}
              className="group flex flex-col items-center text-center py-4 md:py-6 transition-all duration-300 cursor-pointer border-r border-gray-200 last:border-r-0"
            >
              <div className="w-10 h-10 md:w-14 md:h-14 mb-2 md:mb-3 transition-transform duration-300 group-hover:scale-110">
                <img
                  src={cat.icon}
                  alt={cat.label}
                  className="w-full h-full object-contain"
                  style={{ filter: 'invert(20%) sepia(90%) saturate(2000%) hue-rotate(340deg) brightness(90%) contrast(90%)' }}
                />
              </div>
              <span className="text-[#b8292f] text-lg md:text-xl font-bold">{cat.number}</span>
              <span className="text-gray-700 text-xs md:text-sm mt-1 font-medium">{cat.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
