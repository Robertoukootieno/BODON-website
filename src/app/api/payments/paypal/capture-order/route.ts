import { NextRequest, NextResponse } from 'next/server'
import { captureOrder } from '@/lib/payments/paypal'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { orderId } = body

    if (!orderId) {
      return NextResponse.json(
        { success: false, error: 'Order ID is required' },
        { status: 400 }
      )
    }

    const result = await captureOrder(orderId)

    if (result.success) {
      // TODO: Update booking status in database
      console.log('PayPal payment captured:', result.data)

      return NextResponse.json({
        success: true,
        data: result.data,
        message: 'Payment captured successfully',
      })
    } else {
      return NextResponse.json(
        { success: false, error: result.error },
        { status: 400 }
      )
    }
  } catch (error) {
    console.error('PayPal capture order API error:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}
