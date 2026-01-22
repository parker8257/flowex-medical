"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Clock, Send } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/config/site";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 px-4 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#ff214f]/10 via-transparent to-transparent" />

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
            {t.contact.title}
            <span className="text-[#ff214f]">.</span>
          </h2>
          <p className="text-[#a1a1a1] text-lg max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#a1a1a1] mb-2">
                    {t.contact.form.name}
                  </label>
                  <input
                    type="text"
                    className="w-full bg-[#121212] border border-[#2a2a2a] rounded-xl px-4 py-3 text-white placeholder-[#6b7280] focus:outline-none focus:border-[#ff214f] transition-colors"
                    placeholder="Jan Kowalski"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#a1a1a1] mb-2">
                    {t.contact.form.email}
                  </label>
                  <input
                    type="email"
                    className="w-full bg-[#121212] border border-[#2a2a2a] rounded-xl px-4 py-3 text-white placeholder-[#6b7280] focus:outline-none focus:border-[#ff214f] transition-colors"
                    placeholder="jan@firma.pl"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#a1a1a1] mb-2">
                    {t.contact.form.phone}
                  </label>
                  <input
                    type="tel"
                    className="w-full bg-[#121212] border border-[#2a2a2a] rounded-xl px-4 py-3 text-white placeholder-[#6b7280] focus:outline-none focus:border-[#ff214f] transition-colors"
                    placeholder="+48 123 456 789"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#a1a1a1] mb-2">
                    {t.contact.form.company}
                  </label>
                  <input
                    type="text"
                    className="w-full bg-[#121212] border border-[#2a2a2a] rounded-xl px-4 py-3 text-white placeholder-[#6b7280] focus:outline-none focus:border-[#ff214f] transition-colors"
                    placeholder="Nazwa firmy"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#a1a1a1] mb-2">
                  {t.contact.form.message}
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-[#121212] border border-[#2a2a2a] rounded-xl px-4 py-3 text-white placeholder-[#6b7280] focus:outline-none focus:border-[#ff214f] transition-colors resize-none"
                  placeholder="Opisz, jakie procesy chciałbyś zautomatyzować..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#ff214f] hover:bg-[#ff4d6d] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send size={20} />
                {t.contact.form.submit}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:pl-12"
          >
            <div className="space-y-8">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#ff214f]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-[#ff214f]" />
                </div>
                <div>
                  <div className="text-[#a1a1a1] text-sm mb-1">
                    {t.contact.info.email}
                  </div>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-white text-lg font-medium hover:text-[#ff214f] transition-colors"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#ff214f]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#ff214f]" />
                </div>
                <div>
                  <div className="text-[#a1a1a1] text-sm mb-1">
                    {t.contact.info.phone}
                  </div>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="text-white text-lg font-medium hover:text-[#ff214f] transition-colors"
                  >
                    {siteConfig.phone}
                  </a>
                </div>
              </div>

              {/* Response time */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#ff214f]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-[#ff214f]" />
                </div>
                <div>
                  <div className="text-[#a1a1a1] text-sm mb-1">
                    {t.contact.info.response}
                  </div>
                  <div className="text-white text-lg font-medium">
                    24h
                  </div>
                </div>
              </div>
            </div>

            {/* Trust badges */}
            <div className="mt-12 pt-8 border-t border-[#2a2a2a]">
              <div className="flex flex-wrap gap-4">
                {["RODO Compliant", "SSL Secured", "24/7 Support"].map(
                  (badge, index) => (
                    <span
                      key={index}
                      className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-4 py-2 text-sm text-[#a1a1a1]"
                    >
                      {badge}
                    </span>
                  )
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
