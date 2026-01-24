"use client";

import { motion } from "framer-motion";
import { Megaphone, TrendingUp, HeadphonesIcon, Users, Calculator, FileStack } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const solutionIcons = [Megaphone, TrendingUp, HeadphonesIcon, Users, Calculator, FileStack];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export default function Solution() {
  const { t } = useLanguage();

  return (
    <section id="solution" className="py-24 px-4 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2563EB]/5 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-[#10B981]/10 text-[#10B981] text-sm font-medium px-4 py-1 rounded-full mb-4">
            {t.solution.badge}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {t.solution.title}
            <span className="text-[#2563EB]">.</span>
          </h2>
          <p className="text-[#a1a1a1] text-lg max-w-2xl mx-auto">
            {t.solution.subtitle}
          </p>
        </motion.div>

        {/* Solution modules - 6 grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {t.solution.modules.map((module, index) => {
            const IconComponent = solutionIcons[index] || FileStack;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group bg-gradient-to-b from-[#1a1a1a] to-[#121212] border border-[#2a2a2a] rounded-2xl p-6 hover:border-[#2563EB]/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#2563EB]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#2563EB]/20 transition-colors">
                  <IconComponent className="w-6 h-6 text-[#2563EB]" />
                </div>
                <h3 className="text-white font-semibold text-xl mb-2">
                  {module.title}
                </h3>
                <p className="text-[#a1a1a1] leading-relaxed mb-4 text-sm">
                  {module.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {module.features.map((feature, fIndex) => (
                    <span
                      key={fIndex}
                      className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-2 py-1 text-xs text-[#a1a1a1]"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
