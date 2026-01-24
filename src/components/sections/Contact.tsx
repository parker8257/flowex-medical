"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Clock, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/config/site";

// Replace with your actual Formspree form ID
// Get your form ID at: https://formspree.io/
const FORMSPREE_FORM_ID = "YOUR_FORM_ID";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const { t, language } = useLanguage();
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setFormStatus("success");
        form.reset();
      } else {
        const data = await response.json();
        setErrorMessage(data.error || (language === "pl" ? "Wystąpił błąd. Spróbuj ponownie." : "An error occurred. Please try again."));
        setFormStatus("error");
      }
    } catch {
      setErrorMessage(language === "pl" ? "Błąd połączenia. Sprawdź internet." : "Connection error. Check your internet.");
      setFormStatus("error");
    }
  };

  const successMessage = language === "pl"
    ? "Dziękujemy! Twoja wiadomość została wysłana. Odpowiemy w ciągu 24h."
    : "Thank you! Your message has been sent. We'll respond within 24h.";

  return (
    <section id="contact" className="py-24 px-4 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#2563EB]/10 via-transparent to-transparent" />

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
            <span className="text-[#2563EB]">.</span>
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
            {formStatus === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[#10B981]/10 border border-[#10B981]/30 rounded-2xl p-8 text-center"
              >
                <CheckCircle className="w-16 h-16 text-[#10B981] mx-auto mb-4" />
                <h3 className="text-white text-xl font-semibold mb-2">
                  {language === "pl" ? "Wiadomość wysłana!" : "Message sent!"}
                </h3>
                <p className="text-[#a1a1a1]">{successMessage}</p>
                <button
                  onClick={() => setFormStatus("idle")}
                  className="mt-6 text-[#2563EB] hover:text-[#3b82f6] font-medium transition-colors"
                >
                  {language === "pl" ? "Wyślij kolejną wiadomość" : "Send another message"}
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#a1a1a1] mb-2">
                      {t.contact.form.name} *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full bg-[#121212] border border-[#2a2a2a] rounded-xl px-4 py-3 text-white placeholder-[#6b7280] focus:outline-none focus:border-[#2563EB] transition-colors"
                      placeholder="Jan Kowalski"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#a1a1a1] mb-2">
                      {t.contact.form.email} *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full bg-[#121212] border border-[#2a2a2a] rounded-xl px-4 py-3 text-white placeholder-[#6b7280] focus:outline-none focus:border-[#2563EB] transition-colors"
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
                      name="phone"
                      className="w-full bg-[#121212] border border-[#2a2a2a] rounded-xl px-4 py-3 text-white placeholder-[#6b7280] focus:outline-none focus:border-[#2563EB] transition-colors"
                      placeholder="+48 123 456 789"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#a1a1a1] mb-2">
                      {t.contact.form.company}
                    </label>
                    <input
                      type="text"
                      name="company"
                      className="w-full bg-[#121212] border border-[#2a2a2a] rounded-xl px-4 py-3 text-white placeholder-[#6b7280] focus:outline-none focus:border-[#2563EB] transition-colors"
                      placeholder="Nazwa gabinetu"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#a1a1a1] mb-2">
                    {t.contact.form.message} *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    className="w-full bg-[#121212] border border-[#2a2a2a] rounded-xl px-4 py-3 text-white placeholder-[#6b7280] focus:outline-none focus:border-[#2563EB] transition-colors resize-none"
                    placeholder={language === "pl" ? "Opisz, jakie procesy chciałbyś zautomatyzować..." : "Describe what processes you'd like to automate..."}
                  />
                </div>

                {/* Hidden honeypot field for spam protection */}
                <input type="text" name="_gotcha" style={{ display: "none" }} />

                {/* Error message */}
                {formStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3"
                  >
                    <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span className="text-red-400 text-sm">{errorMessage}</span>
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={formStatus === "loading"}
                  whileHover={{ scale: formStatus === "loading" ? 1 : 1.02 }}
                  whileTap={{ scale: formStatus === "loading" ? 1 : 0.98 }}
                  className={`w-full px-8 py-4 rounded-xl font-semibold text-lg transition-colors flex items-center justify-center gap-2 cursor-pointer ${
                    formStatus === "loading"
                      ? "bg-[#2563EB]/50 cursor-not-allowed"
                      : "bg-[#2563EB] hover:bg-[#3b82f6]"
                  } text-white`}
                >
                  {formStatus === "loading" ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      {language === "pl" ? "Wysyłanie..." : "Sending..."}
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      {t.contact.form.submit}
                    </>
                  )}
                </motion.button>
              </form>
            )}
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
                <div className="w-12 h-12 bg-[#2563EB]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-[#2563EB]" />
                </div>
                <div>
                  <div className="text-[#a1a1a1] text-sm mb-1">
                    {t.contact.info.email}
                  </div>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-white text-lg font-medium hover:text-[#2563EB] transition-colors"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#2563EB]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#2563EB]" />
                </div>
                <div>
                  <div className="text-[#a1a1a1] text-sm mb-1">
                    {t.contact.info.phone}
                  </div>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="text-white text-lg font-medium hover:text-[#2563EB] transition-colors"
                  >
                    {siteConfig.phone}
                  </a>
                </div>
              </div>

              {/* Response time */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#2563EB]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-[#2563EB]" />
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
