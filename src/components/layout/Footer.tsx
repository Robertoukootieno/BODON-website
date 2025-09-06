import React from 'react'
import Link from 'next/link'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Clock,
  Shield,
  Award
} from 'lucide-react'

const footerLinks = {
  tours: [
    { name: 'Safari Tours', href: '/tours?category=safari' },
    { name: 'Cultural Tours', href: '/tours?category=cultural' },
    { name: 'Adventure Tours', href: '/tours?category=adventure' },
    { name: 'Beach Tours', href: '/tours?category=beach' },
    { name: 'Mountain Climbing', href: '/tours?category=mountain' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/about#team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Press', href: '/press' },
    { name: 'Blog', href: '/blog' },
  ],
  support: [
    { name: 'Contact Us', href: '/contact' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Booking Help', href: '/help/booking' },
    { name: 'Payment Help', href: '/help/payment' },
    { name: 'Travel Tips', href: '/travel-tips' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Refund Policy', href: '/refund' },
  ],
}

const socialLinks = [
  { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'Instagram', href: '#', icon: Instagram },
  { name: 'YouTube', href: '#', icon: Youtube },
]

const features = [
  {
    icon: Shield,
    title: 'Secure Payments',
    description: 'M-Pesa, PayPal & Card payments'
  },
  {
    icon: Award,
    title: 'Licensed & Insured',
    description: 'Fully licensed tour operator'
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock assistance'
  },
]

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      {/* Features section */}
      <div className="border-b border-neutral-800">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <feature.icon className="w-8 h-8 text-secondary-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">{feature.title}</h3>
                  <p className="text-sm text-neutral-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-secondary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <div>
                <h2 className="text-xl font-bold">Bodon Expedition</h2>
                <p className="text-xs text-neutral-400">Discover Kenya's Beauty</p>
              </div>
            </Link>
            
            <p className="text-neutral-400 mb-6 text-sm leading-relaxed">
              Experience the magic of Kenya with our expertly crafted expeditions. From thrilling safaris to cultural adventures, we create unforgettable memories that last a lifetime.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-secondary-400 flex-shrink-0" />
                <span className="text-sm text-neutral-400">Nairobi, Kenya</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-secondary-400 flex-shrink-0" />
                <span className="text-sm text-neutral-400">+254-XXX-XXXXXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-secondary-400 flex-shrink-0" />
                <span className="text-sm text-neutral-400">info@bodonexpedition.com</span>
              </div>
            </div>
          </div>

          {/* Tours */}
          <div>
            <h3 className="font-semibold text-white mb-4">Tours</h3>
            <ul className="space-y-2">
              {footerLinks.tours.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm text-neutral-400 hover:text-secondary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm text-neutral-400 hover:text-secondary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm text-neutral-400 hover:text-secondary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm text-neutral-400 hover:text-secondary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="border-t border-neutral-800">
        <div className="container-max py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-neutral-400">
              © {new Date().getFullYear()} Bodon Expedition Kenya. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-neutral-400 hover:text-secondary-400 transition-colors duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
