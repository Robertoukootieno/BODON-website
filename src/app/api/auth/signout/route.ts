import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const response = NextResponse.json({
      success: true,
      message: 'Signed out successfully',
    })

    // Remove authentication cookie
    response.cookies.set('bodon-auth-token', '', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 0,
      path: '/',
    })

    return response

  } catch (error) {
    console.error('Sign out error:', error)
    
    return NextResponse.json(
      { error: 'An error occurred during sign out' },
      { status: 500 }
    )
  }
}
