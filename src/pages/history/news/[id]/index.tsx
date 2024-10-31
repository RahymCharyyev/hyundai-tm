import { getNewsDetailsData } from '@/api/getHistoryPageData';
import { CommonHero } from '@/components';
import { DetailedNews } from '@/components/history/DetailedNews';
import { Loading } from '@/components/layout/Loading';
import { useQuery } from '@tanstack/react-query';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';

export default function DetailedNewsPage() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const currentLang = router.locale;
  const { id } = router.query;

  const { isPending, error, data } = useQuery({
    queryKey: ['historyPage', Number(id)],
    queryFn: () =>
      getNewsDetailsData({
        lang: currentLang,
        id: Number(id),
      }),
  });

  if (isPending) return <Loading />;
  if (error) return 'An error has occurred: ' + error.message;

  return (
    <main className='flex min-h-screen flex-col items-center justify-start'>
      <CommonHero
        showSearch={false}
        title={t('news')}
        breadcrumbs={[
          { href: '/history', text: t('hyundaiHistory') },
          { href: '/history/news', text: t('news') },
          { href: `/history/news/${data.data.id}`, text: `${data.data.title}` },
        ]}
        t={t}
      />
      <div className='my-10'>
        {data && <DetailedNews t={t} detailedNews={data} />}
      </div>
    </main>
  );
}
