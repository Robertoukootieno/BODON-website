import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Bodon Tours Kenya - Discover Kenya\'s Beauty',
    template: '%s | Bodon Tours Kenya'
  },
  description: 'Discover Kenya\'s beauty with Bodon Tours - Your premier safari and adventure travel company based in Nairobi. Book authentic Kenyan experiences with secure payment options.',
  keywords: ['Kenya tours', 'safari', 'Nairobi tours', 'Kenya travel', 'adventure tours', 'wildlife safari', 'Kenya tourism'],
  authors: [{ name: 'Bodon Tours Kenya' }],
  creator: 'Bodon Tours Kenya',
  publisher: 'Bodon Tours Kenya',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.SITE_URL || 'http://localhost:3000'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'Bodon Tours Kenya - Discover Kenya\'s Beauty',
    description: 'Discover Kenya\'s beauty with Bodon Tours - Your premier safari and adventure travel company based in Nairobi.',
    siteName: 'Bodon Tours Kenya',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Bodon Tours Kenya',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bodon Tours Kenya - Discover Kenya\'s Beauty',
    description: 'Discover Kenya\'s beauty with Bodon Tours - Your premier safari and adventure travel company based in Nairobi.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">
        {children}
        <Toaster 
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#363636',
              color: '#fff',
            },
            success: {
              duration: 3000,
              iconTheme: {
                primary: '#22c55e',
                secondary: '#fff',
              },
            },
            error: {
              duration: 5000,
              iconTheme: {
                primary: '#ef4444',
                secondary: '#fff',
              },
            },
          }}
        />
      </body>
    </html>
  )
}
