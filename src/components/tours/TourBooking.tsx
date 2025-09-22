'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Users, Phone, Mail, MessageCircle, Star, Shield, Clock } from 'lucide-react'
import Button from '@/components/ui/Button'
import { formatKESPrice } from '@/lib/utils'

interface Tour {
  id: string
  title: string
  price: number
  duration: number
  maxGroupSize: number
  rating: number
  reviewCount: number
}

interface TourBookingProps {
  tour: Tour
}

export default function TourBooking({ tour }: TourBookingProps) {
  const [selectedDate, setSelectedDate] = useState('')
  const [guests, setGuests] = useState(2)
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  const totalPrice = tour.price * guests
  const deposit = Math.round(totalPrice * 0.3) // 30% deposit

  const handleBookNow = () => {
    // In a real app, this would redirect to booking page or open booking modal
    window.location.href = `/booking?tour=${tour.id}&date=${selectedDate}&guests=${guests}`
  }

  const handleContactUs = () => {
    // In a real app, this would open contact modal or redirect to contact page
    window.location.href = `/contact?tour=${tour.title}`
  }

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
            <span className="text-3xl font-bold">{formatKESPrice(tour.price)}</span>
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-300 fill-current" />
              <span className="text-sm">{tour.rating}</span>
            </div>
          </div>
          <p className="text-primary-100">per person</p>
        </div>

        {/* Booking Form */}
        <div className="p-6 space-y-6">
          {/* Date Selection */}
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-2">
              Select Date
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
          </div>

          {/* Guests Selection */}
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-2">
              Number of Guests
            </label>
            <div className="relative">
              <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
              <select
                value={guests}
                onChange={(e) => setGuests(parseInt(e.target.value))}
                className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                {Array.from({ length: tour.maxGroupSize }, (_, i) => i + 1).map(num => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? 'Guest' : 'Guests'}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Price Breakdown */}
          <div className="bg-neutral-50 rounded-lg p-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span>{formatKESPrice(tour.price)} × {guests} guests</span>
              <span>{formatKESPrice(totalPrice)}</span>
            </div>
            <div className="flex justify-between text-sm text-neutral-600">
              <span>Deposit required (30%)</span>
              <span>{formatKESPrice(deposit)}</span>
            </div>
            <div className="border-t pt-2 flex justify-between font-semibold">
              <span>Total</span>
              <span>{formatKESPrice(totalPrice)}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button
              size="lg"
              className="w-full"
              onClick={handleBookNow}
              disabled={!selectedDate}
            >
              Book Now
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="w-full"
              onClick={handleContactUs}
            >
              Contact for Custom Quote
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="space-y-3 pt-4 border-t border-neutral-200">
            <div className="flex items-center space-x-2 text-sm text-neutral-600">
              <Shield className="w-4 h-4 text-green-500" />
              <span>Secure booking & payment</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-neutral-600">
              <Clock className="w-4 h-4 text-blue-500" />
              <span>Free cancellation up to 48 hours</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-neutral-600">
              <MessageCircle className="w-4 h-4 text-purple-500" />
              <span>24/7 customer support</span>
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
        <h4 className="font-bold text-neutral-900 mb-4">Need Help?</h4>
        <p className="text-sm text-neutral-600 mb-4">
          Our Kenya travel experts are here to help you plan the perfect adventure.
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
            href="mailto:info@bodonexpedition.com"
            className="flex items-center space-x-3 text-sm text-neutral-700 hover:text-primary-600 transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>info@bodonexpedition.com</span>
          </a>
        </div>
      </motion.div>
    </div>
  )
}
