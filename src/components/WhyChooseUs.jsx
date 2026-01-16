import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import meatBlackIcon from '../assets/icons/meat-black.svg'

gsap.registerPlugin(ScrollTrigger)

const features = [
  {
    title: 'Carne fresca',
    description: 'Selezioniamo solo le migliori carni fresche ogni giorno'
  },
  {
    title: 'Grigliatori esperti',
    description: 'I nostri maestri della griglia hanno anni di esperienza'
  },
  {
    title: 'Passione',
    description: 'La passione per la carne è nel nostro DNA da generazioni'
  },
  {
    title: 'Rapporto personale',
    description: 'Ogni cliente è speciale, ti consigliamo come amici'
  },
  {
    title: 'Ambiente accogliente',
    description: 'Un locale dove sentirti a casa e goderti il momento'
  },
  {
    title: 'Ricette autentiche',
    description: 'Tradizione e innovazione nelle nostre preparazioni'
  }
]

export default function WhyChooseUs() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    gsap.fromTo(titleRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    )

    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(card,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: card,
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
        {/* Titolo */}
        <div ref={titleRef} className="text-center mb-12 md:mb-16">
          <span className="text-[#f5a623] text-sm uppercase tracking-widest font-medium">
            perché sceglierci
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4">
            Qualità locale
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Miglior griglieria della Valle Camonica
          </p>
        </div>

        {/* Grid features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={el => cardsRef.current[index] = el}
              className="flex gap-4 p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#f5a623] hover:shadow-lg transition-all"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#f5a623]/10 flex items-center justify-center">
                <img src={meatBlackIcon} alt="" className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-gray-900 font-semibold text-lg mb-1">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
