import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Share2,
  Heart,
  MessageCircle,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { MobileNav } from "@/components/mobile-nav"

export const metadata: Metadata = {
  title: "Mad Honey Hunt in Lamjung | HikeHigh Nepal Adventure Blog",
  description:
    "Join us on an incredible journey to Lamjung for the traditional mad honey hunt. Experience Gurung culture, brave cliff climbing, and authentic Nepal adventure.",
  keywords:
    "mad honey Nepal, Lamjung adventure, Gurung culture, honey hunting, Nepal cultural experience, traditional honey harvest",
  openGraph: {
    title: "Mad Honey Hunt in Lamjung - A Cultural Adventure",
    description: "Experience the traditional mad honey hunt in Lamjung with local Gurung community",
    url: "https://hikehighnepal.com/blog/mad-honey-hunt-lamjung",
  },
}

export default function MadHoneyBlogPost() {
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
              { name: "Gallery", href: "/gallery" },
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

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Back Button */}
        <Link
          href="/blog"
          className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-8 transition-colors duration-300"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Blog
        </Link>

        {/* Article Meta */}
        <div className="mb-8">
          <Badge className="bg-orange-100 text-orange-800 mb-4">Cultural Adventure</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-poppins leading-tight">
            Dripping Gold, and High-Risk Harvest
          </h1>
          <h2 className="text-2xl md:text-3xl text-orange-600 mb-6 font-medium">
            Mad Honey Hunt in Lamjung: A Journey into Tradition, Nature, Adventure, Culture and Connection
          </h2>

          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
            <div className="flex items-center space-x-2">
              <User className="h-5 w-5" />
              <span className="font-medium">Medani Chapagai</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5" />
              <span>January 15, 2024</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5" />
              <span>12 min read</span>
            </div>
          </div>

          {/* Social Share */}
          <div className="flex items-center space-x-4 pb-8 border-b">
            <span className="text-gray-600 font-medium">Share:</span>
            <div className="flex space-x-3">
              {[
                { icon: Facebook, label: "Facebook", color: "text-blue-600" },
                { icon: Twitter, label: "Twitter", color: "text-blue-400" },
                { icon: Instagram, label: "Instagram", color: "text-pink-600" },
              ].map((social, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className={`${social.color} border-gray-300 hover:bg-gray-50`}
                >
                  <social.icon className="h-4 w-4" />
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative h-64 md:h-96 mb-12 rounded-2xl overflow-hidden">
          <Image
            src="/images/lamjung-trip-cover.png?height=600&width=800"
            alt="Mad honey hunting in Lamjung, Nepal - cliff climbing for wild honey"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-white">
            <p className="text-sm">Mad honey cliff in Lamjung, Nepal</p>
          </div>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-8 font-medium">
            Some journeys aren't just trips - they are memories woven with sweat, smiles, bites and bonds. Our recent
            adventure to Lamjung Nepal, in search of mad honey was one such unforgettable chapter in my life.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">The Midnight Arrival at Ghalegaun</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Our journey was under the stars. After hours of winding roads and mountains silence, we reached Ghalegaun at
            around 1 am. The village slept peacefully, wrapped in mist and mystery. We were tired, but the cool air and
            the promise of something raw and real kept us awake.
          </p>

          <div className="relative h-64 md:h-80 mb-8 rounded-xl overflow-hidden">
            <Image
              src="/images/midnight-lamjung.jpeg"
              alt="Ghalegaun at midnight"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded text-sm">
              Ghalegaun at midnight
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">
            Morning in Ghalegaun: Community and Culture
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            The next morning, we explored Ghalegaun. It felt like painting house dressed in stone and wood, the hills
            softly curving into clouds.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            We were warmly welcomed to a cultural event: the <strong>Ghatu Dance</strong>, a beautiful performance by
            the Gurung community it was mesmerizing. the rhythm, the tradition, attire, the vibrant energy it was more
            than performance; it was heritage in motion.
          </p>

          <div className="relative h-64 md:h-80 mb-8 rounded-xl overflow-hidden">
            <Image
              src="/images/Ghattu-dance.png"
              alt="Ghatu dance performance by Gurung community"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded text-sm">
              Ghatu dance, Gurung community
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">To Ghanpokhara and Beyond</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            After lunch, our real adventure began. We trekked toward Ghanpokhara, another masterpiece and stunning
            village nestled in the nature's arm. We rested there, soaking in the scenic beauty, as we waited for the
            local honey hunters to arrive. The sky however had its own drama, clouds gathered thunder cracked. The
            forest looked darker than it should, and for a moment, doubt crept in but not enough to stop us, adventure
            rarely comes in perfect weather so we moved on.
          </p>

          <div className="relative h-64 md:h-80 mb-8 rounded-xl overflow-hidden">
            <Image
              src="/images/Ghanpokhara-village.png"
              alt="Ghanpokhara Village nestled in mountains"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded text-sm">
              Ghanpokhara Village
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">
            Into the Forest: Camp, Music and Leeches
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            We descended deep into the forest. The path was steep, damp and slippery, layered with dry leaves.
            Navigation was tough, but some local brothers (dai) scratched the trees to guide our way.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            The forest, though magical, had its protectors - zombie leeches. They launched at us in waves, leeches
            crawled underfoot, clinging to us like tiny vampires. But strangely, even their presence felt like a part of
            the initiation - a welcome to the wild.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Still, our international friends <strong>Aswin, Lucas, and Leos</strong> handled it like seasoned explorers
            - calm collected, not a hint of panic.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            At dawn we reached our camp site villagers begun cooking Dal Bhaat, and soon we were around a fire, music
            playing softly under the open sky, stars blinking above. Tired, bitten and happy - we slept.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="relative h-48 rounded-xl overflow-hidden">
              <Image
                src="/images/Dense-jungle-walk.png"
                alt="Dawn and deep into the dense jungle"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-2 left-2 bg-black/50 text-white px-2 py-1 rounded text-xs">
                Dawn and deep into the dense jungle
              </div>
            </div>
            <div className="relative h-48 rounded-xl overflow-hidden">
              <Image
                src="/images/leech-attack.png"
                alt="Bloodied socks from leech attacks"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-2 left-2 bg-black/50 text-white px-2 py-1 rounded text-xs">
                Bloodied socks, leech attack
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">
            The Mad Honey Hunt: Cliff, Bees, and Brave Souls
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            The next morning, we trekked toward the cliffside, where the famous wild honey hives cling like treasure.
            The trail was overgrown and wild. More leeches came to greet us. Scratches, bites, confusion – but also
            excitement.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Finally, we stood before the sheer cliff, quiet and towering. The hives hanging like golden secrets and full
            of life. The bees guarded their treasure fiercely, unaware that generations of hunters had come to this very
            spot for the same ritual.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Villagers began preparing - ropes, smoke, nets. Some cooked. most headed toward the cliff to assist. And
            then came the heroes: <strong>Buddhi Dai and Rudra Dai</strong>. With nothing but determination, half
            shirts, bare feet and bee nets, they climbed.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Smoke was used to scatter the bees. But as expected, the bees fought back. Even with protection, most of us
            got stung 4-5 times. But the brave climbers faced thousands of buzzers in their bodies.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Once the honey was harvested, we all got a chance to taste it - thick, raw and wild. Some say it has
            hallucinogenic effects, but what I felt was something else: a sacred connection to the forest and its
            people.
          </p>

          <div className="relative h-64 md:h-96 mb-8 rounded-xl overflow-hidden">
            <Image
              src="/images/rope-cliff.png?height=600&width=800"
              alt="Buddhi dai hanging from rope on cliff with smoke rising"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded text-sm">
              Buddhi dai hanging from a rope on a sheer cliff with smoke rising all around him - fearless and
              fascinating!
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">
            Rain, Leeches (Again) and Return to Village
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            As we were tasting honey, rain began to pour. And like the clockwork, the leeches returned, clinging to wet
            socks and open wounds. Exhausted, stung, soaked – we began our descent.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Guided by three villagers, we reached the village in darkness. Yet again, we were welcomed with warm Rakshi,
            laughter and food. I choose my path - hot black tea and Satu, a quiet comfort in the midst of celebration. I
            have always been a vegetarian, and while others enjoyed BBQ, I respected their choices. That night, we
            camped again under the stars. The fatigue was real. But that quiet sense of being part of something larger
            than yourself. That night, we sat by the fire again, feet aching but hearts full.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">Sel Roti Morning and River Bliss</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Morning came with smell of something local and loving: <strong>Sel Roti</strong> made from millet flour,
            paired with warm rajma beans. It was heart, homely and nourishing. An indigenous Nepali breakfast, simple
            and perfect.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Later, we found a stream, its water is clear and cold. We swam, splashed, laughed - the sunlight soft, the
            wind gentle, where the wind sang with us and the sun gently warmed our backs. That moment? It was freedom.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="relative h-48 rounded-xl overflow-hidden">
              <Image
                src="/images/selroti.jpeg?height=300&width=400"
                alt="Traditional Sel Roti breakfast"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-2 left-2 bg-black/50 text-white px-2 py-1 rounded text-xs">
                A ring of tradition, sel roti
              </div>
            </div>
            <div className="relative h-48 rounded-xl overflow-hidden">
              <Image
                src="/images/chill-water.png?height=300&width=400"
                alt="Clear mountain stream with green vegetation"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-2 left-2 bg-black/50 text-white px-2 py-1 rounded text-xs">
                Green vegetation, flowing chill water, soft sunlight and smooth wind
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">The Guru's House and The Final Gift</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            We visited the Guru's house - not a religious teacher, but the generational master of honey hunting,{" "}
            <strong>Buddhi Dai</strong>. Here the harvested honey was shared equally among all the involved, a symbol of
            fairness and gratitude, Buddhi Dai and Rudra Dai, of course received double shares for their unmatched
            courage.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            We were all offered honey as a <strong>"Kosheli"</strong>, a gift of love and tradition. It wasn't just
            honey. It was gratitude.
          </p>

          <div className="relative h-64 md:h-80 mb-8 rounded-xl overflow-hidden">
            <Image
              src="/images/honey-filtration.png?height=400&width=600"
              alt="Honey filtration and distribution ceremony"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded text-sm">
              Honey filtration and distribution day
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">The Jeep Ride and Goodbye</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            It was time to leave. Aswin and I climbed onto the roof of the jeep, the road is rough beneath us, but the
            views are glorious. He lit a cigarette, looking peaceful. Lucas danced beside us with his JBL speaker,
            waving and shouting "Namaste" to villagers along the road. Laughter, music, wind - the kind of joy that
            stays with you long after the journey ends.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            We reached Besisahar, where our trip came to close. I waved goodbye to my friends and the land that held us
            so dearly. The journey ended, but something inside us had shifted. A new layer of memory, emotion, and
            respect now lived within us. my heart was full. Tired yes - but overflowing with memories, friendship and
            the quiet awe of culture so rich and so generous people.
          </p>

          <div className="bg-gradient-to-r from-orange-50 to-red-50 p-8 rounded-2xl mb-8">
            <p className="text-lg text-gray-700 leading-relaxed italic text-center">
              "Thank you, every detail that came together to make this journey, unforgettable.
              <br />I waved one last goodbye.
              <br />
              Thank you, universe.
              <br />
              Thank you, Lamjung.
              <br />
              Thank you, people,
              <br />
              <strong>Naman</strong>"
            </p>
          </div>

          <div className="relative h-64 md:h-96 mb-8 rounded-xl overflow-hidden">
            <Image
              src="/images/last-ride.png?height=600&width=800"
              alt="UMJO BHIR mad honey cliff and BHAISAPNI VILLAGE"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded text-sm">
              Jeep ride and Goodbye
            </div>
          </div>
        </div>

        {/* Article Footer */}
        <div className="border-t pt-8 mt-12">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" className="text-red-600 border-red-600 hover:bg-red-50">
                <Heart className="h-4 w-4 mr-2" />
                Like this story
              </Button>
              <Button variant="outline" size="sm">
                <MessageCircle className="h-4 w-4 mr-2" />
                Comment
              </Button>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-600 text-sm">Share:</span>
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-2xl p-8 mt-12 text-center">
          <h3 className="text-2xl font-bold mb-4 font-poppins">Experience Your Own Cultural Adventure</h3>
          <p className="text-orange-100 mb-6">
            Join me for authentic cultural experiences like mad honey hunting, traditional festivals, and village life
            in Nepal
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-orange-600 hover:bg-orange-50 transition-all duration-300">
              <MessageCircle className="mr-2 h-5 w-5" />
              Plan Cultural Trek
            </Button>
            <Link href="/blog">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-orange-600 transition-all duration-300"
              >
                Read More Stories
              </Button>
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
}
