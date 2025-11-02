"use client"

interface AmenitiesProps {
  scrollY: number
}

const amenities = [
  {
    icon: "🏊",
    title: "Infinity Pool",
    description: "Olympic-sized infinity pool overlooking the ocean with VIP cabanas",
  },
  {
    icon: "🍽️",
    title: "Fine Dining",
    description: "Award-winning restaurants featuring international and local cuisine",
  },
  {
    icon: "💆",
    title: "Spa & Wellness",
    description: "Full-service spa with treatments inspired by ancient traditions",
  },
  {
    icon: "🏋️",
    title: "Fitness Center",
    description: "State-of-the-art gym with personal trainers and yoga studios",
  },
  {
    icon: "🎭",
    title: "Entertainment",
    description: "Live performances and cultural events throughout the week",
  },
  {
    icon: "📚",
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
              className="p-8 rounded-lg bg-card hover:shadow-lg transition-shadow duration-300 border border-accent/10 text-center"
            >
              <div className="text-5xl mb-4">{amenity.icon}</div>
              <h3 className="text-2xl font-bold text-foreground mb-3">{amenity.title}</h3>
              <p className="text-foreground/70 leading-relaxed">{amenity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
