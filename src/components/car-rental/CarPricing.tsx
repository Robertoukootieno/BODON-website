'use client'

import { motion } from 'framer-motion'
import { Calendar, TrendingDown, Star, Clock } from 'lucide-react'
import { formatKESPrice } from '@/lib/utils'

interface Car {
  id: string
  name: string
  dailyRate: number
  weeklyRate: number
  monthlyRate: number
}

interface CarPricingProps {
  car: Car
}

export default function CarPricing({ car }: CarPricingProps) {
  const pricingTiers = [
    {
      duration: 'Daily',
      period: '1-6 days',
      price: car.dailyRate,
      savings: null,
      icon: Calendar,
      popular: false,
      description: 'Perfect for short trips and city exploration'
    },
    {
      duration: 'Weekly',
      period: '7+ days',
      price: car.weeklyRate,
      savings: Math.round(((car.dailyRate * 7) - car.weeklyRate) / (car.dailyRate * 7) * 100),
      icon: TrendingDown,
      popular: true,
      description: 'Best value for extended stays and tours'
    },
    {
      duration: 'Monthly',
      period: '30+ days',
      price: car.monthlyRate,
      savings: Math.round(((car.dailyRate * 30) - car.monthlyRate) / (car.dailyRate * 30) * 100),
      icon: Star,
      popular: false,
      description: 'Maximum savings for long-term rentals'
    }
  ]

  const additionalServices = [
    {
      service: 'GPS Navigation System',
      price: 750,
      period: 'per day'
    },
    {
      service: 'Professional Driver',
      price: 7500,
      period: 'per day'
    },
    {
      service: 'Child Car Seat',
      price: 500,
      period: 'per day'
    },
    {
      service: 'Additional Driver',
      price: 1500,
      period: 'per rental'
    },
    {
      service: 'Cross-Border Permit',
      price: 5000,
      period: 'per trip'
    },
    {
      service: 'Airport Delivery (outside Nairobi)',
      price: 2500,
      period: 'per trip'
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h3 className="text-2xl font-bold text-neutral-900 mb-8">Pricing & Rates</h3>
      
      {/* Main Pricing Tiers */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {pricingTiers.map((tier, index) => (
          <motion.div
            key={tier.duration}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`relative bg-white rounded-2xl border-2 p-8 hover:shadow-lg transition-all duration-300 ${
              tier.popular 
                ? 'border-primary-500 shadow-lg scale-105' 
                : 'border-neutral-200 hover:border-primary-300'
            }`}
          >
            {tier.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
            )}
            
            <div className="text-center">
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                tier.popular ? 'bg-primary-100' : 'bg-neutral-100'
              }`}>
                <tier.icon className={`w-8 h-8 ${
                  tier.popular ? 'text-primary-600' : 'text-neutral-600'
                }`} />
              </div>
              
              <h4 className="text-xl font-bold text-neutral-900 mb-2">{tier.duration}</h4>
              <p className="text-sm text-neutral-600 mb-4">{tier.period}</p>
              
              <div className="mb-4">
                <div className="text-3xl font-bold text-neutral-900">
                  {formatKESPrice(tier.price)}
                </div>
                <div className="text-sm text-neutral-600">
                  {tier.duration === 'Daily' ? 'per day' : `per ${tier.duration.toLowerCase()}`}
                </div>
              </div>
              
              {tier.savings && (
                <div className="mb-4">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    Save {tier.savings}%
                  </span>
                </div>
              )}
              
              <p className="text-sm text-neutral-600">{tier.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Additional Services */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <h4 className="text-xl font-bold text-neutral-900 mb-6">Additional Services</h4>
        <div className="bg-neutral-50 rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="flex justify-between items-center py-3 border-b border-neutral-200 last:border-b-0">
                <span className="text-neutral-700">{service.service}</span>
                <div className="text-right">
                  <div className="font-semibold text-neutral-900">
                    {formatKESPrice(service.price)}
                  </div>
                  <div className="text-xs text-neutral-500">{service.period}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Pricing Notes */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
        className="mt-8"
      >
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
          <div className="flex items-start space-x-3">
            <Clock className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <h5 className="font-semibold text-blue-900 mb-3">Important Pricing Information:</h5>
              <ul className="space-y-2 text-sm text-blue-800">
                <li>• All prices include comprehensive insurance and unlimited mileage within Kenya</li>
                <li>• Security deposit required: 50,000 (refundable upon return)</li>
                <li>• Fuel costs are not included - vehicle provided with full tank</li>
                <li>• Prices may vary during peak seasons and holidays</li>
                <li>• Early booking discounts available for rentals over 7 days</li>
                <li>• Corporate and group discounts available upon request</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
