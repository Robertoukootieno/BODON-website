'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/Card'

const testimonials = [
  {
    id: '1',
    name: 'Sarah Johnson',
    location: 'United States',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    rating: 5,
    comment: 'Our Maasai Mara safari with Bodon Expedition was absolutely incredible! The guides were knowledgeable, the accommodations were perfect, and we saw the Big Five. Highly recommend!',
    tour: 'Maasai Mara Safari'
  },
  {
    id: '2',
    name: 'James Mitchell',
    location: 'United Kingdom',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    rating: 5,
    comment: 'Climbing Mount Kenya was a dream come true. The team at Bodon Expedition made sure we were safe and well-prepared. The views from the summit were breathtaking!',
    tour: 'Mount Kenya Climbing'
  },
  {
    id: '3',
    name: 'Maria Rodriguez',
    location: 'Spain',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    rating: 5,
    comment: 'The cultural tour was amazing! We learned so much about Kenyan traditions and the local communities. The beaches in Diani were paradise. Thank you, Bodon Expedition!',
    tour: 'Cultural & Beach Tour'
  },
  {
    id: '4',
    name: 'David Chen',
    location: 'Australia',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    rating: 5,
    comment: 'Professional service from start to finish. The booking process was smooth, payments were secure, and the entire experience exceeded our expectations.',
    tour: 'Safari Adventure'
  }
]

export default function Testimonials() {
  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-max">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            What Our Travelers Say
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about their adventures with us.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-neutral-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-neutral-600">
                        {testimonial.location}
                      </p>
                      <div className="flex items-center mt-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                    <Quote className="w-8 h-8 text-primary-200 flex-shrink-0" />
                  </div>
                  
                  <p className="text-neutral-700 leading-relaxed mb-4">
                    "{testimonial.comment}"
                  </p>
                  
                  <div className="text-sm text-primary-600 font-medium">
                    {testimonial.tour}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Trust indicators */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 shadow-sm border border-neutral-200">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-neutral-700 font-medium">4.9 out of 5</span>
            <span className="text-neutral-500">•</span>
            <span className="text-neutral-600">Based on 2,500+ reviews</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
