import Link from "next/link";

export default function BlogPage() {
  const featuredPosts = [
    {
      id: 1,
      title: "The Evolution of AI Detection: Staying Ahead of the Curve",
      excerpt: "How modern AI detection systems work and the advanced techniques SpectreSpoofer uses to maintain operational invisibility in 2025.",
      author: "SpectreTeam",
      date: "June 10, 2025",
      readTime: "8 min read",
      category: "Technology",
      image: "/blog/ai-detection-evolution.jpg",
      featured: true
    },
    {
      id: 2,
      title: "Military-Grade Obfuscation: The Science Behind SpectreSpoofer",
      excerpt: "Deep dive into the cryptographic and AI-powered obfuscation techniques that make SpectreSpoofer the most advanced stealth platform available.",
      author: "Dr. Sarah Chen",
      date: "June 8, 2025",
      readTime: "12 min read",
      category: "Technical",
      image: "/blog/military-grade-obfuscation.jpg",
      featured: true
    }
  ];

  const recentPosts = [
    {
      id: 3,
      title: "Platform-Specific Optimization: Mastering Every Social Network",
      excerpt: "How SpectreSpoofer's Style Morphing Engine adapts to the unique characteristics of each major platform for maximum stealth effectiveness.",
      author: "Marcus Rodriguez",
      date: "June 6, 2025",
      readTime: "6 min read",
      category: "Strategy",
      image: "/blog/platform-optimization.jpg"
    },
    {
      id: 4,
      title: "The Psychology of Authentic Content: Why Behavioral Motion Matters",
      excerpt: "Understanding how human perception and AI detection systems analyze content movement, and how to exploit these patterns.",
      author: "Dr. Emily Zhang",
      date: "June 4, 2025",
      readTime: "9 min read",
      category: "Research",
      image: "/blog/behavioral-motion.jpg"
    },
    {
      id: 5,
      title: "Enterprise Stealth: Scaling Content Operations Safely",
      excerpt: "Best practices for large-scale content operations using SpectreSpoofer's enterprise features while maintaining operational security.",
      author: "Alex Thompson",
      date: "June 2, 2025",
      readTime: "7 min read",
      category: "Business",
      image: "/blog/enterprise-stealth.jpg"
    },
    {
      id: 6,
      title: "Sensor Fingerprinting: Creating Authentic Digital Signatures",
      excerpt: "The technical breakdown of how SpectreSpoofer generates realistic device metadata and sensor signatures for undetectable content.",
      author: "Tech Team",
      date: "May 30, 2025",
      readTime: "10 min read",
      category: "Technical",
      image: "/blog/sensor-fingerprinting.jpg"
    },
    {
      id: 7,
      title: "Content Creator's Guide to Operational Security",
      excerpt: "Essential OPSEC practices for content creators using advanced spoofing technology to protect their identity and operations.",
      author: "Ghost Protocol",
      date: "May 28, 2025",
      readTime: "5 min read",
      category: "Security",
      image: "/blog/opsec-guide.jpg"
    },
    {
      id: 8,
      title: "The Future of Content Authentication and Counter-Measures",
      excerpt: "Analyzing emerging trends in content verification technology and how SpectreSpoofer continues to evolve its countermeasures.",
      author: "Research Division",
      date: "May 26, 2025",
      readTime: "11 min read",
      category: "Future Tech",
      image: "/blog/future-authentication.jpg"
    }
  ];

  const categories = [
    "All Posts",
    "Technology",
    "Technical",
    "Strategy",
    "Research",
    "Business",
    "Security",
    "Future Tech"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Spacing */}
      <div className="pt-32" />

      {/* Hero Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <span className="text-[#15202b] font-medium text-sm uppercase tracking-wide mb-4 block">
            BLOG
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            The <span className="text-[#15202b]">Stealth</span> Intelligence
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Insights, research, and advanced techniques from the forefront of content spoofing technology.
            Stay ahead with the latest in operational stealth and AI evasion strategies.
          </p>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Featured Articles</h2>
            <p className="text-xl text-gray-600">Deep dives into cutting-edge stealth technology and operational tactics.</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <article key={post.id} className="group cursor-pointer">
                <div className="bg-gray-100 rounded-2xl overflow-hidden mb-6 h-64">
                  <div className="w-full h-full bg-gradient-to-br from-[#15202b] to-[#2d3748] flex items-center justify-center">
                    <span className="text-white text-lg font-medium">{post.category}</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="bg-[#15202b] text-white px-3 py-1 rounded-full">{post.category}</span>
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#15202b] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">By {post.author}</span>
                    <Link
                      href={`/blog/${post.id}`}
                      className="text-[#15202b] hover:text-[#2d3748] font-semibold"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 px-6 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-3 rounded-full transition-colors font-medium ${
                  category === "All Posts"
                    ? "bg-[#15202b] text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Latest Articles</h2>
            <p className="text-xl text-gray-600">Stay updated with the newest developments in stealth technology.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <article key={post.id} className="group cursor-pointer">
                <div className="bg-gray-100 rounded-2xl overflow-hidden mb-6 h-48">
                  <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center">
                    <span className="text-white font-medium">{post.category}</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm text-gray-500">
                    <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs">{post.category}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#15202b] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xs text-gray-500">{post.author} • {post.date}</span>
                    <Link
                      href={`/blog/${post.id}`}
                      className="text-[#15202b] hover:text-[#2d3748] font-semibold text-sm"
                    >
                      Read →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-6 bg-[#15202b]">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Stay Ahead of Detection
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get the latest stealth techniques, research findings, and SpectreSpoofer updates
            delivered directly to your secure inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-lg border-0 focus:ring-2 focus:ring-white/50"
            />
            <button className="bg-white text-[#15202b] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-gray-400 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* Topics & Tags */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Explore Topics
            </h2>
            <p className="text-xl text-gray-600">
              Dive deeper into specific areas of stealth technology and operational security.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#15202b] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">🤖</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">AI Detection</h3>
              <p className="text-gray-600 text-sm mb-4">
                Latest developments in AI detection systems and countermeasures.
              </p>
              <Link href="/blog/category/ai-detection" className="text-[#15202b] font-semibold text-sm">
                View Articles →
              </Link>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#15202b] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">🔒</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">OpSec</h3>
              <p className="text-gray-600 text-sm mb-4">
                Operational security best practices for content creators.
              </p>
              <Link href="/blog/category/opsec" className="text-[#15202b] font-semibold text-sm">
                View Articles →
              </Link>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#15202b] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">⚡</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Techniques</h3>
              <p className="text-gray-600 text-sm mb-4">
                Advanced spoofing and obfuscation techniques and tutorials.
              </p>
              <Link href="/blog/category/techniques" className="text-[#15202b] font-semibold text-sm">
                View Articles →
              </Link>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#15202b] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">📈</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Industry</h3>
              <p className="text-gray-600 text-sm mb-4">
                Market trends and industry analysis for content operations.
              </p>
              <Link href="/blog/category/industry" className="text-[#15202b] font-semibold text-sm">
                View Articles →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
