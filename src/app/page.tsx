'use client';

import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="font-serif">
      {/* Hero Section */}
      <section
        className="h-screen bg-cover bg-center flex flex-col items-center justify-center relative"
        style={{ 
          backgroundImage: 'url(/images/blackback.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <motion.div
          className="z-10 text-center px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-7xl md:text-8xl font-extrabold text-white drop-shadow-lg mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            IRISA株式会社
          </motion.h1>
        </motion.div>
      </section>

      {/* Company Introduction */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-3xl md:text-4xl mb-6 relative inline-block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            会社情報
          </motion.h2>
          <motion.p
            className="text-black text-left mb-10 max-w-2xl mx-auto text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            style={{ lineHeight: "1.8" }}
          >
            熊本大学発ベンチャーとして、ロボットとAIを活用したインフラ管理の自動化に取り組んでいます。
          </motion.p>

          {/* Company Info Table */}
          <motion.div
            className="max-w-md mx-auto overflow-x-auto mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <table className="w-full bg-white border border-gray-200 text-left">
              <tbody>
                <tr className="border-b">
                  <th className="px-4 py-3 font-medium bg-gray-100 whitespace-nowrap">会社名</th>
                  <td className="px-4 py-3">IRISA株式会社</td>
                </tr>
                <tr className="border-b">
                  <th className="px-4 py-3 font-medium bg-gray-100 whitespace-nowrap">設立日</th>
                  <td className="px-4 py-3">2024年8月26日</td>
                </tr>
                <tr className="border-b">
                  <th className="px-4 py-3 font-medium bg-gray-100 whitespace-nowrap">事業内容</th>
                  <td className="px-4 py-3">土木用のAIロボットの開発</td>
                </tr>
                <tr className="border-b">
                  <th className="px-4 py-3 font-medium bg-gray-100 whitespace-nowrap">代表取締役</th>
                  <td className="px-4 py-3">福塚大和</td>
                </tr>
                <tr className="border-b">
                  <th className="px-4 py-3 font-medium bg-gray-100 whitespace-nowrap">主要株主</th>
                  <td className="px-4 py-3">EastVentures等</td>
                </tr>
                <tr>
                  <th className="px-4 py-3 font-medium bg-gray-100 whitespace-nowrap">その他</th>
                  <td className="px-4 py-3">熊本大学認定ベンチャー</td>
                </tr>
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50 relative">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-3xl md:text-4xl mb-6 relative inline-block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            ミッション
          </motion.h2>

          {/* Tagline */}
          <motion.p
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-12 mx-auto leading-snug bg-gradient-to-r text-black"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            議会とロボットを接続する
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-3xl md:text-4xl mb-6 relative inline-block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            お問い合わせ
          </motion.h2>
          <motion.div
            className="max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <a 
              href="mailto:yamato.fukutsuka@irisa-robot.com" 
              className="text-blue-600 hover:text-blue-800 text-xl font-medium"
            >
              yamato.fukutsuka@irisa-robot.com
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer with Facebook Link */}
      <footer className="py-8 bg-gray-100 text-center">
        <a
          href="https://www.facebook.com/yamatofukutsuka"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800"
        >
          代表のFacebookはこちら
        </a>
      </footer>
    </main>
  );
}
