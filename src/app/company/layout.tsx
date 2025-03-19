// /company/layout.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "COMPANY | IRISA",
  description: "株式会社IRISAの会社概要、ミッション、ビジョン、チームメンバーのご紹介。",
  keywords: "IRISA 会社概要, IRISA 企業情報, 会社沿革, ミッション, ビジョン, 福塚大和, チームメンバー",
  alternates: {
    canonical: "https://irisa.co.jp/company",
  }
};

export default function CompanyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}