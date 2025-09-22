import { Metadata } from 'next'
import LegalLayout from '@/components/layout/LegalLayout'

export const metadata: Metadata = {
  title: 'Cookie Policy - Bodon Expedition Kenya',
  description: 'Learn about how Bodon Expedition Kenya uses cookies and similar technologies to enhance your browsing experience and improve our services.',
  keywords: ['cookie policy', 'cookies', 'tracking', 'website analytics', 'user experience'],
}

export default function CookiePolicyPage() {
  return (
    <LegalLayout
      title="Cookie Policy"
      lastUpdated="December 22, 2024"
      description="This Cookie Policy explains how Bodon Expedition Kenya uses cookies and similar technologies when you visit our website."
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">What Are Cookies?</h2>
          <p className="text-neutral-600 leading-relaxed mb-4">
            Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
          </p>
          <p className="text-neutral-600 leading-relaxed">
            Cookies help us understand how you use our website, remember your preferences, and improve your overall experience with our services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">How We Use Cookies</h2>
          <p className="text-neutral-600 leading-relaxed mb-4">
            We use cookies for several purposes:
          </p>
          <ul className="list-disc list-inside space-y-2 text-neutral-600">
            <li>To ensure our website functions properly and securely</li>
            <li>To remember your preferences and settings</li>
            <li>To analyze website traffic and user behavior</li>
            <li>To personalize content and advertisements</li>
            <li>To improve our services and user experience</li>
            <li>To process bookings and payments securely</li>
            <li>To provide customer support and assistance</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Types of Cookies We Use</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-neutral-800 mb-3">Essential Cookies</h3>
              <p className="text-neutral-600 leading-relaxed mb-2">
                These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility.
              </p>
              <div className="bg-neutral-50 rounded-lg p-4">
                <p className="text-sm text-neutral-700"><strong>Examples:</strong></p>
                <ul className="list-disc list-inside text-sm text-neutral-600 mt-1">
                  <li>Session management cookies</li>
                  <li>Security and authentication cookies</li>
                  <li>Load balancing cookies</li>
                  <li>Shopping cart and booking process cookies</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-neutral-800 mb-3">Performance Cookies</h3>
              <p className="text-neutral-600 leading-relaxed mb-2">
                These cookies collect information about how visitors use our website, such as which pages are visited most often and if users get error messages.
              </p>
              <div className="bg-neutral-50 rounded-lg p-4">
                <p className="text-sm text-neutral-700"><strong>Examples:</strong></p>
                <ul className="list-disc list-inside text-sm text-neutral-600 mt-1">
                  <li>Google Analytics cookies</li>
                  <li>Page load time measurement</li>
                  <li>Error tracking and reporting</li>
                  <li>Website performance monitoring</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-neutral-800 mb-3">Functionality Cookies</h3>
              <p className="text-neutral-600 leading-relaxed mb-2">
                These cookies allow the website to remember choices you make and provide enhanced, more personal features.
              </p>
              <div className="bg-neutral-50 rounded-lg p-4">
                <p className="text-sm text-neutral-700"><strong>Examples:</strong></p>
                <ul className="list-disc list-inside text-sm text-neutral-600 mt-1">
                  <li>Language preference cookies</li>
                  <li>Currency selection cookies</li>
                  <li>User interface customization</li>
                  <li>Recently viewed tours or vehicles</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-neutral-800 mb-3">Marketing Cookies</h3>
              <p className="text-neutral-600 leading-relaxed mb-2">
                These cookies are used to deliver advertisements more relevant to you and your interests. They may also be used to limit the number of times you see an advertisement.
              </p>
              <div className="bg-neutral-50 rounded-lg p-4">
                <p className="text-sm text-neutral-700"><strong>Examples:</strong></p>
                <ul className="list-disc list-inside text-sm text-neutral-600 mt-1">
                  <li>Social media integration cookies</li>
                  <li>Advertising network cookies</li>
                  <li>Retargeting and remarketing cookies</li>
                  <li>Conversion tracking cookies</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Third-Party Cookies</h2>
          <p className="text-neutral-600 leading-relaxed mb-4">
            We may use third-party services that set cookies on our website. These include:
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-neutral-800 mb-2">Google Analytics</h3>
              <p className="text-neutral-600 leading-relaxed">
                We use Google Analytics to analyze website traffic and user behavior. Google Analytics uses cookies to collect anonymous information about how visitors use our site.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-neutral-800 mb-2">Payment Processors</h3>
              <p className="text-neutral-600 leading-relaxed">
                Our payment partners (Stripe, PayPal, M-Pesa) may set cookies to process payments securely and prevent fraud.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-neutral-800 mb-2">Social Media Platforms</h3>
              <p className="text-neutral-600 leading-relaxed">
                Social media plugins and sharing buttons may set cookies to track social media interactions and provide personalized content.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Cookie Duration</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-neutral-800 mb-2">Session Cookies</h3>
              <p className="text-neutral-600 leading-relaxed">
                These cookies are temporary and are deleted when you close your browser. They are essential for website functionality during your visit.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-neutral-800 mb-2">Persistent Cookies</h3>
              <p className="text-neutral-600 leading-relaxed">
                These cookies remain on your device for a set period or until you delete them. They help us remember your preferences for future visits.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Managing Your Cookie Preferences</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-neutral-800 mb-2">Browser Settings</h3>
              <p className="text-neutral-600 leading-relaxed mb-2">
                You can control and manage cookies through your browser settings. Most browsers allow you to:
              </p>
              <ul className="list-disc list-inside space-y-1 text-neutral-600">
                <li>View and delete cookies</li>
                <li>Block cookies from specific websites</li>
                <li>Block third-party cookies</li>
                <li>Clear all cookies when you close the browser</li>
                <li>Receive notifications when cookies are set</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-neutral-800 mb-2">Browser-Specific Instructions</h3>
              <div className="bg-neutral-50 rounded-lg p-4">
                <ul className="space-y-2 text-sm text-neutral-600">
                  <li><strong>Chrome:</strong> Settings → Privacy and Security → Cookies and other site data</li>
                  <li><strong>Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
                  <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
                  <li><strong>Edge:</strong> Settings → Cookies and site permissions → Cookies and site data</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-neutral-800 mb-2">Opt-Out Options</h3>
              <ul className="list-disc list-inside space-y-1 text-neutral-600">
                <li><strong>Google Analytics:</strong> <a href="https://tools.google.com/dlpage/gaoptout" className="text-primary-600 hover:underline" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a></li>
                <li><strong>Advertising:</strong> <a href="http://www.aboutads.info/choices/" className="text-primary-600 hover:underline" target="_blank" rel="noopener noreferrer">Digital Advertising Alliance Opt-out</a></li>
                <li><strong>Network Advertising:</strong> <a href="http://www.networkadvertising.org/choices/" className="text-primary-600 hover:underline" target="_blank" rel="noopener noreferrer">Network Advertising Initiative Opt-out</a></li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Impact of Disabling Cookies</h2>
          <p className="text-neutral-600 leading-relaxed mb-4">
            While you can disable cookies, please note that doing so may affect your experience on our website:
          </p>
          <ul className="list-disc list-inside space-y-2 text-neutral-600">
            <li>Some website features may not function properly</li>
            <li>You may need to re-enter information on each visit</li>
            <li>Personalized content and recommendations may not be available</li>
            <li>The booking process may be affected</li>
            <li>Website performance may be reduced</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Updates to This Policy</h2>
          <p className="text-neutral-600 leading-relaxed">
            We may update this Cookie Policy from time to time to reflect changes in our practices or applicable laws. We will post any updates on this page with a revised "Last Updated" date.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Contact Us</h2>
          <p className="text-neutral-600 leading-relaxed mb-4">
            If you have any questions about our use of cookies, please contact us:
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
