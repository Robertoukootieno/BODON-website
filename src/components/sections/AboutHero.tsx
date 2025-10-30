'use client'

import { motion } from 'framer-motion'
import { Award, Users, Globe, Heart } from 'lucide-react'

const highlights = [
  {
    icon: Award,
    number: '5',
    label: 'Years Experience',
    description: 'Serving adventurers since 2020'
  },
  {
    icon: Users,
    number: '5000+',
    label: 'Happy Travelers',
    description: 'Satisfied customers worldwide'
  },
  {
    icon: Globe,
    number: '50+',
    label: 'Destinations',
    description: 'Across Kenya and East Africa'
  },
  {
    icon: Heart,
    number: '100%',
    label: 'Passion Driven',
    description: 'Committed to excellence'
  }
]

export default function AboutHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-max text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            About
            <span className="block text-gradient">Bodon Expedition</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-neutral-200 max-w-3xl mx-auto leading-relaxed">
            We are Kenya's premier expedition company, dedicated to creating unforgettable adventures that showcase the natural beauty, rich culture, and incredible wildlife of East Africa.
          </p>

          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
            <span className="text-secondary-400 font-semibold">Est. 2009</span>
            <span className="text-white/60">•</span>
            <span className="text-white">Nairobi, Kenya</span>
          </div>
        </motion.div>

        {/* Highlights Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <highlight.icon className="w-8 h-8 text-secondary-400 mb-4 mx-auto" />
              <div className="text-3xl font-bold text-white mb-2">{highlight.number}</div>
              <h3 className="text-lg font-semibold mb-2">{highlight.label}</h3>
              <p className="text-neutral-300 text-sm">{highlight.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
