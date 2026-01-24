"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X, Check } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const COOKIE_CONSENT_KEY = "flowex_cookie_consent";

type ConsentState = "undecided" | "accepted" | "rejected";

export default function CookieConsent() {
  const [consentState, setConsentState] = useState<ConsentState>("undecided");
  const [isVisible, setIsVisible] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    // Check for existing consent
    const savedConsent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (savedConsent) {
      setConsentState(savedConsent as ConsentState);
    } else {
      // Show banner after a short delay
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setConsentState("accepted");
    setIsVisible(false);
    // Here you would initialize analytics, etc.
  };

  const handleReject = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "rejected");
    setConsentState("rejected");
    setIsVisible(false);
    // Here you would disable analytics, etc.
  };

  const content = {
    pl: {
      title: "Ta strona używa cookies",
      description:
        "Używamy plików cookies, aby zapewnić najlepsze wrażenia z korzystania z naszej strony. Możesz zaakceptować wszystkie cookies lub odrzucić opcjonalne.",
      accept: "Akceptuję wszystkie",
      reject: "Tylko niezbędne",
      learnMore: "Dowiedz się więcej",
    },
    en: {
      title: "This site uses cookies",
      description:
        "We use cookies to ensure the best experience on our website. You can accept all cookies or reject optional ones.",
      accept: "Accept all",
      reject: "Essential only",
      learnMore: "Learn more",
    },
  };

  const t = content[language];

  // Don't render if consent already given
  if (consentState !== "undecided" && !isVisible) {
    return null;
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4"
        >
          <div className="max-w-4xl mx-auto bg-[#121212] border border-[#2a2a2a] rounded-2xl p-6 shadow-2xl">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              {/* Icon and text */}
              <div className="flex items-start gap-4 flex-1">
                <div className="w-12 h-12 bg-[#2563EB]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Cookie className="w-6 h-6 text-[#2563EB]" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">{t.title}</h3>
                  <p className="text-[#a1a1a1] text-sm leading-relaxed">
                    {t.description}{" "}
                    <Link
                      href="/privacy"
                      className="text-[#2563EB] hover:underline"
                    >
                      {t.learnMore}
                    </Link>
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex items-center gap-3 w-full md:w-auto">
                <button
                  onClick={handleReject}
                  className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2.5 bg-[#1a1a1a] border border-[#2a2a2a] hover:bg-[#222] text-white rounded-xl font-medium text-sm transition-colors cursor-pointer"
                >
                  <X size={16} />
                  {t.reject}
                </button>
                <button
                  onClick={handleAccept}
                  className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2.5 bg-[#2563EB] hover:bg-[#3b82f6] text-white rounded-xl font-medium text-sm transition-colors cursor-pointer"
                >
                  <Check size={16} />
                  {t.accept}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
