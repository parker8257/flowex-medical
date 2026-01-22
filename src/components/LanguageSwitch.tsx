"use client";

import { useLanguage } from "@/context/LanguageContext";
import { type Language } from "@/config/site";

export default function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 bg-[#1a1a1a] rounded-lg p-1">
      {(["pl", "en"] as Language[]).map((lang) => (
        <button
          key={lang}
          onClick={() => setLanguage(lang)}
          className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-200 cursor-pointer ${
            language === lang
              ? "bg-[#ff214f] text-white"
              : "text-[#a1a1a1] hover:text-white"
          }`}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
