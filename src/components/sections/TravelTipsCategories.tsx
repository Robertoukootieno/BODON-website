'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Camera, 
  Heart, 
  Shield, 
  MapPin, 
  Utensils, 
  Plane,
  ArrowRight,
  CheckCircle
} from 'lucide-react'
import Link from 'next/link'

const tipCategories = [
  {
    icon: Camera,
    title: 'Photography Tips',
    description: 'Capture stunning wildlife and landscape photos',
    color: 'from-purple-500 to-purple-600',
    tips: [
      'Best times for wildlife photography are early morning and late afternoon',
      'Bring extra batteries and memory cards - you\'ll need them!',
      'Use a telephoto lens (200-400mm) for wildlife shots',
      'Respect animals and maintain safe distances',
      'Learn basic camera settings before your trip'
    ],
    link: '/blog/photography-tips'
  },
  {
    icon: Heart,
    title: 'Health & Wellness',
    description: 'Stay healthy and comfortable during your safari',
    color: 'from-red-500 to-red-600',
    tips: [
      'Get yellow fever vaccination at least 10 days before travel',
      'Take malaria prophylaxis as recommended by your doctor',
      'Pack a comprehensive first aid kit',
      'Stay hydrated - drink 3-4 liters of water daily',
      'Use high SPF sunscreen and reapply frequently'
    ],
    link: '/blog/health-safety'
  },
  {
    icon: Shield,
    title: 'Safety Guidelines',
    description: 'Essential safety tips for Kenya adventures',
    color: 'from-green-500 to-green-600',
    tips: [
      'Always follow your guide\'s instructions during game drives',
      'Never leave your vehicle unless specifically told it\'s safe',
      'Keep valuables in hotel safes, not in your room',
      'Avoid walking alone at night, especially in cities',
      'Register with your embassy upon arrival'
    ],
    link: '/blog/safety-tips'
  },
  {
    icon: MapPin,
    title: 'Cultural Etiquette',
    description: 'Respect local customs and traditions',
    color: 'from-blue-500 to-blue-600',
    tips: [
      'Dress modestly when visiting local communities',
      'Ask permission before photographing people',
      'Learn basic Swahili greetings - locals appreciate the effort',
      'Respect wildlife and maintain appropriate distances',
      'Tip guides and staff appropriately (10-15% is standard)'
    ],
    link: '/blog/cultural-guide'
  },
  {
    icon: Utensils,
    title: 'Food & Dining',
    description: 'Enjoy Kenya\'s cuisine safely and deliciously',
    color: 'from-orange-500 to-orange-600',
    tips: [
      'Try local dishes like nyama choma and ugali',
      'Drink bottled or properly filtered water',
      'Eat at reputable restaurants and lodges',
      'Be cautious with street food if you have a sensitive stomach',
      'Inform guides of any dietary restrictions or allergies'
    ],
    link: '/blog/kenyan-cuisine'
  },
  {
    icon: Plane,
    title: 'Travel Logistics',
    description: 'Navigate Kenya like a pro traveler',
    color: 'from-teal-500 to-teal-600',
    tips: [
      'Arrive in Nairobi at least one day before your safari starts',
      'Keep important documents in multiple locations',
      'Exchange money at banks or authorized dealers only',
      'Download offline maps before traveling to remote areas',
      'Pack light for domestic flights (15kg limit for small aircraft)'
    ],
    link: '/blog/travel-logistics'
  }
]

const quickTips = [
  {
    category: 'Money',
    tip: 'All our prices are in US dollars (USD). Kenyan shillings (KES) are the local currency. US dollars are widely accepted at tourist establishments, but carry KES for small purchases and tips.'
  },
  {
    category: 'Communication',
    tip: 'Buy a local SIM card for cheaper calls and data. Safaricom has the best coverage.'
  },
  {
    category: 'Weather',
    tip: 'Pack layers! Mornings can be cold (10°C) while afternoons are hot (30°C).'
  },
  {
    category: 'Wildlife',
    tip: 'The Big Five are best spotted in Maasai Mara, Amboseli, and Tsavo National Parks.'
  },
  {
    category: 'Shopping',
    tip: 'Bargaining is expected at markets. Start at 30-40% of the asking price.'
  },
  {
    category: 'Transport',
    tip: 'Book domestic flights early for better prices and guaranteed seats during peak season.'
  }
]

export default function TravelTipsCategories() {
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
            Expert Travel <span className="text-primary-600">Tips by Category</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Get insider knowledge from our local experts who have been guiding travelers through Kenya for over 15 years.
          </p>
        </motion.div>

        {/* Tip Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {tipCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-900">{category.title}</h3>
                  <p className="text-neutral-600 text-sm">{category.description}</p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {category.tips.map((tip, tipIndex) => (
                  <div key={tipIndex} className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 text-primary-600 mt-1 flex-shrink-0" />
                    <p className="text-neutral-700 text-sm">{tip}</p>
                  </div>
                ))}
              </div>

              <Link
                href={category.link}
                className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors"
              >
                Read More Tips
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Quick Tips */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-neutral-900 text-center mb-8">
            Quick <span className="text-primary-600">Pro Tips</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickTips.map((quickTip, index) => (
              <motion.div
                key={quickTip.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-4"
              >
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900 mb-1">{quickTip.category}</h4>
                    <p className="text-neutral-600 text-sm">{quickTip.tip}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-secondary-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Need Personalized Travel Advice?</h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Our local experts are happy to provide personalized recommendations based on your specific interests, travel dates, and preferences.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                href="/contact"
                className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-neutral-50 transition-colors"
              >
                Get Expert Advice
              </Link>
              <Link
                href="tel:+254758270982"
                className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Call +254-758270982
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
