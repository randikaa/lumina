"use client"

interface AmenitiesProps {
  scrollY: number
}

const amenities = [
  {
    image: "https://cdn.jsdelivr.net/gh/Team-Hologram/trsm/pool.jpg",
    title: "Infinity Pool",
    description: "Olympic-sized infinity pool overlooking the ocean with VIP cabanas",
  },
  {
    image: "https://cdn.jsdelivr.net/gh/Team-Hologram/trsm/dining.jpg",
    title: "Fine Dining",
    description: "Award-winning restaurants featuring international and local cuisine",
  },
  {
    image: "https://cdn.jsdelivr.net/gh/Team-Hologram/trsm/spa.jpg",
    title: "Spa & Wellness",
    description: "Full-service spa with treatments inspired by ancient traditions",
  },
  {
    image: "https://cdn.jsdelivr.net/gh/Team-Hologram/trsm/fitness.jpg",
    title: "Fitness Center",
    description: "State-of-the-art gym with personal trainers and yoga studios",
  },
  {
    image: "https://cdn.jsdelivr.net/gh/Team-Hologram/trsm/Entertainment.jpg",
    title: "Entertainment",
    description: "Live performances and cultural events throughout the week",
  },
  {
    image: "https://cdn.jsdelivr.net/gh/Team-Hologram/trsm/people.jpg",
    title: "Business Center",
    description: "Fully equipped meeting rooms and high-speed internet",
  },
]

export default function Amenities({ scrollY }: AmenitiesProps) {
  const parallaxOffset = (scrollY - 2200) * 0.25

  return (
    <section id="amenities" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-accent mb-4 text-balance" style={{ color: '#003580' }}>World-Class Amenities</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Discover everything you need for an unforgettable stay
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          style={{
            transform: `translateY(${parallaxOffset}px)`,
          }}
        >
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="rounded-2xl bg-card overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={amenity.image}
                  alt={amenity.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-2xl font-bold text-foreground mb-3">{amenity.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{amenity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
