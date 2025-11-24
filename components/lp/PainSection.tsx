'use client';

import { motion } from 'framer-motion';

const pains = [
  {
    icon: '📠',
    title: 'FAXの文字が潰れて読めない…',
    description: '手書きの文字判読に時間がかかり、確認電話で業務が中断される',
  },
  {
    icon: '⌨️',
    title: '注文内容をExcelに打ち直す作業で、また残業…',
    description: 'FAXや電話の内容を手入力。転記ミスのリスクと膨大な時間ロス',
  },
  {
    icon: '❌',
    title: '言った言わないのトラブルで、現場が混乱…',
    description: '電話注文の記録が曖昧で、後からトラブルに発展することも',
  },
];

export default function PainSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            こんなお悩み
            <span className="text-blue-600">ありませんか？</span>
          </h2>
          <p className="text-xl text-gray-600">
            展示会シーズンになると、こんな課題に直面していませんか？
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pains.map((pain, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              className="bg-white rounded-2xl p-8 shadow-lg border-2 border-red-100"
            >
              <div className="text-6xl mb-6">{pain.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                {pain.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {pain.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-red-50 border-2 border-red-200 rounded-2xl px-8 py-6 max-w-3xl">
            <p className="text-lg text-gray-800 leading-relaxed">
              <span className="font-bold text-red-600">IT専任者がいない</span>から、システム化は
              <span className="font-bold text-red-600">「高い」「難しい」「導入が面倒」</span>
              <br />
              …そう思い込んでいませんか？
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
