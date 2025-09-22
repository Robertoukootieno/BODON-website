'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Phone, 
  MessageCircle, 
  Mail, 
  Clock, 
  Shield, 
  CreditCard,
  Smartphone,
  HelpCircle,
  CheckCircle,
  AlertCircle
} from 'lucide-react'
import Button from '@/components/ui/Button'

const supportOptions = [
  {
    icon: Phone,
    title: 'Payment Hotline',
    description: 'Immediate assistance with payment issues',
    contact: '+254-758270982',
    availability: '6AM - 10PM EAT (Mon-Sun)',
    response: 'Immediate',
    action: 'tel:+254758270982',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp Support',
    description: 'Quick help via WhatsApp messaging',
    contact: '+254-758270982',
    availability: '6AM - 10PM EAT (Mon-Sun)',
    response: 'Within 15 minutes',
    action: 'https://wa.me/254758270982',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Mail,
    title: 'Email Support',
    description: 'Detailed payment assistance and documentation',
    contact: 'payments@bodonexpedition.com',
    availability: '24/7 (responses during business hours)',
    response: 'Within 2 hours',
    action: 'mailto:payments@bodonexpedition.com',
    color: 'from-blue-500 to-blue-600'
  }
]

const commonIssues = [
  {
    icon: CreditCard,
    title: 'Card Payment Failed',
    description: 'Your card payment was declined or failed to process',
    solutions: [
      'Check if your card has sufficient funds',
      'Verify card details are entered correctly',
      'Ensure your card is enabled for online payments',
      'Try a different card or payment method',
      'Contact your bank to authorize the transaction'
    ]
  },
  {
    icon: Smartphone,
    title: 'M-Pesa Issues',
    description: 'Problems with M-Pesa payment processing',
    solutions: [
      'Ensure you have sufficient M-Pesa balance',
      'Check your daily transaction limit',
      'Verify your phone number is correct',
      'Try again after a few minutes',
      'Contact Safaricom customer service'
    ]
  },
  {
    icon: HelpCircle,
    title: 'Payment Not Confirmed',
    description: 'Payment went through but booking not confirmed',
    solutions: [
      'Check your email for confirmation (including spam folder)',
      'Wait up to 30 minutes for processing',
      'Contact us with your transaction reference',
      'Provide screenshot of payment confirmation',
      'We\'ll manually verify and confirm your booking'
    ]
  },
  {
    icon: AlertCircle,
    title: 'Refund Questions',
    description: 'Need help with refund process or timing',
    solutions: [
      'Review our cancellation policy terms',
      'Submit refund request through proper channels',
      'Provide original booking reference number',
      'Allow 5-10 business days for processing',
      'Contact us if refund is delayed beyond normal timeframe'
    ]
  }
]

const emergencyContacts = [
  {
    situation: 'Payment Failed During Booking',
    action: 'Call immediately',
    contact: '+254-758270982',
    note: 'We can hold your booking while resolving payment issues'
  },
  {
    situation: 'Unauthorized Transaction',
    action: 'Contact us and your bank',
    contact: 'payments@bodonexpedition.com',
    note: 'Report immediately for fastest resolution'
  },
  {
    situation: 'Need Immediate Refund',
    action: 'Call during business hours',
    contact: '+254-758270982',
    note: 'Emergency refunds can be expedited in special circumstances'
  }
]

export default function PaymentSupport() {
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
            Payment <span className="text-primary-600">Support Center</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Need help with payments? Our dedicated payment support team is here to assist you with any payment-related questions or issues.
          </p>
        </motion.div>

        {/* Support Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {supportOptions.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-neutral-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-center">
                <div className={`w-16 h-16 bg-gradient-to-r ${option.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <option.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">{option.title}</h3>
                <p className="text-neutral-600 mb-4">{option.description}</p>
                
                <div className="space-y-2 mb-6">
                  <div className="text-sm text-neutral-500">Contact: <span className="font-semibold text-neutral-900">{option.contact}</span></div>
                  <div className="text-sm text-neutral-500">Available: <span className="text-neutral-700">{option.availability}</span></div>
                  <div className="text-sm text-neutral-500">Response: <span className="text-primary-600 font-medium">{option.response}</span></div>
                </div>

                <Button
                  as="a"
                  href={option.action}
                  target={option.action.startsWith('http') ? '_blank' : undefined}
                  rel={option.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="w-full"
                  size="sm"
                >
                  Contact Now
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Common Issues */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-neutral-900 text-center mb-12">
            Common <span className="text-primary-600">Payment Issues</span> & Solutions
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {commonIssues.map((issue, index) => (
              <motion.div
                key={issue.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-6 border border-neutral-100"
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center">
                    <issue.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-neutral-900 mb-1">{issue.title}</h4>
                    <p className="text-neutral-600 text-sm">{issue.description}</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h5 className="font-semibold text-neutral-900 text-sm mb-3">Try these solutions:</h5>
                  {issue.solutions.map((solution, solutionIndex) => (
                    <div key={solutionIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-4 h-4 text-primary-600 mt-0.5 flex-shrink-0" />
                      <p className="text-neutral-700 text-sm">{solution}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Emergency Contacts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8"
        >
          <div className="text-center mb-8">
            <AlertCircle className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-neutral-900 mb-2">
              Emergency <span className="text-red-600">Payment Support</span>
            </h3>
            <p className="text-neutral-600">
              For urgent payment issues that need immediate attention, use these emergency contacts:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {emergencyContacts.map((emergency, index) => (
              <motion.div
                key={emergency.situation}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 text-center"
              >
                <h4 className="font-bold text-neutral-900 mb-2">{emergency.situation}</h4>
                <p className="text-sm text-neutral-600 mb-3">{emergency.action}</p>
                <div className="text-primary-600 font-semibold mb-2">{emergency.contact}</div>
                <p className="text-xs text-neutral-500">{emergency.note}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-secondary-500 rounded-2xl p-8 text-white">
            <Shield className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Your Payment Security is Guaranteed</h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              We're committed to providing secure, reliable payment processing. If you experience any issues, our support team will resolve them quickly and professionally.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button 
                as="a" 
                href="tel:+254758270982"
                variant="secondary"
                size="lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Support Now
              </Button>
              <Button 
                as="a" 
                href="/contact"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
                size="lg"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Support
              </Button>
            </div>
            <div className="mt-4 flex items-center justify-center space-x-2 text-primary-100 text-sm">
              <Clock className="w-4 h-4" />
              <span>Available 6AM - 10PM EAT, 7 days a week</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
