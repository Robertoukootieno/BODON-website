'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Smartphone, 
  CreditCard, 
  Globe, 
  Building, 
  CheckCircle, 
  Clock, 
  Shield,
  DollarSign,
  Users,
  Zap
} from 'lucide-react'

const paymentMethods = [
  {
    id: 'mpesa',
    icon: Smartphone,
    title: 'M-Pesa',
    subtitle: 'Kenya\'s Leading Mobile Payment',
    description: 'The most convenient way to pay for Kenyan and East African customers',
    color: 'from-green-500 to-green-600',
    features: [
      'Instant payment confirmation',
      'No additional transaction fees',
      'Available 24/7, 365 days a year',
      'Secure PIN-based authentication',
      'Works with all Kenyan mobile networks'
    ],
    howItWorks: [
      'Select M-Pesa as your payment method',
      'Enter your M-Pesa phone number',
      'You\'ll receive an STK push notification',
      'Enter your M-Pesa PIN to confirm',
      'Receive instant booking confirmation'
    ],
    fees: 'No additional fees',
    processingTime: 'Instant',
    currencies: ['KES'],
    popular: true
  },
  {
    id: 'cards',
    icon: CreditCard,
    title: 'Credit & Debit Cards',
    subtitle: 'International Card Payments',
    description: 'Secure card payments accepted worldwide with comprehensive fraud protection',
    color: 'from-blue-500 to-blue-600',
    features: [
      'Visa, Mastercard, American Express accepted',
      'Secure 3D authentication',
      'International currency support',
      'Instant booking confirmation',
      'Comprehensive fraud protection'
    ],
    howItWorks: [
      'Select card payment option',
      'Enter your card details securely',
      'Complete 3D Secure verification if required',
      'Receive payment confirmation',
      'Get instant booking confirmation'
    ],
    fees: 'Standard card processing fees apply',
    processingTime: 'Instant',
    currencies: ['USD', 'EUR', 'GBP', 'KES'],
    popular: false
  },
  {
    id: 'paypal',
    icon: Globe,
    title: 'PayPal',
    subtitle: 'Global Secure Payment Platform',
    description: 'Trusted worldwide payment solution with buyer protection and easy refunds',
    color: 'from-purple-500 to-purple-600',
    features: [
      'PayPal buyer protection included',
      'Multiple currency support',
      'Easy refund processing',
      'No need to share card details',
      'Link to bank account or cards'
    ],
    howItWorks: [
      'Choose PayPal payment option',
      'Log in to your PayPal account',
      'Review and confirm payment',
      'Return to our site automatically',
      'Receive booking confirmation'
    ],
    fees: 'PayPal processing fees apply',
    processingTime: 'Instant',
    currencies: ['USD', 'EUR', 'GBP', 'KES'],
    popular: false
  },
  {
    id: 'bank',
    icon: Building,
    title: 'Bank Transfer',
    subtitle: 'Direct Bank-to-Bank Transfer',
    description: 'Perfect for large bookings with lower fees and secure direct transfer',
    color: 'from-teal-500 to-teal-600',
    features: [
      'Lower transaction fees',
      'Secure direct bank transfer',
      'Perfect for large group bookings',
      'Multiple currency support',
      'Detailed transaction records'
    ],
    howItWorks: [
      'Request bank transfer details',
      'Receive our banking information',
      'Make transfer from your bank',
      'Send us transfer confirmation',
      'Booking confirmed upon receipt'
    ],
    fees: 'Bank charges may apply',
    processingTime: '1-3 business days',
    currencies: ['USD', 'EUR', 'GBP', 'KES'],
    popular: false
  }
]

const paymentFeatures = [
  {
    icon: Shield,
    title: 'Bank-Level Security',
    description: '256-bit SSL encryption and PCI DSS compliance'
  },
  {
    icon: Zap,
    title: 'Instant Confirmation',
    description: 'Most payments processed and confirmed immediately'
  },
  {
    icon: DollarSign,
    title: 'Transparent Pricing',
    description: 'No hidden fees - see all costs upfront'
  },
  {
    icon: Users,
    title: 'Group Payment Options',
    description: 'Split payments available for group bookings'
  }
]

export default function PaymentMethods() {
  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Choose Your <span className="text-primary-600">Payment Method</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            We offer multiple secure payment options to make booking your Kenya adventure as convenient as possible, wherever you are in the world.
          </p>
        </motion.div>

        {/* Payment Methods */}
        <div className="space-y-8 mb-16">
          {paymentMethods.map((method, index) => (
            <motion.div
              key={method.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-white rounded-2xl shadow-lg overflow-hidden ${
                method.popular ? 'ring-2 ring-primary-200' : ''
              }`}
            >
              {method.popular && (
                <div className="absolute top-4 right-4 bg-primary-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
                {/* Method Info */}
                <div className="lg:col-span-1">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-r ${method.color} rounded-2xl flex items-center justify-center`}>
                      <method.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-neutral-900 mb-1">{method.title}</h3>
                      <p className="text-primary-600 font-medium mb-2">{method.subtitle}</p>
                      <p className="text-neutral-600 text-sm">{method.description}</p>
                    </div>
                  </div>

                  {/* Quick Info */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between py-2 border-b border-neutral-100">
                      <span className="text-neutral-600 text-sm">Processing Time:</span>
                      <span className="font-semibold text-neutral-900 text-sm">{method.processingTime}</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-neutral-100">
                      <span className="text-neutral-600 text-sm">Fees:</span>
                      <span className="font-semibold text-neutral-900 text-sm">{method.fees}</span>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <span className="text-neutral-600 text-sm">Currencies:</span>
                      <div className="flex space-x-1">
                        {method.currencies.map((currency) => (
                          <span key={currency} className="bg-neutral-100 text-neutral-700 px-2 py-1 rounded text-xs font-medium">
                            {currency}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="lg:col-span-1">
                  <h4 className="text-lg font-bold text-neutral-900 mb-4">Key Features</h4>
                  <div className="space-y-3">
                    {method.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                        <p className="text-neutral-700 text-sm">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* How It Works */}
                <div className="lg:col-span-1">
                  <h4 className="text-lg font-bold text-neutral-900 mb-4">How It Works</h4>
                  <div className="space-y-3">
                    {method.howItWorks.map((step, stepIndex) => (
                      <div key={stepIndex} className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">{stepIndex + 1}</span>
                        </div>
                        <p className="text-neutral-700 text-sm">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Payment Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-neutral-900 text-center mb-12">
            Why Our <span className="text-primary-600">Payment System</span> is Trusted
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {paymentFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-secondary-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-bold text-neutral-900 mb-2">{feature.title}</h4>
                <p className="text-neutral-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
