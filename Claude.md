# 株式会社順風新社 レンタルフォーム作成代行LP 実装記録

## プロジェクト概要
- **会社名**: 株式会社順風新社
- **ミッション**: テクノロジーで働く人を幸せにする
- **サービス**: イベント什器レンタル申込フォーム作成代行サービス
- **ターゲット**: 展示会・イベント業界のレンタル企業（受付担当者・決裁者）
- **目的**: メール営業からのリード獲得（返信率10%目標）
- **メインLP**: https://jyunpushinsha.com/lp/application
- **ルートリダイレクト**: https://jyunpushinsha.com/ → /lp/application（301リダイレクト）

## ターゲット・ペルソナ
- **ターゲット企業**: イベント・展示会への物品レンタル会社（飯田電機工業、アズ・シーン、ヤマザキ工業など）
- **ターゲット担当者**: 受付担当者 および その上長（決裁者）
- **現状の課題**:
  - 展示会ごとの大量のFAX・電話注文の処理に追われている
  - 手書き文字の判読不能、転記ミス、トラブル
  - Excelへの手入力作業による残業
- **インサイト**: システム化したいが「高い」「難しい」「導入の手間が面倒」と思い込んでいる

## 提供サービス・強み
- **サービス名**: 順風新社 レンタルフォーム作成代行
- **提供形態**: 「丸投げ型（BPO）」— 今のFAX用紙/Excelを送るだけでWebフォームを構築
- **提供価値**:
  - Before: FAXの山、電話対応、転記作業、入力ミス
  - After: URLを送るだけ、スマホで完結、自動集計（CSV出力）、ミス・トラブル・残業ゼロ
- **安心材料**: 業界特有の商習慣（会期設定、小間番号、オプション備品など）に対応

## 技術スタック
- **フレームワーク**: Next.js 16.0.1 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS v4
- **アニメーション**: Framer Motion
- **フォーム管理**: React Hook Form
- **メール送信**: Resend
- **デプロイ**: Vercel
- **ドメイン**: jyunpushinsha.com

## CLI環境
以下のCLIがセットアップ済みで、Claude Code経由で操作可能：
- **Vercel CLI**: `vercel` コマンドでデプロイ、環境変数設定、ログ確認などが可能
- **GitHub CLI**: `gh` コマンドでPR作成、Issue管理、リポジトリ操作などが可能
- **Google Cloud CLI**: `gcloud` コマンドでGCPリソースの操作が可能

## LP構成・セクション

### 1. ヒーローエリア (Hero)
- **キャッチコピー**: 「展示会レンタルの受注業務、まだFAXと電話で消耗していませんか？」
- **サブコピー**: 今の申込用紙を送るだけ。御社専用のWeb受注フォームを最短●日で作成します。
- **ビジュアル**:
  - 左側：FAX用紙の山に埋もれる担当者のイラスト/写真
  - 右側：すっきりしたタブレット/PCの管理画面（Afterの世界）
- **CTA**: 「デモフォームを見てみる（登録不要）」

### 2. 共感・課題提起セクション (Pain)
- **見出し**: こんなお悩みありませんか？
- **項目**:
  - FAXの文字が潰れて読めない…確認電話に追われる
  - 注文内容をExcelに打ち直す作業で、また残業…
  - 言った言わないのトラブルで、現場が混乱…

### 3. 解決策・デモ提示セクション (Solution)
- **見出し**: その業務、Webフォームならすべて自動化できます。
- **デモ画像**: image_76cadf.png（フォーム画面）、image_76cb04.png（詳細入力画面）
- **動くデモへのリンク**: 実際に触れるデモ画面
- **説明**: 出展社様はスマホで選択するだけ。御社は集まったデータをCSVでダウンロードするだけ。

### 4. サービスの特徴・強み (Why Us)
- **特徴1**: 丸投げOK（IT知識不要）
- **特徴2**: イベント業界特化（会期、ブース番号、搬入出希望時間など）
- **特徴3**: 柔軟なカスタマイズ（在庫連動、必須項目の制御、自動返信メールなど）

### 5. 導入フロー (Process)
1. ヒアリング/資料送付: 今の申込用紙を送ってください
2. デモ作成: 弊社にてフォームを作成します
3. ご確認・納品: 動作確認後、御社専用URLを発行します

### 6. 会社概要・信頼性 (Trust)
- 株式会社順風新社
- 「我々もイベント運営に関わる中で、同じ課題を感じて開発しました」

### 7. CTA・フッター
- **オファー**: まずは今のFAX用紙が、どんなWebフォームになるか見てみませんか？
- **アクション**:
  - 【メイン】無料サンプル作成・相談を申し込む
  - 【サブ】デモ画面を操作する

## 実装機能

### 1. コンポーネント構成
```
components/
├── lp/
│   ├── HeroSection.tsx          # ヒーローエリア
│   ├── PainSection.tsx          # 課題提起セクション
│   ├── SolutionSection.tsx      # 解決策・デモ提示
│   ├── FeaturesSection.tsx      # サービスの特徴・強み
│   ├── ProcessSection.tsx       # 導入フロー
│   ├── TrustSection.tsx         # 会社概要・信頼性
│   ├── CTASection.tsx           # CTA
│   └── LPFooter.tsx             # フッター
```

### 2. API
- **POST /api/contact**: お問い合わせメール送信
  - Resendを使用
  - 送信先: yuta.sakamoto@jyunpushinsha.com
  - HTMLメールテンプレート付き

### 3. SEO対策
- **title**: 展示会レンタル受注フォーム作成代行｜株式会社順風新社
- **description**: 展示会・イベント什器レンタルのFAX受注をWeb化。今の申込用紙を送るだけの「丸投げ作成代行」。業務効率化とペーパーレスを実現します。
- 構造化データ（JSON-LD）による組織情報
- sitemap.xml 自動生成
- robots.txt 自動生成
- Open Graph対応

### 4. レスポンシブデザイン
- PC、タブレット、スマートフォン対応
- Tailwind CSSでブレークポイント管理

### 5. アニメーション
- Framer Motionによる滑らかなアニメーション
- スクロール連動エフェクト
- ホバーエフェクト

## 環境変数（.env.local）

```env
RESEND_API_KEY=your-resend-api-key-here
EMAIL_FROM=yuta.sakamoto@jyunpushinsha.com
EMAIL_TO=yuta.sakamoto@jyunpushinsha.com
```

**重要**:
- .env.localはGitに含まれません（.gitignore設定済み）
- APIキーは絶対にGitにコミットしないこと
- Resendダッシュボードで新しいAPIキーを発行して使用

## Vercel環境変数設定

Vercelダッシュボード → Settings → Environment Variables に以下を設定：
- `RESEND_API_KEY`
- `EMAIL_FROM`
- `EMAIL_TO`

すべての環境（Production, Preview, Development）にチェック

## デプロイ手順

### 初回デプロイ
```bash
# 1. GitHubにプッシュ
git add .
git commit -m "commit message"
git push

# 2. Vercelでインポート
# https://vercel.com でGitHubリポジトリをインポート

# 3. 環境変数を設定

# 4. カスタムドメイン設定
# jyunpushinsha.com を追加
# DNSレコードを設定
```

### 更新デプロイ
```bash
git add .
git commit -m "update message"
git push
# → Vercelが自動デプロイ
```

## ローカル開発

```bash
# 開発サーバー起動
npm run dev
# → http://localhost:3000

# ビルドテスト
npm run build

# 本番環境プレビュー
npm run start
```

## SEO設定（Google Search Console）

1. **プロパティ登録**: https://jyunpushinsha.com
2. **サイトマップ送信**: https://jyunpushinsha.com/sitemap.xml
3. **インデックス登録リクエスト**: トップページをリクエスト済み
4. **検索キーワード**: 「順風新社」で上位表示を目指す

## Resend設定

- **ドメイン認証**: jyunpushinsha.com （完了）
- **送信元**: yuta.sakamoto@jyunpushinsha.com
- **APIキー**: Vercel環境変数に設定済み

## ファイル構成

```
jp-lp-application/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # メール送信API
│   ├── lp/
│   │   └── application/
│   │       ├── page.tsx          # LPメインページ
│   │       └── layout.tsx        # LP用メタデータ
│   ├── layout.tsx                # ルートレイアウト
│   ├── page.tsx                  # ルートページ（/lp/applicationへリダイレクト）
│   ├── globals.css               # グローバルスタイル
│   ├── sitemap.ts                # サイトマップ生成
│   └── robots.ts                 # robots.txt生成
├── components/
│   └── lp/
│       ├── HeroSection.tsx       # ヒーローエリア
│       ├── PainSection.tsx       # 課題提起セクション
│       ├── SolutionSection.tsx   # 解決策・デモ提示
│       ├── FeaturesSection.tsx   # サービスの特徴
│       ├── ProcessSection.tsx    # 導入フロー
│       ├── TrustSection.tsx      # 会社概要
│       ├── CTASection.tsx        # CTA
│       └── LPFooter.tsx          # フッター
├── public/
│   └── images/
│       ├── demo-form.png         # デモフォーム画像
│       └── demo-detail.png       # デモ詳細画像
├── .env.local                    # 環境変数（Git除外）
├── package.json
└── Claude.md                     # このファイル
```

## 主要な実装ポイント

### 1. ルートリダイレクト
```typescript
// app/page.tsx
import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/lp/application');
}
```

### 2. LP用メタデータ
```typescript
// app/lp/application/layout.tsx
export const metadata: Metadata = {
  title: '展示会レンタル受注フォーム作成代行｜株式会社順風新社',
  description: '展示会・イベント什器レンタルのFAX受注をWeb化。今の申込用紙を送るだけの「丸投げ作成代行」。業務効率化とペーパーレスを実現します。',
  // ...
};
```

### 3. レスポンシブデザイン
- PC: 2カラムレイアウト、大きな画像
- スマホ: 1カラム、縦スタック、タップしやすいボタン
- Tailwind CSS: `md:`, `lg:` ブレークポイント使用

### 4. スムーズスクロール
```css
/* globals.css */
html {
  scroll-behavior: smooth;
}
```

## トラブルシューティング

### ビルドエラー: Resend API Key
**原因**: 環境変数がビルド時に読み込まれない
**解決**: Resendインスタンス化を関数内に移動（完了済み）

### サイトマップが表示されない
**原因**: Vercelのデプロイが必要
**解決**: 最新コードをpushして再デプロイ（完了済み）

## Git履歴

```bash
# 初回実装
git log --oneline
74ac1cb SEO対策強化: メタデータ更新と構造化データ追加
8cea385 Fix: Resendインスタンス化をビルド時エラー回避のため修正
77ace59 株式会社順風新社 公式HP 初回実装
```

## 今後のメンテナンス

### 定期確認項目
- [ ] Google Search Consoleでインデックス状況確認
- [ ] お問い合わせフォームのテスト送信
- [ ] Resend送信履歴の確認
- [ ] サイトのパフォーマンス測定（Lighthouse）

### 更新が必要な場合
1. ローカルで変更
2. `npm run build` でビルドテスト
3. GitHubにpush
4. Vercelで自動デプロイ確認

## 参考リンク

- **本番サイト**: https://jyunpushinsha.com
- **GitHub**: https://github.com/YUTA-JP-009/jp-lp-application
- **Vercel**: https://vercel.com/dashboard
- **Resend**: https://resend.com/emails
- **Google Search Console**: https://search.google.com/search-console

## 制作履歴

### 2025-11-24: LP制作開始
- プロジェクト名を `jp-lp-application` に変更
- LP要件定義書に基づき、Claude.md を更新
- ターゲット：展示会・イベント業界のレンタル企業
- 目的：メール営業からのリード獲得（返信率10%目標）

### 2025-11-02: 初回実装
- 株式会社順風新社 公式HP 初回実装
- SEO対策強化

---

**作成日**: 2025-11-02
**最終更新**: 2025-11-24
**開発環境**: VS Code + Claude Code
