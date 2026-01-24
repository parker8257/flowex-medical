"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const tools = [
  { name: "n8n", color: "#EA4B71" },
  { name: "Make", color: "#6D4AFF" },
  { name: "Zapier", color: "#FF4F00" },
  { name: "WhatsApp", color: "#25D366" },
  { name: "Google Calendar", color: "#4285F4" },
  { name: "OpenAI", color: "#00A67E" },
  { name: "Slack", color: "#4A154B" },
  { name: "Notion", color: "#FFFFFF" },
];

export default function TechLogos() {
  const { language } = useLanguage();

  return (
    <section className="py-12 px-4 border-y border-[#1a1a1a] bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-[#6b7280] text-sm mb-8"
        >
          {language === "pl" ? "Integrujemy z narzędziami, których używasz" : "We integrate with the tools you use"}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-12"
        >
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex items-center gap-2 text-[#6b7280] hover:text-white transition-colors cursor-default"
            >
              <div
                className="w-2 h-2 rounded-full opacity-60 group-hover:opacity-100 transition-opacity"
                style={{ backgroundColor: tool.color }}
              />
              <span className="text-sm font-medium">{tool.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
