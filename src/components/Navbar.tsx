"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/config/site";
import LanguageSwitch from "./LanguageSwitch";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#solution", label: t.nav.services },
    { href: "#how-we-work", label: t.nav.howWeWork },
    { href: "#case-study", label: t.nav.caseStudy },
    { href: "#faq", label: t.nav.faq },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-4 left-4 right-4 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#121212]/90 backdrop-blur-md border border-[#2a2a2a]"
          : "bg-transparent"
      } rounded-2xl`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <img
              src="/logo-text.png"
              alt={siteConfig.name}
              className="h-16 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#a1a1a1] hover:text-white transition-colors duration-200 text-base font-semibold"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitch />
            <a
              href="#contact"
              className="bg-[#2563EB] hover:bg-[#3b82f6] text-white px-6 py-3 rounded-lg font-semibold text-base transition-colors duration-200 cursor-pointer"
            >
              {t.nav.contact}
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 cursor-pointer"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-4 pb-4"
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-[#a1a1a1] hover:text-white transition-colors duration-200 text-base font-semibold py-2"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="flex items-center gap-4 pt-4 border-t border-[#2a2a2a]">
                  <LanguageSwitch />
                  <a
                    href="#contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="bg-[#2563EB] hover:bg-[#3b82f6] text-white px-6 py-3 rounded-lg font-semibold text-base transition-colors duration-200 flex-1 text-center cursor-pointer"
                  >
                    {t.nav.contact}
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
