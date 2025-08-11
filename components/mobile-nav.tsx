"use client"

import { useState } from "react"
import { Menu, X, MessageCircle, Instagram } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"

interface MobileNavProps {
  currentPath?: string
}

export function MobileNav({ currentPath }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "About", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Reviews", href: "/#testimonials" },
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/#contact" },
  ]

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
        aria-label="Toggle mobile menu"
      >
        {isOpen ? <X className="h-6 w-6 text-gray-700" /> : <Menu className="h-6 w-6 text-gray-700" />}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={closeMenu} aria-hidden="true" />}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 shadow-2xl transform transition-transform duration-300 ease-in-out z-50 md:hidden ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex flex-col h-full bg-white">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 font-poppins">Menu</h2>
            <button
              onClick={closeMenu}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              aria-label="Close menu"
            >
              <X className="h-6 w-6 text-gray-700" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 px-6 py-8 bg-white">
            <ul className="space-y-6">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className={`block text-lg font-medium transition-colors duration-200 py-2 ${currentPath === item.href
                      ? "text-orange-600 font-semibold"
                      : "text-gray-700 hover:text-orange-600"
                      }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          {/* CTA Buttons */}
          <div className="p-6 border-t border-gray-200 bg-white">
            <div className="space-y-3">
              <button
                onClick={() => {
                  window.open(
                    "https://wa.me/9779842597331?text=Hi%20HikeHigh%20Nepal!%20I'm%20interested%20in%20booking%20a%20Himalayan%20adventure.%20Can%20you%20help%20me%20plan%20my%20trek?",
                    "_blank",
                  )
                  closeMenu()
                }}
                className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-4 py-3 rounded-lg transition-all duration-300 flex items-center justify-center"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Book via WhatsApp
              </button>

              <button
                onClick={() => {
                  window.open("https://instagram.com/hikehighnepal", "_blank")
                  closeMenu()
                }}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-3 rounded-lg transition-all duration-300 flex items-center justify-center"
              >
                <Instagram className="mr-2 h-4 w-4" />
                Book via Instagram
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="px-6 pb-6 text-center bg-white">
            <p className="text-sm text-gray-600 mb-2">Need help planning?</p>
            <p className="text-sm font-medium text-gray-900">+977-9841234567</p>
            <p className="text-xs text-gray-500">Available 9 AM - 6 PM NPT</p>
          </div>
        </div>
      </div>
    </>
  )
}
