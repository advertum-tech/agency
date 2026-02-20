import type { Metadata } from "next";
import ArticleContent from "./ArticleContent";

export const metadata: Metadata = {
  title:
    "Harness-инженерия: использование Codex в мире, где агенты — на первом месте",
  description:
    "Как команда OpenAI за пять месяцев построила продукт с нуля — миллион строк кода без единой строки, написанной вручную. Перевод Advertum.",
};

export default function HarnessEngineering() {
  return <ArticleContent />;
}
