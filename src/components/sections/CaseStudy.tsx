"use client";

import { motion } from "framer-motion";
import { Quote, ArrowRight, TrendingUp, TrendingDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function CaseStudy() {
  const { t, language } = useLanguage();

  return (
    <section id="case-study" className="py-24 px-4 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#ff214f]/5 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-[#ff214f]/10 text-[#ff214f] text-sm font-medium px-4 py-1 rounded-full mb-4">
            Case Study
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {t.caseStudy.title}
            <span className="text-[#ff214f]">.</span>
          </h2>
          <p className="text-[#ff214f] text-xl font-semibold">
            {t.caseStudy.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Quote and description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[#a1a1a1] text-lg leading-relaxed mb-8">
              {t.caseStudy.description}
            </p>

            {/* Quote */}
            <div className="bg-[#121212] border border-[#2a2a2a] rounded-2xl p-6 relative">
              <Quote className="absolute top-4 left-4 w-8 h-8 text-[#ff214f]/20" />
              <blockquote className="text-white text-lg italic leading-relaxed pl-8 mb-4">
                &ldquo;{t.caseStudy.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3 pl-8">
                <div className="w-10 h-10 bg-[#ff214f]/20 rounded-full flex items-center justify-center">
                  <span className="text-[#ff214f] font-semibold">FO</span>
                </div>
                <span className="text-[#a1a1a1] text-sm">
                  {t.caseStudy.author}
                </span>
              </div>
            </div>

            {/* CTA */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 bg-[#ff214f] hover:bg-[#ff4d6d] text-white px-6 py-3 rounded-xl font-semibold mt-8 transition-colors cursor-pointer"
            >
              {t.caseStudy.cta}
              <ArrowRight size={18} />
            </motion.a>
          </motion.div>

          {/* Right side - Metrics */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-[#121212] border border-[#2a2a2a] rounded-2xl overflow-hidden">
              {/* Table header */}
              <div className="grid grid-cols-4 gap-4 p-4 bg-[#1a1a1a] border-b border-[#2a2a2a] text-sm font-medium">
                <div className="text-[#a1a1a1]">Metryka</div>
                <div className="text-[#a1a1a1] text-center">Przed</div>
                <div className="text-[#a1a1a1] text-center">Po</div>
                <div className="text-[#a1a1a1] text-center">Zmiana</div>
              </div>

              {/* Table rows */}
              {t.caseStudy.metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  className="grid grid-cols-4 gap-4 p-4 border-b border-[#2a2a2a] last:border-b-0 items-center"
                >
                  <div className="text-white text-sm font-medium">
                    {metric.label}
                  </div>
                  <div className="text-[#a1a1a1] text-center text-sm">
                    {metric.before}
                  </div>
                  <div className="text-white text-center text-sm font-semibold">
                    {metric.after}
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    {metric.change.startsWith("+") ? (
                      <TrendingUp className="w-4 h-4 text-green-500" />
                    ) : (
                      <TrendingDown className="w-4 h-4 text-green-500" />
                    )}
                    <span className="text-green-500 text-sm font-semibold">
                      {metric.change}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* ROI highlight */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-6 bg-gradient-to-r from-[#ff214f]/10 to-transparent border border-[#ff214f]/20 rounded-xl p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[#a1a1a1] text-sm mb-1">ROI</div>
                  <div className="text-3xl font-bold text-[#ff214f]">
                    1,861%
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[#a1a1a1] text-sm mb-1">
                    {language === "pl" ? "Miesięczna wartość" : "Monthly value"}
                  </div>
                  <div className="text-2xl font-bold text-white">
                    ~13,000 PLN
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
