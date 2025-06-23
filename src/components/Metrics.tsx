"use client";

import { useEffect, useState, useRef, useMemo } from "react";

export default function Metrics() {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState([0, 0, 0]);
  const sectionRef = useRef<HTMLElement>(null);

  const metrics = useMemo(() => [
    {
      value: "500+",
      numericValue: 500,
      description: "Spoofed videos processed simultaneously in one batch session, overnight",
      color: "text-[#15202b]",
      tech: "BATCH_PROCESSED"
    },
    {
      value: "14+",
      numericValue: 14,
      description: "Proprietary spoofing modules working together in perfect stealth to ensure every upload passes undetected",
      color: "text-[#15202b]",
      tech: "MODULES_ACTIVE"
    },
    {
      value: "82%",
      numericValue: 82,
      description: "Reduction in moderation flags for agency-grade workflows",
      color: "text-[#15202b]",
      tech: "SUCCESS_RATE"
    }
  ], []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);

            // Animate numbers
            metrics.forEach((metric, index) => {
              let start = 0;
              const end = metric.numericValue;
              const duration = 2000;
              const increment = end / (duration / 16);

              const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                  start = end;
                  clearInterval(timer);
                }

                setAnimatedValues(prev => {
                  const newValues = [...prev];
                  newValues[index] = Math.floor(start);
                  return newValues;
                });
              }, 16);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [metrics]);

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-white relative overflow-hidden">
      {/* Tech grid background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(90deg, #15202b 1px, transparent 1px),
              linear-gradient(180deg, #15202b 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Floating tech elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <span className="text-[#15202b] font-medium text-sm uppercase tracking-wide mb-4 block cyber-badge">
            METRICS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight glitch-title" data-text="Numbers speaking for themselves">
            Numbers speaking for themselves
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 text-center">
          {metrics.map((metric, index) => (
            <div
              key={metric.value}
              className={`space-y-6 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 300}ms` }}
            >
              {/* Holographic container */}
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-3xl blur-xl"></div>

                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50">
                  {/* Tech indicator */}
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-xs font-mono">{metric.tech}</span>
                  </div>

                  {/* Animated number */}
                  <div className={`text-6xl md:text-7xl font-bold ${metric.color} leading-none mb-4 relative`}>
                    <span className="counter-glow">
                      {index === 0 && `${animatedValues[index]}+`}
                      {index === 1 && `${animatedValues[index]}+`}
                      {index === 2 && `${animatedValues[index]}%`}
                    </span>

                    {/* Digital effect overlay */}
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse opacity-0 hover:opacity-100 transition-opacity"></div>
                  </div>

                  {/* Progress bar visualization */}
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-6 overflow-hidden">
                    <div
                      className={`h-2 rounded-full transition-all duration-2000 delay-${index * 300} bg-gradient-to-r from-[#15202b] to-blue-500`}
                      style={{
                        width: isVisible ? `${index === 2 ? animatedValues[index] : Math.min((animatedValues[index] / metric.numericValue) * 100, 100)}%` : '0%'
                      }}
                    />
                  </div>

                  <p className="text-gray-700 text-lg font-medium leading-relaxed">
                    {metric.description}
                  </p>

                  {/* Scan line effect */}
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* System status */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-1200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center gap-6 bg-gray-50 rounded-full px-8 py-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-sm font-mono">METRICS_VALIDATED</span>
            </div>
            <div className="w-px h-4 bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse animation-delay-500"></div>
              <span className="text-blue-400 text-sm font-mono">REAL_TIME_DATA</span>
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

        .counter-glow {
          position: relative;
          text-shadow: 0 0 20px rgba(21, 32, 43, 0.3);
          animation: number-pulse 2s ease-in-out infinite;
        }

        @keyframes badge-glow {
          from { text-shadow: 0 0 5px rgba(21, 32, 43, 0.5); }
          to { text-shadow: 0 0 15px rgba(21, 32, 43, 0.8); }
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

        @keyframes number-pulse {
          0%, 100% { text-shadow: 0 0 20px rgba(21, 32, 43, 0.3); }
          50% { text-shadow: 0 0 30px rgba(21, 32, 43, 0.6), 0 0 40px rgba(59, 130, 246, 0.2); }
        }

        .animation-delay-500 {
          animation-delay: 0.5s;
        }
      `}</style>
    </section>
  );
}
