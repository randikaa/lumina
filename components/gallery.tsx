"use client"

import { useState } from "react"

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
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const parallaxOffset = (scrollY - 3200) * 0.15

  const openLightbox = (index: number) => {
    setSelectedImage(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length)
    }
  }

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length)
    }
  }

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
          {images.map((image, index) => (
            <div 
              key={image.id} 
              className="relative h-64 rounded-lg overflow-hidden group cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={`Gallery ${image.id}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <svg className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center animate-in fade-in duration-300"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition z-50"
            onClick={closeLightbox}
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <button
            className="absolute left-4 text-white hover:text-gray-300 transition z-50"
            onClick={(e) => {
              e.stopPropagation()
              goToPrevious()
            }}
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            className="absolute right-4 text-white hover:text-gray-300 transition z-50"
            onClick={(e) => {
              e.stopPropagation()
              goToNext()
            }}
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div 
            className="max-w-7xl max-h-[90vh] animate-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[selectedImage].src}
              alt={`Gallery ${images[selectedImage].id}`}
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
            {selectedImage + 1} / {images.length}
          </div>
        </div>
      )}
    </section>
  )
}
