import { stock } from '@/fakeData/stock';
import { stockDetailed } from '@/fakeData/stockDetailed';
import { CommonHero } from '@/shared/ui/CommonHero';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import Link from 'next/link';

export default function DetailedStockPage() {
  const { t } = useTranslation('common');
  stockDetailed;

  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <CommonHero
        showSearch={false}
        title={t('stock')}
        breadcrumbs={[
          { href: '/stock', text: t('stock') },
          {
            href: `/stock/${stockDetailed.id}`,
            text: `${stockDetailed.title}`,
          },
        ]}
        t={t}
      />
      <div className="flex flex-col gap-8 items-center max-w-6xl my-16 2xl:max-w-4xl">
        <h1 className="font-bold text-4xl">{stockDetailed.title}</h1>
        <Image
          src={stockDetailed.imagePath}
          alt="stock image"
          width={1000}
          height={500}
        />
        <span>{stockDetailed.description}</span>
      </div>
    </main>
  );
}
