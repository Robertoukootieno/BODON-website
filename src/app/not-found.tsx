'use client'

import Link from 'next/link'
import { ArrowLeft, Home } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-primary-600 opacity-10 mb-4">404</h1>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-neutral-600 mb-8">
            Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
          </p>
        </div>

        {/* Suggestions */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h3 className="font-semibold text-neutral-900 mb-4">What you can do:</h3>
          <ul className="space-y-2 text-sm text-neutral-600 text-left">
            <li className="flex items-center space-x-2">
              <span className="text-primary-600">•</span>
              <span>Check the URL for typos</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-primary-600">•</span>
              <span>Go back to the previous page</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-primary-600">•</span>
              <span>Visit our homepage</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-primary-600">•</span>
              <span>Contact our support team</span>
            </li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button className="w-full sm:w-auto flex items-center justify-center space-x-2">
              <Home className="w-4 h-4" />
              <span>Go Home</span>
            </Button>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="w-full sm:w-auto px-6 py-3 border-2 border-neutral-300 text-neutral-700 font-medium rounded-lg hover:border-neutral-400 hover:bg-neutral-50 transition-colors duration-200 flex items-center justify-center space-x-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Go Back</span>
          </button>
        </div>

        {/* Help Links */}
        <div className="mt-12 pt-8 border-t border-neutral-200">
          <p className="text-sm text-neutral-600 mb-4">Need help?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
            <Link href="/contact" className="text-primary-600 hover:underline font-medium">
              Contact Us
            </Link>
            <span className="text-neutral-300 hidden sm:inline">•</span>
            <Link href="/faq" className="text-primary-600 hover:underline font-medium">
              FAQ
            </Link>
            <span className="text-neutral-300 hidden sm:inline">•</span>
            <Link href="/help/booking" className="text-primary-600 hover:underline font-medium">
              Booking Help
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

