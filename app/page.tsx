import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero";
import { TrustStrip } from "@/components/sections/trust-strip";
import { Problem } from "@/components/sections/problem";
import { HowItWorks } from "@/components/sections/how-it-works";
import { ForWorkers } from "@/components/sections/for-workers";
import { ForCompanies } from "@/components/sections/for-companies";
import { Features } from "@/components/sections/features";
import { Pricing } from "@/components/sections/pricing";
import { Commission } from "@/components/sections/commission";
import { TestimonialsSection } from "@/components/testimonials-section";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <TrustStrip />
        <Problem />
        <HowItWorks />
        <ForWorkers />
        <ForCompanies />
        <Features />
        <Pricing />
        <Commission />
        <TestimonialsSection />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
