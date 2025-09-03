import { NextRequest, NextResponse } from 'next/server'
import { handleWebhook } from '@/lib/payments/stripe'
import { headers } from 'next/headers'

export async function POST(request: NextRequest) {
  try {
    const body = await request.text()
    const headersList = headers()
    const signature = headersList.get('stripe-signature')

    if (!signature) {
      return NextResponse.json(
        { success: false, error: 'Missing signature' },
        { status: 400 }
      )
    }

    const result = await handleWebhook(body, signature)

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error },
        { status: 400 }
      )
    }

    const event = result.event!

    // Handle different event types
    switch (event.type) {
      case 'payment_intent.succeeded':
        // Handle successful payment
        console.log('Payment succeeded:', event.data.object)
        // Update booking status in database
        break

      case 'payment_intent.payment_failed':
        // Handle failed payment
        console.log('Payment failed:', event.data.object)
        // Update booking status in database
        break

      default:
        console.log(`Unhandled event type: ${event.type}`)
    }

    return NextResponse.json({ success: true, received: true })
  } catch (error) {
    console.error('Stripe webhook error:', error)
    return NextResponse.json(
      { success: false, error: 'Webhook processing failed' },
      { status: 500 }
    )
  }
}
