"use client";

import { motion } from "framer-motion";
import { MessageSquare, Bell, Star, FileText } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const solutionIcons = [MessageSquare, Bell, Star, FileText];

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

        {/* Solution modules */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {t.solution.modules.map((module, index) => {
            const IconComponent = solutionIcons[index];
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group bg-gradient-to-b from-[#1a1a1a] to-[#121212] border border-[#2a2a2a] rounded-2xl p-8 hover:border-[#10B981]/50 transition-all duration-300"
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-[#10B981]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#10B981]/20 transition-colors">
                    <IconComponent className="w-7 h-7 text-[#10B981]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold text-xl mb-2">
                      {module.title}
                    </h3>
                    <p className="text-[#a1a1a1] leading-relaxed mb-4">
                      {module.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {module.features.map((feature, fIndex) => (
                        <span
                          key={fIndex}
                          className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-3 py-1 text-xs text-[#a1a1a1]"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
