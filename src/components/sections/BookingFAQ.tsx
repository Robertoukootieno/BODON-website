'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, HelpCircle } from 'lucide-react'

const bookingFAQs = [
  {
    question: 'How far in advance should I book?',
    answer: 'We recommend booking 2-3 months in advance, especially for peak seasons (July-October for migration, December-January for dry season). However, we can often accommodate last-minute bookings based on availability.'
  },
  {
    question: 'Can I modify my booking after confirmation?',
    answer: 'Yes, modifications are possible subject to availability. Changes made 30+ days before travel are usually free of charge. Changes within 30 days may incur fees depending on the nature of the modification and supplier policies.'
  },
  {
    question: 'What happens if I need to cancel?',
    answer: 'Our cancellation policy varies by timing: 60+ days before travel (10% fee), 30-59 days (25% fee), 15-29 days (50% fee), less than 15 days (75% fee). We strongly recommend travel insurance to protect against unforeseen circumstances.'
  },
  {
    question: 'Do you offer group discounts?',
    answer: 'Yes! We offer attractive discounts for groups of 6 or more people. Group rates vary by tour type and season. Contact us for a customized group quote - the larger the group, the better the savings.'
  },
  {
    question: 'Can I book just accommodation or transport separately?',
    answer: 'Absolutely! While we specialize in complete packages, we can arrange accommodation-only or transport-only bookings. This is perfect if you want to customize your itinerary or have specific preferences.'
  },
  {
    question: 'What is included in the tour price?',
    answer: 'Tour inclusions vary by package but typically include accommodation, meals as specified, park fees, professional guide, game drives, and transport. Exclusions usually include international flights, visas, travel insurance, and personal expenses.'
  },
  {
    question: 'How do I know my booking is confirmed?',
    answer: 'You\'ll receive an email confirmation within 24 hours of payment, including your booking reference number, detailed itinerary, and our contact information. We also send pre-travel information 7 days before your trip.'
  },
  {
    question: 'Can I extend my stay or add extra activities?',
    answer: 'Yes! We can help extend your stay or add activities like cultural visits, additional game drives, or beach extensions. It\'s easier to arrange extensions before travel, but we can also assist during your trip.'
  },
  {
    question: 'What if the weather affects my safari?',
    answer: 'Kenya offers excellent wildlife viewing year-round. If weather conditions affect specific activities, our experienced guides will suggest alternative activities or locations. We have contingency plans for all weather scenarios.'
  },
  {
    question: 'Do you provide travel insurance?',
    answer: 'We don\'t sell insurance directly but strongly recommend comprehensive travel insurance covering medical expenses, trip cancellation, and evacuation. We can recommend trusted insurance providers that specialize in African travel.'
  }
]

export default function BookingFAQ() {
  const [openQuestions, setOpenQuestions] = useState<number[]>([])

  const toggleQuestion = (index: number) => {
    setOpenQuestions(prev => 
      prev.includes(index) 
        ? prev.filter(q => q !== index)
        : [...prev, index]
    )
  }

  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <HelpCircle className="w-6 h-6 text-primary-600" />
            <span className="text-primary-600 font-medium">Booking Questions</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Frequently Asked <span className="text-primary-600">Booking Questions</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Get quick answers to common questions about our booking process, policies, and what to expect.
          </p>
        </motion.div>

        {/* FAQ Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {bookingFAQs.map((faq, index) => {
              const isOpen = openQuestions.includes(index)

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-sm border border-neutral-200 overflow-hidden"
                >
                  <button
                    onClick={() => toggleQuestion(index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-neutral-50 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-neutral-900 pr-4">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0">
                      {isOpen ? (
                        <Minus className="w-5 h-5 text-primary-600" />
                      ) : (
                        <Plus className="w-5 h-5 text-neutral-400" />
                      )}
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6">
                          <div className="border-t border-neutral-100 pt-4">
                            <p className="text-neutral-600 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-secondary-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Our booking specialists are here to help you plan the perfect Kenya adventure. Get personalized assistance and expert advice.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="tel:+254758270982"
                className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-neutral-50 transition-colors"
              >
                Call +254-758270982
              </a>
              <a
                href="/contact"
                className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Contact Form
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
