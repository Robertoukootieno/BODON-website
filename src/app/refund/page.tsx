import { Metadata } from 'next'
import LegalLayout from '@/components/layout/LegalLayout'

export const metadata: Metadata = {
  title: 'Refund Policy - Bodon Expedition Kenya',
  description: 'Understand Bodon Expedition Kenya\'s refund and cancellation policies for tours and car rental services. Learn about our fair and transparent refund process.',
  keywords: ['refund policy', 'cancellation policy', 'money back guarantee', 'booking refunds'],
}

export default function RefundPolicyPage() {
  return (
    <LegalLayout
      title="Refund Policy"
      lastUpdated="December 22, 2024"
      description="This Refund Policy outlines the terms and conditions for refunds and cancellations for Bodon Expedition Kenya's tours and car rental services."
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Overview</h2>
          <p className="text-neutral-600 leading-relaxed mb-4">
            At Bodon Expedition Kenya, we understand that travel plans can change. This refund policy is designed to be fair to both our customers and our business, taking into account the advance planning and resources required for our services.
          </p>
          <p className="text-neutral-600 leading-relaxed">
            All refund requests must be submitted in writing via email to <a href="mailto:refunds@bodonexpedition.com" className="text-primary-600 hover:underline">refunds@bodonexpedition.com</a> and will be processed according to the terms outlined below.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Tour Cancellation and Refund Policy</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-neutral-800 mb-3">Standard Tours (Safari, Cultural, Adventure, Beach)</h3>
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-neutral-700">More than 30 days before tour</span>
                    <span className="font-bold text-green-600">100% refund</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-neutral-700">15-30 days before tour</span>
                    <span className="font-bold text-blue-600">75% refund</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-neutral-700">7-14 days before tour</span>
                    <span className="font-bold text-orange-600">50% refund</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-neutral-700">3-7 days before tour</span>
                    <span className="font-bold text-red-600">25% refund</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-neutral-700">Less than 3 days or no-show</span>
                    <span className="font-bold text-red-700">No refund</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-neutral-800 mb-3">Mountain Climbing Expeditions</h3>
              <p className="text-neutral-600 leading-relaxed mb-3">
                Due to the specialized nature and advance preparation required for mountain climbing expeditions:
              </p>
              <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-6">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-neutral-700">More than 60 days before expedition</span>
                    <span className="font-bold text-green-600">90% refund</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-neutral-700">30-60 days before expedition</span>
                    <span className="font-bold text-blue-600">60% refund</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-neutral-700">14-30 days before expedition</span>
                    <span className="font-bold text-orange-600">30% refund</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-neutral-700">Less than 14 days or no-show</span>
                    <span className="font-bold text-red-700">No refund</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Car Rental Cancellation and Refund Policy</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-neutral-800 mb-3">Standard Car Rentals</h3>
              <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-6">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-neutral-700">More than 48 hours before pickup</span>
                    <span className="font-bold text-green-600">100% refund</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-neutral-700">24-48 hours before pickup</span>
                    <span className="font-bold text-orange-600">50% refund</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-neutral-700">Less than 24 hours or no-show</span>
                    <span className="font-bold text-red-700">No refund</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-neutral-800 mb-3">Long-term Rentals (7+ days)</h3>
              <p className="text-neutral-600 leading-relaxed mb-3">
                For rentals of 7 days or more, different terms apply:
              </p>
              <ul className="list-disc list-inside space-y-1 text-neutral-600">
                <li>More than 7 days before pickup: 100% refund</li>
                <li>3-7 days before pickup: 75% refund</li>
                <li>Less than 3 days: 25% refund</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Special Circumstances</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-neutral-800 mb-2">Medical Emergencies</h3>
              <p className="text-neutral-600 leading-relaxed">
                In case of documented medical emergencies preventing travel, we offer flexible rescheduling options or partial refunds on a case-by-case basis. Medical documentation may be required.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-neutral-800 mb-2">Force Majeure Events</h3>
              <p className="text-neutral-600 leading-relaxed mb-2">
                For cancellations due to circumstances beyond anyone's control, including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-1 text-neutral-600">
                <li>Natural disasters (earthquakes, floods, extreme weather)</li>
                <li>Political unrest or government travel advisories</li>
                <li>Pandemic-related travel restrictions</li>
                <li>Airline strikes or major transportation disruptions</li>
              </ul>
              <p className="text-neutral-600 leading-relaxed mt-2">
                We will work with you to reschedule your booking or provide a full refund, depending on the circumstances.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-neutral-800 mb-2">Service Cancellation by Bodon Expedition</h3>
              <p className="text-neutral-600 leading-relaxed">
                If we need to cancel your booking due to insufficient bookings, equipment failure, or other operational reasons, you will receive a full refund or the option to reschedule at no additional cost.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Refund Process</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-neutral-800 mb-2">How to Request a Refund</h3>
              <ol className="list-decimal list-inside space-y-2 text-neutral-600">
                <li>Email your refund request to <a href="mailto:refunds@bodonexpedition.com" className="text-primary-600 hover:underline">refunds@bodonexpedition.com</a></li>
                <li>Include your booking reference number and reason for cancellation</li>
                <li>Provide any supporting documentation if applicable</li>
                <li>We will acknowledge your request within 24 hours</li>
                <li>Refund processing will begin once your request is approved</li>
              </ol>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-neutral-800 mb-2">Processing Time</h3>
              <ul className="list-disc list-inside space-y-1 text-neutral-600">
                <li><strong>Credit/Debit Cards:</strong> 5-10 business days</li>
                <li><strong>M-Pesa:</strong> 1-3 business days</li>
                <li><strong>PayPal:</strong> 3-5 business days</li>
                <li><strong>Bank Transfer:</strong> 3-7 business days</li>
              </ul>
              <p className="text-neutral-600 leading-relaxed mt-2">
                Processing times may vary depending on your bank or payment provider.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-neutral-800 mb-2">Refund Method</h3>
              <p className="text-neutral-600 leading-relaxed">
                Refunds will be processed using the same payment method used for the original booking. If this is not possible, we will contact you to arrange an alternative refund method.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Non-Refundable Items</h2>
          <p className="text-neutral-600 leading-relaxed mb-4">
            The following items are generally non-refundable:
          </p>
          <ul className="list-disc list-inside space-y-2 text-neutral-600">
            <li>Processing fees and transaction charges</li>
            <li>Third-party services already purchased on your behalf (park fees, permits)</li>
            <li>Special promotional rates (unless otherwise specified)</li>
            <li>Gift certificates and vouchers (unless required by law)</li>
            <li>Additional services consumed during partial completion of tours</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Travel Insurance Recommendation</h2>
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Protect Your Investment</h3>
            <p className="text-blue-800 leading-relaxed">
              We strongly recommend purchasing comprehensive travel insurance to protect against unforeseen circumstances that may affect your travel plans. Travel insurance can provide coverage for trip cancellation, medical emergencies, and other travel-related issues that may not be covered by our refund policy.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Dispute Resolution</h2>
          <p className="text-neutral-600 leading-relaxed">
            If you are not satisfied with our refund decision, you may request a review by contacting our customer service manager. We are committed to resolving all disputes fairly and promptly. If a resolution cannot be reached, disputes may be subject to mediation or arbitration as outlined in our Terms of Service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Policy Updates</h2>
          <p className="text-neutral-600 leading-relaxed">
            This refund policy may be updated from time to time. Any changes will be posted on our website with an updated effective date. Changes will not affect bookings made prior to the policy update.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Contact Information</h2>
          <p className="text-neutral-600 leading-relaxed mb-4">
            For refund requests or questions about this policy, please contact us:
          </p>
          <div className="bg-neutral-50 rounded-lg p-6">
            <p className="text-neutral-700"><strong>Bodon Expedition Kenya</strong></p>
            <p className="text-neutral-600">P.O Box 26872, G.P.O Nairobi, Kenya</p>
            <p className="text-neutral-600">Refunds Email: <a href="mailto:refunds@bodonexpedition.com" className="text-primary-600 hover:underline">refunds@bodonexpedition.com</a></p>
            <p className="text-neutral-600">General Email: <a href="mailto:info@bodonexpedition.com" className="text-primary-600 hover:underline">info@bodonexpedition.com</a></p>
            <p className="text-neutral-600">Phone: <a href="tel:+254758270982" className="text-primary-600 hover:underline">+254-758270982</a></p>
          </div>
        </section>
      </div>
    </LegalLayout>
  )
}
