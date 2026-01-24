"use client";

import { motion } from "framer-motion";
import { Phone, XCircle, Clock, Mail } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const problemIcons = [Phone, XCircle, Clock, Mail];

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

export default function Problem() {
  const { t } = useLanguage();

  return (
    <section id="problem" className="py-24 px-4 relative">
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
            {t.problem.title}
            <span className="text-[#2563EB]">?</span>
          </h2>
          <p className="text-[#a1a1a1] text-lg max-w-2xl mx-auto">
            {t.problem.subtitle}
          </p>
        </motion.div>

        {/* Problem cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {t.problem.items.map((item, index) => {
            const IconComponent = problemIcons[index];
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group bg-[#121212] border border-[#2a2a2a] rounded-2xl p-8 hover:border-red-500/30 transition-all duration-300"
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-red-500/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-red-500/20 transition-colors">
                    <IconComponent className="w-7 h-7 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-xl mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[#a1a1a1] leading-relaxed">
                      {item.description}
                    </p>
                    <div className="mt-4 flex items-center gap-2">
                      <span className="text-red-500 font-bold text-lg">
                        {item.stat}
                      </span>
                      <span className="text-[#6b7280] text-sm">
                        {item.statLabel}
                      </span>
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
