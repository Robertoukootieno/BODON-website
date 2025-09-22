'use client'

import { motion } from 'framer-motion'
import { Star, User, Calendar } from 'lucide-react'

interface Review {
  id: string
  name: string
  country: string
  rating: number
  date: string
  title: string
  comment: string
  avatar?: string
}

interface TourReviewsProps {
  tourId: string
  rating: number
  reviewCount: number
}

// Mock reviews data - in real app, this would come from API
const mockReviews: Review[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    country: 'United States',
    rating: 5,
    date: '2024-01-15',
    title: 'Absolutely incredible experience!',
    comment: 'This safari exceeded all my expectations. Our guide was incredibly knowledgeable and we saw all of the Big Five. The accommodation was luxurious and the food was amazing. I would definitely book with Bodon Expedition again!',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
  },
  {
    id: '2',
    name: 'David Chen',
    country: 'Singapore',
    rating: 5,
    date: '2024-01-10',
    title: 'Perfect family safari',
    comment: 'Traveled with my wife and two kids (ages 8 and 12). The guides were fantastic with children and made sure everyone felt safe and engaged. Seeing lions up close was a dream come true for the whole family.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
  },
  {
    id: '3',
    name: 'Emma Thompson',
    country: 'United Kingdom',
    rating: 4,
    date: '2024-01-05',
    title: 'Great wildlife viewing',
    comment: 'Excellent organization and professional guides. We were lucky to witness the river crossing during the Great Migration. Only minor issue was the weather, but that\'s beyond anyone\'s control. Highly recommended!',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
  }
]

export default function TourReviews({ tourId, rating, reviewCount }: TourReviewsProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-neutral-300'
        }`}
      />
    ))
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl font-bold text-neutral-900">Reviews & Ratings</h3>
        <div className="text-right">
          <div className="flex items-center space-x-2 mb-1">
            <div className="flex items-center space-x-1">
              {renderStars(Math.round(rating))}
            </div>
            <span className="font-semibold text-lg">{rating}</span>
          </div>
          <p className="text-sm text-neutral-600">{reviewCount} reviews</p>
        </div>
      </div>

      {/* Rating Breakdown */}
      <div className="bg-neutral-50 rounded-xl p-6 mb-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
          {[5, 4, 3, 2, 1].map((stars) => {
            const percentage = Math.random() * 30 + (stars === 5 ? 60 : stars === 4 ? 20 : 10)
            return (
              <div key={stars} className="space-y-2">
                <div className="flex items-center justify-center space-x-1">
                  <span className="text-sm font-medium">{stars}</span>
                  <Star className="w-3 h-3 text-yellow-400 fill-current" />
                </div>
                <div className="w-full bg-neutral-200 rounded-full h-2">
                  <div
                    className="bg-yellow-400 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
                <span className="text-xs text-neutral-600">{Math.round(percentage)}%</span>
              </div>
            )
          })}
        </div>
      </div>

      {/* Reviews List */}
      <div className="space-y-6">
        {mockReviews.map((review, index) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl border border-neutral-200 p-6"
          >
            <div className="flex items-start space-x-4">
              {/* Avatar */}
              <div className="flex-shrink-0">
                {review.avatar ? (
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-12 h-12 bg-neutral-200 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-neutral-500" />
                  </div>
                )}
              </div>

              {/* Review Content */}
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="font-semibold text-neutral-900">{review.name}</h4>
                    <p className="text-sm text-neutral-600">{review.country}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-1 mb-1">
                      {renderStars(review.rating)}
                    </div>
                    <div className="flex items-center space-x-1 text-xs text-neutral-500">
                      <Calendar className="w-3 h-3" />
                      <span>{formatDate(review.date)}</span>
                    </div>
                  </div>
                </div>

                <h5 className="font-medium text-neutral-900 mb-2">{review.title}</h5>
                <p className="text-neutral-700 leading-relaxed">{review.comment}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Load More Button */}
      <div className="text-center mt-8">
        <button className="text-primary-600 hover:text-primary-700 font-medium text-sm">
          View all {reviewCount} reviews
        </button>
      </div>
    </motion.div>
  )
}
