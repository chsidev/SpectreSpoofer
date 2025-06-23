"use client";

import { useEffect, useState, useRef } from "react";

export default function ToolsSection() {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const [headerVisible, setHeaderVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const features = [
    {
      icon: "🔒",
      title: "Total Stealth Spoofing",
      description: "Forget basic watermarks — Spectre's covert fingerprint layers preserve your anonymity while bypassing algorithmic checks.",
      tech: "FINGERPRINT_ACTIVE"
    },
    {
      icon: "📱",
      title: "Multi-Platform Mastery",
      description: "Effortlessly repurpose and spoof content for TikTok, Instagram, Reddit, and beyond — fully adaptive, zero limitations.",
      tech: "PLATFORM_SYNC"
    },
    {
      icon: "⚡",
      title: "Blitz-Speed Batch Spoofing",
      description: "Spectre's batch engine handles dozens of videos and images in a single pass — no lag, no guesswork.",
      tech: "BATCH_ENGINE_ON"
    },
    {
      icon: "👆",
      title: "Seamless Telegram & EXE Control",
      description: "Command your spoof pipeline directly from Telegram or launch the dedicated EXE — total flexibility, zero clutter.",
      tech: "CONTROL_INTERFACE"
    },
    {
      icon: "👥",
      title: "Team-Ready Workflows",
      description: "Securely share bot access with your VA or ops team — Spectre keeps your pipeline lean and efficient.",
      tech: "TEAM_MODE_ENABLED"
    },
    {
      icon: "🎯",
      title: "Hyper-Realistic Content Variants",
      description: "Spectre's Scene Morphing capabilities give every upload a unique signature, ensuring maximum niche reach and zero footprints.",
      tech: "MORPHING_READY"
    }
  ];

  useEffect(() => {
    const headerObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setHeaderVisible(true);
          }
        }
      },
      { threshold: 0.3 }
    );

    const itemObservers = itemRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              setVisibleItems(prev => new Set([...prev, index]));
            }
          }
        },
        { threshold: 0.2 }
      );

      observer.observe(ref);
      return observer;
    });

    if (sectionRef.current) {
      headerObserver.observe(sectionRef.current);
    }

    return () => {
      headerObserver.disconnect();
      for (const observer of itemObservers) {
        observer?.disconnect();
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-white relative overflow-hidden">
      {/* Animated background matrix */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(6)].map((_, i) => (
            <div
              key={`matrix-line-${i}`}
              className="absolute w-px bg-gradient-to-b from-transparent via-[#15202b] to-transparent animate-pulse"
              style={{
                left: `${(i + 1) * 16.67}%`,
                height: '100%',
                animationDelay: `${i * 0.5}s`,
                animationDuration: '3s'
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <span className="text-[#15202b] font-medium text-sm uppercase tracking-wide mb-4 block cyber-badge">
            INCLUDED
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight glitch-title" data-text="Your Black Ops Control Center, Anywhere.">
            Your Black Ops Control Center, Anywhere.
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto tech-description">
            SpectreSpoofer lets you choose your battlefield — run it natively as a Telegram assistant for on-the-fly commands,
            or deploy the standalone EXE for total operational control. One streamlined system to command your entire
            repurposing pipeline — with stealth and speed across Mac, Windows, iOS, and Android.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              ref={(el) => {
                if (el) {
                  itemRefs.current[index] = el;
                }
              }}
              className={`text-center group transition-all duration-1000 ${
                visibleItems.has(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Holographic container */}
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 group-hover:border-[#15202b]/30 transition-all duration-500">
                  {/* Icon with tech overlay */}
                  <div className="relative w-16 h-16 bg-gradient-to-br from-[#15202b] to-[#2d3748] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">{feature.icon}</span>

                    {/* Tech indicator */}
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full animate-pulse">
                      <div className="absolute inset-0 bg-green-400 rounded-full animate-ping"></div>
                    </div>
                  </div>

                  {/* Tech status */}
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-xs font-mono">{feature.tech}</span>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#15202b] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Scan line effect */}
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* System status footer */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-1000 ${
          headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center gap-6 bg-gray-50 rounded-full px-8 py-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-sm font-mono">ALL_SYSTEMS_OPERATIONAL</span>
            </div>
            <div className="w-px h-4 bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse animation-delay-500"></div>
              <span className="text-blue-400 text-sm font-mono">STEALTH_MODE_ACTIVE</span>
            </div>
          </div>
        </div>
      </div>

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

        .animation-delay-500 {
          animation-delay: 0.5s;
        }
      `}</style>
    </section>
  );
}
