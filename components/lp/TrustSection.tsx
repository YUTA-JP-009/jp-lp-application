'use client';

import { motion } from 'framer-motion';

export default function TrustSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              私たちについて
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-10 shadow-xl border-2 border-blue-100"
          >
            <div className="flex items-center justify-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                順
              </div>
            </div>

            <h3 className="text-3xl font-bold text-gray-900 text-center mb-6">
              株式会社順風新社
            </h3>

            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
              <p className="text-center text-xl font-semibold text-blue-700">
                テクノロジーで働く人を幸せにする
              </p>

              <div className="bg-white rounded-xl p-6 border-2 border-blue-100">
                <p className="mb-0">
                  我々もイベント運営に関わる中で、
                  <span className="font-bold text-blue-700">「FAXの山」「電話対応」「手入力作業」</span>
                  といった、同じ課題を感じていました。
                </p>
              </div>

              <p>
                「もっと効率的に、もっとスマートに業務を進められないか？」
                <br />
                そんな思いから、このサービスを開発しました。
              </p>

              <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 text-white">
                <p className="mb-2 font-semibold">
                  展示会・イベント業界の皆様の業務効率化を、
                  <br />
                  全力でサポートいたします。
                </p>
                <p className="text-sm text-blue-100 mb-0">
                  まずはお気軽にご相談ください。
                </p>
              </div>
            </div>

            <div className="mt-10 grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-white rounded-xl p-6 border-2 border-blue-100">
                <div className="text-3xl mb-2">🏢</div>
                <h4 className="font-bold text-gray-900 mb-1">業界特化</h4>
                <p className="text-sm text-gray-600">イベント業界の<br />商習慣を理解</p>
              </div>
              <div className="bg-white rounded-xl p-6 border-2 border-blue-100">
                <div className="text-3xl mb-2">⚡</div>
                <h4 className="font-bold text-gray-900 mb-1">スピード対応</h4>
                <p className="text-sm text-gray-600">最短3日で<br />納品可能</p>
              </div>
              <div className="bg-white rounded-xl p-6 border-2 border-blue-100">
                <div className="text-3xl mb-2">💬</div>
                <h4 className="font-bold text-gray-900 mb-1">丁寧なサポート</h4>
                <p className="text-sm text-gray-600">導入後も<br />しっかりサポート</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
