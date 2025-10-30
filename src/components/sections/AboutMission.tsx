'use client'

import { motion } from 'framer-motion'
import { Target, Eye, Compass } from 'lucide-react'

export default function AboutMission() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Our Mission & Vision
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Guided by our core purpose and future aspirations, we strive to create meaningful connections between travelers and the wonders of Kenya.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Our Mission</h3>
            <p className="text-neutral-600 leading-relaxed">
              To provide authentic, safe, and transformative expedition experiences that showcase Kenya's natural beauty, wildlife, and cultural heritage while supporting local communities and conservation efforts.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Our Vision</h3>
            <p className="text-neutral-600 leading-relaxed">
              To be East Africa's leading expedition company, recognized for our commitment to sustainable tourism, exceptional service, and creating lifelong memories for adventurers from around the world.
            </p>
          </motion.div>

          {/* Purpose */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Compass className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Our Purpose</h3>
            <p className="text-neutral-600 leading-relaxed">
              To bridge cultures, create understanding, and inspire conservation through meaningful travel experiences that benefit both visitors and the communities we serve across Kenya and East Africa.
            </p>
          </motion.div>
        </div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-3xl shadow-lg p-12 max-w-4xl mx-auto">
            <div className="text-6xl text-primary-200 mb-6">"</div>
            <blockquote className="text-xl md:text-2xl text-neutral-700 font-medium leading-relaxed mb-6">
              Every expedition is an opportunity to create connections - between people and nature, between cultures, and between the present and the timeless beauty of Africa.
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <img
                src="/images/Bob.png"
                alt="Bob Awuonda"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="text-left">
                <div className="font-semibold text-neutral-900">Bob Awuonda</div>
                <div className="text-neutral-600">Founder & CEO</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
