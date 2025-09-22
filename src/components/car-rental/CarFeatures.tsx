'use client'

import { motion } from 'framer-motion'
import { Check, X, Shield, Clock, MapPin, Phone } from 'lucide-react'

interface CarFeaturesProps {
  features: string[]
  included: string[]
  excluded: string[]
}

export default function CarFeatures({ features, included, excluded }: CarFeaturesProps) {
  return (
    <div className="space-y-8">
      {/* Vehicle Features */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold text-neutral-900 mb-6">Vehicle Features</h3>
        <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3"
              >
                <div className="w-2 h-2 bg-primary-600 rounded-full flex-shrink-0"></div>
                <span className="text-neutral-700">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Included & Excluded */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold text-neutral-900 mb-8">What's Included & Excluded</h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Included */}
          <div className="bg-green-50 rounded-2xl p-8 border border-green-100">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <Check className="w-5 h-5 text-white" />
              </div>
              <h4 className="text-xl font-bold text-green-900">Included in Rental</h4>
            </div>
            
            <ul className="space-y-3">
              {included.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3"
                >
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-green-800">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
          
          {/* Excluded */}
          <div className="bg-red-50 rounded-2xl p-8 border border-red-100">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                <X className="w-5 h-5 text-white" />
              </div>
              <h4 className="text-xl font-bold text-red-900">Not Included</h4>
            </div>
            
            <ul className="space-y-3">
              {excluded.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3"
                >
                  <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-red-800">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Service Guarantees */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold text-neutral-900 mb-6">Our Service Guarantees</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-white rounded-xl border border-neutral-200 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-blue-600" />
            </div>
            <h4 className="font-semibold text-neutral-900 mb-2">Fully Insured</h4>
            <p className="text-sm text-neutral-600">Comprehensive insurance coverage included</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl border border-neutral-200 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-green-600" />
            </div>
            <h4 className="font-semibold text-neutral-900 mb-2">24/7 Support</h4>
            <p className="text-sm text-neutral-600">Round-the-clock roadside assistance</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl border border-neutral-200 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-6 h-6 text-purple-600" />
            </div>
            <h4 className="font-semibold text-neutral-900 mb-2">Free Pickup</h4>
            <p className="text-sm text-neutral-600">Complimentary airport pickup & drop-off</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl border border-neutral-200 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-6 h-6 text-orange-600" />
            </div>
            <h4 className="font-semibold text-neutral-900 mb-2">Expert Support</h4>
            <p className="text-sm text-neutral-600">Local experts ready to help</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
