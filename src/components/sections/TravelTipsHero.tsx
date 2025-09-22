'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Compass, MapPin, Camera, Shield, Clock, Users } from 'lucide-react'

export default function TravelTipsHero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-black/5"></div>
      </div>

      <div className="relative container-max section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <Compass className="w-6 h-6 text-secondary-400" />
              <span className="text-secondary-400 font-medium">Expert Travel Advice</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Kenya Travel
              <span className="block text-secondary-400">Tips & Guides</span>
            </h1>
            
            <p className="text-xl text-neutral-200 mb-8 leading-relaxed">
              Get insider knowledge from local experts who know Kenya best. From safari etiquette to cultural customs, we'll help you make the most of your Kenya adventure.
            </p>

            {/* Key Benefits */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-secondary-500 rounded-full flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <span className="text-neutral-200">Local Insights</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-secondary-500 rounded-full flex items-center justify-center">
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <span className="text-neutral-200">Safety First</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-secondary-500 rounded-full flex items-center justify-center">
                  <Camera className="w-4 h-4 text-white" />
                </div>
                <span className="text-neutral-200">Photo Tips</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-secondary-500 rounded-full flex items-center justify-center">
                  <Users className="w-4 h-4 text-white" />
                </div>
                <span className="text-neutral-200">Cultural Etiquette</span>
              </div>
            </div>

            <div className="flex items-center space-x-2 text-neutral-300">
              <Clock className="w-5 h-5" />
              <span>Updated regularly by our local experts</span>
            </div>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {[
              {
                icon: MapPin,
                title: '15+ Years',
                subtitle: 'Local Experience',
                description: 'Born and raised in Kenya, we know every corner of this beautiful country'
              },
              {
                icon: Users,
                title: '5000+',
                subtitle: 'Happy Travelers',
                description: 'Guests who\'ve experienced Kenya with our expert guidance'
              },
              {
                icon: Camera,
                title: '50+',
                subtitle: 'Destinations',
                description: 'National parks, reserves, and hidden gems we can guide you to'
              },
              {
                icon: Shield,
                title: '100%',
                subtitle: 'Safety Record',
                description: 'Impeccable safety standards maintained across all our expeditions'
              }
            ].map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <stat.icon className="w-8 h-8 text-secondary-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline space-x-2 mb-1">
                      <h3 className="text-2xl font-bold text-white">{stat.title}</h3>
                      <span className="text-secondary-400 font-medium">{stat.subtitle}</span>
                    </div>
                    <p className="text-sm text-neutral-300">{stat.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
