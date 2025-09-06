import { Metadata } from 'next'
import BookingForm from '@/components/forms/BookingForm'

export const metadata: Metadata = {
  title: 'Book Your Experience - Bodon Expedition Kenya',
  description: 'Book your safari tour or rent a vehicle with Bodon Expedition Kenya. Secure online booking with multiple payment options.',
  keywords: ['booking', 'safari booking', 'car rental booking', 'Kenya tours', 'vehicle rental'],
}

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-neutral-50">
      <div className="container-max py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Book Your Experience
            </h1>
            <p className="text-lg text-neutral-600">
              Choose your adventure or vehicle and let us create an unforgettable experience for you.
            </p>
          </div>
          
          <BookingForm />
        </div>
      </div>
    </main>
  )
}
