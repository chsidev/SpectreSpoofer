"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";

export default function FAQPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCategories, setVisibleCategories] = useState<Set<number>>(new Set());
  const [visibleFAQs, setVisibleFAQs] = useState<Set<string>>(new Set());
  const sectionRef = useRef<HTMLElement>(null);
  const categoryRefs = useRef<(HTMLDivElement | null)[]>([]);
  const faqRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        }
      },
      { threshold: 0.3 }
    );

    const categoryObservers = categoryRefs.current.map((ref, index) => {
      if (!ref) return null;

      const categoryObserver = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              setVisibleCategories(prev => new Set([...prev, index]));
            }
          }
        },
        { threshold: 0.2 }
      );

      categoryObserver.observe(ref);
      return categoryObserver;
    });

    const faqObservers: IntersectionObserver[] = [];
    faqRefs.current.forEach((ref, key) => {
      if (ref) {
        const faqObserver = new IntersectionObserver(
          (entries) => {
            for (const entry of entries) {
              if (entry.isIntersecting) {
                setVisibleFAQs(prev => new Set([...prev, key]));
              }
            }
          },
          { threshold: 0.3 }
        );
        faqObserver.observe(ref);
        faqObservers.push(faqObserver);
      }
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
      categoryObservers.forEach(observer => observer?.disconnect());
      faqObservers.forEach(observer => observer.disconnect());
    };
  }, []);
  const faqCategories = [
    {
      title: "Getting Started",
      faqs: [
        {
          question: "Does this app offer a free trial period?",
          answer: "Yes, all users can access a 2-day free trial to experience the full power of SpectreSpoofer. No commitments, no questions — just pure stealth in action."
        },
        {
          question: "How do I get started with SpectreSpoofer?",
          answer: "Simply sign up for your free trial, choose your plan, and access our intuitive dashboard. We provide step-by-step onboarding and video tutorials to get you operational within minutes."
        },
        {
          question: "What platforms does SpectreSpoofer support?",
          answer: "SpectreSpoofer works across all major social media platforms, content sharing sites, and streaming services. Our AI adapts to platform-specific requirements automatically."
        }
      ]
    },
    {
      title: "Features & Technology",
      faqs: [
        {
          question: "How does the Style Morphing Engine work?",
          answer: "Our Style Morphing Engine uses advanced AI algorithms to analyze platform-native content and replicate visual characteristics. It adjusts contrast, tone, color grading, and compression artifacts to match authentic user-generated content."
        },
        {
          question: "What is Frame Variance Generator?",
          answer: "Frame Variance Generator adds micro-variations to each frame, simulating real-world camera imperfections and natural inconsistencies. This creates entropy layers that help content evade AI detection systems."
        },
        {
          question: "How effective is the Behavioral Motion Flow?",
          answer: "Our Behavioral Motion Flow injects realistic handheld camera movements, natural drift patterns, and organic motion arcs that fool even the most advanced AI detectors by mimicking authentic human filming behavior."
        },
        {
          question: "What makes Sensor Fingerprint Injection unique?",
          answer: "This feature embeds synthetic metadata and sensor signatures that simulate real device capture characteristics. It creates the digital fingerprint of authentic hardware without revealing your actual device information."
        }
      ]
    },
    {
      title: "Pricing & Payments",
      faqs: [
        {
          question: "What payment methods do you offer?",
          answer: "We accept credit cards and PayPal for standard purchases. For advanced deployments, automation, and fully personalized stealth setups, we exclusively support cryptocurrency & the before mentioned methods of payment."
        },
        {
          question: "Can I change my plan anytime?",
          answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences. Your spoofing credits will adjust accordingly."
        },
        {
          question: "What happens if I exceed my monthly credits?",
          answer: "Your account will be temporarily limited until the next billing cycle. You can purchase additional credit packs or upgrade to a higher tier for immediate access to continue your operations."
        },
        {
          question: "Do you offer refunds?",
          answer: "We offer a 30-day money-back guarantee if you're not satisfied with our service. Simply contact our support team for a full refund, no questions asked."
        }
      ]
    },
    {
      title: "Technical Support",
      faqs: [
        {
          question: "How do I give access to a VA?",
          answer: "SpectreSpoofer makes it simple: you can add your virtual assistant through our Telegram bot interface or directly within the EXE application. In the EXE, you'll generate a VA key tied to your license, with limits depending on your package. Total control, seamless delegation."
        },
        {
          question: "What file formats are supported?",
          answer: "SpectreSpoofer supports all major video formats (MP4, MOV, AVI, MKV), image formats (JPG, PNG, GIF, WebP), and audio formats (MP3, WAV, AAC). Output formats are optimized for each target platform."
        },
        {
          question: "How fast is the processing?",
          answer: "Processing speed depends on content complexity and your plan tier. Lite users typically see 30-60 second processing times, while Premium and Spectre tiers enjoy priority processing with 10-30 second turnaround times."
        },
        {
          question: "Is there an API available?",
          answer: "Yes, we offer a comprehensive REST API for Premium and Spectre tier users. This allows seamless integration with your existing workflows, automation tools, and custom applications."
        }
      ]
    },
    {
      title: "Security & Privacy",
      faqs: [
        {
          question: "How secure is my content?",
          answer: "All content is processed using military-grade encryption and deleted from our servers within 24 hours. We use zero-knowledge architecture, meaning we cannot access your original files even if we wanted to."
        },
        {
          question: "Do you store my processed content?",
          answer: "No, processed content is delivered directly to you and immediately purged from our systems. We maintain no logs or copies of your content for maximum operational security."
        },
        {
          question: "Can my usage be traced back to me?",
          answer: "SpectreSpoofer is designed for complete anonymity. We accept cryptocurrency payments, require no personal information beyond email, and all processing is done through encrypted channels with no identifying markers."
        },
        {
          question: "What about law enforcement requests?",
          answer: "Due to our zero-knowledge architecture and automatic data deletion policies, we have no user data to provide even if legally compelled. Your operational security is our highest priority."
        }
      ]
    },
    {
      title: "Advanced Features",
      faqs: [
        {
          question: "What is white-label deployment?",
          answer: "Spectre tier users can deploy SpectreSpoofer under their own branding with custom domains, logos, and interface styling. Perfect for agencies and enterprises offering stealth services to their clients."
        },
        {
          question: "How does custom AI model training work?",
          answer: "Spectre tier includes training custom AI models on your specific content types and target platforms. This creates personalized obfuscation profiles that are uniquely optimized for your operational requirements."
        },
        {
          question: "Can I integrate SpectreSpoofer with my existing tools?",
          answer: "Absolutely. We offer webhooks, API endpoints, and custom integrations for popular automation tools like Zapier, Make.com, and direct database connections for enterprise users."
        },
        {
          question: "What are the enterprise deployment options?",
          answer: "Enterprise users can choose cloud deployment, on-premise installation, or hybrid solutions. We provide dedicated infrastructure, custom SLAs, and 24/7 priority support for mission-critical operations."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Subtle gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-400/5 to-blue-500/5 rounded-full blur-3xl animate-pulse animation-delay-2000" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r from-purple-400/3 to-pink-400/3 rounded-full blur-3xl animate-pulse animation-delay-1000" />
      </div>

      {/* Floating tech particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[
          { left: 20, top: 15, delay: 0, duration: 3 },
          { left: 65, top: 30, delay: 1, duration: 4 },
          { left: 85, top: 70, delay: 2, duration: 5 },
          { left: 30, top: 80, delay: 3, duration: 3.5 },
          { left: 75, top: 45, delay: 4, duration: 4.5 },
          { left: 45, top: 25, delay: 5, duration: 3.8 }
        ].map((particle, i) => (
          <div
            key={`tech-${i}`}
            className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse opacity-10"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`
            }}
          />
        ))}
      </div>

      {/* Header Spacing */}
      <div className="pt-32" />

      {/* Hero Section */}
      <section ref={sectionRef} className="py-24 px-6 relative z-10">
        <div className="container mx-auto max-w-4xl text-center">
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className="text-[#15202b] font-medium text-sm uppercase tracking-wide mb-4 block cyber-badge">
              FAQ
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight glitch-title" data-text="Frequently Asked Questions">
              Frequently Asked <span className="bg-gradient-to-r from-[#15202b] via-blue-600 to-[#15202b] bg-clip-text text-transparent animate-gradient-x">Questions</span>
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto tech-description">
              Everything you need to know about SpectreSpoofer's advanced stealth technology,
              features, and operational capabilities.
            </p>
          </div>

          {/* System status indicators */}
          <div className={`flex justify-center items-center gap-8 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-green-400 text-sm font-mono">FAQ_DATABASE_LOADED</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse animation-delay-500" />
              <span className="text-blue-400 text-sm font-mono">KNOWLEDGE_BASE_ACTIVE</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16 px-6 relative z-10">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-16">
            {faqCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                ref={(el) => {
                  categoryRefs.current[categoryIndex] = el;
                }}
                className={`transition-all duration-1000 ${
                  visibleCategories.has(categoryIndex) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${categoryIndex * 200}ms` }}
              >
                {/* Category Header */}
                <div className="relative text-center mb-8">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-3xl blur-xl opacity-50" />
                  <h2 className="relative text-3xl font-bold text-gray-900 cyber-title">
                    {category.title}
                  </h2>

                  {/* Tech status indicator */}
                  <div className="flex items-center justify-center gap-2 mt-4">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-green-400 text-xs font-mono">CATEGORY_LOADED</span>
                  </div>
                </div>

                <div className="space-y-6">
                  {category.faqs.map((faq, faqIndex) => {
                    const faqKey = `${categoryIndex}-${faqIndex}`;
                    return (
                      <div
                        key={faq.question}
                        ref={(el) => {
                          if (el) faqRefs.current.set(faqKey, el);
                        }}
                        className={`group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 transition-all duration-1000 hover:border-[#15202b]/30 hover:shadow-lg hover:shadow-blue-500/10 ${
                          visibleFAQs.has(faqKey) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        }`}
                        style={{ transitionDelay: `${(categoryIndex * 200) + (faqIndex * 100)}ms` }}
                      >
                        {/* Holographic glow effect */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-cyan-400/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative">
                          {/* Question */}
                          <div className="flex items-start gap-4 mb-4">
                            <div className="w-6 h-6 bg-gradient-to-r from-[#15202b] to-blue-600 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0 shadow-lg shadow-blue-500/25">
                              <span className="text-white text-sm font-bold">?</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#15202b] transition-colors">
                              {faq.question}
                            </h3>
                          </div>

                          {/* Answer */}
                          <div className="pl-10">
                            <p className="text-gray-600 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>

                          {/* Scan line effect */}
                          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Our team of experts is ready to help you with any specific questions
            about SpectreSpoofer's capabilities and implementation.
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

      {/* Quick Links */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Explore SpectreSpoofer
            </h2>
            <p className="text-xl text-gray-600">
              Ready to experience the ultimate in content stealth technology?
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-[#15202b] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Start Free Trial</h3>
              <p className="text-gray-600 mb-6">
                Experience SpectreSpoofer risk-free with our 2-day trial period.
              </p>
              <Link
                href="/trial"
                className="text-[#15202b] hover:text-[#2d3748] font-semibold"
              >
                Get Started →
              </Link>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-[#15202b] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">View Pricing</h3>
              <p className="text-gray-600 mb-6">
                Choose the perfect stealth level for your operational needs.
              </p>
              <Link
                href="/pricing"
                className="text-[#15202b] hover:text-[#2d3748] font-semibold"
              >
                See Plans →
              </Link>
            </div>

          </div>
        </div>
      </section>

      <style jsx>{`
        .cyber-badge {
          background: linear-gradient(45deg, #15202b, #2d3748);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: badge-glow 2s ease-in-out infinite alternate;
        }

        .glitch-title {
          position: relative;
          background: linear-gradient(45deg, #1f2937, #374151, #1f2937);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .glitch-title:hover:before,
        .glitch-title:hover:after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .glitch-title:hover:before {
          animation: glitch-anim-1 0.3s infinite;
          color: #ff0040;
          z-index: -1;
        }

        .glitch-title:hover:after {
          animation: glitch-anim-2 0.3s infinite;
          color: #00ffff;
          z-index: -2;
        }

        .tech-description {
          background: linear-gradient(135deg, #4b5563, #6b7280, #4b5563);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 200% 200%;
          animation: text-shimmer 4s ease-in-out infinite;
        }

        .cyber-title {
          background: linear-gradient(45deg, #1f2937, #374151, #1f2937);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: cyber-pulse 3s ease-in-out infinite;
        }

        .animate-gradient-x {
          background-size: 400% 400%;
          animation: gradient-x 3s ease infinite;
        }

        .animation-delay-500 {
          animation-delay: 0.5s;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        @keyframes badge-glow {
          from {
            text-shadow: 0 0 5px rgba(21, 32, 43, 0.5);
          }
          to {
            text-shadow: 0 0 15px rgba(21, 32, 43, 0.8);
          }
        }

        @keyframes glitch-anim-1 {
          0%, 99% { transform: translate(0); }
          20% { transform: translate(-1px, 1px); }
          40% { transform: translate(-1px, -1px); }
          60% { transform: translate(1px, 1px); }
          80% { transform: translate(1px, -1px); }
        }

        @keyframes glitch-anim-2 {
          0%, 99% { transform: translate(0); }
          20% { transform: translate(1px, 0); }
          40% { transform: translate(0, 1px); }
          60% { transform: translate(-1px, 0); }
          80% { transform: translate(0, -1px); }
        }

        @keyframes text-shimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes cyber-pulse {
          0%, 100% {
            text-shadow: 0 0 5px rgba(59, 130, 246, 0.3);
          }
          50% {
            text-shadow: 0 0 10px rgba(59, 130, 246, 0.6), 0 0 20px rgba(59, 130, 246, 0.3);
          }
        }

        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </div>
  );
}
