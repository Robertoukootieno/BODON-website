'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Star, Clock, Users, ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'
import { formatKESPrice } from '@/lib/utils'

interface Tour {
  id: string
  title: string
  slug: string
  shortDescription: string
  image: string
  price: number
  duration: number
  maxGroupSize: number
  rating: number
  reviewCount: number
  category: string
}

interface RelatedToursProps {
  currentTourId: string
  category: string
}

// Mock related tours data - in real app, this would come from API
const allTours: Tour[] = [
  {
    id: '2',
    title: 'Mount Kenya Climbing Expedition',
    slug: 'mount-kenya-climbing',
    shortDescription: 'Conquer Africa\'s second-highest peak with breathtaking views and challenging trails.',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: 120000,
    duration: 6,
    maxGroupSize: 12,
    rating: 4.8,
    reviewCount: 89,
    category: 'Adventure'
  },
  {
    id: '3',
    title: 'Diani Beach & Culture Tour',
    slug: 'diani-beach-culture',
    shortDescription: 'Relax on pristine beaches while exploring Swahili culture and coastal traditions.',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: 90000,
    duration: 5,
    maxGroupSize: 15,
    rating: 4.7,
    reviewCount: 203,
    category: 'Beach & Culture'
  },
  {
    id: '4',
    title: 'Amboseli Elephant Safari',
    slug: 'amboseli-elephant-safari',
    shortDescription: 'Get up close with elephants against the backdrop of Mount Kilimanjaro.',
    image: 'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: 140000,
    duration: 3,
    maxGroupSize: 10,
    rating: 4.8,
    reviewCount: 124,
    category: 'Safari'
  },
  {
    id: '5',
    title: 'Lake Nakuru Flamingo Tour',
    slug: 'lake-nakuru-flamingo',
    shortDescription: 'Witness thousands of flamingos and diverse wildlife in this beautiful lake ecosystem.',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: 65000,
    duration: 2,
    maxGroupSize: 20,
    rating: 4.6,
    reviewCount: 87,
    category: 'Wildlife'
  }
]

export default function RelatedTours({ currentTourId, category }: RelatedToursProps) {
  // Filter tours by category and exclude current tour
  const relatedTours = allTours
    .filter(tour => tour.id !== currentTourId)
    .slice(0, 3) // Show only 3 related tours

  if (relatedTours.length === 0) {
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
            You Might Also Like
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Discover more amazing adventures and experiences in Kenya
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {relatedTours.map((tour, index) => (
            <motion.div
              key={tour.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {tour.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-neutral-500 mb-3">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span>{tour.rating}</span>
                    <span>({tour.reviewCount})</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{tour.duration} days</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>Max {tour.maxGroupSize}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-neutral-900 mb-2 line-clamp-2">
                  {tour.title}
                </h3>
                
                <p className="text-neutral-600 text-sm mb-4 line-clamp-2">
                  {tour.shortDescription}
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-primary-600">
                      {formatKESPrice(tour.price)}
                    </span>
                    <span className="text-neutral-500 text-sm ml-1">per person</span>
                  </div>
                  <Link href={`/tours/${tour.slug}`}>
                    <Button size="sm" rightIcon={<ArrowRight className="w-4 h-4" />}>
                      View Details
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Tours CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/tours">
            <Button size="lg" variant="outline" rightIcon={<ArrowRight className="w-5 h-5" />}>
              View All Tours
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
