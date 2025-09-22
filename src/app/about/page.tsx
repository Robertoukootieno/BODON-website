import { Metadata } from 'next'
import Layout from '@/components/layout/Layout'
import AboutHero from '@/components/sections/AboutHero'
import AboutStory from '@/components/sections/AboutStory'
import AboutValues from '@/components/sections/AboutValues'
import AboutTeam from '@/components/sections/AboutTeam'
import AboutStats from '@/components/sections/AboutStats'
import AboutMission from '@/components/sections/AboutMission'
import CallToAction from '@/components/sections/CallToAction'

export const metadata: Metadata = {
  title: 'About Us - Bodon Expedition Kenya',
  description: 'Learn about Bodon Expedition Kenya, our story, mission, values, and the passionate team behind Kenya\'s premier safari and adventure expedition company.',
  keywords: ['about Bodon Expedition', 'Kenya tour company', 'safari experts', 'expedition team', 'company history', 'mission values'],
}

export default function AboutPage() {
  return (
    <Layout>
      <AboutHero />
      <AboutStory />
      <AboutMission />
      <AboutValues />
      <AboutStats />
      <AboutTeam />
      <CallToAction />
    </Layout>
  )
}
