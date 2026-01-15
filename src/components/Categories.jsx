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
    <section ref={sectionRef} className="w-full bg-white py-16 md:py-24">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {categories.map((cat, index) => (
            <a
              key={index}
              href="#menu"
              ref={el => itemsRef.current[index] = el}
              className="group flex flex-col items-center text-center p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-all duration-300 cursor-pointer border border-gray-100 hover:border-[#f5a623] hover:shadow-lg"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 mb-4 transition-transform duration-300 group-hover:scale-110">
                <img src={cat.icon} alt={cat.label} className="w-full h-full object-contain" />
              </div>
              <span className="text-[#f5a623] text-2xl md:text-3xl font-bold">{cat.number}</span>
              <span className="text-gray-800 text-sm md:text-base mt-1 font-medium">{cat.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
