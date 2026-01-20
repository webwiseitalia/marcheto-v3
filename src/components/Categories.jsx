import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import meatIcon from '../assets/icons/meat.svg'
import icon02 from '../assets/icons/home-icon-02.svg'
import icon03 from '../assets/icons/home-icon-03.svg'
import icon04 from '../assets/icons/home-icon-04.svg'
import icon05 from '../assets/icons/home-icon-05.svg'
import icon06 from '../assets/icons/home-icon-06.svg'

gsap.registerPlugin(ScrollTrigger)

const categories = [
  { icon: meatIcon, number: '12', label: 'Brace' },
  { icon: icon02, number: '06', label: 'Antipasti' },
  { icon: icon03, number: '10', label: 'Contorni' },
  { icon: icon04, number: '03', label: 'Bimbi' },
  { icon: icon05, number: '15', label: 'Vini' },
  { icon: icon06, number: '01', label: 'Pollo' },
]

export default function Categories() {
  const sectionRef = useRef(null)
  const itemsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animazione staggered delle categorie
      gsap.fromTo(itemsRef.current,
        { opacity: 0, y: 50, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'back.out(1.2)',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative w-full bg-white -mt-40 md:-mt-56 lg:-mt-64" style={{ zIndex: 15 }}>
      {/* Contenuto categorie */}
      <div className="w-full max-w-6xl mx-auto px-4 md:px-8 pt-16 md:pt-20 pb-16 md:pb-20">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-4">
          {categories.map((cat, index) => (
            <a
              key={index}
              ref={el => itemsRef.current[index] = el}
              href="#menu"
              className="group flex flex-col items-center text-center py-4 md:py-6 transition-all duration-300 cursor-pointer border-r border-gray-200 last:border-r-0"
            >
              <div className="w-10 h-10 md:w-14 md:h-14 mb-2 md:mb-3 transition-transform duration-300 group-hover:scale-110">
                <img
                  src={cat.icon}
                  alt={`Icona ${cat.label}`}
                  title={`Categoria ${cat.label}`}
                  loading="lazy"
                  width={56}
                  height={56}
                  className="w-full h-full object-contain"
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
