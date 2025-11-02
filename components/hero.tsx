"use client"

interface HeroProps {
  scrollY: number
}

export default function Hero({ scrollY }: HeroProps) {
  const parallaxOffset = scrollY * 0.3

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          style={{
            transform: `translateY(${parallaxOffset}px)`,
            willChange: "transform",
          }}
        >
          <source src="https://cdn.jsdelivr.net/gh/Team-Hologram/trsm/sea1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <div
          style={{
            transform: `translateY(${parallaxOffset * 0.2}px)`,
            willChange: "transform",
          }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-balance">The Ocean is Calling You</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto text-balance">
            Experience luxury and tranquility in the heart of paradise
          </p>
          <button className="px-8 py-3 bg-white/20 backdrop-blur-md text-white rounded-lg font-semibold hover:bg-white/30 transition">
            Discover More
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
