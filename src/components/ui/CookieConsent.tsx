'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cookie, X, Settings } from 'lucide-react'
import Button from '@/components/ui/Button'
import Link from 'next/link'

interface CookiePreferences {
  essential: boolean
  analytics: boolean
  marketing: boolean
  functional: boolean
}

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true, // Always true, cannot be disabled
    analytics: false,
    marketing: false,
    functional: false
  })

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent')
    if (!cookieConsent) {
      // Show banner after a short delay
      const timer = setTimeout(() => {
        setShowBanner(true)
      }, 2000)
      return () => clearTimeout(timer)
    } else {
      // Load saved preferences
      try {
        const savedPreferences = JSON.parse(cookieConsent)
        setPreferences(savedPreferences)
      } catch (error) {
        console.error('Error parsing cookie preferences:', error)
      }
    }
  }, [])

  const handleAcceptAll = () => {
    const allAccepted = {
      essential: true,
      analytics: true,
      marketing: true,
      functional: true
    }
    setPreferences(allAccepted)
    localStorage.setItem('cookieConsent', JSON.stringify(allAccepted))
    setShowBanner(false)
    setShowSettings(false)
    
    // Initialize analytics and other services here
    initializeServices(allAccepted)
  }

  const handleAcceptSelected = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(preferences))
    setShowBanner(false)
    setShowSettings(false)
    
    // Initialize only selected services
    initializeServices(preferences)
  }

  const handleRejectAll = () => {
    const essentialOnly = {
      essential: true,
      analytics: false,
      marketing: false,
      functional: false
    }
    setPreferences(essentialOnly)
    localStorage.setItem('cookieConsent', JSON.stringify(essentialOnly))
    setShowBanner(false)
    setShowSettings(false)
    
    // Initialize only essential services
    initializeServices(essentialOnly)
  }

  const initializeServices = (prefs: CookiePreferences) => {
    // Initialize Google Analytics if analytics is enabled
    if (prefs.analytics && typeof window !== 'undefined') {
      // Add Google Analytics initialization code here
      console.log('Analytics enabled')
    }
    
    // Initialize marketing tools if marketing is enabled
    if (prefs.marketing && typeof window !== 'undefined') {
      // Add marketing tools initialization code here
      console.log('Marketing cookies enabled')
    }
    
    // Initialize functional cookies if enabled
    if (prefs.functional && typeof window !== 'undefined') {
      // Add functional cookies initialization code here
      console.log('Functional cookies enabled')
    }
  }

  const handlePreferenceChange = (type: keyof CookiePreferences) => {
    if (type === 'essential') return // Essential cookies cannot be disabled
    
    setPreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }))
  }

  if (!showBanner) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-neutral-200 shadow-2xl"
      >
        <div className="container-max py-6">
          {!showSettings ? (
            // Main Cookie Banner
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
              <div className="flex items-start space-x-4 flex-1">
                <Cookie className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">
                    We use cookies to enhance your experience
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    We use cookies and similar technologies to improve your browsing experience, 
                    analyze website traffic, and provide personalized content. By clicking "Accept All", 
                    you consent to our use of cookies. You can manage your preferences or learn more in our{' '}
                    <Link href="/cookies" className="text-primary-600 hover:underline">
                      Cookie Policy
                    </Link>.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowSettings(true)}
                  className="w-full sm:w-auto"
                >
                  <Settings className="w-4 h-4 mr-2" />
                  Customize
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleRejectAll}
                  className="w-full sm:w-auto"
                >
                  Reject All
                </Button>
                <Button
                  size="sm"
                  onClick={handleAcceptAll}
                  className="w-full sm:w-auto"
                >
                  Accept All
                </Button>
              </div>
            </div>
          ) : (
            // Cookie Settings Panel
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-neutral-900">
                  Cookie Preferences
                </h3>
                <button
                  onClick={() => setShowSettings(false)}
                  className="p-2 hover:bg-neutral-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-neutral-500" />
                </button>
              </div>
              
              <div className="space-y-4 mb-6">
                {/* Essential Cookies */}
                <div className="flex items-start justify-between p-4 bg-neutral-50 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-neutral-900 mb-1">Essential Cookies</h4>
                    <p className="text-sm text-neutral-600">
                      Required for the website to function properly. These cannot be disabled.
                    </p>
                  </div>
                  <div className="ml-4">
                    <div className="w-12 h-6 bg-primary-600 rounded-full flex items-center justify-end px-1">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="flex items-start justify-between p-4 bg-neutral-50 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-neutral-900 mb-1">Analytics Cookies</h4>
                    <p className="text-sm text-neutral-600">
                      Help us understand how visitors interact with our website to improve user experience.
                    </p>
                  </div>
                  <div className="ml-4">
                    <button
                      onClick={() => handlePreferenceChange('analytics')}
                      className={`w-12 h-6 rounded-full flex items-center transition-colors ${
                        preferences.analytics 
                          ? 'bg-primary-600 justify-end' 
                          : 'bg-neutral-300 justify-start'
                      } px-1`}
                    >
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </button>
                  </div>
                </div>

                {/* Marketing Cookies */}
                <div className="flex items-start justify-between p-4 bg-neutral-50 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-neutral-900 mb-1">Marketing Cookies</h4>
                    <p className="text-sm text-neutral-600">
                      Used to deliver personalized advertisements and track advertising effectiveness.
                    </p>
                  </div>
                  <div className="ml-4">
                    <button
                      onClick={() => handlePreferenceChange('marketing')}
                      className={`w-12 h-6 rounded-full flex items-center transition-colors ${
                        preferences.marketing 
                          ? 'bg-primary-600 justify-end' 
                          : 'bg-neutral-300 justify-start'
                      } px-1`}
                    >
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </button>
                  </div>
                </div>

                {/* Functional Cookies */}
                <div className="flex items-start justify-between p-4 bg-neutral-50 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-neutral-900 mb-1">Functional Cookies</h4>
                    <p className="text-sm text-neutral-600">
                      Remember your preferences and settings to provide enhanced features.
                    </p>
                  </div>
                  <div className="ml-4">
                    <button
                      onClick={() => handlePreferenceChange('functional')}
                      className={`w-12 h-6 rounded-full flex items-center transition-colors ${
                        preferences.functional 
                          ? 'bg-primary-600 justify-end' 
                          : 'bg-neutral-300 justify-start'
                      } px-1`}
                    >
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-end">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleRejectAll}
                  className="w-full sm:w-auto"
                >
                  Reject All
                </Button>
                <Button
                  size="sm"
                  onClick={handleAcceptSelected}
                  className="w-full sm:w-auto"
                >
                  Save Preferences
                </Button>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
