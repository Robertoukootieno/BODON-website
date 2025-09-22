'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CreditCard, Shield, CheckCircle, Smartphone, Globe, Lock } from 'lucide-react'

export default function PaymentHelpHero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-black/5"></div>
      </div>

      <div className="relative container-max section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <CreditCard className="w-6 h-6 text-secondary-400" />
              <span className="text-secondary-400 font-medium">Secure Payments</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Safe & Secure
              <span className="block text-secondary-400">Payment Options</span>
            </h1>
            
            <p className="text-xl text-neutral-200 mb-8 leading-relaxed">
              Pay for your Kenya adventure with confidence using our multiple secure payment methods. From local M-Pesa to international credit cards, we've got you covered.
            </p>

            {/* Payment Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary-400 mb-1">100%</div>
                <div className="text-sm text-neutral-300">Secure Transactions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary-400 mb-1">5+</div>
                <div className="text-sm text-neutral-300">Payment Methods</div>
              </div>
            </div>

            <div className="flex items-center space-x-2 text-neutral-300">
              <Shield className="w-5 h-5 text-secondary-400" />
              <span>SSL encrypted and PCI compliant payment processing</span>
            </div>
          </motion.div>

          {/* Payment Methods Preview */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            {[
              {
                icon: Smartphone,
                title: 'M-Pesa',
                description: 'Kenya\'s most popular mobile payment',
                features: ['Instant confirmation', 'No transaction fees', 'Available 24/7'],
                popular: true
              },
              {
                icon: CreditCard,
                title: 'Credit Cards',
                description: 'Visa, Mastercard, American Express',
                features: ['International accepted', 'Secure processing', 'Instant booking'],
                popular: false
              },
              {
                icon: Globe,
                title: 'PayPal',
                description: 'Global secure payment platform',
                features: ['Buyer protection', 'Multiple currencies', 'Easy refunds'],
                popular: false
              },
              {
                icon: CheckCircle,
                title: 'Bank Transfer',
                description: 'Direct bank-to-bank transfer',
                features: ['Lower fees', 'Secure transfer', 'Perfect for large amounts'],
                popular: false
              }
            ].map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/15 transition-all duration-300 ${
                  method.popular ? 'ring-2 ring-secondary-400' : ''
                }`}
              >
                {method.popular && (
                  <div className="absolute -top-2 -right-2 bg-secondary-400 text-white text-xs font-bold px-2 py-1 rounded-full">
                    Popular
                  </div>
                )}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <method.icon className="w-8 h-8 text-secondary-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white mb-1">{method.title}</h3>
                    <p className="text-sm text-neutral-300 mb-2">{method.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {method.features.map((feature, featureIndex) => (
                        <span 
                          key={featureIndex}
                          className="text-xs bg-white/20 text-neutral-200 px-2 py-1 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Security Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 inline-block">
            <div className="flex items-center justify-center space-x-6">
              <div className="flex items-center space-x-2">
                <Lock className="w-5 h-5 text-secondary-400" />
                <span className="text-neutral-300">256-bit SSL Encryption</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-neutral-600"></div>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-secondary-400" />
                <span className="text-neutral-300">PCI DSS Compliant</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-neutral-600"></div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-secondary-400" />
                <span className="text-neutral-300">Fraud Protection</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
