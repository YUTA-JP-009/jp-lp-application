export default function LPFooter() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">株式会社順風新社</h3>
              <p className="text-blue-200 text-sm leading-relaxed">
                テクノロジーで働く人を幸せにする
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">サービス</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#demo" className="hover:text-blue-400 transition-colors">
                    デモフォーム
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-blue-400 transition-colors">
                    お問い合わせ
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-4">お問い合わせ</h4>
              <div className="text-sm text-gray-400 space-y-2">
                <p>
                  <a
                    href="mailto:yuta.sakamoto@jyunpushinsha.com"
                    className="hover:text-blue-400 transition-colors"
                  >
                    yuta.sakamoto@jyunpushinsha.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-8 border-t border-slate-800 text-center">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} 株式会社順風新社 All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
