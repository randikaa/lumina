"use client"

interface GalleryProps {
  scrollY: number
}

const images = [
  { id: 1, src: "/luxury-hotel-sunset-beach.jpg" },
  { id: 2, src: "/luxury-hotel-infinity-pool.jpg" },
  { id: 3, src: "/luxury-hotel-fine-dining-restaurant.jpg" },
  { id: 4, src: "/luxury-hotel-spa-interior.jpg" },
  { id: 5, src: "/luxury-hotel-suite-bedroom.jpg" },
  { id: 6, src: "/luxury-hotel-lobby-night-view.jpg" },
]

export default function Gallery({ scrollY }: GalleryProps) {
  const parallaxOffset = (scrollY - 3200) * 0.15

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-accent mb-4 text-balance" style={{ color: '#003580' }}>Gallery</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Take a visual tour through our stunning property
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          style={{
            transform: `translateY(${parallaxOffset}px)`,
          }}
        >
          {images.map((image) => (
            <div key={image.id} className="relative h-64 rounded-lg overflow-hidden group cursor-pointer">
              <img
                src={image.src || "/placeholder.svg"}
                alt={`Gallery ${image.id}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
