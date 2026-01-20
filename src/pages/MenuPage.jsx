import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import logo from '../assets/images/logo_marcheto.png'
import rosemarine from '../assets/images/rosemarine.png'
import rosemarine2 from '../assets/images/rosemarine-2.png'
import menuHeroBg from '../assets/images/menu-hero-bg.webp'
import tagliereMarcheto from '../assets/menu/tagliere-marcheto.webp'

const menuCategories = {
  antipasti: [
    { name: 'Tagliere Marcheto', description: 'Affettati misti, salame di cervo, tegole calde di polenta con formaggio.', price: '18', badge: 'New', tag: 'Da provare' },
    { name: 'Tagliere Camuno', description: 'Affettati misti, formaggi misti camuni, sottoli della casa.', price: '18' },
    { name: 'Carpaccio', description: 'Con scaglie di grana.', price: '18' },
    { name: 'Slinzega', description: 'Produzione propria con grana o limone.', price: '18' },
    { name: 'Carne Salata', description: 'Con cipolle.', price: '18', tag: 'Chef love' },
    { name: 'Tartare', description: 'Di manzo o cavallo.', price: '22', badge: 'Hot', tag: 'Chef love' },
  ],
  brace: [
    { name: 'Grigliata Mista', description: 'Controfiletto, coppa, filetto, braciola affumicata.', price: '4,50/etto', badge: 'Hot', tag: 'Da provare' },
    { name: 'Fiorentina', description: 'Peso a vostra discrezione.', price: 'al peso', badge: 'Hot' },
    { name: 'Costata', description: 'Scamorza o irlandese.', price: '27' },
    { name: 'Cube Roll Argentina', description: 'Taglio pregiato argentino.', price: '27' },
    { name: 'Asado Argentina', description: 'Costato di manzo.', price: '21', tag: 'Chef love' },
    { name: 'Filetti di Manzo', description: 'Anche con funghi porcini.', price: '27' },
    { name: 'Tagliata di Manzo', description: 'Classica tagliata alla brace.', price: '23' },
    { name: 'Tagliata del "Giost"', description: 'Cavallo con olio e prezzemolo.', price: '23' },
    { name: 'Tagliata di Picanha', description: 'Taglio brasiliano alla brace.', price: '23', tag: 'Da provare' },
    { name: 'Hamburger di Cervo', description: 'Carne di cervo selezionata.', price: '20', badge: 'New' },
    { name: 'Cosce di Pollo Disossate', description: 'Agli aromi.', price: '22' },
    { name: 'Costine alla Marcheto', description: 'La nostra specialità.', price: '22', badge: 'Hot', tag: 'Chef love' },
  ],
  contorni: [
    { name: 'Patatine Fritte', description: 'Croccanti e dorate.', price: '3,50' },
    { name: 'Insalata Verde o Mista', description: 'Fresca di stagione.', price: '3,50' },
    { name: 'Pomodori', description: 'Freschi.', price: '3,50' },
    { name: 'Cipolle Grigliate', description: 'Grigliate e caramellate.', price: '5', tag: 'Da provare' },
    { name: 'Peperonata', description: 'Peperoni in padella.', price: '5' },
    { name: 'Cavolo Rosso', description: 'Contorno della tradizione.', price: '5' },
    { name: 'Puntarelle di Cicoria', description: 'Verdura fresca.', price: '5' },
    { name: 'Carciofi', description: 'Di stagione.', price: '5' },
    { name: 'Giardiniera della Casa', description: 'Produzione propria.', price: '5', tag: 'Chef love' },
    { name: 'Porri Grigliati', description: 'Alla brace.', price: '5' },
  ],
  bimbi: [
    { name: 'Menu Bimbi - Cotoletta', description: 'Cotoletta con patatine fritte.', price: '12' },
    { name: 'Menu Bimbi - Würstel', description: 'Würstel con patatine fritte.', price: '12' },
    { name: 'Menu Bimbi - Hamburger', description: 'Hamburger con patatine fritte.', price: '12' },
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
  brace: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2c0 3-2 5-2 8s2 5 2 5" />
      <path d="M8 4c0 2-1.5 3.5-1.5 6s1.5 4 1.5 4" />
      <path d="M16 4c0 2 1.5 3.5 1.5 6s-1.5 4-1.5 4" />
      <rect x="4" y="16" width="16" height="4" rx="1" />
      <path d="M6 20v2M18 20v2" />
    </svg>
  ),
  contorni: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M6 6l3 3M6 6l-3 3M18 6l-3 3M18 6l3 3" />
      <circle cx="12" cy="14" r="6" />
    </svg>
  ),
  bimbi: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="8" r="4" />
      <path d="M6 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
    </svg>
  ),
}

const categoryLabels = {
  antipasti: 'Antipasti',
  brace: 'Specialità Brace',
  contorni: 'Contorni',
  bimbi: 'Menu Bimbi',
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-1">
            {menuCategories[activeCategory].map((item, index) => (
              <div
                key={index}
                className="py-4 group"
              >
                {/* Riga principale: Nome + linea punteggiata + Prezzo */}
                <div className="flex items-baseline gap-2">
                  {/* Nome piatto */}
                  <h3 className="text-gray-900 font-bold text-base md:text-lg uppercase tracking-wide flex-shrink-0">
                    {item.name}
                  </h3>

                  {/* Badge NEW/HOT inline */}
                  {item.badge && (
                    <span className={`flex-shrink-0 px-2 py-0.5 rounded-full text-[10px] font-bold text-white uppercase ${
                      item.badge === 'New' ? 'bg-green-500' : 'bg-red-500'
                    }`}>
                      {item.badge}
                    </span>
                  )}

                  {/* Linea punteggiata che si espande */}
                  <div className="flex-1 border-b-2 border-dotted border-gray-300 mx-2 mb-1" />

                  {/* Prezzo */}
                  <div className="flex-shrink-0">
                    <span className="text-[#c41e3a] font-bold text-lg md:text-xl">
                      {item.price.includes('peso') || item.price.includes('etto') ? item.price : `€${item.price}`}
                    </span>
                  </div>
                </div>

                {/* Riga secondaria: Descrizione + Tag */}
                <div className="flex items-center gap-3 mt-1">
                  <p className="text-gray-500 text-sm italic">{item.description}</p>

                  {/* Tag Da provare / Chef love */}
                  {item.tag && (
                    <span className="flex-shrink-0 flex items-center gap-1 px-2 py-0.5 rounded-full bg-gray-100 text-[10px] text-gray-600 uppercase">
                      {item.tag === 'Chef love' && (
                        <svg className="w-3 h-3 text-red-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      )}
                      {item.tag === 'Da provare' && (
                        <svg className="w-3 h-3 text-amber-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      )}
                      {item.tag}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Nota per Specialità Brace */}
          {activeCategory === 'brace' && (
            <p className="text-center text-gray-500 text-sm italic mt-8">
              + tutto quello esposto nel banco macelleria e nella vetrina di frollatura
            </p>
          )}

          {/* Coperto */}
          <div className="mt-12 pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-600 text-sm">
              <span className="font-semibold">Coperto:</span> €1,50
            </p>
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
