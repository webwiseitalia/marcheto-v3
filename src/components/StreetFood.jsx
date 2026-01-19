import { Link } from 'react-router-dom'
import burger from '../assets/images/burger.png'
import rosemarine from '../assets/images/rosemarine.png'
import rosemarine2 from '../assets/images/rosemarine-2.png'

export default function StreetFood() {
  return (
    <section className="w-full bg-white py-20 md:py-28 pb-32 md:pb-40 relative overflow-visible">
      {/* Rametto rosmarino in alto a sinistra */}
      <div className="absolute top-0 left-0 w-32 md:w-48 -translate-x-1/3 -translate-y-1/4 pointer-events-none">
        <img src={rosemarine} alt="" className="w-full h-auto" />
      </div>

      {/* Rametto rosmarino in basso a destra */}
      <div className="absolute bottom-0 right-0 w-32 md:w-48 translate-x-1/3 translate-y-1/4 pointer-events-none">
        <img src={rosemarine2} alt="" className="w-full h-auto" />
      </div>

      {/* Pallini decorativi gialli e rossi */}
      <div className="absolute left-[5%] top-[60%] w-3 h-3 rounded-full bg-[#f5a623]" />
      <div className="absolute right-[8%] top-[25%] w-2 h-2 rounded-full bg-red-500" />
      <div className="absolute right-[6%] top-[28%] w-1.5 h-1.5 rounded-full bg-[#f5a623]" />
      <div className="absolute right-[35%] top-[45%] w-2 h-2 rounded-full bg-[#f5a623]" />
      <div className="absolute right-[5%] bottom-[25%] w-3 h-3 rounded-full bg-[#f5a623]" />

      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          {/* Immagine hamburger esploso - a sinistra */}
          <div className="flex-1 flex justify-center">
            <img
              src={burger}
              alt="Street Food Burger"
              className="w-72 md:w-96 lg:w-[450px] h-auto"
            />
          </div>

          {/* Testo - a destra */}
          <div className="flex-1">
            {/* Sottotitolo con linea rossa */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-red-600" />
              <span className="text-red-600 text-sm uppercase tracking-widest font-medium">
                Novità da Marcheto
              </span>
            </div>

            {/* Titolo grande */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6 uppercase">
              Vieni a provare il nostro street food
            </h2>

            {/* Descrizione */}
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
              Tra pochi mesi il nostro ristorante-macelleria si arricchirà con un reparto street food, dove poter gustare piatti veloci e saporiti preparati con le migliori carni fresche della nostra selezione. Un nuovo modo di vivere la qualità e la tradizione in un ambiente informale e accogliente!
            </p>

            {/* Bottoni */}
            <div className="flex items-center gap-6">
              <a
                href="tel:+390364657048"
                className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white font-semibold text-sm uppercase tracking-wider hover:bg-gray-800 transition-colors"
              >
                Chiamaci
              </a>
              <a
                href="tel:+390364657048"
                className="inline-flex items-center gap-2 text-gray-900 font-semibold"
              >
                <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-lg">0364 657048</span>
              </a>
            </div>
          </div>
        </div>

        {/* Feature boxes in basso */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 md:mt-24">
          {/* Prodotti Italiani */}
          <div className="flex items-center gap-4 bg-gray-50 rounded-2xl p-6 shadow-sm">
            <div className="w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center flex-shrink-0">
              <svg className="w-7 h-7 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <div>
              <h3 className="text-gray-900 font-bold uppercase tracking-wide text-sm">Prodotti Italiani</h3>
              <p className="text-gray-500 text-sm">Qualità locale</p>
            </div>
          </div>

          {/* Consumazione sul posto */}
          <div className="flex items-center gap-4 bg-gray-50 rounded-2xl p-6 shadow-sm">
            <div className="w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center flex-shrink-0">
              <svg className="w-7 h-7 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-gray-900 font-bold uppercase tracking-wide text-sm">Consumazione sul posto</h3>
              <p className="text-gray-500 text-sm">Pranzo e cena</p>
            </div>
          </div>

          {/* Qualità eccellente */}
          <div className="flex items-center gap-4 bg-gray-50 rounded-2xl p-6 shadow-sm">
            <div className="w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center flex-shrink-0">
              <svg className="w-7 h-7 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <div>
              <h3 className="text-gray-900 font-bold uppercase tracking-wide text-sm">Qualità Eccellente</h3>
              <p className="text-gray-500 text-sm">Miglior griglieria</p>
            </div>
          </div>
        </div>
      </div>

      {/* Cerchio nero ESPLORA MENU - a cavallo con la sezione sotto */}
      <Link to="/menu" className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-20">
        <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-gray-900 flex flex-col items-center justify-center text-white shadow-xl hover:bg-gray-800 transition-colors cursor-pointer">
          <span className="text-xs md:text-sm uppercase tracking-widest font-medium">Esplora</span>
          <span className="text-lg md:text-xl uppercase tracking-wider font-bold">Menu</span>
        </div>
      </Link>
    </section>
  )
}
