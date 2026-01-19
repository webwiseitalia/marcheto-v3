import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo_marcheto.png'

// Immagini menu
import fiorentina from '../assets/menu/fiorentina.jpg'
import costata from '../assets/menu/costata.jpg'
import tagliata from '../assets/menu/tagliata.jpg'
import picanha from '../assets/menu/picanha.jpg'
import asado from '../assets/menu/asado-argentino.jpg'
import tartare from '../assets/menu/tartare.jpg'

const menuCategories = {
  antipasti: [
    { name: 'Tartare di Manzo', description: 'Carne cruda tagliata al coltello, condita con olio EVO e limone', price: '14.00', image: tartare, badge: 'New' },
    { name: 'Carpaccio di Fassona', description: 'Fette sottili di fassona piemontese con rucola e grana', price: '12.00', image: tartare, badge: 'Chef love' },
    { name: 'Tagliere di Salumi', description: 'Selezione dei migliori salumi nostrani', price: '16.00', image: asado },
    { name: 'Bruschette Miste', description: 'Pane tostato con pomodoro, lardo e nduja', price: '8.00', image: tartare },
  ],
  contorni: [
    { name: 'Patate al Forno', description: 'Patate croccanti cotte al forno con rosmarino', price: '5.00', image: picanha },
    { name: 'Insalata Mista', description: 'Insalata fresca di stagione', price: '4.00', image: picanha },
    { name: 'Verdure Grigliate', description: 'Zucchine, melanzane e peperoni alla griglia', price: '6.00', image: picanha, badge: 'Must try' },
    { name: 'Fagioli alla Texana', description: 'Fagioli in salsa BBQ affumicata', price: '5.50', image: picanha },
  ],
  panini: [
    { name: 'Panino Marcheto', description: 'Pulled pork, coleslaw, salsa BBQ', price: '12.00', image: asado, badge: 'Hot' },
    { name: 'Burger Classico', description: 'Macinato di manzo, cheddar, bacon, salsa speciale', price: '14.00', image: asado, badge: 'Must try' },
    { name: 'Burger Gourmet', description: 'Angus, brie, cipolla caramellata, rucola', price: '16.00', image: asado },
    { name: 'Hot Dog Americano', description: 'Wurstel di manzo, senape, ketchup, cipolla croccante', price: '8.00', image: asado },
  ],
  drinks: [
    { name: 'Coca Cola', description: 'Lattina 33cl', price: '3.00', image: picanha },
    { name: 'Birra Artigianale', description: 'Selezione di birre locali alla spina', price: '5.00', image: picanha, badge: 'New' },
    { name: 'Vino Rosso della Casa', description: 'Calice di vino rosso selezionato', price: '4.00', image: picanha },
    { name: 'Acqua Minerale', description: 'Naturale o frizzante 75cl', price: '2.50', image: picanha },
  ],
}

const categoryLabels = {
  antipasti: 'Antipasti',
  contorni: 'Contorni',
  panini: 'Panini',
  drinks: 'Drinks',
}

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('antipasti')

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="w-full py-4 px-4 md:px-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/">
            <img src={logo} alt="Marcheto" className="h-12" />
          </Link>
          <nav className="flex items-center gap-8">
            <Link to="/" className="text-gray-700 hover:text-gray-900 text-sm uppercase tracking-wider">
              Home
            </Link>
            <Link to="/menu" className="text-gray-900 font-semibold text-sm uppercase tracking-wider">
              Menu
            </Link>
            <a
              href="tel:+390364657048"
              className="hidden sm:flex items-center gap-2 bg-[#2d1810] text-white px-6 py-3 rounded-full font-medium text-xs uppercase tracking-widest hover:bg-[#1a0f0a] transition-colors"
            >
              Prenota Ora
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 bg-[#f5f5f0] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Testo */}
            <div className="text-center md:text-left">
              <span className="text-red-600 text-sm uppercase tracking-widest font-medium mb-4 block">
                Esperienza indimenticabile
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 uppercase leading-tight mb-6">
                Il nostro<br />menù
              </h1>
              <p className="text-gray-600 text-lg max-w-md mb-8">
                Una selezione curata di piatti freschi e genuini, preparati con le migliori carni selezionate.
              </p>
              <a
                href="tel:+390364657048"
                className="inline-flex items-center gap-3 bg-[#2d1810] text-white px-8 py-4 rounded-full font-medium text-sm uppercase tracking-widest hover:bg-[#1a0f0a] transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +39 0364 657048
              </a>
            </div>

            {/* Immagine circolare */}
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <img
                  src={fiorentina}
                  alt="Carne alla griglia"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorazione */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xs uppercase">
                <span className="text-center leading-tight">Dal<br />1985</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="w-full py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12 md:mb-16">
            {Object.keys(categoryLabels).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-3 rounded-full text-sm uppercase tracking-wider font-medium transition-colors ${
                  activeCategory === cat
                    ? 'bg-[#2d1810] text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {categoryLabels[cat]}
              </button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {menuCategories[activeCategory].map((item, index) => (
              <div
                key={index}
                className="flex gap-4 md:gap-6 p-4 md:p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Immagine */}
                <div className="relative flex-shrink-0">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-xl overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Badge */}
                  {item.badge && (
                    <span className={`absolute -top-2 -left-2 px-2 py-1 rounded-full text-xs font-bold text-white ${
                      item.badge === 'New' ? 'bg-green-500' :
                      item.badge === 'Hot' ? 'bg-red-500' :
                      item.badge === 'Chef love' ? 'bg-pink-500' :
                      'bg-orange-500'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </div>

                {/* Info */}
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="text-gray-900 font-bold text-lg mb-1">{item.name}</h3>
                  <p className="text-gray-500 text-sm mb-3">{item.description}</p>
                  <span className="text-[#2d1810] font-bold text-xl">€{item.price}</span>
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
              <img src={logo} alt="Marcheto" className="h-16" />
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
            <div className="flex gap-6 text-gray-400 text-sm">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <Link to="/menu" className="hover:text-white transition-colors">Menu</Link>
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
