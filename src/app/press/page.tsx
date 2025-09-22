import { Metadata } from 'next'
import Layout from '@/components/layout/Layout'
import PressHero from '@/components/sections/PressHero'
import PressReleases from '@/components/sections/PressReleases'
import MediaCoverage from '@/components/sections/MediaCoverage'
import PressKit from '@/components/sections/PressKit'
import PressContact from '@/components/sections/PressContact'

export const metadata: Metadata = {
  title: 'Press & Media - Bodon Expedition Kenya',
  description: 'Press releases, media coverage, and press kit for Bodon Expedition Kenya. Get the latest news, awards, and media resources about Kenya\'s premier expedition company.',
  keywords: ['Bodon Expedition press', 'Kenya tourism news', 'safari company media', 'press releases', 'media coverage', 'awards'],
}

export default function PressPage() {
  return (
    <Layout>
      <PressHero />
      <PressReleases />
      <MediaCoverage />
      <PressKit />
      <PressContact />
    </Layout>
  )
}
