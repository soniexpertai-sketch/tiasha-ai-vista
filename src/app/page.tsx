import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Problems from "@/components/Problems";
import SolutionWorkflow from "@/components/SolutionWorkflow";
import Solutions from "@/components/Solutions";
import Industries from "@/components/Industries";
import Process from "@/components/Process";
import DemoShowcase from "@/components/DemoShowcase";
import Metrics from "@/components/Metrics";
import TechStack from "@/components/TechStack";
import Testimonials from "@/components/Testimonials";
import CaseStudies from "@/components/CaseStudies";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import BlogPreview from "@/components/BlogPreview";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { FAQS } from "@/lib/data";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Problems />
        <SolutionWorkflow />
        <Solutions />
        <Industries />
        <Process />
        <DemoShowcase />
        <Metrics />
        <TechStack />
        <Testimonials />
        <CaseStudies />
        <Pricing />
        <FAQ />
        <BlogPreview />
        <CTABanner />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
