import asado from '../assets/menu/asado-argentino.jpg'
import costata from '../assets/menu/costata.jpg'
import fiorentina from '../assets/menu/fiorentina.jpg'
import picanha from '../assets/menu/picanha.jpg'
import tagliata from '../assets/menu/tagliata.jpg'
import tartare from '../assets/menu/tartare.jpg'

const products = [
  {
    image: asado,
    name: 'Asado Argentino',
    description: 'Carni selezionate cotte lentamente sulla brace, per un sapore autentico e irresistibile.',
    price: '€20.00',
    badge: 'NEW',
    badgeColor: 'bg-green-500',
    tag: 'DA PROVARE'
  },
  {
    image: costata,
    name: 'Costata',
    description: 'Una succulenta carne cotta alla perfezione sulla brace, per un gusto intenso e raffinato.',
    price: '€25.00',
    badge: null,
    tag: null
  },
  {
    image: fiorentina,
    name: 'Fiorentina',
    description: 'Bistecca spessa, tipica della tradizione toscana, ottenuta da un taglio di carne bovina, solitamente il filetto, cotta alla brace.',
    price: '€4.00\\hg',
    badge: 'HOT',
    badgeColor: 'bg-red-500',
    tag: null
  },
  {
    image: picanha,
    name: 'Picanha',
    description: 'La Picanha è un taglio di carne brasiliano, caratterizzato da una crosta di grasso che la rende succulenta e saporita.',
    price: '€20.00',
    badge: null,
    tag: null
  },
  {
    image: tagliata,
    name: 'Tagliata di Manzo',
    description: 'La tagliata è un piatto di carne, bovina, grigliata e tagliata a fette sottili.',
    price: '€20.00',
    badge: 'HOT',
    badgeColor: 'bg-red-500',
    tag: 'LA CLASSICA'
  },
  {
    image: tartare,
    name: 'Tartare Manzo\\Cavallo',
    description: 'La tartare di manzo\\cavallo è carne cruda tritata finemente, condita con olio, limone e spezie.',
    price: '€20.00',
    badge: null,
    tag: null
  },
]

export default function MenuProducts() {
  return (
    <section id="menu" className="w-full bg-[#f5f5f0] pt-24 md:pt-28 pb-16 md:pb-24">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        {/* Titolo con linea e sottotitolo */}
        <div className="flex items-center justify-center gap-4 mb-12 md:mb-16">
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
