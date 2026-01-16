import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import interBg from '../assets/images/inter-bg.png'

gsap.registerPlugin(ScrollTrigger)

export default function InterSection() {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)
  const videoRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(contentRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse'
        }
      }
    )

    gsap.fromTo(videoRef.current,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse'
        }
      }
    )
  }, [])

  return (
    <section
      ref={sectionRef}
      className="w-full py-16 md:py-24 relative"
      style={{
        backgroundImage: `url(${interBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <div ref={contentRef} className="text-center mb-10">
          {/* Il testo è già nell'immagine di sfondo */}
        </div>

        {/* Video YouTube - placeholder, da sostituire con l'URL reale */}
        <div ref={videoRef} className="max-w-4xl mx-auto">
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl">
            {/* Placeholder - sostituire YOUTUBE_VIDEO_ID con l'ID reale del video */}
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/YOUTUBE_VIDEO_ID"
              title="Video Marcheto Inter"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  )
}
