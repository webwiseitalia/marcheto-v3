import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import rosemarine2 from '../assets/images/rosemarine-2.webp'
import { GiMeat, GiChefToque, GiSausage, GiCookingPot } from 'react-icons/gi'
import { BiLike } from 'react-icons/bi'
import { HiOutlineHome } from 'react-icons/hi'

gsap.registerPlugin(ScrollTrigger)

const features = [
  {
    icon: <GiMeat className="w-12 h-12" />,
    title: 'Carne sempre fresca',
    description: 'Prima ancora di una griglieria siamo una macelleria, la materia prima è la nostra priorità.'
  },
  {
    icon: <GiChefToque className="w-12 h-12" />,
    title: 'I migliori grigliatori',
    description: 'Anni di esperienza ci hanno portato a essere ciò che siamo oggi.'
  },
  {
    icon: <GiSausage className="w-12 h-12" />,
    title: 'La nostra passione',
    description: 'Per noi non è un lavoro, bensì una passione che viene tramandata nella nostra famiglia di padre in figlio.'
  },
  {
    icon: <BiLike className="w-12 h-12" />,
    title: 'Rapporto cliente-personale',
    description: 'Il nostro team ci permette di instaurare un rapporto personale con il cliente, per fargli vivere la migliore esperienza!'
  },
  {
    icon: <HiOutlineHome className="w-12 h-12" />,
    title: 'Sede accogliente',
    description: 'Sentiti a casa nel nostro locale! la carne esposta e il profumo di brace ti faranno amare da subito la nostra griglieria'
  },
  {
    icon: <GiCookingPot className="w-12 h-12" />,
    title: 'Ricette autentiche',
    description: 'Se volete la carne stracotta saremo lieti di indicarvi il kebab più vicino :)'
  }
]

export default function WhyChooseUs() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const featuresRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Titolo - fade in
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

      // Features - staggered con alternanza
      featuresRef.current.forEach((feature, index) => {
        const isLeft = index % 2 === 0
        gsap.fromTo(feature,
          { opacity: 0, x: isLeft ? -40 : 40 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: feature,
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
    <section ref={sectionRef} className="w-full bg-white py-16 md:py-24 relative overflow-hidden">
      {/* Rametto rosmarino a destra */}
      <div className="absolute bottom-0 right-0 w-48 md:w-64 translate-x-1/4 translate-y-1/4 pointer-events-none">
        <img src={rosemarine2} alt="Decorazione rosmarino" title="Rosmarino decorativo" loading="lazy" width={256} height={320} className="w-full h-auto" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        {/* Titolo con sottotitolo rosso */}
        <div ref={titleRef} className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-12 md:mb-16 text-center md:text-left">
          <span className="text-red-600 text-sm md:text-base uppercase tracking-widest font-medium">
            Perchè mangiare<br className="hidden md:block" /> da noi?
          </span>
          <div className="hidden md:block w-[1px] h-16 bg-gray-300" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 uppercase leading-tight">
            I nostri clienti ci<br className="hidden md:block" /> conoscono per:
          </h2>
        </div>

        {/* Linea orizzontale */}
        <div className="w-full h-[1px] bg-gray-200 mb-0" />

        {/* Grid features - 2 colonne */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={el => featuresRef.current[index] = el}
              className={`flex items-start gap-6 p-8 md:p-10 border-b border-gray-200 ${
                index % 2 === 0 ? 'md:border-r' : ''
              }`}
            >
              {/* Icona */}
              <div className="flex-shrink-0 text-gray-400">
                {feature.icon}
              </div>

              {/* Testo */}
              <div>
                <h3 className="text-gray-900 font-bold uppercase tracking-wide text-base mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
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
