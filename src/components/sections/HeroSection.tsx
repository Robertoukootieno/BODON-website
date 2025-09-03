'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Play, Star, Users, MapPin } from 'lucide-react'
import Button from '@/components/ui/Button'

const stats = [
  { label: 'Happy Travelers', value: '2,500+', icon: Users },
  { label: 'Tour Destinations', value: '50+', icon: MapPin },
  { label: 'Customer Rating', value: '4.9', icon: Star },
]

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
          alt="Kenya Safari Landscape"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-max section-padding text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover Kenya's
            <span className="block text-gradient bg-gradient-to-r from-secondary-400 to-accent-400 bg-clip-text text-transparent">
              Wild Beauty
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-neutral-200 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Experience unforgettable safaris, cultural adventures, and breathtaking landscapes with Kenya's premier tour company.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link href="/tours">
              <Button size="xl" className="min-w-[200px]">
                Explore Tours
              </Button>
            </Link>
            
            <button className="flex items-center space-x-2 text-white hover:text-secondary-400 transition-colors duration-200 group">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-200">
                <Play className="w-5 h-5 ml-1" />
              </div>
              <span className="font-medium">Watch Our Story</span>
            </button>
          </motion.div>
          
          {/* Stats */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              >
                <div className="flex items-center justify-center mb-2">
                  <stat.icon className="w-6 h-6 text-secondary-400 mr-2" />
                  <span className="text-2xl md:text-3xl font-bold">{stat.value}</span>
                </div>
                <p className="text-neutral-300 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm">Scroll to explore</span>
          <motion.div 
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div 
              className="w-1 h-3 bg-white rounded-full mt-2"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
