import type { Metadata } from "next"
import { GalleryClient } from "@/components/gallery-client"

export const metadata: Metadata = {
  title: "Adventure Gallery | HikeHigh Nepal - Himalayan Photography Collection",
  description:
    "Explore stunning photography from Nepal's mountains. Everest Base Camp, Annapurna, peak climbing adventures, and authentic cultural moments captured by HikeHigh Nepal.",
  keywords:
    "Nepal photography, Himalayan photos, Everest Base Camp images, mountain photography, Nepal adventure gallery, trekking photos, peak climbing pictures",
  openGraph: {
    title: "Adventure Gallery | HikeHigh Nepal",
    description: "Stunning photography collection from Nepal's mountains and adventures",
    url: "https://hikehighnepal.com/gallery",
  },
}

export default function GalleryPage() {
  return <GalleryClient />
}
