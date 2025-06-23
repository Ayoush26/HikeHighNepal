import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, User, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { MobileNav } from "@/components/mobile-nav"

export const metadata: Metadata = {
  title: "Adventure Blog | HikeHigh Nepal - Stories from the Himalayas",
  description:
    "Read authentic stories and experiences from Nepal's mountains. Cultural adventures, trekking tales, and local insights from certified mountain guide.",
  keywords:
    "Nepal blog, Himalayan stories, trekking experiences, Nepal culture, mountain adventures, travel blog Nepal, authentic Nepal experiences",
  openGraph: {
    title: "Adventure Blog | HikeHigh Nepal",
    description: "Authentic stories and experiences from Nepal's mountains and culture",
    url: "https://hikehighnepal.com/blog",
  },
}

const blogPosts = [
  {
    id: "mad-honey-hunt-lamjung",
    title: "Dripping Gold, and High-Risk Harvest",
    subtitle: "Mad Honey Hunt in Lamjung: A Journey into Tradition, Nature, Adventure, Culture and Connection",
    excerpt:
      "Some journeys aren't just trips - they are memories woven with sweat, smiles, bites and bonds. Our recent adventure to Lamjung Nepal, in search of mad honey was one such unforgettable chapter in my life.",
    author: "Medani Chapagai",
    date: "2024-01-15",
    readTime: "12 min read",
    category: "Cultural Adventure",
    image: "/placeholder.svg?height=400&width=600",
    featured: true,
    tags: ["Mad Honey", "Lamjung", "Cultural Experience", "Adventure", "Gurung Community"],
  },
  {
    id: "everest-base-camp-winter",
    title: "Winter Magic at Everest Base Camp",
    subtitle: "Trekking to EBC in December: A Different Kind of Challenge",
    excerpt:
      "Winter trekking to Everest Base Camp offers a completely different experience - fewer crowds, crystal clear views, and the ultimate test of endurance.",
    author: "HikeHigh Nepal",
    date: "2023-12-20",
    readTime: "8 min read",
    category: "Trekking",
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
    tags: ["Everest Base Camp", "Winter Trekking", "Snow", "Challenge"],
  },
  {
    id: "annapurna-rhododendron-season",
    title: "Rhododendron Blooms in Annapurna",
    subtitle: "Spring Colors Paint the Himalayan Trails",
    excerpt:
      "March to May brings the most spectacular display of rhododendron flowers across the Annapurna region, creating a natural wonderland.",
    author: "HikeHigh Nepal",
    date: "2023-04-10",
    readTime: "6 min read",
    category: "Nature",
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
    tags: ["Annapurna", "Rhododendron", "Spring", "Photography"],
  },
]

export default function BlogPage() {
  const featuredPost = blogPosts.find((post) => post.featured)
  const otherPosts = blogPosts.filter((post) => !post.featured)

  return (
    <div className="min-h-screen bg-white">
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
              { name: "About", href: "/#about" },
              { name: "Services", href: "/#services" },
              { name: "Gallery", href: "/#gallery" },
              { name: "Reviews", href: "/#testimonials" },
              { name: "Blog", href: "/blog" },
              { name: "FAQ", href: "/faq" },
              { name: "Contact", href: "/#contact" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-gray-700 hover:text-blue-600 transition-all duration-300 relative group ${
                  item.href === "/blog" ? "text-orange-600 font-semibold" : ""
                }`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <Button className="hidden md:flex bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            <Calendar className="mr-2 h-4 w-4" />
            Book Adventure
          </Button>

          {/* Mobile Navigation */}
          <MobileNav currentPath="/blog" />
        </div>
      </nav>

      {/* Navigation Spacer */}
      <div className="h-24"></div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-orange-50/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-orange-100 text-orange-800 mb-4">Adventure Blog</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-poppins">
              Stories from the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                Himalayas
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Authentic adventures, cultural experiences, and mountain tales from Nepal's most spectacular regions
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <Badge className="bg-orange-100 text-orange-800 mb-6">Featured Story</Badge>
              <Card className="overflow-hidden border-0 shadow-2xl bg-gradient-to-br from-white to-gray-50/50">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-full">
                    <Image
                      src={'/images/Honey.png'}
                      alt={featuredPost.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <Badge className="absolute top-4 left-4 bg-orange-600 text-white">{featuredPost.category}</Badge>
                  </div>
                  <CardContent className="p-8 flex flex-col justify-center">
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-3 font-poppins">{featuredPost.title}</h2>
                    <h3 className="text-xl text-orange-600 mb-4 font-medium">{featuredPost.subtitle}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{featuredPost.excerpt}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {featuredPost.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Link href={`/blog/${featuredPost.id}`}>
                      <Button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105 group">
                        Read Full Story
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </CardContent>
                </div>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Other Posts */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 font-poppins">More Adventures</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherPosts.map((post) => (
                <Card
                  key={post.id}
                  className="group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white overflow-hidden"
                >
                  <div className="relative h-48">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Badge className="absolute top-4 left-4 bg-blue-600 text-white">{post.category}</Badge>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 text-xs text-gray-600 mb-3">
                      <div className="flex items-center space-x-1">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300 font-poppins">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.slice(0, 2).map((tag, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Link href={`/blog/${post.id}`}>
                      <Button
                        variant="outline"
                        size="sm"
                        className="group-hover:bg-orange-600 group-hover:text-white group-hover:border-orange-600 transition-all duration-300"
                      >
                        Read More
                        <ArrowRight className="ml-2 h-3 w-3" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-br from-orange-600 to-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 font-poppins">Stay Updated with Our Adventures</h2>
            <p className="text-orange-100 mb-8">
              Get the latest stories, trekking tips, and cultural insights delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button className="bg-white text-orange-600 hover:bg-orange-50 px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
