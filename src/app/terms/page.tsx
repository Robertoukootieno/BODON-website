import { Metadata } from 'next'
import LegalLayout from '@/components/layout/LegalLayout'

export const metadata: Metadata = {
  title: 'Terms of Service - Bodon Expedition Kenya',
  description: 'Read the terms and conditions for using Bodon Expedition Kenya services. Understand your rights and responsibilities when booking tours and car rentals.',
  keywords: ['terms of service', 'terms and conditions', 'booking terms', 'user agreement'],
}

export default function TermsOfServicePage() {
  return (
    <LegalLayout
      title="Terms of Service"
      lastUpdated="December 22, 2024"
      description="These Terms of Service govern your use of Bodon Expedition Kenya's website and services. By using our services, you agree to these terms."
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Acceptance of Terms</h2>
          <p className="text-neutral-600 leading-relaxed">
            By accessing and using the Bodon Expedition Kenya website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Services Offered</h2>
          <p className="text-neutral-600 leading-relaxed mb-4">
            Bodon Expedition Kenya provides the following services:
          </p>
          <ul className="list-disc list-inside space-y-2 text-neutral-600">
            <li>Safari tours and wildlife expeditions</li>
            <li>Cultural and adventure tours</li>
            <li>Mountain climbing expeditions</li>
            <li>Beach and coastal tours</li>
            <li>Car rental services (economy, SUV, 4WD, vans)</li>
            <li>Professional driver services</li>
            <li>Travel consultation and planning</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Booking and Reservations</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-neutral-800 mb-2">Booking Process</h3>
              <ul className="list-disc list-inside space-y-1 text-neutral-600">
                <li>All bookings must be made through our official website or authorized agents</li>
                <li>Bookings are subject to availability and confirmation</li>
                <li>A valid form of identification is required for all bookings</li>
                <li>Full payment or deposit may be required to secure your booking</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-neutral-800 mb-2">Booking Confirmation</h3>
              <p className="text-neutral-600 leading-relaxed">
                Your booking is confirmed only when you receive a written confirmation from us via email. Please review all details carefully and notify us immediately of any discrepancies.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-neutral-800 mb-2">Changes and Modifications</h3>
              <ul className="list-disc list-inside space-y-1 text-neutral-600">
                <li>Changes to bookings are subject to availability and may incur additional charges</li>
                <li>Requests for changes must be made at least 48 hours before the service date</li>
                <li>Some promotional rates may not be changeable or refundable</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Payment Terms</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-neutral-800 mb-2">Accepted Payment Methods</h3>
              <ul className="list-disc list-inside space-y-1 text-neutral-600">
                <li>Credit and debit cards (Visa, Mastercard)</li>
                <li>M-Pesa mobile payments</li>
                <li>PayPal</li>
                <li>Bank transfers</li>
                <li>Cash payments (for local bookings)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-neutral-800 mb-2">Payment Schedule</h3>
              <ul className="list-disc list-inside space-y-1 text-neutral-600">
                <li>Full payment is required for bookings made within 7 days of service date</li>
                <li>For advance bookings, a 50% deposit is required with the balance due 7 days before service</li>
                <li>Car rental bookings require full payment or authorized credit card hold</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-neutral-800 mb-2">Currency and Pricing</h3>
              <p className="text-neutral-600 leading-relaxed">
                All prices are quoted in Kenyan Shillings (KES) unless otherwise specified. Prices are subject to change without notice until booking is confirmed and payment is received.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Cancellation Policy</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-neutral-800 mb-2">Tour Cancellations</h3>
              <ul className="list-disc list-inside space-y-1 text-neutral-600">
                <li>More than 14 days: Full refund minus 10% processing fee</li>
                <li>7-14 days: 50% refund</li>
                <li>3-7 days: 25% refund</li>
                <li>Less than 3 days: No refund</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-neutral-800 mb-2">Car Rental Cancellations</h3>
              <ul className="list-disc list-inside space-y-1 text-neutral-600">
                <li>More than 48 hours: Full refund</li>
                <li>24-48 hours: 50% refund</li>
                <li>Less than 24 hours: No refund</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-neutral-800 mb-2">Force Majeure</h3>
              <p className="text-neutral-600 leading-relaxed">
                In case of circumstances beyond our control (natural disasters, political unrest, pandemics), we will work with you to reschedule or provide appropriate compensation.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Customer Responsibilities</h2>
          <ul className="list-disc list-inside space-y-2 text-neutral-600">
            <li>Provide accurate and complete information during booking</li>
            <li>Arrive on time for scheduled services</li>
            <li>Carry valid identification and required travel documents</li>
            <li>Follow safety instructions and guidelines provided by our staff</li>
            <li>Respect local customs, wildlife, and environment</li>
            <li>Report any issues or concerns immediately to our staff</li>
            <li>For car rentals: possess a valid driving license and follow traffic laws</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Liability and Insurance</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-neutral-800 mb-2">Our Liability</h3>
              <p className="text-neutral-600 leading-relaxed">
                While we take every precaution to ensure your safety and satisfaction, our liability is limited to the cost of services provided. We are not liable for delays, changes, or cancellations due to circumstances beyond our control.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-neutral-800 mb-2">Insurance Coverage</h3>
              <ul className="list-disc list-inside space-y-1 text-neutral-600">
                <li>All tour vehicles are covered by comprehensive insurance</li>
                <li>Car rental vehicles include basic insurance coverage</li>
                <li>We strongly recommend personal travel insurance for all customers</li>
                <li>Additional insurance options are available upon request</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Intellectual Property</h2>
          <p className="text-neutral-600 leading-relaxed">
            All content on this website, including text, graphics, logos, images, and software, is the property of Bodon Expedition Kenya and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our written permission.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Privacy and Data Protection</h2>
          <p className="text-neutral-600 leading-relaxed">
            Your privacy is important to us. Please review our <a href="/privacy" className="text-primary-600 hover:underline">Privacy Policy</a> to understand how we collect, use, and protect your personal information.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Dispute Resolution</h2>
          <p className="text-neutral-600 leading-relaxed">
            Any disputes arising from these terms or our services will be resolved through mediation and, if necessary, arbitration in accordance with Kenyan law. The courts of Nairobi, Kenya shall have exclusive jurisdiction.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Modifications to Terms</h2>
          <p className="text-neutral-600 leading-relaxed">
            We reserve the right to modify these terms at any time. Changes will be posted on our website with an updated effective date. Your continued use of our services after such changes constitutes acceptance of the new terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Contact Information</h2>
          <p className="text-neutral-600 leading-relaxed mb-4">
            For questions about these Terms of Service, please contact us:
          </p>
          <div className="bg-neutral-50 rounded-lg p-6">
            <p className="text-neutral-700"><strong>Bodon Expedition Kenya</strong></p>
            <p className="text-neutral-600">P.O Box 26872, G.P.O Nairobi, Kenya</p>
            <p className="text-neutral-600">Email: <a href="mailto:legal@bodonexpedition.com" className="text-primary-600 hover:underline">legal@bodonexpedition.com</a></p>
            <p className="text-neutral-600">Phone: <a href="tel:+254758270982" className="text-primary-600 hover:underline">+254-758270982</a></p>
          </div>
        </section>
      </div>
    </LegalLayout>
  )
}
