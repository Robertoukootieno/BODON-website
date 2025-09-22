'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Star, Users, Luggage, Settings, ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'
import { formatKESPrice } from '@/lib/utils'

interface Car {
  id: string
  name: string
  slug: string
  category: string
  shortDescription: string
  image: string
  dailyRate: number
  passengers: number
  luggage: number
  transmission: string
  rating: number
  reviewCount: number
}

interface RelatedCarsProps {
  currentCarId: string
  category: string
}

// Mock related cars data - in real app, this would come from API
const allCars: Car[] = [
  {
    id: '2',
    name: 'Toyota RAV4',
    slug: 'toyota-rav4',
    category: 'SUV',
    shortDescription: 'Spacious SUV perfect for family adventures and safari trips.',
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    dailyRate: 9500,
    passengers: 7,
    luggage: 5,
    transmission: 'Automatic',
    rating: 4.7,
    reviewCount: 124
  },
  {
    id: '3',
    name: 'Land Cruiser Prado',
    slug: 'land-cruiser-prado',
    category: '4WD Safari',
    shortDescription: 'Ultimate safari vehicle with superior off-road capabilities.',
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    dailyRate: 17500,
    passengers: 8,
    luggage: 6,
    transmission: 'Manual/Auto',
    rating: 4.9,
    reviewCount: 89
  },
  {
    id: '4',
    name: 'Nissan Note',
    slug: 'nissan-note',
    category: 'Economy',
    shortDescription: 'Compact and efficient car ideal for city driving.',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    dailyRate: 4500,
    passengers: 5,
    luggage: 3,
    transmission: 'Manual',
    rating: 4.5,
    reviewCount: 67
  },
  {
    id: '5',
    name: 'Toyota Hiace Van',
    slug: 'toyota-hiace-van',
    category: 'Van',
    shortDescription: 'Spacious van perfect for group travel and large families.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    dailyRate: 12000,
    passengers: 14,
    luggage: 10,
    transmission: 'Manual',
    rating: 4.6,
    reviewCount: 45
  }
]

export default function RelatedCars({ currentCarId, category }: RelatedCarsProps) {
  // Filter cars and exclude current car
  const relatedCars = allCars
    .filter(car => car.id !== currentCarId)
    .slice(0, 3) // Show only 3 related cars

  if (relatedCars.length === 0) {
    return null
  }

  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Other Vehicles You Might Like
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Explore our diverse fleet of quality vehicles for every travel need
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {relatedCars.map((car, index) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {car.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-neutral-500 mb-3">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span>{car.rating}</span>
                    <span>({car.reviewCount})</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{car.passengers} seats</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Luggage className="w-4 h-4" />
                    <span>{car.luggage} bags</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-neutral-900 mb-2 line-clamp-1">
                  {car.name}
                </h3>
                
                <p className="text-neutral-600 text-sm mb-4 line-clamp-2">
                  {car.shortDescription}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2 text-sm text-neutral-600">
                    <Settings className="w-4 h-4" />
                    <span>{car.transmission}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-primary-600">
                      {formatKESPrice(car.dailyRate)}
                    </span>
                    <span className="text-neutral-500 text-sm ml-1">per day</span>
                  </div>
                  <Link href={`/car-rental/${car.slug}`}>
                    <Button size="sm" rightIcon={<ArrowRight className="w-4 h-4" />}>
                      View Details
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Cars CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/car-rental">
            <Button size="lg" variant="outline" rightIcon={<ArrowRight className="w-5 h-5" />}>
              View All Vehicles
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
