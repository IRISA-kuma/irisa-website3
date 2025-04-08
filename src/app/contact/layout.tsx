// /contact/layout.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CONTACT | IRISA",
  description: "IRISA株式会社へのお問い合わせはこちらから。お気軽にご連絡ください。",
  keywords: "IRISA お問い合わせ,イリサ お問い合わせ, 点検AI Agent 導入相談,  資料請求, 提携のご相談, 自治体向けデモ, 技術サポート, 問い合わせフォーム, 連絡先",
  alternates: {
    canonical: "https://www.irisa-robot.com/contact",
  }
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}