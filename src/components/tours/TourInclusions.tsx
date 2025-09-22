'use client'

import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'

interface TourInclusionsProps {
  included: string[]
  excluded: string[]
}

export default function TourInclusions({ included, excluded }: TourInclusionsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
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
            <h4 className="text-xl font-bold text-green-900">Included in Your Tour</h4>
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
      
      {/* Additional Information */}
      <div className="mt-8 bg-blue-50 rounded-2xl p-6 border border-blue-100">
        <h5 className="font-semibold text-blue-900 mb-3">Important Notes:</h5>
        <ul className="space-y-2 text-sm text-blue-800">
          <li>• All prices are per person based on double occupancy</li>
          <li>• Single supplement charges apply for solo travelers</li>
          <li>• Optional activities can be added at additional cost</li>
          <li>• Prices may vary during peak seasons and holidays</li>
          <li>• Travel insurance is highly recommended</li>
        </ul>
      </div>
    </motion.div>
  )
}
