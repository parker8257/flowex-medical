"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import TechLogos from "@/components/sections/TechLogos";
import Solution from "@/components/sections/Solution";
import Industries from "@/components/sections/Industries";
import HowWeWork from "@/components/sections/HowWeWork";
import Technology from "@/components/sections/Technology";
import Benefits from "@/components/sections/Benefits";
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
      <TechLogos />
      <Solution />
      <Industries />
      <HowWeWork />
      <Technology />
      <Benefits />
      <Testimonials />
      <FAQ />
      <CTAFinal />
      <Contact />
      <Footer />
    </main>
  );
}
