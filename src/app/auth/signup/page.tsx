import { Metadata } from 'next'
import { Suspense } from 'react'
import { redirect } from 'next/navigation'
import { Shield, Users, Award, CheckCircle, Star } from 'lucide-react'
import Layout from '@/components/layout/Layout'
import SignUpForm from '@/components/forms/SignUpForm'
import { getCurrentUser } from '@/lib/auth/utils'

export const metadata: Metadata = {
  title: 'Create Account - Bodon Expedition Kenya',
  description: 'Join thousands of travelers who trust Bodon Expedition for unforgettable Kenya adventures. Create your account to access exclusive benefits and personalized service.',
  keywords: ['sign up', 'register', 'create account', 'bodon expedition', 'kenya safari', 'travel booking'],
}

// Server component to check authentication
async function AuthCheck() {
  const user = await getCurrentUser()
  if (user) {
    redirect('/dashboard')
  }
  return null
}

const memberBenefits = [
  {
    icon: Shield,
    title: 'Secure & Protected',
    description: 'Your data is protected with bank-level security and encryption'
  },
  {
    icon: Users,
    title: 'Expert Support',
    description: 'Access to dedicated Kenya travel specialists and 24/7 customer support'
  },
  {
    icon: Award,
    title: 'Exclusive Rewards',
    description: 'Member-only discounts, loyalty points, and early access to new tours'
  }
]

const testimonials = [
  {
    name: 'Sarah Johnson',
    location: 'United States',
    rating: 5,
    comment: 'Bodon Expedition made our Kenya safari absolutely unforgettable. The booking process was seamless and the support was exceptional.'
  },
  {
    name: 'David Chen',
    location: 'Singapore',
    rating: 5,
    comment: 'Professional service from start to finish. The member dashboard made it easy to track our booking and communicate with the team.'
  },
  {
    name: 'Emma Thompson',
    location: 'United Kingdom',
    rating: 5,
    comment: 'The personalized recommendations and exclusive member benefits made our trip planning so much easier. Highly recommended!'
  }
]

const stats = [
  { number: '5000+', label: 'Happy Travelers' },
  { number: '15+', label: 'Years Experience' },
  { number: '50+', label: 'Destinations' },
  { number: '4.9/5', label: 'Customer Rating' }
]

export default function SignUpPage() {
  return (
    <Layout>
      <Suspense fallback={null}>
        <AuthCheck />
      </Suspense>
      
      <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-primary-50">
        <div className="container-max py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Side - Sign Up Form */}
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
                <div className="text-center mb-8">
                  <h1 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
                    Join Bodon Expedition
                  </h1>
                  <p className="text-lg text-neutral-600">
                    Create your account and start planning your Kenya adventure
                  </p>
                </div>

                <SignUpForm />

                {/* Trust Indicators */}
                <div className="mt-8 pt-8 border-t border-neutral-200">
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                    {stats.map((stat, index) => (
                      <div key={index}>
                        <div className="text-2xl font-bold text-primary-600">{stat.number}</div>
                        <div className="text-sm text-neutral-600">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Benefits & Testimonials */}
            <div className="order-1 lg:order-2 space-y-8">
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-6">
                  Start Your <span className="text-primary-600">Kenya Adventure</span>
                </h2>
                <p className="text-lg text-neutral-600 mb-8">
                  Join thousands of travelers who have discovered the magic of Kenya with Bodon Expedition. 
                  Create your account to unlock exclusive benefits and personalized service.
                </p>
              </div>

              {/* Member Benefits */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-neutral-900">Member Benefits</h3>
                {memberBenefits.map((benefit, index) => (
                  <div key={benefit.title} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-primary-600 to-secondary-500 rounded-xl flex items-center justify-center">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-neutral-900 mb-1">
                        {benefit.title}
                      </h4>
                      <p className="text-neutral-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Testimonials */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-neutral-900 mb-6">
                  What Our Members Say
                </h3>
                <div className="space-y-6">
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="border-b border-neutral-100 last:border-b-0 pb-6 last:pb-0">
                      <div className="flex items-center space-x-1 mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-neutral-700 text-sm mb-3 italic">
                        "{testimonial.comment}"
                      </p>
                      <div className="text-sm">
                        <span className="font-medium text-neutral-900">{testimonial.name}</span>
                        <span className="text-neutral-500"> • {testimonial.location}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Security Notice */}
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6">
                <div className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-2">Your Privacy is Protected</h4>
                    <p className="text-sm text-neutral-600">
                      We use industry-standard encryption to protect your personal information. 
                      Your data is never shared with third parties without your consent.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Support */}
              <div className="bg-gradient-to-r from-primary-600 to-secondary-500 rounded-2xl p-6 text-white">
                <h3 className="text-lg font-semibold mb-2">Questions?</h3>
                <p className="text-primary-100 mb-4">
                  Our Kenya travel experts are here to help you get started
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
    </Layout>
  )
}
