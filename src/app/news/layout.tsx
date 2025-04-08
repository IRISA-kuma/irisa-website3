// /news/layout.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NEWS | IRISA",
  description: "IRISA株式会社の最新ニュースやプレスリリース情報をお届けします。橋梁点検AIに関する最新情報をご覧ください。",
  keywords: "IRISA ニュース, イリサ ニュース, インフラ点検 最新情報, 点検AI Agent 開発状況, 橋梁点検 技術革新, プレスリリース, メディア掲載, イベント情報, 自治体連携, 実績紹介, ",
  alternates: {
    canonical: "https://www.irisa-robot.com/news",
  }
};

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}