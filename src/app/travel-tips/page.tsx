import { Metadata } from 'next'
import Layout from '@/components/layout/Layout'
import TravelTipsHero from '@/components/sections/TravelTipsHero'
import TravelTipsCategories from '@/components/sections/TravelTipsCategories'
import TravelTipsEssentials from '@/components/sections/TravelTipsEssentials'
import TravelTipsSeasons from '@/components/sections/TravelTipsSeasons'
import TravelTipsContact from '@/components/sections/TravelTipsContact'

export const metadata: Metadata = {
  title: 'Kenya Travel Tips - Expert Advice | Bodon Expedition',
  description: 'Essential travel tips for Kenya from local experts. Learn about best times to visit, what to pack, cultural etiquette, safety tips, and insider advice for your Kenya adventure.',
  keywords: ['Kenya travel tips', 'safari advice', 'Kenya travel guide', 'what to pack Kenya', 'Kenya travel safety', 'best time visit Kenya'],
}

export default function TravelTipsPage() {
  return (
    <Layout>
      <TravelTipsHero />
      <TravelTipsEssentials />
      <TravelTipsSeasons />
      <TravelTipsCategories />
      <TravelTipsContact />
    </Layout>
  )
}
