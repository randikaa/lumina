"use client"

import { useState } from "react"
import Link from "next/link"

interface NavigationProps {
  scrollY: number
}

export default function Navigation({ scrollY }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const isScrolled = scrollY > 50

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
      ? "bg-background/80 backdrop-blur-md border-b border-accent/20"
      : "bg-transparent border-b border-transparent"
      }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-accent">
          Lumina
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#about" className="text-sm text-foreground/80 hover:text-accent transition">
            About
          </Link>
          <Link href="#accommodations" className="text-sm text-foreground/80 hover:text-accent transition">
            Rooms
          </Link>
          <Link href="#amenities" className="text-sm text-foreground/80 hover:text-accent transition">
            Amenities
          </Link>
          <Link href="#gallery" className="text-sm text-foreground/80 hover:text-accent transition">
            Gallery
          </Link>
          <Link href="#contact" className="text-sm text-foreground/80 hover:text-accent transition">
            Contact
          </Link>
          <button className="px-6 py-2 bg-accent text-primary rounded-lg hover:bg-accent/90 transition">
            Book Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-accent/20 md:hidden">
            <div className="flex flex-col gap-4 p-4">
              <Link href="#about" className="text-sm text-foreground/80 hover:text-accent transition">
                About
              </Link>
              <Link href="#accommodations" className="text-sm text-foreground/80 hover:text-accent transition">
                Rooms
              </Link>
              <Link href="#amenities" className="text-sm text-foreground/80 hover:text-accent transition">
                Amenities
              </Link>
              <Link href="#gallery" className="text-sm text-foreground/80 hover:text-accent transition">
                Gallery
              </Link>
              <Link href="#contact" className="text-sm text-foreground/80 hover:text-accent transition">
                Contact
              </Link>
              <button className="px-6 py-2 bg-accent text-primary rounded-lg hover:bg-accent/90 transition">
                Book Now
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
