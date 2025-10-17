import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    // The form will be submitted via FormSubmit.co
    // Show success message after a brief delay
    setTimeout(() => {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 100);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
      <div className="container mx-auto px-6">
        {/* Contact Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get in Touch
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to revolutionize your environmental testing? Contact us to learn more about Envionix 
            or schedule a demonstration.
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Send us a Message</h3>
            
            {isSubmitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 md:p-8 text-center">
                <CheckCircle className="w-12 md:w-16 h-12 md:h-16 text-emerald-600 mx-auto mb-4" />
                <h4 className="text-lg md:text-xl font-bold text-emerald-900 mb-2">Message Sent!</h4>
                <p className="text-emerald-700 text-sm md:text-base">
                  Thank you for your interest. We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form 
                action="https://formsubmit.co/envionixlabs@gmail.com" 
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* FormSubmit Configuration */}
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" value={window.location.href} />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors text-sm md:text-base"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors text-sm md:text-base"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="_subject"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors text-sm md:text-base bg-white"
                    >
                      <option value="">Select a subject...</option>
                      <option value="Product Inquiry - Envionix">Product Inquiry</option>
                      <option value="Request Demo - Envionix">Request Demo</option>
                      <option value="Technical Support - Envionix">Technical Support</option>
                      <option value="Partnership Opportunity - Envionix">Partnership Opportunity</option>
                      <option value="Pricing Information - Envionix">Pricing Information</option>
                      <option value="General Inquiry - Envionix">General Inquiry</option>
                      <option value="Other - Envionix">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company/Organization <span className="text-gray-500">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors text-sm md:text-base"
                      placeholder="Your company name (optional)"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors resize-none text-sm md:text-base"
                    placeholder="Tell us about your testing needs or ask any questions..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send className="w-5 h-5" />
                </button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Contact Information</h3>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Email</h4>
                  <a 
                    href="mailto:envionixlabs@gmail.com" 
                    className="text-emerald-600 hover:text-emerald-700 text-sm md:text-base transition-colors"
                  >
                    envionixlabs@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Phone</h4>
                  <a 
                    href="tel:+917002071035" 
                    className="text-emerald-600 hover:text-emerald-700 text-sm md:text-base transition-colors block"
                  >
                    +91 7002071035
                  </a>
                  <a 
                    href="tel:+918011666517" 
                    className="text-emerald-600 hover:text-emerald-700 text-sm md:text-base transition-colors block"
                  >
                    +91 8011666517
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Location</h4>
                  <p className="text-gray-600 text-sm md:text-base">
                    Envionix Labs<br />
                    India
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-emerald-50 rounded-lg border border-emerald-200">
              <h4 className="text-lg font-semibold text-emerald-900 mb-2">Business Hours</h4>
              <div className="space-y-1 text-emerald-700 text-sm md:text-base">
                <p>Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                <p>Saturday: 10:00 AM - 4:00 PM IST</p>
                <p>Sunday: Closed</p>
              </div>
              <div className="mt-4 pt-4 border-t border-emerald-200">
                <p className="text-emerald-700 text-sm">
                  We typically respond within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h3>
            <p className="text-lg md:text-xl text-gray-600">
              Common questions about the Envionix and our services
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "What contaminants can Envionix detect?",
                answer: "Envionix can detect heavy metals including arsenic, lead, chromium, mercury, cadmium, copper, zinc, and nickel in water, soil, and food samples."
              },
              {
                question: "How accurate are the test results?",
                answer: "Our device provides laboratory-grade accuracy with detection limits in the ppb range, meeting international standards for environmental testing."
              },
              {
                question: "What is the typical delivery time?",
                answer: "Standard delivery is 4-6 weeks from order confirmation. Expedited delivery options are available for urgent requirements."
              },
              {
                question: "Do you provide training and support?",
                answer: "Yes, we provide comprehensive training, technical support, and ongoing maintenance services to ensure optimal performance of your device."
              },
              {
                question: "Can I get a demo before purchasing?",
                answer: "Absolutely! We offer on-site demonstrations and trial periods. Contact us to schedule a demo at your facility."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h4>
                <p className="text-gray-600 text-sm md:text-base">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}