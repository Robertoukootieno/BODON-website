import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getAuthTokenFromRequest, verifyToken } from '@/lib/auth/utils'
import { AUTH_ROUTES, PUBLIC_ROUTES, PROTECTED_ROUTES } from '@/lib/auth/config'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  
  // Check if the route is public
  const isPublicRoute = PUBLIC_ROUTES.some(route => {
    if (route === pathname) return true
    // Handle dynamic routes
    if (route.includes('[') || pathname.startsWith(route + '/')) return true
    return false
  })

  // Check if the route is protected
  const isProtectedRoute = PROTECTED_ROUTES.some(route => {
    if (route === pathname) return true
    // Handle dynamic routes
    if (pathname.startsWith(route + '/')) return true
    return false
  })

  // Get authentication token
  const token = getAuthTokenFromRequest(request)
  const isAuthenticated = token && verifyToken(token)

  // If accessing a protected route without authentication
  if (isProtectedRoute && !isAuthenticated) {
    const signInUrl = new URL(AUTH_ROUTES.SIGN_IN, request.url)
    signInUrl.searchParams.set('redirectTo', pathname)
    return NextResponse.redirect(signInUrl)
  }

  // If accessing auth routes while authenticated, redirect to dashboard
  if (isAuthenticated && (pathname === AUTH_ROUTES.SIGN_IN || pathname === AUTH_ROUTES.SIGN_UP)) {
    return NextResponse.redirect(new URL(AUTH_ROUTES.DASHBOARD, request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
