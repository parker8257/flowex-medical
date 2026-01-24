"use client";

import { motion } from "framer-motion";
import { Check, Star, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

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

export default function Pricing() {
  const { t } = useLanguage();

  return (
    <section id="pricing" className="py-24 px-4 relative">
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
            {t.pricing.title}
            <span className="text-[#2563EB]">.</span>
          </h2>
          <p className="text-[#a1a1a1] text-lg max-w-2xl mx-auto">
            {t.pricing.subtitle}
          </p>
        </motion.div>

        {/* Pricing cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {t.pricing.plans.map((plan, index) => {
            const isPopular = index === 1;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative bg-[#121212] border rounded-2xl p-8 ${
                  isPopular
                    ? "border-[#2563EB] scale-105 shadow-lg shadow-[#2563EB]/10"
                    : "border-[#2a2a2a]"
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 bg-[#2563EB] text-white text-sm font-medium px-4 py-1 rounded-full">
                      <Star size={14} className="fill-current" />
                      {t.pricing.popular}
                    </span>
                  </div>
                )}

                {/* Plan name and price */}
                <div className="text-center mb-6">
                  <h3 className="text-white font-bold text-2xl mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-[#a1a1a1] text-sm mb-4">{plan.description}</p>

                  {plan.setupPrice && (
                    <div className="mb-2">
                      <span className="text-[#6b7280] text-sm">{t.pricing.setup}: </span>
                      <span className="text-white font-semibold">{plan.setupPrice}</span>
                    </div>
                  )}

                  <div className="flex items-baseline justify-center gap-1">
                    <span className={`text-4xl font-bold ${isPopular ? "text-[#2563EB]" : "text-white"}`}>
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-[#6b7280] text-sm">{plan.period}</span>
                    )}
                  </div>

                  {plan.bonus && (
                    <span className="inline-block mt-2 bg-[#10B981]/10 text-[#10B981] text-xs font-medium px-3 py-1 rounded-full">
                      {plan.bonus}
                    </span>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                      <span className="text-[#a1a1a1] text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contact"
                  className={`w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold transition-all duration-300 cursor-pointer ${
                    isPopular
                      ? "bg-[#2563EB] hover:bg-[#3b82f6] text-white"
                      : "bg-[#1a1a1a] hover:bg-[#222] border border-[#2a2a2a] text-white"
                  }`}
                >
                  {plan.cta}
                  <ArrowRight size={18} />
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
