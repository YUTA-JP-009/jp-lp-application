import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '展示会レンタル受注フォーム作成代行｜株式会社順風新社',
  description: '展示会・イベント什器レンタルのFAX受注をWeb化。今の申込用紙を送るだけの「丸投げ作成代行」。業務効率化とペーパーレスを実現します。',
  openGraph: {
    title: '展示会レンタル受注フォーム作成代行｜株式会社順風新社',
    description: '展示会・イベント什器レンタルのFAX受注をWeb化。今の申込用紙を送るだけの「丸投げ作成代行」。業務効率化とペーパーレスを実現します。',
    type: 'website',
    url: 'https://jyunpushinsha.com/lp/application',
  },
};

export default function ApplicationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
