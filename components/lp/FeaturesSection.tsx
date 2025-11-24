'use client';

import { motion } from 'framer-motion';

const features = [
  {
    icon: '🎯',
    title: '丸投げOK（IT知識不要）',
    description: '面倒な設定は一切不要。現在お使いの申込用紙（PDF/Excel）をいただく・ヒアリングするだけで作成します。',
    details: [
      '専門知識は一切不要',
      '既存の申込用紙を送るだけ',
      '設定・構築は全て弊社で対応',
    ],
  },
  {
    icon: '🏢',
    title: 'イベント業界特化',
    description: '会期、ブース番号、搬入出希望時間など、業界特有の項目も標準対応。',
    details: [
      '展示会特有の項目に対応',
      '小間番号・会期管理',
      '搬入出時間の指定',
    ],
  },
  {
    icon: '⚙️',
    title: '柔軟なカスタマイズ',
    description: '在庫連動、必須項目の制御、自動返信メールなど、御社の運用に合わせて調整可能。',
    details: [
      '在庫状況との連動',
      '自動返信メール設定',
      '必須項目の柔軟な制御',
    ],
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-blue-600">3つの特徴</span>で
            <br />
            安心して導入できます
          </h2>
          <p className="text-xl text-gray-600 mt-6">
            業界特化だからこそ実現できる、使いやすさと柔軟性
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.2)' }}
              className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg border-2 border-blue-100"
            >
              <div className="text-6xl mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {feature.description}
              </p>
              <div className="space-y-2">
                {feature.details.map((detail, i) => (
                  <div key={i} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm text-gray-700">{detail}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6 text-center">さらに、こんなメリットも</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="text-3xl mr-4">💰</div>
                <div>
                  <h4 className="font-semibold mb-1">コスト削減</h4>
                  <p className="text-sm text-blue-100">人件費・通信費・印刷費を大幅カット</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-3xl mr-4">⚡</div>
                <div>
                  <h4 className="font-semibold mb-1">スピード対応</h4>
                  <p className="text-sm text-blue-100">最短3日で納品可能</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-3xl mr-4">📈</div>
                <div>
                  <h4 className="font-semibold mb-1">データ活用</h4>
                  <p className="text-sm text-blue-100">集計データで次回の改善に活用</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-3xl mr-4">🌍</div>
                <div>
                  <h4 className="font-semibold mb-1">ペーパーレス</h4>
                  <p className="text-sm text-blue-100">環境負荷低減とSDGs対応</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
