import type { Metadata } from "next";
import { Noto_Serif_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"; // 新しく作成するコンポーネント

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-serif-jp",
});

export const metadata: Metadata = {
  title: "IRISA | インフラ点検をもっと身近に",
  description: "IRISA株式会社は、誰もが簡単にインフラ点検を行える仕組みを構築し、地域の持続可能な未来づくりに貢献します。",
  keywords: "IRISA,IRISA株式会社,株式会社IRISA,イリサ,イリサ株式会社,株式会社イリサ,インフラ, 点検, 橋梁, メンテナンス, 自治体",
  icons: {
    icon: '/images/irisa-icon.png',
    apple: '/images/irisa-icon.png',
  },
  // canonicalタグを追加
  alternates: {
    canonical: "https://www.irisa-robot.com/",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSerifJP.variable} antialiased font-serif`}>
        <Header />
        
        {/* Main Content */}
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}