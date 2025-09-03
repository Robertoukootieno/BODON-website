// User Types
export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  phone?: string
  avatar?: string
  role: 'USER' | 'ADMIN'
  createdAt: Date
  updatedAt: Date
}

// Tour Types
export interface Tour {
  id: string
  title: string
  slug: string
  description: string
  shortDescription: string
  images: string[]
  price: number
  duration: number
  maxGroupSize: number
  difficulty: 'EASY' | 'MODERATE' | 'CHALLENGING'
  category: TourCategory
  location: string
  highlights: string[]
  included: string[]
  excluded: string[]
  itinerary: ItineraryDay[]
  isActive: boolean
  featured: boolean
  rating: number
  reviewCount: number
  createdAt: Date
  updatedAt: Date
}

export interface TourCategory {
  id: string
  name: string
  slug: string
  description: string
  image: string
}

export interface ItineraryDay {
  day: number
  title: string
  description: string
  activities: string[]
  accommodation?: string
  meals: string[]
}

// Booking Types
export interface Booking {
  id: string
  userId: string
  tourId: string
  tour: Tour
  user: User
  startDate: Date
  endDate: Date
  adults: number
  children: number
  totalPrice: number
  status: BookingStatus
  paymentStatus: PaymentStatus
  paymentMethod: PaymentMethod
  specialRequests?: string
  emergencyContact: EmergencyContact
  createdAt: Date
  updatedAt: Date
}

export type BookingStatus = 'PENDING' | 'CONFIRMED' | 'CANCELLED' | 'COMPLETED'
export type PaymentStatus = 'PENDING' | 'PAID' | 'FAILED' | 'REFUNDED'
export type PaymentMethod = 'MPESA' | 'PAYPAL' | 'STRIPE' | 'BANK_TRANSFER'

export interface EmergencyContact {
  name: string
  phone: string
  relationship: string
}

// Payment Types
export interface Payment {
  id: string
  bookingId: string
  amount: number
  currency: string
  method: PaymentMethod
  status: PaymentStatus
  transactionId?: string
  metadata?: Record<string, any>
  createdAt: Date
  updatedAt: Date
}

// Review Types
export interface Review {
  id: string
  userId: string
  tourId: string
  user: User
  tour: Tour
  rating: number
  title: string
  comment: string
  images?: string[]
  isVerified: boolean
  createdAt: Date
  updatedAt: Date
}

// Form Types
export interface ContactForm {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
}

export interface BookingForm {
  tourId: string
  startDate: string
  adults: number
  children: number
  specialRequests?: string
  emergencyContact: EmergencyContact
}

// API Response Types
export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  message?: string
  error?: string
}

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

// Search and Filter Types
export interface TourFilters {
  category?: string
  minPrice?: number
  maxPrice?: number
  duration?: number
  difficulty?: string
  location?: string
  startDate?: string
  endDate?: string
}

export interface SearchParams {
  query?: string
  filters?: TourFilters
  sort?: 'price_asc' | 'price_desc' | 'rating' | 'duration' | 'newest'
  page?: number
  limit?: number
}
