'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Phone, Mail, Clock, ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'
import Link from 'next/link'

export default function FAQContact() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Still Have <span className="text-primary-600">Questions?</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Can't find the answer you're looking for? Our expert team is here to help you plan the perfect Kenya adventure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Options */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-neutral-900 mb-6">Get Personalized Help</h3>
            
            {[
              {
                icon: Phone,
                title: 'Call Our Experts',
                description: 'Speak directly with our Kenya travel specialists',
                contact: '+254-758270982',
                action: 'tel:+254758270982',
                availability: '24/7 Emergency Support',
                color: 'from-green-500 to-green-600'
              },
              {
                icon: MessageCircle,
                title: 'WhatsApp Chat',
                description: 'Quick responses via WhatsApp messaging',
                contact: '+254-758270982',
                action: 'https://wa.me/254758270982',
                availability: 'Mon-Sun: 6AM-10PM EAT',
                color: 'from-green-500 to-green-600'
              },
              {
                icon: Mail,
                title: 'Email Support',
                description: 'Detailed responses to complex questions',
                contact: 'info@bodonexpedition.com',
                action: 'mailto:info@bodonexpedition.com',
                availability: 'Response within 2 hours',
                color: 'from-blue-500 to-blue-600'
              }
            ].map((contact, index) => (
              <motion.div
                key={contact.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-neutral-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${contact.color} rounded-xl flex items-center justify-center`}>
                    <contact.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-neutral-900 mb-2">{contact.title}</h4>
                    <p className="text-neutral-600 mb-3">{contact.description}</p>
                    <div className="space-y-1">
                      <a 
                        href={contact.action}
                        className="text-primary-600 font-semibold hover:underline block"
                      >
                        {contact.contact}
                      </a>
                      <p className="text-sm text-neutral-500 flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {contact.availability}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Quick Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-neutral-900 mb-6">Quick Question Form</h3>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="quick-name" className="block text-sm font-medium text-neutral-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="quick-name"
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="quick-email" className="block text-sm font-medium text-neutral-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="quick-email"
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="quick-question" className="block text-sm font-medium text-neutral-700 mb-2">
                  Your Question
                </label>
                <textarea
                  id="quick-question"
                  rows={4}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                  placeholder="What would you like to know about Kenya adventures?"
                />
              </div>

              <Button type="submit" className="w-full" size="lg">
                Send Question
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </form>

            <div className="mt-6 p-4 bg-white rounded-lg">
              <p className="text-sm text-neutral-600">
                <strong>Quick Response Promise:</strong> We'll get back to you within 2 hours during business hours with a personalized answer from our Kenya experts.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Additional Resources */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-neutral-900 text-white rounded-2xl p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Explore More Resources</h3>
            <p className="text-neutral-300">
              Get additional information to help plan your perfect Kenya adventure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Travel Tips',
                description: 'Essential advice for Kenya travel',
                link: '/travel-tips',
                icon: '🧳'
              },
              {
                title: 'Booking Help',
                description: 'Step-by-step booking guidance',
                link: '/help/booking',
                icon: '📋'
              },
              {
                title: 'Payment Help',
                description: 'Payment methods and security',
                link: '/help/payment',
                icon: '💳'
              }
            ].map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={resource.link}>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-all duration-300 cursor-pointer group">
                    <div className="text-3xl mb-4">{resource.icon}</div>
                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-secondary-400 transition-colors">
                      {resource.title}
                    </h4>
                    <p className="text-neutral-300 text-sm mb-4">{resource.description}</p>
                    <div className="flex items-center text-secondary-400 text-sm font-medium">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
