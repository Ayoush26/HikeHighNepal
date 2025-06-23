"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Mountain,
  MapPin,
  Star,
  Award,
  Phone,
  Mail,
  Instagram,
  Facebook,
  MessageCircle,
  CheckCircle,
  Calendar,
  ArrowRight,
  Play,
  ChevronDown,
  Shield,
  Clock,
  Globe,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { MobileNav } from "@/components/mobile-nav"

// Animated Counter Component
function AnimatedCounter({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

// Floating Elements Component
function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="floating-element absolute top-20 left-10 w-4 h-4 bg-blue-400/20 rounded-full animate-float"></div>
      <div className="floating-element absolute top-40 right-20 w-6 h-6 bg-white/10 rounded-full animate-float-delayed"></div>
      <div className="floating-element absolute bottom-40 left-20 w-3 h-3 bg-blue-300/30 rounded-full animate-float-slow"></div>
      <div className="floating-element absolute bottom-20 right-10 w-5 h-5 bg-white/20 rounded-full animate-float"></div>
    </div>
  )
}

export default function HikeHighNepalWebsite() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % 3)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b z-50 transition-all duration-300">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 group">
            <Image
              src="/logo.png"
              alt="HikeHigh Nepal Logo - Professional Mountain Guide Services"
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
              { name: "About", href: "#about" },
              { name: "Services", href: "#services" },
              { name: "Gallery", href: "#gallery" },
              { name: "Reviews", href: "#testimonials" },
              { name: "Blog", href: "/blog" },
              { name: "FAQ", href: "/faq" },
              { name: "Contact", href: "#contact" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 transition-all duration-300 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <Button className="hidden md:flex bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            <Calendar className="mr-2 h-4 w-4" />
            Book Adventure
          </Button>

          {/* Mobile Navigation */}
          <MobileNav currentPath="/" />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-gray-900/70 to-black/60 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-15"></div>

        <Image
          src="/images/Adventure8.jpeg"
          alt="Majestic Himalayan peaks in Nepal - HikeHigh Nepal adventures"
          fill
          className="object-cover scale-105 animate-ken-burns"
          priority
        />

        <FloatingElements />

        <div
          className={`relative z-20 text-center max-w-5xl mx-auto px-4 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <div className="mb-6 animate-fade-in-up">
            <Badge className="bg-blue-600/20 text-blue-200 border-blue-400/30 mb-4 animate-pulse-soft">
              🏔️ Certified Mountain Guide Since 2016
            </Badge>
          </div>

          <h1 className="text-4xl md:text-8xl font-bold mb-6 leading-tight animate-fade-in-up animation-delay-200 font-poppins">
            Conquer the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-400 to-orange-300 animate-gradient">
              Himalayas
            </span>
            <br />
            with HikeHigh Nepal
          </h1>

          <p className="text-lg md:text-2xl mb-8 text-gray-200 animate-fade-in-up animation-delay-400 max-w-3xl mx-auto">
            Expert Himalayan trekking & mountaineering guide • Everest Base Camp specialist • Peak climbing expeditions
            • Custom Nepal adventures
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-600">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-lg px-8 py-4 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group"
            >
              <Calendar className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
              Start Your Adventure
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-4 backdrop-blur-sm transition-all duration-300 transform hover:scale-105 group"
            >
              <Play className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
              Watch Our Adventures
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 mt-12 animate-fade-in-up animation-delay-800">
            <div className="flex items-center space-x-2 text-sm text-blue-200">
              <Shield className="h-4 w-4" />
              <span>100% Safety Record</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-blue-200">
              <Award className="h-4 w-4" />
              <span>NMA Certified Guide</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-blue-200">
              <Globe className="h-4 w-4" />
              <span>50+ Countries Served</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <ChevronDown className="h-8 w-8 text-white/70" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-poppins">
              Trusted by Adventure Seekers Worldwide
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: 500, suffix: "+", label: "Successful Expeditions", icon: Mountain },
              { number: 8, suffix: "", label: "Years Experience", icon: Clock },
              { number: 50, suffix: "+", label: "Countries Served", icon: Globe },
              { number: 100, suffix: "%", label: "Safety Record", icon: Shield },
            ].map((stat, index) => (
              <div
                key={index}
                className="group hover:transform hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                    <stat.icon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                  </div>
                </div>
                <div className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 mb-2 font-poppins">
                  <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                </div>
                <div className="text-gray-600 font-medium group-hover:text-orange-600 transition-colors duration-300 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <Badge className="bg-orange-100 text-orange-800 mb-4 animate-fade-in-left">About HikeHigh Nepal</Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in-left animation-delay-200 font-poppins">
                  Welcome to HikeHigh Nepal –
                  {" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                    Your Journey Begins Here
                  </span>
                </h2>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed animate-fade-in-left animation-delay-400">
                  Namaste! I’m a passionate mountaineering student and a licensed trekking guide, dedicated to leading you through the majestic trails of Nepal. With years of personal trekking experience across the Himalayas, I created HikeHigh Nepal to connect travelers, adventurers, and mountain lovers with authentic, safe, and unforgettable trekking experiences.

                  This isn’t just a business – it’s my journey. From studying high-altitude survival to walking across the remote valleys and peaks of Nepal, I live and breathe the mountains. My goal is to offer you more than just a trek. I want to share my knowledge, stories, and the spirit of adventure that the mountains have given me.

                  Whether you dream of standing before Everest at Base Camp, exploring the Annapurna Circuit, or discovering hidden gems off the beaten path – I’m here to guide you every step of the way.

                  Let’s explore. Let’s connect. Let’s Hike High.
                </p>
              </div>

              <div className="space-y-4 animate-fade-in-left animation-delay-600">
                {[
                  "Friendly, respectful, and deeply passionate about Himalayan culture",
                  "Focus on eco-friendly and sustainable trekking",
                  "Flexible and budget-friendly planning – Not bound by agencies",
                  "Excellent communication and storytelling skills on the trail",
                  "Experienced in off-the-beaten-path trails and rural village treks"].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 group hover:transform hover:translate-x-2 transition-all duration-300"
                    >
                      <CheckCircle className="h-6 w-6 text-green-600 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300 text-sm md:text-base">
                        {item}
                      </span>
                    </div>
                  ))}
              </div>

              <p className="text-base md:text-lg text-gray-600 leading-relaxed animate-fade-in-left animation-delay-400">
                I’m not an agent selling fixed-price packages. I’m a mountaineering student and a real traveler who offers honest, flexible, and personal trekking experiences—not driven by money, but by passion for the mountains.
              </p>


              <div className="flex flex-wrap gap-3 animate-fade-in-left animation-delay-800">
                {["Everest Base Camp", "Annapurna Circuit", "Island Peak", "Mera Peak", "Manaslu Circuit"].map(
                  (badge, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="px-4 py-2 hover:bg-orange-100 hover:text-orange-800 transition-all duration-300 cursor-pointer transform hover:scale-105"
                    >
                      {badge}
                    </Badge>
                  ),
                )}
              </div>
            </div>

            <div className="relative animate-fade-in-right animation-delay-400">
              <div className="relative group">
                <Image
                  src="/images/Profile.jpeg"
                  alt="Professional certified mountain guide from HikeHigh Nepal in the Himalayas"
                  width={500}
                  height={600}
                  className="rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
               </div>
              </div>

              <div className="absolute -bottom-8 -left-8 bg-gradient-to-r from-orange-600 to-red-600 text-white p-6 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="flex items-center space-x-3 mb-2">
                  <Award className="h-6 w-6 animate-pulse-soft" />
                  <span className="font-semibold">Certified Guide &nbsp; &nbsp;</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gradient-to-br from-gray-50 to-orange-50/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-mountain-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge className="bg-orange-100 text-orange-800 mb-4">Trekking Services</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-poppins">
              Trekking Packages –{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                Flexible & Honest Pricing
              </span>
            </h2>
            <div className="max-w-4xl mx-auto text-left bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
                At HikeHigh Nepal, I don't believe in selling fixed-price packages. Instead, I follow a{" "}
                <span className="font-semibold text-orange-600">"Pay Your Own Way"</span> approach — allowing you to
                travel freely, choose your budget, and stay in control of your expenses.
              </p>
              <p className="text-base md:text-lg text-gray-600 mb-6">
                I simply charge a daily guiding fee, and you cover your own costs for meals, accommodation, transport,
                permits, and any porter if needed.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">This way, you:</h3>
                  <ul className="space-y-3">
                    {[
                      "Pay for what you actually use",
                      "Choose where you want to stay and eat",
                      "Trek with full transparency and flexibility",
                      "Avoid overpriced, commission-based tour packages",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <span className="text-2xl mr-2">💼</span>
                    How It Works:
                  </h3>
                  <ul className="space-y-3 text-sm md:text-base">
                    <li className="flex items-start space-x-2">
                      <span className="text-orange-600 font-semibold">🔹</span>
                      <span>
                        <strong>My Daily Guiding Fee:</strong> $40-45 per day
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-orange-600 font-semibold">🔹</span>
                      <span>I'll assist with permits, gear checklists, route planning & more</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-orange-600 font-semibold">🔹</span>
                      <span>Need a porter? I can arrange one on request (extra cost)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Popular Treks */}
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4 font-poppins flex items-center justify-center">
                <span className="text-3xl mr-3">🌄</span>
                Popular Treks You Can Choose
              </h3>
              <p className="text-lg text-gray-600">Flexible duration and customizable routes</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Everest Base Camp (EBC)",
                  duration: "12–14 days",
                  description: "The ultimate Himalayan adventure to the base of the world's highest peak",
                  difficulty: "Challenging",
                  altitude: "5,364m",
                  highlights: ["Kala Patthar viewpoint", "Sherpa culture", "Sagarmatha National Park"],
                  color: "blue",
                },
                {
                  name: "Annapurna Base Camp (ABC)",
                  duration: "7–10 days",
                  description: "Spectacular mountain amphitheater surrounded by towering peaks",
                  difficulty: "Moderate",
                  altitude: "4,130m",
                  highlights: ["Annapurna Sanctuary", "Diverse landscapes", "Hot springs"],
                  color: "green",
                },
                {
                  name: "Mardi Himal Trek",
                  duration: "5–7 days",
                  description: "Hidden gem offering pristine mountain views and fewer crowds",
                  difficulty: "Moderate",
                  altitude: "4,500m",
                  highlights: ["Off-the-beaten-path", "Rhododendron forests", "Close-up Annapurna views"],
                  color: "purple",
                },
                {
                  name: "Langtang Valley Trek",
                  duration: "7–9 days",
                  description: "Beautiful valley trek with Tibetan culture and stunning mountain views",
                  difficulty: "Moderate",
                  altitude: "4,984m",
                  highlights: ["Tibetan culture", "Kyanjin Gompa", "Langtang Lirung views"],
                  color: "indigo",
                },
                {
                  name: "Poon Hill Trek",
                  duration: "4–5 days",
                  description: "Perfect introduction to Himalayan trekking with sunrise views",
                  difficulty: "Easy",
                  altitude: "3,210m",
                  highlights: ["Sunrise viewpoint", "Beginner-friendly", "Rhododendron blooms"],
                  color: "orange",
                },
                {
                  name: "Custom Village & Cultural Treks",
                  duration: "You decide!",
                  description: "Personalized treks focusing on local culture and hidden villages",
                  difficulty: "Flexible",
                  altitude: "Varies",
                  highlights: ["Local communities", "Authentic experiences", "Flexible itinerary"],
                  color: "red",
                },
              ].map((trek, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 border-0 bg-white/90 backdrop-blur-sm overflow-hidden"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-3">
                      <Badge className={`bg-${trek.color}-100 text-${trek.color}-800`}>{trek.duration}</Badge>
                      <Badge variant="outline" className="text-xs">
                        {trek.difficulty}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl group-hover:text-orange-600 transition-colors duration-300 font-poppins">
                      {trek.name}
                    </CardTitle>
                    <CardDescription className="text-gray-600 leading-relaxed">{trek.description}</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="mb-4">
                      <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                        <span className="flex items-center">
                          <Mountain className="h-4 w-4 mr-1" />
                          {trek.altitude}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2 mb-4">
                      <p className="text-sm font-medium text-gray-700">Key Highlights:</p>
                      <ul className="space-y-1">
                        {trek.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                            <CheckCircle className="h-3 w-3 text-green-500" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button
                      size="sm"
                      className={`w-full bg-gradient-to-r from-${trek.color}-500 to-${trek.color}-600 hover:from-${trek.color}-600 hover:to-${trek.color}-700 transition-all duration-300 transform hover:scale-105`}
                    >
                      Plan This Trek
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-12">
              <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-2xl p-8 max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold mb-4 font-poppins">Ready to Plan Your Custom Trek?</h3>
                <p className="text-orange-100 mb-6">
                  Let's discuss your goals, experience level, and preferred dates. I'll help you create the perfect
                  Himalayan adventure within your budget.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-white text-orange-600 hover:bg-orange-50 transition-all duration-300 transform hover:scale-105"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Get Custom Quote
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-orange-600 transition-all duration-300"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Call +977-9841234567
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-orange-100 text-orange-800 mb-4">Adventure Gallery</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-poppins">
              Captured Moments from the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                Himalayas
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Incredible journeys and unforgettable experiences in Nepal's mountains
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {Array.from({ length: 8 }, (_, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl cursor-pointer transform hover:scale-105 transition-all duration-500"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <Image
                  src={`/images/Adventure${i + 1}.jpeg?height=${i % 2 === 0 ? 300 : 250}&width=250`}
                  alt={`HikeHigh Nepal adventure photo ${i + 1} - Himalayan trekking and mountaineering`}
                  width={250}
                  height={i % 2 === 0 ? 300 : 250}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <p className="font-semibold">Himalayan Adventure</p>
                  <p className="text-sm text-gray-200">Nepal Expedition</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="py-24 bg-gradient-to-br from-gray-50 to-orange-50/30 relative overflow-hidden"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-orange-100 text-orange-800 mb-4">Client Reviews</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-poppins">
              What{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                Adventurers
              </span>{" "}
              Say About HikeHigh Nepal
            </h2>
            <p className="text-lg md:text-xl text-gray-600">Real experiences from trekkers and climbers worldwide</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {[
                {
                  text: "An absolutely incredible experience with HikeHigh Nepal! The guide's deep knowledge of the mountains, local culture, and safety protocols made our Everest Base Camp trek unforgettable. Highly professional and genuinely caring.",
                  name: "Sarah Johnson",
                  country: "United States",
                  image: "/placeholder.svg?height=60&width=60",
                  rating: 5,
                },
                {
                  text: "Perfect guide for Island Peak climbing! Excellent technical skills and patient teaching of climbing techniques. The safety measures and equipment quality were top-notch. I felt confident throughout the entire expedition.",
                  name: "Marco Rodriguez",
                  country: "Spain",
                  image: "/placeholder.svg?height=60&width=60",
                  rating: 5,
                },
                {
                  text: "HikeHigh Nepal provided amazing cultural insights and showed us hidden gems beyond the typical tourist routes. Not just a guide, but a true ambassador of Nepal's beauty and heritage. Exceeded all expectations!",
                  name: "Yuki Tanaka",
                  country: "Japan",
                  image: "/placeholder.svg?height=60&width=60",
                  rating: 5,
                },
              ].map((testimonial, index) => (
                <Card
                  key={index}
                  className={`transition-all duration-500 transform ${index === activeTestimonial
                    ? "opacity-100 scale-100 translate-x-0"
                    : "opacity-0 scale-95 translate-x-8 absolute inset-0"
                    } bg-white/80 backdrop-blur-sm border-0 shadow-2xl`}
                >
                  <CardContent className="pt-8 pb-8 text-center">
                    <div className="flex justify-center mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-6 w-6 text-yellow-400 fill-current animate-pulse-soft"
                          style={{ animationDelay: `${i * 100}ms` }}
                        />
                      ))}
                    </div>
                    <p className="text-lg md:text-xl text-gray-700 mb-8 italic leading-relaxed">"{testimonial.text}"</p>
                    <div className="flex items-center justify-center space-x-4">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={`${testimonial.name} - HikeHigh Nepal client review`}
                        width={60}
                        height={60}
                        className="rounded-full border-4 border-orange-100"
                      />
                      <div>
                        <div className="font-bold text-lg text-gray-900">{testimonial.name}</div>
                        <div className="text-orange-600 font-medium">{testimonial.country}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Testimonial Indicators */}
            <div className="flex justify-center space-x-2 mt-8">
              {[0, 1, 2].map((index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeTestimonial ? "bg-orange-600 scale-125" : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600 to-red-700"></div>
        <div className="absolute inset-0 bg-mountain-silhouette opacity-10"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge className="bg-white/20 text-white border-white/30 mb-4">Contact HikeHigh Nepal</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-poppins">
              Ready for Your <span className="text-orange-200">Himalayan Adventure?</span>
            </h2>
            <p className="text-lg md:text-xl text-orange-100">Let's plan your perfect Nepal expedition together</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-8 font-poppins">Get in Touch</h3>
              <div className="space-y-6 mb-8">
                {[
                  { icon: MapPin, text: "Thamel, Kathmandu, Nepal", label: "Location" },
                  { icon: Phone, text: "+977-9841234567", label: "Phone" },
                  { icon: Mail, text: "info@hikehighnepal.com", label: "Email" },
                ].map((contact, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 group hover:transform hover:translate-x-2 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                      <contact.icon className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <p className="text-sm text-orange-200">{contact.label}</p>
                      <span className="text-lg">{contact.text}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-4">Follow Our Adventures</h4>
                <div className="flex space-x-4">
                  {[
                    { icon: Instagram, label: "Instagram" },
                    { icon: Facebook, label: "Facebook" },
                    { icon: MessageCircle, label: "WhatsApp" },
                  ].map((social, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="icon"
                      className="border-white/30 text-white hover:bg-white hover:text-orange-600 transition-all duration-300 transform hover:scale-110"
                      aria-label={`Follow HikeHigh Nepal on ${social.label}`}
                    >
                      <social.icon className="h-5 w-5" />
                    </Button>
                  ))}
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h4 className="font-semibold mb-2">Quick Response Guarantee</h4>
                <p className="text-sm text-orange-100">
                  We respond to all inquiries within 2 hours during Nepal business hours (9 AM - 6 PM NPT)
                </p>
              </div>
            </div>

            <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl font-poppins">Plan Your Adventure</CardTitle>
                <CardDescription>
                  Tell us about your dream Himalayan expedition and we'll create the perfect itinerary
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      placeholder="First Name"
                      className="transition-all duration-300 focus:scale-105 focus:shadow-lg"
                      required
                    />
                    <Input
                      placeholder="Last Name"
                      className="transition-all duration-300 focus:scale-105 focus:shadow-lg"
                      required
                    />
                  </div>
                  <Input
                    type="email"
                    placeholder="Email Address"
                    className="transition-all duration-300 focus:scale-105 focus:shadow-lg"
                    required
                  />
                  <Input
                    placeholder="Phone Number (with country code)"
                    className="transition-all duration-300 focus:scale-105 focus:shadow-lg"
                  />
                  <Input
                    placeholder="Preferred Adventure (e.g., Everest Base Camp, Island Peak)"
                    className="transition-all duration-300 focus:scale-105 focus:shadow-lg"
                  />
                  <Textarea
                    placeholder="Tell us about your adventure goals, experience level, preferred dates, and any special requirements..."
                    rows={4}
                    className="transition-all duration-300 focus:scale-105 focus:shadow-lg"
                    required
                  />
                  <Button className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg group">
                    Send Inquiry
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-6 group">
                <Image
                  src="/logo.png"
                  alt="HikeHigh Nepal Logo"
                  width={32}
                  height={32}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
                <span className="text-xl font-bold font-poppins">HikeHigh Nepal</span>
              </div>
              <p className="text-gray-400 leading-relaxed mb-4">
                Your trusted partner for authentic Himalayan adventures and professional mountaineering expeditions in
                Nepal.
              </p>
              <div className="text-sm text-gray-500">
                <p>NMA License: #1234</p>
                <p>Established: 2016</p>
              </div>
            </div>

            {[
              {
                title: "Adventure Services",
                items: [
                  "Everest Base Camp Trek",
                  "Peak Climbing Expeditions",
                  "Annapurna Circuit",
                  "Custom Adventures",
                  "Photography Tours",
                ],
              },
              {
                title: "Popular Destinations",
                items: ["Everest Region", "Annapurna Region", "Langtang Valley", "Manaslu Circuit", "Upper Mustang"],
              },
              {
                title: "Contact Information",
                items: [
                  "Thamel, Kathmandu 44600",
                  "+977-9841234567",
                  "info@hikehighnepal.com",
                  "Emergency: +977-9841234568",
                ],
              },
            ].map((section, index) => (
              <div key={index}>
                <h4 className="font-semibold mb-4 text-lg font-poppins">{section.title}</h4>
                <ul className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer hover:translate-x-1 transform transition-transform text-sm"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; 2024 HikeHigh Nepal. All rights reserved. | Licensed by Nepal Mountaineering Association
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
