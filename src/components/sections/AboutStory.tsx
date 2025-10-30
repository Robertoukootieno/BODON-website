'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Users, Award } from 'lucide-react'

const milestones = [
  {
    year: '2009',
    title: 'The Beginning',
    description: 'Founded by Robert Ukoo Tieno with a vision to showcase Kenya\'s natural beauty to the world.',
    icon: Calendar
  },
  {
    year: '2012',
    title: 'First Major Expansion',
    description: 'Expanded operations to include Mount Kenya climbing expeditions and cultural tours.',
    icon: MapPin
  },
  {
    year: '2015',
    title: 'Team Growth',
    description: 'Grew to a team of 25+ experienced guides and support staff across Kenya.',
    icon: Users
  },
  {
    year: '2018',
    title: 'Industry Recognition',
    description: 'Received Kenya Tourism Board certification and multiple industry awards.',
    icon: Award
  },
  {
    year: '2023',
    title: 'Digital Innovation',
    description: 'Launched online booking platform and expanded car rental services.',
    icon: Calendar
  },
  {
    year: '2025',
    title: 'New Horizons',
    description: 'Celebrating 16 years of excellence with expanded services and international partnerships.',
    icon: Award
  }
]

export default function AboutStory() {
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
            Our Story
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            From humble beginnings to becoming Kenya's trusted expedition partner, our journey has been driven by passion, dedication, and an unwavering commitment to excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Story Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-neutral-900 mb-6">
              Born from a Love for Adventure
            </h3>
            <div className="space-y-4 text-neutral-600 leading-relaxed">
              <p>
                Bodon Expedition Kenya was born from a simple yet powerful vision: to share the breathtaking beauty and rich cultural heritage of Kenya with adventurers from around the world. What started as a small local guiding service has grown into one of Kenya's most trusted expedition companies.
              </p>
              <p>
                Our founder, Robert Ukoo Tieno, grew up in the heart of Kenya, surrounded by the majestic landscapes that would later become the backdrop for countless adventures. His deep connection to the land and its people inspired him to create experiences that go beyond typical tourism.
              </p>
              <p>
                Today, we continue to honor that original vision while embracing innovation and sustainability. Every expedition we organize is crafted with the same passion and attention to detail that has defined us from the beginning.
              </p>
            </div>
          </motion.div>

          {/* Story Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Kenya landscape"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 border border-neutral-100">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-1">16+</div>
                <div className="text-sm text-neutral-600">Years of Excellence</div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-6 border border-neutral-100">
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary-600 mb-1">5K+</div>
                <div className="text-sm text-neutral-600">Happy Travelers</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-neutral-900 mb-12 text-center">
            Our Journey Through the Years
          </h3>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 to-secondary-500 rounded-full hidden lg:block" />
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex-col lg:space-x-8`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'} text-center lg:text-left mb-6 lg:mb-0`}>
                    <div className="bg-white rounded-2xl shadow-lg p-6 border border-neutral-100">
                      <div className="text-2xl font-bold text-primary-600 mb-2">{milestone.year}</div>
                      <h4 className="text-xl font-bold text-neutral-900 mb-3">{milestone.title}</h4>
                      <p className="text-neutral-600 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Node */}
                  <div className="relative flex-shrink-0 mb-6 lg:mb-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center shadow-lg">
                      <milestone.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  {/* Spacer */}
                  <div className="flex-1 hidden lg:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
