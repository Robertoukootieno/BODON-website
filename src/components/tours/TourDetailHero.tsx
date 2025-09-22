'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Star, Clock, Users, MapPin, Camera, ChevronLeft, ChevronRight } from 'lucide-react'
import Button from '@/components/ui/Button'

interface Tour {
  id: string
  title: string
  shortDescription: string
  images: string[]
  price: number
  duration: number
  maxGroupSize: number
  rating: number
  reviewCount: number
  category: string
  difficulty: string
  location: string
}

interface TourDetailHeroProps {
  tour: Tour
}

export default function TourDetailHero({ tour }: TourDetailHeroProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % tour.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + tour.images.length) % tour.images.length)
  }

  return (
    <section className="relative">
      {/* Image Gallery */}
      <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <motion.img
          key={currentImageIndex}
          src={tour.images[currentImageIndex]}
          alt={tour.title}
          className="w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        
        {/* Image Navigation */}
        {tour.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}

        {/* Image Indicators */}
        {tour.images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {tour.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Photo Count */}
        <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm flex items-center space-x-1">
          <Camera className="w-4 h-4" />
          <span>{tour.images.length} photos</span>
        </div>
      </div>

      {/* Content Overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            {/* Category Badge */}
            <div className="mb-4">
              <span className="inline-block bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                {tour.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              {tour.title}
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-white/90 mb-6 max-w-3xl">
              {tour.shortDescription}
            </p>

            {/* Tour Stats */}
            <div className="flex flex-wrap items-center gap-6 mb-6">
              <div className="flex items-center space-x-2 text-white">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="font-semibold">{tour.rating}</span>
                <span className="text-white/80">({tour.reviewCount} reviews)</span>
              </div>
              
              <div className="flex items-center space-x-2 text-white">
                <Clock className="w-5 h-5" />
                <span>{tour.duration} days</span>
              </div>
              
              <div className="flex items-center space-x-2 text-white">
                <Users className="w-5 h-5" />
                <span>Max {tour.maxGroupSize} people</span>
              </div>
              
              <div className="flex items-center space-x-2 text-white">
                <MapPin className="w-5 h-5" />
                <span>{tour.location}</span>
              </div>
            </div>

            {/* Price and CTA */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="text-white">
                <div className="text-3xl md:text-4xl font-bold">
                  KES {tour.price.toLocaleString()}
                </div>
                <div className="text-white/80">per person</div>
              </div>
              
              <Button 
                size="lg" 
                className="bg-secondary-500 hover:bg-secondary-600 text-white"
                onClick={() => {
                  const bookingSection = document.getElementById('booking-section')
                  bookingSection?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Book This Tour
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
