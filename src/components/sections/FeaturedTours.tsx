'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Clock, Users, Star, ArrowRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/Card'
import Button from '@/components/ui/Button'

// Mock data - in real app, this would come from API
const featuredTours = [
  {
    id: '1',
    title: 'Maasai Mara Safari Adventure',
    slug: 'maasai-mara-safari',
    shortDescription: 'Experience the Great Migration and witness the Big Five in Kenya\'s most famous game reserve.',
    image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: 1200,
    duration: 4,
    maxGroupSize: 8,
    rating: 4.9,
    reviewCount: 156,
    category: 'Safari'
  },
  {
    id: '2',
    title: 'Mount Kenya Climbing Expedition',
    slug: 'mount-kenya-climbing',
    shortDescription: 'Conquer Africa\'s second-highest peak with breathtaking views and challenging trails.',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: 800,
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
    price: 600,
    duration: 5,
    maxGroupSize: 15,
    rating: 4.7,
    reviewCount: 203,
    category: 'Beach & Culture'
  }
]

export default function FeaturedTours() {
  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-max">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Featured Tours
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Discover our most popular adventures, carefully crafted to showcase Kenya's incredible diversity and natural beauty.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredTours.map((tour, index) => (
            <motion.div
              key={tour.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card hover className="h-full">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-secondary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {tour.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">{tour.rating}</span>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                    {tour.title}
                  </h3>
                  <p className="text-neutral-600 mb-4 text-sm leading-relaxed">
                    {tour.shortDescription}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-neutral-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{tour.duration} days</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>Max {tour.maxGroupSize}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-primary-600">
                        ${tour.price}
                      </span>
                      <span className="text-neutral-500 text-sm ml-1">per person</span>
                    </div>
                    <Link href={`/tours/${tour.slug}`}>
                      <Button size="sm" rightIcon={<ArrowRight className="w-4 h-4" />}>
                        View Details
                      </Button>
                    </Link>
                  </div>
                  
                  <div className="mt-3 text-xs text-neutral-500">
                    {tour.reviewCount} reviews
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Link href="/tours">
            <Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
              View All Tours
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
