import axios from 'axios'

interface PayPalConfig {
  clientId: string
  clientSecret: string
  mode: 'sandbox' | 'live'
}

const config: PayPalConfig = {
  clientId: process.env.PAYPAL_CLIENT_ID || '',
  clientSecret: process.env.PAYPAL_CLIENT_SECRET || '',
  mode: (process.env.PAYPAL_MODE as 'sandbox' | 'live') || 'sandbox',
}

const baseURL = config.mode === 'sandbox' 
  ? 'https://api-m.sandbox.paypal.com' 
  : 'https://api-m.paypal.com'

export interface CreateOrderParams {
  amount: number
  currency?: string
  description?: string
  returnUrl: string
  cancelUrl: string
  metadata?: Record<string, string>
}

export interface PayPalResponse {
  success: boolean
  data?: any
  error?: string
}

async function getAccessToken(): Promise<string> {
  const auth = Buffer.from(`${config.clientId}:${config.clientSecret}`).toString('base64')
  
  try {
    const response = await axios.post(
      `${baseURL}/v1/oauth2/token`,
      'grant_type=client_credentials',
      {
        headers: {
          Authorization: `Basic ${auth}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    )
    
    return response.data.access_token
  } catch (error) {
    console.error('PayPal access token error:', error)
    throw new Error('Failed to get PayPal access token')
  }
}

export async function createOrder({
  amount,
  currency = 'KES',
  description = 'Tour booking payment',
  returnUrl,
  cancelUrl,
  metadata = {},
}: CreateOrderParams): Promise<PayPalResponse> {
  try {
    const accessToken = await getAccessToken()
    
    const orderData = {
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: {
            currency_code: currency,
            value: amount.toFixed(2),
          },
          description,
          custom_id: metadata.bookingId || '',
        },
      ],
      application_context: {
        return_url: returnUrl,
        cancel_url: cancelUrl,
        brand_name: 'Bodon Expedition Kenya',
        landing_page: 'BILLING',
        user_action: 'PAY_NOW',
      },
    }
    
    const response = await axios.post(
      `${baseURL}/v2/checkout/orders`,
      orderData,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      }
    )
    
    const approvalUrl = response.data.links.find(
      (link: any) => link.rel === 'approve'
    )?.href
    
    return {
      success: true,
      data: {
        orderId: response.data.id,
        approvalUrl,
        status: response.data.status,
      },
    }
  } catch (error) {
    console.error('PayPal order creation error:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Order creation failed',
    }
  }
}

export async function captureOrder(orderId: string): Promise<PayPalResponse> {
  try {
    const accessToken = await getAccessToken()
    
    const response = await axios.post(
      `${baseURL}/v2/checkout/orders/${orderId}/capture`,
      {},
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      }
    )
    
    const captureData = response.data.purchase_units[0].payments.captures[0]
    
    return {
      success: response.data.status === 'COMPLETED',
      data: {
        orderId: response.data.id,
        status: response.data.status,
        captureId: captureData.id,
        amount: captureData.amount,
        transactionId: captureData.id,
      },
    }
  } catch (error) {
    console.error('PayPal order capture error:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Order capture failed',
    }
  }
}

export async function getOrderDetails(orderId: string): Promise<PayPalResponse> {
  try {
    const accessToken = await getAccessToken()
    
    const response = await axios.get(
      `${baseURL}/v2/checkout/orders/${orderId}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )
    
    return {
      success: true,
      data: response.data,
    }
  } catch (error) {
    console.error('PayPal order details error:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to get order details',
    }
  }
}

export async function refundCapture(captureId: string, amount?: number): Promise<PayPalResponse> {
  try {
    const accessToken = await getAccessToken()
    
    const refundData = amount ? {
      amount: {
        currency_code: 'USD',
        value: amount.toFixed(2),
      },
    } : {}
    
    const response = await axios.post(
      `${baseURL}/v2/payments/captures/${captureId}/refund`,
      refundData,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      }
    )
    
    return {
      success: response.data.status === 'COMPLETED',
      data: {
        refundId: response.data.id,
        status: response.data.status,
        amount: response.data.amount,
      },
    }
  } catch (error) {
    console.error('PayPal refund error:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Refund failed',
    }
  }
}

export function validateWebhook(headers: any, body: string): boolean {
  // PayPal webhook validation would go here
  // This is a simplified version - in production, you'd verify the webhook signature
  try {
    const event = JSON.parse(body)
    return event && event.event_type && event.resource
  } catch {
    return false
  }
}
