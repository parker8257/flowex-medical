export const siteConfig = {
  name: "FlowEx",
  description: {
    pl: "Automatyzacja procesów dla gabinetów medycznych i salonów beauty",
    en: "Process Automation for Medical Practices and Beauty Salons",
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
      pricing: "Cennik",
      faq: "FAQ",
      contact: "Kontakt",
    },
    hero: {
      badge: "Specjalizacja: Medical & Beauty",
      title: "Automatyzacja Rezerwacji i Administracji dla Gabinetów Medycznych",
      subtitle:
        "Więcej czasu na pacjentów. Mniej czasu na telefony. 24/7 dostępność. 0% no-show.",
      cta: "Umów prezentację",
      ctaSecondary: "Zobacz demo",
      stats: {
        clients: "Gabinetów",
        visits: "Wizyt/miesiąc",
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
      badge: "Rozwiązanie",
      title: "Medical Practice Automation PRO",
      subtitle: "Twoja cyfrowa recepcja, która pracuje 24/7",
      modules: [
        {
          title: "Rezerwacje 24/7",
          description:
            "Pacjenci mogą rezerwować wizyty o każdej porze przez WhatsApp, Telegram lub Messenger. AI rozumie język naturalny.",
          features: ["WhatsApp", "Telegram", "Messenger", "AI Chat"],
        },
        {
          title: "Inteligentne Przypomnienia",
          description:
            "Automatyczne przypomnienia 24h przed wizytą. Drastyczna redukcja no-show z 20% do 0%.",
          features: ["SMS", "WhatsApp", "Email", "Personalizacja"],
        },
        {
          title: "Zbieranie Opinii",
          description:
            "Automatyczna prośba o opinię po wizycie. Link do Google Maps. Wzrost opinii o 300%.",
          features: ["Google Reviews", "Automatyzacja", "Feedback"],
        },
        {
          title: "Zarządzanie Fakturami",
          description:
            "AI ekstrakcja danych z faktur PDF. Automatyczna kategoryzacja i archiwizacja. Inbox zero.",
          features: ["OCR", "Kategoryzacja", "Raportowanie"],
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
          duration: "30 min",
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
          value: "+47%",
          label: "Wzrost wizyt",
          description: "Dzięki dostępności 24/7",
        },
        {
          value: "24/7",
          label: "Dostępność rezerwacji",
          description: "Nawet o 23:00 w niedzielę",
        },
        {
          value: "0%",
          label: "No-show",
          description: "Inteligentne przypomnienia",
        },
      ],
    },
    caseStudy: {
      title: "Case Study: FizjOdnova",
      subtitle: "+47% wizyt w 2 miesiące",
      description:
        "Gabinet fizjoterapii w Warszawie borykał się z problemem no-show i brakiem czasu na administrację. Wdrożyliśmy kompleksowy system automatyzacji.",
      quote:
        "Pierwsze 2 tygodnie byłam sceptyczna. Teraz nie wyobrażam sobie pracy bez tego systemu. Klienci piszą o 23:00 i dostają odpowiedź w 30 sekund. To game-changer.",
      author: "Właścicielka FizjOdnova",
      metrics: [
        { label: "Rezerwacje/msc", before: "150", after: "220", change: "+47%" },
        { label: "No-show", before: "20%", after: "0%", change: "-100%" },
        { label: "Czas administracji", before: "15h/tyg", after: "2h/tyg", change: "-87%" },
        { label: "Opinie Google", before: "12", after: "48", change: "+300%" },
      ],
      cta: "Chcę takie wyniki",
    },
    pricing: {
      title: "Przejrzyste Ceny",
      subtitle: "Żadnych ukrytych kosztów. Wybierz plan dopasowany do Twojego gabinetu.",
      setup: "Setup",
      popular: "Najpopularniejszy",
      plans: [
        {
          name: "Starter",
          description: "Dla małych gabinetów",
          setupPrice: "4,000 PLN",
          price: "699 PLN",
          period: "/msc",
          features: [
            "Rezerwacje 24/7 (1 platforma)",
            "Inteligentne przypomnienia",
            "System feedbacku",
            "Google Calendar sync",
            "Podstawowe wsparcie",
          ],
          cta: "Zacznij teraz",
        },
        {
          name: "Professional",
          description: "Dla rozwijających się klinik",
          setupPrice: "5,000 PLN",
          price: "1,299 PLN",
          period: "/msc",
          bonus: "Pierwszy miesiąc gratis!",
          features: [
            "Wszystko ze Starter",
            "Multi-Platform (WhatsApp + Telegram + Messenger)",
            "Reaktywacja nieaktywnych pacjentów",
            "Zarządzanie fakturami",
            "Klasyfikacja emaili",
            "Priorytetowe wsparcie",
          ],
          cta: "Najlepszy wybór",
        },
        {
          name: "Enterprise",
          description: "Dla dużych klinik",
          price: "Custom",
          features: [
            "Wszystko z Professional",
            "Instagram Content Generator",
            "Custom integracje",
            "Dedykowany opiekun",
            "SLA gwarancja",
            "Szkolenia on-site",
          ],
          cta: "Umów konsultację",
        },
      ],
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
        "Umów darmową konsultację. Pokażemy Ci jak to działa w 30 minut.",
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
      pricing: "Pricing",
      faq: "FAQ",
      contact: "Contact",
    },
    hero: {
      badge: "Specialization: Medical & Beauty",
      title: "Booking & Admin Automation for Medical Practices",
      subtitle:
        "More time for patients. Less time on phones. 24/7 availability. 0% no-show.",
      cta: "Book a demo",
      ctaSecondary: "Watch demo",
      stats: {
        clients: "Clinics",
        visits: "Visits/month",
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
      badge: "Solution",
      title: "Medical Practice Automation PRO",
      subtitle: "Your digital receptionist that works 24/7",
      modules: [
        {
          title: "24/7 Bookings",
          description:
            "Patients can book appointments anytime via WhatsApp, Telegram, or Messenger. AI understands natural language.",
          features: ["WhatsApp", "Telegram", "Messenger", "AI Chat"],
        },
        {
          title: "Smart Reminders",
          description:
            "Automatic reminders 24h before appointments. Dramatic no-show reduction from 20% to 0%.",
          features: ["SMS", "WhatsApp", "Email", "Personalization"],
        },
        {
          title: "Review Collection",
          description:
            "Automatic review request after visit. Link to Google Maps. 300% increase in reviews.",
          features: ["Google Reviews", "Automation", "Feedback"],
        },
        {
          title: "Invoice Management",
          description:
            "AI extraction of data from PDF invoices. Automatic categorization and archiving. Inbox zero.",
          features: ["OCR", "Categorization", "Reporting"],
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
          duration: "30 min",
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
          value: "+47%",
          label: "Visit increase",
          description: "Thanks to 24/7 availability",
        },
        {
          value: "24/7",
          label: "Booking availability",
          description: "Even at 11 PM on Sunday",
        },
        {
          value: "0%",
          label: "No-show",
          description: "Smart reminders",
        },
      ],
    },
    caseStudy: {
      title: "Case Study: FizjOdnova",
      subtitle: "+47% appointments in 2 months",
      description:
        "A physiotherapy clinic in Warsaw struggled with no-shows and lack of time for administration. We implemented a comprehensive automation system.",
      quote:
        "For the first 2 weeks I was skeptical. Now I can't imagine working without this system. Clients message at 11 PM and get a response in 30 seconds. It's a game-changer.",
      author: "Owner of FizjOdnova",
      metrics: [
        { label: "Bookings/month", before: "150", after: "220", change: "+47%" },
        { label: "No-show", before: "20%", after: "0%", change: "-100%" },
        { label: "Admin time", before: "15h/week", after: "2h/week", change: "-87%" },
        { label: "Google reviews", before: "12", after: "48", change: "+300%" },
      ],
      cta: "I want these results",
    },
    pricing: {
      title: "Transparent Pricing",
      subtitle: "No hidden costs. Choose a plan that fits your practice.",
      setup: "Setup",
      popular: "Most Popular",
      plans: [
        {
          name: "Starter",
          description: "For small practices",
          setupPrice: "4,000 PLN",
          price: "699 PLN",
          period: "/mo",
          features: [
            "24/7 Bookings (1 platform)",
            "Smart reminders",
            "Feedback system",
            "Google Calendar sync",
            "Basic support",
          ],
          cta: "Get started",
        },
        {
          name: "Professional",
          description: "For growing clinics",
          setupPrice: "5,000 PLN",
          price: "1,299 PLN",
          period: "/mo",
          bonus: "First month free!",
          features: [
            "Everything in Starter",
            "Multi-Platform (WhatsApp + Telegram + Messenger)",
            "Inactive patient reactivation",
            "Invoice management",
            "Email classification",
            "Priority support",
          ],
          cta: "Best choice",
        },
        {
          name: "Enterprise",
          description: "For large clinics",
          price: "Custom",
          features: [
            "Everything in Professional",
            "Instagram Content Generator",
            "Custom integrations",
            "Dedicated manager",
            "SLA guarantee",
            "On-site training",
          ],
          cta: "Book consultation",
        },
      ],
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
        "Book a free consultation. We'll show you how it works in 30 minutes.",
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
