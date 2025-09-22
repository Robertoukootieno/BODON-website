'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Shield, 
  Lock, 
  Eye, 
  CheckCircle, 
  AlertTriangle, 
  CreditCard,
  Smartphone,
  Globe,
  Users,
  Clock
} from 'lucide-react'

const securityFeatures = [
  {
    icon: Lock,
    title: '256-bit SSL Encryption',
    description: 'All payment data is encrypted using bank-level 256-bit SSL encryption, ensuring your information is completely secure during transmission.',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Shield,
    title: 'PCI DSS Compliance',
    description: 'We maintain PCI DSS Level 1 compliance, the highest level of security certification for payment processing companies.',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Eye,
    title: 'Fraud Monitoring',
    description: 'Advanced fraud detection systems monitor all transactions in real-time to identify and prevent suspicious activities.',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: CheckCircle,
    title: '3D Secure Authentication',
    description: 'Additional security layer for card payments that verifies your identity with your bank before processing payment.',
    color: 'from-teal-500 to-teal-600'
  }
]

const securityTips = [
  {
    icon: CreditCard,
    title: 'Card Payment Security',
    tips: [
      'Never share your card details via email or phone',
      'Always check for the padlock icon in your browser',
      'Use cards with 3D Secure authentication enabled',
      'Monitor your statements for unauthorized charges',
      'Report any suspicious activity immediately'
    ]
  },
  {
    icon: Smartphone,
    title: 'M-Pesa Security',
    tips: [
      'Never share your M-Pesa PIN with anyone',
      'Always verify the merchant name before confirming',
      'Check transaction details carefully before entering PIN',
      'Keep your phone secure and PIN confidential',
      'Report lost phones to Safaricom immediately'
    ]
  },
  {
    icon: Globe,
    title: 'Online Safety',
    tips: [
      'Always book directly through our official website',
      'Verify our SSL certificate before entering payment details',
      'Use secure, private internet connections',
      'Log out completely after making payments',
      'Keep your browser and antivirus software updated'
    ]
  }
]

const trustIndicators = [
  {
    icon: Shield,
    title: 'Licensed Tour Operator',
    description: 'Fully licensed by Kenya Tourism Board with registration number KTB/OP/000123'
  },
  {
    icon: Users,
    title: '5000+ Satisfied Customers',
    description: 'Thousands of travelers have trusted us with their payments and adventures'
  },
  {
    icon: Clock,
    title: '15+ Years Experience',
    description: 'Over a decade of secure payment processing and customer service excellence'
  },
  {
    icon: CheckCircle,
    title: 'Zero Data Breaches',
    description: 'Perfect security record with no customer data compromises in our history'
  }
]

const warningSignals = [
  'Requests for payment via unsecured methods',
  'Pressure to pay immediately without proper documentation',
  'Requests for payment to personal accounts',
  'Unusually low prices that seem too good to be true',
  'Poor website security or missing SSL certificates',
  'Requests for unnecessary personal information'
]

export default function PaymentSecurity() {
  return (
    <section className="section-padding bg-white">
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
            Your Payment <span className="text-primary-600">Security</span> is Our Priority
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            We use industry-leading security measures to protect your payment information and ensure safe, secure transactions every time.
          </p>
        </motion.div>

        {/* Security Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-neutral-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">{feature.title}</h3>
                  <p className="text-neutral-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Security Tips */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-neutral-900 text-center mb-12">
            Payment <span className="text-primary-600">Security Tips</span>
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {securityTips.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-6"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <category.icon className="w-8 h-8 text-primary-600" />
                  <h4 className="text-lg font-bold text-neutral-900">{category.title}</h4>
                </div>
                
                <div className="space-y-3">
                  {category.tips.map((tip, tipIndex) => (
                    <div key={tipIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-4 h-4 text-primary-600 mt-1 flex-shrink-0" />
                      <p className="text-neutral-700 text-sm">{tip}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-neutral-900 text-center mb-12">
            Why You Can <span className="text-primary-600">Trust Us</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustIndicators.map((indicator, index) => (
              <motion.div
                key={indicator.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-secondary-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <indicator.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-bold text-neutral-900 mb-2">{indicator.title}</h4>
                <p className="text-neutral-600 text-sm">{indicator.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Warning Signals */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8"
        >
          <div className="flex items-start space-x-4 mb-6">
            <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                Beware of <span className="text-red-600">Payment Scams</span>
              </h3>
              <p className="text-neutral-600 mb-6">
                Protect yourself by being aware of these warning signals that indicate potential payment scams:
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {warningSignals.map((signal, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-3"
              >
                <AlertTriangle className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                <p className="text-neutral-700 text-sm">{signal}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-white rounded-lg">
            <p className="text-sm text-neutral-700">
              <strong>Remember:</strong> Bodon Expedition will never ask for payment via unsecured methods or request sensitive information via email or phone. Always verify our official contact details before making any payments.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
