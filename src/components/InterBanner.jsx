import interBg from '../assets/images/inter-bg.png'

export default function InterBanner() {
  return (
    <section className="w-full bg-[#e8ecf4]">
      <img
        src={interBg}
        alt="Banner promozionale Marcheto"
        title="Marcheto - Macelleria e Griglieria"
        loading="lazy"
        width={1920}
        height={600}
        className="w-full"
      />
    </section>
  )
}
