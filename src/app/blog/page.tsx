import { Metadata } from 'next'
import Layout from '@/components/layout/Layout'
import BlogHero from '@/components/sections/BlogHero'
import BlogGrid from '@/components/sections/BlogGrid'
import BlogCategories from '@/components/sections/BlogCategories'
import BlogNewsletter from '@/components/sections/BlogNewsletter'

export const metadata: Metadata = {
  title: 'Blog - Bodon Expedition Kenya',
  description: 'Discover Kenya through our travel blog. Get expert tips, destination guides, wildlife insights, and cultural stories from our experienced expedition team.',
  keywords: ['Kenya travel blog', 'safari tips', 'travel guides', 'wildlife photography', 'cultural experiences', 'adventure stories'],
}

export default function BlogPage() {
  return (
    <Layout>
      <BlogHero />
      <BlogCategories />
      <BlogGrid />
      <BlogNewsletter />
    </Layout>
  )
}
