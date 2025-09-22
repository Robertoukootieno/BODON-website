'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { CreditCard, Smartphone, DollarSign, Shield } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { clsx } from 'clsx'

export type PaymentMethod = 'stripe' | 'mpesa' | 'paypal'

interface PaymentMethodsProps {
  selectedMethod: PaymentMethod | null
  onMethodSelect: (method: PaymentMethod) => void
  amount: number
  currency?: string
  onProceed: () => void
  loading?: boolean
}

const paymentMethods = [
  {
    id: 'stripe' as PaymentMethod,
    name: 'Credit/Debit Card',
    description: 'Visa, Mastercard, American Express',
    icon: CreditCard,
    color: 'bg-blue-500',
    features: ['Secure encryption', 'Instant processing', 'International cards accepted'],
  },
  {
    id: 'mpesa' as PaymentMethod,
    name: 'M-Pesa',
    description: 'Mobile money payment',
    icon: Smartphone,
    color: 'bg-green-500',
    features: ['Instant payment', 'No card required', 'Available 24/7'],
  },
  {
    id: 'paypal' as PaymentMethod,
    name: 'PayPal',
    description: 'Pay with your PayPal account',
    icon: DollarSign,
    color: 'bg-yellow-500',
    features: ['Buyer protection', 'No card details shared', 'Global acceptance'],
  },
]

export default function PaymentMethods({
  selectedMethod,
  onMethodSelect,
  amount,
  currency = 'KES',
  onProceed,
  loading = false,
}: PaymentMethodsProps) {
  const formatAmount = (amount: number, currency: string) => {
    if (currency === 'KES') {
      return `KES ${amount.toLocaleString()}`
    }
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
    }).format(amount)
  }

  return (
    <div className="space-y-6">
      {/* Payment amount summary */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-neutral-900">Total Amount</h3>
              <p className="text-sm text-neutral-600">Secure payment processing</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-primary-600">
                {formatAmount(amount, currency)}
              </div>
              <div className="flex items-center text-sm text-neutral-500">
                <Shield className="w-4 h-4 mr-1" />
                SSL Encrypted
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Payment methods */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-neutral-900">Choose Payment Method</h3>
        
        <div className="grid gap-4">
          {paymentMethods.map((method, index) => (
            <motion.div
              key={method.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card
                className={clsx(
                  'cursor-pointer transition-all duration-200 hover:shadow-md',
                  selectedMethod === method.id
                    ? 'ring-2 ring-primary-500 border-primary-200'
                    : 'hover:border-neutral-300'
                )}
                onClick={() => onMethodSelect(method.id)}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={clsx(
                      'w-12 h-12 rounded-lg flex items-center justify-center text-white',
                      method.color
                    )}>
                      <method.icon className="w-6 h-6" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-neutral-900">{method.name}</h4>
                        <div className={clsx(
                          'w-5 h-5 rounded-full border-2 transition-colors duration-200',
                          selectedMethod === method.id
                            ? 'border-primary-500 bg-primary-500'
                            : 'border-neutral-300'
                        )}>
                          {selectedMethod === method.id && (
                            <div className="w-full h-full rounded-full bg-white scale-50" />
                          )}
                        </div>
                      </div>
                      
                      <p className="text-sm text-neutral-600 mb-3">{method.description}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {method.features.map((feature) => (
                          <span
                            key={feature}
                            className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-neutral-100 text-neutral-600"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Proceed button */}
      <div className="pt-6 border-t border-neutral-200">
        <Button
          size="lg"
          fullWidth
          disabled={!selectedMethod || loading}
          loading={loading}
          onClick={onProceed}
        >
          {loading ? 'Processing...' : `Pay ${formatAmount(amount, currency)}`}
        </Button>
        
        <p className="text-xs text-neutral-500 text-center mt-3">
          Your payment information is secure and encrypted. We never store your payment details.
        </p>
      </div>
    </div>
  )
}
