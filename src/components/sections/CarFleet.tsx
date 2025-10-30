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
    image: '/images/Toyota Corolla.png',
    price: 5000,
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
    image: '/images/Toyota RAV4.jpg',
    price: 9500,
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
    image: '/images/WhatsApp Image 2025-10-30 at 20.25.09.jpeg',
    price: 17500,
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
    image: '/images/WhatsApp Image 2025-10-30 at 20.25.10.jpeg',
    price: 12000,
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
    name: 'Toyota Voxy',
    category: 'MPV',
    image: '/images/WhatsApp Image 2025-10-30 at 20.25.10 (1).jpeg',
    price: 8000,
    period: 'per day',
    features: {
      passengers: 7,
      luggage: 4,
      transmission: 'Automatic',
      fuel: 'Petrol'
    },
    description: 'Spacious MPV perfect for family trips and group travel with modern comfort.'
  },
  {
    id: 6,
    name: 'Tour Van',
    category: 'Tour Van',
    image: '/images/WhatsApp Image 2025-10-30 at 20.25.10 (2).jpeg',
    price: 22000,
    period: 'per day',
    features: {
      passengers: 16,
      luggage: 10,
      transmission: 'Automatic',
      fuel: 'Diesel'
    },
    description: 'Premium tour van with air conditioning and comfortable seating for group tours.'
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
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-neutral-900 mb-1">
                    {vehicle.name}
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    {vehicle.description}
                  </p>
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
