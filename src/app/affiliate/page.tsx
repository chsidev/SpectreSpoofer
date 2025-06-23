import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function AffiliatePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-5xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Join Our <span className="text-[#15202b]">Affiliate Program</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Partner with us and earn competitive commissions by promoting our products.
            Get access to exclusive marketing materials, real-time tracking, and dedicated support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#signup"
              className="bg-[#15202b] hover:bg-[#2d3748] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Join Now - It's Free
            </Link>
            <Link
              href="#how-it-works"
              className="border border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-[#15202b] mb-2">30%</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Commission Rate</div>
              <p className="text-gray-600">Earn up to 30% on all successful referrals</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-[#15202b] mb-2">24h</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Cookie Duration</div>
              <p className="text-gray-600">Extended tracking window for your referrals</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-[#15202b] mb-2">$50</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Minimum Payout</div>
              <p className="text-gray-600">Low threshold for fast commission payments</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Get started in just 3 simple steps</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#15202b] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Sign Up</h3>
              <p className="text-gray-600">
                Create your affiliate account and get approved within 24 hours.
                It's completely free to join.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#15202b] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Promote</h3>
              <p className="text-gray-600">
                Share your unique referral links using our marketing materials,
                social media, or your website.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#15202b] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Earn</h3>
              <p className="text-gray-600">
                Receive 30% commission on every successful sale you refer.
                Payments processed monthly via PayPal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Program?</h2>
            <p className="text-xl text-gray-600">Everything you need to succeed as our partner</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-[#15202b] rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">High Commissions</h3>
              <p className="text-gray-600">Earn up to 30% on all successful referrals with our competitive rates</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-[#15202b] rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Real-Time Tracking</h3>
              <p className="text-gray-600">Monitor your performance with detailed analytics and real-time reporting</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-[#15202b] rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Payments</h3>
              <p className="text-gray-600">Receive your commissions monthly via PayPal with low minimum thresholds</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-[#15202b] rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Marketing Support</h3>
              <p className="text-gray-600">Access to banners, landing pages, and promotional materials to boost conversions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Signup Form */}
      <section id="signup" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600">Join our affiliate program today and start earning commissions</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#15202b] focus:border-transparent"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#15202b] focus:border-transparent"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#15202b] focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Website/Social Media</label>
                <input
                  type="url"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#15202b] focus:border-transparent"
                  placeholder="https://yourwebsite.com"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">How will you promote our products?</label>
                <textarea
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#15202b] focus:border-transparent h-32 resize-none"
                  placeholder="Tell us about your marketing strategy..."
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-[#15202b] border-gray-300 rounded focus:ring-[#15202b]"
                />
                <label className="ml-2 text-gray-600">
                  I agree to the <Link href="/terms" className="text-[#15202b] hover:underline">Terms of Service</Link> and <Link href="/privacy" className="text-[#15202b] hover:underline">Privacy Policy</Link>
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-[#15202b] hover:bg-[#2d3748] text-white py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Apply to Join Affiliate Program
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about our affiliate program</p>
          </div>

          <div className="space-y-8">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How much can I earn?</h3>
              <p className="text-gray-600">You can earn up to 30% commission on every successful sale you refer. There's no limit to how much you can earn - the more you promote, the more you make.</p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">When do I get paid?</h3>
              <p className="text-gray-600">Commissions are paid monthly via PayPal. You need to reach a minimum of $50 in commissions before your first payout, then payments are processed automatically each month.</p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What marketing materials do you provide?</h3>
              <p className="text-gray-600">We provide banners, text links, product images, email templates, and landing pages. All materials are professionally designed and optimized for conversions.</p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How long is the cookie duration?</h3>
              <p className="text-gray-600">Our affiliate cookies last for 24 hours, giving you credit for any purchases made by your referrals within that timeframe.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
