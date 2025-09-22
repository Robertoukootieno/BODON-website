import { Metadata } from 'next'
import Layout from '@/components/layout/Layout'
import FAQHero from '@/components/sections/FAQHero'
import FAQCategories from '@/components/sections/FAQCategories'
import FAQSearch from '@/components/sections/FAQSearch'
import FAQContact from '@/components/sections/FAQContact'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions - Bodon Expedition Kenya',
  description: 'Find answers to common questions about Kenya safaris, car rentals, travel requirements, booking process, and more. Get expert advice for your Kenya adventure.',
  keywords: ['Kenya safari FAQ', 'travel questions Kenya', 'safari booking help', 'Kenya travel requirements', 'car rental FAQ'],
}

export default function FAQPage() {
  return (
    <Layout>
      <FAQHero />
      <FAQSearch />
      <FAQCategories />
      <FAQContact />
    </Layout>
  )
}
