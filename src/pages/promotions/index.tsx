import { getPromotionsData } from '@/api/getPromotionsData';
import { CommonHero } from '@/components';
import { Loading } from '@/components/layout/Loading';
import { useQuery } from '@tanstack/react-query';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function StockPage() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const currentLang = router.locale;
  const { isPending, error, data } = useQuery({
    queryKey: ['promotionsPage'],
    queryFn: () => getPromotionsData({ lang: currentLang }),
  });

  if (isPending) return <Loading />;
  if (error) return 'An error has occurred: ' + error.message;
  return (
    <main className='flex min-h-screen flex-col items-center justify-start'>
      <CommonHero
        showSearch={false}
        title={t('promotions')}
        breadcrumbs={[
          { href: '/', text: t('main') },
          { href: '/promotions', text: t('promotions') },
        ]}
        t={t}
      />
      {data.data.map((promotion) => (
        <div
          key={promotion.id}
          className='flex flex-col gap-8 items-center my-16'
        >
          <Image
            className='lg:w-[700px] lg:px-10'
            src={promotion.imagePath}
            alt='promotions image'
            width={1000}
            height={500}
          />
          <Link
            href={`/promotions/${promotion.id}`}
            className='py-3 px-6 text-white text-center rounded-none bg-primary border-none hover:underline lg:px-3 lg:py-1'
          >
            {t('readMore')}
          </Link>
        </div>
      ))}
    </main>
  );
}
