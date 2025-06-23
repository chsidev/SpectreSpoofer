"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    inquiryType: "general"
  });

  const [isVisible, setIsVisible] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<number>>(new Set());
  const [visibleMethods, setVisibleMethods] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLElement>(null);
  const methodRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

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

    const methodObservers = methodRefs.current.map((ref, index) => {
      if (!ref) return null;

      const methodObserver = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              setVisibleMethods(prev => new Set([...prev, index]));
            }
          }
        },
        { threshold: 0.2 }
      );

      methodObserver.observe(ref);
      return methodObserver;
    });

    const sectionObservers = sectionRefs.current.map((ref, index) => {
      if (!ref) return null;

      const sectionObserver = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              setVisibleSections(prev => new Set([...prev, index]));
            }
          }
        },
        { threshold: 0.2 }
      );

      sectionObserver.observe(ref);
      return sectionObserver;
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
      methodObservers.forEach(observer => observer?.disconnect());
      sectionObservers.forEach(observer => observer?.disconnect());
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const contactMethods = [
    {
      icon: "📧",
      title: "Email Support",
      description: "Get help with technical issues and account questions",
      contact: "support@spectrespoofer.com",
      responseTime: "Within 24 hours"
    },
    {
      icon: "💬",
      title: "Telegram Bot",
      description: "Instant support and VA management through our bot",
      contact: "@SpectreSpooferBot",
      responseTime: "Instant"
    },
    {
      icon: "🏢",
      title: "Enterprise Sales",
      description: "Custom solutions and enterprise deployments",
      contact: "enterprise@spectrespoofer.com",
      responseTime: "Within 4 hours"
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
          { left: 15, top: 20, delay: 0, duration: 3.5 },
          { left: 70, top: 35, delay: 1, duration: 4 },
          { left: 90, top: 75, delay: 2, duration: 5 },
          { left: 25, top: 85, delay: 3, duration: 3.8 },
          { left: 80, top: 50, delay: 4, duration: 4.2 },
          { left: 50, top: 10, delay: 5, duration: 3.6 }
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
              CONTACT
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight glitch-title" data-text="Get In Touch">
              Get In <span className="bg-gradient-to-r from-[#15202b] via-blue-600 to-[#15202b] bg-clip-text text-transparent animate-gradient-x">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto tech-description">
              Ready to elevate your stealth operations? Our team of experts is here to help you deploy
              the perfect SpectreSpoofer solution for your needs.
            </p>
          </div>

          {/* System status indicators */}
          <div className={`flex justify-center items-center gap-8 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-green-400 text-sm font-mono">CONTACT_SYSTEM_ONLINE</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse animation-delay-500" />
              <span className="text-blue-400 text-sm font-mono">SUPPORT_CHANNELS_ACTIVE</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-6 bg-gray-50 relative z-10">
        <div className="container mx-auto max-w-6xl">
          {/* Section header with tech effects */}
          <div className="text-center mb-16">
            <div className="relative inline-block">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-3xl blur-xl opacity-50" />
              <h2 className="relative text-3xl font-bold text-gray-900 cyber-title mb-4">
                Communication Channels
              </h2>

              {/* Tech status indicator */}
              <div className="flex items-center justify-center gap-2 mt-4">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400 text-xs font-mono">CHANNELS_ONLINE</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <div
                key={method.title}
                ref={(el) => {
                  methodRefs.current[index] = el;
                }}
                className={`group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center border border-gray-200/50 transition-all duration-1000 hover:border-[#15202b]/30 hover:shadow-lg hover:shadow-blue-500/10 ${
                  visibleMethods.has(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Holographic glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-cyan-400/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  {/* Tech status indicator */}
                  <div className="absolute top-0 right-0 flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-green-400 text-xs font-mono">ACTIVE</span>
                  </div>

                  <div className="text-4xl mb-4">{method.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 cyber-subtitle">{method.title}</h3>
                  <p className="text-gray-600 mb-4">{method.description}</p>
                  <p className="text-[#15202b] font-semibold mb-2 bg-gradient-to-r from-[#15202b] to-blue-600 bg-clip-text text-transparent">{method.contact}</p>
                  <p className="text-sm text-gray-500">{method.responseTime}</p>

                  {/* Scan line effect */}
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-6 relative z-10">
        <div className="container mx-auto max-w-4xl">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <div
              ref={(el) => {
                sectionRefs.current[0] = el;
              }}
              className={`transition-all duration-1000 ${
                visibleSections.has(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="relative mb-8">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-2xl blur-xl opacity-50" />
                <h2 className="relative text-3xl font-bold text-gray-900 cyber-title">Send Us a Message</h2>

                {/* Tech status indicator */}
                <div className="flex items-center gap-2 mt-4">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-green-400 text-sm font-mono">FORM_SECURE_CONNECTION</span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative group">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-[#15202b] transition-colors">
                      Full Name *
                    </label>
                    <div className="relative">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-cyan-400/20 rounded-lg blur opacity-0 group-focus-within:opacity-100 transition-opacity duration-300" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="relative w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#15202b] focus:border-transparent bg-white/90 backdrop-blur-sm transition-all duration-300 hover:bg-white"
                        placeholder="Your name"
                      />
                    </div>
                  </div>
                  <div className="relative group">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-[#15202b] transition-colors">
                      Email Address *
                    </label>
                    <div className="relative">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-cyan-400/20 rounded-lg blur opacity-0 group-focus-within:opacity-100 transition-opacity duration-300" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="relative w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#15202b] focus:border-transparent bg-white/90 backdrop-blur-sm transition-all duration-300 hover:bg-white"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="relative group">
                  <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-[#15202b] transition-colors">
                    Inquiry Type
                  </label>
                  <div className="relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-cyan-400/20 rounded-lg blur opacity-0 group-focus-within:opacity-100 transition-opacity duration-300" />
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      className="relative w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#15202b] focus:border-transparent bg-white/90 backdrop-blur-sm transition-all duration-300 hover:bg-white"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="sales">Sales & Pricing</option>
                      <option value="enterprise">Enterprise Solutions</option>
                      <option value="partnership">Partnership</option>
                    </select>
                  </div>
                </div>

                <div className="relative group">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-[#15202b] transition-colors">
                    Subject *
                  </label>
                  <div className="relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-cyan-400/20 rounded-lg blur opacity-0 group-focus-within:opacity-100 transition-opacity duration-300" />
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="relative w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#15202b] focus:border-transparent bg-white/90 backdrop-blur-sm transition-all duration-300 hover:bg-white"
                      placeholder="Brief description of your inquiry"
                    />
                  </div>
                </div>

                <div className="relative group">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-[#15202b] transition-colors">
                    Message *
                  </label>
                  <div className="relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-cyan-400/20 rounded-lg blur opacity-0 group-focus-within:opacity-100 transition-opacity duration-300" />
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="relative w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#15202b] focus:border-transparent bg-white/90 backdrop-blur-sm transition-all duration-300 hover:bg-white resize-none"
                      placeholder="Tell us more about your needs..."
                    />
                  </div>
                </div>

                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#15202b] via-blue-600 to-[#15202b] rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <button
                    type="submit"
                    className="relative w-full bg-[#15202b] hover:bg-[#2d3748] text-white px-8 py-4 rounded-lg transition-all duration-300 font-semibold hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105"
                  >
                    <span className="flex items-center justify-center gap-2">
                      Send Message
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:translate-x-1 transition-transform">
                        <path d="M8 5L16 12L8 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </button>
                </div>
              </form>
            </div>

            {/* Additional Info */}
            <div
              ref={(el) => {
                sectionRefs.current[1] = el;
              }}
              className={`transition-all duration-1000 delay-300 ${
                visibleSections.has(1) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="relative mb-8">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-2xl blur-xl opacity-50" />
                <h2 className="relative text-3xl font-bold text-gray-900 cyber-title">Why Choose SpectreSpoofer?</h2>

                {/* Tech status indicator */}
                <div className="flex items-center gap-2 mt-4">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-green-400 text-sm font-mono">FEATURES_VERIFIED</span>
                </div>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: "🛡️",
                    title: "Military-Grade Security",
                    description: "Our obfuscation protocols are designed to the highest security standards, ensuring your content remains undetectable."
                  },
                  {
                    icon: "⚡",
                    title: "Lightning Fast Processing",
                    description: "Advanced AI algorithms process your content in seconds, not minutes. Scale your operations without delay."
                  },
                  {
                    icon: "🎯",
                    title: "Precision Targeting",
                    description: "Custom sensor fingerprinting and platform-specific optimizations ensure maximum effectiveness across all channels."
                  },
                  {
                    icon: "🔒",
                    title: "Zero-Trace Operations",
                    description: "Leave no digital footprint. Our advanced masking technology ensures complete operational invisibility."
                  }
                ].map((feature, index) => (
                  <div key={feature.title} className="group relative bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 hover:border-[#15202b]/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                    {/* Holographic glow effect */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-cyan-400/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-3">
                        <span className="text-2xl">{feature.icon}</span>
                        <span className="cyber-subtitle">{feature.title}</span>
                      </h4>
                      <p className="text-gray-600">{feature.description}</p>

                      {/* Scan line effect */}
                      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 relative group">
                {/* Holographic glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-cyan-400/20 rounded-xl blur opacity-50" />

                <div className="relative p-6 bg-gray-50/90 backdrop-blur-sm rounded-lg border border-gray-200/50">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 cyber-subtitle">Need Immediate Help?</h4>
                  <p className="text-gray-600 mb-4">
                    For urgent technical issues or time-sensitive operations, contact us directly:
                  </p>
                  <div className="relative group/button">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#15202b] via-blue-600 to-[#15202b] rounded-lg blur opacity-0 group-hover/button:opacity-100 transition-opacity duration-300" />
                    <Link
                      href="#"
                      className="relative inline-flex items-center gap-2 bg-[#15202b] hover:bg-[#2d3748] text-white px-6 py-3 rounded-lg transition-all duration-300 font-medium hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105"
                    >
                      Join Telegram Support
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover/button:translate-x-1 transition-transform">
                        <path d="M8 5L16 12L8 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section
        ref={(el) => {
          sectionRefs.current[2] = el;
        }}
        className={`py-16 px-6 bg-gray-50 relative z-10 transition-all duration-1000 ${
          visibleSections.has(2) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="container mx-auto max-w-4xl text-center">
          <div className="relative mb-8">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-3xl blur-xl opacity-50" />
            <h2 className="relative text-3xl font-bold text-gray-900 mb-6 cyber-title">Looking for Quick Answers?</h2>

            {/* Tech status indicator */}
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-green-400 text-xs font-mono">FAQ_AVAILABLE</span>
            </div>
          </div>

          <p className="text-xl text-gray-600 mb-8 tech-description">
            Check out our comprehensive FAQ section for instant answers to common questions.
          </p>

          <div className="relative group inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#15202b] via-blue-600 to-[#15202b] rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Link
              href="/faq"
              className="relative inline-flex items-center gap-2 bg-[#15202b] hover:bg-[#2d3748] text-white px-8 py-4 rounded-lg transition-all duration-300 font-semibold hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105"
            >
              View FAQ
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:translate-x-1 transition-transform">
                <path d="M8 5L16 12L8 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>


  );
}
