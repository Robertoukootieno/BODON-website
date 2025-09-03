import axios from 'axios'

interface MpesaConfig {
  consumerKey: string
  consumerSecret: string
  shortcode: string
  passkey: string
  environment: 'sandbox' | 'production'
}

const config: MpesaConfig = {
  consumerKey: process.env.MPESA_CONSUMER_KEY || '',
  consumerSecret: process.env.MPESA_CONSUMER_SECRET || '',
  shortcode: process.env.MPESA_SHORTCODE || '',
  passkey: process.env.MPESA_PASSKEY || '',
  environment: (process.env.MPESA_ENVIRONMENT as 'sandbox' | 'production') || 'sandbox',
}

const baseURL = config.environment === 'sandbox' 
  ? 'https://sandbox.safaricom.co.ke' 
  : 'https://api.safaricom.co.ke'

export interface STKPushParams {
  phoneNumber: string
  amount: number
  accountReference: string
  transactionDesc: string
  callbackUrl: string
}

export interface MpesaResponse {
  success: boolean
  data?: any
  error?: string
}

async function getAccessToken(): Promise<string> {
  const auth = Buffer.from(`${config.consumerKey}:${config.consumerSecret}`).toString('base64')
  
  try {
    const response = await axios.get(`${baseURL}/oauth/v1/generate?grant_type=client_credentials`, {
      headers: {
        Authorization: `Basic ${auth}`,
      },
    })
    
    return response.data.access_token
  } catch (error) {
    console.error('M-Pesa access token error:', error)
    throw new Error('Failed to get M-Pesa access token')
  }
}

function generateTimestamp(): string {
  const now = new Date()
  const year = now.getFullYear()
  const month = String(now.getMonth() + 1).padStart(2, '0')
  const day = String(now.getDate()).padStart(2, '0')
  const hour = String(now.getHours()).padStart(2, '0')
  const minute = String(now.getMinutes()).padStart(2, '0')
  const second = String(now.getSeconds()).padStart(2, '0')
  
  return `${year}${month}${day}${hour}${minute}${second}`
}

function generatePassword(timestamp: string): string {
  const data = config.shortcode + config.passkey + timestamp
  return Buffer.from(data).toString('base64')
}

export async function initiateSTKPush({
  phoneNumber,
  amount,
  accountReference,
  transactionDesc,
  callbackUrl,
}: STKPushParams): Promise<MpesaResponse> {
  try {
    const accessToken = await getAccessToken()
    const timestamp = generateTimestamp()
    const password = generatePassword(timestamp)
    
    // Format phone number (remove + and ensure it starts with 254)
    const formattedPhone = phoneNumber.replace(/^\+/, '').replace(/^0/, '254')
    
    const requestBody = {
      BusinessShortCode: config.shortcode,
      Password: password,
      Timestamp: timestamp,
      TransactionType: 'CustomerPayBillOnline',
      Amount: Math.round(amount),
      PartyA: formattedPhone,
      PartyB: config.shortcode,
      PhoneNumber: formattedPhone,
      CallBackURL: callbackUrl,
      AccountReference: accountReference,
      TransactionDesc: transactionDesc,
    }
    
    const response = await axios.post(
      `${baseURL}/mpesa/stkpush/v1/processrequest`,
      requestBody,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      }
    )
    
    if (response.data.ResponseCode === '0') {
      return {
        success: true,
        data: {
          checkoutRequestId: response.data.CheckoutRequestID,
          merchantRequestId: response.data.MerchantRequestID,
          responseCode: response.data.ResponseCode,
          responseDescription: response.data.ResponseDescription,
          customerMessage: response.data.CustomerMessage,
        },
      }
    } else {
      return {
        success: false,
        error: response.data.ResponseDescription || 'STK Push failed',
      }
    }
  } catch (error) {
    console.error('M-Pesa STK Push error:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'STK Push failed',
    }
  }
}

export async function querySTKPushStatus(checkoutRequestId: string): Promise<MpesaResponse> {
  try {
    const accessToken = await getAccessToken()
    const timestamp = generateTimestamp()
    const password = generatePassword(timestamp)
    
    const requestBody = {
      BusinessShortCode: config.shortcode,
      Password: password,
      Timestamp: timestamp,
      CheckoutRequestID: checkoutRequestId,
    }
    
    const response = await axios.post(
      `${baseURL}/mpesa/stkpushquery/v1/query`,
      requestBody,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      }
    )
    
    return {
      success: true,
      data: {
        responseCode: response.data.ResponseCode,
        responseDescription: response.data.ResponseDescription,
        merchantRequestId: response.data.MerchantRequestID,
        checkoutRequestId: response.data.CheckoutRequestID,
        resultCode: response.data.ResultCode,
        resultDesc: response.data.ResultDesc,
      },
    }
  } catch (error) {
    console.error('M-Pesa query error:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Query failed',
    }
  }
}

export function validateMpesaCallback(callbackData: any): {
  isValid: boolean
  transactionId?: string
  amount?: number
  phoneNumber?: string
  resultCode?: number
  resultDesc?: string
} {
  try {
    const { Body } = callbackData
    const { stkCallback } = Body
    
    if (!stkCallback) {
      return { isValid: false }
    }
    
    const { ResultCode, ResultDesc, CallbackMetadata } = stkCallback
    
    if (ResultCode === 0 && CallbackMetadata) {
      const metadata = CallbackMetadata.Item
      const transactionId = metadata.find((item: any) => item.Name === 'MpesaReceiptNumber')?.Value
      const amount = metadata.find((item: any) => item.Name === 'Amount')?.Value
      const phoneNumber = metadata.find((item: any) => item.Name === 'PhoneNumber')?.Value
      
      return {
        isValid: true,
        transactionId,
        amount,
        phoneNumber,
        resultCode: ResultCode,
        resultDesc: ResultDesc,
      }
    }
    
    return {
      isValid: false,
      resultCode: ResultCode,
      resultDesc: ResultDesc,
    }
  } catch (error) {
    console.error('M-Pesa callback validation error:', error)
    return { isValid: false }
  }
}
