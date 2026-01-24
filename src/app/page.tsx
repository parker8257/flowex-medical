"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import FeaturesGrid from "@/components/sections/FeaturesGrid";
import HowWeWork from "@/components/sections/HowWeWork";
import Technology from "@/components/sections/Technology";
import Benefits from "@/components/sections/Benefits";
import CaseStudy from "@/components/sections/CaseStudy";
import Pricing from "@/components/sections/Pricing";
import ROICalculator from "@/components/sections/ROICalculator";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CTAFinal from "@/components/sections/CTAFinal";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";
import SchemaOrg from "@/components/SchemaOrg";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <SchemaOrg />
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <FeaturesGrid />
      <HowWeWork />
      <Technology />
      <Benefits />
      <CaseStudy />
      <Pricing />
      <ROICalculator />
      <Testimonials />
      <FAQ />
      <CTAFinal />
      <Contact />
      <Footer />
    </main>
  );
}
