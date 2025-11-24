export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-8">
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Coming Soon
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-300 mb-8">
          新しいコンテンツを準備中です
        </p>
        <a
          href="/lp/application"
          className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-lg font-semibold rounded-full hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300"
        >
          サービス紹介ページへ
        </a>
      </div>
    </main>
  );
}
