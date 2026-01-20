import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const reviews = [
  {
    name: 'TANIA ALESSIO',
    text: (
      <>
        Una sorpresa saporita e golosa questa macelleria griglieria. <span className="font-bold underline">Menù ricco</span> come le porzioni dei piatti. Carne ottima e perfettamente preparata. Ambiente semplice e conviviale. <span className="font-bold underline">Materie prime d'eccezione</span> in una cornice informale e piacevole. Fermatevi!
      </>
    ),
    stars: 5
  },
  {
    name: 'MARCO BIANCHI',
    text: (
      <>
        Locale fantastico! <span className="font-bold underline">Carne di qualità superiore</span> e personale gentilissimo. Torneremo sicuramente. <span className="font-bold underline">Prezzi onesti</span> per la qualità offerta.
      </>
    ),
    stars: 5
  },
  {
    name: 'LAURA VERDI',
    text: (
      <>
        La migliore griglieria della zona! <span className="font-bold underline">Tagli perfetti</span> e cottura impeccabile. Ambiente accogliente e familiare. <span className="font-bold underline">Consigliatissimo</span> per gli amanti della carne.
      </>
    ),
    stars: 5
  }
]

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const reviewRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Titolo - slide in da sinistra
      gsap.fromTo(titleRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none'
          }
        }
      )

      // Recensione - fade in
      gsap.fromTo(reviewRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.3,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none'
          }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  const currentReview = reviews[currentIndex]

  return (
    <section ref={sectionRef} className="w-full bg-white py-16 md:py-24">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-start justify-center gap-12 md:gap-24">
          {/* Lato sinistro - Titolo e frecce */}
          <div ref={titleRef} className="flex-shrink-0">
            {/* Cuoricino + RECENSIONI */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-red-600 text-lg">❤</span>
              <span className="text-red-600 text-sm font-medium uppercase tracking-wider">Recensioni</span>
            </div>

            {/* Titolo */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 uppercase leading-tight mb-8">
              Cosa dicono i<br />clienti
            </h2>

            {/* Frecce navigazione */}
            <div className="flex items-center gap-2">
              <button
                onClick={prevReview}
                className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 hover:border-gray-500 hover:text-gray-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextReview}
                className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 hover:border-gray-500 hover:text-gray-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Lato destro - Recensione */}
          <div ref={reviewRef} className="flex items-start gap-6 md:gap-10 flex-1">
            {/* Nome verticale */}
            <div
              className="text-gray-400 text-xs font-bold uppercase tracking-widest whitespace-nowrap"
              style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
            >
              {currentReview.name}
            </div>

            {/* Contenuto recensione */}
            <div className="max-w-md">
              <p className="text-gray-700 text-base leading-relaxed mb-6">
                {currentReview.text}
              </p>

              {/* Badge stelle */}
              <div className="inline-flex items-center gap-1 bg-red-600 text-white px-4 py-2 rounded-full">
                {[...Array(currentReview.stars)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
