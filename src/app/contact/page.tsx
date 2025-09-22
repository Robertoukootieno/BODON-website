import { Metadata } from 'next'
import Layout from '@/components/layout/Layout'
import ContactHero from '@/components/sections/ContactHero'
import ContactInfo from '@/components/sections/ContactInfo'
import ContactForm from '@/components/sections/ContactForm'
import ContactMap from '@/components/sections/ContactMap'

export const metadata: Metadata = {
  title: 'Contact Us - Bodon Expedition Kenya',
  description: 'Get in touch with Bodon Expedition Kenya. Contact our team for safari bookings, car rentals, travel advice, and any questions about your Kenya adventure.',
  keywords: ['contact Bodon Expedition', 'Kenya safari booking', 'travel inquiry', 'expedition contact', 'Nairobi office'],
}

export default function ContactPage() {
  return (
    <Layout>
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <ContactMap />
    </Layout>
  )
}
