'use client'

import { motion } from 'framer-motion'
import { Car, Shield, Clock, MapPin } from 'lucide-react'
import Button from '@/components/ui/Button'
import Link from 'next/link'

const features = [
  {
    icon: Car,
    title: 'Quality Fleet',
    description: 'Well-maintained vehicles for every need'
  },
  {
    icon: Shield,
    title: 'Fully Insured',
    description: 'Comprehensive insurance coverage'
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock customer assistance'
  },
  {
    icon: MapPin,
    title: 'Flexible Pickup',
    description: 'Airport, hotel, or office pickup available'
  }
]

export default function CarRentalHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-max text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Premium Car Rental
            <span className="block text-gradient">in Kenya</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-neutral-200 max-w-3xl mx-auto leading-relaxed">
            Explore Kenya at your own pace with our premium fleet of vehicles. From city cars to rugged 4WDs, we have the perfect vehicle for your adventure.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/booking?service=car-rental">
              <Button size="lg" className="w-full sm:w-auto">
                Book Now
              </Button>
            </Link>
            <Link href="#fleet">
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-neutral-900">
                View Fleet
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
            >
              <feature.icon className="w-8 h-8 text-secondary-400 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-neutral-300 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
