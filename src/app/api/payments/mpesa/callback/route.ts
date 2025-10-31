import { NextRequest, NextResponse } from 'next/server'
import { validateMpesaCallback } from '@/lib/payments/mpesa'

// Mark this route as dynamic to prevent static generation
export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    console.log('M-Pesa callback received:', JSON.stringify(body, null, 2))

    const validation = validateMpesaCallback(body)

    if (validation.isValid) {
      // Payment was successful
      console.log('M-Pesa payment successful:', {
        transactionId: validation.transactionId,
        amount: validation.amount,
        phoneNumber: validation.phoneNumber,
      })

      // TODO: Update booking status in database
      // const bookingId = body.Body.stkCallback.CheckoutRequestID
      // await updateBookingPaymentStatus(bookingId, 'PAID', validation.transactionId)

      return NextResponse.json({
        ResultCode: 0,
        ResultDesc: 'Success',
      })
    } else {
      // Payment failed or was cancelled
      console.log('M-Pesa payment failed:', {
        resultCode: validation.resultCode,
        resultDesc: validation.resultDesc,
      })

      // TODO: Update booking status in database
      // const bookingId = body.Body.stkCallback.CheckoutRequestID
      // await updateBookingPaymentStatus(bookingId, 'FAILED')

      return NextResponse.json({
        ResultCode: 1,
        ResultDesc: 'Failed',
      })
    }
  } catch (error) {
    console.error('M-Pesa callback error:', error)
    return NextResponse.json({
      ResultCode: 1,
      ResultDesc: 'Internal server error',
    })
  }
}
