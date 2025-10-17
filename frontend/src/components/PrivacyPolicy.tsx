import { Shield, Lock, Eye, Database, UserCheck, Globe } from 'lucide-react';
import { useEffect } from 'react';

export function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-emerald-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-4">
            <Shield className="w-12 h-12" />
            <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
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
              Envionix Labs ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our services.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Database className="w-8 h-8 text-emerald-600" />
              <h2 className="text-3xl font-bold text-gray-900">1. Information We Collect</h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">1.1 Personal Information</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  We may collect personal information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Fill out contact forms or request a demo</li>
                  <li>Subscribe to our newsletter or communications</li>
                  <li>Register for an account or purchase our products</li>
                  <li>Communicate with us via email or phone</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-3">
                  This information may include: name, email address, phone number, company name, job title, and any other information you choose to provide.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">1.2 Automatically Collected Information</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  When you access our website, we may automatically collect certain information, including:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>IP address and browser type</li>
                  <li>Operating system and device information</li>
                  <li>Pages visited and time spent on pages</li>
                  <li>Referring website addresses</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">1.3 Technical and Usage Data</h3>
                <p className="text-gray-700 leading-relaxed">
                  We collect information about how you use our environmental testing devices, including test results, device performance data, and usage patterns. This data helps us improve our products and services.
                </p>
              </div>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <UserCheck className="w-8 h-8 text-emerald-600" />
              <h2 className="text-3xl font-bold text-gray-900">2. How We Use Your Information</h2>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">
              We use the information we collect for the following purposes:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-3 ml-4">
              <li>To provide, operate, and maintain our services</li>
              <li>To process your orders and manage your account</li>
              <li>To respond to your inquiries and provide customer support</li>
              <li>To send you technical notices, updates, and security alerts</li>
              <li>To communicate with you about products, services, and promotional offers</li>
              <li>To improve our website, products, and services</li>
              <li>To analyze usage patterns and optimize user experience</li>
              <li>To detect, prevent, and address technical issues or fraudulent activity</li>
              <li>To comply with legal obligations and enforce our terms</li>
              <li>To conduct research and development for environmental monitoring technology</li>
            </ul>
          </section>

          {/* Information Sharing */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Globe className="w-8 h-8 text-emerald-600" />
              <h2 className="text-3xl font-bold text-gray-900">3. Information Sharing and Disclosure</h2>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">
              We do not sell, trade, or rent your personal information. We may share your information in the following circumstances:
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">3.1 Service Providers</h3>
                <p className="text-gray-700 leading-relaxed">
                  We may share information with third-party service providers who perform services on our behalf, such as payment processing, data analysis, email delivery, hosting services, and customer service.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">3.2 Business Transfers</h3>
                <p className="text-gray-700 leading-relaxed">
                  If we are involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">3.3 Legal Requirements</h3>
                <p className="text-gray-700 leading-relaxed">
                  We may disclose your information if required by law, legal process, or governmental request, or to protect our rights, privacy, safety, or property.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">3.4 With Your Consent</h3>
                <p className="text-gray-700 leading-relaxed">
                  We may share your information with third parties when you give us explicit consent to do so.
                </p>
              </div>
            </div>
          </section>

          {/* Data Security */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Lock className="w-8 h-8 text-emerald-600" />
              <h2 className="text-3xl font-bold text-gray-900">4. Data Security</h2>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security assessments and audits</li>
              <li>Access controls and authentication protocols</li>
              <li>Secure data storage and backup systems</li>
              <li>Employee training on data protection practices</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your personal information, we cannot guarantee its absolute security.
            </p>
          </section>

          {/* Your Rights */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Eye className="w-8 h-8 text-emerald-600" />
              <h2 className="text-3xl font-bold text-gray-900">5. Your Privacy Rights</h2>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">
              Depending on your location, you may have the following rights regarding your personal information:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-3 ml-4">
              <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Portability:</strong> Request transfer of your data to another service</li>
              <li><strong>Objection:</strong> Object to the processing of your personal information</li>
              <li><strong>Restriction:</strong> Request restriction of processing your information</li>
              <li><strong>Withdraw Consent:</strong> Withdraw consent for data processing at any time</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              To exercise these rights, please contact us at <a href="mailto:envionixlabs@gmail.com" className="text-emerald-600 hover:text-emerald-700 font-semibold">envionixlabs@gmail.com</a>
            </p>
          </section>

          {/* Cookies */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Cookies and Tracking Technologies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use cookies and similar tracking technologies to enhance your experience on our website. Cookies are small data files stored on your device. You can control cookie settings through your browser preferences.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We use the following types of cookies:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mt-3">
              <li><strong>Essential Cookies:</strong> Required for website functionality</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
              <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
              <li><strong>Marketing Cookies:</strong> Track your activity for targeted advertising (with consent)</li>
            </ul>
          </section>

          {/* Children's Privacy */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">7. Children's Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              Our services are not intended for children under the age of 18. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
            </p>
          </section>

          {/* International Data Transfers */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">8. International Data Transfers</h2>
            <p className="text-gray-700 leading-relaxed">
              Your information may be transferred to and maintained on servers located outside of your country or jurisdiction. By using our services, you consent to the transfer of your information to countries that may have different data protection laws than your country of residence.
            </p>
          </section>

          {/* Data Retention */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">9. Data Retention</h2>
            <p className="text-gray-700 leading-relaxed">
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.
            </p>
          </section>

          {/* Third-Party Links */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">10. Third-Party Links</h2>
            <p className="text-gray-700 leading-relaxed">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>
          </section>

          {/* Changes to Privacy Policy */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">11. Changes to This Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. Your continued use of our services after any changes constitutes acceptance of the updated policy.
            </p>
          </section>

          {/* Contact Information */}
          <section className="bg-emerald-50 rounded-xl p-8 border border-emerald-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="space-y-2 text-gray-700">
              <p><strong>Envionix Labs</strong></p>
              <p>Email: <a href="mailto:envionixlabs@gmail.com" className="text-emerald-600 hover:text-emerald-700 font-semibold">envionixlabs@gmail.com</a></p>
              <p>Phone: <a href="tel:+917002071035" className="text-emerald-600 hover:text-emerald-700">+91 7002071035</a></p>
              <p>Phone: <a href="tel:+918011666517" className="text-emerald-600 hover:text-emerald-700">+91 8011666517</a></p>
              <p className="mt-3 text-sm text-gray-600">
                We are committed to resolving any privacy-related concerns in a timely and professional manner.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}