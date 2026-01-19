import steak from '../assets/images/steak.png'
import bgImage from '../assets/images/bg-image.png'
import originalText from '../assets/images/slider-02.png'
import italianText from '../assets/images/slider-01.png'
import badgeBg from '../assets/images/slider-03.png'
import todayOffer from '../assets/images/slider-04.png'
import rosemarine from '../assets/images/rosemarine.png'
import rosemarine2 from '../assets/images/rosemarine-2.png'

export default function Hero() {

  return (
    <section
      id="home"
      className="relative w-full flex flex-col items-center justify-start"
      style={{
        backgroundColor: '#260500',
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '160vh',
        paddingBottom: '350px',
        clipPath: 'inset(0 0 0 0)'
      }}
    >
      {/* Overlay con bande verticali alternate semi-trasparenti */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(90deg, transparent 0px, transparent 80px, rgba(0,0,0,0.03) 80px, rgba(0,0,0,0.03) 160px)',
          zIndex: 1
        }}
      />
      {/* Rametto rosmarino sinistra */}
      <div className="absolute left-0 top-[20%] w-44 md:w-64 lg:w-80 -translate-x-1/3 z-10 pointer-events-none">
        <img src={rosemarine} alt="Decorazione rosmarino" title="Rosmarino decorativo" loading="lazy" width={320} height={400} className="w-full h-auto" />
      </div>

      {/* Rametto rosmarino destra */}
      <div className="absolute right-0 top-[20%] w-44 md:w-64 lg:w-80 translate-x-1/3 z-10 pointer-events-none">
        <img src={rosemarine2} alt="Decorazione rosmarino" title="Rosmarino decorativo" loading="lazy" width={320} height={400} className="w-full h-auto" />
      </div>

      {/* Badge TODAY OFFER - posizionato più in basso vicino al piatto */}
      <div
        className="absolute right-[2%] md:right-[6%] lg:right-[10%] top-[38%] md:top-[40%] w-44 md:w-64 lg:w-80 z-30"
      >
        <div className="relative">
          <img src={badgeBg} alt="Badge offerta" title="Badge offerta del giorno" loading="lazy" width={320} height={320} className="w-full h-auto" />
          <div className="absolute inset-0 flex items-center justify-center">
            <img src={todayOffer} alt="Offerta del giorno" title="Offerta speciale Marcheto" loading="lazy" width={176} height={176} className="w-[55%] h-auto" />
          </div>
        </div>
      </div>

      {/* Contenuto centrale - Original + ITALIAN - SOPRA IL PIATTO */}
      <div className="relative z-20 text-center px-4 flex flex-col items-center pt-28 md:pt-36 lg:pt-40">
        {/* Original - scritta elegante */}
        <div className="mb-0">
          <img src={originalText} alt="Original" title="Original Italian" loading="eager" width={600} height={150} className="w-[280px] md:w-[450px] lg:w-[600px] h-auto mx-auto" />
        </div>

        {/* ITALIAN - ENORME, appena sotto Original */}
        <div className="relative z-10 -mt-16 md:-mt-28 lg:-mt-40">
          <img src={italianText} alt="Italian" title="Italian Meat" loading="eager" width={1100} height={300} className="w-[85vw] md:w-[80vw] lg:w-[75vw] max-w-[1100px] h-auto mx-auto" />
        </div>
      </div>

      {/* Piatto di carne rotante - posizionato più in alto */}
      <div
        className="absolute left-1/2 -translate-x-1/2 w-[650px] md:w-[950px] lg:w-[1200px] xl:w-[1450px]"
        style={{
          top: '12%',
          zIndex: 5
        }}
      >
        <div className="w-full">
          <img src={steak} alt="Piatto di bistecca alla brace" title="Bistecca Marcheto" loading="eager" width={1450} height={1450} className="w-full h-auto" />
        </div>
      </div>

      {/* Curva BIANCA - copre metà del piatto */}
      <div
        className="absolute left-0 right-0 w-full pointer-events-none"
        style={{
          bottom: 0,
          zIndex: 10
        }}
      >
        <svg
          viewBox="0 0 1440 700"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          style={{ height: '700px' }}
          preserveAspectRatio="none"
        >
          <path
            d="M0 0 Q720 600 1440 0 L1440 700 L0 700 Z"
            fill="white"
          />
        </svg>
      </div>

      {/* Pulsante CHIAMA - sul bordo della curva bianca */}
      <div
        className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center"
        style={{
          bottom: '300px',
          zIndex: 20
        }}
      >
        {/* Freccia rossa sopra */}
        <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-red-600 flex items-center justify-center mb-[-28px] z-10 shadow-lg">
          <svg className="w-7 h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>

        {/* Cerchio CHIAMA */}
        <a
          href="tel:+390364657048"
          className="group flex items-center justify-center w-40 h-40 md:w-48 md:h-48 rounded-full bg-white shadow-2xl hover:shadow-3xl transition-shadow"
          style={{
            border: '6px solid #f5a623'
          }}
        >
          <span className="text-gray-900 font-bold tracking-widest uppercase text-xl md:text-2xl">Chiama</span>
        </a>
      </div>
    </section>
  )
}
