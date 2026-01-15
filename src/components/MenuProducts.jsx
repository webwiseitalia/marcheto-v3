import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import asado from '../assets/menu/asado-argentino.jpg'
import costata from '../assets/menu/costata.jpg'
import fiorentina from '../assets/menu/fiorentina.jpg'
import picanha from '../assets/menu/picanha.jpg'
import tagliata from '../assets/menu/tagliata.jpg'
import tartare from '../assets/menu/tartare.jpg'

gsap.registerPlugin(ScrollTrigger)

const products = [
  { image: asado, name: 'Asado argentino', price: '€20,00', badge: 'Hot' },
  { image: costata, name: 'Costata', price: '€25,00', badge: null },
  { image: fiorentina, name: 'Fiorentina', price: '€4,00/hg', badge: 'New' },
  { image: picanha, name: 'Picanha', price: '€20,00', badge: null },
  { image: tagliata, name: 'Tagliata di manzo', price: '€20,00', badge: null },
  { image: tartare, name: 'Tartare manzo/cavallo', price: '€20,00', badge: 'New' },
]

export default function MenuProducts() {
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
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
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
    <section id="menu" ref={sectionRef} className="w-full bg-white py-16 md:py-24">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        {/* Titolo */}
        <div ref={titleRef} className="text-center mb-12 md:mb-16">
          <span className="text-[#f5a623] text-sm uppercase tracking-widest font-medium">
            dal nostro menu
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4">
            I nostri piatti
          </h2>
        </div>

        {/* Grid prodotti */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              ref={el => cardsRef.current[index] = el}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow cursor-pointer border border-gray-100"
            >
              {/* Badge */}
              {product.badge && (
                <div className={`absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-xs font-bold text-white ${
                  product.badge === 'Hot' ? 'bg-red-500' : 'bg-green-500'
                }`}>
                  {product.badge}
                </div>
              )}

              {/* Immagine */}
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="text-gray-900 text-lg font-semibold mb-2">
                  {product.name}
                </h3>
                <span className="text-[#f5a623] text-xl font-bold">
                  {product.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
