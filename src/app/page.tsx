
"use client";

import HeroSection from "@/components/core-ai/hero-section";
import TestimonialsSection from "@/components/core-ai/testimonials-section";
import ServicesOverview from "@/components/core-ai/services-overview";
import WhyUsSection from "@/components/core-ai/why-us-section";
import FinalCTA from "@/components/core-ai/final-cta";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <WhyUsSection />
      <FinalCTA />
      <TestimonialsSection />
    </>
  );
}
