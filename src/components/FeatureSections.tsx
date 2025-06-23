"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function FeatureSections() {
  const [visibleSections, setVisibleSections] = useState<Set<number>>(new Set());
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observers = sectionRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleSections(prev => new Set([...prev, index]));
            }
          });
        },
        { threshold: 0.2 }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  const features = [
    {
      title: "Style Morphing Engine",
      description: "A covert algorithmic engine engineered to mimic the raw aesthetic of social media giants. Tailored contrast, tone, and color grading make your content slip past algorithmic dragnets and blend seamlessly with the platform-native feed.",
      video: "/style-morphing-demo.mp4",
      techSpecs: ["Neural Network Processing", "Real-time Color Grading", "Platform-Specific Optimization"],
      dataText: "STYLE_MORPH_ACTIVE"
    },
    {
      title: "Frame Variance Generator",
      description: "Every frame is uniquely tainted with micro-variances, simulating real-world imperfections to evade AI scrutiny. These subtle entropy layers keep your content ghosted from moderation and forensics alike.",
      media: "/frame-variance-demo.gif",
      techSpecs: ["Micro-variance Injection", "Entropy Layer Generation", "AI Detection Evasion"],
      dataText: "VARIANCE_GEN_ONLINE"
    },
    {
      title: "Behavioral Motion Flow",
      description: "Organic motion, simulated. Spectre injects handheld realism into static shots — natural drift, jitter, and untraceable arcs that fool the most advanced AI detectors. Your content moves like it was born in the wild.",
      video: "/behavioral-motion-demo.mp4",
      techSpecs: ["Motion Pattern Analysis", "Handheld Simulation", "Natural Drift Algorithms"],
      dataText: "MOTION_FLOW_ENGAGED"
    },
    {
      title: "Sensor Fingerprint Injection",
      description: "Every file leaves a trace — except yours. SpectreSpoofer embeds synthetic sensor signatures to forge the illusion of real-world device capture. It's the final layer of deception — invisible but undeniable.",
      video: "/sensor-fingerprint-demo.mp4",
      techSpecs: ["Synthetic Metadata", "Device Signature Forge", "Forensic Obfuscation"],
      dataText: "FINGERPRINT_ACTIVE"
    }
  ];

  return (
    <div className="space-y-24">
      {features.map((feature, index) => (
        <section
          key={index}
          ref={(el) => {
            sectionRefs.current[index] = el;
          }}
          className={`py-16 px-6 overflow-visible ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} transition-all duration-1000 ${
            visibleSections.has(index) ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="container mx-auto">
            <div className={`grid lg:grid-cols-2 gap-16 items-center ${
              index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
            }`}>
              <div className={`space-y-6 pb-4 ${index % 2 === 1 ? 'lg:col-start-2' : ''} transform transition-all duration-1000 delay-300 ${
                visibleSections.has(index) ? 'translate-x-0 opacity-100' : `${index % 2 === 0 ? '-translate-x-8' : 'translate-x-8'} opacity-0`
              }`}>
                <div className="flex items-center gap-4">
                  <span className="text-[#15202b] font-medium text-sm uppercase tracking-wide">
                    FEATURE
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-xs font-mono">{feature.dataText}</span>
                  </div>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-relaxed cyber-title">
                  {feature.title}
                </h2>

                <p className="text-xl text-gray-700 leading-relaxed">
                  {feature.description}
                </p>

                {/* Tech Specs */}
                <div className="bg-black/5 rounded-lg p-4 border border-gray-200">
                  <div className="text-sm text-gray-500 mb-2 font-mono">TECHNICAL_SPECIFICATIONS:</div>
                  <ul className="space-y-1">
                    {feature.techSpecs.map((spec, specIndex) => (
                      <li key={specIndex} className="flex items-center text-sm">
                        <span className="text-green-400 mr-2">▶</span>
                        <span className="font-mono text-gray-700">{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/trial"
                  className="inline-flex items-center gap-2 bg-[#15202b] hover:bg-[#2d3748] text-white px-8 py-4 rounded-lg transition-all duration-300 font-semibold group hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105"
                >
                  <span className="group-hover:animate-pulse">Start a free trial</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:translate-x-1 transition-transform">
                    <path d="M8 5L16 12L8 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>

              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''} transform transition-all duration-1000 delay-600 ${
                visibleSections.has(index) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}>
                {/* Holographic border effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-2xl blur opacity-30 animate-pulse"></div>

                <div className="relative bg-black/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20">
                  {feature.video ? (
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-auto rounded-2xl"
                      onError={(e) => console.log('Feature video failed to load:', e)}
                    >
                      <source src={feature.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img
                      src={feature.media}
                      alt={`${feature.title} Demo`}
                      className="w-full h-auto rounded-2xl"
                    />
                  )}

                  {/* Tech overlay */}
                  <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm rounded-lg px-3 py-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                      <span className="text-blue-400 text-xs font-mono">PROCESSING</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <style jsx>{`
        .cyber-title {
          background: linear-gradient(45deg, #1f2937, #374151, #1f2937);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: cyber-pulse 3s ease-in-out infinite;
          line-height: 1.4;
          padding-bottom: 0.25rem;
        }

        @keyframes cyber-pulse {
          0%, 100% {
            text-shadow: 0 0 5px rgba(59, 130, 246, 0.3);
          }
          50% {
            text-shadow: 0 0 10px rgba(59, 130, 246, 0.6), 0 0 20px rgba(59, 130, 246, 0.3);
          }
        }
      `}</style>
    </div>
  );
}
