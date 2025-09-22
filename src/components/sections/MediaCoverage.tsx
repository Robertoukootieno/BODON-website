'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Calendar, Star } from 'lucide-react'

const mediaCoverage = [
  {
    id: 1,
    title: 'Kenya\'s Hidden Safari Gems: A Journey with Bodon Expedition',
    publication: 'National Geographic Traveler',
    date: 'November 2024',
    excerpt: 'An in-depth feature on Kenya\'s lesser-known wildlife destinations and the local experts who make these experiences unforgettable.',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    url: '#',
    featured: true
  },
  {
    id: 2,
    title: 'Sustainable Tourism Leaders in East Africa',
    publication: 'Travel + Leisure',
    date: 'October 2024',
    excerpt: 'Highlighting companies making a positive impact on local communities and conservation efforts.',
    image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    url: '#'
  },
  {
    id: 3,
    title: 'Mount Kenya: Climbing Africa\'s Second Highest Peak',
    publication: 'Outside Magazine',
    date: 'September 2024',
    excerpt: 'A comprehensive guide to Mount Kenya climbing with insights from Bodon Expedition\'s expert mountain guides.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    url: '#'
  },
  {
    id: 4,
    title: 'Cultural Immersion: Beyond the Safari Experience',
    publication: 'Condé Nast Traveler',
    date: 'August 2024',
    excerpt: 'Exploring authentic cultural experiences and community-based tourism initiatives in Kenya.',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    url: '#'
  },
  {
    id: 5,
    title: 'Wildlife Photography in Kenya: Pro Tips from the Field',
    publication: 'BBC Wildlife Magazine',
    date: 'July 2024',
    excerpt: 'Professional wildlife photographers share their secrets for capturing Kenya\'s incredible biodiversity.',
    image: 'https://images.unsplash.com/photo-1549366021-9f761d040a94?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    url: '#'
  },
  {
    id: 6,
    title: 'The Great Migration: Timing Your Perfect Safari',
    publication: 'Lonely Planet',
    date: 'June 2024',
    excerpt: 'Expert advice on when and where to witness one of nature\'s most spectacular events.',
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    url: '#'
  }
]

export default function MediaCoverage() {
  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Media Coverage
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            See how leading travel publications and media outlets have featured Bodon Expedition Kenya and our commitment to exceptional safari experiences.
          </p>
        </motion.div>

        {/* Featured Coverage */}
        {mediaCoverage.filter(item => item.featured).map((item, index) => (
          <motion.article
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl overflow-hidden shadow-lg mb-12 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-yellow-500 text-white text-sm rounded-full flex items-center space-x-1">
                    <Star className="w-3 h-3" />
                    <span>Featured</span>
                  </span>
                </div>
              </div>
              
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center space-x-4 text-sm text-neutral-600 mb-4">
                  <span className="font-semibold text-primary-600">{item.publication}</span>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{item.date}</span>
                  </div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4 leading-tight">
                  {item.title}
                </h3>
                
                <p className="text-neutral-600 leading-relaxed mb-6">
                  {item.excerpt}
                </p>
                
                <a
                  href={item.url}
                  className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 transition-colors font-medium"
                >
                  <span>Read Full Article</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.article>
        ))}

        {/* Regular Coverage Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mediaCoverage.filter(item => !item.featured).map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-neutral-600 mb-3">
                  <span className="font-semibold text-primary-600">{item.publication}</span>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{item.date}</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-neutral-900 mb-3 leading-tight group-hover:text-primary-600 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                  {item.excerpt}
                </p>
                
                <a
                  href={item.url}
                  className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 transition-colors text-sm font-medium"
                >
                  <span>Read Article</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Media Partners */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-neutral-900 mb-8">
            Featured In
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
            {[
              'National Geographic',
              'Travel + Leisure',
              'Outside Magazine',
              'Condé Nast Traveler',
              'BBC Wildlife',
              'Lonely Planet'
            ].map((publication, index) => (
              <div key={publication} className="text-center">
                <div className="text-lg font-semibold text-neutral-700">
                  {publication}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
