export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Lumina Hotel</h3>
            <p className="text-sm opacity-80">Experience luxury and tranquility in the heart of paradise.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a href="#about" className="hover:opacity-100 transition">
                  About
                </a>
              </li>
              <li>
                <a href="#accommodations" className="hover:opacity-100 transition">
                  Rooms
                </a>
              </li>
              <li>
                <a href="#amenities" className="hover:opacity-100 transition">
                  Amenities
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:opacity-100 transition">
                  Gallery
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a href="#" className="hover:opacity-100 transition">
                  Reservations
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition">
                  Events
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition">
                  Dining
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition">
                  Spa
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-sm opacity-80">+1 (555) 123-4567</p>
            <p className="text-sm opacity-80">info@luminahotel.com</p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm opacity-80">
          <p>&copy; {currentYear} Lumina Hotel. All rights reserved.</p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <a href="#" className="hover:opacity-100 transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:opacity-100 transition">
              Terms of Service
            </a>
            <a href="#" className="hover:opacity-100 transition">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
