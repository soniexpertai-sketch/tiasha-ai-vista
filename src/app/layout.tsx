import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://www.tiashaaivista.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Tiasha AI Vista — AI Automation Solutions for Business Growth",
    template: "%s | Tiasha AI Vista",
  },
  description:
    "Tiasha AI Vista builds AI-powered workflows, chatbots, AI agents, voice assistants, and business automations that save time, reduce costs, and increase revenue. Your Vista to AI-Driven Growth.",
  keywords: [
    "AI automation",
    "AI agents",
    "business automation",
    "AI chatbots",
    "WhatsApp automation",
    "workflow automation",
    "AI consulting",
    "voice AI",
    "document AI",
    "CRM automation",
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Tiasha AI Vista",
    title: "Tiasha AI Vista — AI Automation Solutions for Business Growth",
    description:
      "Practical AI solutions that save time, reduce costs, and accelerate your business growth. Book a free AI consultation.",
    images: [{ url: "/logo.png", width: 1717, height: 620, alt: "Tiasha AI Vista" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tiasha AI Vista — AI Automation Solutions",
    description:
      "AI chatbots, WhatsApp automation, voice agents, and custom AI workflows for growing businesses.",
    images: ["/logo.png"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Tiasha AI Vista",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  slogan: "Your Vista to AI-Driven Growth",
  description:
    "AI automation partner building chatbots, AI agents, voice assistants, and business workflow automations for SMEs and enterprises.",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-95735-18073",
    contactType: "sales",
    availableLanguage: ["English", "Hindi"],
  },
};

const themeInit = `(function(){try{var t=localStorage.getItem("theme");var d=t?t==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;if(d)document.documentElement.classList.add("dark");}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
