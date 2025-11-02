"use client"

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-96 rounded-lg overflow-hidden">
            <img
              src="/luxury-hotel-exterior-with-ocean-view.jpg"
              alt="Hotel exterior"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance" style={{ color: '#003580' }}>About Lumina Hotel</h2>
            <p className="text-lg text-foreground/80 mb-4 leading-relaxed">
              Nestled on pristine beaches with breathtaking ocean views, Lumina Hotel stands as a beacon of luxury and
              elegance. Our commitment to excellence ensures every guest experiences unparalleled service and comfort.
            </p>
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
              With over two decades of hospitality expertise, we've crafted an oasis where modern luxury meets natural
              beauty. Every detail, from our world-class amenities to our personalized service, is designed to create
              unforgettable memories.
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <div className="text-3xl font-bold text-accent" style={{ color: '#003580' }}>450+</div>
                <div className="text-sm text-foreground/60">Rooms & Suites</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent" style={{ color: '#003580' }}>20+</div>
                <div className="text-sm text-foreground/60">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent" style={{ color: '#003580' }}>5★</div>
                <div className="text-sm text-foreground/60">Luxury Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
