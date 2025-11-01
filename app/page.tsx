"use client"
import { useState, useEffect } from "react"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import About from "@/components/about"
import Accommodations from "@/components/accommodations"
import Amenities from "@/components/amenities"
import Gallery from "@/components/gallery"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="bg-background">
      <Navigation scrollY={scrollY} />
      <Hero />
      <About />
      <Accommodations />
      <Amenities />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  )
}
