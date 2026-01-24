"use client";

import { motion } from "framer-motion";
import { Stethoscope, Code2, Briefcase, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";

const industryIcons = [Stethoscope, Code2, Briefcase];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Industries() {
  const { t } = useLanguage();

  return (
    <section id="industries" className="py-24 px-4 relative bg-[#0f0f0f]">
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
            {t.industries.title}
            <span className="text-[#2563EB]">.</span>
          </h2>
          <p className="text-[#a1a1a1] text-lg max-w-2xl mx-auto">
            {t.industries.subtitle}
          </p>
        </motion.div>

        {/* Industries grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {t.industries.items.map((industry, index) => {
            const IconComponent = industryIcons[index] || Briefcase;
            const isMainIndustry = index === 0; // Medical & Beauty is highlighted

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`group relative bg-gradient-to-b from-[#1a1a1a] to-[#121212] border rounded-2xl p-8 transition-all duration-300 ${
                  isMainIndustry
                    ? "border-[#10B981]/50 hover:border-[#10B981]"
                    : "border-[#2a2a2a] hover:border-[#2563EB]/50"
                }`}
              >
                {isMainIndustry && (
                  <div className="absolute -top-3 left-6 bg-[#10B981] text-white text-xs font-medium px-3 py-1 rounded-full">
                    Specjalizacja
                  </div>
                )}

                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors ${
                  isMainIndustry
                    ? "bg-[#10B981]/10 group-hover:bg-[#10B981]/20"
                    : "bg-[#2563EB]/10 group-hover:bg-[#2563EB]/20"
                }`}>
                  <IconComponent className={`w-7 h-7 ${
                    isMainIndustry ? "text-[#10B981]" : "text-[#2563EB]"
                  }`} />
                </div>

                <h3 className="text-white font-bold text-2xl mb-3">
                  {industry.title}
                </h3>
                <p className="text-[#a1a1a1] leading-relaxed mb-6">
                  {industry.description}
                </p>

                <Link
                  href={industry.link}
                  className={`inline-flex items-center gap-2 font-semibold transition-colors ${
                    isMainIndustry
                      ? "text-[#10B981] hover:text-[#34d399]"
                      : "text-[#2563EB] hover:text-[#3b82f6]"
                  }`}
                >
                  {industry.cta}
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
