'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Phone, 
  MessageCircle, 
  Mail, 
  MapPin, 
  Clock, 
  Users,
  Award,
  Globe,
  CheckCircle,
  ArrowRight
} from 'lucide-react'
import Button from '@/components/ui/Button'
import Link from 'next/link'

const contactMethods = [
  {
    icon: Phone,
    title: 'Call Our Experts',
    description: 'Speak directly with our Kenya travel specialists',
    contact: '+254-758270982',
    availability: '6AM - 10PM EAT (Mon-Sun)',
    response: 'Immediate assistance',
    action: 'tel:+254758270982',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp Chat',
    description: 'Quick travel advice via WhatsApp',
    contact: '+254-758270982',
    availability: '6AM - 10PM EAT (Mon-Sun)',
    response: 'Usually within 15 minutes',
    action: 'https://wa.me/254758270982',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Mail,
    title: 'Email Consultation',
    description: 'Detailed travel planning assistance',
    contact: 'info@bodonexpedition.com',
    availability: '24/7 (responses during business hours)',
    response: 'Within 2 hours',
    action: 'mailto:info@bodonexpedition.com',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: MapPin,
    title: 'Office Visit',
    description: 'In-person travel planning in Nairobi',
    contact: 'Nairobi Office',
    availability: 'Mon-Sun: 8AM - 6PM EAT',
    response: 'Appointment recommended',
    action: '/contact#map',
    color: 'from-purple-500 to-purple-600'
  }
]

const expertiseAreas = [
  {
    icon: Users,
    title: 'Safari Planning',
    description: 'Custom safari itineraries based on your interests, budget, and travel dates',
    specialties: ['Wildlife photography safaris', 'Family-friendly tours', 'Luxury safari experiences', 'Budget safari options']
  },
  {
    icon: Globe,
    title: 'Cultural Experiences',
    description: 'Authentic cultural interactions with local communities',
    specialties: ['Maasai village visits', 'Local market tours', 'Traditional craft workshops', 'Community conservation projects']
  },
  {
    icon: Award,
    title: 'Special Interests',
    description: 'Specialized tours for unique interests and hobbies',
    specialties: ['Bird watching expeditions', 'Photography workshops', 'Adventure activities', 'Conservation experiences']
  },
  {
    icon: MapPin,
    title: 'Destination Expertise',
    description: 'In-depth knowledge of Kenya\'s top destinations',
    specialties: ['Maasai Mara National Reserve', 'Amboseli National Park', 'Tsavo East & West', 'Coastal region tours']
  }
]

const whyChooseUs = [
  {
    title: '5 Years of Excellence',
    description: 'Dedicated to guiding travelers through Kenya\'s wonders with passion and expertise'
  },
  {
    title: 'Local Expertise',
    description: 'Born and raised in Kenya with intimate knowledge of the country'
  },
  {
    title: '5000+ Happy Travelers',
    description: 'Thousands of satisfied customers from around the world'
  },
  {
    title: '24/7 Support',
    description: 'Round-the-clock assistance during your Kenya adventure'
  },
  {
    title: 'Personalized Service',
    description: 'Every itinerary is customized to your specific interests'
  },
  {
    title: 'Best Price Guarantee',
    description: 'We match any comparable offer from licensed operators'
  }
]

export default function TravelTipsContact() {
  return (
    <section className="section-padding bg-neutral-50">
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
            Get <span className="text-primary-600">Expert Travel Advice</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Ready to plan your Kenya adventure? Our local experts are here to help you create the perfect itinerary based on your interests, budget, and travel style.
          </p>
        </motion.div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center`}>
                  <method.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">{method.title}</h3>
                  <p className="text-neutral-600 mb-4">{method.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-neutral-500">Contact:</span>
                      <span className="font-semibold text-neutral-900">{method.contact}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-neutral-500">Available:</span>
                      <span className="text-sm text-neutral-700">{method.availability}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-neutral-500">Response:</span>
                      <span className="text-sm text-primary-600 font-medium">{method.response}</span>
                    </div>
                  </div>

                  {method.action.startsWith('http') || method.action.startsWith('tel:') || method.action.startsWith('mailto:') ? (
                    <a
                      href={method.action}
                      target={method.action.startsWith('http') ? '_blank' : undefined}
                      rel={method.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed bg-primary-600 hover:bg-primary-700 text-white focus:ring-primary-500 px-3 py-2 text-sm w-full"
                    >
                      Contact Now
                    </a>
                  ) : (
                    <Link
                      href={method.action}
                      className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed bg-primary-600 hover:bg-primary-700 text-white focus:ring-primary-500 px-3 py-2 text-sm w-full"
                    >
                      Get Directions
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Expertise Areas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-neutral-900 text-center mb-12">
            Our <span className="text-primary-600">Areas of Expertise</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {expertiseAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-sm"
              >
                <div className="flex items-start space-x-4 mb-4">
                  <area.icon className="w-8 h-8 text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xl font-bold text-neutral-900 mb-2">{area.title}</h4>
                    <p className="text-neutral-600 mb-4">{area.description}</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h5 className="font-semibold text-neutral-900 text-sm">Specialties:</h5>
                  {area.specialties.map((specialty, specialtyIndex) => (
                    <div key={specialtyIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary-600 flex-shrink-0" />
                      <span className="text-neutral-700 text-sm">{specialty}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-neutral-900 text-center mb-8">
            Why Choose <span className="text-primary-600">Bodon Expedition</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {whyChooseUs.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-4 text-center"
              >
                <h4 className="font-bold text-neutral-900 mb-2">{reason.title}</h4>
                <p className="text-neutral-600 text-sm">{reason.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <h4 className="text-xl font-bold text-neutral-900 mb-4">Ready to Start Planning?</h4>
            <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
              Let our Kenya experts help you create unforgettable memories. We'll work with you to design the perfect itinerary that matches your interests, budget, and travel style.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="tel:+254758270982"
                className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed bg-primary-600 hover:bg-primary-700 text-white focus:ring-primary-500 px-6 py-3 text-base"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call +254-758270982
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white focus:ring-primary-500 px-6 py-3 text-base"
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Inquiry
              </Link>
            </div>

            <div className="mt-4 flex items-center justify-center space-x-2 text-neutral-600 text-sm">
              <Clock className="w-4 h-4" />
              <span>Available 6AM - 10PM EAT, 7 days a week</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
