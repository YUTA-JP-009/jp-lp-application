'use client';

import { motion } from 'framer-motion';

export default function SolutionSection() {
  return (
    <section id="demo" className="py-20 bg-gradient-to-br from-blue-50 to-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            その業務、
            <span className="text-blue-600">Webフォームなら</span>
            <br />
            すべて自動化できます。
          </h2>
          <p className="text-xl text-gray-600 mt-6">
            出展社様はスマホで選択するだけ。
            <br />
            御社は集まったデータをCSVでダウンロードするだけ。
          </p>
        </motion.div>

        {/* Demo Images Placeholder */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Form Screen */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-blue-200"
            >
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
                <h3 className="text-white font-bold text-lg">フォーム画面</h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-2">出展社名</p>
                  <div className="bg-white border-2 border-gray-200 rounded px-3 py-2">
                    <span className="text-gray-400">株式会社サンプル</span>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-2">小間番号</p>
                  <div className="bg-white border-2 border-gray-200 rounded px-3 py-2">
                    <span className="text-gray-400">A-123</span>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-2">レンタル品選択</p>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <div className="w-4 h-4 border-2 border-blue-600 bg-blue-600 rounded mr-2"></div>
                      <span className="text-gray-700">テーブル (1,800mm)</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 border-2 border-blue-600 bg-blue-600 rounded mr-2"></div>
                      <span className="text-gray-700">椅子 (パイプ椅子)</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 border-2 border-gray-300 rounded mr-2"></div>
                      <span className="text-gray-400">照明器具</span>
                    </div>
                  </div>
                </div>
                <div className="pt-4">
                  <div className="bg-blue-600 text-white text-center py-3 rounded-lg font-semibold">
                    送信する
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Detail Input Screen */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-blue-200"
            >
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
                <h3 className="text-white font-bold text-lg">詳細入力画面</h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-2">搬入希望時間</p>
                  <div className="bg-white border-2 border-gray-200 rounded px-3 py-2">
                    <span className="text-gray-400">9:00 - 12:00</span>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-2">設置場所</p>
                  <div className="bg-white border-2 border-gray-200 rounded px-3 py-2">
                    <span className="text-gray-400">ブース内左側</span>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-2">備考</p>
                  <div className="bg-white border-2 border-gray-200 rounded px-3 py-2 h-20">
                    <span className="text-gray-400 text-sm">電源コードは10m...</span>
                  </div>
                </div>
                <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4">
                  <p className="text-sm font-semibold text-blue-900">✓ 自動確認メール送信</p>
                  <p className="text-xs text-blue-700 mt-1">yuta@example.com</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">こんなに便利になります</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-3">📱</div>
                <h4 className="font-semibold mb-2">スマホで完結</h4>
                <p className="text-sm text-blue-100">いつでもどこでも注文可能</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">📊</div>
                <h4 className="font-semibold mb-2">自動集計</h4>
                <p className="text-sm text-blue-100">CSVダウンロードですぐ使える</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">✅</div>
                <h4 className="font-semibold mb-2">ミスゼロ</h4>
                <p className="text-sm text-blue-100">転記ミス・トラブルなし</p>
              </div>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-center mt-12"
          >
            <a
              href="#contact"
              className="inline-block px-10 py-5 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-lg font-bold rounded-lg hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              実際の動くデモを見る（準備中）
            </a>
            <p className="text-sm text-gray-600 mt-4">
              ※ 現在デモ環境を準備しています。お問い合わせいただければ個別にご案内いたします。
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
