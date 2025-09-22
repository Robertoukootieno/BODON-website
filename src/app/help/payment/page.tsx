import { Metadata } from 'next'
import Layout from '@/components/layout/Layout'
import PaymentHelpHero from '@/components/sections/PaymentHelpHero'
import PaymentMethods from '@/components/sections/PaymentMethods'
import PaymentSecurity from '@/components/sections/PaymentSecurity'
import PaymentFAQ from '@/components/sections/PaymentFAQ'
import PaymentSupport from '@/components/sections/PaymentSupport'

export const metadata: Metadata = {
  title: 'Payment Help - Secure Payment Options | Bodon Expedition Kenya',
  description: 'Learn about secure payment methods for your Kenya safari booking. We accept M-Pesa, PayPal, credit cards, and bank transfers with full security protection.',
  keywords: ['Kenya safari payment', 'M-Pesa payment', 'secure booking payment', 'PayPal Kenya safari', 'credit card safari booking'],
}

export default function PaymentHelpPage() {
  return (
    <Layout>
      <PaymentHelpHero />
      <PaymentMethods />
      <PaymentSecurity />
      <PaymentFAQ />
      <PaymentSupport />
    </Layout>
  )
}
