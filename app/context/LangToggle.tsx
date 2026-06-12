"use client";

import { useRouter, usePathname } from "next/navigation";
import { useLang } from "@/app/context/LanguageContext";

// Круглые мини-флаги; rounded-full на <svg> работает как clip
const FlagEN = () => (
  <svg viewBox="0 0 20 20" width="14" height="14" className="rounded-full shrink-0" aria-hidden="true">
    <rect width="20" height="20" fill="#012169" />
    <path d="M0 0 L20 20 M20 0 L0 20" stroke="#fff" strokeWidth="4" />
    <path d="M0 0 L20 20 M20 0 L0 20" stroke="#C8102E" strokeWidth="1.6" />
    <path d="M10 0 V20 M0 10 H20" stroke="#fff" strokeWidth="6" />
    <path d="M10 0 V20 M0 10 H20" stroke="#C8102E" strokeWidth="3" />
  </svg>
);

const FlagET = () => (
  <svg viewBox="0 0 20 20" width="14" height="14" className="rounded-full shrink-0" aria-hidden="true">
    <rect width="20" height="6.67" y="0" fill="#0072CE" />
    <rect width="20" height="6.67" y="6.67" fill="#000000" />
    <rect width="20" height="6.66" y="13.34" fill="#ffffff" />
    <circle cx="10" cy="10" r="9.5" fill="none" stroke="rgba(0,0,0,0.15)" strokeWidth="1" />
  </svg>
);

export default function LangToggle({ className }: { className?: string }) {
  const lang = useLang();
  const pathname = usePathname();
  const router = useRouter();

  const active: React.CSSProperties = {
    backgroundColor: "#111827",
    color: "#ffffff",
    border: "none",
    cursor: "pointer",
  };

  const inactive: React.CSSProperties = {
    backgroundColor: "#f3f4f6",
    color: "#6b7280",
    border: "none",
    cursor: "pointer",
  };

  function switchTo(targetLang: "en" | "et") {
    if (targetLang === lang) return;
    // Persist choice in cookie — middleware will use it on next request
    document.cookie = `lang=${targetLang}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`;
    const base = pathname.replace(/^\/(et|ru)(?=\/|$)/, "") || "/";
    if (targetLang === "et") {
      router.push(`/et${base === "/" ? "" : base}`);
    } else {
      router.push(base);
    }
  }

  return (
    <div className={`flex gap-1 text-xs ${className ?? ""}`}>
      <button
        onClick={() => switchTo("en")}
        style={lang === "en" ? active : inactive}
        className="rounded-l-full px-4 py-1.5 transition-colors inline-flex items-center gap-1.5"
      >
        <FlagEN />
        EN
      </button>
      <button
        onClick={() => switchTo("et")}
        style={lang === "et" ? active : inactive}
        className="rounded-r-full px-4 py-1.5 transition-colors inline-flex items-center gap-1.5"
      >
        <FlagET />
        ET
      </button>
      {/* RU выключен — дерево /ru осталось в коде, доступно только по прямой ссылке
      <button
        onClick={() => switchTo("ru")}
        style={lang === "ru" ? active : inactive}
        className="rounded-r-full px-4 py-1.5 transition-colors"
      >
        RU
      </button>
      */}
    </div>
  );
}
