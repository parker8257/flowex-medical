"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function Benefits() {
  const { t } = useLanguage();

  return (
    <section id="benefits" className="py-24 px-4 relative">
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
            {t.benefits.title}
            <span className="text-[#ff214f]">.</span>
          </h2>
          <p className="text-[#a1a1a1] text-lg max-w-2xl mx-auto">
            {t.benefits.subtitle}
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {t.benefits.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-b from-[#1a1a1a] to-[#121212] border border-[#2a2a2a] rounded-2xl p-8 text-center hover:border-[#ff214f]/30 transition-colors group"
            >
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                className="text-4xl md:text-5xl font-bold text-[#ff214f] mb-2"
              >
                {item.value}
              </motion.div>
              <div className="text-white font-semibold mb-1">{item.label}</div>
              <div className="text-[#a1a1a1] text-sm">{item.description}</div>
            </motion.div>
          ))}
        </div>

        {/* Tech stack badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-[#6b7280] text-sm mb-4">Powered by</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {["n8n", "Make", "Zapier", "OpenAI", "Claude AI", "Google Cloud"].map(
              (tech, index) => (
                <span
                  key={index}
                  className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-4 py-2 text-sm text-[#a1a1a1]"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
