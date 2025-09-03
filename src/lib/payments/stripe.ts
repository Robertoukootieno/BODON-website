import Stripe from 'stripe'

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY is not set')
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2024-06-20',
})

export interface CreatePaymentIntentParams {
  amount: number
  currency?: string
  metadata?: Record<string, string>
  customerId?: string
}

export async function createPaymentIntent({
  amount,
  currency = 'usd',
  metadata = {},
  customerId,
}: CreatePaymentIntentParams) {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Convert to cents
      currency,
      metadata,
      customer: customerId,
      automatic_payment_methods: {
        enabled: true,
      },
    })

    return {
      success: true,
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id,
    }
  } catch (error) {
    console.error('Stripe payment intent creation failed:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Payment intent creation failed',
    }
  }
}

export async function confirmPayment(paymentIntentId: string) {
  try {
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId)
    
    return {
      success: paymentIntent.status === 'succeeded',
      status: paymentIntent.status,
      paymentIntent,
    }
  } catch (error) {
    console.error('Stripe payment confirmation failed:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Payment confirmation failed',
    }
  }
}

export async function createCustomer(email: string, name: string) {
  try {
    const customer = await stripe.customers.create({
      email,
      name,
    })

    return {
      success: true,
      customerId: customer.id,
    }
  } catch (error) {
    console.error('Stripe customer creation failed:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Customer creation failed',
    }
  }
}

export async function refundPayment(paymentIntentId: string, amount?: number) {
  try {
    const refund = await stripe.refunds.create({
      payment_intent: paymentIntentId,
      amount: amount ? Math.round(amount * 100) : undefined,
    })

    return {
      success: true,
      refundId: refund.id,
      status: refund.status,
    }
  } catch (error) {
    console.error('Stripe refund failed:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Refund failed',
    }
  }
}

export async function handleWebhook(body: string, signature: string) {
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET

  if (!webhookSecret) {
    throw new Error('STRIPE_WEBHOOK_SECRET is not set')
  }

  try {
    const event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
    
    return {
      success: true,
      event,
    }
  } catch (error) {
    console.error('Stripe webhook verification failed:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Webhook verification failed',
    }
  }
}
