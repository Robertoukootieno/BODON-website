import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Layout from '@/components/layout/Layout'
import TourDetailHero from '@/components/tours/TourDetailHero'
import TourDetailInfo from '@/components/tours/TourDetailInfo'
import TourItinerary from '@/components/tours/TourItinerary'
import TourInclusions from '@/components/tours/TourInclusions'
import TourBooking from '@/components/tours/TourBooking'
import TourReviews from '@/components/tours/TourReviews'
import RelatedTours from '@/components/tours/RelatedTours'

// Mock data - in real app, this would come from API/database
const tours = [
  {
    id: '1',
    title: 'Maasai Mara Safari Adventure',
    slug: 'maasai-mara-safari',
    shortDescription: 'Experience the Great Migration and witness the Big Five in Kenya\'s most famous game reserve.',
    fullDescription: 'Embark on an unforgettable journey to the Maasai Mara, Kenya\'s crown jewel of wildlife reserves. This 4-day safari adventure offers you the chance to witness the spectacular Great Migration, encounter the Big Five, and immerse yourself in the rich culture of the Maasai people. Our expert guides will take you through the vast savannas where lions roam freely, elephants traverse ancient paths, and millions of wildebeest create one of nature\'s most incredible spectacles.',
    image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    price: 175000,
    duration: 4,
    maxGroupSize: 8,
    rating: 4.9,
    reviewCount: 156,
    category: 'Safari',
    difficulty: 'Easy',
    location: 'Maasai Mara',
    highlights: [
      'Witness the Great Migration (seasonal)',
      'Big Five game viewing',
      'Maasai cultural village visit',
      'Hot air balloon safari (optional)',
      'Professional safari guide',
      'Luxury tented accommodation'
    ],
    included: [
      'Airport transfers',
      'Accommodation for 3 nights',
      'All meals during safari',
      'Game drives in 4WD vehicle',
      'Professional English-speaking guide',
      'Park entrance fees',
      'Bottled water during game drives',
      'Maasai village visit'
    ],
    excluded: [
      'International flights',
      'Visa fees',
      'Travel insurance',
      'Personal expenses',
      'Alcoholic beverages',
      'Hot air balloon safari (optional extra)',
      'Tips and gratuities'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival & First Game Drive',
        description: 'Arrive at Jomo Kenyatta International Airport where you\'ll be met by our representative. Transfer to Wilson Airport for your flight to Maasai Mara. Upon arrival, check into your luxury tented camp and enjoy lunch. In the afternoon, embark on your first game drive in the world-famous Maasai Mara National Reserve.',
        activities: ['Airport transfer', 'Flight to Maasai Mara', 'Check-in at camp', 'Afternoon game drive'],
        meals: ['Lunch', 'Dinner'],
        accommodation: 'Luxury Tented Camp'
      },
      {
        day: 2,
        title: 'Full Day Game Drives',
        description: 'Start early with a sunrise game drive when animals are most active. Return to camp for breakfast and relaxation. After lunch, continue with an afternoon game drive, exploring different areas of the reserve and maximizing wildlife viewing opportunities.',
        activities: ['Sunrise game drive', 'Morning game drive', 'Afternoon game drive', 'Wildlife photography'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Luxury Tented Camp'
      },
      {
        day: 3,
        title: 'Maasai Culture & Game Viewing',
        description: 'Morning game drive followed by a visit to a traditional Maasai village where you\'ll learn about their culture, traditions, and way of life. Participate in traditional dances and see how they live in harmony with wildlife. Afternoon game drive in search of the Big Five.',
        activities: ['Morning game drive', 'Maasai village visit', 'Cultural activities', 'Afternoon game drive'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Luxury Tented Camp'
      },
      {
        day: 4,
        title: 'Final Game Drive & Departure',
        description: 'Early morning game drive for last-minute wildlife sightings and photography. Return to camp for breakfast and check-out. Transfer to the airstrip for your flight back to Nairobi, then onward to Jomo Kenyatta International Airport for your departure.',
        activities: ['Final game drive', 'Check-out', 'Flight to Nairobi', 'Airport transfer'],
        meals: ['Breakfast'],
        accommodation: 'N/A'
      }
    ],
    bestTimeToVisit: 'July to October (Great Migration), December to March (calving season)',
    physicalRequirement: 'Low - suitable for all fitness levels',
    ageRestriction: 'Suitable for all ages, children under 12 receive discounts'
  },
  // Add other tours here...
]

interface TourDetailPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: TourDetailPageProps): Promise<Metadata> {
  const tour = tours.find(t => t.slug === params.slug)
  
  if (!tour) {
    return {
      title: 'Tour Not Found - Bodon Expedition Kenya'
    }
  }

  return {
    title: `${tour.title} - Bodon Expedition Kenya`,
    description: tour.shortDescription,
    keywords: [tour.category.toLowerCase(), 'kenya safari', 'tour booking', tour.location.toLowerCase()],
    openGraph: {
      title: tour.title,
      description: tour.shortDescription,
      images: [tour.image],
    }
  }
}

export default function TourDetailPage({ params }: TourDetailPageProps) {
  const tour = tours.find(t => t.slug === params.slug)
  
  if (!tour) {
    notFound()
  }

  return (
    <Layout>
      <TourDetailHero tour={tour} />
      <div className="container-max py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <TourDetailInfo tour={tour} />
            <TourItinerary itinerary={tour.itinerary} />
            <TourInclusions included={tour.included} excluded={tour.excluded} />
            <TourReviews tourId={tour.id} rating={tour.rating} reviewCount={tour.reviewCount} />
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <TourBooking tour={tour} />
          </div>
        </div>
      </div>
      <RelatedTours currentTourId={tour.id} category={tour.category} />
    </Layout>
  )
}
