'use client'

import { motion } from 'framer-motion'
import { 
  Shield, 
  Clock, 
  MapPin, 
  Wrench, 
  CreditCard, 
  Phone,
  Car,
  Users
} from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Comprehensive Insurance',
    description: 'All vehicles come with full insurance coverage including third-party liability and collision damage waiver.'
  },
  {
    icon: Clock,
    title: '24/7 Roadside Assistance',
    description: 'Round-the-clock support and emergency roadside assistance wherever you are in Kenya.'
  },
  {
    icon: MapPin,
    title: 'Flexible Pickup & Drop-off',
    description: 'Convenient pickup and drop-off locations including airports, hotels, and city centers.'
  },
  {
    icon: Wrench,
    title: 'Well-Maintained Fleet',
    description: 'Regular maintenance and safety checks ensure all vehicles are in excellent condition.'
  },
  {
    icon: CreditCard,
    title: 'Flexible Payment Options',
    description: 'Pay with cash, card, M-Pesa, or bank transfer. No hidden fees or surprise charges.'
  },
  {
    icon: Phone,
    title: 'Easy Booking Process',
    description: 'Simple online booking or call us directly. Quick confirmation and transparent pricing.'
  },
  {
    icon: Car,
    title: 'GPS Navigation',
    description: 'All vehicles equipped with GPS navigation systems to help you explore Kenya with confidence.'
  },
  {
    icon: Users,
    title: 'Professional Service',
    description: 'Experienced team providing personalized service and local travel recommendations.'
  }
]

export default function CarRentalFeatures() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Why Choose Our Car Rental Service?
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            We provide more than just vehicles - we offer peace of mind, reliability, and exceptional service to make your journey memorable.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-neutral-900 mb-3">
                {feature.title}
              </h3>
              
              <p className="text-neutral-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Additional Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-3xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
                Ready to Explore Kenya?
              </h3>
              <p className="text-lg text-neutral-600 mb-6">
                Whether you're planning a safari adventure, business trip, or family vacation, we have the perfect vehicle for your needs. Our experienced team is here to help you choose the right vehicle and plan your journey.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="text-neutral-700">Free airport pickup and drop-off</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="text-neutral-700">No mileage restrictions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="text-neutral-700">Additional driver options available</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="/images/WhatsApp Image 2025-09-07 at 20.21.38.jpeg"
                alt="Kenya safari adventure with vehicle"
                className="rounded-2xl shadow-lg w-full h-64 object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
