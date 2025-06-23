import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import FeatureSections from "@/components/FeatureSections";
import ToolsSection from "@/components/ToolsSection";
import CTASection from "@/components/CTASection";
import Metrics from "@/components/Metrics";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <FeatureSections />
        <ToolsSection />
        <CTASection />
        <Metrics />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
