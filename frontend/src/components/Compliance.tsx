import { ShieldCheck, Award, FileCheck, Globe, CheckCircle2, Building2, Leaf, Users } from 'lucide-react';
import { useEffect } from 'react';
import { SEO } from './SEO';

export function Compliance() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50">
      <SEO
        title="Agricultural Compliance & Safety Standards | Envionix Labs"
        description="Ensure your farm and business meets environmental safety standards and regulations with Envionix Labs' certified testing solutions. ISO 9001 and 14001 certified."
      />
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-4">
            <ShieldCheck className="w-12 h-12" />
            <h1 className="text-4xl md:text-5xl font-bold">Compliance & Certifications</h1>
          </div>
          <p className="text-green-100 text-lg max-w-3xl">
            Our commitment to quality, safety, and regulatory standards
          </p>
          <p className="text-green-100 text-sm mt-2">
            Last Updated: October 16, 2025
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">

          {/* Introduction */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
            <section className="mb-12">
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                At Envionix Labs, we are committed to maintaining the highest standards of quality, safety, and regulatory compliance. Our products and operations adhere to international standards and best practices in environmental monitoring, data protection, and corporate responsibility.
              </p>
              <p className="text-gray-700 leading-relaxed">
                This page outlines our compliance framework, certifications, and ongoing commitment to regulatory excellence across all aspects of our business.
              </p>
            </section>
          </div>

          {/* Product Compliance */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
            <section>
              <div className="flex items-center gap-3 mb-8">
                <Award className="w-10 h-10 text-green-600" />
                <h2 className="text-3xl font-bold text-gray-900">Product Compliance & Certifications</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* ISO Certifications */}
                <div className="border-l-4 border-green-500 pl-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Award className="w-6 h-6 text-green-600" />
                    <h3 className="text-xl font-bold text-gray-900">ISO 9001:2015</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    <strong>Quality Management Systems</strong>
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Our manufacturing processes and quality control systems are certified to ISO 9001:2015 standards, ensuring consistent product quality and continuous improvement in all operations.
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Leaf className="w-6 h-6 text-green-600" />
                    <h3 className="text-xl font-bold text-gray-900">ISO 14001:2015</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    <strong>Environmental Management Systems</strong>
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    We maintain ISO 14001:2015 certification, demonstrating our commitment to minimizing environmental impact in manufacturing, operations, and product lifecycle management.
                  </p>
                </div>

                <div className="border-l-4 border-blue-500 pl-6">
                  <div className="flex items-center gap-3 mb-3">
                    <ShieldCheck className="w-6 h-6 text-blue-600" />
                    <h3 className="text-xl font-bold text-gray-900">CE Marking</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    <strong>European Conformity</strong>
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Our products carry CE marking, indicating compliance with EU health, safety, and environmental protection standards. This certification enables distribution throughout the European Economic Area.
                  </p>
                </div>

                <div className="border-l-4 border-blue-500 pl-6">
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle2 className="w-6 h-6 text-blue-600" />
                    <h3 className="text-xl font-bold text-gray-900">RoHS Compliance</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    <strong>Restriction of Hazardous Substances</strong>
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    All Envionix products comply with RoHS Directive 2011/65/EU, restricting the use of specific hazardous materials found in electrical and electronic products.
                  </p>
                </div>

                <div className="border-l-4 border-purple-500 pl-6">
                  <div className="flex items-center gap-3 mb-3">
                    <FileCheck className="w-6 h-6 text-purple-600" />
                    <h3 className="text-xl font-bold text-gray-900">FCC Certification</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    <strong>Federal Communications Commission</strong>
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Our devices meet FCC standards for electromagnetic interference, ensuring they don't cause harmful interference with radio communications and comply with US market requirements.
                  </p>
                </div>

                <div className="border-l-4 border-purple-500 pl-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Globe className="w-6 h-6 text-purple-600" />
                    <h3 className="text-xl font-bold text-gray-900">BIS Certification</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    <strong>Bureau of Indian Standards</strong>
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Certified by BIS, ensuring our products meet Indian safety, quality, and performance standards for electronic devices and environmental monitoring equipment.
                  </p>
                </div>
              </div>

              <div className="mt-8 bg-green-50 rounded-lg p-6 border border-green-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Calibration Standards</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our environmental sensors are calibrated according to:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li><strong>NIST Traceability:</strong> Calibration traceable to National Institute of Standards and Technology</li>
                  <li><strong>EPA Guidelines:</strong> Compliance with Environmental Protection Agency standards for air quality monitoring</li>
                  <li><strong>WHO Standards:</strong> Alignment with World Health Organization air quality guidelines</li>
                  <li><strong>ISO 17025:</strong> Testing and calibration laboratory accreditation standards</li>
                </ul>
              </div>
            </section>
          </div>

          {/* Data Protection & Privacy */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
            <section>
              <div className="flex items-center gap-3 mb-8">
                <ShieldCheck className="w-10 h-10 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900">Data Protection & Privacy Compliance</h2>
              </div>

              <div className="space-y-6">
                <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                  <div className="flex items-center gap-3 mb-4">
                    <Globe className="w-6 h-6 text-blue-600" />
                    <h3 className="text-xl font-bold text-gray-900">GDPR Compliance</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong>General Data Protection Regulation (EU)</strong>
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    We comply with GDPR requirements for processing personal data of individuals in the European Union:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Lawful basis for data processing with explicit consent</li>
                    <li>Right to access, rectification, and erasure of personal data</li>
                    <li>Data portability and right to object to processing</li>
                    <li>Mandatory data breach notification within 72 hours</li>
                    <li>Privacy by design and by default in all systems</li>
                    <li>Appointment of Data Protection Officer (DPO)</li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                  <div className="flex items-center gap-3 mb-4">
                    <FileCheck className="w-6 h-6 text-blue-600" />
                    <h3 className="text-xl font-bold text-gray-900">SOC 2 Type II</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong>Service Organization Control 2</strong>
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Our cloud infrastructure and data handling processes are SOC 2 Type II certified, demonstrating:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Security: Protection against unauthorized access</li>
                    <li>Availability: System uptime and reliability commitments</li>
                    <li>Processing Integrity: Accurate and timely data processing</li>
                    <li>Confidentiality: Protection of sensitive information</li>
                    <li>Privacy: Personal information collection and handling</li>
                  </ul>
                </div>

                <div className="bg-indigo-50 rounded-lg p-6 border border-indigo-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Additional Data Protection Standards</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">ISO 27001:2013</p>
                      <p className="text-sm text-gray-600">Information Security Management Systems certification</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">ISO 27701:2019</p>
                      <p className="text-sm text-gray-600">Privacy Information Management Systems extension</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">CCPA Compliance</p>
                      <p className="text-sm text-gray-600">California Consumer Privacy Act requirements</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">India DPDP Act 2023</p>
                      <p className="text-sm text-gray-600">Digital Personal Data Protection Act compliance</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Cybersecurity */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
            <section>
              <div className="flex items-center gap-3 mb-8">
                <ShieldCheck className="w-10 h-10 text-red-600" />
                <h2 className="text-3xl font-bold text-gray-900">Cybersecurity & Information Security</h2>
              </div>

              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  We implement comprehensive cybersecurity measures to protect our systems, customer data, and IoT devices from threats:
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="font-bold text-gray-900 mb-3">Encryption Standards</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
                      <li>TLS 1.3 for data in transit</li>
                      <li>AES-256 encryption for data at rest</li>
                      <li>End-to-end encryption for sensitive communications</li>
                      <li>Secure key management practices</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="font-bold text-gray-900 mb-3">Access Controls</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
                      <li>Multi-factor authentication (MFA) required</li>
                      <li>Role-based access control (RBAC)</li>
                      <li>Principle of least privilege</li>
                      <li>Regular access audits and reviews</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="font-bold text-gray-900 mb-3">Network Security</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
                      <li>Firewall protection and intrusion detection</li>
                      <li>DDoS mitigation and traffic monitoring</li>
                      <li>Network segmentation and isolation</li>
                      <li>Regular penetration testing</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="font-bold text-gray-900 mb-3">Incident Response</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
                      <li>24/7 security monitoring and alerting</li>
                      <li>Documented incident response procedures</li>
                      <li>Regular security drills and training</li>
                      <li>Breach notification protocols</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-red-50 rounded-lg p-6 border border-red-200 mt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">IoT Device Security</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Our environmental monitoring devices incorporate security by design:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Secure boot and firmware verification</li>
                    <li>Regular over-the-air (OTA) security updates</li>
                    <li>Device authentication and authorization</li>
                    <li>Encrypted communication protocols (MQTT over TLS)</li>
                    <li>Hardware security modules for sensitive operations</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Environmental & Safety */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
            <section>
              <div className="flex items-center gap-3 mb-8">
                <Leaf className="w-10 h-10 text-green-600" />
                <h2 className="text-3xl font-bold text-gray-900">Environmental & Safety Standards</h2>
              </div>

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border-l-4 border-green-500 pl-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Environmental Responsibility</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Carbon-neutral manufacturing operations</li>
                      <li>Sustainable sourcing of materials</li>
                      <li>Energy-efficient product design</li>
                      <li>Waste reduction and recycling programs</li>
                      <li>Extended producer responsibility (EPR)</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-green-500 pl-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Product Safety</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Electrical safety standards (IEC 61010)</li>
                      <li>Electromagnetic compatibility (EMC)</li>
                      <li>Low voltage directive (LVD) compliance</li>
                      <li>Product safety risk assessments</li>
                      <li>User safety documentation and warnings</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">WEEE Directive Compliance</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    <strong>Waste Electrical and Electronic Equipment</strong>
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    We comply with WEEE Directive 2012/19/EU for responsible disposal and recycling of electronic equipment. We provide take-back programs and ensure proper end-of-life management for all products.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Corporate Governance */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
            <section>
              <div className="flex items-center gap-3 mb-8">
                <Building2 className="w-10 h-10 text-indigo-600" />
                <h2 className="text-3xl font-bold text-gray-900">Corporate Governance & Ethics</h2>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Business Ethics & Conduct</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-indigo-50 rounded-lg p-4">
                      <p className="font-semibold text-gray-900 mb-2">Anti-Corruption</p>
                      <p className="text-sm text-gray-600">Zero tolerance for bribery and corruption in all business dealings</p>
                    </div>
                    <div className="bg-indigo-50 rounded-lg p-4">
                      <p className="font-semibold text-gray-900 mb-2">Fair Competition</p>
                      <p className="text-sm text-gray-600">Compliance with antitrust and competition laws</p>
                    </div>
                    <div className="bg-indigo-50 rounded-lg p-4">
                      <p className="font-semibold text-gray-900 mb-2">Conflict of Interest</p>
                      <p className="text-sm text-gray-600">Clear policies for identifying and managing conflicts</p>
                    </div>
                    <div className="bg-indigo-50 rounded-lg p-4">
                      <p className="font-semibold text-gray-900 mb-2">Whistleblower Protection</p>
                      <p className="text-sm text-gray-600">Safe reporting channels for ethical concerns</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Supply Chain Compliance</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Conflict minerals compliance (Dodd-Frank Act Section 1502)</li>
                    <li>Modern Slavery Act transparency statement</li>
                    <li>Supplier code of conduct and audits</li>
                    <li>Fair labor practices and human rights</li>
                    <li>Responsible sourcing of raw materials</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Regulatory Compliance */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
            <section>
              <div className="flex items-center gap-3 mb-8">
                <FileCheck className="w-10 h-10 text-purple-600" />
                <h2 className="text-3xl font-bold text-gray-900">Regulatory Compliance Programs</h2>
              </div>

              <div className="space-y-4">
                <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Ongoing Compliance Monitoring</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    We maintain a comprehensive compliance program that includes:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Regular compliance audits and assessments</li>
                    <li>Employee training on compliance requirements</li>
                    <li>Third-party compliance verification</li>
                    <li>Continuous monitoring of regulatory changes</li>
                    <li>Documentation and record-keeping systems</li>
                    <li>Compliance reporting to management and stakeholders</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Commitment to Excellence</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our compliance framework is not just about meeting minimum requirements—it's about exceeding expectations and continuously improving our standards. We regularly review and update our policies to reflect best practices and emerging standards in environmental technology, data protection, and corporate responsibility.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Contact for Compliance */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <section>
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 border border-green-200">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-8 h-8 text-green-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Compliance Inquiries</h2>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  For questions about our compliance programs, certifications, or to request compliance documentation:
                </p>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Compliance Department</strong></p>
                  <p><strong>Envionix Labs</strong></p>
                  <p>Email: <a href="mailto:envionixlabs@gmail.com" className="text-green-600 hover:text-green-700 font-semibold">envionixlabs@gmail.com</a></p>
                  <p>Phone: <a href="tel:+917002071035" className="text-green-600 hover:text-green-700">+91 7002071035</a></p>
                  <p>Phone: <a href="tel:+918011666517" className="text-green-600 hover:text-green-700">+91 8011666517</a></p>
                  <p className="mt-4 text-sm text-gray-600">
                    We maintain detailed compliance documentation and are happy to provide certificates, audit reports, and compliance declarations upon request.
                  </p>
                </div>
              </div>
            </section>
          </div>

        </div>
      </div>
    </div>
  );
}