'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { Calendar, Users, Car, MapPin, Clock } from 'lucide-react'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import { formatKESPrice } from '@/lib/utils'

type ServiceType = 'tour' | 'car-rental'

const tourOptions = [
  { id: 'safari', name: 'Safari Tours', price: 22000 },
  { id: 'cultural', name: 'Cultural Tours', price: 12000 },
  { id: 'adventure', name: 'Adventure Tours', price: 18000 },
  { id: 'beach', name: 'Beach Tours', price: 15000 },
  { id: 'mountain', name: 'Mountain Climbing', price: 30000 }
]

const carRentalOptions = [
  { id: 'economy', name: 'Economy Car', price: 5000 },
  { id: 'suv', name: 'SUV', price: 9500 },
  { id: '4wd', name: '4WD Safari Vehicle', price: 17500 },
  { id: 'van', name: 'Van', price: 12500 },
  { id: 'luxury', name: 'Luxury Vehicle', price: 22000 }
]

export default function BookingForm() {
  const searchParams = useSearchParams()
  const [serviceType, setServiceType] = useState<ServiceType>('tour')
  const [selectedOption, setSelectedOption] = useState('')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    startDate: '',
    endDate: '',
    guests: 1,
    specialRequests: ''
  })

  useEffect(() => {
    const service = searchParams.get('service')
    const category = searchParams.get('category')
    const vehicle = searchParams.get('vehicle')
    
    if (service === 'car-rental') {
      setServiceType('car-rental')
      if (category) {
        setSelectedOption(category)
      }
    } else {
      setServiceType('tour')
      if (category) {
        setSelectedOption(category)
      }
    }
  }, [searchParams])

  const currentOptions = serviceType === 'tour' ? tourOptions : carRentalOptions
  const selectedOptionData = currentOptions.find(option => option.id === selectedOption)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const calculateTotal = () => {
    if (!selectedOptionData) return 0
    const days = formData.startDate && formData.endDate 
      ? Math.ceil((new Date(formData.endDate).getTime() - new Date(formData.startDate).getTime()) / (1000 * 60 * 60 * 24))
      : 1
    return selectedOptionData.price * Math.max(days, 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Booking submitted:', { serviceType, selectedOption, formData })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-3xl shadow-lg p-8"
    >
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Service Type Selection */}
        <div>
          <h3 className="text-xl font-bold text-neutral-900 mb-4">Select Service</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => setServiceType('tour')}
              className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                serviceType === 'tour'
                  ? 'border-primary-500 bg-primary-50 text-primary-700'
                  : 'border-neutral-200 hover:border-neutral-300'
              }`}
            >
              <MapPin className="w-6 h-6 mx-auto mb-2" />
              <div className="font-semibold">Safari Tours</div>
              <div className="text-sm text-neutral-600">Guided expeditions</div>
            </button>
            <button
              type="button"
              onClick={() => setServiceType('car-rental')}
              className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                serviceType === 'car-rental'
                  ? 'border-primary-500 bg-primary-50 text-primary-700'
                  : 'border-neutral-200 hover:border-neutral-300'
              }`}
            >
              <Car className="w-6 h-6 mx-auto mb-2" />
              <div className="font-semibold">Car Rental</div>
              <div className="text-sm text-neutral-600">Self-drive vehicles</div>
            </button>
          </div>
        </div>

        {/* Option Selection */}
        <div>
          <h3 className="text-xl font-bold text-neutral-900 mb-4">
            Choose Your {serviceType === 'tour' ? 'Tour' : 'Vehicle'}
          </h3>
          <select
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            className="w-full p-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            required
          >
            <option value="">Select an option...</option>
            {currentOptions.map((option) => (
              <option key={option.id} value={option.id}>
                {option.name} - {formatKESPrice(option.price)}/{serviceType === 'tour' ? 'person' : 'day'}
              </option>
            ))}
          </select>
        </div>

        {/* Personal Information */}
        <div>
          <h3 className="text-xl font-bold text-neutral-900 mb-4">Personal Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
            <Input
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
            <Input
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <Input
              label="Phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        {/* Booking Details */}
        <div>
          <h3 className="text-xl font-bold text-neutral-900 mb-4">Booking Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Input
              label={serviceType === 'tour' ? 'Tour Date' : 'Pickup Date'}
              name="startDate"
              type="date"
              value={formData.startDate}
              onChange={handleInputChange}
              required
            />
            <Input
              label={serviceType === 'tour' ? 'Return Date' : 'Return Date'}
              name="endDate"
              type="date"
              value={formData.endDate}
              onChange={handleInputChange}
              required
            />
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                {serviceType === 'tour' ? 'Number of Guests' : 'Additional Drivers'}
              </label>
              <select
                name="guests"
                value={formData.guests}
                onChange={handleInputChange}
                className="w-full p-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                {[...Array(10)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Special Requests */}
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-2">
            Special Requests or Requirements
          </label>
          <textarea
            name="specialRequests"
            value={formData.specialRequests}
            onChange={handleInputChange}
            rows={4}
            className="w-full p-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="Any special requirements, dietary restrictions, accessibility needs, etc."
          />
        </div>

        {/* Booking Summary */}
        {selectedOptionData && (
          <div className="bg-neutral-50 rounded-xl p-6">
            <h3 className="text-xl font-bold text-neutral-900 mb-4">Booking Summary</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Service:</span>
                <span className="font-semibold">{selectedOptionData.name}</span>
              </div>
              <div className="flex justify-between">
                <span>Price per {serviceType === 'tour' ? 'person' : 'day'}:</span>
                <span>${selectedOptionData.price.toLocaleString()}</span>
              </div>
              {serviceType === 'tour' && (
                <div className="flex justify-between">
                  <span>Guests:</span>
                  <span>{formData.guests}</span>
                </div>
              )}
              <div className="border-t pt-2 mt-2">
                <div className="flex justify-between text-lg font-bold">
                  <span>Total:</span>
                  <span className="text-primary-600">${calculateTotal().toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Submit Button */}
        <Button type="submit" size="lg" className="w-full">
          Proceed to Payment
        </Button>
      </form>
    </motion.div>
  )
}
