import { type ClassValue, clsx } from 'clsx'

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

export function formatCurrency(amount: number, currency: string = 'USD'): string {
  if (currency === 'USD') {
    return `$${amount.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`
  }
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount)
}

// Format price in USD (alias for formatCurrency)
export function formatUSDPrice(amount: number): string {
  return formatCurrency(amount, 'USD')
}

// Legacy function for backward compatibility (kept for reference)
export function formatKESPrice(amount: number): string {
  return formatCurrency(amount, 'USD')
}

// Currency conversion rates (approximate, should be fetched from API in production)
export const CURRENCY_RATES = {
  KES_TO_USD: 0.0067,
  EUR_TO_USD: 1.1,
  GBP_TO_USD: 1.27,
}

// Convert KES prices to USD
export function convertKESToUSD(kesAmount: number): number {
  return Math.round(kesAmount * CURRENCY_RATES.KES_TO_USD)
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
