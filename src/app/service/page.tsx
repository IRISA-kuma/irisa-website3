'use client';

import { motion } from 'framer-motion';

export default function Service() {
  // サービス情報（順序入れ替え）
  const services = [
    {
      img: '/images/AIAgent.png',
      title: 'AI橋梁点検サポートシステム「点検AI Agent」の開発・提供',
      desc: '専門的な知識や経験を持たない人でも、\nスマホで簡単かつ効率的に橋梁の健全性を評価できるシステムを提供します。\n人材不足や維持管理コストの増加に直面する\n自治体や管理者の負担を大幅に軽減します。',
      id: 'ai-agent'
    },
    {
      img: '/images/product.jpg',
      title: '長尺(20mクラス)車両搭載型ロボットアームの開発・提供',
      desc: 'ロボットとAIが、従来の熟練の技術者に依存した橋梁点検作業を自動化します。\nこれにより、点検コストの削減や、技術者不足といった課題の解決に貢献します。\n人材不足や維持管理コストの増加に直面する\n自治体や管理者の負担を大幅に軽減します。',
      id: 'ai-agent'
    },
  ];

  return (
    <main className="font-serif">
      {/* Hero Section */}
      <section
        className="h-screen bg-cover bg-center flex flex-col items-center justify-center relative"
        style={{ 
          backgroundImage: 'url(/images/SERVICE-min.jpg)',
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
            className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            SERVICE
          </motion.h1>
        </motion.div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 bg-white relative">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-white via-gray-200 to-white"></div>
        <div className="container mx-auto px-4 text-center">
          <motion.div
            className="text-xl md:text-2xl leading-relaxed mb-12 max-w-4xl mx-auto text-left"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="mb-4">老朽化、予算不足、担い手不足により、地域社会を支えるインフラの維持は、かつてない困難に直面しています。</p>
            <p className="mb-4">私たちは、AIと最先端のロボット技術を駆使し、橋梁点検をはじめとするインフラ維持管理の作業そのものを自動化・効率化するソリューションを開発・提供します。</p>
            <p className="mb-4">これにより、コストを抜本的に削減し、誰もが安全・安心に利用できる持続可能な社会基盤の実現に貢献します。</p>
          </motion.div>
        </div>
      </section>

      {/* Service Overview Section */}
      <section className="py-20 bg-gray-50 relative">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-50 via-gray-200 to-gray-50"></div>
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-3xl md:text-4xl mb-6 relative inline-block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="relative">
            ロボットとAIで支える、持続可能な地域インフラ
              <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gray-300"></span>
            </span>
          </motion.h2>
          
          <motion.h3
            className="text-xl mb-12 text-black"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            事業内容
          </motion.h3>
          
          <div className="flex flex-col max-w-3xl mx-auto gap-16">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                id={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <div className="w-full h-64 overflow-hidden rounded-lg shadow-md mb-6">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <h3 className="font-bold text-xl mb-4">{service.title}</h3>
                <p className="text-black max-w-2xl whitespace-pre-line">{service.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-16 max-w-3xl mx-auto text-black leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="mb-4">
            インフラの老朽化、技術者不足、自治体の財政難など、日本の地域社会はさまざまな課題を抱えています。 
            </p>
            <p className="mb-4">
            この課題を解決するには、誰もが簡単に低コストで高品質なインフラ管理を実現できる仕組みが必要です。 
            </p>
            <p>
            IRISAは、AI技術でその仕組みを実現し、安全で持続可能な地域づくりを支援します。
            </p>
          </motion.div>
        </div>
      </section>

      {/* AI Agent Detail Section */}
      <section className="py-20 bg-white relative">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-white via-gray-200 to-white"></div>
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-3xl md:text-4xl mb-12 relative inline-block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="relative">
            ロボットアームとAIによる次世代インフラ点検
              <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gray-200"></span>
            </span>
          </motion.h2>

          <div className="max-w-4xl mx-auto">
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="rounded-lg overflow-hidden shadow-md mb-8 bg-gray-100 p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <img 
                      src="/images/product_bridge.jpg" 
                      alt="ロボットアームによる橋梁点検イメージ図" 
                      className="w-full h-auto rounded-lg"
                    />
                    <p className="text-sm text-black text-center mt-2">ロボットアームによる橋梁点検イメージ図</p>
                  </div>
                  <div>
                    <img 
                      src="/images/product_road.jpg" 
                      alt="ロボットアームによる道路付属物点検イメージ図" 
                      className="w-full h-auto rounded-lg"
                    />
                    <p className="text-sm text-black text-center mt-2">ロボットアームによる道路付属物点検イメージ図</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-xl mb-4 text-center">長尺(20mクラス)車両搭載型ロボットアームについて</h3>
                <div className="space-y-4 text-left">
                  <p className="text-black leading-relaxed">
                  開発する長尺(20mクラス)車両搭載型ロボットアームは、AI技術を核とした次世代のインフラ点検システムです。AIが自律的にロボットアームを制御し、これまで人手と多大な時間を要した橋梁や道路付属物などの点検作業を効率的に自動化します。
                  </p>
                  <p className="text-black leading-relaxed">
                  アーム先端に搭載された高性能センサーヘッド(高解像度カメラ、LiDAR等)が、点検対象に安定して近接し、詳細なデータを取得します。収集されたデータはAIによって即座に解析され、ひび割れ・錆・漏水といった損傷を高精度かつ客観的に自動検出します。これにより、点検品質の高精度化・均一化を実現します。
                  </p>
                  <p className="text-black leading-relaxed">
                  現場作業の自動化・省人化により、従来の大人数での作業や高額な橋梁点検車、足場設置などが不要となり、点検に関わるトータルコストを大幅に削減します。また、危険箇所での作業をロボットが代替することで、作業員の安全確保にも大きく貢献します。
                  </p>
                  <p className="text-black leading-relaxed">
                  取得された点検データ（画像、センサー情報、損傷位置・種類・程度など）はデジタル情報として統合管理されます。これにより、点検結果の記録・報告書作成の自動化はもちろん、経年変化の追跡や劣化予測など、データに基づいた計画的かつ効率的なインフラ維持管理（予防保全）の実現を支援します。
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* フッターセクション */}
      <footer className="py-6 bg-white text-black text-center border-t border-gray-200">
        <div className="container mx-auto px-4">
          <p className="text-sm">© 2025 IRISA株式会社. All Rights Reserved.</p>
        </div>
      </footer>
    </main>
  );
}