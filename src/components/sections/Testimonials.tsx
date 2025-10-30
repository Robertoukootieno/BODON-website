'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/Card'

const testimonials = [
  {
    id: '1',
    name: 'Sarah & Michael Johnson',
    location: 'California, USA',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    rating: 5,
    comment: 'We booked the 4-day Maasai Mara safari in September and witnessed the Great Migration firsthand. Our guide, Peter, was exceptional - he knew exactly where to find the wildlife and shared incredible insights about the ecosystem. We saw lions, elephants, giraffes, and even a leopard! The tented camp was comfortable and the food was delicious. This was the trip of a lifetime!',
    tour: 'Maasai Mara Safari Adventure',
    date: 'September 2024'
  },
  {
    id: '2',
    name: 'James Mitchell',
    location: 'Edinburgh, Scotland',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    rating: 5,
    comment: 'At 52, I wasn\'t sure I could summit Mount Kenya, but the Bodon team made it possible. The guides were patient, the acclimatization schedule was perfect, and reaching Point Lenana at sunrise was absolutely magical. I could see Kilimanjaro in the distance. The porters were incredibly helpful and the whole experience was well-organized. Highly recommend for anyone considering this adventure!',
    tour: 'Mount Kenya Climbing Expedition',
    date: 'August 2024'
  },
  {
    id: '3',
    name: 'Maria & Carlos Rodriguez',
    location: 'Barcelona, Spain',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    rating: 5,
    comment: 'We spent 5 days combining Diani Beach with cultural experiences. The Swahili village visit was eye-opening - we learned about traditional crafts and had lunch with a local family. The beaches were pristine and the snorkeling was fantastic. Our guide, Amina, was knowledgeable and made us feel welcome everywhere. The blend of relaxation and cultural immersion was perfect. We\'re already planning our next trip!',
    tour: 'Diani Beach & Culture Tour',
    date: 'July 2024'
  },
  {
    id: '4',
    name: 'David Chen',
    location: 'Singapore',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    rating: 5,
    comment: 'I rented a Toyota Voxy for a week to explore Kenya with my family. The car was immaculate, fuel-efficient, and perfect for navigating both city streets and rough terrain. The 24/7 support team was responsive when I had questions. The pickup at JKIA was seamless and the staff explained everything clearly. Best car rental experience I\'ve had in Africa. Will definitely use Bodon again!',
    tour: 'Car Rental - Toyota Voxy',
    date: 'October 2024'
  },
  {
    id: '5',
    name: 'Emma Thompson',
    location: 'London, UK',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    rating: 5,
    comment: 'The Amboseli Elephant Safari was incredible! We saw massive herds of elephants with Mount Kilimanjaro as the backdrop. The photography opportunities were endless. Our guide knew the elephants by name and shared fascinating facts about their behavior. The lodge was comfortable and the sunset game drives were magical. This experience changed my perspective on wildlife conservation.',
    tour: 'Amboseli Elephant Safari',
    date: 'June 2024'
  },
  {
    id: '6',
    name: 'Robert & Patricia Okonkwo',
    location: 'Lagos, Nigeria',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    rating: 5,
    comment: 'The Samburu Cultural Experience was transformative. We spent 4 days with the Samburu community, learning about their traditions, participating in ceremonies, and understanding their connection to the land. The guides were respectful and the interactions felt authentic, not touristy. We also saw unique wildlife like the reticulated giraffe. This was more than a tour - it was a cultural exchange that we\'ll never forget.',
    tour: 'Samburu Cultural Experience',
    date: 'May 2024'
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-primary-600 font-medium">
                      {testimonial.tour}
                    </div>
                    <div className="text-xs text-neutral-500">
                      {testimonial.date}
                    </div>
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
