'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'ヒアリング/資料送付',
    description: '今の申込用紙を送ってください',
    details: 'PDF、Excel、紙の用紙の写真など、現在お使いの申込書をお送りいただくだけ。簡単なヒアリングで御社の運用を把握します。',
    icon: '📋',
  },
  {
    number: '02',
    title: 'デモ作成',
    description: '弊社にてフォームを作成します',
    details: 'いただいた申込用紙をもとに、Webフォームを構築。最短3日でデモ版をご提示します。',
    icon: '⚙️',
  },
  {
    number: '03',
    title: 'ご確認・納品',
    description: '動作確認後、御社専用URLを発行します',
    details: 'デモ版で動作・項目をご確認いただき、問題なければ本番用URLを発行。すぐにご利用開始いただけます。',
    icon: '🚀',
  },
];

export default function ProcessSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-blue-600">3ステップ</span>で
            <br />
            すぐに導入できます
          </h2>
          <p className="text-xl text-gray-600 mt-6">
            最短3日で御社専用のWebフォームが完成
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="mb-12 last:mb-0"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Number & Icon */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-xl">
                      {step.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold border-4 border-white">
                      {step.number}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-4">
                    {step.description}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {step.details}
                  </p>
                </div>
              </div>

              {/* Arrow */}
              {index < steps.length - 1 && (
                <div className="flex justify-center my-6">
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, delay: index * 0.3 }}
                    className="text-blue-400 text-4xl"
                  >
                    ↓
                  </motion.div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="inline-block bg-blue-50 border-2 border-blue-200 rounded-2xl px-8 py-6">
            <p className="text-lg text-gray-800 leading-relaxed">
              <span className="font-bold text-blue-600">最短3日で納品可能</span>
              <br />
              お急ぎの案件もご相談ください
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
