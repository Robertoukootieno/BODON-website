'use client'

import { motion } from 'framer-motion'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Users, 
  Car, 
  Camera, 
  Mountain,
  Facebook,
  Twitter,
  Instagram,
  Youtube
} from 'lucide-react'

const contactMethods = [
  {
    icon: Phone,
    title: 'Phone Support',
    primary: '+254-758270982',
    secondary: 'WhatsApp: +254-758270982',
    description: '24/7 emergency support available',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Mail,
    title: 'Email Support',
    primary: 'info@bodonexpedition.com',
    secondary: 'bookings@bodonexpedition.com',
    description: 'Response within 2 hours during business hours',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: MapPin,
    title: 'Physical Address',
    primary: 'P.O Box 26872, G.P.O',
    secondary: 'Nairobi, Kenya',
    description: 'Office visits by appointment only',
    color: 'from-red-500 to-red-600'
  }
]

const departments = [
  {
    icon: Camera,
    title: 'Safari & Tours',
    email: 'safaris@bodonexpedition.com',
    phone: '+254-758270982',
    description: 'Wildlife safaris, cultural tours, adventure expeditions'
  },
  {
    icon: Car,
    title: 'Car Rental',
    email: 'rentals@bodonexpedition.com',
    phone: '+254-758270982',
    description: 'Vehicle rentals, self-drive packages, chauffeur services'
  },
  {
    icon: Users,
    title: 'Group Bookings',
    email: 'groups@bodonexpedition.com',
    phone: '+254-758270982',
    description: 'Corporate events, family reunions, large group tours'
  },
  {
    icon: Mountain,
    title: 'Adventure Sports',
    email: 'adventure@bodonexpedition.com',
    phone: '+254-758270982',
    description: 'Mountain climbing, hiking, extreme sports activities'
  }
]

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/bodonexpedition', color: 'hover:text-blue-600' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/bodonexpedition', color: 'hover:text-sky-500' },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/bodonexpedition', color: 'hover:text-pink-600' },
  { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/bodonexpedition', color: 'hover:text-red-600' }
]

export default function ContactInfo() {
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
            Multiple Ways to <span className="text-primary-600">Reach Us</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Choose the most convenient way to get in touch. Our dedicated team is ready to assist you with all your Kenya adventure needs.
          </p>
        </motion.div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center mb-6`}>
                <method.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-neutral-900 mb-4">{method.title}</h3>
              
              <div className="space-y-2 mb-4">
                <p className="text-primary-600 font-semibold">{method.primary}</p>
                <p className="text-neutral-600">{method.secondary}</p>
              </div>
              
              <p className="text-sm text-neutral-500">{method.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Departments */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-neutral-900 text-center mb-12">
            Specialized <span className="text-primary-600">Departments</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {departments.map((dept, index) => (
              <motion.div
                key={dept.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <dept.icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-neutral-900 mb-2">{dept.title}</h4>
                    <p className="text-sm text-neutral-600 mb-3">{dept.description}</p>
                    <div className="space-y-1">
                      <p className="text-sm">
                        <span className="text-neutral-500">Email:</span>{' '}
                        <a href={`mailto:${dept.email}`} className="text-primary-600 hover:underline">
                          {dept.email}
                        </a>
                      </p>
                      <p className="text-sm">
                        <span className="text-neutral-500">Phone:</span>{' '}
                        <a href={`tel:${dept.phone.replace(/[^+\d]/g, '')}`} className="text-primary-600 hover:underline">
                          {dept.phone}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Office Hours & Social */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Office Hours */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <div className="flex items-center space-x-3 mb-6">
              <Clock className="w-8 h-8 text-primary-600" />
              <h3 className="text-xl font-bold text-neutral-900">Office Hours</h3>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-neutral-100">
                <span className="text-neutral-600">Monday - Friday</span>
                <span className="font-semibold text-neutral-900">6:00 AM - 10:00 PM</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-neutral-100">
                <span className="text-neutral-600">Saturday</span>
                <span className="font-semibold text-neutral-900">7:00 AM - 9:00 PM</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-neutral-100">
                <span className="text-neutral-600">Sunday</span>
                <span className="font-semibold text-neutral-900">8:00 AM - 8:00 PM</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-neutral-600">Emergency Support</span>
                <span className="font-semibold text-primary-600">24/7 Available</span>
              </div>
            </div>
            
            <p className="text-sm text-neutral-500 mt-4">
              <strong>Note:</strong> All times are in East Africa Time (EAT). Emergency support is available 24/7 for urgent travel assistance.
            </p>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h3 className="text-xl font-bold text-neutral-900 mb-6">Follow Our Journey</h3>
            
            <p className="text-neutral-600 mb-6">
              Stay connected with us on social media for the latest updates, travel tips, and stunning photos from Kenya's wilderness.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center space-x-3 p-4 rounded-xl border border-neutral-200 hover:border-primary-300 transition-all duration-300 ${social.color}`}
                >
                  <social.icon className="w-6 h-6" />
                  <span className="font-medium">{social.name}</span>
                </a>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-primary-50 rounded-xl">
              <p className="text-sm text-primary-800">
                <strong>Pro Tip:</strong> Follow us on Instagram for daily safari photos and behind-the-scenes content from our expeditions!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
