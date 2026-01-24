"use client";

import { motion } from "framer-motion";
import { Bot, Shield, Cloud, Cog } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const pillarIcons = [Bot, Shield, Cloud, Cog];

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Technology() {
  const { t } = useLanguage();

  const partners = [
    { name: "OpenAI", logo: "OpenAI" },
    { name: "Anthropic", logo: "Anthropic" },
    { name: "Google", logo: "Google" },
    { name: "n8n", logo: "n8n" },
    { name: "Make", logo: "Make" },
    { name: "Zapier", logo: "Zapier" },
  ];

  return (
    <section id="technology" className="py-24 px-4 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#2563EB]/5 to-transparent" />

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
            {t.technology.title}
            <span className="text-[#2563EB]">.</span>
          </h2>
          <p className="text-[#a1a1a1] text-lg max-w-2xl mx-auto">
            {t.technology.subtitle}
          </p>
        </motion.div>

        {/* 4 Pillars */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {t.technology.pillars.map((pillar, index) => {
            const IconComponent = pillarIcons[index];
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-[#121212] border border-[#2a2a2a] rounded-2xl p-6 text-center hover:border-[#2563EB]/30 transition-colors group"
              >
                <div className="w-16 h-16 bg-[#2563EB]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#2563EB]/20 transition-colors">
                  <IconComponent className="w-8 h-8 text-[#2563EB]" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">
                  {pillar.title}
                </h3>
                <p className="text-[#a1a1a1] text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Partner logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-[#6b7280] text-sm mb-6">{t.technology.partners}</p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl px-6 py-3 hover:border-[#2563EB]/30 transition-colors"
              >
                <span className="text-[#a1a1a1] font-medium">{partner.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
