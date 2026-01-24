"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Problem from "@/components/sections/Problem";
import FeaturesGrid from "@/components/sections/FeaturesGrid";
import CaseStudy from "@/components/sections/CaseStudy";
import ROICalculator from "@/components/sections/ROICalculator";
import CTAFinal from "@/components/sections/CTAFinal";
import Contact from "@/components/sections/Contact";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Stethoscope, Calendar, Bell, Star, FileText, Mail, ArrowRight } from "lucide-react";

const medicalFeatures = [
  { icon: Calendar, title: "Rezerwacje 24/7", desc: "WhatsApp, Telegram, Messenger" },
  { icon: Bell, title: "Przypomnienia", desc: "SMS, Email, WhatsApp" },
  { icon: Star, title: "Zbieranie opinii", desc: "Google Reviews +300%" },
  { icon: Mail, title: "Zarządzanie emailami", desc: "Sortowanie, priorytetyzacja" },
  { icon: FileText, title: "Faktury", desc: "OCR, kategoryzacja, archiwum" },
];

const clinicTypes = {
  pl: [
    "Gabinety fizjoterapii",
    "Salony fryzjerskie",
    "Gabinety kosmetyczne",
    "Kliniki stomatologiczne",
    "Gabinety medycyny estetycznej",
    "Salony SPA & Wellness",
  ],
  en: [
    "Physiotherapy clinics",
    "Hair salons",
    "Beauty salons",
    "Dental clinics",
    "Aesthetic medicine",
    "SPA & Wellness",
  ],
};

export default function MedicalPage() {
  const { t, language } = useLanguage();

  const heroContent = {
    pl: {
      badge: "Specjalizacja",
      title: "Automatyzacja dla Gabinetów Medycznych i Beauty",
      subtitle: "Rezerwacje 24/7, inteligentne przypomnienia, zbieranie opinii. Więcej czasu na pacjentów, mniej na administrację.",
      cta: "Umów prezentację",
    },
    en: {
      badge: "Specialization",
      title: "Automation for Medical & Beauty Practices",
      subtitle: "24/7 bookings, smart reminders, review collection. More time for patients, less for admin.",
      cta: "Book a demo",
    },
  };

  const content = heroContent[language];

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />

      {/* Hero for Medical */}
      <section className="min-h-[80vh] flex items-center justify-center relative overflow-hidden pt-24 pb-16 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-[#10B981]/10 via-transparent to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#10B981]/20 rounded-full blur-[128px]" />

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-[#10B981]/10 border border-[#10B981]/30 rounded-full px-4 py-2 mb-8"
            >
              <Stethoscope className="w-5 h-5 text-[#10B981]" />
              <span className="text-[#10B981] text-sm font-medium">{content.badge}: Medical & Beauty</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
            >
              {content.title}
              <span className="text-[#10B981]">.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-[#a1a1a1] mb-10 max-w-2xl mx-auto"
            >
              {content.subtitle}
            </motion.p>

            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-flex items-center gap-2 bg-[#10B981] hover:bg-[#059669] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
            >
              {content.cta}
              <ArrowRight size={20} />
            </motion.a>

            {/* Feature pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-4"
            >
              {medicalFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-4 text-center"
                >
                  <feature.icon className="w-8 h-8 text-[#10B981] mx-auto mb-2" />
                  <div className="text-white font-medium text-sm">{feature.title}</div>
                  <div className="text-[#a1a1a1] text-xs">{feature.desc}</div>
                </div>
              ))}
            </motion.div>

            {/* Clinic types */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-12"
            >
              <p className="text-[#a1a1a1] text-sm mb-4">
                {language === "pl" ? "Dla kogo?" : "Who is it for?"}
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {clinicTypes[language].map((type, index) => (
                  <span
                    key={index}
                    className="bg-[#10B981]/10 border border-[#10B981]/30 text-[#10B981] px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Problem />
      <FeaturesGrid />
      <CaseStudy />
      <ROICalculator />
      <CTAFinal />
      <Contact />
      <Footer />
    </main>
  );
}
