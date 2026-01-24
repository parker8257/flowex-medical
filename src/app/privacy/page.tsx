"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Shield } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/config/site";

export default function PrivacyPolicy() {
  const { language } = useLanguage();

  const content = {
    pl: {
      title: "Polityka Prywatności",
      lastUpdated: "Ostatnia aktualizacja: Styczeń 2026",
      back: "Powrót do strony głównej",
      sections: [
        {
          title: "1. Administrator Danych",
          content: `Administratorem Twoich danych osobowych jest ${siteConfig.name} z siedzibą w Polsce. Możesz się z nami skontaktować pod adresem email: ${siteConfig.email} lub telefonicznie: ${siteConfig.phone}.`,
        },
        {
          title: "2. Jakie dane zbieramy",
          content: `Zbieramy następujące dane osobowe:
• Imię i nazwisko - w celu identyfikacji i komunikacji
• Adres email - do wysyłki odpowiedzi na zapytania
• Numer telefonu - do kontaktu telefonicznego (opcjonalnie)
• Nazwa firmy/gabinetu - w celu dostosowania oferty
• Treść wiadomości - w celu odpowiedzi na Twoje pytania

Nie zbieramy danych wrażliwych (np. danych medycznych pacjentów).`,
        },
        {
          title: "3. Cel przetwarzania danych",
          content: `Twoje dane przetwarzamy w następujących celach:
• Odpowiedź na zapytania przez formularz kontaktowy
• Przygotowanie i przedstawienie oferty
• Realizacja umów i świadczenie usług
• Marketing bezpośredni własnych produktów i usług (za zgodą)
• Wypełnienie obowiązków prawnych`,
        },
        {
          title: "4. Podstawa prawna przetwarzania",
          content: `Przetwarzamy Twoje dane na podstawie:
• Art. 6 ust. 1 lit. a RODO - zgoda (formularz kontaktowy)
• Art. 6 ust. 1 lit. b RODO - wykonanie umowy
• Art. 6 ust. 1 lit. f RODO - prawnie uzasadniony interes (marketing)`,
        },
        {
          title: "5. Okres przechowywania danych",
          content: `Twoje dane przechowujemy przez okres:
• Zapytania z formularza: 2 lata od ostatniego kontaktu
• Dane umowne: 5 lat od zakończenia współpracy (wymogi podatkowe)
• Dane marketingowe: do czasu wycofania zgody`,
        },
        {
          title: "6. Twoje prawa",
          content: `Przysługują Ci następujące prawa:
• Prawo dostępu do danych
• Prawo do sprostowania danych
• Prawo do usunięcia danych ("bycie zapomnianym")
• Prawo do ograniczenia przetwarzania
• Prawo do przenoszenia danych
• Prawo do sprzeciwu
• Prawo do cofnięcia zgody

Aby skorzystać z tych praw, skontaktuj się z nami: ${siteConfig.email}`,
        },
        {
          title: "7. Odbiorcy danych",
          content: `Twoje dane mogą być przekazywane:
• Formspree Inc. (obsługa formularza kontaktowego) - USA, Privacy Shield
• Vercel Inc. (hosting strony) - USA, Privacy Shield
• Google (analytics, jeśli włączone) - USA, Privacy Shield

Nie sprzedajemy Twoich danych osobowych.`,
        },
        {
          title: "8. Pliki cookies",
          content: `Nasza strona używa plików cookies:
• Niezbędne - do działania strony (np. preferencje języka)
• Analityczne - do analizy ruchu (tylko za zgodą)

Możesz zarządzać cookies w ustawieniach przeglądarki lub przez nasz baner cookies.`,
        },
        {
          title: "9. Bezpieczeństwo danych",
          content: `Stosujemy odpowiednie środki bezpieczeństwa:
• Szyfrowanie TLS 1.3 dla wszystkich połączeń
• Szyfrowanie AES-256 dla danych w spoczynku
• Regularne audyty bezpieczeństwa
• Ograniczony dostęp do danych`,
        },
        {
          title: "10. Kontakt i skargi",
          content: `W sprawie ochrony danych możesz skontaktować się:
• Email: ${siteConfig.email}
• Telefon: ${siteConfig.phone}

Masz prawo złożyć skargę do Prezesa Urzędu Ochrony Danych Osobowych (UODO).`,
        },
      ],
    },
    en: {
      title: "Privacy Policy",
      lastUpdated: "Last updated: January 2026",
      back: "Back to homepage",
      sections: [
        {
          title: "1. Data Controller",
          content: `The controller of your personal data is ${siteConfig.name} based in Poland. You can contact us at: ${siteConfig.email} or by phone: ${siteConfig.phone}.`,
        },
        {
          title: "2. Data We Collect",
          content: `We collect the following personal data:
• Full name - for identification and communication
• Email address - to respond to inquiries
• Phone number - for phone contact (optional)
• Company/practice name - to customize our offer
• Message content - to answer your questions

We do not collect sensitive data (e.g., patients' medical data).`,
        },
        {
          title: "3. Purpose of Processing",
          content: `We process your data for the following purposes:
• Responding to contact form inquiries
• Preparing and presenting offers
• Contract fulfillment and service delivery
• Direct marketing of our products and services (with consent)
• Compliance with legal obligations`,
        },
        {
          title: "4. Legal Basis",
          content: `We process your data based on:
• Art. 6(1)(a) GDPR - consent (contact form)
• Art. 6(1)(b) GDPR - contract performance
• Art. 6(1)(f) GDPR - legitimate interest (marketing)`,
        },
        {
          title: "5. Data Retention",
          content: `We store your data for:
• Form inquiries: 2 years from last contact
• Contractual data: 5 years after cooperation ends (tax requirements)
• Marketing data: until consent withdrawal`,
        },
        {
          title: "6. Your Rights",
          content: `You have the following rights:
• Right of access
• Right to rectification
• Right to erasure ("right to be forgotten")
• Right to restriction of processing
• Right to data portability
• Right to object
• Right to withdraw consent

To exercise these rights, contact us: ${siteConfig.email}`,
        },
        {
          title: "7. Data Recipients",
          content: `Your data may be shared with:
• Formspree Inc. (contact form processing) - USA, Privacy Shield
• Vercel Inc. (website hosting) - USA, Privacy Shield
• Google (analytics, if enabled) - USA, Privacy Shield

We do not sell your personal data.`,
        },
        {
          title: "8. Cookies",
          content: `Our website uses cookies:
• Essential - for website functionality (e.g., language preferences)
• Analytics - for traffic analysis (only with consent)

You can manage cookies in your browser settings or through our cookie banner.`,
        },
        {
          title: "9. Data Security",
          content: `We implement appropriate security measures:
• TLS 1.3 encryption for all connections
• AES-256 encryption for data at rest
• Regular security audits
• Restricted data access`,
        },
        {
          title: "10. Contact and Complaints",
          content: `For data protection matters, contact us:
• Email: ${siteConfig.email}
• Phone: ${siteConfig.phone}

You have the right to lodge a complaint with the supervisory authority (in Poland: UODO).`,
        },
      ],
    },
  };

  const t = content[language];

  return (
    <main className="min-h-screen bg-[#0a0a0a] py-24 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#a1a1a1] hover:text-white transition-colors mb-8"
        >
          <ArrowLeft size={18} />
          {t.back}
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-[#2563EB]/10 rounded-xl flex items-center justify-center">
              <Shield className="w-6 h-6 text-[#2563EB]" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              {t.title}
            </h1>
          </div>
          <p className="text-[#6b7280]">{t.lastUpdated}</p>
        </motion.div>

        {/* Content */}
        <div className="space-y-8">
          {t.sections.map((section, index) => (
            <motion.section
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-[#121212] border border-[#2a2a2a] rounded-2xl p-6"
            >
              <h2 className="text-xl font-semibold text-white mb-4">
                {section.title}
              </h2>
              <p className="text-[#a1a1a1] whitespace-pre-line leading-relaxed">
                {section.content}
              </p>
            </motion.section>
          ))}
        </div>
      </div>
    </main>
  );
}
