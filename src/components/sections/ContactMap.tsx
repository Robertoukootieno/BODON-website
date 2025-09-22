'use client'

import { motion } from 'framer-motion'
import { MapPin, Navigation, Clock, Phone } from 'lucide-react'

export default function ContactMap() {
  return (
    <section id="map" className="section-padding bg-neutral-50">
      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Visit Our <span className="text-primary-600">Nairobi Office</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Located in the heart of Nairobi, our office is your gateway to Kenya's incredible adventures. Schedule a visit to plan your perfect expedition.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Map Container */}
              <div className="relative h-96 bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-primary-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">Interactive Map</h3>
                  <p className="text-neutral-600 mb-4">
                    Our office is located in central Nairobi, easily accessible from all major areas of the city.
                  </p>
                  <div className="space-y-2 text-sm text-neutral-500">
                    <p><strong>Address:</strong> P.O Box 26872, G.P.O Nairobi, Kenya</p>
                    <p><strong>Coordinates:</strong> -1.2921° S, 36.8219° E</p>
                  </div>
                </div>
              </div>

              {/* Map Footer */}
              <div className="p-6 bg-white border-t border-neutral-100">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">Getting Here</h4>
                    <p className="text-sm text-neutral-600">
                      Easily accessible by matatu, taxi, or private vehicle. Parking available on-site.
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <button className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm">
                      <Navigation className="w-4 h-4" />
                      <span>Get Directions</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Office Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Office Details */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-neutral-900 mb-6">Office Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">Address</h4>
                    <p className="text-neutral-600 text-sm">
                      P.O Box 26872, G.P.O<br />
                      Nairobi, Kenya
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">Phone</h4>
                    <p className="text-neutral-600 text-sm">
                      <a href="tel:+254758270982" className="hover:text-primary-600 transition-colors">
                        +254-758270982
                      </a>
                    </p>
                    <p className="text-neutral-500 text-xs">WhatsApp available</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">Office Hours</h4>
                    <div className="text-neutral-600 text-sm space-y-1">
                      <p>Mon - Fri: 6:00 AM - 10:00 PM</p>
                      <p>Saturday: 7:00 AM - 9:00 PM</p>
                      <p>Sunday: 8:00 AM - 8:00 PM</p>
                    </div>
                    <p className="text-primary-600 text-xs font-medium mt-2">
                      Emergency support: 24/7
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visit Guidelines */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-neutral-900 mb-4">Planning Your Visit</h3>
              
              <div className="space-y-4">
                <div className="p-4 bg-primary-50 rounded-lg">
                  <h4 className="font-semibold text-primary-900 mb-2">Appointment Recommended</h4>
                  <p className="text-primary-800 text-sm">
                    While walk-ins are welcome, scheduling an appointment ensures our team can give you dedicated attention for planning your adventure.
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-neutral-900">What to Bring:</h4>
                  <ul className="text-sm text-neutral-600 space-y-1">
                    <li>• Valid passport or ID</li>
                    <li>• Travel dates and preferences</li>
                    <li>• Budget considerations</li>
                    <li>• Any special requirements</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-neutral-900">Services Available:</h4>
                  <ul className="text-sm text-neutral-600 space-y-1">
                    <li>• Personalized itinerary planning</li>
                    <li>• Safari and tour bookings</li>
                    <li>• Car rental arrangements</li>
                    <li>• Travel documentation assistance</li>
                    <li>• Equipment recommendations</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Transportation */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-neutral-900 mb-4">Getting to Our Office</h3>
              
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-1">From JKIA Airport</h4>
                  <p className="text-sm text-neutral-600">
                    30-45 minutes by taxi or Uber. We can arrange airport pickup for consultations.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-neutral-900 mb-1">Public Transport</h4>
                  <p className="text-sm text-neutral-600">
                    Accessible via matatu routes. Ask for directions to our specific location when you call.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-neutral-900 mb-1">Parking</h4>
                  <p className="text-sm text-neutral-600">
                    Secure parking available on-site for visitors arriving by private vehicle.
                  </p>
                </div>
              </div>

              <div className="mt-4 p-3 bg-secondary-50 rounded-lg">
                <p className="text-secondary-800 text-sm">
                  <strong>Need directions?</strong> Call us when you're nearby and we'll guide you to our exact location.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
