import Hero from "@/components/HeroSection";
import InfiniteLogos from "@/components/LogoSection";
import WhyUs from "@/components/WhySection";
import Services from "@/components/ServicesSection";
import TestimonialSection from "@/components/TestimonialSection";
import CTA from "@/components/CTASection";
import Home from "@/components/Home";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col bg-brand-black/90">
      <Hero />
      <Home />
      <InfiniteLogos />
      <Services />
      <WhyUs />
      <TestimonialSection />
      <CTA />
    </main>
  );
}
