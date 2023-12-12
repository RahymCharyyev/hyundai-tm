import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

export default function Home() {
  const { t } = useTranslation('common');
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <h1>{t('title')}</h1>
      <div className="flex gap-2">
        <Link href="/" locale="ru">
          <h2>Ru</h2>
        </Link>
        <Link href="/" locale="tm">
          <h2>TM</h2>
        </Link>
      </div>
    </main>
  );
}
