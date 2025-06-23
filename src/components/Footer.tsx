import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white">
      {/* Final CTA Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <div className="gradient-purple rounded-3xl p-12 md:p-16 text-center text-white relative overflow-hidden">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              Unleash The Spoofing Arsenal of Spectre
            </h2>

            <p className="text-xl opacity-90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Elite operators and underground teams trust SpectreSpoofer — the only tool built for precision, stealth,
              and content supremacy. Step beyond the noise and see why Spectre stands alone.
            </p>

            <Link
              href="/trial"
              className="inline-flex items-center gap-2 bg-white text-[#15202b] hover:bg-gray-100 px-8 py-4 rounded-lg transition-colors font-semibold text-lg"
            >
              Start a free trial
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 5L16 12L8 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Links */}
      <div className="border-t border-gray-200 py-16 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center mb-4">
                <img
                  src="/spectrespoofer-logo.png"
                  alt="SpectreSpoofer Logo Footer"
                  width={72}
                  height={72}
                  className="w-20 h-20 object-contain"
                />
              </Link>
            </div>

            {/* Features & Product */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Product</h3>
              <ul className="space-y-3">
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Features</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Pricing</Link></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
              <ul className="space-y-3">
                <li><Link href="/get-started" className="text-gray-600 hover:text-gray-900">How to Get Started</Link></li>
                <li><Link href="/faq" className="text-gray-600 hover:text-gray-900">FAQ</Link></li>

              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 mb-4 md:mb-0">
              Spectrespoofer.com • Copyright © 2024
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="text-gray-600 hover:text-gray-900">Terms of service</Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">Privacy policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
