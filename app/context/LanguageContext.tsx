"use client";

import { usePathname } from "next/navigation";

// "ru" kept for the dormant /ru tree — reachable only by direct URL
export type Lang = "en" | "ru" | "et";

// Derive language from URL: /et/... → "et", /ru/... → "ru", everything else → "en"
export function useLang(): Lang {
  const pathname = usePathname();
  if (pathname.startsWith("/et")) return "et";
  if (pathname.startsWith("/ru")) return "ru";
  return "en";
}
