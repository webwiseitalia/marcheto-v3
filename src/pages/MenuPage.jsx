import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import logo from '../assets/images/logo_marcheto.png'
import rosemarine from '../assets/images/rosemarine.png'
import rosemarine2 from '../assets/images/rosemarine-2.png'
import menuHeroBg from '../assets/images/menu-hero-bg.webp'

// Immagini menu
import fiorentina from '../assets/menu/fiorentina.jpg'
import costata from '../assets/menu/costata.jpg'
import tagliata from '../assets/menu/tagliata.jpg'
import picanha from '../assets/menu/picanha.jpg'
import asado from '../assets/menu/asado-argentino.jpg'
import tartare from '../assets/menu/tartare.jpg'
import tagliereMarcheto from '../assets/menu/tagliere-marcheto.webp'
import tartareManzo from '../assets/menu/tartare-manzo.webp'

const menuCategories = {
  antipasti: [
    { name: 'Tagliere Marcheto', description: 'Affettati misti, salame di cervo, tegolino caldo di polenta con formaggio.', price: '15.00', image: tagliereMarcheto, badge: 'New', tag: 'Da provare' },
    { name: 'Slinzega', description: 'Produzione propria con grana e olio e limone.', price: '12.00', image: tartare },
    { name: 'Tagliere Camuno', description: 'Affettati misti, formaggi misti camuni, sottaceti della casa.', price: '18.00', image: tagliata },
    { name: 'Carne Salata', description: 'Con cipolle.', price: '16.00', image: tartare, badge: 'Hot', tag: 'Chef love' },
    { name: 'Carpaccio', description: 'Con scaglie di grana.', price: '18.00', image: costata },
    { name: 'Tartare', description: 'Di manzo o di cavallo.', price: '20.00', image: tartareManzo, badge: 'Hot', tag: 'Chef love' },
  ],
  contorni: [
    { name: 'Patate al Forno', description: 'Patate croccanti cotte al forno con rosmarino.', price: '5.00', image: picanha },
    { name: 'Insalata Mista', description: 'Insalata fresca di stagione.', price: '4.00', image: picanha },
    { name: 'Verdure Grigliate', description: 'Zucchine, melanzane e peperoni alla griglia.', price: '6.00', image: picanha, tag: 'Da provare' },
    { name: 'Fagioli alla Texana', description: 'Fagioli in salsa BBQ affumicata.', price: '5.50', image: picanha },
  ],
  panini: [
    { name: 'Panino Marcheto', description: 'Pulled pork, coleslaw, salsa BBQ.', price: '12.00', image: asado, badge: 'Hot' },
    { name: 'Burger Classico', description: 'Macinato di manzo, cheddar, bacon, salsa speciale.', price: '14.00', image: asado, tag: 'Da provare' },
    { name: 'Burger Gourmet', description: 'Angus, brie, cipolla caramellata, rucola.', price: '16.00', image: asado },
    { name: 'Hot Dog Americano', description: 'Wurstel di manzo, senape, ketchup, cipolla croccante.', price: '8.00', image: asado },
  ],
  drinks: [
    { name: 'Coca Cola', description: 'Lattina 33cl.', price: '3.00', image: picanha },
    { name: 'Birra Artigianale', description: 'Selezione di birre locali alla spina.', price: '5.00', image: picanha, badge: 'New' },
    { name: 'Vino Rosso della Casa', description: 'Calice di vino rosso selezionato.', price: '4.00', image: picanha },
    { name: 'Acqua Minerale', description: 'Naturale o frizzante 75cl.', price: '2.50', image: picanha },
  ],
}

// Icone per le categorie
const categoryIcons = {
  antipasti: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 4c-4 0-7 2-7 4v2c0 2 3 4 7 4s7-2 7-4V8c0-2-3-4-7-4z" />
      <path d="M5 10v4c0 2 3 4 7 4s7-2 7-4v-4" />
      <path d="M5 14v3c0 2 3 4 7 4s7-2 7-4v-3" />
    </svg>
  ),
  contorni: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M6 6l3 3M6 6l-3 3M18 6l-3 3M18 6l3 3" />
      <circle cx="12" cy="14" r="6" />
    </svg>
  ),
  panini: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 12h16M4 12c0-3 4-6 8-6s8 3 8 6M4 12v2c0 2 4 4 8 4s8-2 8-4v-2" />
      <path d="M8 12v4M12 12v4M16 12v4" />
    </svg>
  ),
  drinks: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M8 2h8l-1 10H9L8 2z" />
      <path d="M9 12h6v2c0 3-1.5 6-3 6s-3-3-3-6v-2z" />
      <path d="M10 20h4" />
    </svg>
  ),
}

const categoryLabels = {
  antipasti: 'Antipasti',
  contorni: 'Contorni',
  panini: 'Panini',
  drinks: 'Drinks',
}

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('antipasti')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header - trasparente per la pagina menu */}
      <Header transparent />

      {/* Hero Section con immagine di sfondo */}
      <section className="w-full relative">
        {/* Immagine di sfondo che include il bordo grunge e le decorazioni */}
        <img
          src={menuHeroBg}
          alt="Menu Marcheto"
          title="Il nostro menù - Marcheto"
          loading="eager"
          width={1920}
          height={600}
          className="w-full h-auto"
        />

        {/* Contenuto hero sovrapposto all'immagine */}
        <div className="absolute inset-0 flex items-center justify-center pb-12 md:pb-16">
          <div className="flex items-center justify-center gap-4 md:gap-6">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wider" style={{ fontFamily: 'Georgia, serif' }}>
              Il nostro menù
            </h1>
            <div className="w-px h-8 md:h-10 bg-white/50" />
            <span className="text-[#f5a623] text-sm sm:text-base md:text-lg uppercase tracking-widest font-medium">
              Esperienza indimenticabile
            </span>
          </div>
        </div>
      </section>

      {/* Sezione Intro - sfondo bianco/crema */}
      <section className="w-full bg-white pt-20 md:pt-28 pb-16 md:pb-24 relative">
        {/* Pallino rosso sopra l'immagine */}
        <div className="absolute left-[18%] md:left-[22%] top-12 md:top-16 w-3 h-3 rounded-full bg-[#c41e3a] z-10" />

        {/* Pallino rosso estrema sinistra */}
        <div className="absolute left-4 md:left-8 bottom-1/3 w-3 h-3 rounded-full bg-[#c41e3a]" />

        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16">
            {/* Immagine a sinistra */}
            <div className="flex-1 max-w-lg">
              <img
                src={tagliereMarcheto}
                alt="Tagliere Marcheto con affettati misti"
                title="Tagliere Marcheto"
                loading="lazy"
                width={512}
                height={384}
                className="w-full rounded-lg shadow-2xl"
              />
            </div>

            {/* Testo centrale */}
            <div className="flex-1 relative">
              {/* Sottotitolo rosso con linea */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-[2px] bg-[#c41e3a]" />
                <span className="text-[#c41e3a] text-sm uppercase tracking-widest font-medium">
                  Vieni a trovarci
                </span>
              </div>

              {/* Titolo grande */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-4 uppercase">
                Il nostro<br />menu.
              </h2>

              {/* Pallino rosa piccolo */}
              <div className="w-1.5 h-1.5 rounded-full bg-pink-300 mb-6" />

              {/* Descrizione */}
              <p className="text-gray-500 text-base leading-relaxed max-w-md">
                Il nostro menù, una selezione curata di piatti freschi e genuini, pensati per ogni gusto.
              </p>
            </div>

            {/* Colonna destra: pallino + testo verticale */}
            <div className="hidden lg:flex flex-col items-center gap-4">
              {/* Pallino rosso */}
              <div className="w-3 h-3 rounded-full bg-[#c41e3a]" />

              {/* Testo verticale */}
              <div
                className="text-[#c41e3a] text-sm font-bold uppercase tracking-widest"
                style={{ writingMode: 'vertical-rl' }}
              >
                Chiamaci - 0364 657048
              </div>

              {/* Pallino piccolo in basso */}
              <div className="w-1.5 h-1.5 rounded-full bg-[#c41e3a]/50 mt-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Sezione Menu Completo */}
      <section className="w-full bg-white py-16 md:py-24 relative">
        {/* Rosmarino decorativo a sinistra */}
        <div className="absolute left-0 top-1/4 w-32 md:w-48 pointer-events-none">
          <img src={rosemarine} alt="Decorazione rosmarino" title="Rosmarino decorativo" loading="lazy" width={192} height={240} className="w-full h-auto" />
        </div>

        <div className="max-w-6xl mx-auto px-4 md:px-8">
          {/* Titolo sezione */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className="text-red-600 text-sm uppercase tracking-widest font-medium">
              Piatti deliziosi
            </span>
            <div className="w-px h-6 bg-gray-300" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 uppercase tracking-wide">
              Menù completo
            </h2>
          </div>

          {/* Tabs con icone */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-12 md:mb-16">
            {Object.keys(categoryLabels).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex flex-col items-center gap-2 transition-colors ${
                  activeCategory === cat
                    ? 'text-red-600'
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                {categoryIcons[cat]}
                <span className={`text-sm uppercase tracking-wider ${
                  activeCategory === cat ? 'font-semibold border-b-2 border-red-600 pb-1' : ''
                }`}>
                  {categoryLabels[cat]}
                </span>
              </button>
            ))}
          </div>

          {/* Menu Items Grid - 2 colonne */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {menuCategories[activeCategory].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 py-4 border-b border-dashed border-gray-300"
              >
                {/* Immagine circolare */}
                <div className="relative flex-shrink-0">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden shadow-lg">
                    <img
                      src={item.image}
                      alt={item.name}
                      title={`${item.name} - Marcheto`}
                      loading="lazy"
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Badge NEW/HOT */}
                  {item.badge && (
                    <span className={`absolute -top-1 -left-1 px-2 py-0.5 rounded-full text-[10px] font-bold text-white uppercase ${
                      item.badge === 'New' ? 'bg-green-500' : 'bg-red-500'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </div>

                {/* Info */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-gray-900 font-bold text-base uppercase">{item.name}</h3>
                    {/* Tag Da provare / Chef love */}
                    {item.tag && (
                      <span className="flex items-center gap-1 px-2 py-0.5 rounded-full border border-gray-300 text-[10px] text-gray-500 uppercase">
                        {item.tag === 'Chef love' && (
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        )}
                        {item.tag === 'Da provare' && (
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                          </svg>
                        )}
                        {item.tag}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-500 text-sm">{item.description}</p>
                </div>

                {/* Prezzo */}
                <div className="flex-shrink-0 text-right">
                  <span className="text-gray-400 text-xs align-top">€</span>
                  <span className="text-gray-900 font-bold text-xl">{item.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="w-full py-12 md:py-16 relative"
        style={{
          backgroundColor: '#2a2a2a',
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundBlendMode: 'overlay',
        }}
      >
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
          {/* Titolo grande con numero telefono */}
          <div className="text-center mb-12">
            <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-wide">
              Il sapore che lascia il segno{' '}
              <a href="tel:+390364657048" className="underline hover:text-[#f5a623] transition-colors">
                +39 0364 657048
              </a>
            </h2>
          </div>

          {/* Griglia: Logo, Contatti, Orari, Social */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-12">
            {/* Logo */}
            <div className="flex justify-center md:justify-start">
              <img src={logo} alt="Marcheto" title="Logo Marcheto" loading="lazy" width={128} height={64} className="h-16" />
            </div>

            {/* Vieni a trovarci */}
            <div className="text-center md:text-left">
              <h4 className="text-white font-semibold mb-3 text-sm">
                Vieni a trovarci
              </h4>
              <div className="text-gray-400 text-sm space-y-1">
                <p>Via Nazionale 133 25040,</p>
                <p>Malonno (B.S.)</p>
              </div>
            </div>

            {/* Orari apertura */}
            <div className="text-center md:text-left">
              <h4 className="text-white font-semibold mb-3 text-sm">
                Orari apertura
              </h4>
              <div className="text-gray-400 text-sm space-y-1">
                <p>Vi aspettiamo dalle 9 alle 22 tutti i</p>
                <p>giorni. (mercoledì chiuso)</p>
              </div>
            </div>

            {/* Social */}
            <div className="text-center md:text-left">
              <h4 className="text-white font-semibold mb-3 text-sm">
                Seguici e resta aggiornato
              </h4>
              <div className="flex gap-3 justify-center md:justify-start">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center text-white hover:bg-[#f5a623] transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center text-white hover:bg-[#f5a623] transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Linea separatrice */}
          <div className="w-full h-px bg-gray-700 mb-6" />

          {/* Bottom: Link e Copyright */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Link navigazione */}
            <div className="flex flex-wrap gap-6 text-gray-400 text-sm justify-center">
              <Link to="/" onClick={scrollToTop} className="hover:text-white transition-colors">Home</Link>
              <Link to="/menu" onClick={scrollToTop} className="hover:text-white transition-colors">Menu</Link>
              <Link to="/privacy-policy" onClick={scrollToTop} className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/cookie-policy" onClick={scrollToTop} className="hover:text-white transition-colors">Cookie Policy</Link>
            </div>

            {/* Copyright */}
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Powered by{' '}
              <a href="https://webwiseitalia.com" target="_blank" rel="noopener noreferrer" className="text-white underline hover:text-[#f5a623] transition-colors">
                WebWise
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
