"use client";

import { useState } from "react";
import Link from "next/link";

export default function TrialPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    useCase: "content-creation",
    agreeToTerms: false,
    subscribeNewsletter: true
  });

  const [currentStep, setCurrentStep] = useState(1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Trial signup:", formData);
  };

  const trialBenefits = [
    {
      icon: "⚡",
      title: "Full Feature Access",
      description: "Experience all SpectreSpoofer capabilities for 5 spoofs"
    },
    {
      icon: "🔄",
      title: "5 Spoofer Credits",
      description: "Enough credits to test all major features extensively"
    },
    {
      icon: "📞",
      title: "Priority Support",
      description: "Direct access to our technical team during your trial"
    }
  ];

  const steps = [
    {
      number: 1,
      title: "Account Setup",
      description: "Basic information and credentials"
    },
    {
      number: 2,
      title: "Use Case Selection",
      description: "Tell us about your specific needs"
    },
    {
      number: 3,
      title: "Trial Activation",
      description: "Instant access to your dashboard"
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
            FREE TRIAL
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Start Your <span className="text-[#15202b]">Stealth</span> Journey
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Experience the full power of SpectreSpoofer with our 5 spoof free trial.
            No restricted modules, just pure stealth accessibility for both images and videos.
          </p>
        </div>
      </section>

      {/* Trial Benefits */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              What's Included in Your Trial
            </h2>
            <p className="text-xl text-gray-600">
              Get complete access to all SpectreSpoofer features and capabilities.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl">
              {trialBenefits.map((benefit) => (
                <div key={benefit.title} className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <div className="text-5xl mb-6">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Get Started in 3 Simple Steps
            </h2>
            <p className="text-xl text-gray-600">
              From signup to operational stealth in less than 2 minutes.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 ${
                  currentStep >= step.number ? 'bg-[#15202b]' : 'bg-gray-300'
                }`}>
                  <span className="text-white text-xl font-bold">{step.number}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto max-w-2xl">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Create Your Account
              </h2>
              <p className="text-gray-600">
                Join thousands of successful operators using SpectreSpoofer.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#15202b] focus:border-transparent"
                    placeholder="First name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#15202b] focus:border-transparent"
                    placeholder="Last name"
                  />
                </div>
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
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#15202b] focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                    Password *
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#15202b] focus:border-transparent"
                    placeholder="Create password"
                  />
                </div>
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                    Confirm Password *
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    required
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#15202b] focus:border-transparent"
                    placeholder="Confirm password"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="useCase" className="block text-sm font-medium text-gray-700 mb-2">
                  Primary Use Case
                </label>
                <select
                  id="useCase"
                  name="useCase"
                  value={formData.useCase}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#15202b] focus:border-transparent"
                >
                  <option value="content-creation">Content Creation</option>
                  <option value="social-media">Social Media Marketing</option>
                  <option value="enterprise">Enterprise Operations</option>
                  <option value="research">Research & Development</option>
                  <option value="agency">Agency Services</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-4">
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    className="mt-1 mr-3 h-4 w-4 text-[#15202b] focus:ring-[#15202b] border-gray-300 rounded"
                    required
                  />
                  <span className="text-sm text-gray-600">
                    I agree to the{" "}
                    <Link href="/terms" className="text-[#15202b] hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-[#15202b] hover:underline">
                      Privacy Policy
                    </Link>
                  </span>
                </label>
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    name="subscribeNewsletter"
                    checked={formData.subscribeNewsletter}
                    onChange={handleChange}
                    className="mt-1 mr-3 h-4 w-4 text-[#15202b] focus:ring-[#15202b] border-gray-300 rounded"
                  />
                  <span className="text-sm text-gray-600">
                    Subscribe to receive stealth techniques and product updates
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-[#15202b] hover:bg-[#2d3748] text-white px-8 py-4 rounded-lg transition-colors font-semibold text-lg"
              >
                Start Free Trial
              </button>
            </form>

            <div className="mt-6 text-center text-sm text-gray-500">
              Already have an account?{" "}
              <Link href="/login" className="text-[#15202b] hover:underline font-semibold">
                Sign in here
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Your Security is Our Priority
            </h2>
            <p className="text-xl text-gray-600">
              Enterprise-grade security measures protect your data and operations.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#15202b] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🔐</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">End-to-End Encryption</h3>
              <p className="text-gray-600 text-sm">
                All data is encrypted in transit and at rest using military-grade protocols.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#15202b] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🗑️</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Auto-Delete Policy</h3>
              <p className="text-gray-600 text-sm">
                All processed content is automatically deleted within 24 hours.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#15202b] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">👤</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Anonymous Operations</h3>
              <p className="text-gray-600 text-sm">
                Zero-knowledge architecture ensures complete operational anonymity.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
