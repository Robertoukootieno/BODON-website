'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Phone, Mail, MessageCircle, Star, Shield, Clock } from 'lucide-react'
import Button from '@/components/ui/Button'
import { formatKESPrice } from '@/lib/utils'

interface Car {
  id: string
  name: string
  dailyRate: number
  weeklyRate: number
  monthlyRate: number
  rating: number
  reviewCount: number
}

interface CarBookingProps {
  car: Car
}

export default function CarBooking({ car }: CarBookingProps) {
  const [pickupDate, setPickupDate] = useState('')
  const [returnDate, setReturnDate] = useState('')
  const [pickupLocation, setPickupLocation] = useState('airport')

  const calculateDays = () => {
    if (!pickupDate || !returnDate) return 0
    const pickup = new Date(pickupDate)
    const returnD = new Date(returnDate)
    const diffTime = Math.abs(returnD.getTime() - pickup.getTime())
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  }

  const calculatePrice = () => {
    const days = calculateDays()
    if (days === 0) return 0
    
    if (days >= 30) {
      const months = Math.floor(days / 30)
      const remainingDays = days % 30
      return (months * car.monthlyRate) + (remainingDays * car.dailyRate)
    } else if (days >= 7) {
      const weeks = Math.floor(days / 7)
      const remainingDays = days % 7
      return (weeks * car.weeklyRate) + (remainingDays * car.dailyRate)
    } else {
      return days * car.dailyRate
    }
  }

  const totalPrice = calculatePrice()
  const deposit = Math.round(totalPrice * 0.3) // 30% deposit

  const handleBookNow = () => {
    // In a real app, this would redirect to booking page or open booking modal
    window.location.href = `/booking?car=${car.id}&pickup=${pickupDate}&return=${returnDate}&location=${pickupLocation}`
  }

  const handleContactUs = () => {
    // In a real app, this would open contact modal or redirect to contact page
    window.location.href = `/contact?car=${car.name}`
  }

  const pickupLocations = [
    { value: 'airport', label: 'Jomo Kenyatta Airport (Free)' },
    { value: 'wilson', label: 'Wilson Airport (Free)' },
    { value: 'hotel', label: 'Hotel/Accommodation (Free in Nairobi)' },
    { value: 'office', label: 'Our Office - Nairobi CBD' },
    { value: 'custom', label: 'Custom Location (Charges may apply)' }
  ]

  return (
    <div id="booking-section" className="sticky top-8 space-y-6">
      {/* Main Booking Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-white rounded-2xl shadow-xl border border-neutral-100 overflow-hidden"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-primary-600 to-secondary-500 p-6 text-white">
          <div className="flex items-center justify-between mb-2">
            <span className="text-3xl font-bold">{formatKESPrice(car.dailyRate)}</span>
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-300 fill-current" />
              <span className="text-sm">{car.rating}</span>
            </div>
          </div>
          <p className="text-primary-100">per day</p>
        </div>

        {/* Booking Form */}
        <div className="p-6 space-y-6">
          {/* Pickup Date */}
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-2">
              Pickup Date
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
              <input
                type="date"
                value={pickupDate}
                onChange={(e) => setPickupDate(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
          </div>

          {/* Return Date */}
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-2">
              Return Date
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
              <input
                type="date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                min={pickupDate || new Date().toISOString().split('T')[0]}
              />
            </div>
          </div>

          {/* Pickup Location */}
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-2">
              Pickup Location
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
              <select
                value={pickupLocation}
                onChange={(e) => setPickupLocation(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                {pickupLocations.map(location => (
                  <option key={location.value} value={location.value}>
                    {location.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Price Breakdown */}
          {calculateDays() > 0 && (
            <div className="bg-neutral-50 rounded-lg p-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span>{calculateDays()} days rental</span>
                <span>{formatKESPrice(totalPrice)}</span>
              </div>
              <div className="flex justify-between text-sm text-neutral-600">
                <span>Security deposit</span>
                <span>{formatKESPrice(50000)}</span>
              </div>
              <div className="flex justify-between text-sm text-neutral-600">
                <span>Booking deposit (30%)</span>
                <span>{formatKESPrice(deposit)}</span>
              </div>
              <div className="border-t pt-2 flex justify-between font-semibold">
                <span>Total Rental</span>
                <span>{formatKESPrice(totalPrice)}</span>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button
              size="lg"
              className="w-full"
              onClick={handleBookNow}
              disabled={!pickupDate || !returnDate}
            >
              Book Now
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="w-full"
              onClick={handleContactUs}
            >
              Get Custom Quote
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="space-y-3 pt-4 border-t border-neutral-200">
            <div className="flex items-center space-x-2 text-sm text-neutral-600">
              <Shield className="w-4 h-4 text-green-500" />
              <span>Fully insured & secure booking</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-neutral-600">
              <Clock className="w-4 h-4 text-blue-500" />
              <span>Free cancellation up to 24 hours</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-neutral-600">
              <MessageCircle className="w-4 h-4 text-purple-500" />
              <span>24/7 roadside assistance</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Contact Information */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-6 border border-primary-100"
      >
        <h4 className="font-bold text-neutral-900 mb-4">Need Assistance?</h4>
        <p className="text-sm text-neutral-600 mb-4">
          Our car rental experts are ready to help you choose the perfect vehicle for your Kenya adventure.
        </p>
        
        <div className="space-y-3">
          <a
            href="tel:+254758270982"
            className="flex items-center space-x-3 text-sm text-neutral-700 hover:text-primary-600 transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>+254-758270982</span>
          </a>
          <a
            href="mailto:rentals@bodonexpedition.com"
            className="flex items-center space-x-3 text-sm text-neutral-700 hover:text-primary-600 transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>rentals@bodonexpedition.com</span>
          </a>
        </div>
      </motion.div>
    </div>
  )
}
