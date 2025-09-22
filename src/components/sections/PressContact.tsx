'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, User, MessageSquare } from 'lucide-react'
import Button from '@/components/ui/Button'

const contactInfo = [
  {
    icon: User,
    title: 'Media Relations Manager',
    details: 'Sarah Wanjiku',
    contact: 'sarah.media@bodonexpedition.com'
  },
  {
    icon: Phone,
    title: 'Press Hotline',
    details: '+254-758-270-982',
    contact: 'Available 24/7 for urgent inquiries'
  },
  {
    icon: Mail,
    title: 'General Press Inquiries',
    details: 'press@bodonexpedition.com',
    contact: 'Response within 24 hours'
  },
  {
    icon: MapPin,
    title: 'Head Office',
    details: 'P.O Box 26872, G.P.O Nairobi, Kenya',
    contact: 'Available for interviews and visits'
  }
]

export default function PressContact() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-600 to-secondary-500">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 text-white"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Media Contact Information
          </h2>
          <p className="text-lg text-primary-100 max-w-3xl mx-auto">
            Get in touch with our media team for interviews, press inquiries, or additional information about Bodon Expedition Kenya.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {info.title}
                      </h3>
                      <p className="text-primary-100 mb-1">
                        {info.details}
                      </p>
                      <p className="text-sm text-primary-200">
                        {info.contact}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Office Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-8 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
            >
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="w-6 h-6 text-white" />
                <h3 className="text-lg font-semibold text-white">Office Hours</h3>
              </div>
              <div className="space-y-2 text-primary-100">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>8:00 AM - 6:00 PM EAT</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>9:00 AM - 4:00 PM EAT</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Emergency inquiries only</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Quick Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Quick Media Inquiry
            </h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-primary-100 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-primary-200 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary-100 mb-2">
                    Publication
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-primary-200 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent"
                    placeholder="Media outlet"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-primary-100 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-primary-200 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-primary-100 mb-2">
                  Inquiry Type
                </label>
                <select className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent">
                  <option value="">Select inquiry type</option>
                  <option value="interview">Interview Request</option>
                  <option value="press-release">Press Release</option>
                  <option value="fact-check">Fact Checking</option>
                  <option value="partnership">Media Partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-primary-100 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-primary-200 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent resize-none"
                  placeholder="Please provide details about your inquiry, deadline, and any specific requirements..."
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-white text-primary-600 hover:bg-neutral-100 py-3 rounded-xl font-semibold transition-colors duration-200"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Send Inquiry
              </Button>
            </form>
            
            <p className="text-sm text-primary-200 mt-4 text-center">
              We typically respond to media inquiries within 24 hours during business days.
            </p>
          </motion.div>
        </div>

        {/* Additional Resources */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-xl font-bold text-white mb-4">
              Need Something Specific?
            </h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Looking for specific information, high-resolution images, or want to arrange an interview with our CEO? Our media team is here to help with all your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10"
              >
                Schedule Interview
              </Button>
              <Button
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10"
              >
                Request Custom Assets
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
