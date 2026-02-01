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
    { name: "OpenAI", color: "#00A67E" },
    { name: "Anthropic", color: "#D4A574" },
    { name: "Google", color: "#4285F4" },
    { name: "n8n", color: "#EA4B71" },
    { name: "WhatsApp", color: "#25D366" },
    { name: "Telegram", color: "#0088CC" },
    { name: "Messenger", color: "#0084FF" },
    { name: "Airtable", color: "#18BFFF" },
    { name: "Notion", color: "#FFFFFF" },
    { name: "Microsoft", color: "#00A4EF" },
  ];

  return (
    <section id="technology" className="py-24 px-4 relative bg-[#0f0f0f]">
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

        {/* Partner logos - Marquee Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-[#6b7280] text-sm mb-6">{t.technology.partners}</p>
          <div className="relative overflow-hidden">
            {/* Gradient overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0f0f0f] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0f0f0f] to-transparent z-10" />

            {/* Scrolling container */}
            <div className="flex animate-marquee">
              {/* First set */}
              {partners.map((partner, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 mx-4 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl px-6 py-3 hover:border-[#2563EB]/30 transition-colors group"
                >
                  <div className="flex items-center gap-2">
                    <div
                      className="w-2 h-2 rounded-full opacity-60 group-hover:opacity-100 transition-opacity"
                      style={{ backgroundColor: partner.color }}
                    />
                    <span className="text-[#a1a1a1] font-medium group-hover:text-white transition-colors">{partner.name}</span>
                  </div>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {partners.map((partner, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 mx-4 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl px-6 py-3 hover:border-[#2563EB]/30 transition-colors group"
                >
                  <div className="flex items-center gap-2">
                    <div
                      className="w-2 h-2 rounded-full opacity-60 group-hover:opacity-100 transition-opacity"
                      style={{ backgroundColor: partner.color }}
                    />
                    <span className="text-[#a1a1a1] font-medium group-hover:text-white transition-colors">{partner.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
