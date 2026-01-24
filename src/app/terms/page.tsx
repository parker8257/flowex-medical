"use client";

import { motion } from "framer-motion";
import { ArrowLeft, FileText } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/config/site";

export default function TermsOfService() {
  const { language } = useLanguage();

  const content = {
    pl: {
      title: "Regulamin",
      lastUpdated: "Ostatnia aktualizacja: Styczeń 2026",
      back: "Powrót do strony głównej",
      sections: [
        {
          title: "1. Postanowienia ogólne",
          content: `Niniejszy Regulamin określa zasady korzystania ze strony internetowej ${siteConfig.url} oraz usług oferowanych przez ${siteConfig.name}.

Korzystając z naszej strony i usług, akceptujesz niniejszy Regulamin w całości. Jeśli nie zgadzasz się z którymkolwiek z postanowień, prosimy o niekorzystanie ze strony.`,
        },
        {
          title: "2. Definicje",
          content: `• Usługodawca - ${siteConfig.name}
• Klient - osoba fizyczna lub prawna korzystająca z usług
• Usługi - usługi automatyzacji procesów biznesowych
• Strona - strona internetowa pod adresem ${siteConfig.url}
• Umowa - umowa o świadczenie usług automatyzacji`,
        },
        {
          title: "3. Zakres usług",
          content: `Oferujemy następujące usługi:
• Wdrożenie systemów automatyzacji rezerwacji
• Konfiguracja chatbotów i systemów AI
• Integracja z platformami komunikacyjnymi (WhatsApp, Telegram, Messenger)
• Automatyzacja przypomnień i powiadomień
• Systemy zbierania opinii
• Zarządzanie fakturami i dokumentami
• Wsparcie techniczne i maintenance

Szczegółowy zakres usług określa indywidualna umowa z Klientem.`,
        },
        {
          title: "4. Zawarcie umowy",
          content: `Umowa zostaje zawarta poprzez:
1. Kontakt przez formularz na stronie lub email/telefon
2. Przeprowadzenie konsultacji i ustalenie zakresu usług
3. Przedstawienie oferty i akceptacja przez Klienta
4. Podpisanie umowy (elektronicznie lub papierowo)
5. Opłacenie faktury setup (jeśli dotyczy)

Usługodawca zastrzega sobie prawo do odmowy zawarcia umowy bez podania przyczyny.`,
        },
        {
          title: "5. Cennik i płatności",
          content: `• Ceny usług podane są w złotych polskich (PLN) netto
• Do cen doliczany jest podatek VAT 23%
• Opłata setup płatna jest przed rozpoczęciem wdrożenia
• Opłata abonamentowa płatna jest z góry za każdy miesiąc
• Termin płatności: 7 dni od daty wystawienia faktury
• Akceptowane metody: przelew bankowy

W przypadku braku płatności w terminie, Usługodawca ma prawo wstrzymać świadczenie usług.`,
        },
        {
          title: "6. Realizacja usług",
          content: `• Standardowy czas wdrożenia: 7-14 dni roboczych
• Klient zobowiązany jest do współpracy i udostępnienia niezbędnych dostępów
• Usługodawca informuje o postępach wdrożenia
• Po zakończeniu wdrożenia przeprowadzane jest szkolenie

Terminy mogą ulec zmianie w przypadku:
• Braku współpracy ze strony Klienta
• Konieczności dostosowania do specyficznych wymagań
• Okoliczności niezależnych od Usługodawcy`,
        },
        {
          title: "7. Obowiązki Klienta",
          content: `Klient zobowiązuje się do:
• Dostarczenia prawdziwych i kompletnych informacji
• Udostępnienia niezbędnych dostępów do systemów
• Współpracy podczas procesu wdrożenia
• Terminowego regulowania płatności
• Nieprzekazywania danych dostępowych osobom trzecim
• Korzystania z usług zgodnie z prawem
• Posiadania zgód na przetwarzanie danych pacjentów (jeśli dotyczy)`,
        },
        {
          title: "8. Obowiązki Usługodawcy",
          content: `Usługodawca zobowiązuje się do:
• Profesjonalnego świadczenia usług
• Zachowania poufności danych Klienta
• Zapewnienia wsparcia technicznego
• Informowania o istotnych zmianach
• Stosowania odpowiednich środków bezpieczeństwa
• Zgodności z RODO i innymi przepisami`,
        },
        {
          title: "9. Odpowiedzialność",
          content: `Usługodawca nie ponosi odpowiedzialności za:
• Przerwy wynikające z przyczyn niezależnych (awarie dostawców, siła wyższa)
• Szkody wynikające z nieprawidłowego korzystania z usług
• Utratę danych spowodowaną przez Klienta
• Działania osób trzecich

Maksymalna odpowiedzialność Usługodawcy ograniczona jest do wysokości opłat uiszczonych przez Klienta w okresie 12 miesięcy poprzedzających zdarzenie.`,
        },
        {
          title: "10. Własność intelektualna",
          content: `• Wszelkie prawa do systemów, workflow i konfiguracji należą do Usługodawcy
• Klient otrzymuje licencję na korzystanie z wdrożonych rozwiązań
• Licencja obowiązuje przez czas trwania umowy
• Po zakończeniu umowy Klient może kontynuować korzystanie z własnych danych`,
        },
        {
          title: "11. Poufność",
          content: `Strony zobowiązują się do:
• Zachowania w tajemnicy wszelkich informacji poufnych
• Nieujawniania warunków umowy osobom trzecim
• Stosowania odpowiednich środków ochrony informacji

Obowiązek poufności trwa przez czas współpracy i 2 lata po jej zakończeniu.`,
        },
        {
          title: "12. Wypowiedzenie umowy",
          content: `• Umowa może być wypowiedziana przez każdą ze stron z zachowaniem 30-dniowego okresu wypowiedzenia
• Wypowiedzenie wymaga formy pisemnej lub elektronicznej
• W przypadku wypowiedzenia Klient otrzymuje dostęp do eksportu swoich danych
• Opłaty za bieżący okres rozliczeniowy nie podlegają zwrotowi

Usługodawca może rozwiązać umowę ze skutkiem natychmiastowym w przypadku:
• Naruszenia Regulaminu przez Klienta
• Braku płatności przez okres dłuższy niż 30 dni
• Działań na szkodę Usługodawcy`,
        },
        {
          title: "13. Reklamacje",
          content: `Reklamacje należy zgłaszać na adres: ${siteConfig.email}

Reklamacja powinna zawierać:
• Dane Klienta
• Opis problemu
• Oczekiwane rozwiązanie

Termin rozpatrzenia reklamacji: 14 dni roboczych.`,
        },
        {
          title: "14. Zmiany Regulaminu",
          content: `Usługodawca zastrzega sobie prawo do zmiany Regulaminu. O zmianach Klienci zostaną poinformowani z 14-dniowym wyprzedzeniem drogą elektroniczną.

Kontynuowanie korzystania z usług po wejściu zmian w życie oznacza akceptację nowego Regulaminu.`,
        },
        {
          title: "15. Postanowienia końcowe",
          content: `• Regulamin podlega prawu polskiemu
• Spory rozstrzygane będą przez sąd właściwy dla siedziby Usługodawcy
• W sprawach nieuregulowanych stosuje się przepisy Kodeksu cywilnego

Kontakt: ${siteConfig.email} | ${siteConfig.phone}`,
        },
      ],
    },
    en: {
      title: "Terms of Service",
      lastUpdated: "Last updated: January 2026",
      back: "Back to homepage",
      sections: [
        {
          title: "1. General Provisions",
          content: `These Terms of Service govern the use of the website ${siteConfig.url} and services offered by ${siteConfig.name}.

By using our website and services, you accept these Terms in full. If you disagree with any provision, please do not use the website.`,
        },
        {
          title: "2. Definitions",
          content: `• Service Provider - ${siteConfig.name}
• Client - natural or legal person using the services
• Services - business process automation services
• Website - website at ${siteConfig.url}
• Agreement - service agreement for automation services`,
        },
        {
          title: "3. Scope of Services",
          content: `We offer the following services:
• Implementation of booking automation systems
• Configuration of chatbots and AI systems
• Integration with communication platforms (WhatsApp, Telegram, Messenger)
• Automation of reminders and notifications
• Review collection systems
• Invoice and document management
• Technical support and maintenance

The detailed scope is defined in individual agreements with Clients.`,
        },
        {
          title: "4. Contract Formation",
          content: `The agreement is formed through:
1. Contact via website form or email/phone
2. Consultation and scope definition
3. Offer presentation and Client acceptance
4. Signing the agreement (electronically or on paper)
5. Payment of setup fee (if applicable)

The Service Provider reserves the right to refuse to enter into an agreement without stating reasons.`,
        },
        {
          title: "5. Pricing and Payments",
          content: `• Prices are quoted in Polish zloty (PLN) net
• 23% VAT is added to prices
• Setup fee is due before implementation begins
• Subscription fee is due in advance for each month
• Payment term: 7 days from invoice date
• Accepted methods: bank transfer

In case of non-payment, the Service Provider may suspend services.`,
        },
        {
          title: "6. Service Delivery",
          content: `• Standard implementation time: 7-14 business days
• Client must cooperate and provide necessary access
• Service Provider reports on implementation progress
• Training is provided upon completion

Timelines may change due to:
• Lack of Client cooperation
• Need for customization
• Circumstances beyond our control`,
        },
        {
          title: "7. Client Obligations",
          content: `The Client agrees to:
• Provide accurate and complete information
• Grant necessary system access
• Cooperate during implementation
• Make timely payments
• Not share access credentials with third parties
• Use services in compliance with law
• Obtain patient data processing consents (if applicable)`,
        },
        {
          title: "8. Service Provider Obligations",
          content: `The Service Provider agrees to:
• Deliver services professionally
• Maintain confidentiality of Client data
• Provide technical support
• Inform about significant changes
• Implement appropriate security measures
• Comply with GDPR and other regulations`,
        },
        {
          title: "9. Liability",
          content: `The Service Provider is not liable for:
• Interruptions due to independent causes (provider outages, force majeure)
• Damages from improper service use
• Data loss caused by the Client
• Third-party actions

Maximum liability is limited to fees paid by the Client in the 12 months preceding the event.`,
        },
        {
          title: "10. Intellectual Property",
          content: `• All rights to systems, workflows, and configurations belong to the Service Provider
• Client receives a license to use implemented solutions
• License is valid for the duration of the agreement
• After termination, Client may continue using their own data`,
        },
        {
          title: "11. Confidentiality",
          content: `Both parties agree to:
• Keep all confidential information secret
• Not disclose agreement terms to third parties
• Implement appropriate information protection measures

Confidentiality obligation lasts during cooperation and 2 years after termination.`,
        },
        {
          title: "12. Termination",
          content: `• Either party may terminate with 30 days notice
• Termination must be in writing or electronic form
• Upon termination, Client receives access to export their data
• Fees for the current billing period are non-refundable

Service Provider may terminate immediately in case of:
• Client's breach of Terms
• Non-payment for more than 30 days
• Actions harmful to Service Provider`,
        },
        {
          title: "13. Complaints",
          content: `Complaints should be sent to: ${siteConfig.email}

Complaints should include:
• Client information
• Problem description
• Expected resolution

Response time: 14 business days.`,
        },
        {
          title: "14. Changes to Terms",
          content: `The Service Provider reserves the right to modify these Terms. Clients will be notified of changes 14 days in advance via email.

Continued use of services after changes take effect constitutes acceptance of the new Terms.`,
        },
        {
          title: "15. Final Provisions",
          content: `• These Terms are governed by Polish law
• Disputes will be resolved by courts in the Service Provider's jurisdiction
• Matters not regulated herein are governed by the Civil Code

Contact: ${siteConfig.email} | ${siteConfig.phone}`,
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
              <FileText className="w-6 h-6 text-[#2563EB]" />
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
