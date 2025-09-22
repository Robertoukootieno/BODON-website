import { type ClassValue, clsx } from 'clsx'

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

export function formatCurrency(amount: number, currency: string = 'KES'): string {
  if (currency === 'KES') {
    return `KES ${amount.toLocaleString('en-KE')}`
  }
  return new Intl.NumberFormat('en-KE', {
    style: 'currency',
    currency,
  }).format(amount)
}

// Currency conversion rates (approximate, should be fetched from API in production)
export const CURRENCY_RATES = {
  USD_TO_KES: 150,
  EUR_TO_KES: 165,
  GBP_TO_KES: 190,
}

// Convert USD prices to KES
export function convertUSDToKES(usdAmount: number): number {
  return Math.round(usdAmount * CURRENCY_RATES.USD_TO_KES)
}

// Format price with KES currency
export function formatKESPrice(amount: number): string {
  return `KES ${amount.toLocaleString('en-KE')}`
}

export function formatDate(date: Date | string, options?: Intl.DateTimeFormatOptions): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    ...options,
  }).format(dateObj)
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-')
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength).trim() + '...'
}

export function generateId(): string {
  return Math.random().toString(36).substr(2, 9)
}

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^\+?[\d\s\-\(\)]+$/
  return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10
}
