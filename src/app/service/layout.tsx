// /service/layout.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SERVICE | IRISA",
  description: "IRISA株式会社が提供するサービスのご紹介。",
  keywords: "IRISA サービス,イリサ サービス, 点検AI Agent, 橋梁点検事業, インフラ点検技術,  AI解析, 小規模橋梁点検, 自治体, インフラ維持管理, 点検効率化, 専門知識不要",
  alternates: {
    canonical: "https://www.irisa-robot.com/service",
  }
};

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}