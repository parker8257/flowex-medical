export const siteConfig = {
  name: "FlowEx",
  description: {
    pl: "Automatyzacja procesów biznesowych dla firm",
    en: "Business Process Automation for Companies",
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
      title: "Automatyzacja procesów biznesowych",
      subtitle:
        "Więcej czasu na rozwój firmy. Mniej czasu na powtarzalne zadania. Wdrażamy inteligentne rozwiązania, które pracują 24/7.",
      cta: "Umów konsultację",
      ctaSecondary: "Zobacz jak działamy",
      stats: {
        clients: "Zadowolonych klientów",
        hours: "Zaoszczędzonych godzin",
        satisfaction: "Satysfakcji",
      },
    },
    services: {
      title: "Co automatyzujemy?",
      subtitle:
        "Kompleksowe rozwiązania dla każdego obszaru Twojej firmy",
      categories: {
        title: "Obszary automatyzacji",
        items: [
          {
            title: "Marketing",
            description:
              "Automatyczne kampanie, lead nurturing, social media posting",
            icon: "megaphone",
          },
          {
            title: "Sprzedaż",
            description:
              "CRM automation, follow-upy, pipeline management",
            icon: "trendingUp",
          },
          {
            title: "Obsługa klienta",
            description:
              "Chatboty AI, ticketing, automatyczne odpowiedzi",
            icon: "headphones",
          },
          {
            title: "HR i rekrutacja",
            description:
              "Onboarding, screening CV, zarządzanie urlopami",
            icon: "users",
          },
          {
            title: "Finanse",
            description:
              "Fakturowanie, księgowość, raportowanie finansowe",
            icon: "calculator",
          },
          {
            title: "Administracja",
            description:
              "Dokumenty, email management, workflow approval",
            icon: "fileText",
          },
        ],
      },
      industries: {
        title: "Branże, które wspieramy",
        items: [
          {
            title: "Medical & Beauty",
            description:
              "Rezerwacje 24/7, przypomnienia, zbieranie opinii",
            icon: "heart",
          },
          {
            title: "E-commerce",
            description:
              "Zarządzanie zamówieniami, inventory, obsługa zwrotów",
            icon: "shoppingCart",
          },
          {
            title: "SaaS & Tech",
            description:
              "Onboarding użytkowników, billing, customer success",
            icon: "code",
          },
          {
            title: "Usługi profesjonalne",
            description:
              "Kancelarie, agencje, konsulting - workflow i dokumenty",
            icon: "briefcase",
          },
        ],
      },
    },
    howWeWork: {
      title: "Jak działamy?",
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
    benefits: {
      title: "Korzyści z automatyzacji",
      subtitle: "Konkretne wyniki, które osiągają nasi klienci",
      items: [
        {
          value: "-87%",
          label: "Czasu na administrację",
          description: "Mniej powtarzalnych zadań",
        },
        {
          value: "+47%",
          label: "Wzrost wydajności",
          description: "Więcej zrealizowanych projektów",
        },
        {
          value: "24/7",
          label: "Dostępność systemów",
          description: "Automatyzacja nigdy nie śpi",
        },
        {
          value: "0%",
          label: "No-show po wdrożeniu",
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
    faq: {
      title: "Często zadawane pytania",
      items: [
        {
          question: "Ile kosztuje wdrożenie automatyzacji?",
          answer:
            "Koszty zależą od zakresu projektu. Podstawowe automatyzacje zaczynają się od 2000 PLN. Oferujemy darmową konsultację, podczas której wycenimy Twój projekt.",
        },
        {
          question: "Jak długo trwa wdrożenie?",
          answer:
            "Typowe wdrożenie trwa 7-14 dni. Proste automatyzacje możemy uruchomić nawet w 48 godzin. Skomplikowane projekty enterprise mogą trwać 4-6 tygodni.",
        },
        {
          question: "Czy dane są bezpieczne?",
          answer:
            "Tak. Stosujemy szyfrowanie TLS 1.3, AES-256. Jesteśmy w pełni zgodni z RODO/GDPR. Podpisujemy DPA z każdym klientem.",
        },
        {
          question: "Z jakimi narzędziami się integrujecie?",
          answer:
            "Integrujemy się z większością popularnych narzędzi: Google Workspace, Microsoft 365, Slack, CRM-y, systemy księgowe, e-commerce i wiele innych.",
        },
        {
          question: "Czy muszę znać się na technice?",
          answer:
            "Nie. Wszystko konfigurujemy za Ciebie. Po wdrożeniu otrzymujesz prosty interface i szkolenie. Nie musisz znać się na programowaniu.",
        },
        {
          question: "Co jeśli coś przestanie działać?",
          answer:
            "Oferujemy pakiety maintenance z monitoringiem 24/7. Większość problemów rozwiązujemy zanim je zauważysz. W razie awarii reagujemy w ciągu godziny.",
        },
      ],
    },
    contact: {
      title: "Porozmawiajmy o automatyzacji",
      subtitle:
        "Umów darmową konsultację. Pokażemy jak możesz zaoszczędzić czas i pieniądze.",
      form: {
        name: "Imię i nazwisko",
        email: "Email",
        phone: "Telefon",
        company: "Nazwa firmy",
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
        "Automatyzujemy procesy biznesowe, żebyś mógł skupić się na tym, co naprawdę ważne.",
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
      title: "Business Process Automation",
      subtitle:
        "More time for business growth. Less time on repetitive tasks. We implement intelligent solutions that work 24/7.",
      cta: "Book a consultation",
      ctaSecondary: "See how we work",
      stats: {
        clients: "Happy clients",
        hours: "Hours saved",
        satisfaction: "Satisfaction",
      },
    },
    services: {
      title: "What do we automate?",
      subtitle: "Comprehensive solutions for every area of your business",
      categories: {
        title: "Automation Areas",
        items: [
          {
            title: "Marketing",
            description:
              "Automated campaigns, lead nurturing, social media posting",
            icon: "megaphone",
          },
          {
            title: "Sales",
            description: "CRM automation, follow-ups, pipeline management",
            icon: "trendingUp",
          },
          {
            title: "Customer Service",
            description: "AI chatbots, ticketing, automated responses",
            icon: "headphones",
          },
          {
            title: "HR & Recruitment",
            description: "Onboarding, CV screening, leave management",
            icon: "users",
          },
          {
            title: "Finance",
            description: "Invoicing, accounting, financial reporting",
            icon: "calculator",
          },
          {
            title: "Administration",
            description: "Documents, email management, workflow approval",
            icon: "fileText",
          },
        ],
      },
      industries: {
        title: "Industries We Support",
        items: [
          {
            title: "Medical & Beauty",
            description: "24/7 bookings, reminders, review collection",
            icon: "heart",
          },
          {
            title: "E-commerce",
            description: "Order management, inventory, returns handling",
            icon: "shoppingCart",
          },
          {
            title: "SaaS & Tech",
            description: "User onboarding, billing, customer success",
            icon: "code",
          },
          {
            title: "Professional Services",
            description: "Law firms, agencies, consulting - workflow & documents",
            icon: "briefcase",
          },
        ],
      },
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
          label: "Productivity increase",
          description: "More projects completed",
        },
        {
          value: "24/7",
          label: "System availability",
          description: "Automation never sleeps",
        },
        {
          value: "0%",
          label: "No-show after implementation",
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
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "How much does automation implementation cost?",
          answer:
            "Costs depend on the project scope. Basic automations start from 500 EUR. We offer a free consultation to estimate your project.",
        },
        {
          question: "How long does implementation take?",
          answer:
            "Typical implementation takes 7-14 days. Simple automations can be launched in 48 hours. Complex enterprise projects may take 4-6 weeks.",
        },
        {
          question: "Is my data secure?",
          answer:
            "Yes. We use TLS 1.3, AES-256 encryption. We are fully GDPR compliant. We sign a DPA with every client.",
        },
        {
          question: "What tools do you integrate with?",
          answer:
            "We integrate with most popular tools: Google Workspace, Microsoft 365, Slack, CRMs, accounting systems, e-commerce and many more.",
        },
        {
          question: "Do I need technical knowledge?",
          answer:
            "No. We configure everything for you. After implementation, you get a simple interface and training. No programming knowledge required.",
        },
        {
          question: "What if something stops working?",
          answer:
            "We offer maintenance packages with 24/7 monitoring. Most issues are resolved before you notice them. In case of failure, we respond within an hour.",
        },
      ],
    },
    contact: {
      title: "Let's talk about automation",
      subtitle:
        "Book a free consultation. We'll show you how to save time and money.",
      form: {
        name: "Full name",
        email: "Email",
        phone: "Phone",
        company: "Company name",
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
        "We automate business processes so you can focus on what really matters.",
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
