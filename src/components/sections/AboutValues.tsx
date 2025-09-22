'use client'

import { motion } from 'framer-motion'
import {
  Shield,
  Heart,
  Leaf,
  Users,
  Star,
  Globe,
  Award,
  UserCheck
} from 'lucide-react'

const values = [
  {
    icon: Shield,
    title: 'Safety First',
    description: 'Your safety is our top priority. We maintain the highest safety standards in all our expeditions and vehicle rentals.',
    color: 'from-red-500 to-red-600'
  },
  {
    icon: Heart,
    title: 'Authentic Experiences',
    description: 'We create genuine connections with local communities and showcase the real Kenya beyond typical tourist attractions.',
    color: 'from-pink-500 to-pink-600'
  },
  {
    icon: Leaf,
    title: 'Environmental Responsibility',
    description: 'Committed to sustainable tourism practices that protect Kenya\'s natural heritage for future generations.',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Users,
    title: 'Community Impact',
    description: 'Supporting local communities through employment, partnerships, and responsible tourism initiatives.',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Star,
    title: 'Excellence in Service',
    description: 'Delivering exceptional service that exceeds expectations and creates unforgettable memories.',
    color: 'from-yellow-500 to-yellow-600'
  },
  {
    icon: Globe,
    title: 'Cultural Respect',
    description: 'Honoring and celebrating Kenya\'s diverse cultures while promoting cross-cultural understanding.',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: Award,
    title: 'Professional Expertise',
    description: 'Our team of experienced guides and staff bring deep knowledge and passion to every expedition.',
    color: 'from-indigo-500 to-indigo-600'
  },
  {
    icon: UserCheck,
    title: 'Trust & Integrity',
    description: 'Building lasting relationships through honest communication, fair pricing, and reliable service.',
    color: 'from-teal-500 to-teal-600'
  }
]

export default function AboutValues() {
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
            Our Core Values
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            These fundamental principles guide everything we do, from planning expeditions to building relationships with our travelers and local communities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-neutral-50 rounded-3xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 h-full">
                <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-neutral-900 mb-4">
                  {value.title}
                </h3>
                
                <p className="text-neutral-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Values in Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-3xl p-12 text-white text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Values in Action
            </h3>
            <p className="text-lg text-primary-100 mb-8 max-w-3xl mx-auto">
              Our values aren't just words on a page - they're lived experiences that shape every interaction, every expedition, and every relationship we build.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-primary-100">Safety Record</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">95%</div>
                <div className="text-primary-100">Customer Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-primary-100">Local Partnerships</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
