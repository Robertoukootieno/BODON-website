'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, CreditCard } from 'lucide-react'

const paymentFAQs = [
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept M-Pesa (most popular for Kenyan customers), Visa/Mastercard/American Express credit and debit cards, PayPal, and bank transfers. All payment methods are secure and processed through encrypted channels.'
  },
  {
    question: 'Is it safe to pay online with my credit card?',
    answer: 'Absolutely! We use 256-bit SSL encryption and are PCI DSS compliant. All card payments go through 3D Secure authentication with your bank. We never store your card details on our servers, and all transactions are monitored for fraud.'
  },
  {
    question: 'How much deposit do I need to pay?',
    answer: 'We require a 30% deposit to confirm your booking, with the balance due 30 days before your travel date. For bookings made within 30 days of travel, full payment is required at the time of booking.'
  },
  {
    question: 'Can I pay in installments?',
    answer: 'Yes! For bookings over $1,000, we offer flexible payment plans. You can pay the 30% deposit to secure your booking, then pay the balance in installments leading up to your trip. Contact us to arrange a payment schedule.'
  },
  {
    question: 'What currencies do you accept?',
    answer: 'We accept payments in USD (US Dollars), KES (Kenyan Shillings), EUR, and GBP. All prices are displayed in USD by default. Kenyan customers can pay in KES or USD. Exchange rates are updated daily for accurate conversions.'
  },
  {
    question: 'Are there any additional fees for payments?',
    answer: 'M-Pesa payments have no additional fees. Credit card payments may have standard processing fees (typically 2-3%). PayPal charges their standard fees. Bank transfers may incur bank charges. All fees are clearly displayed before you complete payment.'
  },
  {
    question: 'How quickly is my booking confirmed after payment?',
    answer: 'M-Pesa and card payments are confirmed instantly. PayPal payments are usually instant but may take a few minutes. Bank transfers take 1-3 business days to clear. You\'ll receive email confirmation as soon as payment is verified.'
  },
  {
    question: 'Can I get a refund if I need to cancel?',
    answer: 'Yes, refunds are available according to our cancellation policy. Cancellations 60+ days before travel incur a 10% fee, 30-59 days (25% fee), 15-29 days (50% fee), less than 15 days (75% fee). Refunds are processed to the original payment method.'
  },
  {
    question: 'What happens if my payment fails?',
    answer: 'If a payment fails, you\'ll receive an immediate notification. Common causes include insufficient funds, expired cards, or network issues. You can retry payment immediately or contact us for assistance. Your booking is held for 24 hours while you resolve payment issues.'
  },
  {
    question: 'Can someone else pay for my booking?',
    answer: 'Yes, third-party payments are accepted. The person making payment should include the traveler\'s name and booking reference. For security, we may request additional verification for large third-party payments.'
  },
  {
    question: 'Do you offer group payment options?',
    answer: 'Yes! For group bookings, we can split payments among group members or accept payment from a group leader. We can also set up individual payment links for each group member to pay their portion separately.'
  },
  {
    question: 'What if I\'m having trouble with M-Pesa payment?',
    answer: 'Common M-Pesa issues include insufficient balance, daily limit exceeded, or network problems. Ensure you have sufficient balance, check your daily transaction limit, and try again. If problems persist, contact your mobile network provider or our support team.'
  },
  {
    question: 'Can I change my payment method after booking?',
    answer: 'Yes, you can change payment methods for future payments (like balance payments). However, refunds must go back to the original payment method for security reasons. Contact us if you need to modify payment arrangements.'
  },
  {
    question: 'How do I know my payment went through?',
    answer: 'You\'ll receive immediate confirmation for successful payments via SMS (for M-Pesa) and email. Your booking status will update to "Confirmed" and you\'ll receive a detailed booking confirmation with payment receipt within 24 hours.'
  }
]

export default function PaymentFAQ() {
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
            <CreditCard className="w-6 h-6 text-primary-600" />
            <span className="text-primary-600 font-medium">Payment Questions</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Payment <span className="text-primary-600">FAQ</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Get answers to common questions about payments, security, refunds, and our booking process.
          </p>
        </motion.div>

        {/* FAQ Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {paymentFAQs.map((faq, index) => {
              const isOpen = openQuestions.includes(index)

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.03 }}
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
            <h3 className="text-2xl font-bold mb-4">Need Payment Assistance?</h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Our payment specialists are available to help with any payment questions or issues. We're here to make your booking process as smooth as possible.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="tel:+254758270982"
                className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-neutral-50 transition-colors"
              >
                Call +254-758270982
              </a>
              <a
                href="https://wa.me/254758270982"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                WhatsApp Support
              </a>
            </div>
            <div className="mt-4 text-primary-100 text-sm">
              Available 6AM - 10PM EAT, 7 days a week
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
