import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Layout from '@/components/layout/Layout'
import CarDetailHero from '@/components/car-rental/CarDetailHero'
import CarDetailInfo from '@/components/car-rental/CarDetailInfo'
import CarFeatures from '@/components/car-rental/CarFeatures'
import CarPricing from '@/components/car-rental/CarPricing'
import CarBooking from '@/components/car-rental/CarBooking'
import CarReviews from '@/components/car-rental/CarReviews'
import RelatedCars from '@/components/car-rental/RelatedCars'

// Mock data - in real app, this would come from API/database
const cars = [
  {
    id: '1',
    name: 'Toyota Corolla',
    slug: 'toyota-corolla',
    category: 'Economy',
    shortDescription: 'Perfect for city exploration and short trips with excellent fuel efficiency.',
    fullDescription: 'The Toyota Corolla is an ideal choice for travelers seeking comfort, reliability, and fuel efficiency. Perfect for navigating Nairobi\'s streets or exploring nearby attractions, this compact sedan offers modern amenities including air conditioning, power steering, and a spacious interior for up to 5 passengers. With its excellent fuel economy and proven reliability, the Corolla ensures a smooth and economical journey throughout Kenya.',
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    dailyRate: 5000,
    weeklyRate: 30000,
    monthlyRate: 120000,
    passengers: 5,
    luggage: 3,
    transmission: 'Manual/Automatic',
    fuelType: 'Petrol',
    rating: 4.6,
    reviewCount: 89,
    features: [
      'Air Conditioning',
      'Power Steering',
      'Central Locking',
      'Electric Windows',
      'Radio/CD Player',
      'Airbags',
      'ABS Brakes',
      'Fuel Efficient'
    ],
    included: [
      'Comprehensive insurance',
      'Unlimited mileage within Kenya',
      '24/7 roadside assistance',
      'Free airport pickup/drop-off',
      'GPS navigation system',
      'First aid kit',
      'Spare tire and tools',
      'Vehicle registration documents'
    ],
    excluded: [
      'Fuel costs',
      'Parking fees',
      'Traffic fines',
      'Cross-border travel permits',
      'Additional driver fees',
      'Child car seats (available on request)',
      'Personal accident insurance',
      'Damage excess waiver'
    ],
    specifications: {
      engine: '1.8L 4-Cylinder',
      power: '139 HP',
      fuelCapacity: '50 Liters',
      fuelConsumption: '6.5L/100km',
      topSpeed: '180 km/h',
      acceleration: '0-100 km/h in 10.2s'
    },
    idealFor: [
      'City driving and urban exploration',
      'Airport transfers',
      'Business meetings',
      'Short weekend trips',
      'Couples and small families',
      'Budget-conscious travelers'
    ]
  },
  // Add other cars here...
]

interface CarDetailPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: CarDetailPageProps): Promise<Metadata> {
  const car = cars.find(c => c.slug === params.slug)
  
  if (!car) {
    return {
      title: 'Car Not Found - Bodon Expedition Kenya'
    }
  }

  return {
    title: `${car.name} Rental - ${car.category} Car | Bodon Expedition Kenya`,
    description: car.shortDescription,
    keywords: [car.category.toLowerCase(), 'car rental kenya', car.name.toLowerCase(), 'vehicle hire nairobi'],
    openGraph: {
      title: `${car.name} - ${car.category} Car Rental`,
      description: car.shortDescription,
      images: [car.image],
    }
  }
}

export default function CarDetailPage({ params }: CarDetailPageProps) {
  const car = cars.find(c => c.slug === params.slug)
  
  if (!car) {
    notFound()
  }

  return (
    <Layout>
      <CarDetailHero car={car} />
      <div className="container-max py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <CarDetailInfo car={car} />
            <CarFeatures features={car.features} included={car.included} excluded={car.excluded} />
            <CarPricing car={car} />
            <CarReviews carId={car.id} rating={car.rating} reviewCount={car.reviewCount} />
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <CarBooking car={car} />
          </div>
        </div>
      </div>
      <RelatedCars currentCarId={car.id} category={car.category} />
    </Layout>
  )
}
