"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Shield, Clock, CheckCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function CTAFinal() {
  const { t } = useLanguage();

  const trustBadges = [
    { icon: CheckCircle, text: t.ctaFinal.badges.free },
    { icon: Shield, text: t.ctaFinal.badges.noObligation },
    { icon: Clock, text: t.ctaFinal.badges.rodo },
  ];

  return (
    <section id="cta-final" className="py-24 px-4 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2563EB]/10 via-transparent to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2563EB]/20 rounded-full blur-[150px]" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Heading */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {t.ctaFinal.title}
            <span className="text-[#2563EB]">?</span>
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-[#a1a1a1] mb-10 max-w-2xl mx-auto">
            {t.ctaFinal.subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group bg-[#2563EB] hover:bg-[#3b82f6] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-lg shadow-[#2563EB]/20"
            >
              {t.ctaFinal.primaryCta}
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </motion.a>
            <motion.a
              href="#case-study"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group bg-[#1a1a1a] hover:bg-[#222] border border-[#2a2a2a] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              <Play size={20} className="text-[#2563EB]" />
              {t.ctaFinal.secondaryCta}
            </motion.a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {trustBadges.map((badge, index) => {
              const IconComponent = badge.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-2 text-[#a1a1a1]"
                >
                  <IconComponent size={18} className="text-[#10B981]" />
                  <span className="text-sm">{badge.text}</span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
