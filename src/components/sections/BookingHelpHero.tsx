'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, CheckCircle, Clock, Users, Phone, MessageCircle } from 'lucide-react'

export default function BookingHelpHero() {
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
              <BookOpen className="w-6 h-6 text-secondary-400" />
              <span className="text-secondary-400 font-medium">Booking Assistance</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Easy Booking
              <span className="block text-secondary-400">Made Simple</span>
            </h1>
            
            <p className="text-xl text-neutral-200 mb-8 leading-relaxed">
              Book your Kenya adventure with confidence. Our step-by-step guide makes it easy to reserve your safari, car rental, or custom expedition with secure payment options.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary-400 mb-1">5 min</div>
                <div className="text-sm text-neutral-300">Average Booking Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary-400 mb-1">24/7</div>
                <div className="text-sm text-neutral-300">Booking Support</div>
              </div>
            </div>

            <div className="flex items-center space-x-2 text-neutral-300">
              <CheckCircle className="w-5 h-5 text-secondary-400" />
              <span>Secure payment processing with instant confirmation</span>
            </div>
          </motion.div>

          {/* Booking Process Preview */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            {[
              {
                step: '1',
                title: 'Choose Your Adventure',
                description: 'Browse our safaris, tours, and car rentals',
                icon: Users,
                status: 'active'
              },
              {
                step: '2',
                title: 'Customize Your Experience',
                description: 'Select dates, group size, and preferences',
                icon: Clock,
                status: 'pending'
              },
              {
                step: '3',
                title: 'Secure Payment',
                description: 'Pay safely with multiple payment options',
                icon: CheckCircle,
                status: 'pending'
              },
              {
                step: '4',
                title: 'Confirmation & Support',
                description: 'Receive instant confirmation and 24/7 support',
                icon: MessageCircle,
                status: 'pending'
              }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className={`flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 ${
                  item.status === 'active' 
                    ? 'bg-secondary-500/20 border border-secondary-400/30' 
                    : 'bg-white/10 hover:bg-white/15'
                }`}
              >
                <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                  item.status === 'active'
                    ? 'bg-secondary-400 text-white'
                    : 'bg-white/20 text-neutral-300'
                }`}>
                  {item.step}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-neutral-300">{item.description}</p>
                </div>
                <item.icon className={`w-6 h-6 ${
                  item.status === 'active' ? 'text-secondary-400' : 'text-neutral-400'
                }`} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Quick Contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 inline-block">
            <div className="flex items-center justify-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-secondary-400" />
                <span className="text-neutral-300">Need help?</span>
                <a 
                  href="tel:+254758270982" 
                  className="text-secondary-400 hover:text-secondary-300 font-semibold transition-colors"
                >
                  +254-758270982
                </a>
              </div>
              <div className="hidden sm:block w-px h-6 bg-neutral-600"></div>
              <div className="flex items-center space-x-2">
                <MessageCircle className="w-5 h-5 text-secondary-400" />
                <a 
                  href="https://wa.me/254758270982" 
                  className="text-secondary-400 hover:text-secondary-300 font-semibold transition-colors"
                >
                  WhatsApp Support
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
