import rosemarine2 from '../assets/images/rosemarine-2.png'
import { GiMeat, GiChefToque, GiSausage, GiCookingPot } from 'react-icons/gi'
import { BiLike } from 'react-icons/bi'
import { HiOutlineHome } from 'react-icons/hi'

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
  return (
    <section className="w-full bg-white py-16 md:py-24 relative overflow-hidden">
      {/* Rametto rosmarino a destra */}
      <div className="absolute bottom-0 right-0 w-48 md:w-64 translate-x-1/4 translate-y-1/4 pointer-events-none">
        <img src={rosemarine2} alt="" className="w-full h-auto" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        {/* Titolo con sottotitolo rosso */}
        <div className="flex items-start justify-center gap-4 mb-12 md:mb-16">
          <span className="text-red-600 text-sm md:text-base uppercase tracking-widest font-medium pt-2">
            Perchè mangiare<br />da noi?
          </span>
          <div className="w-[1px] h-16 bg-gray-300 mx-4" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 uppercase leading-tight">
            I nostri clienti ci<br />conoscono per:
          </h2>
        </div>

        {/* Linea orizzontale */}
        <div className="w-full h-[1px] bg-gray-200 mb-0" />

        {/* Grid features - 2 colonne */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {features.map((feature, index) => (
            <div
              key={index}
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
