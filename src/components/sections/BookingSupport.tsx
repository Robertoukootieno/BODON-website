'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Phone, 
  MessageCircle, 
  Mail, 
  MapPin, 
  Clock, 
  Shield, 
  Award, 
  Users,
  ArrowRight,
  CheckCircle
} from 'lucide-react'
import Button from '@/components/ui/Button'
import Link from 'next/link'

const supportChannels = [
  {
    icon: Phone,
    title: 'Phone Support',
    description: 'Speak directly with our booking specialists',
    contact: '+254-758270982',
    availability: '6AM - 10PM EAT (Mon-Sun)',
    response: 'Immediate assistance',
    action: 'tel:+254758270982',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp Chat',
    description: 'Quick responses via WhatsApp messaging',
    contact: '+254-758270982',
    availability: '6AM - 10PM EAT (Mon-Sun)',
    response: 'Usually within 15 minutes',
    action: 'https://wa.me/254758270982',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Mail,
    title: 'Email Support',
    description: 'Detailed responses for complex inquiries',
    contact: 'bookings@bodonexpedition.com',
    availability: '24/7 (responses during business hours)',
    response: 'Within 2 hours',
    action: 'mailto:bookings@bodonexpedition.com',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: MapPin,
    title: 'Office Visit',
    description: 'In-person consultation and planning',
    contact: 'Nairobi Office',
    availability: 'Mon-Sun: 8AM - 6PM EAT',
    response: 'Appointment recommended',
    action: '/contact#map',
    color: 'from-purple-500 to-purple-600'
  }
]

const supportFeatures = [
  {
    icon: Shield,
    title: 'Secure Booking',
    description: 'SSL encrypted payments and data protection'
  },
  {
    icon: Award,
    title: 'Expert Guidance',
    description: '15+ years of Kenya travel expertise'
  },
  {
    icon: Users,
    title: 'Personal Service',
    description: 'Dedicated support throughout your journey'
  },
  {
    icon: Clock,
    title: '24/7 Emergency',
    description: 'Round-the-clock support during your trip'
  }
]

const bookingGuarantees = [
  'Best price guarantee - we match any comparable offer',
  'Instant confirmation for most tours and rentals',
  'Free cancellation up to 60 days before travel',
  'No hidden fees - transparent pricing always',
  '24/7 emergency support during your trip',
  'Licensed and insured tour operator'
]

export default function BookingSupport() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Expert <span className="text-primary-600">Booking Support</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Our experienced team is here to help you every step of the way. From initial inquiry to your return home, we provide comprehensive support.
          </p>
        </motion.div>

        {/* Support Channels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {supportChannels.map((channel, index) => (
            <motion.div
              key={channel.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-neutral-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${channel.color} rounded-xl flex items-center justify-center`}>
                  <channel.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">{channel.title}</h3>
                  <p className="text-neutral-600 mb-4">{channel.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-neutral-500">Contact:</span>
                      <span className="font-semibold text-neutral-900">{channel.contact}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-neutral-500">Available:</span>
                      <span className="text-sm text-neutral-700">{channel.availability}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-neutral-500">Response:</span>
                      <span className="text-sm text-primary-600 font-medium">{channel.response}</span>
                    </div>
                  </div>

                  {channel.action.startsWith('http') || channel.action.startsWith('tel:') || channel.action.startsWith('mailto:') ? (
                    <a
                      href={channel.action}
                      target={channel.action.startsWith('http') ? '_blank' : undefined}
                      rel={channel.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors"
                    >
                      Contact Now
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  ) : (
                    <Link
                      href={channel.action}
                      className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors"
                    >
                      Get Directions
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Support Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-neutral-900 text-center mb-12">
            Why Choose Our <span className="text-primary-600">Booking Service</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white rounded-xl shadow-sm border border-neutral-100 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-secondary-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-bold text-neutral-900 mb-2">{feature.title}</h4>
                <p className="text-neutral-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Booking Guarantees */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                Our <span className="text-primary-600">Booking Guarantees</span>
              </h3>
              <p className="text-neutral-600 mb-6">
                We stand behind our service with these customer-focused guarantees to ensure your complete satisfaction.
              </p>
              
              <div className="space-y-3">
                {bookingGuarantees.map((guarantee, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                    <p className="text-neutral-700">{guarantee}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="text-xl font-bold text-neutral-900 mb-4">Ready to Book?</h4>
              <p className="text-neutral-600 mb-6">
                Start planning your Kenya adventure today. Our experts are standing by to help you create unforgettable memories.
              </p>
              
              <div className="space-y-3">
                <Button 
                  as="a" 
                  href="tel:+254758270982"
                  className="w-full"
                  size="lg"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: +254-758270982
                </Button>
                
                <Button 
                  as="a" 
                  href="/contact"
                  variant="outline"
                  className="w-full"
                  size="lg"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Send Inquiry
                </Button>
              </div>

              <div className="mt-4 p-3 bg-primary-50 rounded-lg">
                <p className="text-sm text-primary-800 text-center">
                  <strong>Quick Response Promise:</strong> We'll get back to you within 2 hours during business hours
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
