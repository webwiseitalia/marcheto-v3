import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function InterSection() {
  const [isPlaying, setIsPlaying] = useState(false)
  const sectionRef = useRef(null)
  const contentRef = useRef(null)
  const videoContainerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Contenuto - fade in
      gsap.fromTo(contentRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none'
          }
        }
      )

      // Video container - scale up
      gsap.fromTo(videoContainerRef.current,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          delay: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none none'
          }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="w-full py-20 md:py-28 relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #f5f5f0 0%, #ffffff 50%, #f5f5f0 100%)'
      }}
    >
      {/* Pattern decorativo sottile */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #c41e3a 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        {/* Intestazione */}
        <div ref={contentRef} className="text-center mb-12 md:mb-16">
          {/* Label */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-[1px] bg-[#c41e3a]" />
            <span className="text-[#c41e3a] text-sm uppercase tracking-widest font-medium">
              Il nostro mondo
            </span>
            <div className="w-12 h-[1px] bg-[#c41e3a]" />
          </div>

          {/* Titolo */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 uppercase tracking-tight mb-4">
            Guarda il video
          </h2>

          {/* Sottotitolo */}
          <p className="text-gray-500 text-base md:text-lg max-w-xl mx-auto">
            Scopri la passione e la dedizione che mettiamo ogni giorno nella nostra griglieria
          </p>
        </div>

        {/* Video Container */}
        <div
          ref={videoContainerRef}
          className="relative max-w-4xl mx-auto"
        >
          {/* Cornice decorativa */}
          <div className="absolute -inset-3 md:-inset-4 border-2 border-[#c41e3a]/20 rounded-2xl pointer-events-none" />
          <div className="absolute -inset-6 md:-inset-8 border border-gray-200 rounded-3xl pointer-events-none" />

          {/* Pallini decorativi */}
          <div className="absolute -top-2 -left-2 w-4 h-4 bg-[#c41e3a] rounded-full" />
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#c41e3a] rounded-full" />
          <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-[#c41e3a] rounded-full" />
          <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-[#c41e3a] rounded-full" />

          {/* Video wrapper con aspect ratio */}
          <div className="relative rounded-xl overflow-hidden shadow-2xl bg-gray-900">
            {/* Thumbnail con play button (mostrato quando non sta riproducendo) */}
            {!isPlaying && (
              <div
                className="relative w-full aspect-video cursor-pointer group"
                onClick={() => setIsPlaying(true)}
              >
                {/* Thumbnail YouTube */}
                <img
                  src="https://img.youtube.com/vi/gJzQHpT-PnQ/maxresdefault.jpg"
                  alt="Video Marcheto - Macelleria e Griglieria"
                  title="Guarda il video di Marcheto"
                  loading="lazy"
                  width={1280}
                  height={720}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://img.youtube.com/vi/gJzQHpT-PnQ/hqdefault.jpg'
                  }}
                />

                {/* Overlay scuro */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#c41e3a] flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 md:w-10 md:h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                {/* Testo sotto il play */}
                <div className="absolute bottom-6 left-0 right-0 text-center">
                  <span className="text-white text-sm md:text-base font-medium tracking-wide uppercase opacity-90">
                    Clicca per riprodurre
                  </span>
                </div>
              </div>
            )}

            {/* iframe YouTube (mostrato quando sta riproducendo) */}
            {isPlaying && (
              <div className="relative w-full aspect-video">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/gJzQHpT-PnQ?autoplay=1&rel=0"
                  title="Video Marcheto"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  )
}
