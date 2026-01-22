"use client";

import { motion } from "framer-motion";
import {
  Megaphone,
  TrendingUp,
  Headphones,
  Users,
  Calculator,
  FileText,
  Heart,
  ShoppingCart,
  Code,
  Briefcase,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const iconMap: Record<string, React.ElementType> = {
  megaphone: Megaphone,
  trendingUp: TrendingUp,
  headphones: Headphones,
  users: Users,
  calculator: Calculator,
  fileText: FileText,
  heart: Heart,
  shoppingCart: ShoppingCart,
  code: Code,
  briefcase: Briefcase,
};

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-24 px-4 relative">
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
            {t.services.title}
            <span className="text-[#ff214f]">.</span>
          </h2>
          <p className="text-[#a1a1a1] text-lg max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </motion.div>

        {/* Categories */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl font-semibold text-white mb-8 flex items-center gap-3"
          >
            <span className="w-8 h-[2px] bg-[#ff214f]" />
            {t.services.categories.title}
          </motion.h3>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {t.services.categories.items.map((item, index) => {
              const IconComponent = iconMap[item.icon];
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group bg-[#121212] border border-[#2a2a2a] rounded-2xl p-6 hover:border-[#ff214f]/50 transition-all duration-300 cursor-pointer"
                >
                  <div className="w-12 h-12 bg-[#ff214f]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#ff214f]/20 transition-colors">
                    {IconComponent && (
                      <IconComponent className="w-6 h-6 text-[#ff214f]" />
                    )}
                  </div>
                  <h4 className="text-white font-semibold text-lg mb-2">
                    {item.title}
                  </h4>
                  <p className="text-[#a1a1a1] text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Industries */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl font-semibold text-white mb-8 flex items-center gap-3"
          >
            <span className="w-8 h-[2px] bg-[#ff214f]" />
            {t.services.industries.title}
          </motion.h3>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {t.services.industries.items.map((item, index) => {
              const IconComponent = iconMap[item.icon];
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group bg-gradient-to-b from-[#1a1a1a] to-[#121212] border border-[#2a2a2a] rounded-2xl p-6 hover:border-[#ff214f]/50 transition-all duration-300 cursor-pointer"
                >
                  <div className="w-10 h-10 bg-[#ff214f]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#ff214f]/20 transition-colors">
                    {IconComponent && (
                      <IconComponent className="w-5 h-5 text-[#ff214f]" />
                    )}
                  </div>
                  <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                  <p className="text-[#a1a1a1] text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
