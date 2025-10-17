import { Leaf, Mail, MapPin, Phone, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">ENVIONIX</div>
                <div className="text-xs text-emerald-400 tracking-wide">LABS</div>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              Innovating environmental intelligence through portable, real-time toxic element detection for a safer, sustainable future.
            </p>
            <div className="flex items-center gap-2 text-sm mb-6">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              <span className="text-emerald-400 font-semibold">Detect • Protect • Sustain</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-400">Follow us:</span>
              <a 
                href="https://www.facebook.com/profile.php?id=61579251697139"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-emerald-600 rounded-lg flex items-center justify-center transition-all duration-300 group"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              
              <li>
                <a href="#solution" className="hover:text-emerald-400 transition-colors">Product</a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors">Technology</a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors">Research</a>
              </li>
              <li>
                <a href="/about" className="hover:text-emerald-400 transition-colors">About Us</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <a href="mailto:envionixlabs@gmail.com" className="hover:text-emerald-400 transition-colors">
                  envionixlabs@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <a href="tel:+917002071035" className="hover:text-emerald-400 transition-colors block">
                    +91 7002071035
                  </a>
                  <a href="tel:+918011666517" className="hover:text-emerald-400 transition-colors block">
                    +91 8011666517
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span>Envionix Labs<br />India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; 2025 ENVIONIX LABS. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="/privacy-policy" className="hover:text-emerald-400 transition-colors">Privacy Policy</a>
            <a href="/terms-of-service" className="hover:text-emerald-400 transition-colors">Terms of Service</a>
            <a href="/compliance" className="hover:text-emerald-400 transition-colors">Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
