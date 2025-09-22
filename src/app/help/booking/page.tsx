import { Metadata } from 'next'
import Layout from '@/components/layout/Layout'
import BookingHelpHero from '@/components/sections/BookingHelpHero'
import BookingSteps from '@/components/sections/BookingSteps'
import BookingFAQ from '@/components/sections/BookingFAQ'
import BookingSupport from '@/components/sections/BookingSupport'

export const metadata: Metadata = {
  title: 'Booking Help - How to Book Your Kenya Adventure | Bodon Expedition',
  description: 'Step-by-step guide to booking your Kenya safari or car rental with Bodon Expedition. Learn about our booking process, payment options, and get expert assistance.',
  keywords: ['Kenya safari booking', 'how to book safari', 'booking help Kenya', 'safari reservation process', 'Kenya tour booking guide'],
}

export default function BookingHelpPage() {
  return (
    <Layout>
      <BookingHelpHero />
      <BookingSteps />
      <BookingFAQ />
      <BookingSupport />
    </Layout>
  )
}
