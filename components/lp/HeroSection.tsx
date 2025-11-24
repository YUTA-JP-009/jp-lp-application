'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-slate-900 to-blue-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)',
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-6 border border-blue-400/30"
            >
              FAX・電話受注の課題を解決
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              展示会レンタルの受注業務、
              <br />
              <span className="text-blue-400">
                まだFAXと電話で
                <br />
                消耗していませんか？
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-gray-300 mb-8 leading-relaxed"
            >
              今の申込用紙を送るだけ。
              <br />
              御社専用のWeb受注フォームを<span className="text-blue-400 font-semibold">最短3日</span>で作成します。
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#demo"
                className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-lg font-semibold rounded-lg hover:from-blue-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-blue-500/50 text-center"
              >
                デモフォームを見てみる（登録不要）
              </a>
              <a
                href="#contact"
                className="inline-block px-8 py-4 bg-white/10 backdrop-blur-sm text-white text-lg font-semibold rounded-lg border-2 border-white/30 hover:bg-white/20 transition-all duration-300 text-center"
              >
                無料相談する
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Visual Comparison */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-1 gap-8">
              {/* Before: FAX */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-red-900/20 backdrop-blur-sm border-2 border-red-500/30 rounded-lg p-6"
              >
                <div className="flex items-center mb-4">
                  <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full mr-3">
                    BEFORE
                  </span>
                  <span className="text-white font-semibold">FAX・電話受注</span>
                </div>
                <div className="space-y-2 text-gray-300 text-sm">
                  <p>📠 判読不能な手書き文字</p>
                  <p>📞 確認電話に追われる</p>
                  <p>⌨️ Excel手入力で残業…</p>
                  <p>❌ 言った言わないのトラブル</p>
                </div>
              </motion.div>

              {/* Arrow Down */}
              <div className="flex justify-center">
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="text-blue-400 text-3xl"
                >
                  ↓
                </motion.div>
              </div>

              {/* After: Web Form */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-blue-900/20 backdrop-blur-sm border-2 border-blue-500/50 rounded-lg p-6"
              >
                <div className="flex items-center mb-4">
                  <span className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full mr-3">
                    AFTER
                  </span>
                  <span className="text-white font-semibold">Webフォーム</span>
                </div>
                <div className="space-y-2 text-gray-300 text-sm">
                  <p>📱 スマホで完結</p>
                  <p>📊 自動集計（CSV出力）</p>
                  <p>✅ 入力ミスゼロ</p>
                  <p>🎉 残業・トラブルゼロ</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/50"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
}
