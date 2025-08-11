import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Mountain,
  Shield,
  DollarSign,
  Backpack,
  Heart,
  FileText,
  Thermometer,
  Users,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Calendar,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { MobileNav } from "@/components/mobile-nav"

export const metadata: Metadata = {
  title: "Frequently Asked Questions | HikeHigh Nepal - Nepal Trekking & Mountaineering Guide",
  description:
    "Get answers to common questions about Nepal trekking, Everest Base Camp, peak climbing, permits, costs, safety, and preparation. Expert advice from certified mountain guide.",
  keywords:
    "Nepal trekking FAQ, Everest Base Camp questions, mountaineering guide Nepal, trekking permits Nepal, peak climbing cost, Nepal adventure preparation, Himalayan trekking safety",
  openGraph: {
    title: "Nepal Trekking FAQ | HikeHigh Nepal Expert Guide",
    description: "Complete guide to Nepal trekking questions answered by certified mountain guide",
    url: "https://hikehighnepal.com/faq",
  },
}

const faqCategories = [
  {
    title: "General Trekking",
    icon: Mountain,
    color: "blue",
    faqs: [
      {
        question: "What is the best time to trek in Nepal?",
        answer:
          "The best times for trekking in Nepal are during the pre-monsoon (March-May) and post-monsoon (September-November) seasons. Spring offers clear mountain views with blooming rhododendrons, while autumn provides the clearest skies and most stable weather. Winter (December-February) is possible for lower altitude treks, and monsoon season (June-August) is generally avoided due to heavy rainfall and poor visibility.",
      },
      {
        question: "Do I need previous trekking experience for Nepal treks?",
        answer:
          "Previous trekking experience is not mandatory for most Nepal treks, but it's highly beneficial. For popular treks like Everest Base Camp or Annapurna Circuit, good physical fitness and some hiking experience are recommended. We provide pre-trek briefings and gradual acclimatization schedules. For technical peak climbing, mountaineering experience is required.",
      },
      {
        question: "How difficult are Nepal treks compared to other destinations?",
        answer:
          "Nepal treks vary from moderate to extremely challenging. The main challenges include high altitude (up to 5,545m for EBC), long daily walking hours (5-8 hours), basic accommodation, and unpredictable weather. However, the well-established trail infrastructure and tea house system make Nepal more accessible than many other high-altitude destinations.",
      },
      {
        question: "What languages do you speak as a guide?",
        answer:
          "I am fluent in English, Nepali, and Hindi. This allows me to communicate effectively with international trekkers and local communities. I can also provide cultural insights and help with language barriers you might encounter in remote villages.",
      },
    ],
  },
  {
    title: "Everest Base Camp",
    icon: Mountain,
    color: "green",
    faqs: [
      {
        question: "How long does the Everest Base Camp trek take?",
        answer:
          "The standard Everest Base Camp trek takes 14 days, including arrival and departure from Lukla. This includes 2-3 acclimatization days in Namche Bazaar and Dingboche. The itinerary can be extended to 16-18 days for better acclimatization or shortened to 12 days for experienced trekkers, though this is not recommended for safety reasons.",
      },
      {
        question: "What is the success rate for reaching Everest Base Camp?",
        answer:
          "With proper preparation and acclimatization, the success rate for reaching Everest Base Camp is over 95%. The main factors affecting success are altitude sickness, weather conditions, and physical fitness. Our gradual ascent profile and experienced guidance ensure the highest possible success rate while prioritizing safety.",
      },
      {
        question: "Can I do Everest Base Camp trek without a guide?",
        answer:
          "While it's legally possible to trek to Everest Base Camp independently, hiring a licensed guide is highly recommended. A guide provides safety support, cultural insights, navigation assistance, and emergency response. The trail can be confusing in bad weather, and having local knowledge significantly enhances both safety and experience.",
      },
      {
        question: "What is the highest altitude reached on EBC trek?",
        answer:
          "The highest point on the standard Everest Base Camp trek is Kala Patthar at 5,545 meters (18,192 feet), which offers the best views of Mount Everest. Everest Base Camp itself sits at 5,364 meters (17,598 feet). We include both destinations in our itinerary for the complete experience.",
      },
    ],
  },
  {
    title: "Costs & Booking",
    icon: DollarSign,
    color: "orange",
    faqs: [
      {
        question: "What does the trek cost include and exclude?",
        answer:
          "Our trek costs typically include: professional guide services, porter support, accommodation in tea houses, all meals during the trek, necessary permits, and airport transfers. Excluded items usually include: international flights, Nepal visa, travel insurance, personal equipment, drinks/snacks, tips, and emergency evacuation costs.",
      },
      {
        question: "When should I book my trek?",
        answer:
          "We recommend booking your trek at least 2-3 months in advance, especially for peak seasons (March-May and September-November). This ensures availability of flights to Lukla, accommodation, and allows time for proper preparation. Last-minute bookings are possible but may have limited options and higher costs.",
      },
      {
        question: "What is your cancellation policy?",
        answer:
          "Our cancellation policy varies by timing: 60+ days before departure - full refund minus processing fee; 30-59 days - 75% refund; 15-29 days - 50% refund; less than 15 days - 25% refund. Weather-related cancellations and emergency situations are handled case-by-case. We strongly recommend comprehensive travel insurance.",
      },
      {
        question: "Do you offer group discounts?",
        answer:
          "Yes, we offer attractive group discounts for parties of 4 or more people. Groups of 4-6 people receive 10% discount, 7-10 people get 15% discount, and larger groups can negotiate custom rates. Private group treks can also be customized with flexible itineraries and personalized services.",
      },
    ],
  },
  {
    title: "Safety & Preparation",
    icon: Shield,
    color: "red",
    faqs: [
      {
        question: "How do you handle altitude sickness?",
        answer:
          "Altitude sickness prevention is our top priority. We follow gradual ascent profiles, include proper acclimatization days, monitor clients daily for symptoms, and carry comprehensive first aid including oxygen and altitude sickness medications. Our guides are trained in high-altitude rescue techniques and can arrange immediate evacuation if necessary.",
      },
      {
        question: "What fitness level is required for Nepal treks?",
        answer:
          "Good cardiovascular fitness is essential. We recommend being able to hike 5-6 hours daily with a daypack. Start training 2-3 months before your trek with regular hiking, cardio exercises, and strength training. Focus on leg strength, endurance, and hiking with a weighted pack. Previous high-altitude experience is beneficial but not mandatory.",
      },
      {
        question: "What emergency procedures do you have in place?",
        answer:
          "We maintain comprehensive emergency protocols including: satellite communication devices, detailed evacuation plans, partnerships with helicopter rescue services, comprehensive first aid training, emergency oxygen supplies, and 24/7 emergency contact support. All guides are wilderness first aid certified and experienced in high-altitude emergencies.",
      },
      {
        question: "Is travel insurance mandatory?",
        answer:
          "Yes, comprehensive travel insurance covering high-altitude trekking (up to 6,000m) and helicopter evacuation is mandatory for all our treks. The insurance should cover medical expenses, emergency evacuation, trip cancellation, and personal belongings. We can recommend suitable insurance providers if needed.",
      },
    ],
  },
  {
    title: "Permits & Documentation",
    icon: FileText,
    color: "purple",
    faqs: [
      {
        question: "What permits are required for Nepal trekking?",
        answer:
          "Required permits vary by region: Everest region requires Sagarmatha National Park Permit and Khumbu Pasang Lhamu Rural Municipality Permit; Annapurna region needs ACAP and TIMS card; restricted areas like Upper Mustang require special permits. We handle all permit arrangements as part of our service.",
      },
      {
        question: "How long does it take to get trekking permits?",
        answer:
          "Standard permits can be obtained within 1-2 days in Kathmandu. However, we recommend providing documents at least one week before departure to avoid any delays. Restricted area permits may take longer and require advance application. We handle all paperwork and ensure permits are ready before trek departure.",
      },
      {
        question: "What documents do I need to provide for permits?",
        answer:
          "You'll need: valid passport with at least 6 months validity, passport-sized photos (4-6 copies), completed permit application forms, and travel insurance details. For restricted areas, additional documentation may be required. We provide all necessary forms and guide you through the application process.",
      },
      {
        question: "Can permits be obtained online or only in person?",
        answer:
          "Some permits can be obtained online through official government portals, while others require in-person application in Kathmandu or at entry points. We handle all permit procedures regardless of the method required, ensuring you have all necessary documentation before starting your trek.",
      },
    ],
  },
  {
    title: "Equipment & Gear",
    icon: Backpack,
    color: "indigo",
    faqs: [
      {
        question: "What equipment do I need to bring vs. rent in Nepal?",
        answer:
          "Essential personal items to bring: hiking boots, personal clothing, sleeping bag (or rent in Kathmandu), headlamp, and personal medications. Available for rent in Kathmandu: down jackets, sleeping bags, trekking poles, duffel bags, and technical climbing gear. We provide a detailed packing list upon booking.",
      },
      {
        question: "What type of sleeping bag is recommended?",
        answer:
          "For most Nepal treks, a sleeping bag rated to -10°C to -15°C (14°F to 5°F) is recommended. Down bags are lighter and more compressible, while synthetic bags perform better in wet conditions. High-quality sleeping bags can be rented in Kathmandu if you prefer not to travel with your own.",
      },
      {
        question: "Are trekking poles necessary?",
        answer:
          "Trekking poles are highly recommended, especially for longer treks and steep descents. They reduce stress on knees, improve stability on uneven terrain, and help with balance when crossing streams. Adjustable, lightweight poles work best. They can be rented in Kathmandu or brought from home.",
      },
      {
        question: "What should I pack in my daypack vs. duffel bag?",
        answer:
          "Daypack (carry yourself): water, snacks, camera, extra layers, rain gear, first aid, documents, and valuables. Duffel bag (carried by porter): main clothing, sleeping bag, toiletries, and non-essential items. Keep daypack weight under 8-10kg and duffel bag under 15kg per porter regulations.",
      },
    ],
  },
]

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqCategories.flatMap((category) =>
    category.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  ),
}

export default function FAQPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />

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
                  className={`text-gray-700 hover:text-blue-600 transition-all duration-300 relative group ${item.href === "/faq" ? "text-orange-600 font-semibold" : ""
                    }`}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            {/* Desktop CTA Button */}
            {/* <Button className="hidden md:flex bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              <Calendar className="mr-2 h-4 w-4" />
              Book Adventure
            </Button> */}

            {/* Mobile Navigation */}
            <MobileNav currentPath="/faq" />
          </div>
        </nav>

        {/* Navigation Spacer */}
        <div className="h-24"></div>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-orange-50/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <Badge className="bg-orange-100 text-orange-800 mb-4">Frequently Asked Questions</Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-poppins">
                Everything You Need to Know About{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                  Nepal Trekking
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                Get expert answers to the most common questions about Himalayan adventures, safety, preparation, and
                booking with HikeHigh Nepal
              </p>

              {/* Quick Stats */}
              {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12">
                {[
                  { icon: Mountain, label: "500+ Treks Completed", color: "blue" },
                  { icon: Shield, label: "100% Safety Record", color: "green" },
                  { icon: Users, label: "50+ Countries Served", color: "orange" },
                  { icon: Clock, label: "8+ Years Experience", color: "purple" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div
                      className={`w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 rounded-full bg-${stat.color}-100 flex items-center justify-center`}
                    >
                      <stat.icon className={`h-5 w-5 md:h-6 md:w-6 text-${stat.color}-600`} />
                    </div>
                    <p className="text-xs md:text-sm font-medium text-gray-700">{stat.label}</p>
                  </div>
                ))}
              </div> */}
            </div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-poppins">Browse by Category</h2>
              <p className="text-base md:text-lg text-gray-600">Find answers organized by topic</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {faqCategories.slice(0, 6).map((category, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-0 bg-gradient-to-br from-white to-gray-50/50"
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-${category.color}-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <category.icon className={`h-6 w-6 md:h-8 md:w-8 text-${category.color}-600`} />
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 font-poppins">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{category.faqs.length} questions answered</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* FAQ Sections */}
            <div className="space-y-12">
              {faqCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="max-w-4xl mx-auto">
                  <div className="flex items-center mb-8">
                    <div
                      className={`w-10 h-10 md:w-12 md:h-12 rounded-full bg-${category.color}-100 flex items-center justify-center mr-4`}
                    >
                      <category.icon className={`h-5 w-5 md:h-6 md:w-6 text-${category.color}-600`} />
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-poppins">{category.title}</h2>
                      <p className="text-sm md:text-base text-gray-600">
                        Common questions about {category.title.toLowerCase()}
                      </p>
                    </div>
                  </div>

                  <Accordion type="single" collapsible className="space-y-4">
                    {category.faqs.map((faq, faqIndex) => (
                      <AccordionItem
                        key={faqIndex}
                        value={`${categoryIndex}-${faqIndex}`}
                        className="border border-gray-200 rounded-lg px-4 md:px-6 hover:shadow-md transition-shadow duration-300"
                      >
                        <AccordionTrigger className="text-left hover:no-underline py-4 md:py-6">
                          <span className="text-base md:text-lg font-semibold text-gray-900 pr-4">{faq.question}</span>
                        </AccordionTrigger>
                        <AccordionContent className="pb-4 md:pb-6">
                          <div className="text-gray-700 leading-relaxed text-sm md:text-base">{faq.answer}</div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Still Have Questions Section */}
        {/* <section className="py-16 bg-gradient-to-br from-orange-600 to-red-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins">Still Have Questions?</h2>
              <p className="text-lg md:text-xl text-orange-100 mb-8">
                Can't find the answer you're looking for? Our expert team is here to help you plan your perfect
                Himalayan adventure.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <Phone className="h-8 w-8 mx-auto mb-3 text-orange-200" />
                  <h3 className="font-semibold mb-2">Call Us</h3>
                  <p className="text-orange-100 text-sm">+977-9841234567</p>
                  <p className="text-orange-200 text-xs">Available 9 AM - 6 PM NPT</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <MessageCircle className="h-8 w-8 mx-auto mb-3 text-orange-200" />
                  <h3 className="font-semibold mb-2">WhatsApp</h3>
                  <p className="text-orange-100 text-sm">Quick Response</p>
                  <p className="text-orange-200 text-xs">Usually within 2 hours</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <MapPin className="h-8 w-8 mx-auto mb-3 text-orange-200" />
                  <h3 className="font-semibold mb-2">Visit Office</h3>
                  <p className="text-orange-100 text-sm">Thamel, Kathmandu</p>
                  <p className="text-orange-200 text-xs">Free consultation</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors duration-300 inline-flex items-center justify-center"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Contact Us Now
                </Link>
                <Link
                  href="/"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-all duration-300 inline-flex items-center justify-center"
                >
                  <Mountain className="mr-2 h-5 w-5" />
                  View Our Treks
                </Link>
              </div>
            </div>
          </div>
        </section> */}

        {/* Related Resources */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-poppins">Helpful Resources</h2>
              <p className="text-base md:text-lg text-gray-600">
                Additional information to help plan your Nepal adventure
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <FileText className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 font-poppins">Packing Checklist</h3>
                  <p className="text-gray-600 mb-4">
                    Complete packing list for Nepal treks including essential gear, clothing, and equipment
                    recommendations.
                  </p>
                  <Link href="/packing-list" className="text-blue-600 hover:text-blue-700 font-medium">
                    Download Checklist →
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 font-poppins">Fitness Guide</h3>
                  <p className="text-gray-600 mb-4">
                    Training tips and fitness preparation guide to help you get ready for your Himalayan adventure.
                  </p>
                  <Link href="/fitness-guide" className="text-green-600 hover:text-green-700 font-medium">
                    View Training Tips →
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <Thermometer className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 font-poppins">Weather Guide</h3>
                  <p className="text-gray-600 mb-4">
                    Detailed weather information for different seasons and regions to help you choose the best time to
                    trek.
                  </p>
                  <Link href="/weather-guide" className="text-orange-600 hover:text-orange-700 font-medium">
                    Check Weather Info →
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
