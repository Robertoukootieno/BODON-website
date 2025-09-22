'use client'

import { motion } from 'framer-motion'
import { Calendar, Activity, Users, MapPin, Clock, Star } from 'lucide-react'

interface Tour {
  id: string
  title: string
  fullDescription: string
  highlights: string[]
  difficulty: string
  bestTimeToVisit: string
  physicalRequirement: string
  ageRestriction: string
  duration: number
  maxGroupSize: number
  location: string
}

interface TourDetailInfoProps {
  tour: Tour
}

export default function TourDetailInfo({ tour }: TourDetailInfoProps) {
  const tourDetails = [
    {
      icon: Clock,
      label: 'Duration',
      value: `${tour.duration} days`
    },
    {
      icon: Users,
      label: 'Group Size',
      value: `Max ${tour.maxGroupSize} people`
    },
    {
      icon: Activity,
      label: 'Difficulty',
      value: tour.difficulty
    },
    {
      icon: MapPin,
      label: 'Location',
      value: tour.location
    },
    {
      icon: Calendar,
      label: 'Best Time',
      value: tour.bestTimeToVisit
    },
    {
      icon: Star,
      label: 'Physical Requirement',
      value: tour.physicalRequirement
    }
  ]

  return (
    <div className="space-y-8">
      {/* Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-neutral-900 mb-6">Tour Overview</h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-neutral-700 leading-relaxed">
            {tour.fullDescription}
          </p>
        </div>
      </motion.div>

      {/* Tour Details Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold text-neutral-900 mb-6">Tour Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tourDetails.map((detail, index) => (
            <div
              key={detail.label}
              className="bg-neutral-50 rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <detail.icon className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-1">
                    {detail.label}
                  </h4>
                  <p className="text-neutral-600 text-sm">
                    {detail.value}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Highlights */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold text-neutral-900 mb-6">Tour Highlights</h3>
        <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tour.highlights.map((highlight, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                <span className="text-neutral-700">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Important Information */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold text-neutral-900 mb-6">Important Information</h3>
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-neutral-900 mb-2">Age Requirements</h4>
              <p className="text-neutral-700 text-sm">{tour.ageRestriction}</p>
            </div>
            <div>
              <h4 className="font-semibold text-neutral-900 mb-2">Physical Requirements</h4>
              <p className="text-neutral-700 text-sm">{tour.physicalRequirement}</p>
            </div>
            <div>
              <h4 className="font-semibold text-neutral-900 mb-2">Best Time to Visit</h4>
              <p className="text-neutral-700 text-sm">{tour.bestTimeToVisit}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
