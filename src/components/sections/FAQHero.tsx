'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { HelpCircle, Search, MessageCircle, Phone } from 'lucide-react'

export default function FAQHero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-black/5"></div>
      </div>

      <div className="relative container-max section-padding">
        <div className="text-center max-w-4xl mx-auto">
          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-6"
          >
            <div className="w-20 h-20 bg-gradient-to-r from-secondary-400 to-secondary-500 rounded-full flex items-center justify-center">
              <HelpCircle className="w-10 h-10 text-white" />
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Frequently Asked
            <span className="block text-secondary-400">Questions</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-neutral-200 mb-12 leading-relaxed"
          >
            Find quick answers to the most common questions about Kenya safaris, car rentals, travel requirements, and booking processes. Can't find what you're looking for? Our expert team is here to help.
          </motion.p>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary-400 mb-2">50+</div>
              <div className="text-neutral-300">Common Questions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary-400 mb-2">6</div>
              <div className="text-neutral-300">Topic Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary-400 mb-2">24/7</div>
              <div className="text-neutral-300">Expert Support</div>
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <div className="flex items-center space-x-2 text-neutral-300">
              <Search className="w-5 h-5" />
              <span>Search below for instant answers</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-neutral-600"></div>
            <div className="flex items-center space-x-2">
              <MessageCircle className="w-5 h-5 text-secondary-400" />
              <span className="text-neutral-300">Still need help?</span>
              <a 
                href="/contact" 
                className="text-secondary-400 hover:text-secondary-300 font-semibold transition-colors"
              >
                Contact us
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
