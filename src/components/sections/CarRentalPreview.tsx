'use client'

import { motion } from 'framer-motion'
import { Car, Users, Shield, MapPin } from 'lucide-react'
import Button from '@/components/ui/Button'
import Link from 'next/link'

const featuredVehicles = [
  {
    name: 'Compact Cars',
    description: 'Perfect for city driving and tight spaces',
    image: '/images/WhatsApp Image 2025-10-30 at 20.25.09.jpeg',
    price: 'From KES 4,500/day',
    features: ['Fuel Efficient', 'Air Conditioning', 'Manual Transmission']
  },
  {
    name: 'MPV',
    description: 'Ideal for families and group travel',
    image: '/images/toyatavoxy.png',
    price: 'From KES 8,000/day',
    features: ['7 Passengers', 'GPS Navigation', 'Spacious Interior']
  },
  {
    name: 'Tour Van',
    description: 'Perfect for group tours and large parties',
    image: '/images/WhatsApp Image 2025-10-30 at 20.25.10 (2).jpeg',
    price: 'From KES 22,000/day',
    features: ['16 Passengers', 'Professional Driver', 'Premium Comfort']
  }
]

const highlights = [
  {
    icon: Car,
    title: 'Premium Fleet',
    description: 'Well-maintained vehicles for every need'
  },
  {
    icon: Shield,
    title: 'Fully Insured',
    description: 'Comprehensive coverage included'
  },
  {
    icon: Users,
    title: '24/7 Support',
    description: 'Round-the-clock assistance'
  },
  {
    icon: MapPin,
    title: 'Free Pickup',
    description: 'Airport and hotel pickup available'
  }
]

export default function CarRentalPreview() {
  return (
    <section className="section-padding bg-gradient-to-br from-neutral-50 to-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Premium Car Rental Services
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Explore Kenya at your own pace with our diverse fleet of vehicles. From economy cars to safari-ready 4WDs, we have the perfect vehicle for your journey.
          </p>
        </motion.div>

        {/* Featured Vehicles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {featuredVehicles.map((vehicle, index) => (
            <motion.div
              key={vehicle.name}
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
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-semibold text-primary-600">
                    {vehicle.price}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  {vehicle.name}
                </h3>
                <p className="text-neutral-600 mb-4">
                  {vehicle.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {vehicle.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                      <span className="text-sm text-neutral-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link href="/car-rental">
                  <Button variant="outline" className="w-full">
                    View Details
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white rounded-xl shadow-sm"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <highlight.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-neutral-900 mb-2">
                {highlight.title}
              </h3>
              <p className="text-sm text-neutral-600">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Hit the Road?
            </h3>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Book your perfect vehicle today and start exploring Kenya with confidence. Free airport pickup and 24/7 support included.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/car-rental">
                <Button size="lg" variant="ghost" className="!bg-white !text-primary-600 hover:!bg-neutral-100 w-full sm:w-auto">
                  View All Vehicles
                </Button>
              </Link>
              <Link href="/booking?service=car-rental">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-600 w-full sm:w-auto">
                  Book Now
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
