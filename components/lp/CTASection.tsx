'use client';

import { motion } from 'framer-motion';

export default function CTASection() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)',
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            まずは今のFAX用紙が、
            <br />
            <span className="text-blue-300">どんなWebフォームになるか</span>
            <br />
            見てみませんか？
          </h2>

          <p className="text-xl text-blue-100 mb-12 leading-relaxed">
            無料サンプル作成・相談を受け付けております
            <br />
            お気軽にお問い合わせください
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:yuta.sakamoto@jyunpushinsha.com?subject=レンタルフォーム作成代行について&body=以下の内容でお問い合わせいたします。%0D%0A%0D%0A【会社名】%0D%0A%0D%0A【ご担当者名】%0D%0A%0D%0A【メールアドレス】%0D%0A%0D%0A【お問い合わせ内容】%0D%0A"
              className="inline-block px-10 py-5 bg-white text-blue-900 text-lg font-bold rounded-lg shadow-2xl hover:shadow-blue-400/50 transition-all duration-300"
            >
              📧 無料サンプル作成・相談を申し込む
            </motion.a>
          </div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">お問い合わせ先</h3>
            <div className="space-y-4 text-left max-w-md mx-auto">
              <div className="flex items-start">
                <div className="text-2xl mr-4">🏢</div>
                <div className="text-white">
                  <p className="font-semibold">会社名</p>
                  <p className="text-blue-100">株式会社順風新社</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-2xl mr-4">📧</div>
                <div className="text-white">
                  <p className="font-semibold">メールアドレス</p>
                  <a
                    href="mailto:yuta.sakamoto@jyunpushinsha.com"
                    className="text-blue-300 hover:text-blue-200 underline"
                  >
                    yuta.sakamoto@jyunpushinsha.com
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t-2 border-white/20">
              <p className="text-blue-100 text-sm leading-relaxed">
                <span className="font-bold text-white">ご相談の際に</span>お伝えいただきたいこと
                <br />
                ・現在お使いの申込用紙（PDF/Excel/写真など）
                <br />
                ・年間のイベント開催数
                <br />
                ・ご希望の納期
              </p>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-blue-200 text-sm mt-8"
          >
            ※ お問い合わせいただいた内容は、弊社の個人情報保護方針に基づき適切に管理いたします。
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
