import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const reviews = [
  {
    name: 'Tania Alessio',
    text: 'Carne di qualità eccellente, preparazione perfetta. Il personale è gentilissimo e l\'ambiente è accogliente. Torneremo sicuramente!'
  },
  {
    name: 'Luca Parozzi',
    text: 'Esperienza fantastica! La bistecca era cotta alla perfezione e il servizio impeccabile. Un vero punto di riferimento per gli amanti della carne.'
  },
  {
    name: 'Angelo Avanzini',
    text: 'Finalmente una macelleria dove puoi mangiare sul posto! La qualità della carne è top e i prezzi sono onesti. Consigliatissimo!'
  }
]

export default function Reviews() {
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
        { opacity: 0, y: 40, rotation: index % 2 === 0 ? -3 : 3 },
        {
          opacity: 1,
          y: 0,
          rotation: 0,
          duration: 0.8,
          delay: index * 0.15,
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
    <section ref={sectionRef} className="w-full bg-gray-50 py-16 md:py-24">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        {/* Titolo */}
        <div ref={titleRef} className="text-center mb-12 md:mb-16">
          <span className="text-[#f5a623] text-sm uppercase tracking-widest font-medium">
            cosa dicono di noi
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4">
            Recensioni
          </h2>
        </div>

        {/* Grid recensioni */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              ref={el => cardsRef.current[index] = el}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100"
            >
              {/* Stelle */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#f5a623]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Testo */}
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                "{review.text}"
              </p>

              {/* Autore */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#f5a623] flex items-center justify-center text-white font-bold">
                  {review.name.charAt(0)}
                </div>
                <span className="text-gray-900 font-medium">{review.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
