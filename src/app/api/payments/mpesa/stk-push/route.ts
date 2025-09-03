import { NextRequest, NextResponse } from 'next/server'
import { initiateSTKPush } from '@/lib/payments/mpesa'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { phoneNumber, amount, accountReference, transactionDesc } = body

    if (!phoneNumber || !amount || !accountReference) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate phone number format
    const phoneRegex = /^(\+254|254|0)[17]\d{8}$/
    if (!phoneRegex.test(phoneNumber)) {
      return NextResponse.json(
        { success: false, error: 'Invalid phone number format' },
        { status: 400 }
      )
    }

    if (amount <= 0) {
      return NextResponse.json(
        { success: false, error: 'Invalid amount' },
        { status: 400 }
      )
    }

    const callbackUrl = `${process.env.SITE_URL}/api/payments/mpesa/callback`

    const result = await initiateSTKPush({
      phoneNumber,
      amount,
      accountReference,
      transactionDesc: transactionDesc || 'Tour booking payment',
      callbackUrl,
    })

    if (result.success) {
      return NextResponse.json({
        success: true,
        data: result.data,
        message: 'STK Push initiated successfully. Please check your phone.',
      })
    } else {
      return NextResponse.json(
        { success: false, error: result.error },
        { status: 400 }
      )
    }
  } catch (error) {
    console.error('M-Pesa STK Push API error:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}
