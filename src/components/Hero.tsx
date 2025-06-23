"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [typedText, setTypedText] = useState("");
  const fullText = "Bulletproof Content Spoofing & Repurposing";

  useEffect(() => {
    setIsLoaded(true);

    // Typewriter effect
    let index = 0;
    const typeInterval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typeInterval);
      }
    }, 50);

    return () => clearInterval(typeInterval);
  }, []);

  return (
    <section className="pt-48 pb-24 px-6 relative" style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)' }}>
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
          onError={(e) => console.log('Video failed to load:', e)}
          onLoadStart={() => console.log('Video loading started')}
          onCanPlay={() => console.log('Video can play and will start')}
          onLoadedData={() => console.log('Video data loaded successfully')}
          onPlay={() => console.log('Video is now playing')}
        >
          <source src="/hero-background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Optional overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20 z-10" />
      </div>

      {/* Content */}
      <div className="container mx-auto max-w-7xl relative z-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 pb-4 lg:pr-8">
            {/* Animated Title */}
            <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold leading-relaxed transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <span className="block text-white mb-2 glitch-text" data-text="Bulletproof Content">
                {typedText.split(' ').slice(0, 2).join(' ')}
                <span className="animate-pulse">|</span>
              </span>
              <span className={`block bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x transition-all duration-1500 delay-500 gradient-text-fix ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                {typedText.split(' ').slice(2).join(' ')}
              </span>
            </h1>

            {/* Animated Subtitle */}
            <p className={`text-xl md:text-2xl text-gray-300 leading-relaxed transition-all duration-1000 delay-300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <span className="cyber-text">The ultimate suite for bulletproof content repurposing</span> -
              <span className="text-blue-400 font-semibold"> AI workflows</span>,
              <span className="text-purple-400 font-semibold"> stealth grade obfuscation</span>, and
              <span className="text-cyan-400 font-semibold"> seamless cross platform deployment</span>.
            </p>

            {/* Animated Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <Link
                href="/trial"
                className="bg-[#15202b] hover:bg-[#2d3748] text-white px-8 py-4 rounded-lg transition-all duration-300 flex items-center gap-2 font-semibold text-lg group hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105"
              >
                <span className="group-hover:animate-pulse">Start a free trial</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:translate-x-1 transition-transform">
                  <path d="M8 5L16 12L8 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link
                href="#demo"
                className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-lg transition-all duration-300 flex items-center gap-2 font-semibold text-lg backdrop-blur-sm hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105"
              >
                <span>Book a demo</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 10L19 14L15 18M4 14H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>

            {/* Matrix Effect Elements */}
            <div className="flex items-center gap-4 mt-8">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-sm font-mono">SYSTEM ONLINE</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse animation-delay-1000"></div>
                <span className="text-blue-400 text-sm font-mono">STEALTH MODE: ACTIVE</span>
              </div>
            </div>
          </div>

          {/* Right side - SpectreSpoofer Hero Image */}
          <div className={`relative transition-all duration-1500 delay-1000 lg:pl-8 ${
            isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <div className="relative scale-110 lg:scale-125">
              {/* Outer glow effect - large */}
              <div className="absolute -inset-8 bg-gradient-to-r from-blue-500/30 via-purple-500/40 to-cyan-500/30 rounded-3xl blur-2xl animate-pulse"></div>

              {/* Middle glow effect - medium */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/50 via-purple-400/60 to-cyan-400/50 rounded-2xl blur-xl opacity-80 animate-pulse animation-delay-1000"></div>

              {/* Inner holographic border effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-2xl blur opacity-75 animate-pulse animation-delay-500"></div>

              {/* SpectreSpoofer Hero Image */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-white/30 shadow-2xl backdrop-blur-sm">
                <img
                  src="/spectrespoofer-hero-image.png"
                  alt="SpectreSpoofer Hero Image"
                  className="w-full h-auto"
                  onError={(e) => console.log('SpectreSpoofer hero image failed to load:', e)}
                />

                {/* Overlay for additional glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/15 via-transparent to-purple-500/15 pointer-events-none"></div>

                {/* Animated scan line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 animate-pulse hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .glitch-text {
          position: relative;
          line-height: 1.4;
          padding-bottom: 0.25rem;
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
          animation: glitch-anim-1 0.5s infinite;
          color: #ff0000;
          z-index: -1;
        }

        .glitch-text:after {
          animation: glitch-anim-2 0.5s infinite;
          color: #00ffff;
          z-index: -2;
        }

        @keyframes glitch-anim-1 {
          0%, 99% {
            transform: translate(0);
          }
          20% {
            transform: translate(-2px, 2px);
          }
          40% {
            transform: translate(-2px, -2px);
          }
          60% {
            transform: translate(2px, 2px);
          }
          80% {
            transform: translate(2px, -2px);
          }
        }

        @keyframes glitch-anim-2 {
          0%, 99% {
            transform: translate(0);
          }
          20% {
            transform: translate(2px, 0);
          }
          40% {
            transform: translate(0, 2px);
          }
          60% {
            transform: translate(-2px, 0);
          }
          80% {
            transform: translate(0, -2px);
          }
        }

        .animate-gradient-x {
          background-size: 400% 400%;
          animation: gradient-x 3s ease infinite;
        }

        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .cyber-text {
          position: relative;
          background: linear-gradient(45deg, #fff, #ccc, #fff);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: cyber-glow 2s ease-in-out infinite alternate;
        }

        @keyframes cyber-glow {
          from {
            text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #0099ff;
          }
          to {
            text-shadow: 0 0 2px #fff, 0 0 5px #fff, 0 0 8px #0099ff;
          }
        }

        .animation-delay-500 {
          animation-delay: 0.5s;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .gradient-text-fix {
          line-height: 1.4;
          padding-bottom: 0.5rem;
        }
      `}</style>
    </section>
  );
}
