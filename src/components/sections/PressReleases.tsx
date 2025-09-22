'use client'

import { motion } from 'framer-motion'
import { Calendar, Download, ExternalLink, FileText } from 'lucide-react'
import Button from '@/components/ui/Button'

const pressReleases = [
  {
    id: 1,
    title: 'Bodon Expedition Kenya Celebrates 15 Years of Excellence in Adventure Tourism',
    date: 'December 15, 2024',
    excerpt: 'Leading Kenyan expedition company marks milestone anniversary with expansion of services and commitment to sustainable tourism practices.',
    category: 'Company News',
    downloadUrl: '#',
    featured: true
  },
  {
    id: 2,
    title: 'New Partnership with Kenya Wildlife Service Enhances Conservation Efforts',
    date: 'November 28, 2024',
    excerpt: 'Bodon Expedition announces strategic partnership to support wildlife conservation and community development initiatives across Kenya.',
    category: 'Conservation',
    downloadUrl: '#'
  },
  {
    id: 3,
    title: 'Bodon Expedition Wins "Best Safari Operator" at Kenya Tourism Awards 2024',
    date: 'October 20, 2024',
    excerpt: 'Company recognized for outstanding service excellence and contribution to Kenya\'s tourism industry at prestigious annual awards ceremony.',
    category: 'Awards',
    downloadUrl: '#'
  },
  {
    id: 4,
    title: 'Launch of Eco-Friendly Car Rental Fleet Supports Sustainable Tourism',
    date: 'September 12, 2024',
    excerpt: 'Introduction of hybrid and electric vehicles to rental fleet demonstrates commitment to environmental responsibility and sustainable travel.',
    category: 'Sustainability',
    downloadUrl: '#'
  },
  {
    id: 5,
    title: 'Bodon Expedition Expands Digital Platform with Enhanced Booking Experience',
    date: 'August 5, 2024',
    excerpt: 'New website features advanced booking system, virtual tour previews, and improved customer experience for international travelers.',
    category: 'Technology',
    downloadUrl: '#'
  },
  {
    id: 6,
    title: 'Community Impact Program Reaches 10,000 Beneficiaries Across Kenya',
    date: 'July 18, 2024',
    excerpt: 'Company\'s community development initiatives provide education, healthcare, and economic opportunities to local communities.',
    category: 'Community',
    downloadUrl: '#'
  }
]

export default function PressReleases() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Latest Press Releases
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Stay informed about our latest developments, achievements, and initiatives. Download our press releases for detailed information and media resources.
          </p>
        </motion.div>

        {/* Featured Press Release */}
        {pressReleases.filter(release => release.featured).map((release, index) => (
          <motion.article
            key={release.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-3xl p-8 md:p-12 mb-12 border border-primary-100"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <span className="px-4 py-2 bg-primary-600 text-white text-sm rounded-full font-medium">
                  Featured
                </span>
                <span className="px-4 py-2 bg-white text-primary-600 text-sm rounded-full font-medium">
                  {release.category}
                </span>
              </div>
              <div className="flex items-center space-x-2 text-neutral-600">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">{release.date}</span>
              </div>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4 leading-tight">
              {release.title}
            </h3>
            
            <p className="text-lg text-neutral-600 leading-relaxed mb-8">
              {release.excerpt}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="group">
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
              <Button variant="outline" className="group">
                <ExternalLink className="w-4 h-4 mr-2" />
                View Online
              </Button>
            </div>
          </motion.article>
        ))}

        {/* Regular Press Releases */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pressReleases.filter(release => !release.featured).map((release, index) => (
            <motion.article
              key={release.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-neutral-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-white text-primary-600 text-sm rounded-full font-medium">
                  {release.category}
                </span>
                <div className="flex items-center space-x-2 text-neutral-500">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{release.date}</span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-neutral-900 mb-3 leading-tight group-hover:text-primary-600 transition-colors">
                {release.title}
              </h3>
              
              <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                {release.excerpt}
              </p>
              
              <div className="flex items-center space-x-3">
                <button className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 transition-colors text-sm font-medium">
                  <FileText className="w-4 h-4" />
                  <span>Read More</span>
                </button>
                <button className="flex items-center space-x-2 text-neutral-600 hover:text-neutral-700 transition-colors text-sm">
                  <Download className="w-4 h-4" />
                  <span>Download</span>
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Archive Link */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg">
            View Press Archive
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
