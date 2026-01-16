import interBg from '../assets/images/inter-bg.png'

export default function InterSection() {
  return (
    <section
      className="w-full py-0 relative"
      style={{
        backgroundImage: `url(${interBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="w-full">
        {/* Video YouTube - full width */}
        <div className="w-full">
          <div className="relative w-full aspect-video overflow-hidden">
            {/* Placeholder - sostituire YOUTUBE_VIDEO_ID con l'ID reale del video */}
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/gJzQHpT-PnQ"
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
