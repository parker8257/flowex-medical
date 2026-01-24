"use client";

import { motion } from "framer-motion";
import {
  Smartphone,
  Bot,
  Calendar,
  Bell,
  Star,
  Users,
  FileText,
  Mail,
  Instagram,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const featureIcons = [
  Smartphone,
  Bot,
  Calendar,
  Bell,
  Star,
  Users,
  FileText,
  Mail,
  Instagram,
];

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
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4 },
  },
};

export default function FeaturesGrid() {
  const { t } = useLanguage();

  return (
    <section id="features" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {t.features.title}
            <span className="text-[#2563EB]">?</span>
          </h2>
          <p className="text-[#a1a1a1] text-lg max-w-2xl mx-auto">
            {t.features.subtitle}
          </p>
        </motion.div>

        {/* Features grid 3x3 */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {t.features.items.map((feature, index) => {
            const IconComponent = featureIcons[index];
            const isOptional = index === 8; // Instagram is optional
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`group bg-[#121212] border ${
                  isOptional ? "border-dashed border-[#2a2a2a]" : "border-[#2a2a2a]"
                } rounded-2xl p-6 hover:border-[#2563EB]/50 transition-all duration-300 relative`}
              >
                {isOptional && (
                  <span className="absolute top-4 right-4 bg-[#1a1a1a] text-[#6b7280] text-xs px-2 py-1 rounded">
                    {t.features.optional}
                  </span>
                )}
                <div className="w-12 h-12 bg-[#2563EB]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#2563EB]/20 transition-colors">
                  <IconComponent className="w-6 h-6 text-[#2563EB]" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-[#a1a1a1] text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
