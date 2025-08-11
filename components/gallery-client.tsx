"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Calendar,
  X,
  Heart,
  Download,
  Share2,
  MapPin,
  Camera,
  Mountain,
  Users,
  Sunrise,
  TreePine,
  ArrowUp,
  MessageCircle,
  Instagram,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { MobileNav } from "@/components/mobile-nav"

// Sample gallery data - replace with your actual images
const generateGalleryData = () => {
  const categories = [
    "Everest Base Camp",
    "Annapurna Circuit",
    "Peak Climbing",
    "Cultural Moments",
    "Landscapes",
    "Wildlife",
    "Villages",
    "Sunrise/Sunset",
    "Team Adventures",
    "Local Life",
  ]

  const locations = [
    "Everest Region",
    "Annapurna Region",
    "Langtang Valley",
    "Manaslu Circuit",
    "Upper Mustang",
    "Dolpo",
    "Kanchenjunga",
    "Makalu Region",
  ]

  const descriptions = [
    "Breathtaking mountain vista",
    "Cultural celebration moment",
    "Summit achievement",
    "Local village life",
    "Himalayan sunrise",
    "Traditional ceremony",
    "Adventure team photo",
    "Pristine landscape",
    "Wildlife encounter",
    "Authentic experience",
  ]

  return Array.from({ length: 62 }, (_, i) => {
    const ext = i + 1 > 47 ? 'jpg' : 'jpeg';
    return {
      id: i + 1,
      src: `/images/${i + 1}.${ext}?height=${400 + (i % 3) * 100}&width=${300 + (i % 4) * 50}`,
      title: `${descriptions[i % descriptions.length]} ${i + 1}`,
      category: categories[i % categories.length],
      location: locations[i % locations.length],
      date: new Date(2024 - Math.floor(i / 12), i % 12, (i % 28) + 1).toLocaleDateString(),
      likes: Math.floor(Math.random() * 100) + 10,
      photographer: i % 3 === 0 ? "HikeHigh Nepal" : "Adventure Team",
      description: `Amazing ${descriptions[i % descriptions.length].toLowerCase()} captured during our ${categories[i % categories.length]} expedition.`,
      tags: [
        categories[i % categories.length],
        locations[i % locations.length],
        i % 2 === 0 ? "Adventure" : "Culture",
        i % 3 === 0 ? "Summit" : "Journey",
      ],
    }
  })

}

const categoryIcons = {
  "Everest Base Camp": Mountain,
  "Annapurna Circuit": Sunrise,
  "Peak Climbing": Mountain,
  "Cultural Moments": Users,
  Landscapes: TreePine,
  Wildlife: TreePine,
  Villages: Users,
  "Sunrise/Sunset": Sunrise,
  "Team Adventures": Users,
  "Local Life": Users,
  All: Camera,
}

export function GalleryClient() {
  const [images, setImages] = useState(generateGalleryData().slice(0, 12))
  const [allImages] = useState(generateGalleryData())
  const [loading, setLoading] = useState(false)
  const [selectedImage, setSelectedImage] = useState<any>(null)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const [page, setPage] = useState(1)
  const observer = useRef<IntersectionObserver>()

  // Infinite scroll
  const lastImageElementRef = useCallback(
    (node: HTMLDivElement) => {
      if (loading) return
      if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          loadMoreImages()
        }
      })
      if (node) observer.current.observe(node)
    },
    [loading, hasMore],
  )

  const loadMoreImages = useCallback(() => {
    if (loading || !hasMore) return

    setLoading(true)

    setTimeout(() => {
      const startIndex = page * 12
      const endIndex = startIndex + 12
      const newImages = allImages.slice(startIndex, endIndex)

      if (newImages.length === 0) {
        setHasMore(false)
      } else {
        setImages((prev) => [...prev, ...newImages])
        setPage((prev) => prev + 1)
      }

      setLoading(false)
    }, 800)
  }, [page, loading, hasMore, allImages])

  // Scroll to top functionality
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b z-50 transition-all duration-300">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 group">
            <Image
              src="/logo.png"
              alt="HikeHigh Nepal Logo"
              width={40}
              height={40}
              className="transition-transform duration-300 group-hover:scale-110"
            />
            <span className="text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-blue-600 font-poppins">
              HikeHigh Nepal
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {[
              { name: "About", href: "/#about" },
              { name: "Services", href: "/#services" },
              { name: "Gallery", href: "/gallery" },
              { name: "Reviews", href: "/#testimonials" },
              { name: "Blog", href: "/#blog" },
              { name: "FAQ", href: "/faq" },
              { name: "Contact", href: "/#contact" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-gray-700 hover:text-blue-600 transition-all duration-300 relative group ${item.href === "/gallery" ? "text-orange-600 font-semibold" : ""
                  }`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          <div className="relative group">
            <Button className="hidden md:flex bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              <Calendar className="mr-2 h-4 w-4" />
              Book Adventure
            </Button>

            {/* Dropdown for booking options */}
            <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-lg shadow-xl border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
              <div className="p-4">
                <h4 className="font-semibold text-gray-900 mb-3">Choose Your Booking Method</h4>
                <div className="space-y-2">
                  <button
                    onClick={() =>
                      window.open(
                        "https://wa.me/9779842597331?text=Hi%20HikeHigh%20Nepal!%20I'm%20interested%20in%20booking%20a%20Himalayan%20adventure.%20Can%20you%20help%20me%20plan%20my%20trek?",
                        "_blank",
                      )
                    }
                    className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-green-50 transition-colors duration-200 group/item"
                  >
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <MessageCircle className="h-4 w-4 text-white" />
                    </div>
                    <div className="text-left">
                      <p className="font-medium text-gray-900 group-hover/item:text-green-600">WhatsApp</p>
                      <p className="text-xs text-gray-500">Instant response</p>
                    </div>
                  </button>

                  <button
                    onClick={() => window.open("https://instagram.com/hikehighnepal", "_blank")}
                    className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-pink-50 transition-colors duration-200 group/item"
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <Instagram className="h-4 w-4 text-white" />
                    </div>
                    <div className="text-left">
                      <p className="font-medium text-gray-900 group-hover/item:text-pink-600">Instagram DM</p>
                      <p className="text-xs text-gray-500">Message us directly</p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <MobileNav currentPath="/gallery" />
        </div>
      </nav>

      {/* Navigation Spacer */}
      <div className="h-24"></div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-orange-50/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-orange-100 text-orange-800 mb-4">Adventure Gallery</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-poppins">
              Captured{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Moments</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Stunning photography from Nepal's mountains, authentic cultural experiences, and unforgettable adventures
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid - Asymmetrical Masonry */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {images.map((image, index) => (
              <div
                key={`${image.id}-${index}`}
                ref={index === images.length - 1 ? lastImageElementRef : null}
                className="group relative overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-fade-in-up break-inside-avoid mb-6"
                style={{
                  animationDelay: `${(index % 12) * 100}ms`,
                  height: `${300 + (index % 4) * 100 + Math.floor(Math.random() * 150)}px`,
                }}
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Action Buttons */}
                  <div className="absolute top-3 right-3 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" variant="secondary" className="w-8 h-8 p-0 bg-white/90 hover:bg-white">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="secondary" className="w-8 h-8 p-0 bg-white/90 hover:bg-white">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Loading Indicator */}
          {loading && (
            <div className="flex justify-center items-center py-12">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-orange-600 rounded-full animate-bounce"></div>
                <div className="w-3 h-3 bg-orange-600 rounded-full animate-bounce animation-delay-200"></div>
                <div className="w-3 h-3 bg-orange-600 rounded-full animate-bounce animation-delay-400"></div>
              </div>
            </div>
          )}

          {/* End of Gallery Message */}
          {!hasMore && images.length > 0 && (
            <div className="text-center py-12">
              <div className="inline-flex items-center space-x-2 text-gray-600">
                <Camera className="h-5 w-5" />
                <span className="text-lg font-medium">You've seen all our amazing photos!</span>
              </div>
              <p className="text-gray-500 mt-2">More adventures and photos coming soon...</p>
            </div>
          )}
        </div>
      </section>


      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 w-12 h-12 rounded-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 shadow-2xl z-40 animate-bounce"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-orange-600 to-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins">Ready to Create Your Own Adventure?</h2>
            <p className="text-lg md:text-xl text-orange-100 mb-8">
              Join us for an unforgettable journey through Nepal's mountains and create memories that will last a
              lifetime
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact">
                <Button
                  size="lg"
                  className="bg-white text-orange-600 hover:bg-orange-50 transition-all duration-300 transform hover:scale-105"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Plan Your Adventure
                </Button>
              </Link>
              <Link href="/#services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-orange-600 transition-all duration-300"
                >
                  <Mountain className="mr-2 h-5 w-5" />
                  View Our Treks
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
