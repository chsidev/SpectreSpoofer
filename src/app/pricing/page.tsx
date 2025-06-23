"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import CheckoutButton from "../../components/CheckoutButton";

export default function PricingPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

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

    const cardObservers = cardRefs.current.map((ref, index) => {
      if (!ref) return null;

      const cardObserver = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              setVisibleCards(prev => new Set([...prev, index]));
            }
          }
        },
        { threshold: 0.2 }
      );

      cardObserver.observe(ref);
      return cardObserver;
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
      cardObservers.forEach(cardObserver => cardObserver?.disconnect());
    };
  }, []);
  const plans = [
    {
      name: "Lite",
      price: "$49.99",
      period: "per month",
      description: "Perfect for solo creators and small-scale operations",
      highlight: "Get started with essential spoofing",
      features: [
        {
          category: "🎯 Core Spoofing Features",
          items: [
            { text: "Full access to core spoofing engine", included: true },
            { text: "5,000 monthly spoof credits", included: true },
            { text: "Basic image & video spoofing tools", included: true },
            { text: "Standard obfuscation (Style Morphing, Frame Variance)", included: true }
          ]
        },
        {
          category: "📱 Platform Integration",
          items: [
            { text: "3 optimized presets (TikTok Safe, IG Safe, YouTube Short)", included: true },
            { text: "Basic metadata spoofing (device model only)", included: true }
          ]
        },
        {
          category: "🚫 Advanced Features",
          items: [
            { text: "AI detectability scoring", included: false },
            { text: "Batch processing or automation", included: false },
            { text: "Behavioral motion flow", included: false },
            { text: "Invisible spoof layers", included: false }
          ]
        },
        {
          category: "🛟 Support & Analytics",
          items: [
            { text: "Email support", included: true },
            { text: "Basic analytics dashboard", included: true }
          ]
        }
      ],
      popular: false,
      cta: "Purchase",
      savings: null,
      planType: "lite" as const
    },
    {
      name: "Premium",
      price: "$199.99",
      period: "per month",
      description: "Ideal for growing teams and advanced operations",
      highlight: "Everything in Lite, plus advanced AI & automation",
      features: [
        {
          category: "🚀 Advanced Spoofing Arsenal",
          items: [
            { text: "25,000 monthly spoof credits", included: true },
            { text: "Full suite of spoofing & stealth layers", included: true },
            { text: "AI detectability scoring engine", included: true },
            { text: "Behavioral motion flow & sensor fingerprint injection", included: true }
          ]
        },
        {
          category: "🤖 AI & Automation",
          items: [
            { text: "Advanced AI workflows & adaptive spoofing loop", included: true },
            { text: "Metadata & transcode signature spoofing", included: true },
            { text: "Invisible subtitle injection & stream mapping shuffle", included: true },
            { text: "Batch processing & command-line automation", included: true }
          ]
        },
        {
          category: "⚙️ Customization & Integration",
          items: [
            { text: "Full preset library + custom preset save/load", included: true },
            { text: "Unlimited platform integrations", included: true }
          ]
        },
        {
          category: "👥 Team & Support",
          items: [
            { text: "Team collaboration & workspace sharing", included: true },
            { text: "Priority support", included: true },
            { text: "Advanced analytics & reporting", included: true }
          ]
        }
      ],
      popular: true,
      cta: "Purchase",
      savings: null,
      planType: "premium" as const
    },
    {
      name: "Spectre",
      price: "Custom",
      period: "enterprise",
      description: "Maximum stealth for elite operations and organizations",
      highlight: "Everything in Premium, plus enterprise-grade solutions",
      features: [
        {
          category: "🏆 Enterprise-Grade Capabilities",
          items: [
            { text: "Unlimited spoofing credits", included: true },
            { text: "Custom AI model training (tailored to your content/risk profiles)", included: true },
            { text: "Zero-trace obfuscation stack (stealth-maximized)", included: true }
          ]
        },
        {
          category: "🏢 Custom Solutions & Deployment",
          items: [
            { text: "White-label solutions (custom branding & private deployment)", included: true },
            { text: "Custom automation workflows (tailored for your pipeline)", included: true },
            { text: "Custom platform integrations (internal tools, CDNs, etc.)", included: true },
            { text: "On-premise or private cloud deployment options", included: true }
          ]
        },
        {
          category: "🛡️ Security & Compliance",
          items: [
            { text: "Advanced security protocols (IP lock, vault deployment, etc.)", included: true },
            { text: "Multi-seat, multi-team collaboration tools", included: true }
          ]
        },
        {
          category: "🤝 Dedicated Support & Management",
          items: [
            { text: "Dedicated account manager", included: true },
            { text: "Direct access to Spectre's core dev team", included: true },
            { text: "24/7 priority enterprise support", included: true }
          ]
        }
      ],
      popular: false,
      cta: "Contact Sales",
      savings: "Custom Pricing",
      planType: "spectre" as const
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Subtle gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-400/5 to-blue-500/5 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r from-purple-400/3 to-pink-400/3 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
      </div>

      {/* Floating tech particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={`tech-${i}`}
            className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${3 + Math.random() * 2}s`
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
              PRICING
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight glitch-title" data-text="Choose Your Stealth Level">
              Choose Your <span className="bg-gradient-to-r from-[#15202b] via-blue-600 to-[#15202b] bg-clip-text text-transparent animate-gradient-x">Stealth Level</span>
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto tech-description">
              From solo operations to enterprise-grade stealth, SpectreSpoofer scales with your ambitions.
              All plans include our 5 spoof free trial and 30-day money-back guarantee.
            </p>
          </div>

          {/* System status indicators */}
          <div className={`flex justify-center items-center gap-8 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-green-400 text-sm font-mono">PRICING_MATRIX_ACTIVE</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse animation-delay-500" />
              <span className="text-blue-400 text-sm font-mono">STEALTH_TIERS_LOADED</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 px-6 relative overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            onError={(e) => console.log('Pricing video failed to load:', e)}
          >
            <source src="/pricing-background.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40 z-10" />
        </div>

        <div className="container mx-auto max-w-7xl relative z-20">
          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                className={`relative rounded-2xl border-2 p-8 backdrop-blur-sm group transition-all duration-1000 ${
                  visibleCards.has(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                } ${
                  plan.popular
                    ? 'border-[#15202b] bg-white/95 shadow-xl shadow-blue-500/10 ring-1 ring-[#15202b]/10'
                    : 'border-gray-200/50 bg-white/85 hover:bg-white/95 hover:border-gray-300/70'
                } hover:shadow-2xl hover:shadow-blue-500/15 hover:-translate-y-1`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Holographic glow effect */}
                <div className={`absolute -inset-1 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500'
                    : 'bg-gradient-to-r from-blue-400/50 via-purple-400/50 to-cyan-400/50'
                }`} />

                {/* Popular badge with glow */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-75 animate-pulse" />
                      <span className="relative bg-[#15202b] text-white px-4 py-2 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  </div>
                )}

                {/* Tech status indicator */}
                <div className="absolute top-4 right-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-green-400 text-xs font-mono">TIER_ACTIVE</span>
                </div>

                <div className="relative">
                  <div className="text-center mb-8">
                    {plan.savings && (
                      <div className="mb-3">
                        <span className="inline-block bg-gradient-to-r from-[#15202b] to-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                          {plan.savings}
                        </span>
                      </div>
                    )}
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 cyber-title">{plan.name}</h3>
                    <div className="mb-3">
                      <span className="text-4xl font-bold bg-gradient-to-r from-[#15202b] to-blue-600 bg-clip-text text-transparent">{plan.price}</span>
                      {plan.price !== "Custom" && (
                        <span className="text-gray-600 ml-2">/{plan.period}</span>
                      )}
                    </div>
                    <p className="text-gray-600 mb-2">{plan.description}</p>
                    <p className="text-sm text-[#15202b] font-medium">{plan.highlight}</p>
                  </div>

                  <div className="space-y-6 mb-8">
                    {plan.features.map((featureGroup, groupIndex) => (
                      <div key={`${plan.name}-group-${groupIndex}`} className="space-y-3">
                        {/* Category Header */}
                        <div className="flex items-center gap-2 pb-2 border-b border-gray-100">
                          <h4 className="text-[#15202b] font-bold text-sm uppercase tracking-wide">
                            {featureGroup.category}
                          </h4>
                          <div className="flex-1 h-px bg-gradient-to-r from-[#15202b]/20 to-transparent"></div>
                        </div>

                        {/* Features List */}
                        <ul className="space-y-2 pl-2">
                          {featureGroup.items.map((item, itemIndex) => (
                            <li key={`${plan.name}-${groupIndex}-${itemIndex}`} className="flex items-start gap-3">
                              {/* Icon */}
                              <div className="relative flex-shrink-0 mt-0.5">
                                {item.included ? (
                                  <>
                                    <div className="w-5 h-5 bg-gradient-to-r from-[#15202b] to-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/25">
                                      <svg
                                        className="w-3 h-3 text-white"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                      >
                                        <path
                                          fillRule="evenodd"
                                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                          clipRule="evenodd"
                                        />
                                      </svg>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-sm animate-pulse" />
                                  </>
                                ) : (
                                  <div className="w-5 h-5 bg-gray-300 rounded-full flex items-center justify-center">
                                    <svg
                                      className="w-3 h-3 text-gray-500"
                                      fill="currentColor"
                                      viewBox="0 0 20 20"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                      />
                                    </svg>
                                  </div>
                                )}
                              </div>

                              {/* Feature Text */}
                              <span className={`text-sm leading-relaxed ${
                                item.included
                                  ? 'text-gray-700 font-medium'
                                  : 'text-gray-500'
                              }`}>
                                {item.text}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3">
                    <CheckoutButton
                      planType={plan.planType}
                      className={`relative w-full block text-center py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 group/button overflow-hidden ${
                        plan.popular
                          ? 'bg-[#15202b] hover:bg-[#2d3748] text-white hover:shadow-xl hover:shadow-blue-500/30 hover:scale-105 transform-gpu'
                          : 'bg-gray-100 hover:bg-gray-200 text-[#15202b] hover:shadow-xl hover:shadow-blue-500/20 hover:scale-105 transform-gpu border-2 border-transparent hover:border-[#15202b]/20'
                      }`}
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {plan.cta}
                        <svg
                          className="w-5 h-5 transition-transform group-hover/button:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </span>
                      {plan.popular && (
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover/button:opacity-100 transition-opacity" />
                      )}
                    </CheckoutButton>

                    <div className="text-center text-xs text-gray-500">
                      {plan.name !== "Spectre" ? (
                        <span>🛡️ 30-day money-back guarantee • Cancel anytime</span>
                      ) : (
                        <span>🤝 Custom solutions • Dedicated support</span>
                      )}
                    </div>
                  </div>

                  {/* Scan line effect */}
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Payment Methods</h3>
              <p className="text-gray-600 mb-4">
                We accept credit cards and PayPal for standard purchases. For advanced deployments,
                automation, and fully personalized stealth setups, we exclusively support cryptocurrency
                & the before mentioned methods of payment.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise Solutions</h3>
              <p className="text-gray-600 mb-4">
                Need custom deployment, on-premise hosting, or specialized integrations?
                Our Spectre tier offers white-label solutions and dedicated support for enterprise operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Can I change plans anytime?
              </h4>
              <p className="text-gray-600">
                Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately,
                and we'll prorate any billing differences.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                What happens if I exceed my monthly credits?
              </h4>
              <p className="text-gray-600">
                Your account will be temporarily limited until the next billing cycle. You can purchase
                additional credit packs or upgrade to a higher tier for immediate access.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Is there a setup fee?
              </h4>
              <p className="text-gray-600">
                No setup fees for Lite and Premium plans. Spectre tier may include custom setup
                depending on your requirements.
              </p>
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
