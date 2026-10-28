import type { Metadata } from "next";
import { Montserrat, DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Clarity from "@/components/Clarity";
import { CONTACT } from "@/lib/data";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const siteUrl = "https://www.tiashaaivista.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Tiasha AI Vista — AI automation for Indian SMEs, Pune",
    template: "%s | Tiasha AI Vista",
  },
  description:
    "We build WhatsApp assistants, voice agents and back-office automations for small and mid-sized businesses. Every enquiry answered, every invoice entered, without adding headcount. Based in Pune.",
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
    title: "Tiasha AI Vista — AI automation for Indian SMEs",
    description:
      "WhatsApp assistants, voice agents and back-office automations for SMEs. Book a free 30-minute call.",
    images: [{ url: "/logo.png", width: 1717, height: 620, alt: "Tiasha AI Vista" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tiasha AI Vista — AI automation for Indian SMEs",
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
  slogan: "Automate • Innovate • Grow",
  sameAs: [CONTACT.linkedin, CONTACT.facebook],
  description:
    "AI automation partner building chatbots, AI agents, voice assistants, and business workflow automations for SMEs and enterprises.",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-95735-18073",
    contactType: "sales",
    availableLanguage: ["English", "Hindi"],
  },
};

const themeInit = `(function(){try{var t=localStorage.getItem("theme");if(t==="dark")document.documentElement.classList.add("dark");}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="min-h-screen antialiased">
        {children}
        <Analytics />
        <Clarity />
      </body>
    </html>
  );
}
