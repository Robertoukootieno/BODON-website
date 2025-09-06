import { Metadata } from 'next'
import CarRentalHero from '@/components/sections/CarRentalHero'
import CarFleet from '@/components/sections/CarFleet'
import CarRentalFeatures from '@/components/sections/CarRentalFeatures'
import CarRentalPricing from '@/components/sections/CarRentalPricing'
import CallToAction from '@/components/sections/CallToAction'

export const metadata: Metadata = {
  title: 'Car Rental Services - Bodon Expedition Kenya',
  description: 'Rent quality vehicles in Kenya with Bodon Expedition. Choose from our fleet of cars, SUVs, vans, and 4WD vehicles for your adventure or business needs.',
  keywords: ['car rental Kenya', 'vehicle rental Nairobi', 'SUV rental', 'van rental', '4WD rental', 'Kenya car hire'],
}

export default function CarRentalPage() {
  return (
    <main className="min-h-screen">
      <CarRentalHero />
      <CarFleet />
      <CarRentalFeatures />
      <CarRentalPricing />
      <CallToAction />
    </main>
  )
}
