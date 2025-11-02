'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Clock, Users, Star, ArrowRight, Grid, List } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/Card'
import Button from '@/components/ui/Button'

// Mock data - in real app, this would come from API
const tours = [
  {
    id: '0',
    title: 'Nairobi City Tour',
    slug: 'nairobi-city-tour',
    shortDescription: 'Explore Kenya\'s vibrant capital city with guided tours of iconic landmarks, museums, and local markets.',
    image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: 35000,
    duration: 1,
    maxGroupSize: 20,
    rating: 4.8,
    reviewCount: 142,
    category: 'City Tour',
    difficulty: 'Easy',
    location: 'Nairobi'
  },
  {
    id: '1',
    title: 'Maasai Mara Safari Adventure',
    slug: 'maasai-mara-safari',
    shortDescription: 'Experience the Great Migration and witness the Big Five in Kenya\'s most famous game reserve.',
    image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: 175000,
    duration: 4,
    maxGroupSize: 8,
    rating: 4.9,
    reviewCount: 156,
    category: 'Safari',
    difficulty: 'Easy',
    location: 'Maasai Mara'
  },
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
    category: 'Adventure',
    difficulty: 'Challenging',
    location: 'Mount Kenya'
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
    category: 'Beach & Culture',
    difficulty: 'Easy',
    location: 'Diani Beach'
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
    category: 'Safari',
    difficulty: 'Easy',
    location: 'Amboseli'
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
    category: 'Wildlife',
    difficulty: 'Easy',
    location: 'Lake Nakuru'
  },
  {
    id: '6',
    title: 'Samburu Cultural Experience',
    slug: 'samburu-cultural-experience',
    shortDescription: 'Immerse yourself in the rich traditions of the Samburu people and their unique way of life.',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: 110000,
    duration: 4,
    maxGroupSize: 12,
    rating: 4.9,
    reviewCount: 76,
    category: 'Cultural',
    difficulty: 'Moderate',
    location: 'Samburu'
  }
]

type ViewMode = 'grid' | 'list'
type SortOption = 'price_asc' | 'price_desc' | 'rating' | 'duration' | 'newest'

export default function TourGrid() {
  const [viewMode, setViewMode] = useState<ViewMode>('grid')
  const [sortBy, setSortBy] = useState<SortOption>('rating')
  const [currentPage, setCurrentPage] = useState(1)
  const toursPerPage = 6

  const sortedTours = [...tours].sort((a, b) => {
    switch (sortBy) {
      case 'price_asc':
        return a.price - b.price
      case 'price_desc':
        return b.price - a.price
      case 'rating':
        return b.rating - a.rating
      case 'duration':
        return a.duration - b.duration
      case 'newest':
        return parseInt(b.id) - parseInt(a.id)
      default:
        return 0
    }
  })

  const totalPages = Math.ceil(sortedTours.length / toursPerPage)
  const startIndex = (currentPage - 1) * toursPerPage
  const currentTours = sortedTours.slice(startIndex, startIndex + toursPerPage)

  const TourCard = ({ tour, index }: { tour: typeof tours[0], index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
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
          <div className="mb-2">
            <span className="text-xs text-neutral-500 uppercase tracking-wide">{tour.location}</span>
          </div>
          <h3 className="text-xl font-semibold text-neutral-900 mb-2">
            {tour.title}
          </h3>
          <p className="text-neutral-600 mb-4 text-sm leading-relaxed">
            {tour.shortDescription}
          </p>
          
          <div className="flex items-center justify-between text-sm text-neutral-500 mb-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{tour.duration} days</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="w-4 h-4" />
                <span>Max {tour.maxGroupSize}</span>
              </div>
            </div>
            <span className="text-xs bg-neutral-100 px-2 py-1 rounded-full">
              {tour.difficulty}
            </span>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <span className="text-2xl font-bold text-primary-600">
                KES {tour.price.toLocaleString()}
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
  )

  return (
    <div className="space-y-6">
      {/* Header with view controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <div>
          <h2 className="text-2xl font-bold text-neutral-900">
            {sortedTours.length} Tours Found
          </h2>
          <p className="text-neutral-600">Discover amazing experiences in Kenya</p>
        </div>
        
        <div className="flex items-center space-x-4">
          {/* Sort dropdown */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOption)}
            className="input-field text-sm min-w-[150px]"
          >
            <option value="rating">Highest Rated</option>
            <option value="price_asc">Price: Low to High</option>
            <option value="price_desc">Price: High to Low</option>
            <option value="duration">Duration</option>
            <option value="newest">Newest</option>
          </select>
          
          {/* View mode toggle */}
          <div className="flex items-center bg-neutral-100 rounded-lg p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-md transition-colors ${
                viewMode === 'grid' ? 'bg-white shadow-sm' : 'hover:bg-neutral-200'
              }`}
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-md transition-colors ${
                viewMode === 'list' ? 'bg-white shadow-sm' : 'hover:bg-neutral-200'
              }`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Tours grid */}
      <div className={`grid gap-6 ${
        viewMode === 'grid' 
          ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
          : 'grid-cols-1'
      }`}>
        {currentTours.map((tour, index) => (
          <TourCard key={tour.id} tour={tour} index={index} />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center space-x-2 pt-8">
          <Button
            variant="outline"
            size="sm"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(prev => prev - 1)}
          >
            Previous
          </Button>
          
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={`w-10 h-10 rounded-lg text-sm font-medium transition-colors ${
                currentPage === i + 1
                  ? 'bg-primary-600 text-white'
                  : 'bg-white border border-neutral-200 text-neutral-700 hover:bg-neutral-50'
              }`}
            >
              {i + 1}
            </button>
          ))}
          
          <Button
            variant="outline"
            size="sm"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(prev => prev + 1)}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  )
}
