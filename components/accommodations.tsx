"use client"

import { Card } from "@/components/ui/card"
import { Bed, Eye, Wifi, Wind } from "lucide-react"

interface AccommodationsProps {
  scrollY: number
}

const rooms = [
  {
    id: 1,
    name: "Standard Room",
    price: "$199",
    image: "/luxury-hotel-standard-room-interior.jpg",
    amenities: [
      { icon: Bed, label: "King bed" },
      { icon: Eye, label: "Ocean View" },
      { icon: Wifi, label: "Free WiFi" },
      { icon: Wind, label: "AC" },
    ],
  },
  {
    id: 2,
    name: "Deluxe Suite",
    price: "$299",
    image: "/luxury-hotel-deluxe-suite-with-balcony.jpg",
    amenities: [
      { icon: Bed, label: "King bed" },
      { icon: Eye, label: "Living Area" },
      { icon: Wifi, label: "Spa Tub" },
      { icon: Wind, label: "Balcony" },
    ],
  },
  {
    id: 3,
    name: "Presidential Suite",
    price: "$599",
    image: "/luxury-hotel-presidential-penthouse-suite.jpg",
    amenities: [
      { icon: Bed, label: "Multiple Beds" },
      { icon: Eye, label: "Private Pool" },
      { icon: Wifi, label: "Chef Kitchen" },
      { icon: Wind, label: "Concierge" },
    ],
  },
]

export default function Accommodations({ scrollY }: AccommodationsProps) {
  return (
    <section id="accommodations" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Our Accommodations</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Choose from our selection of carefully curated rooms and suites
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <Card
              key={room.id}
              className="overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col bg-card border-0"
            >
              <div className="relative h-72 overflow-hidden bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500">
                <img
                  src={room.image || "/placeholder.svg"}
                  alt={room.name}
                  className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
                />
              </div>

              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between mb-6">
                    <h3 className="text-2xl font-bold text-foreground">{room.name}</h3>
                    <p className="text-lg font-bold text-accent">{room.price}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {room.amenities.map((amenity, index) => {
                      const Icon = amenity.icon
                      return (
                        <div key={index} className="flex items-center gap-2">
                          <Icon className="w-5 h-5 text-accent flex-shrink-0" />
                          <span className="text-sm text-foreground/80">{amenity.label}</span>
                        </div>
                      )
                    })}
                  </div>

                  <a href="#" className="text-accent font-semibold text-sm hover:underline mb-6 inline-block">
                    More Details →
                  </a>
                </div>

                <button className="w-full py-3 bg-foreground text-background rounded-full hover:bg-foreground/90 transition font-semibold">
                  Book Now
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
