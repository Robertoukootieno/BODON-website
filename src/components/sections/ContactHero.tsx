'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'

export default function ContactHero() {
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
              <MessageCircle className="w-6 h-6 text-secondary-400" />
              <span className="text-secondary-400 font-medium">Get In Touch</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Contact Our
              <span className="block text-secondary-400">Expert Team</span>
            </h1>
            
            <p className="text-xl text-neutral-200 mb-8 leading-relaxed">
              Ready to embark on your Kenya adventure? Our experienced team is here to help you plan the perfect safari, cultural tour, or car rental experience.
            </p>

            {/* Quick Contact Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary-400 mb-1">24/7</div>
                <div className="text-sm text-neutral-300">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary-400 mb-1">&lt;2hrs</div>
                <div className="text-sm text-neutral-300">Response Time</div>
              </div>
            </div>
          </motion.div>

          {/* Quick Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            {[
              {
                icon: Phone,
                title: 'Call Us',
                info: '+254-758270982',
                description: 'Available 24/7 for urgent inquiries',
                action: 'tel:+254758270982'
              },
              {
                icon: Mail,
                title: 'Email Us',
                info: 'info@bodonexpedition.com',
                description: 'Response within 2 hours',
                action: 'mailto:info@bodonexpedition.com'
              },
              {
                icon: MapPin,
                title: 'Visit Us',
                info: 'Nairobi, Kenya',
                description: 'P.O Box 26872, G.P.O',
                action: '#map'
              },
              {
                icon: Clock,
                title: 'Office Hours',
                info: 'Mon - Sun: 6:00 AM - 10:00 PM',
                description: 'East Africa Time (EAT)',
                action: null
              }
            ].map((contact, index) => (
              <motion.div
                key={contact.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <contact.icon className="w-6 h-6 text-secondary-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white mb-1">{contact.title}</h3>
                    {contact.action ? (
                      <a 
                        href={contact.action}
                        className="text-secondary-400 hover:text-secondary-300 transition-colors font-medium"
                      >
                        {contact.info}
                      </a>
                    ) : (
                      <p className="text-secondary-400 font-medium">{contact.info}</p>
                    )}
                    <p className="text-sm text-neutral-300">{contact.description}</p>
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
