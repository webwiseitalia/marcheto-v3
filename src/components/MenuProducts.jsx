import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import asado from '../assets/menu/asado-argentino.jpg'
import costata from '../assets/menu/costata.jpg'
import fiorentina from '../assets/menu/fiorentina.jpg'
import picanha from '../assets/menu/picanha.jpg'
import tagliata from '../assets/menu/tagliata.jpg'
import tartare from '../assets/menu/tartare.jpg'

gsap.registerPlugin(ScrollTrigger)

const products = [
  {
    image: asado,
    name: 'Asado Argentina',
    description: 'Costato di manzo cotto lentamente sulla brace, per un sapore autentico e irresistibile.',
    price: '€21',
    badge: null,
    badgeColor: null,
    tag: 'CHEF LOVE'
  },
  {
    image: costata,
    name: 'Costata',
    description: 'Scamorza o irlandese, cotta alla perfezione sulla brace per un gusto intenso e raffinato.',
    price: '€27',
    badge: null,
    tag: null
  },
  {
    image: fiorentina,
    name: 'Fiorentina',
    description: 'Bistecca spessa, tipica della tradizione toscana, peso a vostra discrezione.',
    price: 'al peso',
    badge: 'HOT',
    badgeColor: 'bg-red-500',
    tag: null
  },
  {
    image: picanha,
    name: 'Tagliata di Picanha',
    description: 'Taglio brasiliano alla brace, caratterizzato da una crosta di grasso che la rende succulenta e saporita.',
    price: '€23',
    badge: null,
    tag: 'DA PROVARE'
  },
  {
    image: tagliata,
    name: 'Tagliata di Manzo',
    description: 'Classica tagliata alla brace, grigliata e tagliata a fette sottili.',
    price: '€23',
    badge: 'HOT',
    badgeColor: 'bg-red-500',
    tag: 'LA CLASSICA'
  },
  {
    image: tartare,
    name: 'Tartare',
    description: 'Di manzo o cavallo, carne cruda tritata finemente, condita con olio, limone e spezie.',
    price: '€22',
    badge: null,
    tag: 'CHEF LOVE'
  },
]

export default function MenuProducts() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const productsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Titolo - fade in dall'alto
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: -30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none'
          }
        }
      )

      // Prodotti - staggered con alternanza sinistra/destra
      productsRef.current.forEach((product, index) => {
        const isLeft = index % 2 === 0
        gsap.fromTo(product,
          { opacity: 0, x: isLeft ? -50 : 50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: product,
              start: 'top 85%',
              toggleActions: 'play none none none'
            }
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="menu" className="w-full bg-[#f5f5f0] pt-24 md:pt-28 pb-16 md:pb-24">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        {/* Titolo con linea e sottotitolo */}
        <div ref={titleRef} className="flex items-center justify-center gap-4 mb-12 md:mb-16">
          <span className="text-red-700 text-sm md:text-base uppercase tracking-widest font-medium italic">
            I migliori piatti
          </span>
          <div className="w-[1px] h-8 bg-gray-300" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 uppercase">
            Il nostro menù
          </h2>
        </div>

        {/* Grid prodotti - 2 colonne */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          {products.map((product, index) => (
            <div
              key={index}
              ref={el => productsRef.current[index] = el}
              className="flex items-start gap-5"
            >
              {/* Immagine circolare con badge */}
              <div className="relative flex-shrink-0">
                {product.badge && (
                  <div className={`absolute -top-1 -left-1 z-10 px-2 py-1 rounded-full text-[10px] font-bold text-white ${product.badgeColor}`}>
                    {product.badge}
                  </div>
                )}
                <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    title={`${product.name} - Marcheto`}
                    loading="lazy"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Info prodotto */}
              <div className="flex-1 pt-2">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-gray-900 text-base md:text-lg font-bold uppercase">
                    {product.name}
                  </h3>
                  {product.tag && (
                    <span className="px-2 py-0.5 border border-gray-300 rounded-full text-[10px] text-gray-600 uppercase flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                      {product.tag}
                    </span>
                  )}
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-2">
                  {product.description}
                </p>
              </div>

              {/* Prezzo */}
              <div className="flex-shrink-0 pt-2">
                <span className="text-gray-900 text-xl md:text-2xl font-bold">
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
