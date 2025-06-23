import Link from "next/link";

export default function CTASection() {
  return (
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
  );
}
