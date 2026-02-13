import { FileText, Scale, AlertTriangle, CheckCircle, XCircle, DollarSign } from 'lucide-react';
import { useEffect } from 'react';
import { SEO } from './SEO';

export function TermsOfService() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-emerald-50">
      <SEO
        title="Terms of Service | Envionix Labs"
        description="Envionix Labs Terms of Service. Rules and regulations for using our environmental testing services."
      />
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-4">
            <FileText className="w-12 h-12" />
            <h1 className="text-4xl md:text-5xl font-bold">Terms of Service</h1>
          </div>
          <p className="text-emerald-100 text-lg max-w-3xl">
            Last Updated: October 16, 2025
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">

          {/* Introduction */}
          <section className="mb-12">
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              Welcome to Envionix Labs. These Terms of Service ("Terms") govern your access to and use of our website, products, and services (collectively, the "Services"). By accessing or using our Services, you agree to be bound by these Terms.
            </p>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
              <p className="text-amber-800 font-semibold flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Please read these Terms carefully before using our Services. If you do not agree to these Terms, do not access or use our Services.
              </p>
            </div>
          </section>

          {/* Acceptance of Terms */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Scale className="w-8 h-8 text-emerald-600" />
              <h2 className="text-3xl font-bold text-gray-900">1. Acceptance of Terms</h2>
            </div>

            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                By accessing or using Envionix Labs' Services, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. If you are using our Services on behalf of an organization, you represent that you have the authority to bind that organization to these Terms.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to modify these Terms at any time. Your continued use of the Services after any changes constitutes acceptance of the modified Terms.
              </p>
            </div>
          </section>

          {/* Eligibility */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">2. Eligibility</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You must meet the following requirements to use our Services:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Be at least 18 years of age or the age of majority in your jurisdiction</li>
              <li>Have the legal capacity to enter into binding contracts</li>
              <li>Not be prohibited from using our Services under applicable laws</li>
              <li>Provide accurate and complete registration information</li>
              <li>Maintain the security and confidentiality of your account credentials</li>
            </ul>
          </section>

          {/* Account Registration */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">3. Account Registration and Security</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">3.1 Account Creation</h3>
                <p className="text-gray-700 leading-relaxed">
                  To access certain features of our Services, you may be required to create an account. You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">3.2 Account Security</h3>
                <p className="text-gray-700 leading-relaxed">
                  You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must immediately notify us of any unauthorized access or security breach.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">3.3 Account Termination</h3>
                <p className="text-gray-700 leading-relaxed">
                  We reserve the right to suspend or terminate your account if you violate these Terms or engage in fraudulent, abusive, or illegal activities.
                </p>
              </div>
            </div>
          </section>

          {/* License and Use */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle className="w-8 h-8 text-emerald-600" />
              <h2 className="text-3xl font-bold text-gray-900">4. License to Use Services</h2>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">
              Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to access and use our Services for your personal or internal business purposes.
            </p>

            <div className="bg-green-50 rounded-lg p-6 border border-green-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Permitted Uses:</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Environmental monitoring and data collection</li>
                <li>Analysis of air quality and environmental parameters</li>
                <li>Integration with your existing systems and workflows</li>
                <li>Educational and research purposes</li>
                <li>Commercial use within the scope of your subscription plan</li>
              </ul>
            </div>
          </section>

          {/* Prohibited Activities */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <XCircle className="w-8 h-8 text-red-600" />
              <h2 className="text-3xl font-bold text-gray-900">5. Prohibited Activities</h2>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">
              You agree not to engage in any of the following prohibited activities:
            </p>

            <div className="bg-red-50 rounded-lg p-6 border border-red-200">
              <ul className="list-disc list-inside text-gray-700 space-y-3">
                <li>Violate any applicable laws, regulations, or third-party rights</li>
                <li>Use the Services for any illegal or unauthorized purpose</li>
                <li>Attempt to gain unauthorized access to our systems or networks</li>
                <li>Reverse engineer, decompile, or disassemble our software or devices</li>
                <li>Interfere with or disrupt the Services or servers</li>
                <li>Transmit viruses, malware, or other harmful code</li>
                <li>Harvest or collect data from other users without consent</li>
                <li>Impersonate any person or entity or misrepresent your affiliation</li>
                <li>Use automated systems (bots, scrapers) without authorization</li>
                <li>Resell or redistribute our Services without explicit permission</li>
                <li>Bypass security measures or access controls</li>
                <li>Use the Services in any way that could damage our reputation</li>
              </ul>
            </div>
          </section>

          {/* Product and Services */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Products and Services</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">6.1 Product Specifications</h3>
                <p className="text-gray-700 leading-relaxed">
                  We strive to provide accurate product descriptions and specifications. However, we do not warrant that product descriptions, specifications, or other content are accurate, complete, reliable, current, or error-free. Products are subject to availability and may be discontinued without notice.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">6.2 Device Calibration and Accuracy</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our environmental testing devices are calibrated to industry standards. However, accuracy may vary based on environmental conditions, maintenance, and proper usage. Users are responsible for periodic calibration and maintenance as specified in product documentation.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">6.3 Software Updates</h3>
                <p className="text-gray-700 leading-relaxed">
                  We may provide software updates, patches, and upgrades to improve functionality and security. You agree to install updates promptly. Failure to update may result in reduced functionality or security vulnerabilities.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">6.4 Service Availability</h3>
                <p className="text-gray-700 leading-relaxed">
                  We strive to maintain high availability of our Services but do not guarantee uninterrupted access. Services may be temporarily unavailable due to maintenance, upgrades, or circumstances beyond our control.
                </p>
              </div>
            </div>
          </section>

          {/* Pricing and Payment */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <DollarSign className="w-8 h-8 text-emerald-600" />
              <h2 className="text-3xl font-bold text-gray-900">7. Pricing and Payment</h2>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">7.1 Pricing</h3>
                <p className="text-gray-700 leading-relaxed">
                  All prices are listed in the applicable currency and are subject to change without notice. We reserve the right to modify pricing for our products and services at any time.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">7.2 Payment Terms</h3>
                <p className="text-gray-700 leading-relaxed">
                  Payment is due upon order placement unless otherwise specified. We accept payment methods as indicated on our website. You authorize us to charge your payment method for all fees incurred.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">7.3 Taxes</h3>
                <p className="text-gray-700 leading-relaxed">
                  You are responsible for all applicable taxes, duties, and customs fees. Prices do not include taxes unless explicitly stated.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">7.4 Refunds and Cancellations</h3>
                <p className="text-gray-700 leading-relaxed">
                  Refund and cancellation policies vary by product and service. Please refer to our specific refund policy or contact us for details. Refunds are processed within 14-30 business days.
                </p>
              </div>
            </div>
          </section>

          {/* Intellectual Property */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">8. Intellectual Property Rights</h2>

            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                All content, features, and functionality of our Services, including but not limited to text, graphics, logos, icons, images, audio clips, video clips, data compilations, software, and the design and layout of our website, are owned by Envionix Labs or our licensors and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">8.1 Trademarks</h3>
                <p className="text-gray-700 leading-relaxed">
                  "Envionix," "Envionix Labs," and all related logos are trademarks of Envionix Labs. You may not use our trademarks without prior written consent.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">8.2 User Content</h3>
                <p className="text-gray-700 leading-relaxed">
                  You retain ownership of any content you submit through our Services. By submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and display your content for the purpose of providing and improving our Services.
                </p>
              </div>
            </div>
          </section>

          {/* Warranties and Disclaimers */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">9. Warranties and Disclaimers</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">9.1 Limited Warranty</h3>
                <p className="text-gray-700 leading-relaxed">
                  We warrant that our products will be free from defects in materials and workmanship for a period of 12 months from the date of purchase. This warranty does not cover damage caused by misuse, accidents, or normal wear and tear.
                </p>
              </div>

              <div className="bg-amber-50 rounded-lg p-6 border border-amber-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">9.2 Disclaimer of Warranties</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  EXCEPT AS EXPRESSLY PROVIDED, OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Warranties of merchantability or fitness for a particular purpose</li>
                  <li>Warranties of non-infringement</li>
                  <li>Warranties that the Services will be uninterrupted or error-free</li>
                  <li>Warranties regarding the accuracy or reliability of information</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">9.3 Medical and Safety Disclaimer</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our environmental testing devices are not medical devices and should not be used for medical diagnosis or treatment. Always consult qualified professionals for health and safety decisions.
                </p>
              </div>
            </div>
          </section>

          {/* Limitation of Liability */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">10. Limitation of Liability</h2>

            <div className="bg-red-50 rounded-lg p-6 border border-red-200">
              <p className="text-gray-700 leading-relaxed mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, ENVIONIX LABS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Loss of profits, revenue, or data</li>
                <li>Business interruption</li>
                <li>Personal injury or property damage</li>
                <li>Loss of goodwill or reputation</li>
                <li>Cost of substitute products or services</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID TO US IN THE 12 MONTHS PRECEDING THE EVENT GIVING RISE TO LIABILITY.
              </p>
            </div>
          </section>

          {/* Indemnification */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">11. Indemnification</h2>
            <p className="text-gray-700 leading-relaxed">
              You agree to indemnify, defend, and hold harmless Envionix Labs, its officers, directors, employees, and agents from any claims, liabilities, damages, losses, costs, or expenses (including reasonable attorney fees) arising from:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mt-3">
              <li>Your use or misuse of our Services</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any rights of third parties</li>
              <li>Your violation of applicable laws or regulations</li>
            </ul>
          </section>

          {/* Dispute Resolution */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">12. Dispute Resolution</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">12.1 Informal Resolution</h3>
                <p className="text-gray-700 leading-relaxed">
                  Before filing a formal claim, you agree to contact us and attempt to resolve any dispute informally. Contact us at envionixlabs@gmail.com with a detailed description of the dispute.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">12.2 Governing Law</h3>
                <p className="text-gray-700 leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">12.3 Arbitration</h3>
                <p className="text-gray-700 leading-relaxed">
                  Any disputes that cannot be resolved informally shall be resolved through binding arbitration in accordance with the Arbitration and Conciliation Act, 1996, conducted in English.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">12.4 Jurisdiction</h3>
                <p className="text-gray-700 leading-relaxed">
                  For any disputes not subject to arbitration, you agree to submit to the exclusive jurisdiction of the courts located in India.
                </p>
              </div>
            </div>
          </section>

          {/* Termination */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">13. Termination</h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              We may terminate or suspend your access to our Services immediately, without prior notice or liability, for any reason, including but not limited to breach of these Terms.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              Upon termination:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Your right to use the Services will immediately cease</li>
              <li>You must cease all use of our products and services</li>
              <li>You must delete any downloaded software or content</li>
              <li>Provisions that should survive termination will remain in effect</li>
            </ul>
          </section>

          {/* Miscellaneous */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">14. Miscellaneous Provisions</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">14.1 Entire Agreement</h3>
                <p className="text-gray-700 leading-relaxed">
                  These Terms, together with our Privacy Policy, constitute the entire agreement between you and Envionix Labs regarding the Services.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">14.2 Severability</h3>
                <p className="text-gray-700 leading-relaxed">
                  If any provision of these Terms is found to be unenforceable, the remaining provisions will remain in full force and effect.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">14.3 Waiver</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our failure to enforce any right or provision of these Terms will not be deemed a waiver of such right or provision.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">14.4 Assignment</h3>
                <p className="text-gray-700 leading-relaxed">
                  You may not assign or transfer these Terms without our prior written consent. We may assign these Terms at any time without restriction.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">14.5 Force Majeure</h3>
                <p className="text-gray-700 leading-relaxed">
                  We shall not be liable for any failure or delay in performance due to circumstances beyond our reasonable control, including acts of God, war, terrorism, natural disasters, or government actions.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="bg-emerald-50 rounded-xl p-8 border border-emerald-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have questions about these Terms of Service, please contact us:
            </p>
            <div className="space-y-2 text-gray-700">
              <p><strong>Envionix Labs</strong></p>
              <p>Email: <a href="mailto:envionixlabs@gmail.com" className="text-emerald-600 hover:text-emerald-700 font-semibold">envionixlabs@gmail.com</a></p>
              <p>Phone: <a href="tel:+917002071035" className="text-emerald-600 hover:text-emerald-700">+91 7002071035</a></p>
              <p>Phone: <a href="tel:+918011666517" className="text-emerald-600 hover:text-emerald-700">+91 8011666517</a></p>
              <p className="mt-3 text-sm text-gray-600">
                We welcome your questions and feedback regarding these Terms.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}