import { Metadata } from 'next'
import LegalLayout from '@/components/layout/LegalLayout'

export const metadata: Metadata = {
  title: 'Privacy Policy - Bodon Expedition Kenya',
  description: 'Learn how Bodon Expedition Kenya collects, uses, and protects your personal information. Our comprehensive privacy policy ensures your data security.',
  keywords: ['privacy policy', 'data protection', 'personal information', 'GDPR compliance'],
}

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      lastUpdated="December 22, 2024"
      description="This Privacy Policy describes how Bodon Expedition Kenya collects, uses, and protects your personal information when you use our services."
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Information We Collect</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-neutral-800 mb-2">Personal Information</h3>
              <p className="text-neutral-600 leading-relaxed">
                We collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-neutral-600">
                <li>Make a booking for tours or car rental services</li>
                <li>Create an account on our website</li>
                <li>Subscribe to our newsletter</li>
                <li>Contact us through our contact forms</li>
                <li>Participate in surveys or promotions</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-neutral-800 mb-2">Types of Personal Data</h3>
              <ul className="list-disc list-inside space-y-1 text-neutral-600">
                <li>Name and contact information (email, phone number, address)</li>
                <li>Payment information (credit card details, M-Pesa information)</li>
                <li>Travel preferences and special requirements</li>
                <li>Passport and identification details (for international tours)</li>
                <li>Emergency contact information</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-neutral-800 mb-2">Automatically Collected Information</h3>
              <p className="text-neutral-600 leading-relaxed">
                When you visit our website, we automatically collect certain information including:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-neutral-600">
                <li>IP address and browser information</li>
                <li>Device information and operating system</li>
                <li>Pages visited and time spent on our website</li>
                <li>Referring website and search terms used</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">How We Use Your Information</h2>
          <p className="text-neutral-600 leading-relaxed mb-4">
            We use the collected information for the following purposes:
          </p>
          <ul className="list-disc list-inside space-y-2 text-neutral-600">
            <li>Process and manage your bookings and reservations</li>
            <li>Provide customer support and respond to inquiries</li>
            <li>Send booking confirmations and travel information</li>
            <li>Process payments and prevent fraudulent transactions</li>
            <li>Improve our services and website functionality</li>
            <li>Send marketing communications (with your consent)</li>
            <li>Comply with legal obligations and regulations</li>
            <li>Ensure safety and security of our services</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Information Sharing and Disclosure</h2>
          <p className="text-neutral-600 leading-relaxed mb-4">
            We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
          </p>
          <ul className="list-disc list-inside space-y-2 text-neutral-600">
            <li><strong>Service Providers:</strong> With trusted third-party service providers who assist us in operating our business</li>
            <li><strong>Payment Processors:</strong> With secure payment processors to handle transactions</li>
            <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
            <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
            <li><strong>Emergency Situations:</strong> To protect the safety of our customers or staff</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Data Security</h2>
          <p className="text-neutral-600 leading-relaxed mb-4">
            We implement appropriate technical and organizational security measures to protect your personal information:
          </p>
          <ul className="list-disc list-inside space-y-2 text-neutral-600">
            <li>SSL encryption for all data transmission</li>
            <li>Secure servers with restricted access</li>
            <li>Regular security audits and updates</li>
            <li>Staff training on data protection practices</li>
            <li>Secure payment processing systems</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Your Rights</h2>
          <p className="text-neutral-600 leading-relaxed mb-4">
            You have the following rights regarding your personal information:
          </p>
          <ul className="list-disc list-inside space-y-2 text-neutral-600">
            <li><strong>Access:</strong> Request access to your personal data</li>
            <li><strong>Correction:</strong> Request correction of inaccurate information</li>
            <li><strong>Deletion:</strong> Request deletion of your personal data</li>
            <li><strong>Portability:</strong> Request transfer of your data</li>
            <li><strong>Objection:</strong> Object to processing of your data</li>
            <li><strong>Withdrawal:</strong> Withdraw consent for marketing communications</li>
          </ul>
          <p className="text-neutral-600 leading-relaxed mt-4">
            To exercise these rights, please contact us at <a href="mailto:privacy@bodonexpedition.com" className="text-primary-600 hover:underline">privacy@bodonexpedition.com</a>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Cookies and Tracking</h2>
          <p className="text-neutral-600 leading-relaxed mb-4">
            We use cookies and similar technologies to enhance your browsing experience. For detailed information about our cookie usage, please refer to our <a href="/cookies" className="text-primary-600 hover:underline">Cookie Policy</a>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">International Transfers</h2>
          <p className="text-neutral-600 leading-relaxed">
            Your information may be transferred to and processed in countries other than Kenya. We ensure appropriate safeguards are in place to protect your data in accordance with applicable data protection laws.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Children's Privacy</h2>
          <p className="text-neutral-600 leading-relaxed">
            Our services are not directed to children under 16. We do not knowingly collect personal information from children under 16. If you believe we have collected information from a child under 16, please contact us immediately.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Changes to This Policy</h2>
          <p className="text-neutral-600 leading-relaxed">
            We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on our website and updating the "Last Updated" date. Your continued use of our services after such changes constitutes acceptance of the updated policy.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Contact Information</h2>
          <p className="text-neutral-600 leading-relaxed mb-4">
            If you have any questions about this Privacy Policy or our data practices, please contact us:
          </p>
          <div className="bg-neutral-50 rounded-lg p-6">
            <p className="text-neutral-700"><strong>Bodon Expedition Kenya</strong></p>
            <p className="text-neutral-600">P.O Box 26872, G.P.O Nairobi, Kenya</p>
            <p className="text-neutral-600">Email: <a href="mailto:privacy@bodonexpedition.com" className="text-primary-600 hover:underline">privacy@bodonexpedition.com</a></p>
            <p className="text-neutral-600">Phone: <a href="tel:+254758270982" className="text-primary-600 hover:underline">+254-758270982</a></p>
          </div>
        </section>
      </div>
    </LegalLayout>
  )
}
