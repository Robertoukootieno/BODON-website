'use client'

import { motion } from 'framer-motion'
import { Calendar, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Button from '@/components/ui/Button'

interface LegalLayoutProps {
  title: string
  lastUpdated: string
  description: string
  children: React.ReactNode
}

export default function LegalLayout({ title, lastUpdated, description, children }: LegalLayoutProps) {
  return (
    <main className="min-h-screen bg-neutral-50">
      {/* Header */}
      <div className="bg-white border-b border-neutral-200">
        <div className="container-max py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/" className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 mb-6">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
            
            <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              {title}
            </h1>
            
            <p className="text-lg text-neutral-600 mb-4 max-w-3xl">
              {description}
            </p>
            
            <div className="flex items-center space-x-2 text-sm text-neutral-500">
              <Calendar className="w-4 h-4" />
              <span>Last updated: {lastUpdated}</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="container-max py-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl shadow-lg p-8 md:p-12"
          >
            <div className="prose prose-neutral max-w-none">
              {children}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 bg-white rounded-2xl shadow-lg p-8"
          >
            <h3 className="text-xl font-bold text-neutral-900 mb-6">Related Legal Documents</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link href="/privacy">
                <Button 
                  variant="outline" 
                  className="w-full justify-start text-left h-auto p-4"
                >
                  <div>
                    <div className="font-semibold">Privacy Policy</div>
                    <div className="text-sm text-neutral-500 mt-1">Data protection & privacy</div>
                  </div>
                </Button>
              </Link>
              
              <Link href="/terms">
                <Button 
                  variant="outline" 
                  className="w-full justify-start text-left h-auto p-4"
                >
                  <div>
                    <div className="font-semibold">Terms of Service</div>
                    <div className="text-sm text-neutral-500 mt-1">Service terms & conditions</div>
                  </div>
                </Button>
              </Link>
              
              <Link href="/cookies">
                <Button 
                  variant="outline" 
                  className="w-full justify-start text-left h-auto p-4"
                >
                  <div>
                    <div className="font-semibold">Cookie Policy</div>
                    <div className="text-sm text-neutral-500 mt-1">Cookie usage & tracking</div>
                  </div>
                </Button>
              </Link>
              
              <Link href="/refund">
                <Button 
                  variant="outline" 
                  className="w-full justify-start text-left h-auto p-4"
                >
                  <div>
                    <div className="font-semibold">Refund Policy</div>
                    <div className="text-sm text-neutral-500 mt-1">Cancellation & refunds</div>
                  </div>
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8"
          >
            <div className="text-center">
              <h3 className="text-xl font-bold text-neutral-900 mb-4">
                Have Questions About Our Policies?
              </h3>
              <p className="text-neutral-600 mb-6">
                Our team is here to help clarify any questions you may have about our legal policies and terms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="w-full sm:w-auto">
                    Contact Us
                  </Button>
                </Link>
                <Link href="mailto:legal@bodonexpedition.com">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    Email Legal Team
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
