'use client'

import { motion } from 'framer-motion'
import { Users, Luggage, Settings, Fuel, Gauge, Zap } from 'lucide-react'

interface Car {
  id: string
  name: string
  fullDescription: string
  passengers: number
  luggage: number
  transmission: string
  fuelType: string
  specifications: {
    engine: string
    power: string
    fuelCapacity: string
    fuelConsumption: string
    topSpeed: string
    acceleration: string
  }
  idealFor: string[]
}

interface CarDetailInfoProps {
  car: Car
}

export default function CarDetailInfo({ car }: CarDetailInfoProps) {
  const carSpecs = [
    {
      icon: Users,
      label: 'Passengers',
      value: `${car.passengers} people`
    },
    {
      icon: Luggage,
      label: 'Luggage',
      value: `${car.luggage} large bags`
    },
    {
      icon: Settings,
      label: 'Transmission',
      value: car.transmission
    },
    {
      icon: Fuel,
      label: 'Fuel Type',
      value: car.fuelType
    },
    {
      icon: Gauge,
      label: 'Engine',
      value: car.specifications.engine
    },
    {
      icon: Zap,
      label: 'Power',
      value: car.specifications.power
    }
  ]

  const performanceSpecs = [
    {
      label: 'Fuel Capacity',
      value: car.specifications.fuelCapacity
    },
    {
      label: 'Fuel Consumption',
      value: car.specifications.fuelConsumption
    },
    {
      label: 'Top Speed',
      value: car.specifications.topSpeed
    },
    {
      label: 'Acceleration',
      value: car.specifications.acceleration
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
        <h2 className="text-3xl font-bold text-neutral-900 mb-6">Vehicle Overview</h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-neutral-700 leading-relaxed">
            {car.fullDescription}
          </p>
        </div>
      </motion.div>

      {/* Vehicle Specifications */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold text-neutral-900 mb-6">Vehicle Specifications</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {carSpecs.map((spec, index) => (
            <div
              key={spec.label}
              className="bg-neutral-50 rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <spec.icon className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-1">
                    {spec.label}
                  </h4>
                  <p className="text-neutral-600 text-sm">
                    {spec.value}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Performance Details */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold text-neutral-900 mb-6">Performance Details</h3>
        <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {performanceSpecs.map((spec, index) => (
              <div key={index} className="flex justify-between items-center py-3 border-b border-primary-100 last:border-b-0">
                <span className="font-medium text-neutral-700">{spec.label}</span>
                <span className="font-semibold text-neutral-900">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Ideal For */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold text-neutral-900 mb-6">Ideal For</h3>
        <div className="bg-gradient-to-br from-secondary-50 to-primary-50 rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {car.idealFor.map((use, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-2 h-2 bg-secondary-600 rounded-full mt-2"></div>
                <span className="text-neutral-700">{use}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Important Information */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold text-neutral-900 mb-6">Important Information</h3>
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-neutral-900 mb-2">Driver Requirements</h4>
              <p className="text-neutral-700 text-sm">Valid driving license required (minimum 21 years old). International driving permit recommended for foreign visitors.</p>
            </div>
            <div>
              <h4 className="font-semibold text-neutral-900 mb-2">Fuel Policy</h4>
              <p className="text-neutral-700 text-sm">Vehicle provided with full tank. Return with full tank or pay refueling charges.</p>
            </div>
            <div>
              <h4 className="font-semibold text-neutral-900 mb-2">Mileage</h4>
              <p className="text-neutral-700 text-sm">Unlimited mileage within Kenya. Cross-border travel requires special permits.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
