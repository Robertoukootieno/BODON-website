'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Shield, 
  Award, 
  Users, 
  Clock, 
  MapPin, 
  Heart,
  Star,
  Headphones
} from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Safe & Secure',
    description: 'Licensed tour operator with comprehensive insurance and safety protocols for all adventures.'
  },
  {
    icon: Award,
    title: 'Expert Guides',
    description: 'Local professional guides with deep knowledge of Kenya\'s wildlife, culture, and history.'
  },
  {
    icon: Users,
    title: 'Small Groups',
    description: 'Intimate group sizes ensure personalized attention and authentic experiences.'
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock assistance before, during, and after your journey with us.'
  },
  {
    icon: MapPin,
    title: 'Local Expertise',
    description: 'Born and raised in Kenya, we know the hidden gems and best-kept secrets.'
  },
  {
    icon: Heart,
    title: 'Sustainable Tourism',
    description: 'Committed to responsible tourism that benefits local communities and conservation.'
  },
  {
    icon: Star,
    title: 'Highly Rated',
    description: '4.9/5 rating from over 2,500 satisfied travelers who experienced Kenya with us.'
  },
  {
    icon: Headphones,
    title: 'Flexible Booking',
    description: 'Easy booking process with flexible cancellation and multiple secure payment options.'
  }
]

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Why Choose Bodnon Expedition?
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            With years of experience and a passion for showcasing Kenya's beauty, we provide exceptional service that creates unforgettable memories.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-300" />
              </div>
              
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                {feature.title}
              </h3>
              
              <p className="text-neutral-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats section */}
        <motion.div 
          className="mt-20 bg-gradient-to-r from-primary-600 to-secondary-500 rounded-2xl p-8 md:p-12 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">2,500+</div>
              <div className="text-sm md:text-base opacity-90">Happy Travelers</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">50+</div>
              <div className="text-sm md:text-base opacity-90">Destinations</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">15+</div>
              <div className="text-sm md:text-base opacity-90">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">4.9</div>
              <div className="text-sm md:text-base opacity-90">Average Rating</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
