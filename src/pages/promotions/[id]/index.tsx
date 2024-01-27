import { getPromotionsDetailsData } from '@/api/getPromotionsData';
import { Loading } from '@/layout/Loading';
import { CommonHero } from '@/shared/ui/CommonHero';
import { useQuery } from '@tanstack/react-query';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function DetailedStockPage() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const { id } = router.query;
  const { isPending, error, data } = useQuery({
    queryKey: ['historyPage', Number(id)],
    queryFn: () => getPromotionsDetailsData(Number(id)),
  });

  if (isPending) return <Loading />;
  if (error) return 'An error has occurred: ' + error.message;

  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <CommonHero
        showSearch={false}
        title={t('promotions')}
        breadcrumbs={[
          { href: '/promotions', text: t('promotions') },
          {
            href: `/promotions/${data.id}`,
            text: `${data.title}`,
          },
        ]}
        t={t}
      />
      <div className="flex flex-col gap-8 items-center max-w-6xl my-16 2xl:max-w-4xl lg:!max-w-2xl lg:px-10 sm:!px-3">
        <h1 className="font-bold text-4xl lg:text-2xl">{data.title}</h1>
        <Image src={data.imagePath} alt="promotions image" width={1000} height={500} />
        <span className="lg:text-sm">{data.text}</span>
      </div>
    </main>
  );
}
