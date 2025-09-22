'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Search, 
  Calendar, 
  CreditCard, 
  CheckCircle, 
  Users, 
  MapPin, 
  Phone, 
  Mail,
  ArrowRight,
  Clock
} from 'lucide-react'

const bookingSteps = [
  {
    step: 1,
    title: 'Choose Your Adventure',
    description: 'Browse our safari tours, car rentals, and custom expeditions',
    icon: Search,
    details: [
      'Explore our tour categories (Safari, Cultural, Adventure, Beach)',
      'Compare different vehicle options for car rentals',
      'Read detailed itineraries and inclusions',
      'Check availability for your preferred dates'
    ],
    tips: 'Use our filters to find tours that match your interests and budget'
  },
  {
    step: 2,
    title: 'Customize Your Experience',
    description: 'Select dates, group size, and special preferences',
    icon: Calendar,
    details: [
      'Choose your travel dates (consider seasonal wildlife patterns)',
      'Select group size and accommodation preferences',
      'Add special requirements (dietary, accessibility, etc.)',
      'Choose optional add-ons and upgrades'
    ],
    tips: 'Book 2-3 months in advance for best availability, especially during peak season'
  },
  {
    step: 3,
    title: 'Secure Payment',
    description: 'Pay safely with our multiple secure payment options',
    icon: CreditCard,
    details: [
      'Choose from M-Pesa, PayPal, or credit card payment',
      'Pay 30% deposit to confirm your booking',
      'Receive instant payment confirmation',
      'Balance due 30 days before travel'
    ],
    tips: 'All payments are secured with SSL encryption and fraud protection'
  },
  {
    step: 4,
    title: 'Confirmation & Support',
    description: 'Get instant confirmation and 24/7 ongoing support',
    icon: CheckCircle,
    details: [
      'Receive detailed booking confirmation via email',
      'Get pre-travel information and packing lists',
      'Access 24/7 customer support hotline',
      'Receive final itinerary 7 days before travel'
    ],
    tips: 'Save our emergency contact number: +254-758270982 for 24/7 support'
  }
]

const quickBookingOptions = [
  {
    icon: Phone,
    title: 'Call to Book',
    description: 'Speak with our experts',
    contact: '+254-758270982',
    availability: '6AM - 10PM EAT',
    action: 'tel:+254758270982'
  },
  {
    icon: Mail,
    title: 'Email Booking',
    description: 'Send us your requirements',
    contact: 'bookings@bodonexpedition.com',
    availability: 'Response within 2 hours',
    action: 'mailto:bookings@bodonexpedition.com'
  },
  {
    icon: Users,
    title: 'Office Visit',
    description: 'Plan in person',
    contact: 'Nairobi Office',
    availability: 'Mon-Sun: 8AM-6PM',
    action: '/contact#map'
  }
]

export default function BookingSteps() {
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
            Simple <span className="text-primary-600">4-Step</span> Booking Process
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            From browsing to confirmation, our streamlined process makes booking your Kenya adventure quick and secure.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-12 mb-16">
          {bookingSteps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Connector Line */}
              {index < bookingSteps.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-16 bg-gradient-to-b from-primary-300 to-transparent hidden md:block"></div>
              )}

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                {/* Step Header */}
                <div className="lg:col-span-1">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-secondary-500 rounded-2xl flex items-center justify-center">
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-sm font-bold text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                          Step {step.step}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-neutral-900 mb-3">{step.title}</h3>
                      <p className="text-neutral-600 mb-4">{step.description}</p>
                      <div className="p-3 bg-secondary-50 rounded-lg">
                        <p className="text-sm text-secondary-800">
                          <strong>Pro Tip:</strong> {step.tips}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step Details */}
                <div className="lg:col-span-2">
                  <div className="bg-neutral-50 rounded-2xl p-8">
                    <h4 className="text-lg font-bold text-neutral-900 mb-6">What happens in this step:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center mt-0.5">
                            <CheckCircle className="w-3 h-3 text-white" />
                          </div>
                          <p className="text-neutral-700 text-sm">{detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Booking Options */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">
              Need Help? <span className="text-primary-600">We're Here for You</span>
            </h3>
            <p className="text-neutral-600">
              Prefer to book with human assistance? Our Kenya experts are ready to help you plan the perfect adventure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickBookingOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-secondary-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <option.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-bold text-neutral-900 mb-2">{option.title}</h4>
                <p className="text-neutral-600 text-sm mb-3">{option.description}</p>
                <div className="space-y-1 mb-4">
                  {option.action.startsWith('tel:') || option.action.startsWith('mailto:') ? (
                    <a 
                      href={option.action}
                      className="text-primary-600 font-semibold hover:underline block"
                    >
                      {option.contact}
                    </a>
                  ) : (
                    <p className="text-primary-600 font-semibold">{option.contact}</p>
                  )}
                  <p className="text-xs text-neutral-500 flex items-center justify-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {option.availability}
                  </p>
                </div>
                {option.action.startsWith('tel:') || option.action.startsWith('mailto:') ? (
                  <a
                    href={option.action}
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors"
                  >
                    Contact Now
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                ) : (
                  <a
                    href={option.action}
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors"
                  >
                    Get Directions
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
