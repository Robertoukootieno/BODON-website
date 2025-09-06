'use client'

import { motion } from 'framer-motion'
import { Users, Luggage, Fuel, Settings } from 'lucide-react'
import Button from '@/components/ui/Button'
import Link from 'next/link'

const vehicles = [
  {
    id: 1,
    name: 'Toyota Corolla',
    category: 'Economy',
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    price: '$35',
    period: 'per day',
    features: {
      passengers: 5,
      luggage: 2,
      transmission: 'Manual',
      fuel: 'Petrol'
    },
    description: 'Perfect for city driving and short trips. Fuel-efficient and reliable.'
  },
  {
    id: 2,
    name: 'Toyota RAV4',
    category: 'SUV',
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    price: '$65',
    period: 'per day',
    features: {
      passengers: 5,
      luggage: 4,
      transmission: 'Automatic',
      fuel: 'Petrol'
    },
    description: 'Ideal for family trips and light off-road adventures.'
  },
  {
    id: 3,
    name: 'Toyota Land Cruiser',
    category: '4WD',
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    price: '$120',
    period: 'per day',
    features: {
      passengers: 7,
      luggage: 6,
      transmission: 'Automatic',
      fuel: 'Diesel'
    },
    description: 'Perfect for safari adventures and rough terrain exploration.'
  },
  {
    id: 4,
    name: 'Toyota Hiace Van',
    category: 'Van',
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    price: '$85',
    period: 'per day',
    features: {
      passengers: 14,
      luggage: 8,
      transmission: 'Manual',
      fuel: 'Diesel'
    },
    description: 'Spacious van perfect for group travel and large families.'
  },
  {
    id: 5,
    name: 'Nissan X-Trail',
    category: 'SUV',
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    price: '$55',
    period: 'per day',
    features: {
      passengers: 7,
      luggage: 4,
      transmission: 'Automatic',
      fuel: 'Petrol'
    },
    description: 'Comfortable SUV with excellent fuel economy and modern features.'
  },
  {
    id: 6,
    name: 'Mercedes Sprinter',
    category: 'Luxury Van',
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    price: '$150',
    period: 'per day',
    features: {
      passengers: 16,
      luggage: 10,
      transmission: 'Automatic',
      fuel: 'Diesel'
    },
    description: 'Premium luxury van with air conditioning and comfortable seating.'
  }
]

export default function CarFleet() {
  return (
    <section id="fleet" className="section-padding bg-neutral-50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Our Vehicle Fleet
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Choose from our diverse range of well-maintained vehicles, perfect for any occasion - from city exploration to safari adventures.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((vehicle, index) => (
            <motion.div
              key={vehicle.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {vehicle.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-1">
                      {vehicle.name}
                    </h3>
                    <p className="text-neutral-600 text-sm">
                      {vehicle.description}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary-600">
                      {vehicle.price}
                    </div>
                    <div className="text-sm text-neutral-500">
                      {vehicle.period}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center space-x-2 text-sm text-neutral-600">
                    <Users className="w-4 h-4" />
                    <span>{vehicle.features.passengers} passengers</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-neutral-600">
                    <Luggage className="w-4 h-4" />
                    <span>{vehicle.features.luggage} bags</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-neutral-600">
                    <Settings className="w-4 h-4" />
                    <span>{vehicle.features.transmission}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-neutral-600">
                    <Fuel className="w-4 h-4" />
                    <span>{vehicle.features.fuel}</span>
                  </div>
                </div>

                <Link href={`/booking?service=car-rental&vehicle=${vehicle.id}`}>
                  <Button className="w-full">
                    Book Now
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
