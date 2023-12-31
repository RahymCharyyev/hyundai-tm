import { getNewsDetailsData } from '@/api/getHistoryPageData';
import { Loading } from '@/layout/Loading';
import { CommonHero } from '@/shared/ui/CommonHero';
import { DetailedNews } from '@/widgets/history/news/DetailedNews';
import { useQuery } from '@tanstack/react-query';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';

export default function DetailedNewsPage() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const { id } = router.query;

  const { isPending, error, data } = useQuery({
    queryKey: ['historyPage', Number(id)],
    queryFn: () => getNewsDetailsData(Number(id)),
  });

  if (isPending) return <Loading />;
  if (error) return 'An error has occurred: ' + error.message;

  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <CommonHero
        showSearch={false}
        title={t('news')}
        breadcrumbs={[
          { href: '/', text: t('main') },
          { href: '/history', text: t('hyundaiHistory') },
          { href: '/history', text: t('news') },
          { href: '/history', text: `${data.data.title}` },
        ]}
        t={t}
      />
      <div className="my-10">{data && <DetailedNews t={t} detailedNews={data} />}</div>
    </main>
  );
}
