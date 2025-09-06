'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Phone, Mail } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function CallToAction() {
  return (
    <section className="relative section-padding overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80"
          alt="Kenya Sunset"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-secondary-900/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-max">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready for Your
              <span className="block text-secondary-400">
                Kenyan Adventure?
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl mb-8 text-neutral-200 leading-relaxed">
              Join thousands of satisfied travelers who have discovered Kenya's magic with us. Your unforgettable journey starts here.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/tours">
                <Button 
                  size="xl" 
                  variant="secondary"
                  rightIcon={<ArrowRight className="w-5 h-5" />}
                  className="min-w-[200px]"
                >
                  Browse Tours
                </Button>
              </Link>
              
              <Link href="/contact">
                <Button 
                  size="xl" 
                  variant="outline"
                  className="min-w-[200px] border-white text-white hover:bg-white hover:text-primary-600"
                >
                  Plan Custom Trip
                </Button>
              </Link>
            </div>
            
            {/* Contact info */}
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 text-neutral-200">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-secondary-400" />
                <span>+254-XXX-XXXXXX</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-secondary-400" />
                <span>info@bodonexpedition.com</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-secondary-400/20 rounded-full blur-xl" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-primary-400/20 rounded-full blur-xl" />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent-400/20 rounded-full blur-xl" />
    </section>
  )
}
