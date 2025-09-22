import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { cookies } from 'next/headers'
import { NextRequest } from 'next/server'
import { AUTH_CONFIG } from './config'

export interface JWTPayload {
  userId: string
  email: string
  role: string
  iat?: number
  exp?: number
}

export interface AuthUser {
  id: string
  email: string
  firstName: string
  lastName: string
  phone?: string
  avatar?: string
  role: string
}

/**
 * Hash a password using bcrypt
 */
export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, AUTH_CONFIG.BCRYPT_ROUNDS)
}

/**
 * Verify a password against a hash
 */
export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash)
}

/**
 * Generate a JWT token
 */
export function generateToken(payload: Omit<JWTPayload, 'iat' | 'exp'>): string {
  return jwt.sign(payload, AUTH_CONFIG.JWT_SECRET, {
    expiresIn: AUTH_CONFIG.JWT_EXPIRES_IN,
  })
}

/**
 * Verify and decode a JWT token
 */
export function verifyToken(token: string): JWTPayload | null {
  try {
    return jwt.verify(token, AUTH_CONFIG.JWT_SECRET) as JWTPayload
  } catch (error) {
    return null
  }
}

/**
 * Set authentication cookie
 */
export function setAuthCookie(token: string) {
  const cookieStore = cookies()
  cookieStore.set(AUTH_CONFIG.COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: AUTH_CONFIG.COOKIE_MAX_AGE,
    path: '/',
  })
}

/**
 * Get authentication token from cookies
 */
export function getAuthToken(): string | null {
  try {
    const cookieStore = cookies()
    const token = cookieStore.get(AUTH_CONFIG.COOKIE_NAME)
    return token?.value || null
  } catch (error) {
    return null
  }
}

/**
 * Get authentication token from request
 */
export function getAuthTokenFromRequest(request: NextRequest): string | null {
  // Try to get token from cookie
  const token = request.cookies.get(AUTH_CONFIG.COOKIE_NAME)?.value
  if (token) return token

  // Try to get token from Authorization header
  const authHeader = request.headers.get('authorization')
  if (authHeader && authHeader.startsWith('Bearer ')) {
    return authHeader.substring(7)
  }

  return null
}

/**
 * Remove authentication cookie
 */
export function removeAuthCookie() {
  const cookieStore = cookies()
  cookieStore.delete(AUTH_CONFIG.COOKIE_NAME)
}

/**
 * Get current user from token
 */
export async function getCurrentUser(): Promise<AuthUser | null> {
  try {
    const token = getAuthToken()
    if (!token) return null

    const payload = verifyToken(token)
    if (!payload) return null

    // In a real app, you might want to fetch fresh user data from the database
    // For now, we'll return the data from the token
    return {
      id: payload.userId,
      email: payload.email,
      firstName: '', // These would come from the database
      lastName: '',
      role: payload.role,
    }
  } catch (error) {
    return null
  }
}

/**
 * Check if user is authenticated
 */
export async function isAuthenticated(): Promise<boolean> {
  const user = await getCurrentUser()
  return user !== null
}

/**
 * Check if user has specific role
 */
export async function hasRole(role: string): Promise<boolean> {
  const user = await getCurrentUser()
  return user?.role === role
}

/**
 * Generate a secure random token for password reset, etc.
 */
export function generateSecureToken(): string {
  return Math.random().toString(36).substring(2, 15) + 
         Math.random().toString(36).substring(2, 15) +
         Date.now().toString(36)
}

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Validate password strength
 */
export function isValidPassword(password: string): {
  isValid: boolean
  errors: string[]
} {
  const errors: string[] = []
  
  if (password.length < 8) {
    errors.push('Password must be at least 8 characters long')
  }
  
  if (!/[A-Z]/.test(password)) {
    errors.push('Password must contain at least one uppercase letter')
  }
  
  if (!/[a-z]/.test(password)) {
    errors.push('Password must contain at least one lowercase letter')
  }
  
  if (!/\d/.test(password)) {
    errors.push('Password must contain at least one number')
  }
  
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    errors.push('Password must contain at least one special character')
  }
  
  return {
    isValid: errors.length === 0,
    errors
  }
}
