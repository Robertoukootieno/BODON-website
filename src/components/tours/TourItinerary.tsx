'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Utensils, Bed } from 'lucide-react'

interface ItineraryDay {
  day: number
  title: string
  description: string
  activities: string[]
  meals: string[]
  accommodation: string
}

interface TourItineraryProps {
  itinerary: ItineraryDay[]
}

export default function TourItinerary({ itinerary }: TourItineraryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h3 className="text-2xl font-bold text-neutral-900 mb-8">Detailed Itinerary</h3>
      
      <div className="space-y-8">
        {itinerary.map((day, index) => (
          <motion.div
            key={day.day}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Timeline Line */}
            {index < itinerary.length - 1 && (
              <div className="absolute left-6 top-16 w-0.5 h-full bg-gradient-to-b from-primary-300 to-transparent"></div>
            )}
            
            <div className="flex items-start space-x-6">
              {/* Day Number */}
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-primary-600 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                {day.day}
              </div>
              
              {/* Day Content */}
              <div className="flex-1 bg-white rounded-2xl shadow-lg border border-neutral-100 overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-primary-50 to-secondary-50 p-6 border-b border-neutral-100">
                  <div className="flex items-center space-x-2 mb-2">
                    <Calendar className="w-5 h-5 text-primary-600" />
                    <span className="text-sm font-medium text-primary-600">Day {day.day}</span>
                  </div>
                  <h4 className="text-xl font-bold text-neutral-900">{day.title}</h4>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <p className="text-neutral-700 leading-relaxed mb-6">
                    {day.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Activities */}
                    <div>
                      <div className="flex items-center space-x-2 mb-3">
                        <MapPin className="w-4 h-4 text-primary-600" />
                        <h5 className="font-semibold text-neutral-900">Activities</h5>
                      </div>
                      <ul className="space-y-1">
                        {day.activities.map((activity, actIndex) => (
                          <li key={actIndex} className="text-sm text-neutral-600 flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Meals */}
                    <div>
                      <div className="flex items-center space-x-2 mb-3">
                        <Utensils className="w-4 h-4 text-secondary-600" />
                        <h5 className="font-semibold text-neutral-900">Meals</h5>
                      </div>
                      <ul className="space-y-1">
                        {day.meals.map((meal, mealIndex) => (
                          <li key={mealIndex} className="text-sm text-neutral-600 flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-secondary-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{meal}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Accommodation */}
                    <div>
                      <div className="flex items-center space-x-2 mb-3">
                        <Bed className="w-4 h-4 text-green-600" />
                        <h5 className="font-semibold text-neutral-900">Accommodation</h5>
                      </div>
                      <p className="text-sm text-neutral-600">{day.accommodation}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
