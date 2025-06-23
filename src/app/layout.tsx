import type { Metadata } from "next";
import { Be_Vietnam_Pro, Poppins } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-be-vietnam-pro",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Spoofzy - Repurpose your digital content",
  description: "Repurpose and transform your existing content. Spoofzy helps marketers and VAs transform content with AI — built for Reddit, Telegram, and scale.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${beVietnamPro.variable} ${poppins.variable}`}>
      <body suppressHydrationWarning className="antialiased font-be-vietnam-pro">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
