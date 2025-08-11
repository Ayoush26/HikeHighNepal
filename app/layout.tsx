import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://hikehighnepal.com"),
  title: {
    default: "HikeHigh Nepal | Expert Himalayan Trekking & Mountaineering Guide Services",
    template: "%s | HikeHigh Nepal - Your Trusted Mountain Guide",
  },
  description:
    "Professional mountaineering guide in Nepal offering Everest Base Camp treks, Annapurna Circuit, Island Peak climbing, and custom Himalayan adventures. Certified guide with 8+ years experience serving 50+ countries. Book your Nepal adventure today!",
  keywords: [
    "Hike High Nepal",
    "Nepal trekking guide",
    "Everest Base Camp trek",
    "Himalayan mountaineering",
    "Nepal adventure tours",
    "certified mountain guide Nepal",
    "Annapurna Circuit trek",
    "student travellers",
    "Mera Peak expedition",
    "Nepal hiking guide",
    "Kathmandu trekking services",
    "professional mountain guide",
    "Nepal tourism",
    "Himalayan expeditions",
    "peak climbing Nepal",
    "trekking in Nepal",
    "mountain guide Kathmandu",
    "Nepal adventure travel",
    "independent traveller",
    "high altitude trekking",
    "Freelance guide",
    "Nepal mountaineering association",
  ].join(", "),
  authors: [{ name: "HikeHigh Nepal", url: "https://hikehighnepal.com" }],
  creator: "HikeHigh Nepal",
  publisher: "HikeHigh Nepal",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hikehighnepal.com",
    siteName: "HikeHigh Nepal",
    title: "HikeHigh Nepal | Expert Himalayan Trekking & Mountaineering Guide",
    description:
      "Professional certified mountain guide in Nepal offering safe and memorable Himalayan expeditions. Everest Base Camp, peak climbing, and custom adventures with 8+ years experience.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "HikeHigh Nepal - Professional Mountain Guide Services in the Himalayas",
      },
      {
        url: "/logo.png",
        width: 400,
        height: 400,
        alt: "HikeHigh Nepal Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@hikehighnepal",
    creator: "@hikehighnepal",
    title: "HikeHigh Nepal | Expert Himalayan Adventures",
    description:
      "Professional mountain guide offering safe Himalayan expeditions in Nepal. Everest Base Camp, peak climbing & custom treks.",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "your-google-search-console-verification-code",
    yandex: "your-yandex-verification-code",
    bing: "your-bing-verification-code",
  },
  alternates: {
    canonical: "https://hikehighnepal.com",
    languages: {
      "en-US": "https://hikehighnepal.com",
      "ne-NP": "https://hikehighnepal.com/ne",
    },
  },
  category: "Travel & Tourism",
  classification: "Adventure Tourism, Mountaineering, Trekking Services",
    generator: 'v0.dev'
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://hikehighnepal.com/#organization",
      name: "HikeHigh Nepal",
      url: "https://hikehighnepal.com",
      logo: {
        "@type": "ImageObject",
        url: "https://hikehighnepal.com/logo.png",
        width: 400,
        height: 400,
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+977-9841234567",
        contactType: "customer service",
        availableLanguage: ["English", "Nepali", "Hindi"],
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kathmandu",
        addressCountry: "Nepal",
        addressRegion: "Bagmati Province",
      },
      sameAs: [
        "https://www.facebook.com/hikehighnepal",
        "https://www.instagram.com/hikehighnepal",
        "https://www.tripadvisor.com/hikehighnepal",
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://hikehighnepal.com/#localbusiness",
      name: "HikeHigh Nepal",
      image: "https://hikehighnepal.com/logo.png",
      telephone: "+977-9841234567",
      email: "info@hikehighnepal.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Thamel",
        addressLocality: "Kathmandu",
        postalCode: "44600",
        addressCountry: "Nepal",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 27.7172,
        longitude: 85.324,
      },
      url: "https://hikehighnepal.com",
      openingHours: "Mo-Su 06:00-20:00",
      priceRange: "$$$",
      servesCuisine: "Adventure Tourism",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "127",
      },
    },
    {
      "@type": "TouristAttraction",
      name: "Everest Base Camp Trek with HikeHigh Nepal",
      description: "14-day guided trek to Everest Base Camp with professional mountain guide",
      image: "https://hikehighnepal.com/everest-base-camp.jpg",
      touristType: "Adventure Seekers, Mountain Enthusiasts",
      availableLanguage: ["English", "Nepali", "Hindi"],
    },
    {
      "@type": "Service",
      serviceType: "Mountain Guiding Services",
      provider: {
        "@id": "https://hikehighnepal.com/#organization",
      },
      areaServed: {
        "@type": "Country",
        name: "Nepal",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Trekking and Mountaineering Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Everest Base Camp Trek",
              description: "14-day guided trek to the base of Mount Everest",
            },
            price: "1299",
            priceCurrency: "USD",
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Island Peak Climbing",
              description: "Technical peak climbing expedition to Island Peak (6,189m)",
            },
            price: "2499",
            priceCurrency: "USD",
          },
        ],
      },
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="canonical" href="https://hikehighnepal.com" />
        <meta name="geo.region" content="NP-BA" />
        <meta name="geo.placename" content="Kathmandu, Nepal" />
        <meta name="geo.position" content="27.7172;85.3240" />
        <meta name="ICBM" content="27.7172, 85.3240" />
        <meta name="format-detection" content="telephone=+977-9841234567" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Favicon and App Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Theme Color */}
        <meta name="theme-color" content="#2563eb" />
        <meta name="msapplication-TileColor" content="#2563eb" />

        {/* Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}

        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
      </body>
    </html>
  )
}
