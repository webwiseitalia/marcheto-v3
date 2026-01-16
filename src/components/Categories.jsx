import meatIcon from '../assets/icons/meat.svg'
import icon02 from '../assets/icons/home-icon-02.svg'
import icon03 from '../assets/icons/home-icon-03.svg'
import icon04 from '../assets/icons/home-icon-04.svg'
import icon05 from '../assets/icons/home-icon-05.svg'
import icon06 from '../assets/icons/home-icon-06.svg'

const categories = [
  { icon: meatIcon, number: '25', label: 'Carne' },
  { icon: icon02, number: '20', label: 'Panini' },
  { icon: icon03, number: '35', label: 'Contorni' },
  { icon: icon04, number: '08', label: 'Patate' },
  { icon: icon05, number: '10', label: 'Vino' },
  { icon: icon06, number: '20', label: 'Pollo' },
]

export default function Categories() {
  return (
    <section className="relative w-full bg-white -mt-40 md:-mt-56 lg:-mt-64" style={{ zIndex: 15 }}>
      {/* Contenuto categorie */}
      <div className="w-full max-w-6xl mx-auto px-4 md:px-8 pt-16 md:pt-20 pb-16 md:pb-20">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-4">
          {categories.map((cat, index) => (
            <a
              key={index}
              href="#menu"
              className="group flex flex-col items-center text-center py-4 md:py-6 transition-all duration-300 cursor-pointer border-r border-gray-200 last:border-r-0"
            >
              <div className="w-10 h-10 md:w-14 md:h-14 mb-2 md:mb-3 transition-transform duration-300 group-hover:scale-110">
                <img
                  src={cat.icon}
                  alt={cat.label}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-[#b8292f] text-lg md:text-xl font-bold">{cat.number}</span>
              <span className="text-gray-700 text-xs md:text-sm mt-1 font-medium">{cat.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
