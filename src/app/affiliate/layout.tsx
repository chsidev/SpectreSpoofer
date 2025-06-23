import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affiliate Program - Join Our Partner Network",
  description: "Join our affiliate program and earn competitive commissions by promoting our products. Get access to marketing materials, tracking tools, and dedicated support.",
  keywords: "affiliate program, partner network, earn money, commission, referral program, marketing",
};

export default function AffiliateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
