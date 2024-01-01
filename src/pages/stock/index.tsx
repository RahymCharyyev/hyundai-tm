import { stock } from '@/fakeData/stock';
import { CommonHero } from '@/shared/ui/CommonHero';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import Link from 'next/link';

export default function StockPage() {
  const { t } = useTranslation('common');
  stock;

  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <CommonHero
        showSearch={false}
        title={t('stock')}
        breadcrumbs={[
          { href: '/', text: t('main') },
          { href: '/stock', text: t('stock') },
        ]}
        t={t}
      />
      {stock.map((stock) => (
        <div key={stock.id} className="flex flex-col gap-8 items-center my-16">
          <Image src={stock.imagePath} alt="stock image" width={1000} height={500} />
          <Link
            href={`/stock/${stock.id}`}
            className="py-3 px-6 text-white text-center rounded-none bg-primary border-none hover:underline"
          >
            Подробнее
          </Link>
        </div>
      ))}
    </main>
  );
}
