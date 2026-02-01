"use client";

import { motion } from "framer-motion";
import { Linkedin, Facebook, Instagram } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/config/site";

export default function Footer() {
  const { t } = useLanguage();

  const footerLinks = {
    company: [
      { label: t.nav.services, href: "#services" },
      { label: t.nav.howWeWork, href: "#how-we-work" },
      { label: t.nav.caseStudy, href: "#case-study" },
      { label: t.nav.contact, href: "#contact" },
    ],
    resources: [
      { label: t.nav.faq, href: "#faq" },
      { label: t.footer.privacy, href: "/privacy" },
      { label: t.footer.terms, href: "/terms" },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: siteConfig.social.linkedin, label: "LinkedIn" },
    { icon: Facebook, href: siteConfig.social.facebook, label: "Facebook" },
    { icon: Instagram, href: siteConfig.social.instagram, label: "Instagram" },
  ];

  return (
    <footer className="bg-[#0a0a0a] border-t border-[#1a1a1a] pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <a href="#" className="inline-block mb-4">
              <img
                src="/logo-text.png"
                alt={siteConfig.name}
                className="h-8 w-auto"
              />
            </a>
            <p className="text-[#a1a1a1] text-sm leading-relaxed mb-6">
              {t.footer.description}
            </p>
            {/* Social links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg flex items-center justify-center text-[#a1a1a1] hover:text-[#2563EB] hover:border-[#2563EB]/50 transition-colors cursor-pointer"
                  >
                    <IconComponent size={18} />
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Company links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-white font-semibold mb-4">
              {t.footer.links.company}
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-[#a1a1a1] hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-white font-semibold mb-4">
              {t.footer.links.resources}
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-[#a1a1a1] hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-white font-semibold mb-4">
              {t.nav.contact}
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-[#a1a1a1] hover:text-white transition-colors text-sm"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="text-[#a1a1a1] hover:text-white transition-colors text-sm"
                >
                  {siteConfig.phone}
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#1a1a1a]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[#6b7280] text-sm">
              &copy; {new Date().getFullYear()} {siteConfig.name}. {t.footer.copyright}
            </p>
            <div className="flex items-center gap-6">
              <a
                href="/privacy"
                className="text-[#6b7280] hover:text-[#a1a1a1] transition-colors text-sm"
              >
                {t.footer.privacy}
              </a>
              <a
                href="/terms"
                className="text-[#6b7280] hover:text-[#a1a1a1] transition-colors text-sm"
              >
                {t.footer.terms}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
