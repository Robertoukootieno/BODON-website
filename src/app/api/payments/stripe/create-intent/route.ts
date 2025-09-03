import { NextRequest, NextResponse } from 'next/server'
import { createPaymentIntent } from '@/lib/payments/stripe'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { amount, currency, metadata, customerId } = body

    if (!amount || amount <= 0) {
      return NextResponse.json(
        { success: false, error: 'Invalid amount' },
        { status: 400 }
      )
    }

    const result = await createPaymentIntent({
      amount,
      currency,
      metadata,
      customerId,
    })

    if (result.success) {
      return NextResponse.json({
        success: true,
        clientSecret: result.clientSecret,
        paymentIntentId: result.paymentIntentId,
      })
    } else {
      return NextResponse.json(
        { success: false, error: result.error },
        { status: 400 }
      )
    }
  } catch (error) {
    console.error('Stripe payment intent API error:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}
