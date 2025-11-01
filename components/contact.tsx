"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"

interface ContactProps {
  scrollY: number
}

export default function Contact({ scrollY }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  const parallaxOffset = (scrollY - 4000) * 0.2

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div
            style={{
              transform: `translateY(${parallaxOffset}px)`,
            }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-accent mb-8 text-balance">Get in Touch</h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Address</h3>
                <p className="text-foreground/70">123 Paradise Beach Road</p>
                <p className="text-foreground/70">Coastal City, CC 12345</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Phone</h3>
                <p className="text-foreground/70">+1 (555) 123-4567</p>
                <p className="text-foreground/70">Reservations: +1 (555) 987-6543</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Email</h3>
                <p className="text-foreground/70">info@luminahotel.com</p>
                <p className="text-foreground/70">reservations@luminahotel.com</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Hours</h3>
                <p className="text-foreground/70">Monday - Friday: 8:00 AM - 6:00 PM</p>
                <p className="text-foreground/70">Saturday - Sunday: 9:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card
            className="p-8"
            style={{
              transform: `translateY(${-parallaxOffset * 0.5}px)`,
            }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                  placeholder="Your message..."
                  rows={5}
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-accent text-primary rounded-lg hover:bg-accent/90 transition font-semibold"
              >
                Send Message
              </button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}
