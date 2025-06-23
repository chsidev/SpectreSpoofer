import Link from "next/link";

export default function GetStartedPage() {
  const quickStartSteps = [
    {
      step: "01",
      title: "Create Your Account",
      description: "Sign up for your free 48-hour trial with full access to all features",
      action: "Start Free Trial",
      link: "/trial",
      time: "2 minutes"
    },
    {
      step: "02",
      title: "Choose Your Plan",
      description: "Select the perfect stealth level for your operational needs",
      action: "View Pricing",
      link: "/pricing",
      time: "1 minute"
    },
    {
      step: "03",
      title: "Upload Your Content",
      description: "Drag and drop your files into the secure processing dashboard",
      action: "Access Dashboard",
      link: "#dashboard",
      time: "30 seconds"
    },
    {
      step: "04",
      title: "Configure Settings",
      description: "Customize obfuscation parameters for your target platform",
      action: "Configure Now",
      link: "#configure",
      time: "1 minute"
    },
    {
      step: "05",
      title: "Process & Download",
      description: "Watch as SpectreSpoofer applies military-grade stealth to your content",
      action: "Start Processing",
      link: "#process",
      time: "30 seconds"
    }
  ];

  const detailedGuides = [
    {
      icon: "🎯",
      title: "Platform-Specific Setup",
      description: "Optimize SpectreSpoofer for different social media platforms and content types.",
      topics: [
        "Instagram Story Optimization",
        "TikTok Video Processing",
        "YouTube Content Masking",
        "Twitter Media Stealth",
        "LinkedIn Professional Content"
      ],
      difficulty: "Beginner",
      time: "10 min read"
    },
    {
      icon: "⚙️",
      title: "Advanced Configuration",
      description: "Master the technical settings for maximum stealth effectiveness.",
      topics: [
        "Custom Sensor Fingerprinting",
        "Behavioral Motion Calibration",
        "Frame Variance Tuning",
        "Compression Artifact Simulation",
        "Metadata Obfuscation"
      ],
      difficulty: "Advanced",
      time: "15 min read"
    },
    {
      icon: "🔒",
      title: "Security Best Practices",
      description: "Essential operational security measures for content creators.",
      topics: [
        "Anonymous Payment Setup",
        "VPN and Proxy Configuration",
        "Secure File Handling",
        "Identity Protection Protocols",
        "Emergency Response Procedures"
      ],
      difficulty: "Intermediate",
      time: "12 min read"
    },
    {
      icon: "📊",
      title: "Analytics & Monitoring",
      description: "Track your success rates and optimize your stealth operations.",
      topics: [
        "Detection Rate Analysis",
        "Performance Metrics",
        "Success Rate Optimization",
        "Platform Feedback Monitoring",
        "Continuous Improvement Strategies"
      ],
      difficulty: "Intermediate",
      time: "8 min read"
    }
  ];

  const faqs = [
    {
      question: "How long does it take to process content?",
      answer: "Processing times vary by plan and content complexity. Lite users see 30-60 second processing, while Premium and Spectre tiers enjoy priority processing with 10-30 second turnaround times."
    },
    {
      question: "What file formats are supported?",
      answer: "SpectreSpoofer supports all major formats: Video (MP4, MOV, AVI, MKV), Images (JPG, PNG, GIF, WebP), and Audio (MP3, WAV, AAC). Output is optimized for your target platform."
    },
    {
      question: "Can I process multiple files at once?",
      answer: "Yes! Premium and Spectre tier users can batch process multiple files simultaneously. Lite users can queue files for sequential processing."
    },
    {
      question: "Is my content stored on your servers?",
      answer: "No. All content is processed in real-time and immediately deleted from our servers. We use zero-knowledge architecture for maximum security."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Spacing */}
      <div className="pt-32" />

      {/* Hero Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <span className="text-[#15202b] font-medium text-sm uppercase tracking-wide mb-4 block">
            GET STARTED
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Master <span className="text-[#15202b]">Operational Stealth</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            From zero to invisible in 5 simple steps. Our comprehensive guide takes you through
            everything you need to become a SpectreSpoofer expert.
          </p>
          <Link
            href="/trial"
            className="inline-flex items-center gap-2 bg-[#15202b] hover:bg-[#2d3748] text-white px-8 py-4 rounded-lg transition-colors font-semibold text-lg"
          >
            Start Your Journey
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 5L16 12L8 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </section>

      {/* Quick Start Guide */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Quick Start Guide
            </h2>
            <p className="text-xl text-gray-600">
              Get operational in under 5 minutes with our streamlined onboarding process.
            </p>
          </div>
          <div className="space-y-8">
            {quickStartSteps.map((step, index) => (
              <div
                key={step.step}
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="w-12 h-12 bg-[#15202b] rounded-full flex items-center justify-center text-white font-bold">
                      {step.step}
                    </span>
                    <span className="text-sm text-gray-500 bg-gray-200 px-3 py-1 rounded-full">
                      {step.time}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  <Link
                    href={step.link}
                    className="inline-flex items-center gap-2 bg-[#15202b] hover:bg-[#2d3748] text-white px-6 py-3 rounded-lg transition-colors font-semibold"
                  >
                    {step.action}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 5L16 12L8 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="bg-gradient-to-br from-[#15202b] to-[#2d3748] rounded-2xl h-64 flex items-center justify-center">
                    <span className="text-white text-6xl font-bold opacity-20">{step.step}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Guides */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Advanced Guides & Tutorials
            </h2>
            <p className="text-xl text-gray-600">
              Deep dive into specific aspects of operational stealth and content masking.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {detailedGuides.map((guide) => (
              <div key={guide.title} className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl">{guide.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{guide.title}</h3>
                    <div className="flex items-center gap-3 mt-1">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        guide.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                        guide.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {guide.difficulty}
                      </span>
                      <span className="text-xs text-gray-500">{guide.time}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{guide.description}</p>
                <ul className="space-y-2 mb-6">
                  {guide.topics.map((topic) => (
                    <li key={topic} className="flex items-center text-sm text-gray-700">
                      <svg className="w-4 h-4 text-[#15202b] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      {topic}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/guides/${guide.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-[#15202b] hover:text-[#2d3748] font-semibold"
                >
                  Read Guide →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Tutorials */}
      <section className="py-16 px-6 bg-[#15202b]">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Video Tutorials
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Watch our expert team demonstrate advanced techniques and best practices.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">▶️</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Complete Walkthrough</h3>
              <p className="text-gray-300 text-sm mb-4">
                15-minute comprehensive guide from signup to first successful operation.
              </p>
              <Link href="#" className="text-white hover:text-gray-300 font-semibold text-sm">
                Watch Now →
              </Link>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">⚙️</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Advanced Settings</h3>
              <p className="text-gray-300 text-sm mb-4">
                Deep dive into custom configurations and optimization techniques.
              </p>
              <Link href="#" className="text-white hover:text-gray-300 font-semibold text-sm">
                Watch Now →
              </Link>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🛡️</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Security Protocols</h3>
              <p className="text-gray-300 text-sm mb-4">
                Essential OPSEC practices for maintaining operational anonymity.
              </p>
              <Link href="#" className="text-white hover:text-gray-300 font-semibold text-sm">
                Watch Now →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Common Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to help you get started faster.
            </p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="bg-white rounded-2xl p-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 bg-[#15202b] hover:bg-[#2d3748] text-white px-8 py-4 rounded-lg transition-colors font-semibold"
            >
              View All FAQs
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 5L16 12L8 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Support CTA */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Need Personal Assistance?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Our expert team is available 24/7 to help you master SpectreSpoofer and optimize your operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#15202b] hover:bg-[#2d3748] text-white px-8 py-4 rounded-lg transition-colors font-semibold"
            >
              Contact Support
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 5L16 12L8 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link
              href="#"
              className="inline-flex items-center gap-2 bg-white border-2 border-[#15202b] text-[#15202b] hover:bg-[#15202b] hover:text-white px-8 py-4 rounded-lg transition-colors font-semibold"
            >
              Join Telegram
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 5L16 12L8 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
