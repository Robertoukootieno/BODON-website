import { Metadata } from 'next'
import { Suspense } from 'react'
import { redirect } from 'next/navigation'
import { motion } from 'framer-motion'
import { Shield, Users, Award, CheckCircle } from 'lucide-react'
import Layout from '@/components/layout/Layout'
import SignInForm from '@/components/forms/SignInForm'
import { getCurrentUser } from '@/lib/auth/utils'

// Mark this page as dynamic to prevent static generation
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Sign In - Bodon Expedition Kenya',
  description: 'Sign in to your Bodon Expedition account to manage bookings, view trip history, and access exclusive member benefits.',
  keywords: ['sign in', 'login', 'account', 'bodon expedition', 'kenya safari', 'member area'],
}

// Server component to check authentication
async function AuthCheck() {
  const user = await getCurrentUser()
  if (user) {
    redirect('/dashboard')
  }
  return null
}

const benefits = [
  {
    icon: Shield,
    title: 'Secure Account',
    description: 'Your personal information and booking history are protected with bank-level security'
  },
  {
    icon: Users,
    title: 'Personalized Service',
    description: 'Access to dedicated customer support and personalized travel recommendations'
  },
  {
    icon: Award,
    title: 'Exclusive Benefits',
    description: 'Member-only discounts, early access to new tours, and loyalty rewards'
  }
]

const features = [
  'Manage your bookings and itineraries',
  'View detailed trip history and photos',
  'Save favorite tours and destinations',
  'Receive personalized travel recommendations',
  'Access exclusive member discounts',
  'Priority customer support',
  'Early access to new tour announcements',
  'Digital travel documents and receipts'
]

export default function SignInPage() {
  return (
    <Layout>
      <Suspense fallback={null}>
        <AuthCheck />
      </Suspense>
      
      <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-primary-50">
        <div className="container-max py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Sign In Form */}
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
                <div className="text-center mb-8">
                  <h1 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
                    Welcome Back
                  </h1>
                  <p className="text-lg text-neutral-600">
                    Sign in to your account to continue your Kenya adventure
                  </p>
                </div>

                <SignInForm />

                {/* Social Proof */}
                <div className="mt-8 pt-8 border-t border-neutral-200">
                  <div className="text-center">
                    <p className="text-sm text-neutral-500 mb-4">Trusted by thousands of travelers</p>
                    <div className="flex justify-center items-center space-x-6 text-sm text-neutral-600">
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                        5000+ Happy Customers
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                        15+ Years Experience
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Benefits & Features */}
            <div className="order-1 lg:order-2">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-6">
                    Your Gateway to <span className="text-primary-600">Kenya Adventures</span>
                  </h2>
                  <p className="text-lg text-neutral-600 mb-8">
                    Join thousands of travelers who trust Bodon Expedition for unforgettable Kenya experiences. 
                    Sign in to access your personalized travel dashboard.
                  </p>
                </div>

                {/* Benefits */}
                <div className="space-y-6">
                  {benefits.map((benefit, index) => (
                    <div key={benefit.title} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-primary-600 to-secondary-500 rounded-xl flex items-center justify-center">
                        <benefit.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-neutral-900 mb-1">
                          {benefit.title}
                        </h3>
                        <p className="text-neutral-600">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Features List */}
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-neutral-900 mb-4">
                    What you can do with your account:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary-600 flex-shrink-0" />
                        <span className="text-sm text-neutral-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact Support */}
                <div className="bg-gradient-to-r from-primary-600 to-secondary-500 rounded-2xl p-6 text-white">
                  <h3 className="text-lg font-semibold mb-2">Need Help?</h3>
                  <p className="text-primary-100 mb-4">
                    Our Kenya travel experts are here to assist you 24/7
                  </p>
                  <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                    <a
                      href="tel:+254758270982"
                      className="text-white hover:text-primary-100 font-medium"
                    >
                      📞 +254-758270982
                    </a>
                    <a
                      href="mailto:info@bodonexpedition.com"
                      className="text-white hover:text-primary-100 font-medium"
                    >
                      ✉️ info@bodonexpedition.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
