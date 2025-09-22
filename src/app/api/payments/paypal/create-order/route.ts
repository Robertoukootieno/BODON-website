import { NextRequest, NextResponse } from 'next/server'
import { createOrder } from '@/lib/payments/paypal'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { amount, currency, description, bookingId } = body

    if (!amount || amount <= 0) {
      return NextResponse.json(
        { success: false, error: 'Invalid amount' },
        { status: 400 }
      )
    }

    const returnUrl = `${process.env.SITE_URL}/booking/success?payment=paypal`
    const cancelUrl = `${process.env.SITE_URL}/booking/cancelled?payment=paypal`

    const result = await createOrder({
      amount,
      currency: currency || 'KES',
      description: description || 'Tour booking payment',
      returnUrl,
      cancelUrl,
      metadata: { bookingId },
    })

    if (result.success) {
      return NextResponse.json({
        success: true,
        orderId: result.data.orderId,
        approvalUrl: result.data.approvalUrl,
      })
    } else {
      return NextResponse.json(
        { success: false, error: result.error },
        { status: 400 }
      )
    }
  } catch (error) {
    console.error('PayPal create order API error:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}
