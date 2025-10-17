import { Leaf, Users, Target, Lightbulb, Award, TrendingUp, Heart, Globe, ArrowLeft, Shield, Zap, Eye } from 'lucide-react';
import { useEffect } from 'react';

export function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-emerald-600 via-teal-600 to-emerald-700 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNGgydjJoLTJ2LTJ6bTAtNGgydjJoLTJ2LTJ6bTAtNGgydjJoLTJ2LTJ6bTAtNGgydjJoLTJ2LTJ6bTItMnYyaC0ydi0yaDJ6bS0yLTJoMnYyaC0ydi0yem0wLTRoMnYyaC0ydi0yem0wLTRoMnYyaC0ydi0yem0wLTRoMnYyaC0ydi0yem0yLTJ2MmgtMnYtMmgyem0tMi0yaDF2LTFoMXYxaDJ2Mmg0djJoNHYyaDR2Mmg0djJoNHYyaDR2Mmg0di0yaC00di0yaC00di0yaC00di0yaC00di0yaC00di0yaC00di0yaDR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <a 
            href="/" 
            className="inline-flex items-center gap-2 text-emerald-100 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </a>

          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20">
                <Leaf className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-5xl md:text-6xl font-bold mb-2">About Envionix</h1>
                <p className="text-emerald-100 text-xl">Pioneering Environmental Intelligence</p>
              </div>
            </div>
            <p className="text-xl text-emerald-50 leading-relaxed mt-8">
              We're on a mission to make environmental testing accessible, instant, and accurate for everyone. 
              Through innovative technology, we're revolutionizing how we detect and monitor toxic elements in our environment.
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Mission */}
            <div className="bg-white rounded-2xl shadow-xl p-10 border border-emerald-100 hover:shadow-2xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                To empower individuals, organizations, and communities with portable, real-time environmental testing technology that detects toxic elements instantly.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We believe everyone deserves access to clean, safe environments. Our mission is to democratize environmental testing and make contamination detection as simple as taking a photo.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-2xl shadow-xl p-10 border border-emerald-100 hover:shadow-2xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                A world where environmental contamination is detected before it causes harm, where testing is instant, and where data drives meaningful action.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We envision a future where every organization has the tools to protect their people and environment through proactive, real-time monitoring and rapid response.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 mb-4">
                <Lightbulb className="w-8 h-8 text-emerald-600" />
                <h2 className="text-4xl font-bold text-gray-900">Our Story</h2>
              </div>
              <p className="text-xl text-gray-600">How Envionix Labs came to be</p>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">The Problem We Saw</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Traditional environmental testing was slow, expensive, and inaccessible. Industries, communities, and individuals faced significant barriers in protecting themselves from toxic contamination. Lab-based testing could take days or weeks, making rapid response impossible.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We knew there had to be a better way—a way to bring laboratory-grade testing directly to the field, delivering instant results that enable immediate action.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">The Innovation</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our team of environmental scientists, engineers, and technology innovators came together with a singular goal: create a portable device that could detect toxic elements in real-time with laboratory-grade accuracy.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  After years of research and development, we've developed Envionix—a revolutionary handheld device that combines advanced sensors, AI-powered analysis, and cloud connectivity to deliver instant environmental insights.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">The Impact</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Today, Envionix is trusted by industries, environmental agencies, and safety professionals worldwide. Our technology has helped detect contamination events, protect workers, ensure compliance, and safeguard communities.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  But we're just getting started. Every day, we're working to expand our detection capabilities, improve accuracy, and make environmental testing even more accessible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <Heart className="w-8 h-8 text-emerald-600" />
              <h2 className="text-4xl font-bold text-gray-900">Our Core Values</h2>
            </div>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Innovation */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600 leading-relaxed">
                We constantly push boundaries, exploring new technologies and methodologies to improve environmental testing.
              </p>
            </div>

            {/* Accuracy */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Accuracy</h3>
              <p className="text-gray-600 leading-relaxed">
                Precision matters. We maintain rigorous standards to ensure our results are reliable and actionable.
              </p>
            </div>

            {/* Accessibility */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Accessibility</h3>
              <p className="text-gray-600 leading-relaxed">
                Environmental testing should be available to everyone, not just large organizations with deep pockets.
              </p>
            </div>

            {/* Integrity */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Integrity</h3>
              <p className="text-gray-600 leading-relaxed">
                We operate with transparency, honesty, and ethical practices in all our business dealings.
              </p>
            </div>

            {/* Sustainability */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-lime-500 rounded-lg flex items-center justify-center mb-4">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sustainability</h3>
              <p className="text-gray-600 leading-relaxed">
                We're committed to protecting the environment through our products and sustainable business practices.
              </p>
            </div>

            {/* Impact */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Impact</h3>
              <p className="text-gray-600 leading-relaxed">
                Every decision we make is guided by its potential to create positive environmental and social impact.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <Users className="w-8 h-8 text-emerald-600" />
              <h2 className="text-4xl font-bold text-gray-900">Our Team</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Envionix Labs is powered by a diverse team of environmental scientists, engineers, data scientists, and industry experts united by a passion for environmental protection.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Expertise Areas */}
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-8 border border-emerald-200">
                <div className="text-4xl font-bold text-emerald-600 mb-2">15+</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Years Combined Experience</h3>
                <p className="text-gray-600 text-sm">In environmental science and technology</p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-200">
                <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Team Members</h3>
                <p className="text-gray-600 text-sm">Across R&D, engineering, and operations</p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 border border-purple-200">
                <div className="text-4xl font-bold text-purple-600 mb-2">10+</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Countries</h3>
                <p className="text-gray-600 text-sm">Where our team members are based</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-10 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Join Our Mission</h3>
              <p className="text-emerald-100 text-lg mb-6 max-w-2xl mx-auto">
                We're always looking for talented individuals who share our passion for environmental protection and innovation.
              </p>
              <a 
                href="mailto:envionixlabs@gmail.com?subject=Career Opportunity Inquiry"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-emerald-700 font-semibold rounded-xl hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Explore Careers
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Global Reach */}
      <div className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 mb-6">
              <Globe className="w-8 h-8 text-emerald-600" />
              <h2 className="text-4xl font-bold text-gray-900">Global Reach, Local Impact</h2>
            </div>
            <p className="text-xl text-gray-600 leading-relaxed mb-12">
              While we're headquartered in India, our technology serves organizations and communities worldwide. From industrial facilities to environmental agencies, our solutions are making an impact across continents.
            </p>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-emerald-600 mb-2">100+</div>
                <p className="text-gray-600 font-medium">Active Deployments</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">20+</div>
                <p className="text-gray-600 font-medium">Industries Served</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-purple-600 mb-2">1M+</div>
                <p className="text-gray-600 font-medium">Tests Conducted</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-orange-600 mb-2">99.9%</div>
                <p className="text-gray-600 font-medium">Accuracy Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Transform Your Environmental Testing?</h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Join the organizations that trust Envionix to protect their people, operations, and communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/#solution"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-xl hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Explore Our Technology
                <Zap className="w-5 h-5" />
              </a>
              <a 
                href="mailto:envionixlabs@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-emerald-600 text-emerald-600 font-semibold rounded-xl hover:bg-emerald-50 transition-all duration-300"
              >
                Contact Us
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}