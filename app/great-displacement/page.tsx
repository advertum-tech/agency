import type { Metadata } from "next";
import ArticleContent from "./ArticleContent";

export const metadata: Metadata = {
  title: "Великое вытеснение — ИИ и следующие пятьдесят лет",
  description:
    "К 2035 году самым высокооплачиваемым работником в вашем городе будет не программист. Это будет электрик. Эссе Дидье Баклена о будущем труда, денег и человечности.",
};

export default function GreatDisplacement() {
  return <ArticleContent />;
}
