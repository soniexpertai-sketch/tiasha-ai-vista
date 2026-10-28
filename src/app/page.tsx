import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problems from "@/components/Problems";
import Solutions from "@/components/Solutions";
import SolutionWorkflow from "@/components/SolutionWorkflow";
import CaseStudies from "@/components/CaseStudies";
import Industries from "@/components/Industries";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
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
        <Problems />
        <Solutions />
        <SolutionWorkflow />
        <CaseStudies />
        <Industries />
        <Process />
        <Pricing />
        <FAQ />
        <CTABanner />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
