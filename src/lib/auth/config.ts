export const AUTH_CONFIG = {
  JWT_SECRET: process.env.JWT_SECRET || 'your-super-secret-jwt-key-change-in-production',
  JWT_EXPIRES_IN: '7d',
  COOKIE_NAME: 'bodon-auth-token',
  COOKIE_MAX_AGE: 7 * 24 * 60 * 60 * 1000, // 7 days in milliseconds
  BCRYPT_ROUNDS: 12,
  SESSION_TIMEOUT: 7 * 24 * 60 * 60 * 1000, // 7 days
} as const

export const AUTH_ROUTES = {
  SIGN_IN: '/auth/signin',
  SIGN_UP: '/auth/signup',
  FORGOT_PASSWORD: '/auth/forgot-password',
  RESET_PASSWORD: '/auth/reset-password',
  DASHBOARD: '/dashboard',
  PROFILE: '/profile',
} as const

export const PUBLIC_ROUTES = [
  '/',
  '/about',
  '/tours',
  '/car-rental',
  '/blog',
  '/press',
  '/contact',
  '/faq',
  '/travel-tips',
  '/help/booking',
  '/help/payment',
  '/privacy',
  '/terms',
  '/refund',
  '/cookies',
  AUTH_ROUTES.SIGN_IN,
  AUTH_ROUTES.SIGN_UP,
  AUTH_ROUTES.FORGOT_PASSWORD,
  AUTH_ROUTES.RESET_PASSWORD,
] as const

export const PROTECTED_ROUTES = [
  AUTH_ROUTES.DASHBOARD,
  AUTH_ROUTES.PROFILE,
  '/bookings',
  '/booking',
] as const
