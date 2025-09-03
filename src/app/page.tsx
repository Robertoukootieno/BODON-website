import Layout from '@/components/layout/Layout'
import HeroSection from '@/components/sections/HeroSection'
import FeaturedTours from '@/components/sections/FeaturedTours'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import Testimonials from '@/components/sections/Testimonials'
import CallToAction from '@/components/sections/CallToAction'

export default function HomePage() {
  return (
    <Layout>
      <HeroSection />
      <FeaturedTours />
      <WhyChooseUs />
      <Testimonials />
      <CallToAction />
    </Layout>
  )
}
