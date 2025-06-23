"use client";

import { useEffect, useState, useRef } from "react";

export default function HowItWorks() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-white relative overflow-hidden">
      {/* Animated background patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      {/* Subtle top border for separation */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      <div className="container mx-auto text-center max-w-4xl relative z-10">
        <div className={`mb-8 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <span className="text-[#15202b] font-medium text-sm uppercase tracking-wide cyber-badge">
            HOW IT WORKS
          </span>
        </div>

        <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        } cyber-title-large`}>
          <span className="bg-gradient-to-r from-gray-900 via-[#15202b] to-gray-900 bg-clip-text text-transparent">
            Multiply Your Digital
          </span>
          <br />
          <span className="glitch-text" data-text="Footprint">
            Footprint
          </span>
        </h2>

        <p className={`text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        } tech-description`}>
          A covert AI manipulation engine, seamlessly deployed in Telegram. SpectreSpoofer magnifies your
          content output and amplifies your digital presence — with intelligent repurposing, elite filters,
          and zero trace execution.
        </p>

        {/* Tech indicators */}
        <div className={`flex justify-center items-center gap-8 mt-12 transition-all duration-1000 delay-900 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-400 text-sm font-mono">AI_ENGINE_ACTIVE</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse animation-delay-500"></div>
            <span className="text-blue-400 text-sm font-mono">TELEGRAM_DEPLOYED</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse animation-delay-1000"></div>
            <span className="text-purple-400 text-sm font-mono">ZERO_TRACE_MODE</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .cyber-badge {
          position: relative;
          background: linear-gradient(45deg, #15202b, #2d3748);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: badge-glow 2s ease-in-out infinite alternate;
        }

        .cyber-title-large {
          position: relative;
          text-shadow: 0 0 10px rgba(21, 32, 43, 0.3);
        }

        .glitch-text {
          position: relative;
          display: inline-block;
        }

        .glitch-text:before,
        .glitch-text:after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .glitch-text:before {
          animation: glitch-anim-1 2s infinite;
          color: #ff0040;
          z-index: -1;
        }

        .glitch-text:after {
          animation: glitch-anim-2 2s infinite;
          color: #00ffff;
          z-index: -2;
        }

        .tech-description {
          background: linear-gradient(135deg, #4b5563, #6b7280, #4b5563);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: text-shimmer 3s ease-in-out infinite;
        }

        @keyframes badge-glow {
          from {
            text-shadow: 0 0 5px rgba(21, 32, 43, 0.5);
          }
          to {
            text-shadow: 0 0 15px rgba(21, 32, 43, 0.8), 0 0 25px rgba(21, 32, 43, 0.4);
          }
        }

        @keyframes glitch-anim-1 {
          0%, 99% {
            transform: translate(0);
          }
          20% {
            transform: translate(-1px, 1px);
          }
          40% {
            transform: translate(-1px, -1px);
          }
          60% {
            transform: translate(1px, 1px);
          }
          80% {
            transform: translate(1px, -1px);
          }
        }

        @keyframes glitch-anim-2 {
          0%, 99% {
            transform: translate(0);
          }
          20% {
            transform: translate(1px, 0);
          }
          40% {
            transform: translate(0, 1px);
          }
          60% {
            transform: translate(-1px, 0);
          }
          80% {
            transform: translate(0, -1px);
          }
        }

        @keyframes text-shimmer {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
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
      `}</style>
    </section>
  );
}
