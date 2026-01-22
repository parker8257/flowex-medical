"use client";

import { motion } from "framer-motion";
import { MessageSquare, Cog, Rocket } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const stepIcons = [MessageSquare, Cog, Rocket];

export default function HowWeWork() {
  const { t } = useLanguage();

  return (
    <section id="how-we-work" className="py-24 px-4 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#ff214f]/5 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {t.howWeWork.title}
            <span className="text-[#ff214f]">.</span>
          </h2>
          <p className="text-[#a1a1a1] text-lg max-w-2xl mx-auto">
            {t.howWeWork.subtitle}
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-24 left-1/6 right-1/6 h-[2px] bg-gradient-to-r from-[#ff214f]/0 via-[#ff214f]/50 to-[#ff214f]/0" />

          {t.howWeWork.steps.map((step, index) => {
            const IconComponent = stepIcons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative"
              >
                <div className="bg-[#121212] border border-[#2a2a2a] rounded-2xl p-8 h-full hover:border-[#ff214f]/30 transition-colors">
                  {/* Step number */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-5xl font-bold text-[#1a1a1a] select-none">
                      {step.number}
                    </span>
                    <div className="w-14 h-14 bg-[#ff214f]/10 rounded-xl flex items-center justify-center">
                      <IconComponent className="w-7 h-7 text-[#ff214f]" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[#a1a1a1] text-sm leading-relaxed mb-4">
                    {step.description}
                  </p>

                  {/* Duration badge */}
                  <span className="inline-flex items-center gap-2 bg-[#1a1a1a] border border-[#2a2a2a] rounded-full px-3 py-1 text-xs text-[#a1a1a1]">
                    <span className="w-1.5 h-1.5 bg-[#ff214f] rounded-full" />
                    {step.duration}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
