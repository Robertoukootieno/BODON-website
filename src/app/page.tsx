import Layout from '@/components/layout/Layout'
import HeroSection from '@/components/sections/HeroSection'
import FeaturedTours from '@/components/sections/FeaturedTours'
import CarRentalPreview from '@/components/sections/CarRentalPreview'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import CallToAction from '@/components/sections/CallToAction'

export default function HomePage() {
  return (
    <Layout>
      <HeroSection />
      <FeaturedTours />
      <CarRentalPreview />
      <WhyChooseUs />
      <CallToAction />
    </Layout>
  )
}
