"use client";

import { motion } from "framer-motion";
import { Globe, Smartphone, Palette, Rocket, Code2, Layers } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const services = [
  {
    icon: Globe,
    titlePl: "Strony Internetowe",
    titleEn: "Websites",
    descPl: "Responsywne strony firmowe, landing page i sklepy e-commerce z nowoczesnym designem.",
    descEn: "Responsive corporate websites, landing pages and e-commerce stores with modern design.",
  },
  {
    icon: Smartphone,
    titlePl: "Aplikacje Mobilne",
    titleEn: "Mobile Apps",
    descPl: "Natywne i cross-platform aplikacje na iOS i Android dla Twojego biznesu.",
    descEn: "Native and cross-platform iOS and Android applications for your business.",
  },
  {
    icon: Layers,
    titlePl: "Aplikacje Webowe",
    titleEn: "Web Applications",
    descPl: "Zaawansowane systemy SaaS, panele administracyjne i narzędzia biznesowe.",
    descEn: "Advanced SaaS systems, admin panels and business tools.",
  },
  {
    icon: Code2,
    titlePl: "Integracje API",
    titleEn: "API Integrations",
    descPl: "Połączenie systemów zewnętrznych, automatyzacja procesów i synchronizacja danych.",
    descEn: "External system connections, process automation and data synchronization.",
  },
  {
    icon: Palette,
    titlePl: "UI/UX Design",
    titleEn: "UI/UX Design",
    descPl: "Projektowanie interfejsów zorientowanych na użytkownika i konwersję.",
    descEn: "User-centered interface design focused on conversion.",
  },
  {
    icon: Rocket,
    titlePl: "Wsparcie & Rozwój",
    titleEn: "Support & Growth",
    descPl: "Ciągła opieka techniczna, optymalizacja i rozwój Twojego produktu cyfrowego.",
    descEn: "Ongoing technical support, optimization and development of your digital product.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function WebDevelopment() {
  const { language } = useLanguage();

  const content = {
    pl: {
      badge: "Dodatkowa Usługa",
      title: "Tworzymy Strony i Aplikacje",
      subtitle: "Oprócz automatyzacji, projektujemy i rozwijamy nowoczesne rozwiązania cyfrowe dla Twojego biznesu. Od prostej strony wizytówki po zaawansowane systemy SaaS.",
      cta: "Zapytaj o wycenę",
    },
    en: {
      badge: "Additional Service",
      title: "We Build Websites & Apps",
      subtitle: "Beyond automation, we design and develop modern digital solutions for your business. From simple landing pages to advanced SaaS systems.",
      cta: "Get a Quote",
    },
  };

  const t = content[language];

  return (
    <section id="web-development" className="py-24 px-4 relative bg-[#0a0a0a]">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#10B981]/5 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#10B981]/10 border border-[#10B981]/30 rounded-full px-4 py-2 mb-6">
            <Code2 className="w-4 h-4 text-[#10B981]" />
            <span className="text-[#10B981] text-sm font-medium">{t.badge}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {t.title}
            <span className="text-[#10B981]">.</span>
          </h2>
          <p className="text-[#a1a1a1] text-lg max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        {/* Services grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-[#121212] border border-[#2a2a2a] rounded-2xl p-6 hover:border-[#10B981]/30 transition-all group"
              >
                <div className="w-14 h-14 bg-[#10B981]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#10B981]/20 transition-colors">
                  <IconComponent className="w-7 h-7 text-[#10B981]" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">
                  {language === "pl" ? service.titlePl : service.titleEn}
                </h3>
                <p className="text-[#a1a1a1] text-sm leading-relaxed">
                  {language === "pl" ? service.descPl : service.descEn}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#10B981] hover:bg-[#059669] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
          >
            {t.cta}
            <Rocket size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
