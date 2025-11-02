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
    id: '0',
    title: 'Nairobi City Tour',
    slug: 'nairobi-city-tour',
    shortDescription: 'Explore Kenya\'s vibrant capital city with guided tours of iconic landmarks, museums, and local markets.',
    fullDescription: 'Discover the heart of Kenya with our comprehensive Nairobi City Tour. Explore the vibrant capital city\'s rich history, diverse culture, and modern attractions. Visit world-class museums, iconic landmarks, bustling local markets, and experience the authentic Nairobi lifestyle. Perfect for first-time visitors or those wanting to understand Kenya\'s urban landscape.',
    image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    price: 35000,
    duration: 1,
    maxGroupSize: 20,
    rating: 4.8,
    reviewCount: 142,
    category: 'City Tour',
    difficulty: 'Easy',
    location: 'Nairobi',
    highlights: [
      'Karen Blixen Museum',
      'Nairobi National Museum',
      'Giraffe Centre',
      'David Sheldrick Wildlife Trust',
      'Nairobi National Park',
      'Local markets and shopping'
    ],
    included: [
      'Hotel pickup and drop-off',
      'Professional English-speaking guide',
      'All entrance fees',
      'Bottled water',
      'Light snacks'
    ],
    excluded: [
      'Meals (lunch available at extra cost)',
      'Personal shopping',
      'Tips and gratuities',
      'Travel insurance'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Nairobi City Exploration',
        description: 'Start your day with a hotel pickup and begin exploring Nairobi\'s iconic landmarks. Visit the Karen Blixen Museum, explore the Nairobi National Museum, and experience the Giraffe Centre where you can interact with endangered Rothschild giraffes.',
        activities: ['Hotel pickup', 'Karen Blixen Museum', 'Nairobi National Museum', 'Giraffe Centre', 'Local market visit'],
        meals: ['Breakfast', 'Snacks'],
        accommodation: 'N/A'
      }
    ],
    bestTimeToVisit: 'Year-round, best during dry seasons (June-October, January-February)',
    physicalRequirement: 'Low - mostly walking and vehicle tours',
    ageRestriction: 'Suitable for all ages'
  },
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
  {
    id: '2',
    title: 'Mount Kenya Climbing Expedition',
    slug: 'mount-kenya-climbing',
    shortDescription: 'Conquer Africa\'s second-highest peak with breathtaking views and challenging trails.',
    fullDescription: 'Challenge yourself on Africa\'s second-highest mountain, Mount Kenya. This 6-day expedition takes you through diverse ecosystems from lush forests to alpine meadows and rocky peaks. With our experienced guides, you\'ll summit Point Lenana at 4,985m, offering spectacular views and an unforgettable mountaineering experience.',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    price: 120000,
    duration: 6,
    maxGroupSize: 12,
    rating: 4.8,
    reviewCount: 89,
    category: 'Adventure',
    difficulty: 'Challenging',
    location: 'Mount Kenya',
    highlights: [
      'Summit Point Lenana at 4,985m',
      'Alpine meadows and scenic views',
      'Forest ecosystem exploration',
      'Professional mountain guides',
      'Acclimatization hikes',
      'Wildlife spotting opportunities'
    ],
    included: [
      'Airport transfers',
      'Accommodation during trek',
      'All meals during expedition',
      'Professional mountain guide',
      'Porters for luggage',
      'Park entrance fees',
      'Camping equipment',
      'First aid kit'
    ],
    excluded: [
      'International flights',
      'Personal climbing gear',
      'Travel insurance',
      'Tips and gratuities',
      'Personal expenses'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Acclimatization',
        description: 'Arrive in Nairobi and transfer to Mount Kenya region. Rest and acclimatize to the altitude.',
        activities: ['Airport transfer', 'Acclimatization walk', 'Rest'],
        meals: ['Lunch', 'Dinner'],
        accommodation: 'Mountain Lodge'
      },
      {
        day: 2,
        title: 'Naro Moru Route - Forest Trek',
        description: 'Begin your trek through the lush forest zone with diverse wildlife and vegetation.',
        activities: ['Forest trek', 'Wildlife spotting', 'Acclimatization hike'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Mountain Camp'
      },
      {
        day: 3,
        title: 'Alpine Meadows',
        description: 'Trek through alpine meadows with stunning views of the peaks.',
        activities: ['Alpine trek', 'Photography', 'Acclimatization'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Mountain Camp'
      },
      {
        day: 4,
        title: 'Point Lenana Summit',
        description: 'Early morning summit attempt to Point Lenana at 4,985m. Spectacular sunrise views.',
        activities: ['Summit attempt', 'Sunrise viewing', 'Photography'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Mountain Camp'
      },
      {
        day: 5,
        title: 'Descent & Rest',
        description: 'Descend to lower altitude and rest after the summit.',
        activities: ['Descent trek', 'Rest and recovery'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Mountain Lodge'
      },
      {
        day: 6,
        title: 'Departure',
        description: 'Transfer back to Nairobi for your departure.',
        activities: ['Transfer to Nairobi', 'Airport transfer'],
        meals: ['Breakfast'],
        accommodation: 'N/A'
      }
    ],
    bestTimeToVisit: 'January to February, August to September',
    physicalRequirement: 'High - good fitness level required',
    ageRestriction: 'Minimum age 16, maximum age 65'
  },
  {
    id: '3',
    title: 'Diani Beach & Culture Tour',
    slug: 'diani-beach-culture',
    shortDescription: 'Relax on pristine beaches while exploring Swahili culture and coastal traditions.',
    fullDescription: 'Experience the perfect blend of relaxation and cultural immersion on Kenya\'s stunning south coast. Diani Beach offers pristine white sand, crystal-clear waters, and a rich Swahili heritage. Explore local markets, visit historical sites, and enjoy water sports while experiencing authentic coastal living.',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    price: 90000,
    duration: 5,
    maxGroupSize: 15,
    rating: 4.7,
    reviewCount: 203,
    category: 'Beach & Culture',
    difficulty: 'Easy',
    location: 'Diani Beach',
    highlights: [
      'Pristine white sand beaches',
      'Swahili cultural experiences',
      'Water sports activities',
      'Local market exploration',
      'Historical site visits',
      'Sunset beach walks'
    ],
    included: [
      'Airport transfers',
      'Accommodation for 4 nights',
      'All meals',
      'Cultural tours',
      'Beach activities',
      'Local guide services'
    ],
    excluded: [
      'International flights',
      'Travel insurance',
      'Water sports equipment rental',
      'Personal expenses',
      'Tips and gratuities'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival at Diani',
        description: 'Arrive and check into your beachfront resort. Relax and enjoy the beach.',
        activities: ['Airport transfer', 'Check-in', 'Beach relaxation'],
        meals: ['Lunch', 'Dinner'],
        accommodation: 'Beachfront Resort'
      },
      {
        day: 2,
        title: 'Swahili Culture Tour',
        description: 'Explore local markets and learn about Swahili traditions.',
        activities: ['Market tour', 'Cultural sites', 'Local interactions'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Beachfront Resort'
      },
      {
        day: 3,
        title: 'Water Sports & Beach',
        description: 'Enjoy water sports and beach activities.',
        activities: ['Snorkeling', 'Swimming', 'Beach games'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Beachfront Resort'
      },
      {
        day: 4,
        title: 'Historical Sites',
        description: 'Visit historical sites and museums.',
        activities: ['Museum visit', 'Historical tours', 'Photography'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Beachfront Resort'
      },
      {
        day: 5,
        title: 'Departure',
        description: 'Relax before your departure.',
        activities: ['Beach time', 'Shopping', 'Airport transfer'],
        meals: ['Breakfast'],
        accommodation: 'N/A'
      }
    ],
    bestTimeToVisit: 'June to October, December to February',
    physicalRequirement: 'Low - suitable for all fitness levels',
    ageRestriction: 'Suitable for all ages'
  },
  {
    id: '4',
    title: 'Amboseli Elephant Safari',
    slug: 'amboseli-elephant-safari',
    shortDescription: 'Get up close with elephants against the backdrop of Mount Kilimanjaro.',
    fullDescription: 'Amboseli National Park is famous for its large elephant herds and stunning views of Mount Kilimanjaro. This 3-day safari offers intimate wildlife encounters and exceptional photography opportunities in one of Kenya\'s most scenic locations.',
    image: 'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    price: 140000,
    duration: 3,
    maxGroupSize: 10,
    rating: 4.8,
    reviewCount: 124,
    category: 'Safari',
    difficulty: 'Easy',
    location: 'Amboseli',
    highlights: [
      'Large elephant herds',
      'Mount Kilimanjaro views',
      'Big Five game viewing',
      'Photography opportunities',
      'Professional guides',
      'Luxury accommodation'
    ],
    included: [
      'Airport transfers',
      'Accommodation for 2 nights',
      'All meals',
      'Game drives',
      'Professional guide',
      'Park fees'
    ],
    excluded: [
      'International flights',
      'Travel insurance',
      'Personal expenses',
      'Tips and gratuities'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival & First Game Drive',
        description: 'Arrive and begin your first game drive in Amboseli.',
        activities: ['Airport transfer', 'Game drive', 'Check-in'],
        meals: ['Lunch', 'Dinner'],
        accommodation: 'Safari Lodge'
      },
      {
        day: 2,
        title: 'Full Day Safari',
        description: 'Full day of game drives with elephant encounters.',
        activities: ['Sunrise game drive', 'Afternoon game drive', 'Photography'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Safari Lodge'
      },
      {
        day: 3,
        title: 'Final Game Drive & Departure',
        description: 'Final game drive before departure.',
        activities: ['Morning game drive', 'Check-out', 'Airport transfer'],
        meals: ['Breakfast'],
        accommodation: 'N/A'
      }
    ],
    bestTimeToVisit: 'June to October, December to March',
    physicalRequirement: 'Low - suitable for all fitness levels',
    ageRestriction: 'Suitable for all ages'
  },
  {
    id: '5',
    title: 'Lake Nakuru Flamingo Tour',
    slug: 'lake-nakuru-flamingo',
    shortDescription: 'Witness thousands of flamingos and diverse wildlife in this beautiful lake ecosystem.',
    fullDescription: 'Lake Nakuru is a stunning alkaline lake famous for its massive flocks of flamingos. This 2-day tour offers excellent wildlife viewing, bird watching, and photography opportunities in a picturesque setting.',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    price: 65000,
    duration: 2,
    maxGroupSize: 20,
    rating: 4.6,
    reviewCount: 87,
    category: 'Wildlife',
    difficulty: 'Easy',
    location: 'Lake Nakuru',
    highlights: [
      'Thousands of flamingos',
      'Diverse bird species',
      'Wildlife viewing',
      'Photography opportunities',
      'Scenic lake views',
      'Nature walks'
    ],
    included: [
      'Airport transfers',
      'Accommodation for 1 night',
      'All meals',
      'Game drives',
      'Professional guide',
      'Park fees'
    ],
    excluded: [
      'International flights',
      'Travel insurance',
      'Personal expenses',
      'Tips and gratuities'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Lake Tour',
        description: 'Arrive and explore Lake Nakuru with its flamingo flocks.',
        activities: ['Airport transfer', 'Lake tour', 'Bird watching'],
        meals: ['Lunch', 'Dinner'],
        accommodation: 'Lake Lodge'
      },
      {
        day: 2,
        title: 'Morning Game Drive & Departure',
        description: 'Final morning game drive before departure.',
        activities: ['Morning game drive', 'Check-out', 'Airport transfer'],
        meals: ['Breakfast'],
        accommodation: 'N/A'
      }
    ],
    bestTimeToVisit: 'Year-round, best November to March',
    physicalRequirement: 'Low - suitable for all fitness levels',
    ageRestriction: 'Suitable for all ages'
  },
  {
    id: '6',
    title: 'Samburu Cultural Experience',
    slug: 'samburu-cultural-experience',
    shortDescription: 'Immerse yourself in the rich traditions of the Samburu people and their unique way of life.',
    fullDescription: 'Discover the fascinating culture of the Samburu people in northern Kenya. This 4-day experience combines wildlife viewing with deep cultural immersion, offering insights into traditional pastoralist life, customs, and traditions.',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    price: 110000,
    duration: 4,
    maxGroupSize: 12,
    rating: 4.9,
    reviewCount: 76,
    category: 'Cultural',
    difficulty: 'Moderate',
    location: 'Samburu',
    highlights: [
      'Samburu village visits',
      'Traditional ceremonies',
      'Cultural workshops',
      'Wildlife viewing',
      'Local interactions',
      'Authentic experiences'
    ],
    included: [
      'Airport transfers',
      'Accommodation for 3 nights',
      'All meals',
      'Cultural tours',
      'Game drives',
      'Professional guide'
    ],
    excluded: [
      'International flights',
      'Travel insurance',
      'Personal expenses',
      'Tips and gratuities'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Cultural Introduction',
        description: 'Arrive and meet the Samburu community.',
        activities: ['Airport transfer', 'Village tour', 'Cultural introduction'],
        meals: ['Lunch', 'Dinner'],
        accommodation: 'Cultural Camp'
      },
      {
        day: 2,
        title: 'Cultural Immersion',
        description: 'Participate in traditional activities and ceremonies.',
        activities: ['Traditional activities', 'Ceremonies', 'Crafts workshop'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Cultural Camp'
      },
      {
        day: 3,
        title: 'Wildlife & Culture',
        description: 'Game drive combined with cultural experiences.',
        activities: ['Game drive', 'Village visit', 'Cultural activities'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Cultural Camp'
      },
      {
        day: 4,
        title: 'Departure',
        description: 'Final morning activities before departure.',
        activities: ['Morning activities', 'Farewells', 'Airport transfer'],
        meals: ['Breakfast'],
        accommodation: 'N/A'
      }
    ],
    bestTimeToVisit: 'June to October, December to March',
    physicalRequirement: 'Moderate - some walking required',
    ageRestriction: 'Suitable for all ages'
  }
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
