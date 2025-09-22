'use client'

import { motion } from 'framer-motion'
import { Check, Star } from 'lucide-react'
import Button from '@/components/ui/Button'
import Link from 'next/link'

const pricingPlans = [
  {
    name: 'Economy',
    description: 'Perfect for city driving and short trips',
    price: 'KES 5,000',
    period: 'per day',
    popular: false,
    vehicles: ['Toyota Corolla', 'Nissan Sunny', 'Suzuki Swift'],
    features: [
      'Manual transmission',
      'Air conditioning',
      'Radio/CD player',
      'Basic insurance included',
      'Fuel efficient',
      '24/7 support'
    ]
  },
  {
    name: 'SUV',
    description: 'Ideal for families and light adventures',
    price: 'KES 9,500',
    period: 'per day',
    popular: true,
    vehicles: ['Toyota RAV4', 'Nissan X-Trail', 'Honda CR-V'],
    features: [
      'Automatic transmission',
      'Air conditioning',
      'GPS navigation',
      'Comprehensive insurance',
      'Higher ground clearance',
      '24/7 roadside assistance',
      'Bluetooth connectivity'
    ]
  },
  {
    name: '4WD Safari',
    description: 'Built for safari and rough terrain',
    price: 'KES 17,500',
    period: 'per day',
    popular: false,
    vehicles: ['Toyota Land Cruiser', 'Mitsubishi Pajero', 'Nissan Patrol'],
    features: [
      '4-wheel drive capability',
      'Automatic transmission',
      'Air conditioning',
      'GPS navigation',
      'Premium insurance',
      'Safari roof option',
      'Emergency communication',
      'Professional driver available'
    ]
  }
]

const additionalServices = [
  { name: 'Additional Driver', price: 'KES 1,500/day' },
  { name: 'GPS Navigation', price: 'KES 750/day' },
  { name: 'Child Safety Seat', price: 'KES 1,200/day' },
  { name: 'Professional Driver', price: 'KES 7,500/day' },
  { name: 'Airport Pickup/Drop-off', price: 'Free' },
  { name: 'Fuel Service', price: 'KES 2,200/tank' }
]

export default function CarRentalPricing() {
  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Transparent Pricing
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Choose the perfect vehicle category for your needs. All prices include basic insurance and 24/7 support.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-white rounded-3xl shadow-lg p-8 ${
                plan.popular ? 'ring-2 ring-primary-500 scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-2 rounded-full text-sm font-medium flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-neutral-600 mb-4">
                  {plan.description}
                </p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-primary-600">
                    {plan.price}
                  </span>
                  <span className="text-neutral-500 ml-2">
                    {plan.period}
                  </span>
                </div>
                <div className="text-sm text-neutral-500">
                  Vehicles: {plan.vehicles.join(', ')}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-neutral-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link href={`/booking?service=car-rental&category=${plan.name.toLowerCase()}`}>
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600' 
                      : ''
                  }`}
                >
                  Book {plan.name}
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-lg p-8"
        >
          <h3 className="text-2xl font-bold text-neutral-900 mb-6 text-center">
            Additional Services
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="flex justify-between items-center p-4 bg-neutral-50 rounded-xl">
                <span className="text-neutral-700 font-medium">{service.name}</span>
                <span className="text-primary-600 font-bold">{service.price}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl">
            <h4 className="text-lg font-bold text-neutral-900 mb-2">
              Special Offers
            </h4>
            <ul className="space-y-2 text-neutral-700">
              <li>• 10% discount for bookings over 7 days</li>
              <li>• 15% discount for bookings over 14 days</li>
              <li>• Free upgrade subject to availability</li>
              <li>• Group discounts available for 3+ vehicles</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
