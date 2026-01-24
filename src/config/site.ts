export const siteConfig = {
  name: "FlowEx",
  description: {
    pl: "Automatyzacja procesów biznesowych. Więcej czasu na rozwój firmy.",
    en: "Business Process Automation. More time for growth.",
  },
  url: "https://flowex.pl",
  email: "kontakt@flowex.pl",
  phone: "+48 123 456 789",
  social: {
    linkedin: "https://linkedin.com/company/flowex",
    facebook: "https://facebook.com/flowex",
    instagram: "https://instagram.com/flowex",
  },
};

export const translations = {
  pl: {
    nav: {
      services: "Usługi",
      howWeWork: "Jak działamy",
      benefits: "Korzyści",
      caseStudy: "Case Study",
      faq: "FAQ",
      contact: "Kontakt",
    },
    hero: {
      badge: "",
      title: "Automatyzacja procesów biznesowych",
      subtitle:
        "Więcej czasu na rozwój firmy. Mniej czasu na powtarzalne zadania. Wdrażamy inteligentne rozwiązania, które pracują 24/7.",
      cta: "Umów konsultację",
      ctaSecondary: "Zobacz jak działamy",
      stats: {
        clients: "Klientów",
        visits: "Automatyzacji/msc",
        satisfaction: "Satysfakcji",
      },
    },
    problem: {
      title: "Czy Twój Gabinet Ma Te Problemy",
      subtitle: "Rozpoznajesz te wyzwania? Nie jesteś sam.",
      items: [
        {
          title: "Telefony tylko w godzinach 9-17",
          description:
            "Pacjenci chcą rezerwować wizyty wieczorem i w weekendy. Bez recepcji tracisz potencjalne rezerwacje.",
          stat: "60%",
          statLabel: "utraconych rezerwacji",
        },
        {
          title: "Wysoki wskaźnik no-show",
          description:
            "Pacjenci zapominają o wizytach. Każde puste miejsce to strata czasu i pieniędzy.",
          stat: "15-25%",
          statLabel: "wizyt bez potwierdzenia",
        },
        {
          title: "Godziny na administrację",
          description:
            "Odbieranie telefonów, potwierdzanie wizyt, wysyłanie przypomnień. Czas, który mógłbyś spędzić z pacjentami.",
          stat: "15h",
          statLabel: "tygodniowo na administrację",
        },
        {
          title: "Chaos w emailach i fakturach",
          description:
            "Niezorganizowany inbox, zagubione faktury, brak systemu. Stres i błędy na co dzień.",
          stat: "100+",
          statLabel: "emaili tygodniowo",
        },
      ],
    },
    solution: {
      badge: "Obszary automatyzacji",
      title: "Kompleksowe rozwiązania dla każdego obszaru Twojej firmy",
      subtitle: "Automatyzujemy procesy, które pochłaniają Twój czas",
      modules: [
        {
          title: "Marketing",
          description:
            "Automatyczne kampanie email, lead nurturing, social media posting i analityka.",
          features: ["Email campaigns", "Lead scoring", "Social media", "Analytics"],
        },
        {
          title: "Sprzedaż",
          description:
            "CRM automation, automatyczne follow-upy, pipeline management i prognozowanie.",
          features: ["CRM sync", "Follow-ups", "Pipeline", "Forecasting"],
        },
        {
          title: "Obsługa klienta",
          description:
            "Chatboty AI, system ticketowy, automatyczne odpowiedzi i routing zgłoszeń.",
          features: ["AI Chatbot", "Ticketing", "Auto-reply", "Routing"],
        },
        {
          title: "HR i rekrutacja",
          description:
            "Automatyczny onboarding, screening CV, zarządzanie urlopami i dokumentacją.",
          features: ["Onboarding", "CV screening", "Urlopy", "Dokumenty"],
        },
        {
          title: "Finanse",
          description:
            "Automatyczne fakturowanie, księgowość, raportowanie finansowe i windykacja.",
          features: ["Fakturowanie", "Księgowość", "Raporty", "Windykacja"],
        },
        {
          title: "Administracja",
          description:
            "Zarządzanie dokumentami, email management, workflow approval i archiwizacja.",
          features: ["Dokumenty", "Email", "Workflow", "Archiwum"],
        },
      ],
    },
    industries: {
      title: "Branże, które wspieramy",
      subtitle: "Specjalizujemy się w automatyzacji dla wybranych sektorów",
      items: [
        {
          title: "Medical & Beauty",
          description: "Rezerwacje 24/7, przypomnienia, zbieranie opinii",
          link: "/medical",
          cta: "Co automatyzujemy?",
        },
        {
          title: "SaaS & Tech",
          description: "Onboarding użytkowników, billing, customer success",
          link: "/saas",
          cta: "Dowiedz się więcej",
        },
        {
          title: "Usługi profesjonalne",
          description: "Kancelarie, agencje, konsulting - workflow i dokumenty",
          link: "/services",
          cta: "Dowiedz się więcej",
        },
      ],
    },
    features: {
      title: "Co Dokładnie Dostajesz",
      subtitle: "Kompletny pakiet automatyzacji dla Twojego gabinetu",
      optional: "Opcjonalnie",
      items: [
        {
          title: "Multi-Platform Booking",
          description: "Rezerwacje przez WhatsApp, Telegram i Messenger z jednego miejsca.",
        },
        {
          title: "AI Conversation",
          description: "Inteligentny chatbot rozumiejący język naturalny i kontekst rozmowy.",
        },
        {
          title: "Google Calendar Sync",
          description: "Automatyczna synchronizacja z Twoim kalendarzem Google.",
        },
        {
          title: "Automated Reminders",
          description: "Przypomnienia o wizytach 24h wcześniej przez preferowany kanał.",
        },
        {
          title: "Feedback Collection",
          description: "Automatyczne zbieranie opinii i kierowanie do Google Maps.",
        },
        {
          title: "Reactivation Campaigns",
          description: "Automatyczne wiadomości do nieaktywnych pacjentów po 60 dniach.",
        },
        {
          title: "Invoice Management",
          description: "AI ekstrakcja i kategoryzacja faktur z emaili i dokumentów.",
        },
        {
          title: "Email Classification",
          description: "Automatyczne sortowanie emaili według priorytetu (Matryca Eisenhowera).",
        },
        {
          title: "Instagram Content",
          description: "AI generowanie postów edukacyjnych z branży medycznej.",
        },
      ],
    },
    howWeWork: {
      title: "Jak Działamy",
      subtitle: "Prosty proces w 3 krokach",
      steps: [
        {
          number: "01",
          title: "Konsultacja",
          description:
            "Poznajemy Twoje procesy, identyfikujemy obszary do automatyzacji i proponujemy rozwiązania.",
          duration: "60 min",
        },
        {
          number: "02",
          title: "Wdrożenie",
          description:
            "Projektujemy i implementujemy automatyzacje. Integrujemy z Twoimi narzędziami.",
          duration: "7-14 dni",
        },
        {
          number: "03",
          title: "Launch & Support",
          description:
            "Uruchamiamy system, szkolimy zespół i zapewniamy ciągłe wsparcie.",
          duration: "Ongoing",
        },
      ],
    },
    technology: {
      title: "Technologia Klasy Enterprise",
      subtitle: "Najnowsze AI i sprawdzone rozwiązania automatyzacji",
      partners: "Używamy narzędzi od",
      pillars: [
        {
          title: "Najnowsze AI",
          description: "GPT-4, Claude, Gemini - naturalna rozmowa, nie bot",
        },
        {
          title: "RODO/GDPR Compliance",
          description: "DPA, SCC, szyfrowanie TLS 1.3 i AES-256",
        },
        {
          title: "Cloud Infrastructure",
          description: "99.9% uptime, redundancy, automatyczne backupy",
        },
        {
          title: "n8n Automation",
          description: "Sprawdzona platforma, tysiące integracji",
        },
      ],
    },
    benefits: {
      title: "Korzyści z Automatyzacji",
      subtitle: "Konkretne wyniki, które osiągają nasi klienci",
      items: [
        {
          value: "-87%",
          label: "Czasu na administrację",
          description: "Mniej powtarzalnych zadań",
        },
        {
          value: "+40%",
          label: "Wzrost produktywności",
          description: "Więcej czasu na rozwój",
        },
        {
          value: "24/7",
          label: "Automatyzacja",
          description: "Systemy pracują non-stop",
        },
        {
          value: "2x",
          label: "Szybszy onboarding",
          description: "Klientów i pracowników",
        },
      ],
    },
    caseStudy: {
      title: "Case Study: FizjOdnova",
      subtitle: "+50% wizyt w 2 miesiące",
      description:
        "Gabinet fizjoterapii borykał się z problemem no-show i brakiem czasu na administrację. Wdrożyliśmy kompleksowy system automatyzacji.",
      quote:
        "Pierwsze 2 tygodnie byłam sceptyczna. Teraz nie wyobrażam sobie pracy bez tego systemu. Klienci piszą o 23:00 i dostają odpowiedź w 30 sekund. To game-changer.",
      author: "Właścicielka FizjOdnova",
      metrics: [
        { label: "Rezerwacje/msc", before: "100", after: "150", change: "+50%" },
        { label: "No-show", before: "20%", after: "0%", change: "-100%" },
        { label: "Czas administracji", before: "15h/tyg", after: "2h/tyg", change: "-87%" },
        { label: "Opinie Google", before: "12", after: "48", change: "+300%" },
      ],
      cta: "Chcę takie wyniki",
    },
    roiCalculator: {
      badge: "Kalkulator ROI",
      title: "Oblicz Swój ROI",
      subtitle: "Sprawdź ile możesz zaoszczędzić z naszym systemem",
      visits: "Wizyty miesięcznie",
      noShow: "Aktualny % no-show",
      avgPrice: "Średnia cena wizyty",
      monthlyLoss: "Tracisz miesięcznie",
      savings: "Zaoszczędzisz z nami",
      payback: "Zwrot inwestycji",
      months: "msc",
      cta: "Zacznij oszczędzać",
    },
    testimonials: {
      title: "Co Mówią Nasi Klienci",
      subtitle: "Opinie właścicieli gabinetów, którzy nam zaufali",
      items: [
        {
          quote:
            "System działa jak szwajcarski zegarek. Pacjenci są zachwyceni możliwością rezerwacji przez WhatsApp o każdej porze.",
          name: "Anna Kowalska",
          role: "Właścicielka",
          company: "Beauty Clinic",
          initials: "AK",
        },
        {
          quote:
            "Zero no-show od 3 miesięcy! Przypomnienia automatyczne to game-changer. Polecam każdemu gabinetowi.",
          name: "Marek Nowak",
          role: "Kierownik",
          company: "Dental Care",
          initials: "MN",
        },
        {
          quote:
            "Wdrożenie trwało tydzień, a efekty widać od razu. Mój zespół może skupić się na pacjentach zamiast na telefonach.",
          name: "Katarzyna Wiśniewska",
          role: "Właścicielka",
          company: "Fizjo Studio",
          initials: "KW",
        },
      ],
    },
    faq: {
      title: "Często Zadawane Pytania",
      items: [
        {
          question: "Ile kosztuje wdrożenie automatyzacji?",
          answer:
            "Setup zaczyna się od 4,000 PLN dla planu Starter. Miesięczny abonament od 699 PLN. Oferujemy darmową konsultację, podczas której wycenimy Twój projekt.",
        },
        {
          question: "Jak długo trwa wdrożenie?",
          answer:
            "Typowe wdrożenie trwa 7-14 dni. Proste automatyzacje możemy uruchomić nawet w 48 godzin. Od kontaktu do działającego systemu: 2-3 tygodnie.",
        },
        {
          question: "Czy dane pacjentów są bezpieczne?",
          answer:
            "Tak. Stosujemy szyfrowanie TLS 1.3, AES-256. Jesteśmy w pełni zgodni z RODO/GDPR. Podpisujemy DPA z każdym klientem. Zero Data Retention opcja dostępna.",
        },
        {
          question: "Czy to działa z moim obecnym systemem?",
          answer:
            "Integrujemy się z Google Workspace, Microsoft 365 i większością popularnych narzędzi. Nie musisz zmieniać swoich obecnych systemów.",
        },
        {
          question: "Czy muszę znać się na technice?",
          answer:
            "Nie. Wszystko konfigurujemy za Ciebie. Po wdrożeniu otrzymujesz prosty interface (Google Sheets) i szkolenie w 1 godzinę.",
        },
        {
          question: "Co jeśli pacjent woli telefonować?",
          answer:
            "Żaden problem! System automatyzacji działa równolegle z tradycyjnymi kanałami. Pacjenci mogą nadal dzwonić - po prostu masz też opcję 24/7.",
        },
        {
          question: "Czy mogę anulować w każdej chwili?",
          answer:
            "Tak. Nie ma długoterminowych umów. Możesz zrezygnować z miesięcznym wypowiedzeniem. Dane eksportujemy na Twoje żądanie.",
        },
        {
          question: "Czy system mówi po polsku?",
          answer:
            "Oczywiście! System jest w pełni spolonizowany. AI chatbot prowadzi naturalną rozmowę po polsku, rozumie potoczny język i kontekst.",
        },
        {
          question: "Jakie są koszty API i SMS?",
          answer:
            "W planach maintenance wszystkie koszty API są włączone. Nie płacisz osobno za wiadomości WhatsApp, Telegram czy email.",
        },
        {
          question: "Co jeśli coś przestanie działać?",
          answer:
            "Oferujemy pakiety maintenance z monitoringiem 24/7. Większość problemów rozwiązujemy zanim je zauważysz. W razie awarii reagujemy w ciągu godziny.",
        },
      ],
    },
    ctaFinal: {
      title: "Gotowy na Więcej Czasu i Więcej Przychodów",
      subtitle:
        "Umów darmową konsultację. Pokażemy Ci jak to działa w 60 minut.",
      primaryCta: "Umów prezentację",
      secondaryCta: "Zobacz case study",
      badges: {
        free: "Darmowa konsultacja",
        noObligation: "Bez zobowiązań",
        rodo: "RODO-compliant",
      },
    },
    contact: {
      title: "Porozmawiajmy o Automatyzacji",
      subtitle:
        "Umów darmową konsultację. Pokażemy jak możesz zaoszczędzić czas i pieniądze.",
      form: {
        name: "Imię i nazwisko",
        email: "Email",
        phone: "Telefon",
        company: "Nazwa gabinetu",
        message: "Wiadomość",
        submit: "Wyślij wiadomość",
      },
      info: {
        email: "Email",
        phone: "Telefon",
        response: "Odpowiadamy w ciągu 24h",
      },
    },
    footer: {
      description:
        "Automatyzujemy procesy w gabinetach medycznych i salonach beauty, żebyś mógł skupić się na pacjentach.",
      links: {
        company: "Firma",
        services: "Usługi",
        resources: "Zasoby",
      },
      copyright: "Wszelkie prawa zastrzeżone.",
      privacy: "Polityka prywatności",
      terms: "Regulamin",
    },
  },
  en: {
    nav: {
      services: "Services",
      howWeWork: "How We Work",
      benefits: "Benefits",
      caseStudy: "Case Study",
      faq: "FAQ",
      contact: "Contact",
    },
    hero: {
      badge: "",
      title: "Business Process Automation",
      subtitle:
        "More time for growth. Less time on repetitive tasks. We implement intelligent solutions that work 24/7.",
      cta: "Book a consultation",
      ctaSecondary: "See how we work",
      stats: {
        clients: "Clients",
        visits: "Automations/mo",
        satisfaction: "Satisfaction",
      },
    },
    problem: {
      title: "Does Your Practice Have These Problems",
      subtitle: "Recognize these challenges? You're not alone.",
      items: [
        {
          title: "Phone calls only 9-17",
          description:
            "Patients want to book appointments evenings and weekends. Without a receptionist, you lose potential bookings.",
          stat: "60%",
          statLabel: "lost bookings",
        },
        {
          title: "High no-show rate",
          description:
            "Patients forget about appointments. Every empty slot is lost time and money.",
          stat: "15-25%",
          statLabel: "unconfirmed visits",
        },
        {
          title: "Hours on administration",
          description:
            "Answering phones, confirming appointments, sending reminders. Time you could spend with patients.",
          stat: "15h",
          statLabel: "weekly on admin",
        },
        {
          title: "Email and invoice chaos",
          description:
            "Disorganized inbox, lost invoices, no system. Daily stress and errors.",
          stat: "100+",
          statLabel: "emails weekly",
        },
      ],
    },
    solution: {
      badge: "Automation Areas",
      title: "Comprehensive solutions for every area of your business",
      subtitle: "We automate processes that consume your time",
      modules: [
        {
          title: "Marketing",
          description:
            "Automated email campaigns, lead nurturing, social media posting and analytics.",
          features: ["Email campaigns", "Lead scoring", "Social media", "Analytics"],
        },
        {
          title: "Sales",
          description:
            "CRM automation, automatic follow-ups, pipeline management and forecasting.",
          features: ["CRM sync", "Follow-ups", "Pipeline", "Forecasting"],
        },
        {
          title: "Customer Service",
          description:
            "AI chatbots, ticketing system, automatic responses and request routing.",
          features: ["AI Chatbot", "Ticketing", "Auto-reply", "Routing"],
        },
        {
          title: "HR & Recruitment",
          description:
            "Automatic onboarding, CV screening, leave management and documentation.",
          features: ["Onboarding", "CV screening", "Leave", "Documents"],
        },
        {
          title: "Finance",
          description:
            "Automatic invoicing, accounting, financial reporting and debt collection.",
          features: ["Invoicing", "Accounting", "Reports", "Collection"],
        },
        {
          title: "Administration",
          description:
            "Document management, email management, workflow approval and archiving.",
          features: ["Documents", "Email", "Workflow", "Archive"],
        },
      ],
    },
    industries: {
      title: "Industries We Support",
      subtitle: "We specialize in automation for selected sectors",
      items: [
        {
          title: "Medical & Beauty",
          description: "24/7 bookings, reminders, review collection",
          link: "/medical",
          cta: "What we automate",
        },
        {
          title: "SaaS & Tech",
          description: "User onboarding, billing, customer success",
          link: "/saas",
          cta: "Learn more",
        },
        {
          title: "Professional Services",
          description: "Law firms, agencies, consulting - workflow and documents",
          link: "/services",
          cta: "Learn more",
        },
      ],
    },
    features: {
      title: "What You Get",
      subtitle: "Complete automation package for your practice",
      optional: "Optional",
      items: [
        {
          title: "Multi-Platform Booking",
          description: "Bookings via WhatsApp, Telegram, and Messenger from one place.",
        },
        {
          title: "AI Conversation",
          description: "Intelligent chatbot understanding natural language and conversation context.",
        },
        {
          title: "Google Calendar Sync",
          description: "Automatic synchronization with your Google Calendar.",
        },
        {
          title: "Automated Reminders",
          description: "Appointment reminders 24h in advance via preferred channel.",
        },
        {
          title: "Feedback Collection",
          description: "Automatic review collection and routing to Google Maps.",
        },
        {
          title: "Reactivation Campaigns",
          description: "Automatic messages to inactive patients after 60 days.",
        },
        {
          title: "Invoice Management",
          description: "AI extraction and categorization of invoices from emails and documents.",
        },
        {
          title: "Email Classification",
          description: "Automatic email sorting by priority (Eisenhower Matrix).",
        },
        {
          title: "Instagram Content",
          description: "AI-generated educational posts from the medical industry.",
        },
      ],
    },
    howWeWork: {
      title: "How We Work",
      subtitle: "Simple 3-step process",
      steps: [
        {
          number: "01",
          title: "Consultation",
          description:
            "We learn your processes, identify automation opportunities, and propose solutions.",
          duration: "60 min",
        },
        {
          number: "02",
          title: "Implementation",
          description:
            "We design and implement automations. Integration with your existing tools.",
          duration: "7-14 days",
        },
        {
          number: "03",
          title: "Launch & Support",
          description:
            "We launch the system, train your team, and provide ongoing support.",
          duration: "Ongoing",
        },
      ],
    },
    technology: {
      title: "Enterprise-Grade Technology",
      subtitle: "Latest AI and proven automation solutions",
      partners: "Powered by",
      pillars: [
        {
          title: "Latest AI",
          description: "GPT-4, Claude, Gemini - natural conversation, not a bot",
        },
        {
          title: "GDPR Compliance",
          description: "DPA, SCC, TLS 1.3 and AES-256 encryption",
        },
        {
          title: "Cloud Infrastructure",
          description: "99.9% uptime, redundancy, automatic backups",
        },
        {
          title: "n8n Automation",
          description: "Proven platform, thousands of integrations",
        },
      ],
    },
    benefits: {
      title: "Benefits of Automation",
      subtitle: "Real results achieved by our clients",
      items: [
        {
          value: "-87%",
          label: "Admin time reduction",
          description: "Less repetitive tasks",
        },
        {
          value: "+40%",
          label: "Productivity increase",
          description: "More time for growth",
        },
        {
          value: "24/7",
          label: "Automation",
          description: "Systems work non-stop",
        },
        {
          value: "2x",
          label: "Faster onboarding",
          description: "Clients and employees",
        },
      ],
    },
    caseStudy: {
      title: "Case Study: FizjOdnova",
      subtitle: "+50% appointments in 2 months",
      description:
        "A physiotherapy clinic struggled with no-shows and lack of time for administration. We implemented a comprehensive automation system.",
      quote:
        "For the first 2 weeks I was skeptical. Now I can't imagine working without this system. Clients message at 11 PM and get a response in 30 seconds. It's a game-changer.",
      author: "Owner of FizjOdnova",
      metrics: [
        { label: "Bookings/month", before: "100", after: "150", change: "+50%" },
        { label: "No-show", before: "20%", after: "0%", change: "-100%" },
        { label: "Admin time", before: "15h/week", after: "2h/week", change: "-87%" },
        { label: "Google reviews", before: "12", after: "48", change: "+300%" },
      ],
      cta: "I want these results",
    },
    roiCalculator: {
      badge: "ROI Calculator",
      title: "Calculate Your ROI",
      subtitle: "See how much you can save with our system",
      visits: "Monthly visits",
      noShow: "Current no-show %",
      avgPrice: "Average visit price",
      monthlyLoss: "Monthly loss",
      savings: "You'll save with us",
      payback: "Payback period",
      months: "mo",
      cta: "Start saving",
    },
    testimonials: {
      title: "What Our Clients Say",
      subtitle: "Reviews from practice owners who trusted us",
      items: [
        {
          quote:
            "The system works like a Swiss watch. Patients love being able to book via WhatsApp anytime.",
          name: "Anna Kowalska",
          role: "Owner",
          company: "Beauty Clinic",
          initials: "AK",
        },
        {
          quote:
            "Zero no-shows for 3 months! Automatic reminders are a game-changer. I recommend it to every practice.",
          name: "Marek Nowak",
          role: "Manager",
          company: "Dental Care",
          initials: "MN",
        },
        {
          quote:
            "Implementation took a week, and results are immediate. My team can focus on patients instead of phones.",
          name: "Katarzyna Wiśniewska",
          role: "Owner",
          company: "Physio Studio",
          initials: "KW",
        },
      ],
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "How much does automation implementation cost?",
          answer:
            "Setup starts from 4,000 PLN for the Starter plan. Monthly subscription from 699 PLN. We offer a free consultation to estimate your project.",
        },
        {
          question: "How long does implementation take?",
          answer:
            "Typical implementation takes 7-14 days. Simple automations can be launched in 48 hours. From contact to working system: 2-3 weeks.",
        },
        {
          question: "Is patient data secure?",
          answer:
            "Yes. We use TLS 1.3, AES-256 encryption. We are fully GDPR compliant. We sign a DPA with every client. Zero Data Retention option available.",
        },
        {
          question: "Does it work with my current system?",
          answer:
            "We integrate with Google Workspace, Microsoft 365, and most popular tools. You don't need to change your current systems.",
        },
        {
          question: "Do I need technical knowledge?",
          answer:
            "No. We configure everything for you. After implementation, you get a simple interface (Google Sheets) and 1-hour training.",
        },
        {
          question: "What if a patient prefers to call?",
          answer:
            "No problem! The automation system works alongside traditional channels. Patients can still call - you just also have a 24/7 option.",
        },
        {
          question: "Can I cancel anytime?",
          answer:
            "Yes. No long-term contracts. You can cancel with one month's notice. We export your data upon request.",
        },
        {
          question: "Does the system speak Polish?",
          answer:
            "Of course! The system is fully localized. The AI chatbot conducts natural conversations in Polish, understanding colloquial language and context.",
        },
        {
          question: "What are the API and SMS costs?",
          answer:
            "In maintenance plans, all API costs are included. You don't pay separately for WhatsApp, Telegram, or email messages.",
        },
        {
          question: "What if something stops working?",
          answer:
            "We offer maintenance packages with 24/7 monitoring. Most issues are resolved before you notice them. In case of failure, we respond within an hour.",
        },
      ],
    },
    ctaFinal: {
      title: "Ready for More Time and More Revenue",
      subtitle:
        "Book a free consultation. We'll show you how it works in 60 minutes.",
      primaryCta: "Book a demo",
      secondaryCta: "See case study",
      badges: {
        free: "Free consultation",
        noObligation: "No obligation",
        rodo: "GDPR-compliant",
      },
    },
    contact: {
      title: "Let's Talk About Automation",
      subtitle:
        "Book a free consultation. We'll show you how to save time and money.",
      form: {
        name: "Full name",
        email: "Email",
        phone: "Phone",
        company: "Practice name",
        message: "Message",
        submit: "Send message",
      },
      info: {
        email: "Email",
        phone: "Phone",
        response: "We respond within 24h",
      },
    },
    footer: {
      description:
        "We automate processes in medical practices and beauty salons so you can focus on patients.",
      links: {
        company: "Company",
        services: "Services",
        resources: "Resources",
      },
      copyright: "All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
    },
  },
};

export type Language = "pl" | "en";
export type Translations = typeof translations;
