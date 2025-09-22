'use client'

import { motion } from 'framer-motion'
import {
  Camera,
  Mountain,
  Compass,
  Users,
  Leaf,
  MapPin,
  Eye,
  Heart
} from 'lucide-react'

const categories = [
  {
    icon: Camera,
    name: 'Wildlife Photography',
    count: 24,
    color: 'from-green-500 to-green-600',
    description: 'Tips and techniques for capturing Kenya\'s incredible wildlife'
  },
  {
    icon: Mountain,
    name: 'Adventure Guides',
    count: 18,
    color: 'from-blue-500 to-blue-600',
    description: 'Mountain climbing, hiking, and extreme adventure tips'
  },
  {
    icon: Compass,
    name: 'Safari Tips',
    count: 32,
    color: 'from-orange-500 to-orange-600',
    description: 'Expert advice for the perfect safari experience'
  },
  {
    icon: Users,
    name: 'Cultural Experiences',
    count: 15,
    color: 'from-purple-500 to-purple-600',
    description: 'Authentic cultural encounters and local traditions'
  },
  {
    icon: Leaf,
    name: 'Conservation',
    count: 12,
    color: 'from-emerald-500 to-emerald-600',
    description: 'Wildlife conservation and sustainable tourism'
  },
  {
    icon: MapPin,
    name: 'Destination Guides',
    count: 28,
    color: 'from-red-500 to-red-600',
    description: 'Comprehensive guides to Kenya\'s top destinations'
  },
  {
    icon: Eye,
    name: 'Bird Watching',
    count: 9,
    color: 'from-yellow-500 to-yellow-600',
    description: 'Kenya\'s incredible bird species and where to find them'
  },
  {
    icon: Heart,
    name: 'Travel Stories',
    count: 21,
    color: 'from-pink-500 to-pink-600',
    description: 'Personal stories and experiences from fellow travelers'
  }
]

export default function BlogCategories() {
  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Explore by Category
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Find exactly what you're looking for with our organized content categories, from wildlife photography tips to cultural insights.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full">
                <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-neutral-900">
                    {category.name}
                  </h3>
                  <span className="text-sm text-neutral-500 bg-neutral-100 px-2 py-1 rounded-full">
                    {category.count}
                  </span>
                </div>
                
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {category.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Popular Tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-bold text-neutral-900 mb-6">
            Popular Tags
          </h3>
          
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Maasai Mara', 'Mount Kenya', 'Big Five', 'Great Migration', 
              'Samburu', 'Amboseli', 'Photography Tips', 'Cultural Tours',
              'Bird Watching', 'Conservation', 'Travel Safety', 'Packing Tips',
              'Best Time to Visit', 'Local Cuisine', 'Traditional Crafts'
            ].map((tag, index) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="px-4 py-2 bg-white text-neutral-700 rounded-full text-sm hover:bg-primary-50 hover:text-primary-700 transition-colors cursor-pointer border border-neutral-200 hover:border-primary-200"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
