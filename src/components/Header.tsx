"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);
  const isHomePage = pathname === "/";

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Use fallback styling during SSR, dynamic styling after mount
  const headerClasses = !isMounted
    ? "fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200/50 shadow-sm transition-all duration-300"
    : `fixed top-0 w-full z-50 transition-all duration-300 ${
        isHomePage
          ? "bg-transparent backdrop-blur-md border-b border-white/10"
          : "bg-white/80 backdrop-blur-lg border-b border-gray-200/50 shadow-sm"
      }`;

  const navLinkClasses = !isMounted
    ? "text-[#15202b] hover:text-blue-600 transition-colors font-medium"
    : `transition-colors font-medium ${
        isHomePage
          ? "text-white hover:text-gray-300"
          : "text-[#15202b] hover:text-blue-600"
      }`;

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/spectrespoofer-logo.png"
              alt="SpectreSpoofer Logo"
              width={72}
              height={72}
              className={`w-20 h-20 object-contain transition-all duration-300 ${
                !isMounted ? "drop-shadow-sm" : isHomePage ? "" : "drop-shadow-sm"
              }`}
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/pricing"
              className={navLinkClasses}
            >
              Pricing
            </Link>
            <Link
              href="/affiliate"
              className={navLinkClasses}
            >
              Affiliate
            </Link>
            <Link
              href="/faq"
              className={navLinkClasses}
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              className={navLinkClasses}
            >
              Contact
            </Link>

          </nav>

          {/* CTA Button */}
          <Link
            href="/trial"
            className="bg-[#15202b] hover:bg-[#2d3748] text-white px-6 py-2 rounded-lg transition-all duration-300 flex items-center gap-2 font-medium shadow-lg hover:shadow-xl hover:scale-105"
          >
            Start a free trial
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 5L16 12L8 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
}
