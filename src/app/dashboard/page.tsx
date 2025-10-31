import { Metadata } from 'next'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import {
  User,
  Calendar,
  CreditCard,
  MapPin,
  Star,
  Settings,
  LogOut,
  Phone,
  Mail
} from 'lucide-react'
import Layout from '@/components/layout/Layout'
import Button from '@/components/ui/Button'
import { getCurrentUser } from '@/lib/auth/utils'

// Mark this page as dynamic to prevent static generation
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Dashboard - Bodon Expedition Kenya',
  description: 'Manage your bookings, view trip history, and access exclusive member benefits.',
}

export default async function DashboardPage() {
  const user = await getCurrentUser()
  
  if (!user) {
    redirect('/auth/signin')
  }

  const quickActions = [
    {
      icon: Calendar,
      title: 'Book a Safari',
      description: 'Explore our safari packages',
      href: '/tours',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: MapPin,
      title: 'Car Rental',
      description: 'Rent a vehicle for your trip',
      href: '/car-rental',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Phone,
      title: 'Contact Support',
      description: 'Get help from our experts',
      href: '/contact',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Star,
      title: 'Travel Tips',
      description: 'Expert advice for Kenya',
      href: '/travel-tips',
      color: 'from-orange-500 to-orange-600'
    }
  ]

  return (
    <Layout>
      <div className="min-h-screen bg-neutral-50">
        <div className="container-max py-8">
          {/* Header */}
          <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-3xl font-bold text-neutral-900 mb-2">
                  Welcome back, {user.firstName}!
                </h1>
                <p className="text-neutral-600">
                  Ready for your next Kenya adventure? Let's plan something amazing.
                </p>
              </div>
              <div className="mt-6 md:mt-0 flex space-x-4">
                <Button variant="outline" size="sm">
                  <Settings className="w-4 h-4 mr-2" />
                  Settings
                </Button>
                <form action="/api/auth/signout" method="POST">
                  <Button variant="outline" size="sm" type="submit">
                    <LogOut className="w-4 h-4 mr-2" />
                    Sign Out
                  </Button>
                </form>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Quick Actions */}
              <div className="bg-white rounded-2xl shadow-sm p-8">
                <h2 className="text-2xl font-bold text-neutral-900 mb-6">Quick Actions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {quickActions.map((action, index) => (
                    <a
                      key={action.title}
                      href={action.href}
                      className="group p-6 border border-neutral-200 rounded-xl hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${action.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <action.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-neutral-900 mb-1 group-hover:text-primary-600 transition-colors">
                            {action.title}
                          </h3>
                          <p className="text-sm text-neutral-600">{action.description}</p>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white rounded-2xl shadow-sm p-8">
                <h2 className="text-2xl font-bold text-neutral-900 mb-6">Recent Activity</h2>
                <div className="text-center py-12">
                  <Calendar className="w-16 h-16 text-neutral-300 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">No bookings yet</h3>
                  <p className="text-neutral-600 mb-6">
                    Start planning your Kenya adventure by exploring our tours and experiences.
                  </p>
                  <Link href="/tours" className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed bg-primary-600 hover:bg-primary-700 text-white focus:ring-primary-500 px-4 py-2.5 text-sm">
                    Browse Tours
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Profile Card */}
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-primary-600 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <User className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-1">
                    {user.firstName} {user.lastName}
                  </h3>
                  <p className="text-neutral-600 text-sm mb-4">{user.email}</p>
                  <Button variant="outline" size="sm" className="w-full">
                    Edit Profile
                  </Button>
                </div>
              </div>

              {/* Member Benefits */}
              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-neutral-900 mb-4">Member Benefits</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                    <span className="text-sm text-neutral-700">Priority customer support</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                    <span className="text-sm text-neutral-700">Exclusive member discounts</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                    <span className="text-sm text-neutral-700">Early access to new tours</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                    <span className="text-sm text-neutral-700">Personalized recommendations</span>
                  </div>
                </div>
              </div>

              {/* Support */}
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-neutral-900 mb-4">Need Help?</h3>
                <p className="text-neutral-600 text-sm mb-4">
                  Our Kenya travel experts are here to help you plan the perfect adventure.
                </p>
                <div className="space-y-3">
                  <a
                    href="tel:+254758270982"
                    className="flex items-center space-x-3 text-sm text-neutral-700 hover:text-primary-600 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>+254-758270982</span>
                  </a>
                  <a
                    href="mailto:info@bodonexpedition.com"
                    className="flex items-center space-x-3 text-sm text-neutral-700 hover:text-primary-600 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>info@bodonexpedition.com</span>
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
